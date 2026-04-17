(function() {
    const container = document.getElementById('stage-content');
    if (!container) return;

    // اختيار 20 كلمة مستهدفة لقصة رحلة الصيد
    const words = [
        "fishing", "lake", "rod", "sandwiches", "foggy", 
        "pier", "deep", "pull", "excitement", "handle", 
        "banana", "sweating", "quickly", "surface", "bicycle", 
        "seaweed", "disappointed", "shiny", "basket", "grateful"
    ];

    let remainingWords = [...words];
    let currentTargetId = null;

    const storyTitle = "The Unusual Fishing Trip";
    
    // محتوى القصة العاشرة
    let storyContent = `
        Uncle Ted was a man who loved <span class="word-gap" data-word="fishing">?</span>, but he never caught any fish. 
        Every Sunday, he went to the <span class="word-gap" data-word="lake">?</span> with his expensive fishing <span class="word-gap" data-word="rod">?</span> and a large box of <span class="word-gap" data-word="sandwiches">?</span>.
        <br><br>
        One morning, the lake was very <span class="word-gap" data-word="foggy">?</span> and quiet. 
        Ted sat on the wooden <span class="word-gap" data-word="pier">?</span> and threw his line into the <span class="word-gap" data-word="deep">?</span> water. 
        Suddenly, he felt a huge <span class="word-gap" data-word="pull">?</span> on the line. 
        "It’s a monster!" he shouted with <span class="word-gap" data-word="excitement">?</span>. He began to turn the <span class="word-gap" data-word="handle">?</span> as fast as he could.
        <br><br>
        The rod bent like a <span class="word-gap" data-word="banana">?</span>. Ted was <span class="word-gap" data-word="sweating">?</span>, and his heart was beating <span class="word-gap" data-word="quickly">?</span>. 
        After ten minutes, something heavy finally broke the <span class="word-gap" data-word="surface">?</span> of the water. 
        But it wasn't a fish. It was an old <span class="word-gap" data-word="bicycle">?</span> covered in green <span class="word-gap" data-word="seaweed">?</span>.
        <br><br>
        Ted was very <span class="word-gap" data-word="disappointed">?</span>, but then he noticed something <span class="word-gap" data-word="shiny">?</span> inside the bicycle’s <span class="word-gap" data-word="basket">?</span>. 
        He found a small camera inside. When he returned it, the owners were so <span class="word-gap" data-word="grateful">?</span> that they bought him a giant salmon. 
        Ted told everyone he caught the fish himself!
    `;

    container.innerHTML = ''; 
    container.style.cssText = `height:100%; width:100%; display:block; background:#0c4a6e; color:#f0f9ff; overflow-y:auto; padding:0; font-family: 'Segoe UI', sans-serif; scroll-behavior: smooth;`;

    container.innerHTML = `
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Unbounded:wght@700;900&family=Outfit:wght@400;700&display=swap');
            
            #stage-content::-webkit-scrollbar { width: 10px; }
            #stage-content::-webkit-scrollbar-track { background: #0c4a6e; }
            #stage-content::-webkit-scrollbar-thumb { background: #38bdf8; border-radius: 5px; }

            .story-wrapper {
                max-width: 90%;
                margin: 60px auto;
                background: rgba(12, 74, 110, 0.8);
                padding: 60px;
                border-radius: 40px;
                box-shadow: 0 25px 50px -12px rgba(0,0,0,0.5);
                border: 2px solid #0ea5e9;
                backdrop-filter: blur(10px);
            }

            .story-title {
                color: #7dd3fc;
                text-align: center;
                font-size: 4rem;
                font-weight: 900;
                margin-bottom: 50px;
                font-family: 'Unbounded', sans-serif;
                text-transform: uppercase;
                text-shadow: 0 4px 15px rgba(0,0,0,0.3);
            }

            .story-body {
                line-height: 1.8;
                font-size: 2.6rem;
                color: #e0f2fe;
                font-family: 'Outfit', sans-serif;
            }

            .word-gap {
                display: inline-block;
                min-width: 140px;
                border-bottom: 4px solid #38bdf8;
                text-align: center;
                color: #38bdf8;
                cursor: pointer;
                transition: 0.3s;
                background: rgba(56, 189, 248, 0.1);
                border-radius: 8px;
            }

            .word-gap.active-target {
                animation: wavePulse 2s infinite;
            }

            @keyframes wavePulse {
                0% { box-shadow: 0 0 0 0 rgba(56, 189, 248, 0.4); border-color: #38bdf8; }
                50% { box-shadow: 0 10px 20px 0 rgba(56, 189, 248, 0.2); border-color: #f0f9ff; }
                100% { box-shadow: 0 0 0 0 rgba(56, 189, 248, 0.4); border-color: #38bdf8; }
            }

            .word-gap.filled {
                border-bottom: none;
                color: #f0f9ff;
                font-weight: 700;
                background: #0ea5e9;
                padding: 0 15px;
                animation: catchFish 0.5s ease-out;
            }

            @keyframes catchFish {
                0% { transform: translateY(20px); opacity: 0; }
                100% { transform: translateY(0); opacity: 1; }
            }

            #word-overlay {
                position: fixed;
                top: 0; left: 0; width: 100%; height: 100%;
                background: rgba(7, 89, 133, 0.98);
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
                background: #f0f9ff;
                color: #0c4a6e;
                padding: 18px 35px;
                font-size: 2.3rem;
                font-weight: 700;
                border-radius: 15px;
                cursor: pointer;
                border: none;
                font-family: 'Outfit', sans-serif;
                transition: 0.2s;
            }

            .choice-btn:hover { background: #38bdf8; color: white; transform: scale(1.1) rotate(2deg); }
            .choice-btn.wrong { background: #f43f5e !important; color: white; animation: shake 0.4s; }

            @keyframes shake {
                0%, 100% { transform: translateX(0); }
                25% { transform: translateX(-10px); }
                75% { transform: translateX(10px); }
            }

            .one-shot-label {
                background: #38bdf8;
                color: #0c4a6e;
                padding: 5px 25px;
                border-radius: 50px;
                font-size: 1.2rem;
                font-weight: 900;
                margin-bottom: 20px;
                display: inline-block;
            }
        </style>

        <div id="word-overlay"></div>

        <div class="story-wrapper">
            <center>
                <div class="one-shot-label">VETO ONE-SHOT • FINAL STORY 10</div>
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