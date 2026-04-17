(function() {
    const container = document.getElementById('stage-content');
    if (!container) return;

    // اختيار 20 كلمة مستهدفة لقصة المصعد المتكلم
    const words = [
        "luxury", "ancient", "upgrade", "system", "guests", 
        "elevator", "seventh", "robotic", "surprised", "boring", 
        "roof", "frowned", "firmly", "mechanical", "kitchen", 
        "smell", "hungry", "suddenly", "lobby", "polite"
    ];

    let remainingWords = [...words];
    let currentTargetId = null;

    const storyTitle = "The Talking Elevator";
    
    // محتوى القصة الحادية عشرة
    let storyContent = `
        The Grand Hotel was famous for its <span class="word-gap" data-word="luxury">?</span>, but its elevator was very <span class="word-gap" data-word="ancient">?</span>. 
        One day, the manager decided to <span class="word-gap" data-word="upgrade">?</span> it. 
        He installed a new "Smart Voice <span class="word-gap" data-word="system">?</span>" that could talk to the <span class="word-gap" data-word="guests">?</span>.
        <br><br>
        Clara entered the <span class="word-gap" data-word="elevator">?</span> and wanted to go to the <span class="word-gap" data-word="seventh">?</span> floor. 
        "Good morning," the elevator said in a <span class="word-gap" data-word="robotic">?</span> voice. 
        Clara was <span class="word-gap" data-word="surprised">?</span>, but she asked for her floor. 
        The elevator replied, "Are you sure? There is a <span class="word-gap" data-word="boring">?</span> meeting there. The <span class="word-gap" data-word="roof">?</span> garden is much nicer."
        <br><br>
        Clara <span class="word-gap" data-word="frowned">?</span> and asked again <span class="word-gap" data-word="firmly">?</span>. 
        The elevator let out a loud, <span class="word-gap" data-word="mechanical">?</span> sigh and began to move. 
        However, it stopped at the <span class="word-gap" data-word="kitchen">?</span> in the basement. 
        The <span class="word-gap" data-word="smell">?</span> of fresh bread filled the elevator. 
        "You look <span class="word-gap" data-word="hungry">?</span>," the elevator whispered.
        <br><br>
        <span class="word-gap" data-word="suddenly">?</span>, the doors closed. Clara was trapped. 
        "Take me to the <span class="word-gap" data-word="lobby">?</span>!" she shouted. 
        The elevator replied, "I will move when you are <span class="word-gap" data-word="polite">?</span>." 
        Clara had to say "please" to a machine!
    `;

    container.innerHTML = ''; 
    container.style.cssText = `height:100%; width:100%; display:block; background:#2d1b10; color:#fef3c7; overflow-y:auto; padding:0; font-family: 'Segoe UI', sans-serif; scroll-behavior: smooth;`;

    container.innerHTML = `
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Outfit:wght@400;700&display=swap');
            
            #stage-content::-webkit-scrollbar { width: 10px; }
            #stage-content::-webkit-scrollbar-track { background: #2d1b10; }
            #stage-content::-webkit-scrollbar-thumb { background: #d4af37; border-radius: 5px; }

            .story-wrapper {
                max-width: 90%;
                margin: 60px auto;
                background: #3f2b1e;
                padding: 60px;
                border-radius: 20px;
                box-shadow: 0 30px 60px rgba(0,0,0,0.6);
                border: 3px solid #d4af37;
                position: relative;
            }

            .story-title {
                color: #d4af37;
                text-align: center;
                font-size: 4.2rem;
                font-weight: 900;
                margin-bottom: 50px;
                font-family: 'Playfair Display', serif;
                text-transform: uppercase;
                letter-spacing: 3px;
                border-bottom: 2px double #d4af37;
                display: inline-block;
                width: 100%;
                padding-bottom: 20px;
            }

            .story-body {
                line-height: 1.9;
                font-size: 2.7rem;
                color: #fef3c7;
                font-family: 'Outfit', sans-serif;
            }

            .word-gap {
                display: inline-block;
                min-width: 150px;
                border-bottom: 4px solid #d4af37;
                text-align: center;
                color: #fbbf24;
                cursor: pointer;
                transition: 0.3s;
                background: rgba(212, 175, 55, 0.1);
            }

            .word-gap.active-target {
                animation: luxuryGlow 1.5s infinite alternate;
            }

            @keyframes luxuryGlow {
                from { background: rgba(212, 175, 55, 0.1); box-shadow: 0 0 10px rgba(212, 175, 55, 0.2); }
                to { background: rgba(212, 175, 55, 0.3); box-shadow: 0 0 30px rgba(212, 175, 55, 0.5); }
            }

            .word-gap.filled {
                border-bottom: none;
                color: #1a1a1a;
                font-weight: 800;
                background: #d4af37;
                padding: 0 15px;
                border-radius: 4px;
                animation: slideDown 0.4s ease-out;
            }

            @keyframes slideDown {
                0% { transform: translateY(-20px); opacity: 0; }
                100% { transform: translateY(0); opacity: 1; }
            }

            #word-overlay {
                position: fixed;
                top: 0; left: 0; width: 100%; height: 100%;
                background: rgba(26, 15, 8, 0.98);
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
                background: #fef3c7;
                color: #2d1b10;
                padding: 20px 45px;
                font-size: 2.4rem;
                font-weight: 700;
                border-radius: 0;
                cursor: pointer;
                border: 2px solid #d4af37;
                font-family: 'Outfit', sans-serif;
                transition: 0.2s;
            }

            .choice-btn:hover { background: #d4af37; color: white; transform: scale(1.05); }
            .choice-btn.wrong { background: #991b1b !important; color: white; animation: shake 0.4s; }

            @keyframes shake {
                0%, 100% { transform: translateX(0); }
                25% { transform: translateX(-10px); }
                75% { transform: translateX(10px); }
            }

            .one-shot-label {
                color: #d4af37;
                font-size: 1.2rem;
                letter-spacing: 5px;
                font-weight: 900;
                margin-bottom: 15px;
                display: block;
                text-transform: uppercase;
            }
        </style>

        <div id="word-overlay"></div>

        <div class="story-wrapper">
            <center>
                <span class="one-shot-label">GRAND HOTEL • STORY 11</span>
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