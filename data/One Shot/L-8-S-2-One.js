(function() {
    const container = document.getElementById('stage-content');
    if (!container) return;

    // اختيار 20 كلمة مستهدفة لقصة الخباز المشتت
    const words = [
        "bakery", "delicious", "distracted", "wedding", "nervous", 
        "flour", "butter", "bowl", "smoothly", "vanilla", 
        "spinning", "counter", "notice", "batter", "oven", 
        "aroma", "sneeze", "perfect", "spicy", "mistake"
    ];

    let remainingWords = [...words];
    let currentTargetId = null;

    const storyTitle = "The Forgetful Baker";
    
    // محتوى القصة الثالثة عشرة
    let storyContent = `
        Mr. Miller owned a small <span class="word-gap" data-word="bakery">?</span> in town. 
        He was famous for <span class="word-gap" data-word="delicious">?</span> bread, but he was also very <span class="word-gap" data-word="distracted">?</span>. 
        One day, he had to bake a massive <span class="word-gap" data-word="wedding">?</span> cake. 
        It was a huge responsibility, and he felt quite <span class="word-gap" data-word="nervous">?</span>.
        <br><br>
        He started by mixing the <span class="word-gap" data-word="flour">?</span>, <span class="word-gap" data-word="butter">?</span>, and sugar in a giant <span class="word-gap" data-word="bowl">?</span>. 
        Everything seemed to be going <span class="word-gap" data-word="smoothly">?</span>. He added eggs and <span class="word-gap" data-word="vanilla">?</span> extract. 
        However, while the mixture was <span class="word-gap" data-word="spinning">?</span>, his cat jumped on the <span class="word-gap" data-word="counter">?</span>. 
        A jar of black pepper fell in, but Mr. Miller didn't <span class="word-gap" data-word="notice">?</span>.
        <br><br>
        He poured the <span class="word-gap" data-word="batter">?</span> into the pans and put them in the <span class="word-gap" data-word="oven">?</span>. 
        Soon, a wonderful <span class="word-gap" data-word="aroma">?</span> filled the shop, but the Mayor started to <span class="word-gap" data-word="sneeze">?</span>. 
        The cake looked <span class="word-gap" data-word="perfect">?</span>, but it tasted very <span class="word-gap" data-word="spicy">?</span>!
        <br><br>
        Mr. Miller realized his <span class="word-gap" data-word="mistake">?</span> and turned bright red. 
        Now, he always keeps his cat and his pepper in a different room!
    `;

    container.innerHTML = ''; 
    container.style.cssText = `height:100%; width:100%; display:block; background:#fff7ed; color:#431407; overflow-y:auto; padding:0; font-family: 'Segoe UI', sans-serif; scroll-behavior: smooth;`;

    container.innerHTML = `
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Cherry+Bomb+One&family=Outfit:wght@400;700&display=swap');
            
            #stage-content::-webkit-scrollbar { width: 10px; }
            #stage-content::-webkit-scrollbar-track { background: #fff7ed; }
            #stage-content::-webkit-scrollbar-thumb { background: #ea580c; border-radius: 5px; }

            .story-wrapper {
                max-width: 90%;
                margin: 60px auto;
                background: #ffffff;
                padding: 60px;
                border-radius: 40px;
                box-shadow: 0 20px 40px rgba(124, 45, 18, 0.1);
                border: 2px solid #fdba74;
                position: relative;
            }

            .story-title {
                color: #9a3412;
                text-align: center;
                font-size: 4rem;
                font-weight: 400;
                margin-bottom: 50px;
                font-family: 'Cherry Bomb One', cursive;
                text-transform: uppercase;
            }

            .story-body {
                line-height: 2;
                font-size: 2.7rem;
                color: #431407;
                font-family: 'Outfit', sans-serif;
            }

            .word-gap {
                display: inline-block;
                min-width: 150px;
                border-bottom: 4px solid #ea580c;
                text-align: center;
                color: #c2410c;
                cursor: pointer;
                transition: 0.3s;
                background: rgba(251, 146, 60, 0.05);
            }

            .word-gap.active-target {
                animation: cookPulse 1.5s infinite;
                background: rgba(251, 146, 60, 0.15);
            }

            @keyframes cookPulse {
                0% { border-color: #ea580c; }
                50% { border-color: #000000; } /* تلميح للفلفل الأسود */
                100% { border-color: #ea580c; }
            }

            .word-gap.filled {
                border-bottom: none;
                color: #ffffff;
                font-weight: 800;
                background: #ea580c;
                padding: 0 15px;
                border-radius: 12px;
                animation: cakeRise 0.5s ease-out;
            }

            @keyframes cakeRise {
                0% { transform: scale(0.5); opacity: 0; }
                100% { transform: scale(1); opacity: 1; }
            }

            #word-overlay {
                position: fixed;
                top: 0; left: 0; width: 100%; height: 100%;
                background: rgba(67, 20, 7, 0.98);
                display: none;
                flex-wrap: wrap;
                justify-content: center;
                align-content: center;
                gap: 15px;
                padding: 40px;
                z-index: 9999;
                backdrop-filter: blur(10px);
            }

            .choice-btn {
                background: #fff7ed;
                color: #431407;
                padding: 20px 45px;
                font-size: 2.4rem;
                font-weight: 700;
                border-radius: 20px;
                cursor: pointer;
                border: 3px solid #ea580c;
                font-family: 'Outfit', sans-serif;
                transition: 0.2s;
            }

            .choice-btn:hover { background: #ea580c; color: white; transform: translateY(-5px) rotate(2deg); }
            .choice-btn.wrong { background: #000000 !important; color: #ffffff; border-color: #444; animation: sneezeShake 0.4s; }

            @keyframes sneezeShake {
                0%, 100% { transform: translateX(0); }
                25% { transform: translateX(-15px); }
                75% { transform: translateX(15px); }
            }

            .one-shot-label {
                background: #ea580c;
                color: white;
                padding: 5px 30px;
                border-radius: 50px;
                font-size: 1.3rem;
                font-weight: 900;
                display: inline-block;
                margin-bottom: 20px;
                box-shadow: 0 4px 10px rgba(234, 88, 12, 0.3);
            }
        </style>

        <div id="word-overlay"></div>

        <div class="story-wrapper">
            <center>
                <div class="one-shot-label">SWEET & SPICY • STORY 13</div>
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