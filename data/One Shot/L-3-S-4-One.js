(function() {
    const container = document.getElementById('stage-content');
    if (!container) return;

    // قائمة الـ 20 كلمة المختارة لقصة التخييم
    const words = [
        "outdoors", "skills", "camping", "expensive", "professional", 
        "campsite", "assemble", "manual", "proudly", "umbrella", 
        "intervene", "disappear", "storm", "howl", "gust", 
        "secured", "dragged", "puddle", "marshmallows", "shivering"
    ];

    let remainingWords = [...words];
    let currentTargetId = null;

    const storyTitle = "The Camping Disaster";
    
    // محتوى القصة الرابعة
    let storyContent = `
        Robert was a man who loved the idea of the <span class="word-gap" data-word="outdoors">?</span>, but he lacked the practical <span class="word-gap" data-word="skills">?</span> to survive in it. 
        Last summer, he convinced his wife to go on a <span class="word-gap" data-word="camping">?</span> trip. 
        He bought a massive, <span class="word-gap" data-word="expensive">?</span> tent and a set of <span class="word-gap" data-word="professional">?</span> hiking boots that were too tight.
        <br><br>
        When they arrived at the <span class="word-gap" data-word="campsite">?</span>, the weather was beautiful. Robert began to <span class="word-gap" data-word="assemble">?</span> the tent, but he refused to read the <span class="word-gap" data-word="manual">?</span>. 
        "I am an engineer," he claimed <span class="word-gap" data-word="proudly">?</span>. 
        Two hours later, the tent looked more like a collapsed <span class="word-gap" data-word="umbrella">?</span> than a shelter. 
        Linda had to <span class="word-gap" data-word="intervene">?</span>, and they finally set it up just as the sun began to <span class="word-gap" data-word="disappear">?</span>.
        <br><br>
        That night, a sudden <span class="word-gap" data-word="storm">?</span> arrived. The wind began to <span class="word-gap" data-word="howl">?</span>, and the rain hammered against the fabric. 
        Suddenly, a huge <span class="word-gap" data-word="gust">?</span> of wind caught the tent. 
        Because Robert hadn't <span class="word-gap" data-word="secured">?</span> the ropes properly, the tent lifted off the ground. 
        Robert grabbed a pole, but instead, he was <span class="word-gap" data-word="dragged">?</span> across the wet grass.
        <br><br>
        He landed in a shallow <span class="word-gap" data-word="puddle">?</span>, soaked and <span class="word-gap" data-word="shivering">?</span>. 
        To make matters worse, a raccoon stole their bag of <span class="word-gap" data-word="marshmallows">?</span>. 
        Robert sighed and said, "At least we are making memories." 
        Linda replied, "Next time, let's make memories in a five-star hotel."
    `;

    container.innerHTML = ''; 
    container.style.cssText = `height:100%; width:100%; display:block; background:#064e3b; color:#ecfdf5; overflow-y:auto; padding:0; font-family: 'Segoe UI', sans-serif; scroll-behavior: smooth;`;

    container.innerHTML = `
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Unbounded:wght@700;900&family=Outfit:wght@400;700&display=swap');
            
            #stage-content::-webkit-scrollbar { width: 10px; }
            #stage-content::-webkit-scrollbar-track { background: #064e3b; }
            #stage-content::-webkit-scrollbar-thumb { background: #f97316; border-radius: 5px; }

            .story-wrapper {
                max-width: 90%;
                margin: 60px auto;
                background: #065f46;
                padding: 60px;
                border-radius: 30px;
                box-shadow: 0 25px 50px -12px rgba(0,0,0,0.7);
                border: 2px solid #059669;
            }

            .story-title {
                color: #fb923c;
                text-align: center;
                font-size: 4rem;
                font-weight: 900;
                margin-bottom: 50px;
                font-family: 'Unbounded', sans-serif;
                text-transform: uppercase;
                text-shadow: 2px 2px 10px rgba(0,0,0,0.5);
            }

            .story-body {
                line-height: 1.8;
                font-size: 2.6rem;
                color: #ecfdf5;
                font-family: 'Outfit', sans-serif;
            }

            .word-gap {
                display: inline-block;
                min-width: 140px;
                border-bottom: 4px solid #fb923c;
                text-align: center;
                color: #fb923c;
                cursor: pointer;
                transition: 0.2s;
                background: rgba(251, 146, 60, 0.1);
                border-radius: 8px;
                padding: 0 15px;
                margin: 0 5px;
            }

            .word-gap.active-target {
                animation: pulseGlowOrange 1.5s infinite;
                border-bottom-style: dashed;
            }

            @keyframes pulseGlowOrange {
                0% { box-shadow: 0 0 0 0 rgba(251, 146, 60, 0.4); }
                70% { box-shadow: 0 0 0 20px rgba(251, 146, 60, 0); }
                100% { box-shadow: 0 0 0 0 rgba(251, 146, 60, 0); }
            }

            .word-gap.filled {
                border-bottom: none;
                color: #fff;
                font-weight: 700;
                background: #f97316;
                padding: 0 20px;
                animation: correctPop 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            }

            @keyframes correctPop {
                0% { transform: scale(0.5); }
                100% { transform: scale(1); }
            }

            #word-overlay {
                position: fixed;
                top: 0; left: 0; width: 100%; height: 100%;
                background: rgba(2, 44, 34, 0.98);
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
                background: #ecfdf5;
                color: #064e3b;
                padding: 20px 40px;
                font-size: 2.4rem;
                font-weight: 700;
                border-radius: 15px;
                cursor: pointer;
                border: none;
                font-family: 'Outfit', sans-serif;
                transition: 0.2s;
            }

            .choice-btn:hover { transform: scale(1.05); background: #fb923c; color: white; }
            .choice-btn.wrong { background: #ef4444 !important; color: white; animation: shake 0.4s; }

            @keyframes shake {
                0%, 100% { transform: translateX(0); }
                25% { transform: translateX(-10px); }
                75% { transform: translateX(10px); }
            }

            .one-shot-label {
                display: inline-block;
                background: #fb923c;
                color: #064e3b;
                padding: 5px 25px;
                border-radius: 50px;
                font-size: 1.2rem;
                font-weight: 900;
                margin-bottom: 20px;
            }
        </style>

        <div id="word-overlay"></div>

        <div class="story-wrapper">
            <center><div class="one-shot-label">VETO ONE-SHOT • STORY 04</div></center>
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