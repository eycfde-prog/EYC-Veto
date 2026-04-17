(function() {
    const container = document.getElementById('stage-content');
    if (!container) return;

    // اختيار 20 كلمة مستهدفة لقصة حفل الزفاف الخاطئ
    const words = [
        "forgetful", "wedding", "countryside", "handsome", "suit", 
        "proud", "party", "gate", "expensive", "bride", 
        "flower", "surprised", "smile", "dinner", "hungry", 
        "speech", "confused", "recognize", "address", "embarrassed"
    ];

    let remainingWords = [...words];
    let currentTargetId = null;

    const storyTitle = "The Wrong Wedding";
    
    // محتوى القصة السابعة
    let storyContent = `
        Julian was a very <span class="word-gap" data-word="forgetful">?</span> man. 
        One Saturday, his cousin invited him to a big <span class="word-gap" data-word="wedding">?</span> at a beautiful house in the <span class="word-gap" data-word="countryside">?</span>. 
        Julian wanted to look <span class="word-gap" data-word="handsome">?</span>, so he wore a new black <span class="word-gap" data-word="suit">?</span>. 
        He felt very <span class="word-gap" data-word="proud">?</span> as he drove his car to the <span class="word-gap" data-word="party">?</span>.
        <br><br>
        He arrived at a large <span class="word-gap" data-word="gate">?</span> and saw many people wearing <span class="word-gap" data-word="expensive">?</span> clothes. 
        Julian didn't know anyone, but he even saw the <span class="word-gap" data-word="bride">?</span> and gave her a <span class="word-gap" data-word="flower">?</span>. 
        She looked <span class="word-gap" data-word="surprised">?</span>, but she said "Thank you" with a <span class="word-gap" data-word="smile">?</span>.
        <br><br>
        Later, everyone sat down for a big <span class="word-gap" data-word="dinner">?</span>. 
        Julian was very <span class="word-gap" data-word="hungry">?</span>, so he started eating. Then, a man stood up to give a <span class="word-gap" data-word="speech">?</span>. 
        He talked about a groom named "Peter." Julian was <span class="word-gap" data-word="confused">?</span> because his cousin’s name was "Mark." 
        He looked at the photos, but he did not <span class="word-gap" data-word="recognize">?</span> any of the faces.
        <br><br>
        Suddenly, Julian realized his mistake. He was at the wrong <span class="word-gap" data-word="address">?</span>! 
        He felt very <span class="word-gap" data-word="embarrassed">?</span>. He tried to leave the room quickly and ran to his car. 
        He finally arrived at Mark’s wedding just in time for the cake.
    `;

    container.innerHTML = ''; 
    container.style.cssText = `height:100%; width:100%; display:block; background:#fdfcf0; color:#1c1917; overflow-y:auto; padding:0; font-family: 'Segoe UI', sans-serif; scroll-behavior: smooth;`;

    container.innerHTML = `
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@700;900&family=Outfit:wght@400;700&display=swap');
            
            #stage-content::-webkit-scrollbar { width: 10px; }
            #stage-content::-webkit-scrollbar-track { background: #fdfcf0; }
            #stage-content::-webkit-scrollbar-thumb { background: #d4af37; border-radius: 5px; }

            .story-wrapper {
                max-width: 90%;
                margin: 60px auto;
                background: #ffffff;
                padding: 60px;
                border-radius: 4px; /* زوايا حادة لتعطي طابع رسمي (كارت دعوة) */
                box-shadow: 0 20px 40px rgba(0,0,0,0.1);
                border: 1px solid #e2e8f0;
                position: relative;
                overflow: hidden;
            }

            .story-wrapper::before {
                content: '';
                position: absolute;
                top: 0; left: 0; right: 0; height: 10px;
                background: linear-gradient(to right, #d4af37, #fef08a, #d4af37);
            }

            .story-title {
                color: #1c1917;
                text-align: center;
                font-size: 4rem;
                font-weight: 900;
                margin-bottom: 50px;
                font-family: 'Cinzel', serif;
                text-transform: uppercase;
                border-bottom: 2px solid #d4af37;
                display: inline-block;
                width: 100%;
                padding-bottom: 20px;
            }

            .story-body {
                line-height: 2;
                font-size: 2.7rem;
                color: #444;
                font-family: 'Outfit', sans-serif;
            }

            .word-gap {
                display: inline-block;
                min-width: 160px;
                border-bottom: 3px solid #d4af37;
                text-align: center;
                color: #b45309;
                cursor: pointer;
                transition: 0.2s;
                background: rgba(212, 175, 55, 0.05);
                font-weight: 700;
            }

            .word-gap.active-target {
                animation: weddingPulse 1.5s infinite;
                background: rgba(212, 175, 55, 0.15);
            }

            @keyframes weddingPulse {
                0% { border-bottom-width: 3px; }
                50% { border-bottom-width: 8px; border-bottom-color: #f59e0b; }
                100% { border-bottom-width: 3px; }
            }

            .word-gap.filled {
                border-bottom: none;
                color: #d4af37;
                font-weight: 900;
                background: transparent;
                animation: flowerPop 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            }

            @keyframes flowerPop {
                0% { transform: translateY(10px); opacity: 0; }
                100% { transform: translateY(0); opacity: 1; }
            }

            #word-overlay {
                position: fixed;
                top: 0; left: 0; width: 100%; height: 100%;
                background: rgba(28, 25, 23, 0.95);
                display: none;
                flex-wrap: wrap;
                justify-content: center;
                align-content: center;
                gap: 20px;
                padding: 40px;
                z-index: 9999;
                backdrop-filter: blur(10px);
            }

            .choice-btn {
                background: #ffffff;
                color: #1c1917;
                padding: 20px 45px;
                font-size: 2.5rem;
                font-weight: 700;
                border-radius: 0px;
                cursor: pointer;
                border: 4px solid #d4af37;
                font-family: 'Outfit', sans-serif;
                transition: 0.3s;
            }

            .choice-btn:hover { background: #d4af37; color: white; transform: scale(1.05); }
            .choice-btn.wrong { background: #ef4444 !important; border-color: #b91c1c; color: white; animation: shake 0.4s; }

            @keyframes shake {
                0%, 100% { transform: translateX(0); }
                25% { transform: translateX(-10px); }
                75% { transform: translateX(10px); }
            }

            .one-shot-label {
                font-family: 'Cinzel', serif;
                color: #d4af37;
                letter-spacing: 5px;
                font-size: 1.4rem;
                font-weight: 900;
                margin-bottom: 10px;
                display: block;
            }
        </style>

        <div id="word-overlay"></div>

        <div class="story-wrapper">
            <center>
                <span class="one-shot-label">VETO ONE-SHOT • STORY 07</span>
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