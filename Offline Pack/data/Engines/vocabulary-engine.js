/* ════════════════════════════════════════════
   vocabulary-engine.js
   Standalone — يتحمل في EYCSB.html كـ <script>
   ════════════════════════════════════════════ */

// ════════════════════════════════════════════
// VOCABULARY DATA
// ════════════════════════════════════════════
const VOCABULARY_DATA = {
  "meta": {
    "total_groups": 18,
    "words_per_group": 50,
    "audio_base": "data/Vocabulary/",
    "description": "VETO Vocabulary Data — 18 groups, sessions 1-2 to 9-3"
  },
  "lessons": {
    "1-2": {
      "groupId": "v1",
      "words": [
        "Eat",
        "Drink",
        "Sleep",
        "Go",
        "Come",
        "Run",
        "Walk",
        "Play",
        "Read",
        "Write",
        "Speak",
        "Listen",
        "Look",
        "See",
        "Watch",
        "Open",
        "Close",
        "Sit",
        "Stand",
        "Jump",
        "Swim",
        "Drive",
        "Ride",
        "Give",
        "Take",
        "Buy",
        "Sell",
        "Help",
        "Work",
        "Study",
        "Learn",
        "Teach",
        "Cook",
        "Clean",
        "Wash",
        "Cut",
        "Draw",
        "Paint",
        "Sing",
        "Dance",
        "Smile",
        "Laugh",
        "Cry",
        "Think",
        "Know",
        "Make",
        "Use",
        "Push",
        "Pull",
        "Stop"
      ]
    },
    "1-3": {
      "groupId": "v2",
      "words": [
        "Hear",
        "Touch",
        "Smell",
        "Taste",
        "Feel",
        "Remember",
        "Forget",
        "Believe",
        "Hope",
        "Want",
        "Need",
        "Love",
        "Like",
        "Hate",
        "Wait",
        "Meet",
        "Ask",
        "Answer",
        "Tell",
        "Say",
        "Call",
        "Send",
        "Receive",
        "Bring",
        "Carry",
        "Hold",
        "Catch",
        "Throw",
        "Win",
        "Lose",
        "Start",
        "Finish",
        "Try",
        "Change",
        "Fix",
        "Break",
        "Build",
        "Spend",
        "Save",
        "Borrow",
        "Lend",
        "Pay",
        "Cost",
        "Choose",
        "Decide",
        "Explain",
        "Travel",
        "Fly",
        "Stay",
        "Leave"
      ]
    },
    "2-2": {
      "groupId": "v3",
      "words": [
        "Big",
        "Small",
        "Tall",
        "Short",
        "Fast",
        "Slow",
        "Hot",
        "Cold",
        "Happy",
        "Sad",
        "Good",
        "Bad",
        "Expensive",
        "Cheap",
        "New",
        "Old",
        "Rich",
        "Poor",
        "Strong",
        "Weak",
        "Clean",
        "Dirty",
        "Heavy",
        "Light",
        "Hard",
        "Soft",
        "Long",
        "Short",
        "Wide",
        "Narrow",
        "Full",
        "Empty",
        "Safe",
        "Dangerous",
        "Easy",
        "Difficult",
        "Useful",
        "Useless",
        "Brave",
        "Coward",
        "Healthy",
        "Sick",
        "Early",
        "Late",
        "Beautiful",
        "Ugly",
        "Right",
        "Wrong",
        "Young",
        "Old"
      ]
    },
    "2-3": {
      "groupId": "v4",
      "words": [
        "Thick",
        "Thin",
        "Sharp",
        "Blunt",
        "Bright",
        "Dim",
        "Loud",
        "Quiet",
        "Brave",
        "Afraid",
        "Clever",
        "Stupid",
        "Kind",
        "Cruel",
        "Polite",
        "Impolite",
        "Famous",
        "Unknown",
        "Busy",
        "Free",
        "Public",
        "Private",
        "Modern",
        "Ancient",
        "Natural",
        "Artificial",
        "Sweet",
        "Sour",
        "True",
        "False",
        "Normal",
        "Strange",
        "Tight",
        "Loose",
        "Rough",
        "Smooth",
        "Deep",
        "Shallow",
        "Alive",
        "Dead",
        "Same",
        "Different",
        "Useful",
        "Useless",
        "Careful",
        "Careless",
        "Visible",
        "Invisible",
        "Together",
        "Alone"
      ]
    },
    "3-2": {
      "groupId": "v5",
      "words": [
        "Father",
        "Mother",
        "Parents",
        "Son",
        "Daughter",
        "Brother",
        "Sister",
        "Siblings",
        "Grandfather",
        "Grandmother",
        "Grandparents",
        "Grandson",
        "Granddaughter",
        "Uncle",
        "Aunt",
        "Cousin",
        "Nephew",
        "Niece",
        "Husband",
        "Wife",
        "Baby",
        "Child",
        "Children",
        "Teenager",
        "Adult",
        "Man",
        "Woman",
        "Relative",
        "Family tree",
        "Ancestors",
        "Stepfather",
        "Stepmother",
        "Stepbrother",
        "Stepsister",
        "Half-brother",
        "Half-sister",
        "Father-in-law",
        "Mother-in-law",
        "Son-in-law",
        "Daughter-in-law",
        "Twin",
        "Only child",
        "Groom",
        "Bride",
        "Neighbors",
        "Friend",
        "Best friend",
        "Fiancé",
        "Fiancée",
        "Single"
      ]
    },
    "3-3": {
      "groupId": "v6",
      "words": [
        "House",
        "Apartment",
        "Door",
        "Window",
        "Wall",
        "Floor",
        "Roof",
        "Stairs",
        "Garden",
        "Garage",
        "Living room",
        "Bedroom",
        "Bathroom",
        "Kitchen",
        "Dining room",
        "Balcony",
        "Hallway",
        "Sofa",
        "Armchair",
        "Table",
        "Chair",
        "Bed",
        "Wardrobe",
        "Desk",
        "Shelf",
        "Mirror",
        "Curtain",
        "Carpet",
        "Lamp",
        "Clock",
        "Television",
        "Fridge",
        "Oven",
        "Microwave",
        "Washing machine",
        "Sink",
        "Toilet",
        "Shower",
        "Bathtub",
        "Towel",
        "Pillow",
        "Blanket",
        "Key",
        "Phone",
        "Computer",
        "Fan",
        "Air conditioner",
        "Broom",
        "Trash can",
        "Iron"
      ]
    },
    "4-2": {
      "groupId": "v7",
      "words": [
        "Dove",
        "Fox",
        "Puppy",
        "Kitten",
        "Rabbit",
        "Hamster",
        "Parrot",
        "Clownfish",
        "Tortoise",
        "Bird",
        "Horse",
        "Cow",
        "Sheep",
        "Goat",
        "Chicken",
        "Rooster",
        "Peacock",
        "Duck",
        "Goose",
        "Turkey",
        "Donkey",
        "Camel",
        "Bear",
        "Bull",
        "Calf",
        "Lamb",
        "Cheetah",
        "Mouse",
        "Bee",
        "Butterfly",
        "Ant",
        "Housefly",
        "Mosquito",
        "Spider",
        "Worm",
        "Snail",
        "Frog",
        "Snake",
        "Pigeon",
        "Eagle",
        "Owl",
        "Crow",
        "Swan",
        "Bat",
        "Squirrel",
        "Monkey",
        "Deer",
        "Lion",
        "Tiger",
        "Elephant"
      ]
    },
    "4-3": {
      "groupId": "v8",
      "words": [
        "Giraffe",
        "Zebra",
        "Gorilla",
        "Seal",
        "Panda",
        "Kangaroo",
        "Hippopotamus",
        "Rhinoceros",
        "Wolf",
        "Crocodile",
        "Alligator",
        "Lizard",
        "Chimpanzee",
        "Whale",
        "Dolphin",
        "Shark",
        "Octopus",
        "Penguin",
        "Turtle",
        "Crab",
        "Lobster",
        "Shrimp",
        "Starfish",
        "Jellyfish",
        "Seahorse",
        "Squid",
        "Stingray",
        "Ostrich",
        "Falcon",
        "Cobra",
        "Flamingo",
        "Scorpion",
        "Grasshopper",
        "Cockroach",
        "Ladybug",
        "Dragon",
        "Dinosaur",
        "Hyena",
        "Sloth",
        "Hedgehog",
        "Eel",
        "Needlefish",
        "Oyster",
        "Woodpecker",
        "Hummingbird",
        "Seagull",
        "Cricket",
        "Bumblebee",
        "Caterpillar",
        "Chameleon"
      ]
    },
    "5-2": {
      "groupId": "v9",
      "words": [
        "Teacher",
        "Student",
        "Doctor",
        "Nurse",
        "Dentist",
        "Engineer",
        "Architect",
        "Pilot",
        "Flight attendant",
        "Lawyer",
        "Judge",
        "Police officer",
        "Firefighter",
        "Soldier",
        "Sailor",
        "Chef",
        "Waiter",
        "Baker",
        "Butcher",
        "Farmer",
        "Fisherman",
        "Driver",
        "Mechanic",
        "Carpenter",
        "Plumber",
        "Electrician",
        "Painter",
        "Tailor",
        "Barber",
        "Hairdresser",
        "Artist",
        "Photographer",
        "Actor",
        "Singer",
        "Dancer",
        "Writer",
        "Journalist",
        "Scientist",
        "Astronaut",
        "Athlete",
        "Banker",
        "Accountant",
        "Secretary",
        "Receptionist",
        "Shop assistant",
        "Manager",
        "Programmer",
        "Designer",
        "Guide",
        "Retired"
      ]
    },
    "5-3": {
      "groupId": "v10",
      "words": [
        "School",
        "University",
        "Hospital",
        "Pharmacy",
        "Supermarket",
        "Restaurant",
        "Cafe",
        "Bank",
        "Hotel",
        "Airport",
        "Station",
        "Library",
        "Museum",
        "Cinema",
        "Park",
        "Zoo",
        "Gym",
        "Stadium",
        "Mosque",
        "Church",
        "Bakery",
        "Pharmacy",
        "Bookstore",
        "Butcher shop",
        "Mall",
        "Market",
        "Office",
        "Factory",
        "Farm",
        "Police station",
        "Fire station",
        "Post office",
        "Gas station",
        "Bridge",
        "Street",
        "Square",
        "Playground",
        "Beach",
        "Sea",
        "River",
        "Lake",
        "Mountain",
        "Forest",
        "Desert",
        "Island",
        "Village",
        "City",
        "Country",
        "World",
        "Home"
      ]
    },
    "6-2": {
      "groupId": "v11",
      "words": [
        "Head",
        "Hair",
        "Face",
        "Eye",
        "Eyebrow",
        "Eyelash",
        "Ear",
        "Nose",
        "Mouth",
        "Lip",
        "Tooth",
        "Tongue",
        "Cheek",
        "Chin",
        "Neck",
        "Shoulder",
        "Arm",
        "Elbow",
        "Wrist",
        "Hand",
        "Finger",
        "Thumb",
        "Fingernail",
        "Chest",
        "Stomach",
        "Backbone",
        "Waist",
        "Hip",
        "Leg",
        "Knee",
        "Ankle",
        "Foot",
        "Heel",
        "Toe",
        "Skin",
        "Bone",
        "Muscle",
        "Blood",
        "Heart",
        "Lungs",
        "Brain",
        "Throat",
        "Veins",
        "Arteries",
        "Liver",
        "Kidney",
        "Rib",
        "Ring finger",
        "Fist",
        "Body"
      ]
    },
    "6-3": {
      "groupId": "v12",
      "words": [
        "Shirt",
        "T-shirt",
        "Pants",
        "Jeans",
        "Shorts",
        "Dress",
        "Skirt",
        "Blouse",
        "Suit",
        "Jacket",
        "Coat",
        "Sweater",
        "Hoodie",
        "Vest",
        "Pajamas",
        "lipstick",
        "Socks",
        "Shoes",
        "Sneakers",
        "Boots",
        "Flip-flops",
        "Slippers",
        "Heels",
        "Hat",
        "Cap",
        "Scarf",
        "Gloves",
        "Belt",
        "Tie",
        "Bow tie",
        "Glasses",
        "Sunglasses",
        "Watch",
        "Ring",
        "Necklace",
        "Bracelet",
        "Earrings",
        "Handbag",
        "Backpack",
        "Wallet",
        "Umbrella",
        "Button",
        "Zipper",
        "Pocket",
        "Uniform",
        "lighter",
        "Swimsuit",
        "Bathrobe",
        "Jewelry",
        "Suitcase"
      ]
    },
    "7-2": {
      "groupId": "v13",
      "words": [
        "Fees",
        "Bus",
        "Truck",
        "Limousine",
        "Bicycle",
        "Motorcycle",
        "Scooter",
        "Train",
        "Subway",
        "Monorail",
        "Plane",
        "Helicopter",
        "Ship",
        "Boat",
        "Yacht",
        "Ferry",
        "Rocket",
        "Ambulance",
        "Fire truck",
        "Police car",
        "Van",
        "Tractor",
        "Traffic bar",
        "Crane",
        "Tank",
        "Balloon",
        "Parachute",
        "Submarine",
        "Skateboard",
        "Wheelchair",
        "Engine",
        "Wheel",
        "Tire",
        "Steering wheel",
        "Brake",
        "Door",
        "Window",
        "Seat",
        "Seatbelt",
        "horn",
        "Fuel",
        "Driver",
        "Pilot",
        "Captain",
        "Passenger",
        "Station",
        "Highway",
        "Ring road",
        "pedestrian",
        "Bridge"
      ]
    },
    "7-3": {
      "groupId": "v14",
      "words": [
        "School",
        "Classroom",
        "Desk",
        "Chair",
        "Institute",
        "Whiteboard",
        "Chalk",
        "Marker",
        "Eraser",
        "Pen",
        "Pencil",
        "Sharpener",
        "Ruler",
        "Notebook",
        "Book",
        "Paper",
        "Backpack",
        "Pencil case",
        "Scissors",
        "Glue",
        "Tape",
        "Stapler",
        "Calculator",
        "Computer",
        "Laptop",
        "Tablet",
        "Homework",
        "Lesson",
        "Exam",
        "Grade",
        "Teacher",
        "Student",
        "Principal",
        "Library",
        "Laboratory",
        "Map",
        "Globe",
        "Dictionary",
        "Subject",
        "English",
        "Math",
        "Science",
        "History",
        "Geography",
        "Art",
        "Music",
        "Campus",
        "Break",
        "Schedule",
        "University"
      ]
    },
    "8-2": {
      "groupId": "v15",
      "words": [
        "Breakfast",
        "Lunch",
        "Dinner",
        "Snack",
        "Bread",
        "Rice",
        "Pasta",
        "Pizza",
        "Burger",
        "Sandwich",
        "Soup",
        "Salad",
        "Cheese",
        "Egg",
        "Butter",
        "Yogurt",
        "Meat",
        "Chicken",
        "Fish",
        "Steak",
        "Sausage",
        "Seafood",
        "Salt",
        "Pepper",
        "Sugar",
        "Honey",
        "Oil",
        "Sauce",
        "Jam",
        "Cake",
        "Chocolate",
        "Ice cream",
        "Cookie",
        "Candy",
        "Water",
        "Milk",
        "Juice",
        "Tea",
        "Coffee",
        "Soda",
        "Lemonade",
        "chew",
        "Flour",
        "Wheat",
        "Cereal",
        "Noodles",
        "Pie",
        "Vinegar",
        "Menu",
        "Bill"
      ]
    },
    "8-3": {
      "groupId": "v16",
      "words": [
        "Sun",
        "Moon",
        "Star",
        "Sky",
        "Cloud",
        "Rain",
        "Snow",
        "Wind",
        "Storm",
        "Thunder",
        "Lightning",
        "Fog",
        "Rainbow",
        "Ice",
        "Heat",
        "Cold",
        "Summer",
        "Winter",
        "Spring",
        "Autumn",
        "Mountain",
        "Hill",
        "Valley",
        "Forest",
        "Jungle",
        "Desert",
        "Island",
        "Beach",
        "Ocean",
        "Sea",
        "River",
        "Lake",
        "Waterfall",
        "Cave",
        "Volcano",
        "Earthquake",
        "Earth",
        "Planet",
        "Space",
        "Tree",
        "Flower",
        "Leaf",
        "Grass",
        "Plant",
        "Rock",
        "Stone",
        "Sand",
        "Dust",
        "Air",
        "Nature"
      ]
    },
    "9-2": {
      "groupId": "v17",
      "words": [
        "Wake up",
        "Get up",
        "Wash my face",
        "Brush my teeth",
        "Take a shower",
        "Dry my hair",
        "Get dressed",
        "Brush my hair",
        "Make breakfast",
        "Eat breakfast",
        "Drink coffee",
        "Go to work",
        "Go to school",
        "Wait for the bus",
        "Drive to work",
        "Start work",
        "Check emails",
        "Answer calls",
        "Have a meeting",
        "Eat lunch",
        "Finish work",
        "Buy groceries",
        "Go home",
        "Arrive home",
        "Cook dinner",
        "Eat dinner",
        "Set the table",
        "Clear the table",
        "Do the dishes",
        "Watch TV",
        "Listen to music",
        "Read a book",
        "Play games",
        "Surf the internet",
        "Exercise",
        "Go for a walk",
        "Clean the house",
        "Do the laundry",
        "Iron the clothes",
        "Water the plants",
        "Take out the trash",
        "Feed the pet",
        "Study",
        "Do homework",
        "Put on pajamas",
        "Set the alarm",
        "Turn off the lights",
        "Go to bed",
        "Fall asleep",
        "Dream"
      ]
    },
    "9-3": {
      "groupId": "v18",
      "words": [
        "Break a leg",
        "Piece of cake",
        "Under the weather",
        "Once in a blue moon",
        "Call it a day",
        "Keep in touch",
        "Look after",
        "Give up",
        "Carry on",
        "Find out",
        "Get along",
        "Run out of",
        "Take care of",
        "Turn up",
        "Turn down",
        "Look forward to",
        "Put off",
        "Take off",
        "Set up",
        "Make up",
        "Break up",
        "Catch up",
        "Hold on",
        "Calm down",
        "Check in",
        "Check out",
        "Come across",
        "Cut down on",
        "Fall apart",
        "Get over",
        "Give in",
        "Grow up",
        "Hang out",
        "Let down",
        "Look for",
        "Pass out",
        "Pick up",
        "Point out",
        "Put up with",
        "Show off",
        "Stand out",
        "Work out",
        "Cheer up",
        "Calm down",
        "Go on",
        "Better late than never",
        "No pain no gain",
        "Break the ice",
        "So far so good",
        "Easy come easy go"
      ]
    }
  }
};

