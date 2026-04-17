(function() {
    const container = document.getElementById('stage-content');
    if (!container) return;

    // اختيار 20 كلمة مستهدفة لقصة حقيبة المهرج
    const words = [
        "businessman", "hurry", "airport", "meeting", "carousel", 
        "suitcase", "familiar", "suit", "zipper", "shirts", 
        "tutu", "clown", "wigs", "label", "performer", 
        "choice", "immediately", "confused", "exchange", "career"
    ];

    let remainingWords = [...words];
    let currentTargetId = null;

    const storyTitle = "The Wrong Suitcase";
    
    // محتوى القصة الثانية عشرة
    let storyContent = `
        Harry was a <span class="word-gap" data-word="businessman">?</span> who traveled a lot for his job. 
        He was always in a <span class="word-gap" data-word="hurry">?</span>, rushing from one <span class="word-gap" data-word="airport">?</span> to another. 
        Last Tuesday, he arrived in Paris for an important <span class="word-gap" data-word="meeting">?</span>. 
        He stood at the baggage <span class="word-gap" data-word="carousel">?</span>, waiting for his black <span class="word-gap" data-word="suitcase">?</span>.
        <br><br>
        He saw a bag that looked <span class="word-gap" data-word="familiar">?</span> and grabbed it. 
        At the hotel, he needed to change into his professional <span class="word-gap" data-word="suit">?</span>. 
        He pulled the <span class="word-gap" data-word="zipper">?</span> quickly, but he didn't see his white <span class="word-gap" data-word="shirts">?</span>. 
        Instead, he found a bright pink <span class="word-gap" data-word="tutu">?</span> and a pair of giant <span class="word-gap" data-word="clown">?</span> shoes and yellow <span class="word-gap" data-word="wigs">?</span>.
        <br><br>
        Harry looked at the <span class="word-gap" data-word="label">?</span>; the bag belonged to a <span class="word-gap" data-word="performer">?</span>. 
        Harry had no <span class="word-gap" data-word="choice">?</span>, so he called the airport <span class="word-gap" data-word="immediately">?</span>. 
        The staff told him that a very <span class="word-gap" data-word="confused">?</span> clown was holding Harry's bag.
        <br><br>
        They managed to <span class="word-gap" data-word="exchange">?</span> the bags just in time. 
        Harry learned a lesson: always use a ribbon so you don't accidentally steal a clown's <span class="word-gap" data-word="career">?</span>!
    `;

    container.innerHTML = ''; 
    container.style.cssText = `height:100%; width:100%; display:block; background:#f1f5f9; color:#1e293b; overflow-y:auto; padding:0; font-family: 'Segoe UI', sans-serif; scroll-behavior: smooth;`;

    container.innerHTML = `
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700;900&family=Outfit:wght@400;700&display=swap');
            
            #stage-content::-webkit-scrollbar { width: 10px; }
            #stage-content::-webkit-scrollbar-track { background: #f1f5f9; }
            #stage-content::-webkit-scrollbar-thumb { background: #3b82f6; border-radius: 5px; }

            .story-wrapper {
                max-width: 90%;
                margin: 60px auto;
                background: #ffffff;
                padding: 60px;
                border-radius: 24px;
                box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
                border: 1px solid #e2e8f0;
                border-top: 12px solid #3b82f6;
            }

            .story-title {
                color: #1e3a8a;
                text-align: center;
                font-size: 3.8rem;
                font-weight: 900;
                margin-bottom: 50px;
                font-family: 'Montserrat', sans-serif;
                text-transform: uppercase;
                letter-spacing: -1px;
            }

            .story-body {
                line-height: 1.8;
                font-size: 2.6rem;
                color: #334155;
                font-family: 'Outfit', sans-serif;
            }

            .word-gap {
                display: inline-block;
                min-width: 150px;
                border-bottom: 4px solid #3b82f6;
                text-align: center;
                color: #2563eb;
                cursor: pointer;
                transition: 0.3s;
                background: rgba(59, 130, 246, 0.05);
            }

            .word-gap.active-target {
                animation: scanBlue 1.2s infinite;
                background: rgba(59, 130, 246, 0.15);
            }

            @keyframes scanBlue {
                0% { border-bottom-color: #3b82f6; }
                50% { border-bottom-color: #ec4899; } /* تلميح للمهرج */
                100% { border-bottom-color: #3b82f6; }
            }

            .word-gap.filled {
                border-bottom: none;
                color: #ffffff;
                font-weight: 800;
                background: #3b82f6;
                padding: 0 15px;
                border-radius: 6px;
                animation: baggageDrop 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            }

            @keyframes baggageDrop {
                0% { transform: translateY(-30px); opacity: 0; }
                100% { transform: translateY(0); opacity: 1; }
            }

            #word-overlay {
                position: fixed;
                top: 0; left: 0; width: 100%; height: 100%;
                background: rgba(30, 41, 59, 0.98);
                display: none;
                flex-wrap: wrap;
                justify-content: center;
                align-content: center;
                gap: 15px;
                padding: 40px;
                z-index: 9999;
                backdrop-filter: blur(10px);
            }

            .choice-btn {
                background: #ffffff;
                color: #1e293b;
                padding: 18px 35px;
                font-size: 2.2rem;
                font-weight: 700;
                border-radius: 12px;
                cursor: pointer;
                border: 3px solid #3b82f6;
                font-family: 'Outfit', sans-serif;
                transition: 0.2s;
            }

            .choice-btn:hover { background: #ec4899; color: white; border-color: #db2777; transform: translateY(-5px); }
            .choice-btn.wrong { background: #ef4444 !important; color: white; border-color: #b91c1c; animation: shake 0.4s; }

            @keyframes shake {
                0%, 100% { transform: translateX(0); }
                25% { transform: translateX(-10px); }
                75% { transform: translateX(10px); }
            }

            .one-shot-label {
                background: #1e3a8a;
                color: white;
                padding: 5px 25px;
                border-radius: 6px;
                font-size: 1.2rem;
                font-weight: 900;
                display: inline-block;
                margin-bottom: 20px;
                text-transform: uppercase;
            }
        </style>

        <div id="word-overlay"></div>

        <div class="story-wrapper">
            <center>
                <div class="one-shot-label">BAGGAGE CLAIM • STORY 12</div>
                <h1 class="story-title">${storyTitle}</h1>
            </center>
            <div class="story-body">
                ${storyContent}
            </div>
        </div>
        <div style="height: 100px;"></div>
    `;

    const overlay = document.getElementById('word-overlay');
    const allGaps = document.querySelectorAll('.word-gap');

    const updateActiveGap = () => {
        allGaps.forEach(g => g.classList.remove('active-target'));
        const nextGap = Array.from(allGaps).find(g => !g.classList.contains('filled'));
        if (nextGap) nextGap.classList.add('active-target');
    };

    const openOverlay = (target) => {
        currentTargetId = target;
        overlay.innerHTML = '';
        const shuffled = [...remainingWords].sort(() => Math.random() - 0.5);
        shuffled.forEach(word => {
            const btn = document.createElement('button');
            btn.className = 'choice-btn';
            btn.innerText = word;
            btn.onclick = () => checkWord(word, btn);
            overlay.appendChild(btn);
        });
        overlay.style.display = 'flex';
    };

    const checkWord = (selectedWord, btnElement) => {
        const correctWord = currentTargetId.getAttribute('data-word');
        if (selectedWord.toLowerCase() === correctWord.toLowerCase()) {
            currentTargetId.innerText = correctWord;
            currentTargetId.classList.add('filled');
            overlay.style.display = 'none';
            remainingWords = remainingWords.filter(w => w !== selectedWord);
            updateActiveGap();
        } else {
            btnElement.classList.add('wrong');
            setTimeout(() => btnElement.classList.remove('wrong'), 400);
        }
    };

    allGaps.forEach(gap => {
        gap.onclick = () => openOverlay(gap);
    });

    document.onkeydown = (e) => {
        if (e.key === "Enter") {
            const nextGap = Array.from(allGaps).find(g => !g.classList.contains('filled'));
            if (nextGap && overlay.style.display !== 'flex') {
                openOverlay(nextGap);
            }
        }
        if (e.key === "Escape") overlay.style.display = 'none';
    };

    updateActiveGap();
})();