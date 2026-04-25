/* ════════════════════════════════════════════
   grammar-engine.js
   Standalone — يتحمل في EYCSB.html كـ <script>
   ════════════════════════════════════════════ */

// ════════════════════════════════════════════
// GRAMMAR DATA — 17 درس
// ════════════════════════════════════════════
const GRAMMAR_DATA = {
  "meta": {
    "version": "2.0",
    "total_lessons": 17,
    "description": "VETO Grammar Data — structured for GrammarEngine"
  },

  "lessons": {

    "1-1": {
      "id": "1-1",
      "title": "PRONOUNS",
      "subtitle": "MASTER CLASS WITH MR. EZZ",
      "color": "#c5a059",
      "slides": [
        { "type": "big-title", "content": "PRONOUNS", "subtitle": "MASTER CLASS WITH MR. EZZ", "color": "#c5a059" },

        {
          "type": "definitions",
          "title": "Subject Pronouns",
          "items": [
            { "p": "I / He / She / It", "d": "Singular Subjects" },
            { "p": "We / They / You",   "d": "Plural Subjects"   }
          ]
        },

        {
          "type": "mcq-interactive",
          "title": "Level 1 — Subject Pronouns Check",
          "questions": [
            { "q": "____ is reading a book.",              "opts": ["Him","He","Me"],      "ans": "He"   },
            { "q": "____ are playing football.",           "opts": ["Them","Us","They"],   "ans": "They" },
            { "q": "My sister is tall, ____ is a doctor.","opts": ["Her","She","It"],      "ans": "She"  },
            { "q": "The dog is hungry, ____ wants food.", "opts": ["He","It","They"],      "ans": "It"   },
            { "q": "____ go to school every day.",        "opts": ["Us","Me","We"],        "ans": "We"   },
            { "q": "Are ____ coming to the party?",       "opts": ["your","them","you"],   "ans": "you"  },
            { "q": "My friend and I are happy, ____ won.","opts": ["We","They","Us"],      "ans": "We"   },
            { "q": "____ am very tired today.",           "opts": ["Me","I","My"],         "ans": "I"    },
            { "q": "Ahmed is smart, ____ studies hard.",  "opts": ["Him","He","His"],      "ans": "He"   },
            { "q": "The flowers smell good, ____ are beautiful.", "opts": ["It","Them","They"], "ans": "They" }
          ]
        },

        {
          "type": "transform-table",
          "title": "The Transformation Map",
          "pairs": [
            { "s": "I",    "o": "Me"   },
            { "s": "He",   "o": "Him"  },
            { "s": "She",  "o": "Her"  },
            { "s": "It",   "o": "It"   },
            { "s": "We",   "o": "Us"   },
            { "s": "They", "o": "Them" },
            { "s": "You",  "o": "You"  }
          ]
        },

        {
          "type": "writing-focus",
          "title": "The Golden Rule",
          "content": "<span style='color:#c5a059'>Subject</span> <span style='color:#555'>➔</span> <span style='background:#c5a059;color:#000;padding:4px 24px;border-radius:12px'>VERB</span> <span style='color:#555'>➔</span> <span style='color:#ff4d4d'>Object</span>"
        },

        {
          "type": "mcq-interactive",
          "title": "Level 2 — Object Pronouns Check",
          "questions": [
            { "q": "I saw Ali and talked to ____.",        "opts": ["he","him","his"],     "ans": "him"  },
            { "q": "Can you help ____ with this bag?",     "opts": ["me","I","my"],        "ans": "me"   },
            { "q": "Our teacher gave ____ homework.",      "opts": ["we","our","us"],      "ans": "us"   },
            { "q": "I like these shoes, I will buy ____.", "opts": ["they","them","it"],   "ans": "them" },
            { "q": "Where is Sara? I need to call ____.",  "opts": ["her","she","hers"],   "ans": "her"  },
            { "q": "The cake is delicious, taste ____?",   "opts": ["it","its","them"],    "ans": "it"   },
            { "q": "Please listen to ____, I am talking.", "opts": ["I","my","me"],        "ans": "me"   },
            { "q": "We invited them, we like ____.",       "opts": ["them","they","their"],"ans": "them" },
            { "q": "My father told ____ a funny story.",   "opts": ["we","us","our"],      "ans": "us"   },
            { "q": "Don't worry about ____, I can do it.", "opts": ["I","my","me"],        "ans": "me"   }
          ]
        },

        { "type": "big-title", "content": "FANTASTIC!", "subtitle": "You Are A Pronouns Pro", "color": "#00ff88" }
      ]
    },

    "1-2": {
      "id": "1-2",
      "title": "POSSESSIVES & VERB TO BE",
      "subtitle": "GRAMMAR MASTER",
      "color": "#3498db",
      "slides": [
        { "type": "big-title", "content": "GRAMMAR MASTER", "subtitle": "POSSESSIVES & VERB TO BE", "color": "#c5a059" },

        { "type": "big-title", "content": "STEP 1", "subtitle": "POSSESSIVE ADJECTIVES", "color": "#3498db" },

        {
          "type": "reveal-grid",
          "title": "Possessive Adjectives",
          "desc": "Used BEFORE a noun — My car / His book / Her bag",
          "items": ["My car","His book","Her bag","Its tail","Our house","Your phone","Their pens"]
        },

        {
          "type": "compare-table",
          "title": "Possessive Family",
          "headers": ["Subject","Adjective","Pronoun"],
          "rows": [
            { "s": "I",    "v": "My",    "e": "Mine"   },
            { "s": "He",   "v": "His",   "e": "His"    },
            { "s": "She",  "v": "Her",   "e": "Hers"   },
            { "s": "It",   "v": "Its",   "e": "---"    },
            { "s": "We",   "v": "Our",   "e": "Ours"   },
            { "s": "They", "v": "Their", "e": "Theirs" },
            { "s": "You",  "v": "Your",  "e": "Yours"  }
          ]
        },

        {
          "type": "mcq-interactive",
          "title": "Possessives Practice",
          "questions": [
            { "q": "This is my pen. It is ________.",          "opts": ["me","mine","my"],      "ans": "mine"   },
            { "q": "She has a cat. ________ name is Fluffy.",  "opts": ["Her","Hers","She"],    "ans": "Her"    },
            { "q": "This house belongs to us. It is ________.", "opts": ["our","ours","we"],    "ans": "ours"   },
            { "q": "He lost ________ key yesterday.",          "opts": ["him","his","he"],      "ans": "his"    },
            { "q": "Is this ________ phone? Yes, it's mine.",  "opts": ["you","yours","your"],  "ans": "your"   },
            { "q": "They have a car. That car is ________.",   "opts": ["their","theirs","them"],"ans": "theirs"},
            { "q": "The bird is in ________ nest.",            "opts": ["its","it's","it"],     "ans": "its"    },
            { "q": "I like ________ new shirt, Ahmed!",        "opts": ["your","yours","you"],  "ans": "your"   },
            { "q": "This bag isn't mine, it is ________.",     "opts": ["her","hers","she"],    "ans": "hers"   },
            { "q": "We love ________ school very much.",       "opts": ["our","ours","us"],     "ans": "our"    }
          ]
        },

        { "type": "big-title", "content": "STEP 2", "subtitle": "VERB TO BE (AM - IS - ARE)", "color": "#c5a059" },

        {
          "type": "rule-slide",
          "title": "Positive Structure",
          "formula": "SUBJECT + HELPING VERB",
          "examples": [
            { "full": "I am",    "short": "I'm"    },
            { "full": "He is",   "short": "He's"   },
            { "full": "You are", "short": "You're" }
          ],
          "color": "#c5a059"
        },

        {
          "type": "compare-table",
          "title": "Verb to Be — Positive",
          "headers": ["Subject","Verb","Example"],
          "rows": [
            { "s": "I",               "v": "AM",  "e": "I am a teacher"      },
            { "s": "He / She / It",   "v": "IS",  "e": "He is happy"         },
            { "s": "We / You / They", "v": "ARE", "e": "They are students"   }
          ]
        },

        {
          "type": "rule-slide",
          "title": "Negative Structure",
          "formula": "SUBJECT + VERB BE + NOT",
          "examples": [
            { "full": "I'm not",       "short": "---"                    },
            { "full": "She is not",    "short": "She's not / She isn't"  },
            { "full": "We are not",    "short": "We're not / We aren't"  }
          ],
          "color": "#e74c3c"
        },

        {
          "type": "rule-slide",
          "title": "Question Structure",
          "formula": "HELPING VERB + SUBJECT + ?",
          "examples": [
            { "full": "Am I...?",    "short": "---" },
            { "full": "Is he...?",   "short": "---" },
            { "full": "Are they...?","short": "---" }
          ],
          "color": "#f1c40f"
        },

        {
          "type": "mcq-interactive",
          "title": "Verb to Be Practice",
          "questions": [
            { "q": "I ________ very happy today.",      "opts": ["is","are","am"],  "ans": "am"  },
            { "q": "They ________ my best friends.",    "opts": ["are","am","is"],  "ans": "are" },
            { "q": "________ she your sister?",        "opts": ["Are","Is","Am"],   "ans": "Is"  },
            { "q": "We ________ not at home now.",     "opts": ["is","am","are"],   "ans": "are" },
            { "q": "The dog ________ hungry.",         "opts": ["is","are","am"],   "ans": "is"  },
            { "q": "________ you ready for the test?", "opts": ["Is","Am","Are"],   "ans": "Are" },
            { "q": "It ________ a very hot day.",      "opts": ["is","are","am"],   "ans": "is"  },
            { "q": "Ahmed and Ali ________ clever.",   "opts": ["is","am","are"],   "ans": "are" },
            { "q": "I ________ not a doctor.",         "opts": ["is","am","are"],   "ans": "am"  },
            { "q": "________ it your book?",          "opts": ["Is","Are","Am"],    "ans": "Is"  }
          ]
        },

        { "type": "big-title", "content": "PERFECT!", "subtitle": "GRAMMAR FOUNDATION COMPLETED", "color": "#2ecc71" }
      ]
    },

    "1-3": {
      "id": "1-3",
      "title": "INDEFINITE ARTICLES",
      "subtitle": "A / AN / THE — MASTER CLASS",
      "color": "#9b59b6",
      "slides": [
        { "type": "big-title", "content": "ARTICLES", "subtitle": "A / AN / THE — MASTER CLASS", "color": "#9b59b6" },

        {
          "type": "definitions",
          "title": "What Are Articles?",
          "items": [
            { "p": "A / AN",  "d": "Indefinite — any one of something (first mention)" },
            { "p": "THE",     "d": "Definite — a specific one we both know about"      }
          ]
        },

        {
          "type": "rule-slide",
          "title": "A vs AN — The Vowel Rule",
          "formula": "Sound matters, NOT spelling",
          "examples": [
            { "full": "A + Consonant sound",  "short": "a book / a car / a university" },
            { "full": "AN + Vowel sound",     "short": "an apple / an hour / an idea"  }
          ],
          "color": "#9b59b6"
        },

        {
          "type": "compare-table",
          "title": "A vs AN — Quick Examples",
          "headers": ["Use A", "Use AN"],
          "rows": [
            { "s": "a dog",        "v": "an egg",       "e": "" },
            { "s": "a car",        "v": "an orange",    "e": "" },
            { "s": "a university", "v": "an uncle",     "e": "" },
            { "s": "a house",      "v": "an hour",      "e": "" },
            { "s": "a European",   "v": "an honest man","e": "" }
          ]
        },

        {
          "type": "reveal-grid",
          "title": "When to use THE",
          "desc": "Use THE when both speaker and listener know which one",
          "items": [
            "Second mention — I saw a dog. The dog was big.",
            "Unique things — the sun / the moon / the sky",
            "Superlatives — the best / the tallest",
            "Specific place — the bank / the school (near us)",
            "Country names with 'of' — the USA / the UK",
            "Rivers & mountains — the Nile / the Alps"
          ]
        },

        {
          "type": "reveal-grid",
          "title": "No Article — Zero Article",
          "desc": "Sometimes we use NO article at all",
          "items": [
            "General plural — Dogs are loyal. (not: the dogs)",
            "Languages — He speaks Arabic.",
            "Meals — We had lunch at noon.",
            "Sports — She plays football.",
            "Countries (most) — Egypt / France / Japan",
            "Titles + names — Doctor Ahmed / President Ali"
          ]
        },

        {
          "type": "mcq-interactive",
          "title": "Articles Practice — Fill the Gap",
          "questions": [
            { "q": "I saw ____ elephant at the zoo.",                 "opts": ["a","an","the"],    "ans": "an"  },
            { "q": "____ sun rises in the east.",                     "opts": ["A","An","The"],    "ans": "The" },
            { "q": "She is ____ honest woman.",                       "opts": ["a","an","the"],    "ans": "an"  },
            { "q": "I have ____ car. ____ car is red.",               "opts": ["a / The","an / A","the / A"], "ans": "a / The" },
            { "q": "He is ____ best student in the class.",           "opts": ["a","an","the"],    "ans": "the" },
            { "q": "Can I have ____ orange, please?",                 "opts": ["a","an","the"],    "ans": "an"  },
            { "q": "She goes to ____ school every morning.",          "opts": ["a","an","the"],    "ans": "the" },
            { "q": "This is ____ university, not a college.",         "opts": ["a","an","the"],    "ans": "a"   },
            { "q": "I live near ____ Nile.",                          "opts": ["a","an","the"],    "ans": "the" },
            { "q": "____ hour has 60 minutes.",                       "opts": ["A","An","The"],    "ans": "An"  }
          ]
        },

        {
          "type": "writing-focus",
          "title": "The Golden Summary",
          "content": "<span style='color:#9b59b6'>A</span> = new / any &nbsp;|&nbsp; <span style='color:#3498db'>AN</span> = new / any + vowel sound &nbsp;|&nbsp; <span style='color:#c5a059'>THE</span> = specific / known"
        },

        { "type": "big-title", "content": "EXCELLENT!", "subtitle": "You Mastered Articles", "color": "#9b59b6" }
      ]
    },

    "1-4": {
      "id": "1-4",
      "title": "PLURAL NOUNS",
      "subtitle": "COUNTABLE & UNCOUNTABLE",
      "color": "#e67e22",
      "slides": [
        { "type": "big-title", "content": "PLURAL NOUNS", "subtitle": "COUNTABLE & UNCOUNTABLE", "color": "#e67e22" },

        {
          "type": "definitions",
          "title": "Two Types of Nouns",
          "items": [
            { "p": "Countable",   "d": "You can count them — 1 book, 2 books, 3 books" },
            { "p": "Uncountable", "d": "You cannot count them — water / music / advice" }
          ]
        },

        {
          "type": "compare-table",
          "title": "Plural Rules",
          "headers": ["Rule", "Singular", "Plural"],
          "rows": [
            { "s": "Most nouns → + s",          "v": "book / car",      "e": "books / cars"      },
            { "s": "s / sh / ch / x / z → + es","v": "bus / watch",     "e": "buses / watches"   },
            { "s": "consonant + y → ies",        "v": "city / baby",     "e": "cities / babies"   },
            { "s": "vowel + y → + s",            "v": "day / key",       "e": "days / keys"       },
            { "s": "f / fe → ves",              "v": "knife / leaf",    "e": "knives / leaves"   },
            { "s": "Irregular",                  "v": "man / child",     "e": "men / children"    }
          ]
        },

        {
          "type": "reveal-grid",
          "title": "Irregular Plurals",
          "desc": "These must be memorized — no rules!",
          "items": [
            "man → men", "woman → women", "child → children",
            "tooth → teeth", "foot → feet", "mouse → mice",
            "goose → geese", "sheep → sheep", "fish → fish"
          ]
        },

        {
          "type": "reveal-grid",
          "title": "Uncountable Nouns",
          "desc": "Never add S — always singular verb",
          "items": [
            "water / juice / milk",
            "music / news / advice",
            "money / information",
            "furniture / equipment",
            "weather / traffic",
            "bread / rice / sugar"
          ]
        },

        {
          "type": "mcq-interactive",
          "title": "Plurals Practice",
          "questions": [
            { "q": "What is the plural of 'child'?",            "opts": ["childs","children","childes"],       "ans": "children"  },
            { "q": "What is the plural of 'city'?",             "opts": ["citys","cities","cityes"],           "ans": "cities"    },
            { "q": "What is the plural of 'knife'?",            "opts": ["knifes","knives","knife"],           "ans": "knives"    },
            { "q": "Water is ____ noun.",                       "opts": ["a countable","an uncountable","a plural"], "ans": "an uncountable" },
            { "q": "What is the plural of 'box'?",              "opts": ["boxs","box","boxes"],                "ans": "boxes"     },
            { "q": "What is the plural of 'sheep'?",            "opts": ["sheeps","sheep","sheepes"],          "ans": "sheep"     },
            { "q": "What is the plural of 'man'?",              "opts": ["mans","men","manes"],                "ans": "men"       },
            { "q": "The news ____ very important today.",        "opts": ["are","were","is"],                   "ans": "is"        },
            { "q": "What is the plural of 'leaf'?",             "opts": ["leafs","leaves","leafes"],           "ans": "leaves"    },
            { "q": "What is the plural of 'baby'?",             "opts": ["babys","babies","babyes"],           "ans": "babies"    }
          ]
        },

        { "type": "big-title", "content": "WELL DONE!", "subtitle": "Plurals Unlocked", "color": "#e67e22" }
      ]
    },

    "2-1": {
      "id": "2-1",
      "title": "TELLING THE TIME",
      "subtitle": "MASTER THE CLOCK",
      "color": "#1abc9c",
      "slides": [
        { "type": "big-title", "content": "TELLING THE TIME", "subtitle": "MASTER THE CLOCK", "color": "#1abc9c" },

        {
          "type": "definitions",
          "title": "Two Ways to Tell the Time",
          "items": [
            { "p": "Digital Style",  "d": "Say numbers directly — 8:15 = eight fifteen" },
            { "p": "Classic Style",  "d": "Use past / to — 8:15 = quarter past eight"   }
          ]
        },

        {
          "type": "compare-table",
          "title": "Classic Time Expressions",
          "headers": ["Minutes", "Expression", "Example"],
          "rows": [
            { "s": ":00", "v": "o'clock",           "e": "It's three o'clock"           },
            { "s": ":15", "v": "quarter past",       "e": "It's quarter past three"      },
            { "s": ":30", "v": "half past",          "e": "It's half past three"         },
            { "s": ":45", "v": "quarter to",         "e": "It's quarter to four"         },
            { "s": "1–29","v": "__ past __",         "e": "It's ten past three"          },
            { "s": "31–59","v": "__ to __",          "e": "It's twenty to four"          }
          ]
        },

        {
          "type": "reveal-grid",
          "title": "AM & PM",
          "desc": "Don't confuse morning and night!",
          "items": [
            "AM = midnight to noon (12:00 AM → 11:59 AM)",
            "PM = noon to midnight (12:00 PM → 11:59 PM)",
            "12:00 AM = Midnight", "12:00 PM = Noon",
            "Use 'in the morning' / 'in the afternoon' / 'at night'",
            "It's 7 AM = It's seven in the morning"
          ]
        },

        {
          "type": "mcq-interactive",
          "title": "Time Practice",
          "questions": [
            { "q": "How do you say 3:00?",                      "opts": ["three past","three o'clock","half three"],    "ans": "three o'clock"    },
            { "q": "How do you say 6:15?",                      "opts": ["quarter past six","quarter to six","six fifteen past"], "ans": "quarter past six" },
            { "q": "How do you say 9:30?",                      "opts": ["half to nine","nine thirty to","half past nine"],       "ans": "half past nine"   },
            { "q": "How do you say 7:45?",                      "opts": ["quarter past eight","quarter to eight","seven forty"], "ans": "quarter to eight" },
            { "q": "How do you say 2:20?",                      "opts": ["twenty past two","twenty to two","two twenty past"],   "ans": "twenty past two"  },
            { "q": "How do you say 5:40?",                      "opts": ["forty past five","twenty to six","twenty past six"],   "ans": "twenty to six"    },
            { "q": "12:00 at night is ____.",                   "opts": ["noon","midnight","AM noon"],                "ans": "midnight"         },
            { "q": "8 AM means ____.",                          "opts": ["8 at night","8 in the morning","8 in the afternoon"], "ans": "8 in the morning" },
            { "q": "How do you say 10:05?",                     "opts": ["five past ten","five to ten","ten five to"], "ans": "five past ten"    },
            { "q": "How do you say 4:50?",                      "opts": ["fifty past four","ten to five","ten past five"], "ans": "ten to five"   }
          ]
        },

        { "type": "big-title", "content": "TIME MASTER!", "subtitle": "You Can Read Any Clock", "color": "#1abc9c" }
      ]
    },

    "2-4": {
      "id": "2-4",
      "title": "THE DATE",
      "subtitle": "MONTHS & YEARS",
      "color": "#e74c3c",
      "slides": [
        { "type": "big-title", "content": "THE DATE", "subtitle": "MONTHS, ORDINALS & YEARS", "color": "#e74c3c" },

        {
          "type": "reveal-grid",
          "title": "12 Months of the Year",
          "desc": "Always written with a capital letter",
          "items": [
            "January — February — March",
            "April — May — June",
            "July — August — September",
            "October — November — December"
          ]
        },

        {
          "type": "compare-table",
          "title": "Ordinal Numbers for Dates",
          "headers": ["Number", "Ordinal", "Short"],
          "rows": [
            { "s": "1",  "v": "first",        "e": "1st" },
            { "s": "2",  "v": "second",       "e": "2nd" },
            { "s": "3",  "v": "third",        "e": "3rd" },
            { "s": "4–9","v": "fourth–ninth", "e": "4th–9th" },
            { "s": "11", "v": "eleventh",     "e": "11th" },
            { "s": "12", "v": "twelfth",      "e": "12th" },
            { "s": "20", "v": "twentieth",    "e": "20th" },
            { "s": "21", "v": "twenty-first", "e": "21st" }
          ]
        },

        {
          "type": "rule-slide",
          "title": "Writing & Saying Dates",
          "formula": "THE + Ordinal + OF + Month + , + Year",
          "examples": [
            { "full": "Written: 5th January 2024",    "short": "Said: the fifth of January, twenty twenty-four" },
            { "full": "Written: 21st March",          "short": "Said: the twenty-first of March"              },
            { "full": "US Style: January 5, 2024",   "short": "Said: January fifth, twenty twenty-four"      }
          ],
          "color": "#e74c3c"
        },

        {
          "type": "reveal-grid",
          "title": "Prepositions with Dates",
          "desc": "IN / ON / AT — don't mix them up!",
          "items": [
            "IN + month → in January / in March",
            "IN + year → in 2024 / in 1990",
            "IN + season → in summer / in winter",
            "ON + full date → on 5th January",
            "ON + day → on Monday / on Sunday",
            "AT + time → at 3 PM / at noon"
          ]
        },

        {
          "type": "mcq-interactive",
          "title": "Dates Practice",
          "questions": [
            { "q": "How do you say '3rd'?",                        "opts": ["third","three","thirth"],          "ans": "third"    },
            { "q": "Which month comes after July?",                "opts": ["June","August","September"],       "ans": "August"   },
            { "q": "How do you say '21st'?",                       "opts": ["twenty-one","twenty-oneth","twenty-first"], "ans": "twenty-first" },
            { "q": "My birthday is ____ January.",                 "opts": ["in","on","at"],                   "ans": "in"       },
            { "q": "The meeting is ____ 5th March.",               "opts": ["in","on","at"],                   "ans": "on"       },
            { "q": "The class starts ____ 9 AM.",                  "opts": ["in","on","at"],                   "ans": "at"       },
            { "q": "What is the 4th month?",                       "opts": ["March","May","April"],             "ans": "April"    },
            { "q": "How do you say '12th'?",                       "opts": ["twelveth","twelfth","twelfeth"],   "ans": "twelfth"  },
            { "q": "I was born ____ 1999.",                        "opts": ["on","at","in"],                   "ans": "in"       },
            { "q": "Which month comes before November?",           "opts": ["September","December","October"],  "ans": "October"  }
          ]
        },

        { "type": "big-title", "content": "DATE MASTER!", "subtitle": "Time & Dates Completed", "color": "#e74c3c" }
      ]
    },

    "3-1": {
      "id": "3-1",
      "title": "PRESENT CONTINUOUS",
      "subtitle": "HAPPENING RIGHT NOW",
      "color": "#2ecc71",
      "slides": [
        { "type": "big-title", "content": "PRESENT CONTINUOUS", "subtitle": "HAPPENING RIGHT NOW", "color": "#2ecc71" },

        {
          "type": "definitions",
          "title": "When Do We Use It?",
          "items": [
            { "p": "Right Now",    "d": "She is cooking dinner at this moment" },
            { "p": "Temporary",   "d": "I am living in Cairo this year"        },
            { "p": "Planned Future", "d": "We are meeting them tomorrow"      }
          ]
        },

        {
          "type": "compare-table",
          "title": "Structure",
          "headers": ["Form", "Formula", "Example"],
          "rows": [
            { "s": "Positive",   "v": "Subject + am/is/are + V-ing",       "e": "She is reading"        },
            { "s": "Negative",   "v": "Subject + am/is/are + not + V-ing", "e": "He isn't sleeping"     },
            { "s": "Question",   "v": "Am/Is/Are + Subject + V-ing?",      "e": "Are they working?"     }
          ]
        },

        {
          "type": "compare-table",
          "title": "Spelling Rules for -ing",
          "headers": ["Rule", "Base", "Adding -ing"],
          "rows": [
            { "s": "Most verbs → + ing",         "v": "read / talk",    "e": "reading / talking"   },
            { "s": "Silent e → drop e + ing",    "v": "make / write",   "e": "making / writing"    },
            { "s": "CVC → double last + ing",    "v": "run / sit",      "e": "running / sitting"   },
            { "s": "ie → y + ing",               "v": "lie / die",      "e": "lying / dying"       }
          ]
        },

        {
          "type": "reveal-grid",
          "title": "Signal Words",
          "desc": "These words tell you to use Present Continuous",
          "items": ["now", "right now", "at the moment", "currently", "today", "this week", "look! / listen!"]
        },

        {
          "type": "mcq-interactive",
          "title": "Present Continuous Practice",
          "questions": [
            { "q": "She ____ (read) a book now.",                "opts": ["reads","is reading","read"],          "ans": "is reading"   },
            { "q": "They ____ (not play) football at the moment.","opts": ["aren't playing","don't play","isn't playing"], "ans": "aren't playing" },
            { "q": "____ you ____ (study) right now?",           "opts": ["Do / study","Are / studying","Is / studying"], "ans": "Are / studying" },
            { "q": "Look! The dog ____ (run) in the garden.",    "opts": ["runs","is running","ran"],            "ans": "is running"   },
            { "q": "I ____ (write) an email at the moment.",     "opts": ["write","am writing","wrote"],         "ans": "am writing"   },
            { "q": "The baby ____ (sleep) right now.",           "opts": ["sleep","is sleeping","sleeps"],       "ans": "is sleeping"  },
            { "q": "We ____ (not watch) TV currently.",          "opts": ["aren't watching","don't watching","isn't watching"], "ans": "aren't watching" },
            { "q": "____ he ____ (sit) in the office now?",      "opts": ["Does / sit","Is / sitting","Are / sitting"], "ans": "Is / sitting" },
            { "q": "She ____ (make) coffee in the kitchen.",     "opts": ["makes","is making","made"],           "ans": "is making"    },
            { "q": "The kids ____ (lie) on the grass now.",      "opts": ["lie","are lying","is lying"],         "ans": "are lying"    }
          ]
        },

        { "type": "big-title", "content": "BRILLIANT!", "subtitle": "Present Continuous Mastered", "color": "#2ecc71" }
      ]
    },

    "3-4": {
      "id": "3-4",
      "title": "PRESENT SIMPLE",
      "subtitle": "FACTS & ROUTINE",
      "color": "#3498db",
      "slides": [
        { "type": "big-title", "content": "PRESENT SIMPLE", "subtitle": "FACTS & ROUTINE", "color": "#3498db" },

        {
          "type": "definitions",
          "title": "When Do We Use It?",
          "items": [
            { "p": "Habits & Routines", "d": "I wake up at 7 AM every day"  },
            { "p": "Facts & Truths",    "d": "The sun rises in the east"     },
            { "p": "Permanent States",  "d": "She works at a hospital"       }
          ]
        },

        {
          "type": "compare-table",
          "title": "Structure",
          "headers": ["Form", "Formula", "Example"],
          "rows": [
            { "s": "Positive (I/You/We/They)", "v": "Subject + base verb",         "e": "I work every day"       },
            { "s": "Positive (He/She/It)",     "v": "Subject + verb + s/es",       "e": "She works every day"    },
            { "s": "Negative",                 "v": "Subject + don't/doesn't + V", "e": "He doesn't work"        },
            { "s": "Question",                 "v": "Do/Does + Subject + V?",      "e": "Does she work here?"    }
          ]
        },

        {
          "type": "compare-table",
          "title": "He/She/It — Spelling Rules",
          "headers": ["Rule", "Base", "He/She/It form"],
          "rows": [
            { "s": "Most verbs → + s",          "v": "work / play",    "e": "works / plays"   },
            { "s": "s/sh/ch/x/z → + es",        "v": "watch / fix",    "e": "watches / fixes" },
            { "s": "consonant + y → ies",        "v": "study / carry",  "e": "studies / carries" },
            { "s": "have → has",                 "v": "have",           "e": "has"             }
          ]
        },

        {
          "type": "reveal-grid",
          "title": "Signal Words",
          "desc": "These words = Present Simple",
          "items": ["always", "usually", "often", "sometimes", "rarely", "never", "every day / week / year", "in the morning / evening"]
        },

        {
          "type": "mcq-interactive",
          "title": "Present Simple Practice",
          "questions": [
            { "q": "She ____ (go) to school every day.",           "opts": ["go","goes","is going"],       "ans": "goes"       },
            { "q": "They ____ (not eat) meat.",                    "opts": ["doesn't eat","don't eat","aren't eating"], "ans": "don't eat" },
            { "q": "____ he ____ (speak) French?",                 "opts": ["Do / speak","Does / speaks","Does / speak"], "ans": "Does / speak" },
            { "q": "Water ____ at 100°C.",                         "opts": ["boil","boils","is boiling"],  "ans": "boils"      },
            { "q": "I always ____ (brush) my teeth at night.",     "opts": ["brush","brushes","brushing"], "ans": "brush"      },
            { "q": "She never ____ (study) late at night.",        "opts": ["study","studies","is studying"], "ans": "studies"  },
            { "q": "____ they ____ (live) in Cairo?",              "opts": ["Does / live","Do / lives","Do / live"], "ans": "Do / live" },
            { "q": "He ____ (have) two brothers.",                 "opts": ["have","has","is having"],     "ans": "has"        },
            { "q": "The teacher ____ (teach) grammar on Mondays.", "opts": ["teach","teaches","is teaching"], "ans": "teaches" },
            { "q": "We usually ____ (watch) TV after dinner.",     "opts": ["watch","watches","watching"], "ans": "watch"      }
          ]
        },

        { "type": "big-title", "content": "EXCELLENT!", "subtitle": "Present Simple Mastered", "color": "#3498db" }
      ]
    },

    "4-1": {
      "id": "4-1",
      "title": "PAST SIMPLE",
      "subtitle": "MISSION COMPLETED",
      "color": "#e67e22",
      "slides": [
        { "type": "big-title", "content": "PAST SIMPLE", "subtitle": "MISSION COMPLETED", "color": "#e67e22" },

        {
          "type": "definitions",
          "title": "When Do We Use It?",
          "items": [
            { "p": "Finished Actions",   "d": "I visited Paris last summer"     },
            { "p": "Past Habits",        "d": "He played football as a child"   },
            { "p": "Sequence of Events", "d": "She woke up, ate, and left"      }
          ]
        },

        {
          "type": "compare-table",
          "title": "Structure",
          "headers": ["Form", "Formula", "Example"],
          "rows": [
            { "s": "Positive (Regular)",   "v": "Subject + verb + ed",         "e": "I worked yesterday"      },
            { "s": "Positive (Irregular)", "v": "Subject + past form",         "e": "She went to the market"  },
            { "s": "Negative",             "v": "Subject + didn't + base verb","e": "He didn't come"          },
            { "s": "Question",             "v": "Did + Subject + base verb?",  "e": "Did they arrive?"        }
          ]
        },

        {
          "type": "compare-table",
          "title": "Common Irregular Verbs",
          "headers": ["Base", "Past", "Base", "Past"],
          "rows": [
            { "s": "go",    "v": "went",  "e": "see / saw"   },
            { "s": "eat",   "v": "ate",   "e": "take / took" },
            { "s": "come",  "v": "came",  "e": "give / gave" },
            { "s": "make",  "v": "made",  "e": "get / got"   },
            { "s": "have",  "v": "had",   "e": "think / thought" }
          ]
        },

        {
          "type": "reveal-grid",
          "title": "Signal Words",
          "desc": "These signal Past Simple",
          "items": ["yesterday", "last week / month / year", "ago (two days ago)", "in 2010 / in the past", "when I was young", "once upon a time"]
        },

        {
          "type": "mcq-interactive",
          "title": "Past Simple Practice",
          "questions": [
            { "q": "She ____ (go) to the market yesterday.",        "opts": ["go","goes","went"],              "ans": "went"        },
            { "q": "They ____ (not finish) the project last week.", "opts": ["didn't finish","don't finish","didn't finished"], "ans": "didn't finish" },
            { "q": "____ he ____ (call) you last night?",           "opts": ["Did / called","Does / call","Did / call"], "ans": "Did / call" },
            { "q": "I ____ (eat) a sandwich for lunch.",            "opts": ["eat","ate","eated"],             "ans": "ate"         },
            { "q": "We ____ (visit) the pyramids two years ago.",   "opts": ["visit","visited","were visiting"],"ans": "visited"     },
            { "q": "She ____ (not come) to class yesterday.",       "opts": ["didn't come","doesn't come","didn't came"], "ans": "didn't come" },
            { "q": "He ____ (make) a delicious cake last Sunday.",  "opts": ["make","makes","made"],           "ans": "made"        },
            { "q": "____ they ____ (see) that film last week?",     "opts": ["Did / saw","Did / see","Does / see"], "ans": "Did / see" },
            { "q": "Ahmed ____ (have) a big exam yesterday.",       "opts": ["have","has","had"],              "ans": "had"         },
            { "q": "The team ____ (win) the match last Friday.",    "opts": ["win","wins","won"],              "ans": "won"         }
          ]
        },

        { "type": "big-title", "content": "MISSION DONE!", "subtitle": "Past Simple Completed", "color": "#e67e22" }
      ]
    },

    "4-4": {
      "id": "4-4",
      "title": "PAST CONTINUOUS",
      "subtitle": "ACTION IN PROGRESS",
      "color": "#8e44ad",
      "slides": [
        { "type": "big-title", "content": "PAST CONTINUOUS", "subtitle": "ACTION IN PROGRESS", "color": "#8e44ad" },

        {
          "type": "definitions",
          "title": "When Do We Use It?",
          "items": [
            { "p": "Action in progress",   "d": "I was sleeping at 10 PM last night"      },
            { "p": "Interrupted action",   "d": "I was reading when she called"           },
            { "p": "Parallel past actions","d": "He was cooking while she was cleaning"   }
          ]
        },

        {
          "type": "compare-table",
          "title": "Structure",
          "headers": ["Form", "Formula", "Example"],
          "rows": [
            { "s": "Positive",  "v": "Subject + was/were + V-ing",        "e": "She was dancing"       },
            { "s": "Negative",  "v": "Subject + wasn't/weren't + V-ing",  "e": "They weren't listening"},
            { "s": "Question",  "v": "Was/Were + Subject + V-ing?",       "e": "Was he working?"       }
          ]
        },

        {
          "type": "writing-focus",
          "title": "Key Pattern — Interrupted Action",
          "content": "<span style='color:#8e44ad'>Past Continuous</span> (longer action) + <span style='color:#c5a059'>WHEN</span> + <span style='color:#e74c3c'>Past Simple</span> (interruption)"
        },

        {
          "type": "reveal-grid",
          "title": "Signal Words",
          "desc": "These words = Past Continuous",
          "items": ["while", "when (interruption)", "at 9 PM last night", "all day yesterday", "at that moment", "as (= while)"]
        },

        {
          "type": "mcq-interactive",
          "title": "Past Continuous Practice",
          "questions": [
            { "q": "She ____ (sleep) when I arrived.",               "opts": ["slept","was sleeping","is sleeping"],  "ans": "was sleeping"   },
            { "q": "They ____ (not play) at 8 PM last night.",       "opts": ["weren't playing","didn't play","wasn't playing"], "ans": "weren't playing" },
            { "q": "____ he ____ (work) all day yesterday?",         "opts": ["Was / working","Did / work","Were / working"], "ans": "Was / working" },
            { "q": "I ____ (read) while she ____ (cook).",           "opts": ["read / cooked","was reading / was cooking","read / was cooking"], "ans": "was reading / was cooking" },
            { "q": "The kids ____ (run) in the park at that moment.","opts": ["ran","were running","are running"],    "ans": "were running"   },
            { "q": "He ____ (drive) when his phone rang.",           "opts": ["drove","was driving","is driving"],    "ans": "was driving"    },
            { "q": "____ you ____ (study) at 10 last night?",        "opts": ["Did / study","Were / studying","Was / studying"], "ans": "Were / studying" },
            { "q": "We ____ (not watch) TV when she came.",          "opts": ["didn't watch","weren't watching","wasn't watching"], "ans": "weren't watching" },
            { "q": "She ____ (write) a letter all morning.",         "opts": ["wrote","was writing","writes"],        "ans": "was writing"    },
            { "q": "It ____ (rain) heavily while we ____ (walk).",   "opts": ["rained / walked","was raining / were walking","raining / walking"], "ans": "was raining / were walking" }
          ]
        },

        { "type": "big-title", "content": "AWESOME!", "subtitle": "Past Continuous Mastered", "color": "#8e44ad" }
      ]
    },

    "5-1": {
      "id": "5-1",
      "title": "FUTURE SIMPLE",
      "subtitle": "LOOKING AHEAD",
      "color": "#f39c12",
      "slides": [
        { "type": "big-title", "content": "FUTURE SIMPLE", "subtitle": "LOOKING AHEAD", "color": "#f39c12" },

        {
          "type": "definitions",
          "title": "Two Ways to Express Future",
          "items": [
            { "p": "WILL",    "d": "Decisions, promises, predictions — I will help you" },
            { "p": "GOING TO","d": "Plans & intentions — She is going to travel next week" }
          ]
        },

        {
          "type": "compare-table",
          "title": "WILL — Structure",
          "headers": ["Form", "Formula", "Example"],
          "rows": [
            { "s": "Positive",  "v": "Subject + will + base verb",        "e": "I will call you"     },
            { "s": "Negative",  "v": "Subject + won't + base verb",       "e": "She won't come"      },
            { "s": "Question",  "v": "Will + Subject + base verb?",       "e": "Will they agree?"    }
          ]
        },

        {
          "type": "compare-table",
          "title": "GOING TO — Structure",
          "headers": ["Form", "Formula", "Example"],
          "rows": [
            { "s": "Positive",  "v": "Subject + am/is/are + going to + V","e": "He is going to study"},
            { "s": "Negative",  "v": "Subject + not + going to + V",      "e": "I'm not going to wait"},
            { "s": "Question",  "v": "Am/Is/Are + Subject + going to + V?","e": "Are you going to come?"}
          ]
        },

        {
          "type": "reveal-grid",
          "title": "Signal Words",
          "desc": "These words = Future Simple",
          "items": ["tomorrow", "next week / month / year", "soon", "in the future", "later", "tonight", "in 2030"]
        },

        {
          "type": "mcq-interactive",
          "title": "Future Simple Practice",
          "questions": [
            { "q": "I promise I ____ (call) you tonight.",            "opts": ["am calling","will call","going to call"],    "ans": "will call"      },
            { "q": "She ____ (travel) to London next month.",         "opts": ["will travels","is going to travel","going travel"], "ans": "is going to travel" },
            { "q": "____ they ____ (come) to the party tomorrow?",    "opts": ["Are / going to come","Will / comes","Do / come"], "ans": "Are / going to come" },
            { "q": "Look at those clouds! It ____ (rain).",           "opts": ["will rain","is going to rain","rains"],      "ans": "is going to rain"},
            { "q": "I think he ____ (win) the competition.",          "opts": ["wins","is going to win","will win"],         "ans": "will win"       },
            { "q": "We ____ (not go) to the cinema tonight.",         "opts": ["don't go","won't go","aren't going to going"], "ans": "won't go"     },
            { "q": "She has decided — she ____ (study) medicine.",    "opts": ["will study","is going to study","studies"],  "ans": "is going to study" },
            { "q": "____ you ____ (help) me with this later?",        "opts": ["Will / help","Are / going help","Do / help"],"ans": "Will / help"   },
            { "q": "In the future, robots ____ (do) all the work.",   "opts": ["do","are doing","will do"],                  "ans": "will do"        },
            { "q": "He ____ (not be) late, I promise.",               "opts": ["isn't","won't be","doesn't be"],             "ans": "won't be"       }
          ]
        },

        { "type": "big-title", "content": "FUTURE UNLOCKED!", "subtitle": "Future Simple Mastered", "color": "#f39c12" }
      ]
    },

    "5-4": {
      "id": "5-4",
      "title": "FUTURE CONTINUOUS",
      "subtitle": "MASTERY LEVEL",
      "color": "#16a085",
      "slides": [
        { "type": "big-title", "content": "FUTURE CONTINUOUS", "subtitle": "MASTERY LEVEL", "color": "#16a085" },

        {
          "type": "definitions",
          "title": "When Do We Use It?",
          "items": [
            { "p": "Action in progress at future time",  "d": "At 8 PM, I will be studying"      },
            { "p": "Planned ongoing future action",      "d": "This time next week, she will be travelling" }
          ]
        },

        {
          "type": "compare-table",
          "title": "Structure",
          "headers": ["Form", "Formula", "Example"],
          "rows": [
            { "s": "Positive",  "v": "Subject + will be + V-ing",        "e": "I will be working at 9"   },
            { "s": "Negative",  "v": "Subject + won't be + V-ing",       "e": "She won't be sleeping"    },
            { "s": "Question",  "v": "Will + Subject + be + V-ing?",     "e": "Will they be waiting?"    }
          ]
        },

        {
          "type": "reveal-grid",
          "title": "Signal Words",
          "desc": "These words = Future Continuous",
          "items": ["at this time tomorrow", "at 9 PM tonight", "this time next week", "when you arrive", "all day tomorrow", "in two hours"]
        },

        {
          "type": "mcq-interactive",
          "title": "Future Continuous Practice",
          "questions": [
            { "q": "At 9 AM tomorrow, I ____ (work) in the office.",   "opts": ["will work","will be working","am working"],  "ans": "will be working"  },
            { "q": "She ____ (not sleep) at midnight, she's a night owl.", "opts": ["won't be sleeping","won't sleep","isn't sleeping"], "ans": "won't be sleeping" },
            { "q": "____ they ____ (travel) this time next week?",     "opts": ["Will / travel","Will / be travelling","Are / travelling"], "ans": "Will / be travelling" },
            { "q": "When you arrive, we ____ (have) dinner.",          "opts": ["have","will have","will be having"],         "ans": "will be having"   },
            { "q": "He ____ (study) all evening tomorrow.",            "opts": ["studies","will study","will be studying"],   "ans": "will be studying" },
            { "q": "____ she ____ (wait) for us at the station?",      "opts": ["Will / wait","Will / be waiting","Is / waiting"], "ans": "Will / be waiting" },
            { "q": "At 6 PM, the kids ____ (play) in the garden.",     "opts": ["play","will play","will be playing"],        "ans": "will be playing"  },
            { "q": "I ____ (not use) the car tomorrow morning.",       "opts": ["won't use","won't be using","don't use"],    "ans": "won't be using"   },
            { "q": "This time next month, he ____ (live) in London.",  "opts": ["lives","will live","will be living"],        "ans": "will be living"   },
            { "q": "____ you ____ (work) late tomorrow night?",        "opts": ["Will / work","Will / be working","Do / work"], "ans": "Will / be working" }
          ]
        },

        { "type": "big-title", "content": "MASTERED!", "subtitle": "Future Continuous Completed", "color": "#16a085" }
      ]
    },

    "6-1": {
      "id": "6-1",
      "title": "PRESENT PERFECT SIMPLE",
      "subtitle": "GRAMMAR MASTERY",
      "color": "#27ae60",
      "slides": [
        { "type": "big-title", "content": "PRESENT PERFECT", "subtitle": "CONNECTING PAST TO NOW", "color": "#27ae60" },

        {
          "type": "definitions",
          "title": "When Do We Use It?",
          "items": [
            { "p": "Experience (ever/never)", "d": "I have visited Paris — at some point in life"  },
            { "p": "Recent past",             "d": "She has just finished her homework"            },
            { "p": "Unfinished time period",  "d": "I have lived here for 5 years (still here)"   }
          ]
        },

        {
          "type": "compare-table",
          "title": "Structure",
          "headers": ["Form", "Formula", "Example"],
          "rows": [
            { "s": "Positive",  "v": "Subject + have/has + Past Participle",      "e": "I have seen that film"    },
            { "s": "Negative",  "v": "Subject + haven't/hasn't + Past Participle","e": "She hasn't arrived yet"   },
            { "s": "Question",  "v": "Have/Has + Subject + Past Participle?",     "e": "Have you ever tried this?"}
          ]
        },

        {
          "type": "reveal-grid",
          "title": "Signal Words",
          "desc": "These words = Present Perfect",
          "items": ["just", "already", "yet (negatives/questions)", "ever / never", "for + period (for 3 years)", "since + point (since 2020)", "recently / lately"]
        },

        {
          "type": "mcq-interactive",
          "title": "Present Perfect Practice",
          "questions": [
            { "q": "She ____ (finish) her homework already.",           "opts": ["finished","has finished","have finished"],  "ans": "has finished"   },
            { "q": "I ____ never ____ (try) sushi before.",            "opts": ["have / tried","has / tried","did / try"],   "ans": "have / tried"   },
            { "q": "____ you ever ____ (visit) New York?",             "opts": ["Have / visited","Has / visited","Did / visit"], "ans": "Have / visited" },
            { "q": "He ____ (not arrive) yet.",                        "opts": ["hasn't arrived","didn't arrive","haven't arrived"], "ans": "hasn't arrived" },
            { "q": "We ____ (live) here since 2018.",                  "opts": ["lived","have lived","has lived"],           "ans": "have lived"     },
            { "q": "She ____ (just buy) a new phone.",                 "opts": ["just buyed","has just bought","just bought"], "ans": "has just bought" },
            { "q": "____ they ____ (finish) the project yet?",         "opts": ["Did / finish","Have / finished","Has / finished"], "ans": "Have / finished" },
            { "q": "I ____ (read) that book three times.",             "opts": ["read","have read","has read"],              "ans": "have read"      },
            { "q": "He ____ (work) here for ten years.",               "opts": ["worked","has worked","have worked"],        "ans": "has worked"     },
            { "q": "We ____ (not see) that movie yet.",                "opts": ["didn't see","haven't seen","hasn't seen"],  "ans": "haven't seen"   }
          ]
        },

        { "type": "big-title", "content": "GREAT!", "subtitle": "Present Perfect Simple Done", "color": "#27ae60" }
      ]
    },

    "6-4": {
      "id": "6-4",
      "title": "PRESENT PERFECT CONTINUOUS",
      "subtitle": "GRAMMAR FOCUS",
      "color": "#1e8449",
      "slides": [
        { "type": "big-title", "content": "PRESENT PERFECT CONT.", "subtitle": "HOW LONG HAS IT BEEN?", "color": "#1e8449" },

        {
          "type": "definitions",
          "title": "When Do We Use It?",
          "items": [
            { "p": "Duration of ongoing action",  "d": "I have been studying for 3 hours (still studying)" },
            { "p": "Recent continuous activity",  "d": "She has been working all day — she looks tired"    }
          ]
        },

        {
          "type": "compare-table",
          "title": "Structure",
          "headers": ["Form", "Formula", "Example"],
          "rows": [
            { "s": "Positive",  "v": "Subject + have/has + been + V-ing",       "e": "I have been reading"       },
            { "s": "Negative",  "v": "Subject + haven't/hasn't + been + V-ing", "e": "She hasn't been sleeping"  },
            { "s": "Question",  "v": "Have/Has + Subject + been + V-ing?",      "e": "Have you been waiting long?"}
          ]
        },

        {
          "type": "writing-focus",
          "title": "Perfect Simple vs Perfect Continuous",
          "content": "<span style='color:#27ae60'>I have read the book</span> = finished ✓<br><br><span style='color:#1e8449'>I have been reading</span> = still ongoing / focus on duration"
        },

        {
          "type": "reveal-grid",
          "title": "Signal Words",
          "desc": "These words = Present Perfect Continuous",
          "items": ["for + period (for 2 hours)", "since + point (since morning)", "all day / all week", "lately / recently", "how long...?"]
        },

        {
          "type": "mcq-interactive",
          "title": "Present Perfect Continuous Practice",
          "questions": [
            { "q": "She ____ (study) for 4 hours without a break.",      "opts": ["studied","has been studying","have been studying"], "ans": "has been studying" },
            { "q": "I ____ (wait) here since 9 AM.",                     "opts": ["waited","have been waiting","has been waiting"],    "ans": "have been waiting" },
            { "q": "____ they ____ (work) on this project all week?",    "opts": ["Have / been working","Has / been working","Did / work"], "ans": "Have / been working" },
            { "q": "He ____ (not sleep) well lately.",                   "opts": ["hasn't been sleeping","haven't been sleeping","didn't sleep"], "ans": "hasn't been sleeping" },
            { "q": "How long ____ you ____ (learn) English?",            "opts": ["have / been learning","has / been learning","did / learn"], "ans": "have / been learning" },
            { "q": "We ____ (build) this house for six months.",         "opts": ["built","have been building","has been building"],    "ans": "have been building" },
            { "q": "It ____ (rain) all day — the streets are wet.",      "opts": ["has been raining","have been raining","rained"],    "ans": "has been raining"  },
            { "q": "She ____ (teach) at this school since 2015.",        "opts": ["taught","has been teaching","have been teaching"],  "ans": "has been teaching" },
            { "q": "____ he ____ (exercise) recently?",                  "opts": ["Has / been exercising","Have / been exercising","Did / exercise"], "ans": "Has / been exercising" },
            { "q": "I'm tired because I ____ (run) for an hour.",        "opts": ["ran","have been running","has been running"],       "ans": "have been running" }
          ]
        },

        { "type": "big-title", "content": "EXCELLENT!", "subtitle": "Present Perfect Continuous Done", "color": "#1e8449" }
      ]
    },

    "7-1": {
      "id": "7-1",
      "title": "PAST PERFECT SIMPLE",
      "subtitle": "THE EARLIER PAST",
      "color": "#6c3483",
      "slides": [
        { "type": "big-title", "content": "PAST PERFECT", "subtitle": "THE EARLIER PAST", "color": "#6c3483" },

        {
          "type": "definitions",
          "title": "When Do We Use It?",
          "items": [
            { "p": "Action before another past action", "d": "She had eaten before he arrived"    },
            { "p": "Unfulfilled past condition",        "d": "I wish I had studied harder"        }
          ]
        },

        {
          "type": "compare-table",
          "title": "Structure",
          "headers": ["Form", "Formula", "Example"],
          "rows": [
            { "s": "Positive",  "v": "Subject + had + Past Participle",       "e": "I had finished the work"   },
            { "s": "Negative",  "v": "Subject + hadn't + Past Participle",    "e": "She hadn't slept well"     },
            { "s": "Question",  "v": "Had + Subject + Past Participle?",      "e": "Had they arrived already?" }
          ]
        },

        {
          "type": "writing-focus",
          "title": "The Timeline",
          "content": "<span style='color:#6c3483'>HAD + V3</span> (earlier past) ➔ <span style='color:#c5a059'>PAST SIMPLE</span> (later past) ➔ <span style='color:#3498db'>NOW</span>"
        },

        {
          "type": "reveal-grid",
          "title": "Signal Words",
          "desc": "These words = Past Perfect",
          "items": ["before", "after", "when (earlier action)", "already", "by the time", "never (up to that point)"]
        },

        {
          "type": "mcq-interactive",
          "title": "Past Perfect Practice",
          "questions": [
            { "q": "When I arrived, she ____ (already leave).",           "opts": ["already left","had already left","has already left"],  "ans": "had already left"   },
            { "q": "He ____ (eat) before the meeting started.",           "opts": ["ate","had eaten","has eaten"],                          "ans": "had eaten"          },
            { "q": "____ they ____ (finish) by the time we called?",      "opts": ["Had / finished","Have / finished","Did / finish"],      "ans": "Had / finished"     },
            { "q": "She ____ (not sleep) when I knocked on the door.",    "opts": ["hadn't slept","didn't sleep","hasn't slept"],           "ans": "hadn't slept"       },
            { "q": "By 9 PM, I ____ (complete) all my homework.",         "opts": ["completed","have completed","had completed"],           "ans": "had completed"      },
            { "q": "He was tired because he ____ (work) all day.",        "opts": ["worked","has worked","had worked"],                     "ans": "had worked"         },
            { "q": "____ she ____ (see) that film before last night?",    "opts": ["Has / seen","Had / seen","Did / see"],                  "ans": "Had / seen"         },
            { "q": "I ____ (never visit) Egypt before that trip.",        "opts": ["have never visited","had never visited","never visited"],"ans": "had never visited"  },
            { "q": "After he ____ (leave), we started the meeting.",      "opts": ["left","had left","has left"],                           "ans": "had left"           },
            { "q": "She ____ (not eat) anything, so she was very hungry.","opts": ["didn't eat","hasn't eaten","hadn't eaten"],             "ans": "hadn't eaten"       }
          ]
        },

        { "type": "big-title", "content": "MASTERED!", "subtitle": "Past Perfect Completed", "color": "#6c3483" }
      ]
    },

    "7-4": {
      "id": "7-4",
      "title": "IF CONDITIONS",
      "subtitle": "THE MASTER GUIDE",
      "color": "#c5a059",
      "slides": [
        { "type": "big-title", "content": "IF CONDITIONS", "subtitle": "THE MASTER GUIDE", "color": "#c5a059" },

        {
          "type": "definitions",
          "title": "What Are If Conditions?",
          "items": [
            { "p": "Zero Conditional",   "d": "Facts & habits — always true"           },
            { "p": "First Conditional",  "d": "Possible future — real situation"       },
            { "p": "Second Conditional", "d": "Hypothetical present — unlikely/imaginary" },
            { "p": "Third Conditional",  "d": "Past regrets — impossible to change"   }
          ]
        },

        {
          "type": "compare-table",
          "title": "Zero Conditional — Facts",
          "headers": ["IF clause", "Main clause", "Use"],
          "rows": [
            { "s": "If + Present Simple", "v": "Present Simple", "e": "If you heat ice, it melts" },
            { "s": "If you don't water plants,", "v": "they die.", "e": "100% always true" }
          ]
        },

        {
          "type": "reveal-grid",
          "title": "Zero Conditional Examples",
          "desc": "Scientific facts and universal truths",
          "items": [
            "If you heat water to 100°C, it boils.",
            "If you don't water plants, they die.",
            "If you touch a fire, you get burned.",
            "If people eat too many sweets, they get cavities.",
            "If the sun sets, it gets dark."
          ]
        },

        {
          "type": "compare-table",
          "title": "First Conditional — Future Possibility",
          "headers": ["IF clause", "Main clause", "Use"],
          "rows": [
            { "s": "If + Present Simple", "v": "Will + base verb", "e": "If you study, you will pass" },
            { "s": "If it rains,", "v": "we will stay home.", "e": "Real future possibility" }
          ]
        },

        {
          "type": "reveal-grid",
          "title": "First Conditional Examples",
          "desc": "Possible future events",
          "items": [
            "If you study hard, you will pass.",
            "If it rains, we will stay home.",
            "If he saves money, he will buy a car.",
            "If she cooks, I will wash the dishes.",
            "If they arrive early, they will get seats."
          ]
        },

        {
          "type": "compare-table",
          "title": "Second Conditional — Hypothetical",
          "headers": ["IF clause", "Main clause", "Use"],
          "rows": [
            { "s": "If + Past Simple", "v": "Would + base verb", "e": "If I were you, I would go" },
            { "s": "If I won the lottery,", "v": "I would travel.", "e": "Imaginary / unlikely now" }
          ]
        },

        {
          "type": "reveal-grid",
          "title": "Second Conditional Examples",
          "desc": "Imaginary present situations",
          "items": [
            "If I were you, I would take that job.",
            "If I won the lottery, I would travel.",
            "If he had time, he would learn French.",
            "If she were taller, she would be a model.",
            "If they lived in Cairo, they would see the Pyramids."
          ]
        },

        {
          "type": "compare-table",
          "title": "Third Conditional — Past Regrets",
          "headers": ["IF clause", "Main clause", "Use"],
          "rows": [
            { "s": "If + Past Perfect", "v": "Would have + V3", "e": "If he had studied, he would have passed" },
            { "s": "If I had known,", "v": "I would have helped.", "e": "Impossible — didn't happen" }
          ]
        },

        {
          "type": "reveal-grid",
          "title": "Third Conditional Examples",
          "desc": "Past regrets — impossible to change",
          "items": [
            "If he had come early, he would have lived.",
            "If you had studied, you would have passed.",
            "If I had known, I would have helped you.",
            "If she had seen him, she would have stopped.",
            "If they had invited me, I would have gone."
          ]
        },

        {
          "type": "compare-table",
          "title": "Quick Reference — All Four",
          "headers": ["Type", "If Clause", "Main Clause"],
          "rows": [
            { "s": "Zero",   "v": "If + Pres. Simple",  "e": "Pres. Simple"         },
            { "s": "First",  "v": "If + Pres. Simple",  "e": "Will + base verb"     },
            { "s": "Second", "v": "If + Past Simple",   "e": "Would + base verb"    },
            { "s": "Third",  "v": "If + Past Perfect",  "e": "Would have + V3"      }
          ]
        },

        {
          "type": "mcq-interactive",
          "title": "If Conditions Practice",
          "questions": [
            { "q": "If I ____ you, I wouldn't do that.",                  "opts": ["am","was","were"],                         "ans": "were"            },
            { "q": "If it ____, we will cancel the trip.",                "opts": ["rains","rained","will rain"],               "ans": "rains"           },
            { "q": "If she ____ her phone, she would have called.",       "opts": ["didn't lose","hasn't lost","hadn't lost"],  "ans": "hadn't lost"     },
            { "q": "Water ____ if you heat it to 100°C. (Zero)",         "opts": ["boil","boils","will boil"],                 "ans": "boils"           },
            { "q": "If I ____ time, I would start a hobby. (Second)",    "opts": ["have","will have","had"],                   "ans": "had"             },
            { "q": "If she studies hard, she ____ pass the exam.",        "opts": ["would","will","had"],                       "ans": "will"            },
            { "q": "If you touch fire, you ____ burned. (Zero)",          "opts": ["will get","get","got"],                     "ans": "get"             },
            { "q": "If he ____ (save) money, he would have bought a car.","opts": ["saved","had saved","has saved"],            "ans": "had saved"       },
            { "q": "Which is the correct First Conditional?",             "opts": ["If it rained, I stay","If it rains, I will stay","If it will rain, I stay"], "ans": "If it rains, I will stay" },
            { "q": "If they ____ me, I would have gone. (Third)",         "opts": ["invite","invited","had invited"],           "ans": "had invited"     }
          ]
        },

        { "type": "big-title", "content": "BRILLIANT!", "subtitle": "IF CONDITIONS MASTERED", "color": "#c5a059" }
      ]
    },

    "8-1": {
      "id": "8-1",
      "title": "THE PASSIVE VOICE",
      "subtitle": "GRAMMAR FOCUS",
      "color": "#2980b9",
      "slides": [
        { "type": "big-title", "content": "THE PASSIVE", "subtitle": "GRAMMAR FOCUS", "color": "#2980b9" },

        {
          "type": "definitions",
          "title": "Active vs Passive",
          "items": [
            { "p": "Active",  "d": "The subject DOES the action — The chef cooked the meal"   },
            { "p": "Passive", "d": "The subject RECEIVES the action — The meal was cooked"    }
          ]
        },

        {
          "type": "writing-focus",
          "title": "Passive Formula",
          "content": "<span style='color:#2980b9'>Object</span> + <span style='color:#c5a059'>to be (correct tense)</span> + <span style='color:#27ae60'>Past Participle (V3)</span> + <span style='color:#888'>(by + agent)</span>"
        },

        {
          "type": "compare-table",
          "title": "Passive Across Tenses",
          "headers": ["Tense", "Active", "Passive"],
          "rows": [
            { "s": "Present Simple",   "v": "They make cars here.",         "e": "Cars are made here."              },
            { "s": "Past Simple",      "v": "He wrote the letter.",          "e": "The letter was written by him."   },
            { "s": "Future Simple",    "v": "They will build a school.",     "e": "A school will be built."          },
            { "s": "Present Perfect",  "v": "She has cleaned the room.",     "e": "The room has been cleaned."       },
            { "s": "Present Cont.",    "v": "They are painting the walls.",  "e": "The walls are being painted."     },
            { "s": "Modal (can/must)", "v": "You must sign the form.",       "e": "The form must be signed."         }
          ]
        },

        {
          "type": "reveal-grid",
          "title": "When Do We Use Passive?",
          "desc": "Choose passive when...",
          "items": [
            "The agent (doer) is unknown — My car was stolen.",
            "The agent is unimportant — The road was repaired.",
            "We want to focus on the result — The report has been submitted.",
            "Formal / scientific writing — The experiment was conducted.",
            "General statements — English is spoken worldwide."
          ]
        },

        {
          "type": "mcq-interactive",
          "title": "Passive Voice Practice",
          "questions": [
            { "q": "The letter ____ (write) by Ahmed yesterday.",          "opts": ["is written","was written","has written"],       "ans": "was written"       },
            { "q": "English ____ (speak) all over the world.",             "opts": ["is spoken","was spoken","has spoken"],          "ans": "is spoken"         },
            { "q": "The cake ____ (eat) before we arrived.",               "opts": ["was eating","has been eaten","had been eaten"], "ans": "had been eaten"    },
            { "q": "A new hospital ____ (build) in our city next year.",   "opts": ["is built","was built","will be built"],         "ans": "will be built"     },
            { "q": "The report ____ (submit) already.",                    "opts": ["has been submitted","is submitted","was submitting"], "ans": "has been submitted" },
            { "q": "The windows ____ (clean) right now.",                  "opts": ["are cleaned","are being cleaned","were cleaned"],"ans": "are being cleaned" },
            { "q": "This book ____ (write) in 1990.",                      "opts": ["is written","was written","has been written"],  "ans": "was written"       },
            { "q": "The problem ____ (solve) by the team soon.",           "opts": ["is solved","will be solved","has been solved"], "ans": "will be solved"    },
            { "q": "The match ____ (cancel) due to rain.",                 "opts": ["is cancelled","was cancelled","has cancelled"], "ans": "was cancelled"     },
            { "q": "Cars ____ (make) in that factory since 1980.",         "opts": ["are made","were made","have been made"],        "ans": "have been made"    }
          ]
        },

        { "type": "big-title", "content": "PERFECT!", "subtitle": "Passive Voice Mastered", "color": "#2980b9" }
      ]
    }

  }
};

