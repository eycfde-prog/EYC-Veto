(function() {
    const container = document.getElementById('stage-content');
    if (!container) return;

    // اختيار 20 كلمة مستهدفة لقصة الروبوت
    const words = [
        "clean", "mess", "advertisement", "automatically", "relaxed", 
        "impressed", "robot", "whirring", "garden", "herbal", 
        "squirrel", "rubbish", "chase", "dining", "chaos", 
        "curtains", "electronics", "strange", "spinning", "safer"
    ];

    let remainingWords = [...words];
    let currentTargetId = null;

    const storyTitle = "The Magic Vacuum Cleaner";
    
    // محتوى القصة الثامنة
    let storyContent = `
        Mrs. Higgins was a lady who loved a <span class="word-gap" data-word="clean">?</span> house. She hated dust and <span class="word-gap" data-word="mess">?</span>. 
        One day, she saw an <span class="word-gap" data-word="advertisement">?</span> for a "Super-Smart Robot Vacuum." 
        The man said it could clean the house <span class="word-gap" data-word="automatically">?</span> while the owner <span class="word-gap" data-word="relaxed">?</span>. 
        Mrs. Higgins was <span class="word-gap" data-word="impressed">?</span> and bought one immediately.
        <br><br>
        She brought the <span class="word-gap" data-word="robot">?</span> home and turned it on. 
        It started to move across the floor with a quiet <span class="word-gap" data-word="whirring">?</span> sound. 
        Mrs. Higgins decided to go to the <span class="word-gap" data-word="garden">?</span> to read a book and drink <span class="word-gap" data-word="herbal">?</span> tea.
        <br><br>
        While she was outside, a small <span class="word-gap" data-word="squirrel">?</span> ran into the kitchen. 
        The robot sensed it and decided it was <span class="word-gap" data-word="rubbish">?</span> that needed to be cleaned. 
        It began to <span class="word-gap" data-word="chase">?</span> the animal around the <span class="word-gap" data-word="dining">?</span> room. 
        In the <span class="word-gap" data-word="chaos">?</span>, the squirrel jumped onto the <span class="word-gap" data-word="curtains">?</span>.
        <br><br>
        The robot hit a vase, and water spilled over its <span class="word-gap" data-word="electronics">?</span>. 
        Suddenly, it started making <span class="word-gap" data-word="strange">?</span> noises. 
        Mrs. Higgins walked back inside and saw the robot <span class="word-gap" data-word="spinning">?</span> in circles, covered in mud. 
        She realized that doing the cleaning yourself is much <span class="word-gap" data-word="safer">?</span> than trusting a robot.
    `;

    container.innerHTML = ''; 
    container.style.cssText = `height:100%; width:100%; display:block; background:#0f172a; color:#f8fafc; overflow-y:auto; padding:0; font-family: 'Segoe UI', sans-serif; scroll-behavior: smooth;`;

    container.innerHTML = `
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@700;900&family=Outfit:wght@400;700&display=swap');
            
            #stage-content::-webkit-scrollbar { width: 10px; }
            #stage-content::-webkit-scrollbar-track { background: #0f172a; }
            #stage-content::-webkit-scrollbar-thumb { background: #38bdf8; border-radius: 5px; }

            .story-wrapper {
                max-width: 90%;
                margin: 60px auto;
                background: #1e293b;
                padding: 60px;
                border-radius: 30px;
                box-shadow: 0 0 40px rgba(56, 189, 248, 0.2);
                border: 2px solid #334155;
            }

            .story-title {
                color: #38bdf8;
                text-align: center;
                font-size: 3.8rem;
                font-weight: 900;
                margin-bottom: 50px;
                font-family: 'Orbitron', sans-serif;
                text-transform: uppercase;
                letter-spacing: 2px;
            }

            .story-body {
                line-height: 1.8;
                font-size: 2.6rem;
                color: #e2e8f0;
                font-family: 'Outfit', sans-serif;
            }

            .word-gap {
                display: inline-block;
                min-width: 150px;
                border-bottom: 4px solid #38bdf8;
                text-align: center;
                color: #7dd3fc;
                cursor: pointer;
                transition: 0.2s;
                background: rgba(56, 189, 248, 0.05);
            }

            .word-gap.active-target {
                animation: robotScan 1s infinite alternate;
                background: rgba(56, 189, 248, 0.2);
            }

            @keyframes robotScan {
                from { border-bottom-color: #38bdf8; box-shadow: 0 5px 15px rgba(56, 189, 248, 0.2); }
                to { border-bottom-color: #f0f9ff; box-shadow: 0 5px 25px rgba(56, 189, 248, 0.5); }
            }

            .word-gap.filled {
                border-bottom: none;
                color: #22d3ee;
                font-weight: 800;
                background: transparent;
                animation: powerOn 0.5s ease-out;
            }

            @keyframes powerOn {
                0% { filter: brightness(5); transform: scale(1.2); }
                100% { filter: brightness(1); transform: scale(1); }
            }

            #word-overlay {
                position: fixed;
                top: 0; left: 0; width: 100%; height: 100%;
                background: rgba(15, 23, 42, 0.98);
                display: none;
                flex-wrap: wrap;
                justify-content: center;
                align-content: center;
                gap: 20px;
                padding: 40px;
                z-index: 9999;
                backdrop-filter: blur(15px);
            }

            .choice-btn {
                background: #0f172a;
                color: #38bdf8;
                padding: 20px 40px;
                font-size: 2.4rem;
                font-weight: 700;
                border-radius: 12px;
                cursor: pointer;
                border: 2px solid #38bdf8;
                font-family: 'Orbitron', sans-serif;
                transition: 0.2s;
            }

            .choice-btn:hover { background: #38bdf8; color: #0f172a; transform: scale(1.1); }
            .choice-btn.wrong { background: #ef4444 !important; border-color: #b91c1c; color: white; animation: shake 0.4s; }

            @keyframes shake {
                0%, 100% { transform: translateX(0); }
                25% { transform: translateX(-10px); }
                75% { transform: translateX(10px); }
            }

            .one-shot-label {
                background: #0ea5e9;
                color: white;
                padding: 5px 25px;
                border-radius: 4px;
                font-size: 1.2rem;
                font-weight: 900;
                display: inline-block;
                margin-bottom: 20px;
                font-family: 'Orbitron', sans-serif;
            }
        </style>

        <div id="word-overlay"></div>

        <div class="story-wrapper">
            <center>
                <div class="one-shot-label">SYSTEM STATUS: ACTIVE • STORY 08</div>
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