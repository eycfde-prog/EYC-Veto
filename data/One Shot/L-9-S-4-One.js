(function() {
    const container = document.getElementById('stage-content');
    if (!container) return;

    // اختيار 20 كلمة مستهدفة لقصة معرض الفن
    const words = [
        "modern", "anniversary", "gallery", "sculptures", "confused", 
        "bricks", "hall", "object", "crinkled", "texture", 
        "shattered", "elbow", "clatter", "manager", "realize", 
        "crimson", "owe", "sandwich", "cleaning", "labels"
    ];

    let remainingWords = [...words];
    let currentTargetId = null;

    const storyTitle = "The Art Gallery Incident";
    
    // محتوى القصة السادسة عشرة
    let storyContent = `
        Mr. Higgins was not a fan of <span class="word-gap" data-word="modern">?</span> art. 
        For their <span class="word-gap" data-word="anniversary">?</span>, his wife took him to a famous <span class="word-gap" data-word="gallery">?</span>. 
        The rooms were quiet and filled with strange <span class="word-gap" data-word="sculptures">?</span>. 
        He had a <span class="word-gap" data-word="confused">?</span> look when he saw a pile of <span class="word-gap" data-word="bricks">?</span> called "Deep Silence."
        <br><br>
        They entered a large <span class="word-gap" data-word="hall">?</span> and saw a small <span class="word-gap" data-word="object">?</span>. 
        It looked like a <span class="word-gap" data-word="crinkled">?</span> piece of silver paper. 
        "Look at the <span class="word-gap" data-word="texture">?</span>," someone whispered. "It represents <span class="word-gap" data-word="shattered">?</span> dreams."
        <br><br>
        Mr. Higgins leaned in and accidentally bumped his <span class="word-gap" data-word="elbow">?</span>. 
        The object fell with a loud <span class="word-gap" data-word="clatter">?</span>. 
        The gallery <span class="word-gap" data-word="manager">?</span> rushed over. 
        "Do you <span class="word-gap" data-word="realize">?</span> what you have done?" he cried.
        <br><br>
        Mr. Higgins turned <span class="word-gap" data-word="crimson">?</span> and asked, "How much do I <span class="word-gap" data-word="owe">?</span> you?" 
        The manager laughed. "That's not art, it's my <span class="word-gap" data-word="sandwich">?</span> wrapper! 
        I left it there while <span class="word-gap" data-word="cleaning">?</span>." 
        Susan laughed, but Mr. Higgins decided to only visit museums with clear <span class="word-gap" data-word="labels">?</span>.
    `;

    container.innerHTML = ''; 
    container.style.cssText = `height:100%; width:100%; display:block; background:#f8fafc; color:#0f172a; overflow-y:auto; padding:0; font-family: 'Segoe UI', sans-serif; scroll-behavior: smooth;`;

    container.innerHTML = `
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;700&family=Outfit:wght@400;700&display=swap');
            
            #stage-content::-webkit-scrollbar { width: 8px; }
            #stage-content::-webkit-scrollbar-track { background: #f8fafc; }
            #stage-content::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 4px; }

            .story-wrapper {
                max-width: 90%;
                margin: 60px auto;
                background: #ffffff;
                padding: 70px;
                border-radius: 4px;
                box-shadow: 0 4px 30px rgba(0, 0, 0, 0.05);
                border: 1px solid #e2e8f0;
                position: relative;
            }

            .story-title {
                color: #1e293b;
                text-align: center;
                font-size: 3.5rem;
                font-weight: 300;
                margin-bottom: 60px;
                font-family: 'Montserrat', sans-serif;
                text-transform: uppercase;
                letter-spacing: 10px;
                border-bottom: 1px solid #e2e8f0;
                padding-bottom: 20px;
            }

            .story-body {
                line-height: 2.1;
                font-size: 2.6rem;
                color: #334155;
                font-family: 'Outfit', sans-serif;
            }

            .word-gap {
                display: inline-block;
                min-width: 140px;
                border-bottom: 2px solid #94a3b8;
                text-align: center;
                color: #64748b;
                cursor: pointer;
                transition: 0.4s;
                padding: 0 5px;
            }

            .word-gap.active-target {
                animation: minimalFocus 1.5s infinite;
                background: rgba(226, 232, 240, 0.5);
            }

            @keyframes minimalFocus {
                0% { border-bottom-color: #94a3b8; }
                50% { border-bottom-color: #0f172a; transform: translateY(-2px); }
                100% { border-bottom-color: #94a3b8; }
            }

            .word-gap.filled {
                border-bottom: none;
                color: #0f172a;
                font-weight: 700;
                background: #f1f5f9;
                padding: 0 15px;
                animation: frameIn 0.6s cubic-bezier(0.23, 1, 0.32, 1);
            }

            @keyframes frameIn {
                0% { opacity: 0; transform: scale(0.95); filter: blur(5px); }
                100% { opacity: 1; transform: scale(1); filter: blur(0); }
            }

            #word-overlay {
                position: fixed;
                top: 0; left: 0; width: 100%; height: 100%;
                background: rgba(255, 255, 255, 0.98);
                display: none;
                flex-wrap: wrap;
                justify-content: center;
                align-content: center;
                gap: 20px;
                padding: 40px;
                z-index: 9999;
                backdrop-filter: blur(20px);
            }

            .choice-btn {
                background: #ffffff;
                color: #475569;
                padding: 15px 35px;
                font-size: 2.2rem;
                font-weight: 400;
                border-radius: 0;
                cursor: pointer;
                border: 1px solid #e2e8f0;
                font-family: 'Montserrat', sans-serif;
                transition: 0.3s;
            }

            .choice-btn:hover { border-color: #0f172a; color: #0f172a; background: #f8fafc; }
            .choice-btn.wrong { border-color: #dc2626 !important; color: #dc2626; animation: glitch 0.3s; }

            @keyframes glitch {
                0% { transform: translate(0); }
                20% { transform: translate(-5px, 5px); }
                40% { transform: translate(-5px, -5px); }
                60% { transform: translate(5px, 5px); }
                80% { transform: translate(5px, -5px); }
                100% { transform: translate(0); }
            }

            .one-shot-label {
                color: #94a3b8;
                font-size: 1rem;
                letter-spacing: 5px;
                font-weight: 700;
                margin-bottom: 10px;
                display: block;
            }
        </style>

        <div id="word-overlay"></div>

        <div class="story-wrapper">
            <center>
                <span class="one-shot-label">EXHIBITION 16 • ART & REALITY</span>
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