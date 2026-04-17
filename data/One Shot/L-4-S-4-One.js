(function() {
    const container = document.getElementById('stage-content');
    if (!container) return;

    // اختيار 20 كلمة مميزة من القائمة لقصة الماراثون
    const words = [
        "physical", "vending", "tracksuit", "fashionable", "crowd", 
        "pistol", "trapped", "charity", "sidewalk", "dense", 
        "optimistic", "exhausted", "spectator", "brilliant", "bakery", 
        "crimson", "volunteers", "lobster", "crustacean", "endurance"
    ];

    let remainingWords = [...words];
    let currentTargetId = null;

    const storyTitle = "The Accidental Marathon";
    
    // محتوى القصة السادسة
    let storyContent = `
        Timothy was the kind of person who avoided <span class="word-gap" data-word="physical">?</span> exertion at all costs. 
        His idea of a "long run" was walking from his desk to the <span class="word-gap" data-word="vending">?</span> machine. 
        One Sunday, while wearing his new <span class="word-gap" data-word="tracksuit">?</span>—which he only bought to look <span class="word-gap" data-word="fashionable">?</span>—he accidentally got caught in a massive <span class="word-gap" data-word="crowd">?</span>.
        <br><br>
        Before he realized what was happening, a loud <span class="word-gap" data-word="pistol">?</span> fired. 
        Timothy found himself <span class="word-gap" data-word="trapped">?</span> in the middle of the city's annual <span class="word-gap" data-word="charity">?</span> marathon. 
        He tried to push his way to the <span class="word-gap" data-word="sidewalk">?</span>, but the sea of runners was too <span class="word-gap" data-word="dense">?</span>. 
        "I'll just run to the next corner and slip away," he thought, feeling <span class="word-gap" data-word="optimistic">?</span>.
        <br><br>
        Five kilometers later, Timothy was <span class="word-gap" data-word="exhausted">?</span>. 
        Every time he tried to quit, a <span class="word-gap" data-word="spectator">?</span> would hand him water and shout, "You’re doing <span class="word-gap" data-word="brilliant">?</span>!" 
        He was too polite to explain he was actually looking for a <span class="word-gap" data-word="bakery">?</span>. 
        His face was a shade of <span class="word-gap" data-word="crimson">?</span> that worried the medical <span class="word-gap" data-word="volunteers">?</span>.
        <br><br>
        By the ten-kilometer mark, he saw a man dressed as a giant <span class="word-gap" data-word="lobster">?</span> overtake him. 
        He decided he couldn't let a <span class="word-gap" data-word="crustacean">?</span> win. 
        He crossed the finish line three hours later. The next day, a photo appeared in the newspaper with the caption: "Local Hero’s Incredible <span class="word-gap" data-word="endurance">?</span>."
    `;

    container.innerHTML = ''; 
    container.style.cssText = `height:100%; width:100%; display:block; background:#18181b; color:#f4f4f5; overflow-y:auto; padding:0; font-family: 'Segoe UI', sans-serif; scroll-behavior: smooth;`;

    container.innerHTML = `
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Unbounded:wght@700;900&family=Outfit:wght@400;700&display=swap');
            
            #stage-content::-webkit-scrollbar { width: 10px; }
            #stage-content::-webkit-scrollbar-track { background: #18181b; }
            #stage-content::-webkit-scrollbar-thumb { background: #eab308; border-radius: 5px; }

            .story-wrapper {
                max-width: 90%;
                margin: 60px auto;
                background: #27272a;
                padding: 60px;
                border-radius: 20px;
                box-shadow: 0 25px 50px -12px rgba(0,0,0,0.8);
                border-left: 15px solid #eab308; /* لفت انتباه من مسافة 4 أمتار */
            }

            .story-title {
                color: #facc15;
                text-align: center;
                font-size: 4.2rem;
                font-weight: 900;
                margin-bottom: 50px;
                font-family: 'Unbounded', sans-serif;
                text-transform: uppercase;
                letter-spacing: -2px;
            }

            .story-body {
                line-height: 1.8;
                font-size: 2.7rem;
                color: #e4e4e7;
                font-family: 'Outfit', sans-serif;
            }

            .word-gap {
                display: inline-block;
                min-width: 150px;
                border-bottom: 5px solid #eab308;
                text-align: center;
                color: #facc15;
                cursor: pointer;
                transition: 0.2s;
                background: rgba(234, 179, 8, 0.05);
                border-radius: 4px;
                padding: 0 10px;
            }

            .word-gap.active-target {
                animation: activePulse 1s infinite alternate;
                background: rgba(234, 179, 8, 0.15);
            }

            @keyframes activePulse {
                from { border-color: #eab308; transform: translateY(0); }
                to { border-color: #fff; transform: translateY(-3px); }
            }

            .word-gap.filled {
                border-bottom: none;
                color: #18181b;
                font-weight: 800;
                background: #eab308;
                padding: 0 20px;
                border-radius: 8px;
                animation: finishPop 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            }

            @keyframes finishPop {
                0% { transform: scale(0.8); opacity: 0; }
                100% { transform: scale(1); opacity: 1; }
            }

            #word-overlay {
                position: fixed;
                top: 0; left: 0; width: 100%; height: 100%;
                background: rgba(9, 9, 11, 0.98);
                display: none;
                flex-wrap: wrap;
                justify-content: center;
                align-content: center;
                gap: 15px;
                padding: 40px;
                z-index: 9999;
                backdrop-filter: blur(20px);
            }

            .choice-btn {
                background: #3f3f46;
                color: white;
                padding: 18px 35px;
                font-size: 2.2rem;
                font-weight: 700;
                border-radius: 12px;
                cursor: pointer;
                border: 2px solid #52525b;
                font-family: 'Outfit', sans-serif;
                transition: 0.2s;
            }

            .choice-btn:hover { background: #eab308; color: #18181b; transform: scale(1.1); }
            .choice-btn.wrong { background: #dc2626 !important; border-color: #ef4444; animation: shake 0.4s; }

            @keyframes shake {
                0%, 100% { transform: translateX(0); }
                25% { transform: translateX(-10px); }
                75% { transform: translateX(10px); }
            }

            .one-shot-label {
                background: #eab308;
                color: #18181b;
                padding: 5px 30px;
                border-radius: 4px;
                font-size: 1.3rem;
                font-weight: 900;
                display: inline-block;
                margin-bottom: 20px;
                transform: skewX(-15deg);
            }
        </style>

        <div id="word-overlay"></div>

        <div class="story-wrapper">
            <div class="one-shot-label">VETO ONE-SHOT • STORY 06</div>
            <h1 class="story-title">${storyTitle}</h1>
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