// ════════════════════════════════════════════
// VOCABULARY ENGINE
// ════════════════════════════════════════════
const VocabEngine = {

    words:        [],
    groupId:      "",
    currentIndex: 0,
    audio:        null,
    started:      false,
    autoPlay:     true,

    init(lessonData) {
        this.words        = lessonData.words;
        this.groupId      = lessonData.groupId;
        this.currentIndex = 0;
        this.started      = false;
        this.autoPlay     = true;
        if (this.audio) { this.audio.pause(); this.audio = null; }
        this._injectStyles();
        this._renderStart();
    },

    // ── Start Screen ──
    _renderStart() {
        document.getElementById("stage-content").innerHTML = `
            <div class="ve-root">
                <div class="ve-start" id="ve-start" onclick="VocabEngine._launch()">
                    <div class="ve-start-icon">&#127891;</div>
                    <div class="ve-start-label">TAP TO LAUNCH</div>
                    <div class="ve-start-sub">${this.words.length} WORDS &nbsp;·&nbsp; ${this.groupId.toUpperCase()}</div>
                </div>
            </div>`;
    },

    _launch() {
        this.started = true;
        this._renderShell();
        this._showWord(0);
    },

    // ── Main Shell ──
    _renderShell() {
        document.getElementById("stage-content").innerHTML = `
            <div class="ve-root">

                <!-- HEADER -->
                <div class="ve-header">
                    <div class="ve-group-badge">${this.groupId.toUpperCase()}</div>
                    <div class="ve-progress-wrap">
                        <div class="ve-progress-bar" id="ve-progress"></div>
                    </div>
                    <div class="ve-counter" id="ve-counter">1 / ${this.words.length}</div>
                </div>

                <!-- WORD DISPLAY -->
                <div class="ve-stage" id="ve-stage" onclick="VocabEngine._playAudio()">
                    <div class="ve-word-wrap">
                        <div class="ve-word" id="ve-word"></div>
                        <div class="ve-word-num" id="ve-word-num"></div>
                    </div>
                    <div class="ve-tap-hint" id="ve-tap-hint">&#9654; TAP WORD TO PLAY</div>
                </div>

                <!-- NAV -->
                <div class="ve-nav">
                    <button class="ve-btn ve-btn-prev" id="ve-prev" onclick="event.stopPropagation();VocabEngine._go(-1)">&#9664; PREV</button>

                    <div class="ve-nav-center">
                        <button class="ve-btn ve-btn-play" id="ve-play-btn" onclick="event.stopPropagation();VocabEngine._playAudio()">&#9654;</button>
                        <div class="ve-auto-row">
                            <span class="ve-auto-label">AUTO</span>
                            <div class="ve-toggle ${this.autoPlay ? "on" : ""}" id="ve-auto-toggle" onclick="event.stopPropagation();VocabEngine._toggleAuto()">
                                <div class="ve-toggle-knob"></div>
                            </div>
                        </div>
                    </div>

                    <button class="ve-btn ve-btn-next" id="ve-next" onclick="event.stopPropagation();VocabEngine._go(1)">NEXT &#9654;</button>
                </div>

            </div>`;

        // Keyboard
        document.onkeydown = e => {
            if (e.keyCode === 39 || e.keyCode === 32) { e.preventDefault(); VocabEngine._go(1); }
            if (e.keyCode === 37)                      { e.preventDefault(); VocabEngine._go(-1); }
            if (e.keyCode === 80)                      { VocabEngine._playAudio(); }
        };
    },

    // ── Show Word ──
    _showWord(idx) {
        this.currentIndex = idx;
        const word  = this.words[idx];
        const total = this.words.length;

        // Progress
        const prog = document.getElementById("ve-progress");
        const ctr  = document.getElementById("ve-counter");
        if (prog) prog.style.width = ((idx + 1) / total * 100) + "%";
        if (ctr)  ctr.textContent  = (idx + 1) + " / " + total;

        // Word — font size by length
        const wordEl = document.getElementById("ve-word");
        const numEl  = document.getElementById("ve-word-num");
        if (wordEl) {
            const len = word.length;
            const fs  = len <= 4 ? "22vw" : len <= 7 ? "17vw" : len <= 11 ? "13vw" : len <= 16 ? "9vw" : "7vw";
            wordEl.style.fontSize = fs;
            wordEl.textContent    = word;
            wordEl.style.animation = "none";
            requestAnimationFrame(() => { wordEl.style.animation = "ve-pop .35s cubic-bezier(.34,1.56,.64,1)"; });
        }
        if (numEl) numEl.textContent = (idx + 1);

        // Nav state
        const prev = document.getElementById("ve-prev");
        const next = document.getElementById("ve-next");
        if (prev) prev.disabled = (idx === 0);
        if (next) next.disabled = (idx === total - 1);

        // Dots update (visual highlight)
        this._updateDots(idx);

        // Auto play
        if (this.autoPlay) setTimeout(() => VocabEngine._playAudio(), 200);
    },

    _updateDots(idx) {
        // Update stage background pulse
        const stage = document.getElementById("ve-stage");
        if (stage) {
            stage.style.animation = "none";
            requestAnimationFrame(() => { stage.style.animation = "ve-bg-pulse .5s ease"; });
        }
    },

    // ── Audio ──
    _playAudio() {
        if (!this.started) return;
        const idx  = this.currentIndex;
        const path = "data/Vocabulary/" + this.groupId + "/" + (idx + 1) + ".wav";

        const playBtn = document.getElementById("ve-play-btn");
        const hint    = document.getElementById("ve-tap-hint");

        if (this.audio) { this.audio.pause(); this.audio = null; }

        this.audio = new Audio(path);

        if (playBtn) { playBtn.innerHTML = "&#9646;&#9646;"; playBtn.classList.add("playing"); }
        if (hint)    hint.style.opacity = "0";

        this.audio.play().catch(() => {});

        this.audio.onended = () => {
            if (playBtn) { playBtn.innerHTML = "&#9654;"; playBtn.classList.remove("playing"); }
            if (hint) hint.style.opacity = "1";
        };
        this.audio.onerror = () => {
            if (playBtn) { playBtn.innerHTML = "&#9654;"; playBtn.classList.remove("playing"); }
        };
    },

    // ── Navigation ──
    _go(dir) {
        const next = this.currentIndex + dir;
        if (next < 0 || next >= this.words.length) return;
        if (this.audio) { this.audio.pause(); this.audio = null; }
        const playBtn = document.getElementById("ve-play-btn");
        if (playBtn) { playBtn.innerHTML = "&#9654;"; playBtn.classList.remove("playing"); }
        this._showWord(next);
    },

    _toggleAuto() {
        this.autoPlay = !this.autoPlay;
        const toggle = document.getElementById("ve-auto-toggle");
        if (toggle) toggle.classList.toggle("on", this.autoPlay);
    },

    // ── Styles ──
    _injectStyles() {
        if (document.getElementById("ve-styles")) return;
        const s = document.createElement("style"); s.id = "ve-styles";
        s.textContent = `
        .ve-root{height:100vh;width:100%;display:flex;flex-direction:column;background:#050810;font-family:"Barlow","Segoe UI",sans-serif;color:#fff;position:relative;overflow:hidden}
        .ve-root::before{content:"";position:absolute;inset:0;pointer-events:none;
            background:radial-gradient(ellipse at 50% 40%,rgba(197,160,89,0.07) 0%,transparent 65%)}

        /* START */
        .ve-start{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;
            justify-content:center;gap:2vh;cursor:pointer;transition:transform .2s}
        .ve-start:hover{transform:scale(1.03)}
        .ve-start-icon{font-size:12vw;filter:drop-shadow(0 0 30px #c5a059)}
        .ve-start-label{font-family:"Orbitron",sans-serif;font-size:clamp(1.2rem,3vw,2.5rem);
            font-weight:900;letter-spacing:8px;color:#fff;text-transform:uppercase}
        .ve-start-sub{font-family:"Orbitron",sans-serif;font-size:clamp(.6rem,1.2vw,1rem);
            letter-spacing:4px;color:#c5a059;opacity:.7}

        /* HEADER */
        .ve-header{height:52px;flex-shrink:0;display:flex;align-items:center;gap:16px;
            padding:0 28px;background:rgba(5,8,16,.95);
            border-bottom:1px solid rgba(197,160,89,.18);position:relative;z-index:2}
        .ve-group-badge{font-family:"Orbitron",sans-serif;font-size:.6rem;font-weight:900;
            letter-spacing:4px;color:#000;background:#c5a059;padding:4px 14px;border-radius:20px}
        .ve-progress-wrap{flex:1;height:3px;background:rgba(255,255,255,.08);border-radius:2px;overflow:hidden}
        .ve-progress-bar{height:100%;background:linear-gradient(90deg,#c5a059,#00d4ff);
            border-radius:2px;transition:width .4s ease;box-shadow:0 0 8px rgba(197,160,89,.5)}
        .ve-counter{font-family:"Orbitron",sans-serif;font-size:.55rem;
            color:rgba(255,255,255,.35);letter-spacing:2px;flex-shrink:0}

        /* STAGE */
        .ve-stage{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;
            cursor:pointer;position:relative;gap:2vh}
        @keyframes ve-bg-pulse{0%{background:rgba(197,160,89,.04)}50%{background:rgba(197,160,89,.09)}100%{background:rgba(197,160,89,.04)}}

        /* WORD */
        .ve-word-wrap{display:flex;flex-direction:column;align-items:center;gap:1vh}
        .ve-word{font-family:"Barlow",sans-serif;font-weight:900;color:#fff;text-align:center;
            line-height:1;letter-spacing:-1px;
            text-shadow:0 0 60px rgba(197,160,89,.25),0 0 120px rgba(197,160,89,.1);
            transition:font-size .2s ease}
        @keyframes ve-pop{from{transform:scale(.85);opacity:0}to{transform:scale(1);opacity:1}}
        .ve-word-num{font-family:"Orbitron",sans-serif;font-size:clamp(.5rem,1.2vw,.8rem);
            color:rgba(197,160,89,.4);letter-spacing:4px}
        .ve-tap-hint{font-family:"Orbitron",sans-serif;font-size:clamp(.5rem,.9vw,.7rem);
            color:rgba(255,255,255,.2);letter-spacing:3px;transition:opacity .3s}

        /* NAV */
        .ve-nav{height:72px;flex-shrink:0;display:flex;align-items:center;justify-content:space-between;
            padding:0 28px;background:rgba(4,6,14,.97);
            border-top:1px solid rgba(197,160,89,.1);position:relative;z-index:2}
        .ve-btn{padding:10px 24px;background:transparent;border:1px solid #c5a059;color:#c5a059;
            border-radius:8px;cursor:pointer;font-family:"Orbitron",sans-serif;
            font-size:.6rem;letter-spacing:2px;transition:background .2s,color .2s}
        .ve-btn:hover:not(:disabled){background:#c5a059;color:#000}
        .ve-btn:disabled{opacity:.2;cursor:not-allowed}

        .ve-nav-center{display:flex;flex-direction:column;align-items:center;gap:8px}
        .ve-btn-play{width:56px;height:56px;border-radius:50%;font-size:1.2rem;padding:0;
            display:flex;align-items:center;justify-content:center;
            background:#c5a059;border:none;color:#000;
            box-shadow:0 0 20px rgba(197,160,89,.4);transition:transform .2s,box-shadow .2s}
        .ve-btn-play:hover{transform:scale(1.1);box-shadow:0 0 32px rgba(197,160,89,.6)}
        .ve-btn-play.playing{background:#ff4757;box-shadow:0 0 20px rgba(255,71,87,.4)}

        .ve-auto-row{display:flex;align-items:center;gap:6px}
        .ve-auto-label{font-family:"Orbitron",sans-serif;font-size:.42rem;
            letter-spacing:2px;color:rgba(255,255,255,.4)}
        .ve-toggle{width:32px;height:17px;border-radius:10px;background:rgba(255,255,255,.1);
            cursor:pointer;position:relative;transition:background .3s;border:1px solid rgba(255,255,255,.15)}
        .ve-toggle.on{background:#c5a059;border-color:#c5a059}
        .ve-toggle-knob{position:absolute;top:2px;left:2px;width:11px;height:11px;
            border-radius:50%;background:#fff;transition:left .3s}
        .ve-toggle.on .ve-toggle-knob{left:17px}
        `;
        document.head.appendChild(s);
    }
};