// ════════════════════════════════════════════
// GRAMMAR ENGINE
// ════════════════════════════════════════════
const GrammarEngine = {

    lesson:       null,
    slides:       [],
    currentSlide: 0,
    subStep:      0,
    _mcqData:     [],
    _mcqCurrent:  0,
    _mcqScore:    0,

    init(lessonData) {
        this.lesson       = lessonData;
        this.slides       = lessonData.slides;
        this.currentSlide = 0;
        this.subStep      = 0;
        this._injectStyles();
        this._renderShell();
        this._renderSlide(0);
    },

    // ── Shell ──
    _renderShell() {
        document.getElementById("stage-content").innerHTML = `
            <div class="ge-root">
                <div class="ge-header">
                    <div class="ge-lesson-title" id="ge-title">${this.lesson.title}</div>
                    <div class="ge-progress-wrap"><div class="ge-progress-bar" id="ge-progress"></div></div>
                    <div class="ge-slide-counter" id="ge-counter">1 / ${this.slides.length}</div>
                </div>
                <div class="ge-slide-area" id="ge-slide-area"></div>
                <div class="ge-nav">
                    <button class="ge-nav-btn" id="ge-prev" onclick="GrammarEngine.prev()">&#9664; PREV</button>
                    <div class="ge-nav-dots" id="ge-dots"></div>
                    <button class="ge-nav-btn" id="ge-next" onclick="GrammarEngine.next()">NEXT &#9654;</button>
                </div>
            </div>`;
        this._buildDots();
        document.onkeydown = e => {
            if ([13,32,39].includes(e.keyCode)) { e.preventDefault(); GrammarEngine.next(); }
            if ([37,8].includes(e.keyCode))      { e.preventDefault(); GrammarEngine.prev(); }
        };
    },

    _buildDots() {
        const w = document.getElementById("ge-dots"); if (!w) return;
        w.innerHTML = this.slides.map((_,i) =>
            `<div class="ge-dot" id="ge-dot-${i}" onclick="GrammarEngine.goTo(${i})"></div>`
        ).join("");
    },

    _updateHeader() {
        const p = document.getElementById("ge-progress");
        const c = document.getElementById("ge-counter");
        if (p) p.style.width = ((this.currentSlide+1)/this.slides.length*100) + "%";
        if (c) c.textContent = (this.currentSlide+1) + " / " + this.slides.length;
        const prev = document.getElementById("ge-prev");
        if (prev) prev.disabled = (this.currentSlide === 0 && this.subStep === 0);
        document.querySelectorAll(".ge-dot").forEach((d,i) => {
            d.classList.toggle("active",  i === this.currentSlide);
            d.classList.toggle("visited", i < this.currentSlide);
        });
    },

    // ── Navigation ──
    next() {
        const s = this.slides[this.currentSlide];
        const maxStep = {
            "definitions":    (s.items||[]).length - 1,
            "reveal-grid":    (s.items||[]).length - 1,
            "compare-table":  (s.rows||[]).length  - 1,
            "transform-table":(s.pairs||[]).length - 1,
        }[s.type];
        if (maxStep !== undefined && this.subStep < maxStep) { this.subStep++; this._updateReveal(); return; }
        if (this.currentSlide < this.slides.length - 1) { this.currentSlide++; this.subStep = 0; this._renderSlide(this.currentSlide); }
    },
    prev() {
        if (this.subStep > 0) { this.subStep--; this._updateReveal(); return; }
        if (this.currentSlide > 0) { this.currentSlide--; this.subStep = 0; this._renderSlide(this.currentSlide); }
    },
    goTo(idx) { this.currentSlide = idx; this.subStep = 0; this._renderSlide(idx); },

    _updateReveal() {
        document.querySelectorAll(".ge-reveal-item").forEach((el,i) => el.classList.toggle("revealed", i <= this.subStep));
        this._updateHeader();
    },

    // ── Render ──
    _renderSlide(idx) {
        this.currentSlide = idx;
        const s    = this.slides[idx];
        const area = document.getElementById("ge-slide-area");
        if (!area) return;
        area.style.opacity = "0";
        area.style.transform = "translateY(16px)";
        setTimeout(() => {
            area.innerHTML = "";
            const w = document.createElement("div"); w.className = "ge-wrapper";
            const builders = {
                "big-title":       () => this._bigTitle(s),
                "definitions":     () => this._definitions(s),
                "reveal-grid":     () => this._revealGrid(s),
                "compare-table":   () => this._compareTable(s),
                "transform-table": () => this._transformTable(s),
                "rule-slide":      () => this._ruleSlide(s),
                "writing-focus":   () => this._writingFocus(s),
                "mcq-interactive": () => this._mcqInit(s),
            };
            const builder = builders[s.type];
            if (builder) w.appendChild(builder());
            else w.innerHTML = `<p style="color:#888">Unknown: ${s.type}</p>`;
            area.appendChild(w);
            this._updateHeader();
            this._updateReveal();
            requestAnimationFrame(() => {
                area.style.transition = "opacity .35s ease, transform .35s ease";
                area.style.opacity = "1"; area.style.transform = "translateY(0)";
            });
        }, 120);
    },

    // ── Slide Builders ──
    _bigTitle(s) {
        const d = document.createElement("div"); d.className = "ge-big-title";
        d.innerHTML = `<div class="ge-big-glow" style="background:radial-gradient(circle,${s.color}22 0%,transparent 65%)"></div>
            <h1 class="ge-big-text" style="color:${s.color};text-shadow:0 0 60px ${s.color}44">${s.content}</h1>
            <div class="ge-big-sub">${s.subtitle}</div>`; return d;
    },
    _definitions(s) {
        const d = document.createElement("div"); d.className = "ge-section";
        d.innerHTML = `<h2 class="ge-section-title">${s.title}</h2><div class="ge-defs-list">
            ${(s.items||[]).map((item,i) => `<div class="ge-reveal-item ge-def-item ${i===0?"revealed":""}">
                <div class="ge-def-p">${item.p}</div><div class="ge-def-d">${item.d}</div></div>`).join("")}
        </div>`; return d;
    },
    _revealGrid(s) {
        const d = document.createElement("div"); d.className = "ge-section";
        d.innerHTML = `<h2 class="ge-section-title">${s.title}</h2>
            <div class="ge-grid-desc">${s.desc}</div>
            <div class="ge-reveal-grid">${(s.items||[]).map((item,i) =>
                `<div class="ge-reveal-item ge-grid-item ${i===0?"revealed":""}">${item}</div>`
            ).join("")}</div>`; return d;
    },
    _compareTable(s) {
        const d = document.createElement("div"); d.className = "ge-section";
        const cols = (s.headers||[]).length;
        d.innerHTML = `<h2 class="ge-section-title">${s.title}</h2>
            <div class="ge-table-wrap"><table class="ge-table">
                <thead><tr>${(s.headers||[]).map(h=>`<th>${h}</th>`).join("")}</tr></thead>
                <tbody>${(s.rows||[]).map((row,i) => {
                    const cells = [row.s,row.v,row.e].slice(0,cols);
                    return `<tr class="ge-reveal-item ${i===0?"revealed":""}">${cells.map(c=>`<td>${c||""}</td>`).join("")}</tr>`;
                }).join("")}</tbody>
            </table></div>`; return d;
    },
    _transformTable(s) {
        const d = document.createElement("div"); d.className = "ge-section";
        d.innerHTML = `<h2 class="ge-section-title">${s.title}</h2>
            <div class="ge-transform-grid">${(s.pairs||[]).map((p,i) =>
                `<div class="ge-reveal-item ge-tf-item ${i===0?"revealed":""}">
                    <span class="ge-tf-s">${p.s}</span>
                    <span class="ge-tf-a">&#10132;</span>
                    <span class="ge-tf-o">${p.o}</span></div>`
            ).join("")}</div>`; return d;
    },
    _ruleSlide(s) {
        const color = s.color || "#c5a059";
        const d = document.createElement("div"); d.className = "ge-section";
        d.innerHTML = `<div class="ge-rule-card" style="border-color:${color}33">
            <div class="ge-rule-label" style="color:${color}">FORMULA</div>
            <h2 class="ge-rule-title">${s.title}</h2>
            <div class="ge-rule-formula" style="color:${color}">${s.formula}</div>
            <div class="ge-rule-exs">${(s.examples||[]).map(ex =>
                `<div class="ge-rule-ex-row">
                    <span class="ge-rule-ex-full">${ex.full}</span>
                    ${ex.short && ex.short !== "---" ? `<span class="ge-rule-ex-short">${ex.short}</span>` : ""}
                </div>`).join("")}
            </div></div>`; return d;
    },
    _writingFocus(s) {
        const d = document.createElement("div"); d.className = "ge-section";
        d.innerHTML = `<div class="ge-writing-card">
            <div class="ge-writing-label">KEY RULE</div>
            <h2 class="ge-writing-title">${s.title}</h2>
            <div class="ge-writing-content">${s.content}</div>
        </div>`; return d;
    },
    _mcqInit(s) {
        this._mcqData = s.questions; this._mcqCurrent = 0; this._mcqScore = 0;
        const d = document.createElement("div"); d.className = "ge-section ge-mcq-section"; d.id = "ge-mcq-root";
        d.innerHTML = this._mcqQuestion(s.title, 0); return d;
    },
    _mcqQuestion(title, idx) {
        const q = this._mcqData[idx];
        return `<div class="ge-mcq-header">
            <div class="ge-mcq-title">${title}</div>
            <div class="ge-mcq-prog">${idx+1} / ${this._mcqData.length}</div></div>
            <div class="ge-mcq-q" id="ge-mcq-q">${q.q}</div>
            <div class="ge-mcq-opts">${q.opts.map(opt =>
                `<button class="ge-mcq-opt" onclick="GrammarEngine._checkAns(${JSON.stringify(opt)},${JSON.stringify(q.ans)},this,${JSON.stringify(title)})">${opt}</button>`
            ).join("")}</div>`;
    },
    _checkAns(selected, correct, btn, title) {
        document.querySelectorAll(".ge-mcq-opt").forEach(b => b.disabled = true);
        if (selected === correct) {
            btn.classList.add("correct");
            const qEl = document.getElementById("ge-mcq-q");
            if (qEl) qEl.innerHTML = qEl.innerHTML.replace("____", `<span class="ge-mcq-ans">${correct}</span>`);
            this._mcqScore++;
            setTimeout(() => {
                this._mcqCurrent++;
                const root = document.getElementById("ge-mcq-root");
                if (!root) return;
                if (this._mcqCurrent < this._mcqData.length) root.innerHTML = this._mcqQuestion(title, this._mcqCurrent);
                else this._mcqResult();
            }, 700);
        } else {
            btn.classList.add("wrong");
            btn.style.animation = "ge-shake .4s ease";
            setTimeout(() => { btn.style.animation = ""; document.querySelectorAll(".ge-mcq-opt").forEach(b => b.disabled = false); }, 400);
        }
    },
    _mcqResult() {
        const total = this._mcqData.length, score = this._mcqScore;
        const pct = Math.round(score/total*100);
        const color = pct >= 80 ? "#00ff88" : pct >= 60 ? "#f39c12" : "#ff4757";
        const root = document.getElementById("ge-mcq-root"); if (!root) return;
        root.innerHTML = `<div class="ge-result">
            <div class="ge-result-score" style="color:${color}">${score} / ${total}</div>
            <div class="ge-result-pct" style="color:${color}">${pct}%</div>
            <div class="ge-result-label">${pct>=80?"&#127942; EXCELLENT!":pct>=60?"&#128077; GOOD JOB!":"&#128170; KEEP PRACTISING!"}</div>
            <button class="ge-nav-btn" style="margin-top:3vh" onclick="GrammarEngine.next()">CONTINUE &#9654;</button>
        </div>`;
    },

    // ── Styles ──
    _injectStyles() {
        if (document.getElementById("ge-styles")) return;
        const s = document.createElement("style"); s.id = "ge-styles";
        s.textContent = `
        .ge-root{height:100vh;width:100%;overflow:hidden;display:flex;flex-direction:column;background:radial-gradient(ellipse at 30% 20%,#0d1a2e 0%,#060810 70%);font-family:"Barlow","Segoe UI",sans-serif;color:#fff;position:relative}
        .ge-root::before{content:"";position:absolute;inset:0;pointer-events:none;background:repeating-linear-gradient(0deg,transparent,transparent 3px,rgba(0,212,255,.012) 3px,rgba(0,212,255,.012) 4px)}
        .ge-header{height:56px;flex-shrink:0;display:flex;align-items:center;gap:16px;padding:0 32px;background:rgba(6,8,16,.9);border-bottom:1px solid rgba(197,160,89,.2);position:relative;z-index:2}
        .ge-lesson-title{font-family:"Orbitron",sans-serif;font-size:.65rem;font-weight:900;letter-spacing:4px;color:#c5a059;white-space:nowrap;flex-shrink:0}
        .ge-progress-wrap{flex:1;height:3px;background:rgba(255,255,255,.08);border-radius:2px;overflow:hidden}
        .ge-progress-bar{height:100%;background:linear-gradient(90deg,#c5a059,#00d4ff);border-radius:2px;transition:width .4s ease;box-shadow:0 0 8px rgba(197,160,89,.5)}
        .ge-slide-counter{font-family:"Orbitron",sans-serif;font-size:.55rem;color:rgba(255,255,255,.35);letter-spacing:2px;flex-shrink:0}
        .ge-slide-area{flex:1;overflow-y:auto;display:flex;align-items:center;justify-content:center;padding:3vh 4vw 2vh}
        .ge-slide-area::-webkit-scrollbar{width:3px}.ge-slide-area::-webkit-scrollbar-thumb{background:#c5a059;border-radius:2px}
        .ge-wrapper{width:100%;max-width:1300px}
        .ge-nav{height:64px;flex-shrink:0;display:flex;align-items:center;justify-content:space-between;padding:0 32px;background:rgba(4,6,14,.95);border-top:1px solid rgba(197,160,89,.12);position:relative;z-index:2}
        .ge-nav-btn{padding:10px 28px;background:transparent;border:1px solid #c5a059;color:#c5a059;border-radius:6px;cursor:pointer;font-family:"Orbitron",sans-serif;font-size:.6rem;letter-spacing:2px;transition:background .2s,color .2s}
        .ge-nav-btn:hover:not(:disabled){background:#c5a059;color:#000}
        .ge-nav-btn:disabled{opacity:.2;cursor:not-allowed}
        .ge-nav-dots{display:flex;gap:6px;align-items:center}
        .ge-dot{width:7px;height:7px;border-radius:50%;background:rgba(255,255,255,.15);cursor:pointer;transition:.25s}
        .ge-dot.visited{background:rgba(197,160,89,.4)}.ge-dot.active{background:#c5a059;transform:scale(1.4);box-shadow:0 0 8px rgba(197,160,89,.6)}
        .ge-section{width:100%}
        .ge-section-title{font-family:"Orbitron",sans-serif;font-size:clamp(1.4rem,3.5vw,2.8rem);font-weight:900;color:#c5a059;margin-bottom:4vh;letter-spacing:2px;text-align:center}
        .ge-big-title{text-align:center;position:relative;padding:4vh 0}
        .ge-big-glow{position:absolute;inset:0;border-radius:50%;opacity:.25;pointer-events:none}
        .ge-big-text{font-family:"Orbitron",sans-serif;font-size:clamp(4rem,14vw,11rem);font-weight:900;margin:0;line-height:1;position:relative}
        .ge-big-sub{font-size:clamp(1rem,3vw,2rem);letter-spacing:6px;color:rgba(255,255,255,.7);margin-top:2vh;text-transform:uppercase;position:relative}
        .ge-reveal-item{opacity:.08;transition:opacity .4s ease,border-color .4s ease,background .4s ease}
        .ge-reveal-item.revealed{opacity:1}
        .ge-defs-list{display:flex;flex-direction:column;gap:3vh;align-items:center}
        .ge-def-item{width:85%;padding:4vh 4vw;border-radius:24px;background:rgba(255,255,255,.03);border:1.5px solid transparent;text-align:center}
        .ge-def-item.revealed{border-color:#c5a059;background:rgba(197,160,89,.07)}
        .ge-def-p{font-size:clamp(2rem,6vw,5rem);font-weight:900;color:#fff;line-height:1.1;margin-bottom:1.5vh}
        .ge-def-d{font-size:clamp(1rem,2.5vw,1.8rem);color:#c5a059;font-weight:600}
        .ge-grid-desc{font-size:clamp(.9rem,2vw,1.4rem);color:rgba(255,255,255,.5);text-align:center;margin-bottom:3vh;letter-spacing:1px}
        .ge-reveal-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:1.5vh}
        .ge-grid-item{padding:2.5vh 2vw;border-radius:16px;background:rgba(255,255,255,.03);border-left:4px solid transparent;font-size:clamp(1rem,2.2vw,1.6rem);font-weight:700;color:#e0e0e0}
        .ge-grid-item.revealed{border-left-color:#c5a059;background:rgba(197,160,89,.06)}
        .ge-table-wrap{overflow-x:auto;border-radius:16px;border:1px solid rgba(197,160,89,.2)}
        .ge-table{width:100%;border-collapse:collapse}
        .ge-table thead tr{background:rgba(197,160,89,.15)}
        .ge-table th{padding:2vh 2vw;text-align:left;font-family:"Orbitron",sans-serif;font-size:clamp(.6rem,1.2vw,.85rem);letter-spacing:2px;color:#c5a059;text-transform:uppercase}
        .ge-table td{padding:2vh 2vw;font-size:clamp(1rem,2vw,1.5rem);font-weight:700;color:#e0e0e0;border-top:1px solid rgba(255,255,255,.05)}
        .ge-table tr.ge-reveal-item:not(.revealed) td{opacity:.08}
        .ge-transform-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:1.5vh}
        .ge-tf-item{display:flex;align-items:center;justify-content:space-around;padding:2.5vh 1.5vw;border-radius:18px;background:rgba(255,255,255,.03);border:1.5px solid transparent}
        .ge-tf-item.revealed{border-color:rgba(197,160,89,.4);background:rgba(197,160,89,.06)}
        .ge-tf-s{font-size:clamp(1.5rem,3.5vw,3rem);font-weight:900;color:#fff}
        .ge-tf-a{font-size:clamp(1rem,2vw,1.8rem);color:#c5a059}
        .ge-tf-o{font-size:clamp(1.5rem,3.5vw,3rem);font-weight:900;color:#c5a059}
        .ge-rule-card{padding:5vh 5vw;border-radius:32px;background:rgba(255,255,255,.02);border:1.5px solid rgba(197,160,89,.2);text-align:left}
        .ge-rule-label{font-family:"Orbitron",sans-serif;font-size:clamp(.55rem,1.2vw,.8rem);letter-spacing:4px;font-weight:900;margin-bottom:1.5vh}
        .ge-rule-title{font-size:clamp(1.8rem,4.5vw,3.5rem);font-weight:900;color:#fff;margin-bottom:2vh}
        .ge-rule-formula{font-family:"Orbitron",sans-serif;font-size:clamp(1.2rem,3vw,2.5rem);font-weight:900;margin-bottom:4vh;padding:2vh 2.5vw;border-radius:12px;background:rgba(0,0,0,.3)}
        .ge-rule-exs{display:flex;flex-direction:column;gap:2vh}
        .ge-rule-ex-row{display:flex;align-items:center;gap:2vw;flex-wrap:wrap}
        .ge-rule-ex-full{font-size:clamp(1.2rem,2.8vw,2.2rem);font-weight:800;color:#fff}
        .ge-rule-ex-short{font-size:clamp(.9rem,2vw,1.5rem);color:rgba(255,255,255,.5);font-style:italic}
        .ge-writing-card{padding:6vh 6vw;border-radius:40px;background:rgba(255,255,255,.02);border:2px solid #c5a059;text-align:center}
        .ge-writing-label{font-family:"Orbitron",sans-serif;font-size:clamp(.5rem,1vw,.75rem);letter-spacing:5px;color:#c5a059;margin-bottom:2vh}
        .ge-writing-title{font-size:clamp(1.5rem,4vw,3rem);font-weight:900;color:#fff;margin-bottom:4vh}
        .ge-writing-content{font-size:clamp(1.4rem,3.5vw,2.8rem);font-weight:800;line-height:1.5;color:#e0e0e0}
        .ge-mcq-section{display:flex;flex-direction:column;gap:3vh}
        .ge-mcq-header{display:flex;align-items:center;justify-content:space-between}
        .ge-mcq-title{font-family:"Orbitron",sans-serif;font-size:clamp(.7rem,1.5vw,1rem);color:#c5a059;letter-spacing:3px;font-weight:900}
        .ge-mcq-prog{font-family:"Orbitron",sans-serif;font-size:clamp(.6rem,1.2vw,.85rem);color:rgba(255,255,255,.35);letter-spacing:2px}
        .ge-mcq-q{font-size:clamp(1.6rem,4.5vw,3.5rem);font-weight:900;color:#fff;line-height:1.3;padding:4vh 4vw;border-radius:24px;background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.08)}
        .ge-mcq-ans{color:#00ff88;text-decoration:underline;text-underline-offset:6px}
        .ge-mcq-opts{display:flex;gap:2vw;flex-wrap:wrap;justify-content:center}
        .ge-mcq-opt{flex:1;min-width:160px;max-width:320px;padding:3vh 2vw;border-radius:20px;background:rgba(255,255,255,.04);border:2px solid rgba(255,255,255,.1);color:#fff;cursor:pointer;font-size:clamp(1.2rem,3vw,2.2rem);font-weight:900;font-family:"Barlow",sans-serif;transition:background .2s,border-color .2s,transform .15s}
        .ge-mcq-opt:hover:not(:disabled){background:rgba(0,212,255,.08);border-color:rgba(0,212,255,.4);transform:translateY(-2px)}
        .ge-mcq-opt.correct{background:rgba(0,255,136,.15)!important;border-color:#00ff88!important;color:#00ff88}
        .ge-mcq-opt.wrong{background:rgba(255,71,87,.15);border-color:#ff4757;color:#ff4757}
        .ge-result{text-align:center;display:flex;flex-direction:column;align-items:center;gap:2vh;padding:4vh}
        .ge-result-score{font-family:"Orbitron",sans-serif;font-size:clamp(3rem,10vw,8rem);font-weight:900;line-height:1}
        .ge-result-pct{font-family:"Orbitron",sans-serif;font-size:clamp(1.5rem,4vw,3rem);font-weight:700;opacity:.8}
        .ge-result-label{font-size:clamp(1.2rem,3vw,2rem);color:rgba(255,255,255,.8);font-weight:700;letter-spacing:2px}
        @keyframes ge-shake{0%,100%{transform:translateX(0)}25%{transform:translateX(-10px)}75%{transform:translateX(10px)}}
        `;
        document.head.appendChild(s);
    }
};
