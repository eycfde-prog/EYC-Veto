(function() {
    const container = document.getElementById('stage-content');
    if (!container) return;

    // قائمة الـ 20 كلمة المختارة لقصة حفلة المفاجأة
    const words = [
        "secret", "fortieth", "organize", "private", "complex", 
        "catering", "anxious", "balloons", "basement", "switched", 
        "quietly", "curtains", "darkness", "shriek", "groceries", 
        "delivery", "beverages", "fright", "confetti", "unpredictable"
    ];

    let remainingWords = [...words];
    let currentTargetId = null;

    const storyTitle = "The Surprise Party";
    
    // محتوى القصة الخامسة
    let storyContent = `
        Miranda was famous for being a terrible <span class="word-gap" data-word="secret">?</span> keeper. 
        However, when her husband’s <span class="word-gap" data-word="fortieth">?</span> birthday approached, she vowed to <span class="word-gap" data-word="organize">?</span> the ultimate surprise party. 
        She spent weeks sending <span class="word-gap" data-word="private">?</span> messages, ensuring no one mentioned the event. 
        She even created a <span class="word-gap" data-word="complex">?</span> spreadsheet to manage the <span class="word-gap" data-word="catering">?</span> and the guest list.
        <br><br>
        On the day of the party, Miranda felt <span class="word-gap" data-word="anxious">?</span> but excited. 
        She had hidden forty blue <span class="word-gap" data-word="balloons">?</span> and a massive chocolate cake in the <span class="word-gap" data-word="basement">?</span>. 
        The plan was simple: the lights would be <span class="word-gap" data-word="switched">?</span> off, and everyone would shout "Surprise!"
        <br><br>
        At 6:00 PM, the guests arrived <span class="word-gap" data-word="quietly">?</span> and hid. Miranda stood near the <span class="word-gap" data-word="curtains">?</span>, clutching a party popper. 
        Suddenly, they heard a key turning. The house went into <span class="word-gap" data-word="darkness">?</span>. 
        The door opened, and a figure walked in. "Surprise!" everyone screamed.
        <br><br>
        The figure let out a loud <span class="word-gap" data-word="shriek">?</span> and dropped a heavy bag of <span class="word-gap" data-word="groceries">?</span>. 
        When Miranda turned on the lights, it wasn't David. It was the <span class="word-gap" data-word="delivery">?</span> man who was dropping off the <span class="word-gap" data-word="beverages">?</span>. 
        He was shaking with <span class="word-gap" data-word="fright">?</span>, surrounded by fifty people in party hats.
        <br><br>
        Just then, David walked in, holding a <span class="word-gap" data-word="confetti">?</span> cannon. 
        "I'm guessing," David said, laughing, "that this party wasn't for the milkman?" 
        Miranda sighed, realizing that life always has its own <span class="word-gap" data-word="unpredictable">?</span> twists.
    `;

    container.innerHTML = ''; 
    container.style.cssText = `height:100%; width:100%; display:block; background:#2e1065; color:#f5f3ff; overflow-y:auto; padding:0; font-family: 'Segoe UI', sans-serif; scroll-behavior: smooth;`;

    container.innerHTML = `
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Unbounded:wght@700;900&family=Outfit:wght@400;700&display=swap');
            
            #stage-content::-webkit-scrollbar { width: 10px; }
            #stage-content::-webkit-scrollbar-track { background: #2e1065; }
            #stage-content::-webkit-scrollbar-thumb { background: #d946ef; border-radius: 5px; }

            .story-wrapper {
                max-width: 90%;
                margin: 60px auto;
                background: #4c1d95;
                padding: 60px;
                border-radius: 30px;
                box-shadow: 0 25px 50px -12px rgba(0,0,0,0.6);
                border: 2px solid #7c3aed;
            }

            .story-title {
                color: #f5d0fe;
                text-align: center;
                font-size: 4rem;
                font-weight: 900;
                margin-bottom: 50px;
                font-family: 'Unbounded', sans-serif;
                text-transform: uppercase;
                text-shadow: 3px 3px 0px #701a75;
            }

            .story-body {
                line-height: 1.8;
                font-size: 2.6rem;
                color: #f5f3ff;
                font-family: 'Outfit', sans-serif;
            }

            .word-gap {
                display: inline-block;
                min-width: 140px;
                border-bottom: 4px solid #d946ef;
                text-align: center;
                color: #f5d0fe;
                cursor: pointer;
                transition: 0.2s;
                background: rgba(217, 70, 239, 0.1);
                border-radius: 8px;
                padding: 0 15px;
                margin: 0 5px;
            }

            .word-gap.active-target {
                animation: pulseGlowPurple 1.5s infinite;
                border-bottom-style: dashed;
            }

            @keyframes pulseGlowPurple {
                0% { box-shadow: 0 0 0 0 rgba(217, 70, 239, 0.5); }
                70% { box-shadow: 0 0 0 20px rgba(217, 70, 239, 0); }
                100% { box-shadow: 0 0 0 0 rgba(217, 70, 239, 0); }
            }

            .word-gap.filled {
                border-bottom: none;
                color: #fff;
                font-weight: 900;
                background: linear-gradient(45deg, #d946ef, #7c3aed);
                padding: 0 20px;
                border-radius: 12px;
                animation: correctPop 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            }

            @keyframes correctPop {
                0% { transform: scale(0.5); }
                100% { transform: scale(1); }
            }

            #word-overlay {
                position: fixed;
                top: 0; left: 0; width: 100%; height: 100%;
                background: rgba(46, 16, 101, 0.98);
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
                background: #f5f3ff;
                color: #2e1065;
                padding: 20px 40px;
                font-size: 2.4rem;
                font-weight: 700;
                border-radius: 15px;
                cursor: pointer;
                border: none;
                font-family: 'Outfit', sans-serif;
                transition: 0.2s;
            }

            .choice-btn:hover { transform: scale(1.05); background: #d946ef; color: white; }
            .choice-btn.wrong { background: #ef4444 !important; color: white; animation: shake 0.4s; }

            @keyframes shake {
                0%, 100% { transform: translateX(0); }
                25% { transform: translateX(-10px); }
                75% { transform: translateX(10px); }
            }

            .one-shot-label {
                display: inline-block;
                background: #d946ef;
                color: white;
                padding: 5px 25px;
                border-radius: 50px;
                font-size: 1.2rem;
                font-weight: 900;
                margin-bottom: 20px;
            }
        </style>

        <div id="word-overlay"></div>

        <div class="story-wrapper">
            <center><div class="one-shot-label">VETO ONE-SHOT • STORY 05</div></center>
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