(function() {
    const container = document.getElementById('stage-content');
    if (!container) return;

    // اختيار 20 كلمة مستهدفة لقصة المتحف والديناصور
    const words = [
        "expert", "intelligent", "clumsy", "lecture", "briefcase", 
        "rare", "crowded", "exhibition", "rushing", "slippery", 
        "skeleton", "slide", "falling", "creaking", "wobble", 
        "trash", "popcorn", "silence", "security", "treasure"
    ];

    let remainingWords = [...words];
    let currentTargetId = null;

    const storyTitle = "The Great Museum Mix-up";
    
    // محتوى القصة التاسعة
    let storyContent = `
        Professor Bumble was a famous <span class="word-gap" data-word="expert">?</span> on ancient history. 
        He was very <span class="word-gap" data-word="intelligent">?</span>, but he was also very <span class="word-gap" data-word="clumsy">?</span>. 
        One afternoon, he was invited to give a <span class="word-gap" data-word="lecture">?</span> at the museum. 
        He carried a large <span class="word-gap" data-word="briefcase">?</span> and a very <span class="word-gap" data-word="rare">?</span> ancient clay pot.
        <br><br>
        The museum was <span class="word-gap" data-word="crowded">?</span> because of a new <span class="word-gap" data-word="exhibition">?</span> about dinosaurs. 
        Professor Bumble was <span class="word-gap" data-word="rushing">?</span> because he was late. 
        He didn't notice the floor was <span class="word-gap" data-word="slippery">?</span>. 
        Suddenly, he began to <span class="word-gap" data-word="slide">?</span> across the floor like an ice skater.
        <br><br>
        To save himself from <span class="word-gap" data-word="falling">?</span>, he grabbed the dinosaur's tail. 
        There was a <span class="word-gap" data-word="creaking">?</span> sound, and the entire <span class="word-gap" data-word="skeleton">?</span> started to <span class="word-gap" data-word="wobble">?</span>. 
        The clay pot flew and landed inside a <span class="word-gap" data-word="trash">?</span> can filled with <span class="word-gap" data-word="popcorn">?</span>.
        <br><br>
        The visitors stopped in <span class="word-gap" data-word="silence">?</span>. 
        The Professor looked at the <span class="word-gap" data-word="security">?</span> guard and gave a nervous laugh. 
        Luckily, the pot was not broken, but he spent the day picking popcorn out of his ancient <span class="word-gap" data-word="treasure">?</span>.
    `;

    container.innerHTML = ''; 
    container.style.cssText = `height:100%; width:100%; display:block; background:#27272a; color:#f5f5f4; overflow-y:auto; padding:0; font-family: 'Segoe UI', sans-serif; scroll-behavior: smooth;`;

    container.innerHTML = `
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Marcellus&family=Outfit:wght@400;700&display=swap');
            
            #stage-content::-webkit-scrollbar { width: 10px; }
            #stage-content::-webkit-scrollbar-track { background: #1c1917; }
            #stage-content::-webkit-scrollbar-thumb { background: #d6d3d1; border-radius: 5px; }

            .story-wrapper {
                max-width: 90%;
                margin: 60px auto;
                background: #44403c;
                padding: 60px;
                border-radius: 10px;
                box-shadow: 0 30px 60px -12px rgba(0,0,0,0.7);
                border: 1px solid #78716c;
                position: relative;
            }

            /* تأثير الأركان الكلاسيكية للمتحف */
            .story-wrapper::after {
                content: ''; position: absolute; top: 20px; left: 20px; right: 20px; bottom: 20px;
                border: 1px solid rgba(214, 211, 209, 0.2); pointer-events: none;
            }

            .story-title {
                color: #fde047;
                text-align: center;
                font-size: 4rem;
                font-weight: 400;
                margin-bottom: 50px;
                font-family: 'Marcellus', serif;
                text-transform: uppercase;
                letter-spacing: 4px;
                text-shadow: 2px 2px 0px #78350f;
            }

            .story-body {
                line-height: 1.9;
                font-size: 2.7rem;
                color: #f5f5f4;
                font-family: 'Outfit', sans-serif;
            }

            .word-gap {
                display: inline-block;
                min-width: 150px;
                border-bottom: 3px solid #fde047;
                text-align: center;
                color: #fde047;
                cursor: pointer;
                transition: 0.2s;
                background: rgba(253, 224, 71, 0.05);
            }

            .word-gap.active-target {
                animation: spotlight 1.5s infinite;
            }

            @keyframes spotlight {
                0% { background: rgba(253, 224, 71, 0.1); box-shadow: 0 0 10px rgba(253, 224, 71, 0.2); }
                50% { background: rgba(253, 224, 71, 0.3); box-shadow: 0 0 30px rgba(253, 224, 71, 0.5); }
                100% { background: rgba(253, 224, 71, 0.1); box-shadow: 0 0 10px rgba(253, 224, 71, 0.2); }
            }

            .word-gap.filled {
                border-bottom: none;
                color: #fff;
                font-weight: 700;
                background: #854d0e;
                padding: 0 15px;
                border-radius: 5px;
                animation: treasureFound 0.5s ease-out;
            }

            @keyframes treasureFound {
                0% { transform: scale(0.5) rotate(-10deg); }
                100% { transform: scale(1) rotate(0deg); }
            }

            #word-overlay {
                position: fixed;
                top: 0; left: 0; width: 100%; height: 100%;
                background: rgba(28, 25, 23, 0.98);
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
                background: #f5f5f4;
                color: #44403c;
                padding: 20px 40px;
                font-size: 2.4rem;
                font-weight: 700;
                border-radius: 5px;
                cursor: pointer;
                border: 3px solid #fde047;
                font-family: 'Marcellus', serif;
                transition: 0.2s;
            }

            .choice-btn:hover { background: #fde047; color: #44403c; transform: translateY(-5px); }
            .choice-btn.wrong { background: #991b1b !important; color: white; border-color: #ef4444; animation: shake 0.4s; }

            @keyframes shake {
                0%, 100% { transform: translateX(0); }
                25% { transform: translateX(-10px); }
                75% { transform: translateX(10px); }
            }

            .one-shot-label {
                color: #d6d3d1;
                font-size: 1.1rem;
                letter-spacing: 8px;
                font-weight: 900;
                margin-bottom: 10px;
                display: block;
                text-transform: uppercase;
            }
        </style>

        <div id="word-overlay"></div>

        <div class="story-wrapper">
            <center>
                <span class="one-shot-label">MUSEUM ARCHIVES • STORY 09</span>
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