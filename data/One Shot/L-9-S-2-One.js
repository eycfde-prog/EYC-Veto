(function() {
    const container = document.getElementById('stage-content');
    if (!container) return;

    // اختيار 20 كلمة مستهدفة لقصة كارثة التخييم
    const words = [
        "camping", "forest", "expert", "tent", "flashlight", 
        "worried", "sausages", "marshmallows", "muddy", "stream", 
        "shelter", "leaves", "lighting", "sleeping", "scratching", 
        "shone", "bear", "shaking", "raccoon", "shortest"
    ];

    let remainingWords = [...words];
    let currentTargetId = null;

    const storyTitle = "The Camping Catastrophe";
    
    // محتوى القصة الخامسة عشرة
    let storyContent = `
        Ben and Jerry decided to go <span class="word-gap" data-word="camping">?</span> in the deep <span class="word-gap" data-word="forest">?</span>. 
        Ben claimed to be an <span class="word-gap" data-word="expert">?</span> on nature. He bought a new <span class="word-gap" data-word="tent">?</span> and an expensive <span class="word-gap" data-word="flashlight">?</span>. 
        Jerry, however, was only <span class="word-gap" data-word="worried">?</span> about the food, especially the <span class="word-gap" data-word="sausages">?</span> and <span class="word-gap" data-word="marshmallows">?</span>.
        <br><br>
        When they arrived, the ground was <span class="word-gap" data-word="muddy">?</span>. 
        Ben accidentally dropped the poles into a <span class="word-gap" data-word="stream">?</span>, so he had to build a <span class="word-gap" data-word="shelter">?</span> using branches and <span class="word-gap" data-word="leaves">?</span>. 
        While Jerry was <span class="word-gap" data-word="lighting">?</span> the fire, Ben finished his "bird nest" home.
        <br><br>
        Late at night, while they were <span class="word-gap" data-word="sleeping">?</span>, a strange <span class="word-gap" data-word="scratching">?</span> sound woke them up. 
        Jerry <span class="word-gap" data-word="shone">?</span> the light toward the trees. 
        "It's a <span class="word-gap" data-word="bear">?</span>!" Jerry whispered, his voice <span class="word-gap" data-word="shaking">?</span> with fear.
        <br><br>
        In the morning, they saw that the "monster" was actually a fat <span class="word-gap" data-word="raccoon">?</span> eating their food. 
        It was the <span class="word-gap" data-word="shortest">?</span> camping trip in their lives!
    `;

    container.innerHTML = ''; 
    container.style.cssText = `height:100%; width:100%; display:block; background:#064e3b; color:#ecfdf5; overflow-y:auto; padding:0; font-family: 'Segoe UI', sans-serif; scroll-behavior: smooth;`;

    container.innerHTML = `
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Freckle+Face&family=Outfit:wght@400;700&display=swap');
            
            #stage-content::-webkit-scrollbar { width: 10px; }
            #stage-content::-webkit-scrollbar-track { background: #064e3b; }
            #stage-content::-webkit-scrollbar-thumb { background: #10b981; border-radius: 5px; }

            .story-wrapper {
                max-width: 90%;
                margin: 60px auto;
                background: rgba(2, 44, 34, 0.8);
                padding: 60px;
                border-radius: 20px;
                box-shadow: 0 25px 50px -12px rgba(0,0,0,0.5);
                border: 2px solid #059669;
                backdrop-filter: blur(8px);
            }

            .story-title {
                color: #fbbf24;
                text-align: center;
                font-size: 4rem;
                font-weight: 400;
                margin-bottom: 50px;
                font-family: 'Freckle+Face', cursive;
                text-transform: uppercase;
                letter-spacing: 3px;
                text-shadow: 3px 3px 0px #064e3b;
            }

            .story-body {
                line-height: 1.9;
                font-size: 2.7rem;
                color: #ecfdf5;
                font-family: 'Outfit', sans-serif;
            }

            .word-gap {
                display: inline-block;
                min-width: 150px;
                border-bottom: 4px solid #fbbf24;
                text-align: center;
                color: #fbbf24;
                cursor: pointer;
                transition: 0.3s;
                background: rgba(251, 191, 36, 0.05);
            }

            .word-gap.active-target {
                animation: forestGlow 1.5s infinite alternate;
                background: rgba(251, 191, 36, 0.2);
            }

            @keyframes forestGlow {
                0% { border-color: #fbbf24; box-shadow: 0 0 5px #fbbf24; }
                100% { border-color: #10b981; box-shadow: 0 0 20px #10b981; }
            }

            .word-gap.filled {
                border-bottom: none;
                color: #064e3b;
                font-weight: 900;
                background: #fbbf24;
                padding: 0 15px;
                border-radius: 5px;
                animation: popIn 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            }

            @keyframes popIn {
                0% { transform: scale(0); rotate: -15deg; }
                100% { transform: scale(1); rotate: 0deg; }
            }

            #word-overlay {
                position: fixed;
                top: 0; left: 0; width: 100%; height: 100%;
                background: rgba(2, 44, 34, 0.98);
                display: none;
                flex-wrap: wrap;
                justify-content: center;
                align-content: center;
                gap: 15px;
                padding: 40px;
                z-index: 9999;
                backdrop-filter: blur(15px);
            }

            .choice-btn {
                background: #ecfdf5;
                color: #064e3b;
                padding: 18px 40px;
                font-size: 2.3rem;
                font-weight: 700;
                border-radius: 12px;
                cursor: pointer;
                border: 3px solid #fbbf24;
                font-family: 'Outfit', sans-serif;
                transition: 0.2s;
            }

            .choice-btn:hover { background: #fbbf24; color: #064e3b; transform: scale(1.1); }
            .choice-btn.wrong { background: #991b1b !important; color: white; border-color: #ef4444; animation: shake 0.4s; }

            @keyframes shake {
                0%, 100% { transform: translateX(0); }
                25% { transform: translateX(-10px); }
                75% { transform: translateX(10px); }
            }

            .one-shot-label {
                background: #fbbf24;
                color: #064e3b;
                padding: 5px 25px;
                border-radius: 50px;
                font-size: 1.2rem;
                font-weight: 900;
                display: inline-block;
                margin-bottom: 20px;
                font-family: 'Outfit', sans-serif;
            }
        </style>

        <div id="word-overlay"></div>

        <div class="story-wrapper">
            <center>
                <div class="one-shot-label">SURVIVAL MODE • STORY 15</div>
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