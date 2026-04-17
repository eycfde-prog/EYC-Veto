(function() {
    const container = document.getElementById('stage-content');
    if (!container) return;

    // اختيار 20 كلمة مستهدفة لقصة شبح المكتبة
    const words = [
        "history", "library", "building", "shelves", "creepy", 
        "tapping", "bookcase", "legend", "forever", "thump", 
        "ruler", "noise", "shadow", "whispered", "glowing", 
        "encyclopedias", "thud", "attack", "owl", "foolish"
    ];

    let remainingWords = [...words];
    let currentTargetId = null;

    const storyTitle = "The Library Ghost";
    
    // محتوى القصة الثامنة عشرة
    let storyContent = `
        Simon was a student studying for his <span class="word-gap" data-word="history">?</span> exam. 
        He went to the university <span class="word-gap" data-word="library">?</span>, a very old <span class="word-gap" data-word="building">?</span>. 
        The room was filled with dusty <span class="word-gap" data-word="shelves">?</span> and the silence was <span class="word-gap" data-word="creepy">?</span>.
        <br><br>
        Suddenly, he heard a strange <span class="word-gap" data-word="tapping">?</span> sound behind a <span class="word-gap" data-word="bookcase">?</span>. 
        He remembered the <span class="word-gap" data-word="legend">?</span> of a professor who stayed there <span class="word-gap" data-word="forever">?</span>. 
        Simon’s heart began to <span class="word-gap" data-word="thump">?</span>. He grabbed a <span class="word-gap" data-word="ruler">?</span> and walked toward the <span class="word-gap" data-word="noise">?</span>.
        <br><br>
        He saw a dark <span class="word-gap" data-word="shadow">?</span> and <span class="word-gap" data-word="whispered">?</span>, "Who's there?". 
        He saw two <span class="word-gap" data-word="glowing">?</span> eyes and tripped over a pile of <span class="word-gap" data-word="encyclopedias">?</span>. 
        He hit the floor with a heavy <span class="word-gap" data-word="thud">?</span>, waiting for an <span class="word-gap" data-word="attack">?</span>.
        <br><br>
        But instead of a ghost, a small <span class="word-gap" data-word="owl">?</span> flew onto his desk. 
        Simon felt very <span class="word-gap" data-word="foolish">?</span> as the bird flew away into the night.
    `;

    container.innerHTML = ''; 
    container.style.cssText = `height:100%; width:100%; display:block; background:#1e1b4b; color:#e0e7ff; overflow-y:auto; padding:0; font-family: 'Segoe UI', sans-serif; scroll-behavior: smooth;`;

    container.innerHTML = `
        <style>
            @import url('https://fonts.googleapis.com/css2?family=IM+Fell+English+SC&family=Outfit:wght@400;700&display=swap');
            
            #stage-content::-webkit-scrollbar { width: 10px; }
            #stage-content::-webkit-scrollbar-track { background: #1e1b4b; }
            #stage-content::-webkit-scrollbar-thumb { background: #6366f1; border-radius: 5px; }

            .story-wrapper {
                max-width: 90%;
                margin: 60px auto;
                background: rgba(30, 27, 75, 0.8);
                padding: 60px;
                border-radius: 15px;
                box-shadow: 0 0 40px rgba(0,0,0,0.8);
                border: 1px solid #4338ca;
                position: relative;
            }

            .story-title {
                color: #c7d2fe;
                text-align: center;
                font-size: 4rem;
                font-weight: 400;
                margin-bottom: 50px;
                font-family: 'IM Fell English SC', serif;
                text-transform: uppercase;
                letter-spacing: 5px;
                text-shadow: 0 0 20px rgba(199, 210, 254, 0.5);
            }

            .story-body {
                line-height: 2.1;
                font-size: 2.7rem;
                color: #e0e7ff;
                font-family: 'Outfit', sans-serif;
            }

            .word-gap {
                display: inline-block;
                min-width: 150px;
                border-bottom: 3px solid #6366f1;
                text-align: center;
                color: #818cf8;
                cursor: pointer;
                transition: 0.4s;
                background: rgba(99, 102, 241, 0.1);
            }

            .word-gap.active-target {
                animation: ghostFlicker 2s infinite alternate;
            }

            @keyframes ghostFlicker {
                0% { border-color: #6366f1; opacity: 1; }
                50% { border-color: #312e81; opacity: 0.7; }
                100% { border-color: #818cf8; opacity: 1; }
            }

            .word-gap.filled {
                border-bottom: none;
                color: #ffffff;
                font-weight: 700;
                background: #4338ca;
                padding: 0 15px;
                border-radius: 4px;
                animation: revealGhost 0.6s ease-out;
            }

            @keyframes revealGhost {
                0% { filter: blur(10px); opacity: 0; transform: scale(1.2); }
                100% { filter: blur(0); opacity: 1; transform: scale(1); }
            }

            #word-overlay {
                position: fixed;
                top: 0; left: 0; width: 100%; height: 100%;
                background: rgba(10, 10, 30, 0.98);
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
                background: transparent;
                color: #c7d2fe;
                padding: 20px 45px;
                font-size: 2.4rem;
                font-weight: 700;
                border-radius: 5px;
                cursor: pointer;
                border: 2px solid #4338ca;
                font-family: 'Outfit', sans-serif;
                transition: 0.3s;
            }

            .choice-btn:hover { background: #4338ca; color: white; box-shadow: 0 0 25px #6366f1; }
            .choice-btn.wrong { border-color: #991b1b !important; color: #ef4444; animation: heartBeat 0.4s; }

            @keyframes heartBeat {
                0% { transform: scale(1); }
                25% { transform: scale(1.2); }
                50% { transform: scale(1); }
                75% { transform: scale(1.1); }
                100% { transform: scale(1); }
            }

            .one-shot-label {
                color: #6366f1;
                font-size: 1.2rem;
                letter-spacing: 10px;
                font-weight: 900;
                margin-bottom: 15px;
                display: block;
                text-transform: uppercase;
            }
        </style>

        <div id="word-overlay"></div>

        <div class="story-wrapper">
            <center>
                <span class="one-shot-label">MYSTERY • STORY 18</span>
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