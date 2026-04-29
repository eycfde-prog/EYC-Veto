/* ════════════════════════════════════════════
   grammar-engine-student.js
   Student MCQ Exam System — EYC VETO Online
   ════════════════════════════════════════════
   - 17 درس، كل امتحان 20 سؤال
   - كل سؤال = 50 درجة → الدرجة القصوى = 1000
   - بعد الانتهاء: يصحح عبر Anthropic API
   - بعد التصحيح: يرسل الدرجة للـ Apps Script
     → يُحدِّث عمود Grammar (F) في ورقة Scard
   ════════════════════════════════════════════ */

// ════════════════════════════════════════════
// APPS SCRIPT URL — غيّر الرابط لرابط الـ Deployment
// ════════════════════════════════════════════
const APPS_SCRIPT_URL = "https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec";

// ════════════════════════════════════════════
// QUESTION BANK — 20 سؤال لكل درس
// ════════════════════════════════════════════
const STUDENT_QUESTION_BANK = {

  "1-1": {
    title: "PRONOUNS",
    color: "#c5a059",
    questions: [
      { q: "____ is reading a book.",                   opts: ["Him","He","Me"],            ans: "He"    },
      { q: "____ are playing football.",                opts: ["Them","Us","They"],          ans: "They"  },
      { q: "My sister is tall, ____ is a doctor.",     opts: ["Her","She","It"],            ans: "She"   },
      { q: "The dog is hungry, ____ wants food.",      opts: ["He","It","They"],            ans: "It"    },
      { q: "____ go to school every day.",              opts: ["Us","Me","We"],              ans: "We"    },
      { q: "Are ____ coming to the party?",            opts: ["your","them","you"],          ans: "you"   },
      { q: "My friend and I are happy, ____ won.",     opts: ["We","They","Us"],            ans: "We"    },
      { q: "____ am very tired today.",                 opts: ["Me","I","My"],               ans: "I"     },
      { q: "Ahmed is smart, ____ studies hard.",       opts: ["Him","He","His"],            ans: "He"    },
      { q: "The flowers smell good, ____ are beautiful.", opts: ["It","Them","They"],       ans: "They"  },
      { q: "I saw Ali and talked to ____.",            opts: ["he","him","his"],            ans: "him"   },
      { q: "Can you help ____ with this bag?",         opts: ["me","I","my"],               ans: "me"    },
      { q: "Our teacher gave ____ homework.",          opts: ["we","our","us"],             ans: "us"    },
      { q: "I like these shoes, I will buy ____.",     opts: ["they","them","it"],          ans: "them"  },
      { q: "Where is Sara? I need to call ____.",      opts: ["her","she","hers"],          ans: "her"   },
      { q: "The cake is delicious, taste ____.",       opts: ["it","its","them"],           ans: "it"    },
      { q: "Please listen to ____, I am talking.",     opts: ["I","my","me"],               ans: "me"    },
      { q: "We invited them, we like ____.",           opts: ["them","they","their"],       ans: "them"  },
      { q: "My father told ____ a funny story.",       opts: ["we","us","our"],             ans: "us"    },
      { q: "Don't worry about ____, I can do it.",     opts: ["I","my","me"],               ans: "me"    }
    ]
  },

  "1-2": {
    title: "POSSESSIVES & VERB TO BE",
    color: "#3498db",
    questions: [
      { q: "This is my pen. It is ____.",              opts: ["me","mine","my"],            ans: "mine"  },
      { q: "She has a cat. ____ name is Fluffy.",      opts: ["Her","Hers","She"],          ans: "Her"   },
      { q: "This house belongs to us. It is ____.",   opts: ["our","ours","we"],           ans: "ours"  },
      { q: "He lost ____ key yesterday.",              opts: ["him","his","he"],            ans: "his"   },
      { q: "Is this ____ phone? Yes, it's mine.",     opts: ["you","yours","your"],        ans: "your"  },
      { q: "They have a car. That car is ____.",      opts: ["their","theirs","them"],     ans: "theirs"},
      { q: "The bird is in ____ nest.",               opts: ["its","it's","it"],           ans: "its"   },
      { q: "I like ____ new shirt, Ahmed!",           opts: ["your","yours","you"],        ans: "your"  },
      { q: "This bag isn't mine, it is ____.",        opts: ["her","hers","she"],          ans: "hers"  },
      { q: "We love ____ school very much.",          opts: ["our","ours","us"],           ans: "our"   },
      { q: "I ____ very happy today.",                opts: ["is","are","am"],             ans: "am"    },
      { q: "They ____ my best friends.",              opts: ["are","am","is"],             ans: "are"   },
      { q: "____ she your sister?",                   opts: ["Are","Is","Am"],             ans: "Is"    },
      { q: "We ____ not at home now.",                opts: ["is","am","are"],             ans: "are"   },
      { q: "The dog ____ hungry.",                    opts: ["is","are","am"],             ans: "is"    },
      { q: "____ you ready for the test?",            opts: ["Is","Am","Are"],             ans: "Are"   },
      { q: "It ____ a very hot day.",                 opts: ["is","are","am"],             ans: "is"    },
      { q: "Ahmed and Ali ____ clever.",              opts: ["is","am","are"],             ans: "are"   },
      { q: "I ____ not a doctor.",                    opts: ["is","am","are"],             ans: "am"    },
      { q: "____ it your book?",                      opts: ["Is","Are","Am"],             ans: "Is"    }
    ]
  },

  "1-3": {
    title: "INDEFINITE ARTICLES",
    color: "#9b59b6",
    questions: [
      { q: "I saw ____ elephant at the zoo.",              opts: ["a","an","the"],          ans: "an"    },
      { q: "She is ____ doctor.",                          opts: ["a","an","the"],          ans: "a"     },
      { q: "Please close ____ door.",                      opts: ["a","an","the"],          ans: "the"   },
      { q: "He has ____ umbrella.",                        opts: ["a","an","the"],          ans: "an"    },
      { q: "____ sun rises in the east.",                  opts: ["A","An","The"],          ans: "The"   },
      { q: "I ate ____ orange for breakfast.",             opts: ["a","an","the"],          ans: "an"    },
      { q: "He goes to ____ school every day.",            opts: ["a","the","—"],           ans: "—"     },
      { q: "She is reading ____ interesting book.",        opts: ["a","an","the"],          ans: "an"    },
      { q: "I live near ____ Nile.",                       opts: ["a","an","the"],          ans: "the"   },
      { q: "Can I have ____ cup of tea?",                  opts: ["a","an","the"],          ans: "a"     },
      { q: "He is ____ honest man.",                       opts: ["a","an","the"],          ans: "an"    },
      { q: "I go to ____ bed at 10 PM.",                   opts: ["the","a","—"],           ans: "—"     },
      { q: "They visited ____ UK last summer.",            opts: ["a","an","the"],          ans: "the"   },
      { q: "She is ____ best student in the class.",       opts: ["a","an","the"],          ans: "the"   },
      { q: "He has ____ university degree.",               opts: ["a","an","the"],          ans: "a"     },
      { q: "____ moon was bright last night.",             opts: ["A","An","The"],          ans: "The"   },
      { q: "I saw ____ accident on my way here.",          opts: ["a","an","the"],          ans: "an"    },
      { q: "We had ____ lunch at noon.",                   opts: ["the","a","—"],           ans: "—"     },
      { q: "She plays ____ football every weekend.",       opts: ["the","a","—"],           ans: "—"     },
      { q: "____ Nile is the longest river in Africa.",   opts: ["A","An","The"],          ans: "The"   }
    ]
  },

  "2-1": {
    title: "TELLING THE TIME",
    color: "#1abc9c",
    questions: [
      { q: "How do you say 3:00?",                     opts: ["three past","three o'clock","o'clock three"],    ans: "three o'clock"    },
      { q: "How do you say 4:15?",                     opts: ["quarter past four","quarter to four","four fifteen past"], ans: "quarter past four" },
      { q: "How do you say 6:30?",                     opts: ["half to six","half past six","six half"],        ans: "half past six"    },
      { q: "How do you say 7:45?",                     opts: ["quarter past seven","quarter to eight","forty-five past seven"], ans: "quarter to eight" },
      { q: "How do you say 2:20?",                     opts: ["twenty past two","twenty to two","two twenty past"], ans: "twenty past two" },
      { q: "How do you say 5:40?",                     opts: ["forty past five","twenty to six","twenty past six"], ans: "twenty to six"  },
      { q: "12:00 at night is ____.",                  opts: ["noon","midnight","AM noon"],                     ans: "midnight"         },
      { q: "8 AM means ____.",                         opts: ["8 at night","8 in the morning","8 in the afternoon"], ans: "8 in the morning" },
      { q: "How do you say 10:05?",                    opts: ["five past ten","five to ten","ten five to"],     ans: "five past ten"    },
      { q: "How do you say 4:50?",                     opts: ["fifty past four","ten to five","ten past five"], ans: "ten to five"      },
      { q: "12:00 midday is called ____.",             opts: ["midnight","noon","afternoon"],                  ans: "noon"             },
      { q: "How do you say 9:15?",                     opts: ["quarter to nine","quarter past nine","nine fifteen to"], ans: "quarter past nine" },
      { q: "How do you say 11:30?",                    opts: ["half to eleven","half past eleven","eleven thirty past"], ans: "half past eleven" },
      { q: "How do you say 1:45?",                     opts: ["quarter past one","quarter to two","forty-five past one"], ans: "quarter to two" },
      { q: "How do you say 8:10?",                     opts: ["ten past eight","ten to eight","eight ten to"], ans: "ten past eight"   },
      { q: "How do you say 3:55?",                     opts: ["five past three","five to four","fifty-five past three"], ans: "five to four" },
      { q: "PM stands for ____.",                      opts: ["past midnight","post meridiem","pre morning"],  ans: "post meridiem"    },
      { q: "AM stands for ____.",                      opts: ["after midnight","ante meridiem","afternoon morning"], ans: "ante meridiem" },
      { q: "How do you say 6:00?",                     opts: ["six past","six o'clock","o'clock six"],         ans: "six o'clock"      },
      { q: "How do you say 2:45?",                     opts: ["quarter past two","quarter to three","two forty-five past"], ans: "quarter to three" }
    ]
  },

  "2-4": {
    title: "THE DATE",
    color: "#e74c3c",
    questions: [
      { q: "How do you say '3rd'?",                    opts: ["third","three","thirth"],                       ans: "third"          },
      { q: "Which month comes after July?",            opts: ["June","August","September"],                    ans: "August"         },
      { q: "How do you say '21st'?",                   opts: ["twenty-one","twenty-oneth","twenty-first"],     ans: "twenty-first"   },
      { q: "My birthday is ____ January.",             opts: ["in","on","at"],                                 ans: "in"             },
      { q: "The meeting is ____ 5th March.",           opts: ["in","on","at"],                                 ans: "on"             },
      { q: "The class starts ____ 9 AM.",              opts: ["in","on","at"],                                 ans: "at"             },
      { q: "What is the 4th month?",                   opts: ["March","May","April"],                          ans: "April"          },
      { q: "How do you say '12th'?",                   opts: ["twelveth","twelfth","twelfeth"],                ans: "twelfth"        },
      { q: "I was born ____ 1999.",                    opts: ["on","at","in"],                                 ans: "in"             },
      { q: "Which month comes before November?",       opts: ["September","December","October"],               ans: "October"        },
      { q: "How do you say '2nd'?",                    opts: ["second","two","twoth"],                         ans: "second"         },
      { q: "What is the 7th month?",                   opts: ["June","August","July"],                         ans: "July"           },
      { q: "Which month comes after March?",           opts: ["February","May","April"],                       ans: "April"          },
      { q: "The party is ____ Friday.",                opts: ["in","at","on"],                                 ans: "on"             },
      { q: "How do you say '20th'?",                   opts: ["twentieth","twentyth","twentiethth"],           ans: "twentieth"      },
      { q: "The school opens ____ September.",         opts: ["on","at","in"],                                 ans: "in"             },
      { q: "We write dates with ____ for each day.",  opts: ["cardinal numbers","ordinal numbers","zero numbers"], ans: "ordinal numbers" },
      { q: "How do you say '1st'?",                    opts: ["oneth","first","firstly"],                      ans: "first"          },
      { q: "What is the last month of the year?",      opts: ["November","October","December"],                ans: "December"       },
      { q: "The class is ____ Monday at 10 AM.",       opts: ["in","on","at"],                                 ans: "on"             }
    ]
  },

  "3-1": {
    title: "PRESENT CONTINUOUS",
    color: "#2ecc71",
    questions: [
      { q: "She ____ (read) a book now.",                          opts: ["reads","is reading","read"],                    ans: "is reading"         },
      { q: "They ____ (not play) football at the moment.",         opts: ["aren't playing","don't play","isn't playing"],  ans: "aren't playing"     },
      { q: "____ you ____ (study) right now?",                     opts: ["Do / study","Are / studying","Is / studying"],  ans: "Are / studying"     },
      { q: "Look! The dog ____ (run) in the garden.",             opts: ["runs","is running","ran"],                       ans: "is running"         },
      { q: "I ____ (write) an email at the moment.",               opts: ["write","am writing","wrote"],                   ans: "am writing"         },
      { q: "The baby ____ (sleep) right now.",                     opts: ["sleep","is sleeping","sleeps"],                 ans: "is sleeping"        },
      { q: "We ____ (not watch) TV currently.",                    opts: ["aren't watching","don't watching","isn't watching"], ans: "aren't watching" },
      { q: "____ he ____ (sit) in the office now?",                opts: ["Does / sit","Is / sitting","Are / sitting"],    ans: "Is / sitting"       },
      { q: "She ____ (make) coffee in the kitchen.",               opts: ["makes","is making","made"],                     ans: "is making"          },
      { q: "The kids ____ (lie) on the grass now.",                opts: ["lie","are lying","is lying"],                   ans: "are lying"          },
      { q: "Listen! He ____ (sing) upstairs.",                     opts: ["sings","is singing","sang"],                    ans: "is singing"         },
      { q: "What ____ you ____ (do) at this moment?",              opts: ["do / do","are / doing","is / doing"],           ans: "are / doing"        },
      { q: "She ____ (not cook) dinner right now.",                opts: ["isn't cooking","doesn't cook","wasn't cooking"],ans: "isn't cooking"      },
      { q: "He ____ (sit) at his desk currently.",                 opts: ["sits","is sitting","sat"],                      ans: "is sitting"         },
      { q: "I ____ (not feel) well today.",                        opts: ["don't feel","am not feeling","wasn't feeling"], ans: "am not feeling"     },
      { q: "They ____ (build) a new school at the moment.",        opts: ["build","are building","built"],                 ans: "are building"       },
      { q: "The spelling of 'run' in Present Continuous is ____.", opts: ["runing","running","runeing"],                   ans: "running"            },
      { q: "The spelling of 'make' in Present Continuous is ____.",opts: ["makeing","makking","making"],                  ans: "making"             },
      { q: "The spelling of 'lie' in Present Continuous is ____.", opts: ["lieing","lying","liying"],                     ans: "lying"              },
      { q: "Which word signals Present Continuous?",               opts: ["yesterday","at the moment","always"],           ans: "at the moment"      }
    ]
  },

  "3-4": {
    title: "PRESENT SIMPLE",
    color: "#3498db",
    questions: [
      { q: "She ____ (go) to school every day.",                   opts: ["go","goes","is going"],                         ans: "goes"             },
      { q: "They ____ (not eat) meat.",                            opts: ["doesn't eat","don't eat","aren't eating"],      ans: "don't eat"        },
      { q: "____ he ____ (speak) French?",                         opts: ["Do / speak","Does / speaks","Does / speak"],    ans: "Does / speak"     },
      { q: "Water ____ at 100°C.",                                 opts: ["boil","boils","is boiling"],                    ans: "boils"            },
      { q: "I always ____ (brush) my teeth at night.",             opts: ["brush","brushes","brushing"],                   ans: "brush"            },
      { q: "She never ____ (study) late at night.",                opts: ["study","studies","is studying"],                ans: "studies"          },
      { q: "____ they ____ (live) in Cairo?",                      opts: ["Does / live","Do / lives","Do / live"],         ans: "Do / live"        },
      { q: "He ____ (have) two brothers.",                         opts: ["have","has","is having"],                       ans: "has"              },
      { q: "The teacher ____ (teach) grammar on Mondays.",         opts: ["teach","teaches","is teaching"],                ans: "teaches"          },
      { q: "We usually ____ (watch) TV after dinner.",             opts: ["watch","watches","watching"],                   ans: "watch"            },
      { q: "He ____ (study) at Cairo University.",                 opts: ["study","studies","is studying"],                ans: "studies"          },
      { q: "____ she ____ (have) a car?",                          opts: ["Do / have","Does / has","Does / have"],         ans: "Does / have"      },
      { q: "I sometimes ____ (drink) tea in the morning.",         opts: ["drink","drinks","drinking"],                    ans: "drink"            },
      { q: "The sun ____ in the west.",                            opts: ["set","sets","is setting"],                      ans: "sets"             },
      { q: "My father ____ (not work) on Fridays.",                opts: ["doesn't work","don't work","isn't working"],    ans: "doesn't work"     },
      { q: "Which signal word = Present Simple?",                  opts: ["now","at this moment","every day"],             ans: "every day"        },
      { q: "He ____ (fix) computers. Spelling of 'fix' is ____.",  opts: ["fixs","fixes","fixies"],                       ans: "fixes"            },
      { q: "She ____ (carry) her bag to school. Correct form:",    opts: ["carrys","carries","carryes"],                   ans: "carries"          },
      { q: "The rule: have → ____  (He/She/It)",                   opts: ["haves","has","have"],                           ans: "has"              },
      { q: "____ Ahmed ____ (play) football every Friday?",        opts: ["Do / play","Does / plays","Does / play"],       ans: "Does / play"      }
    ]
  },

  "4-1": {
    title: "PAST SIMPLE",
    color: "#e67e22",
    questions: [
      { q: "She ____ (go) to the market yesterday.",               opts: ["go","goes","went"],                             ans: "went"            },
      { q: "They ____ (not finish) the project last week.",        opts: ["didn't finish","don't finish","didn't finished"], ans: "didn't finish" },
      { q: "____ he ____ (call) you last night?",                  opts: ["Did / called","Does / call","Did / call"],      ans: "Did / call"      },
      { q: "I ____ (eat) a sandwich for lunch.",                   opts: ["eat","ate","eated"],                            ans: "ate"             },
      { q: "We ____ (visit) the pyramids two years ago.",          opts: ["visit","visited","were visiting"],              ans: "visited"         },
      { q: "She ____ (not come) to class yesterday.",              opts: ["didn't come","doesn't come","didn't came"],     ans: "didn't come"     },
      { q: "He ____ (make) a delicious cake last Sunday.",         opts: ["make","makes","made"],                          ans: "made"            },
      { q: "____ they ____ (see) that film last week?",            opts: ["Did / saw","Did / see","Does / see"],           ans: "Did / see"       },
      { q: "Ahmed ____ (have) a big exam yesterday.",              opts: ["have","has","had"],                             ans: "had"             },
      { q: "The team ____ (win) the match last Friday.",           opts: ["win","wins","won"],                             ans: "won"             },
      { q: "Past of 'go' is ____.",                                opts: ["goed","went","gone"],                           ans: "went"            },
      { q: "Past of 'take' is ____.",                              opts: ["taked","took","taken"],                         ans: "took"            },
      { q: "Past of 'give' is ____.",                              opts: ["gived","given","gave"],                         ans: "gave"            },
      { q: "Past of 'come' is ____.",                              opts: ["comed","came","come"],                          ans: "came"            },
      { q: "Past of 'get' is ____.",                               opts: ["geted","gotten","got"],                         ans: "got"             },
      { q: "Which word signals Past Simple?",                      opts: ["tomorrow","yesterday","now"],                   ans: "yesterday"       },
      { q: "I ____ (think) it was a good idea.",                   opts: ["thinked","thought","think"],                    ans: "thought"         },
      { q: "She ____ (see) a rainbow this morning.",               opts: ["seed","seen","saw"],                            ans: "saw"             },
      { q: "They ____ (not travel) abroad last year.",             opts: ["didn't travel","doesn't travel","didn't travelled"], ans: "didn't travel" },
      { q: "____ you ____ (enjoy) the party last night?",          opts: ["Do / enjoy","Did / enjoyed","Did / enjoy"],     ans: "Did / enjoy"     }
    ]
  },

  "4-4": {
    title: "PAST CONTINUOUS",
    color: "#8e44ad",
    questions: [
      { q: "She ____ (sleep) when I arrived.",                     opts: ["slept","was sleeping","is sleeping"],           ans: "was sleeping"        },
      { q: "They ____ (not play) at 8 PM last night.",             opts: ["weren't playing","didn't play","wasn't playing"], ans: "weren't playing" },
      { q: "____ he ____ (work) all day yesterday?",               opts: ["Was / working","Did / work","Were / working"],  ans: "Was / working"       },
      { q: "I ____ (read) while she ____ (cook).",                 opts: ["read / cooked","was reading / was cooking","read / was cooking"], ans: "was reading / was cooking" },
      { q: "The kids ____ (run) in the park at that moment.",      opts: ["ran","were running","are running"],             ans: "were running"        },
      { q: "He ____ (drive) when his phone rang.",                 opts: ["drove","was driving","is driving"],             ans: "was driving"         },
      { q: "____ you ____ (study) at 10 last night?",              opts: ["Did / study","Were / studying","Was / studying"], ans: "Were / studying"  },
      { q: "We ____ (not watch) TV when she came.",                opts: ["didn't watch","weren't watching","wasn't watching"], ans: "weren't watching" },
      { q: "She ____ (write) a letter all morning.",               opts: ["wrote","was writing","writes"],                 ans: "was writing"         },
      { q: "It ____ (rain) while we ____ (walk).",                 opts: ["rained / walked","was raining / were walking","raining / walking"], ans: "was raining / were walking" },
      { q: "Which signal word = Past Continuous?",                 opts: ["yesterday","while","last year"],                ans: "while"               },
      { q: "I ____ (eat) dinner when the lights went out.",        opts: ["ate","was eating","eating"],                    ans: "was eating"          },
      { q: "____ she ____ (study) at midnight last night?",        opts: ["Was / studying","Were / studying","Did / studying"], ans: "Was / studying" },
      { q: "He ____ (not sleep) at 9 AM yesterday.",               opts: ["wasn't sleeping","wasn't slept","didn't sleeping"], ans: "wasn't sleeping" },
      { q: "They ____ (play) football all afternoon yesterday.",   opts: ["played","were playing","are playing"],          ans: "were playing"        },
      { q: "She ____ (wait) for the bus for an hour.",             opts: ["waited","was waiting","is waiting"],            ans: "was waiting"         },
      { q: "The form for Past Continuous is ____.",                opts: ["was/were + V-ing","was/were + V","did + V-ing"], ans: "was/were + V-ing"   },
      { q: "I ____ (listen) to music when she called.",            opts: ["listened","was listening","am listening"],      ans: "was listening"       },
      { q: "Past Continuous is used for ____ actions.",            opts: ["finished","in-progress","repeated"],            ans: "in-progress"         },
      { q: "He ____ (read) while the others ____ (sleep).",        opts: ["read / slept","was reading / were sleeping","reading / sleeping"], ans: "was reading / were sleeping" }
    ]
  },

  "5-1": {
    title: "FUTURE SIMPLE",
    color: "#f39c12",
    questions: [
      { q: "I promise I ____ (call) you tonight.",                 opts: ["am calling","will call","going to call"],       ans: "will call"           },
      { q: "She ____ (travel) to London next month.",              opts: ["will travels","is going to travel","going travel"], ans: "is going to travel" },
      { q: "____ they ____ (come) to the party tomorrow?",         opts: ["Are / going to come","Will / comes","Do / come"], ans: "Are / going to come" },
      { q: "Look at those clouds! It ____ (rain).",                opts: ["will rain","is going to rain","rains"],         ans: "is going to rain"    },
      { q: "I think he ____ (win) the competition.",               opts: ["wins","is going to win","will win"],            ans: "will win"            },
      { q: "We ____ (not go) to the cinema tonight.",              opts: ["don't go","won't go","aren't going to going"],  ans: "won't go"            },
      { q: "She has decided — she ____ (study) medicine.",         opts: ["will study","is going to study","studies"],     ans: "is going to study"   },
      { q: "____ you ____ (help) me with this later?",             opts: ["Will / help","Are / going help","Do / help"],   ans: "Will / help"         },
      { q: "In the future, robots ____ (do) all the work.",        opts: ["do","are doing","will do"],                     ans: "will do"             },
      { q: "He ____ (not be) late, I promise.",                    opts: ["isn't","won't be","doesn't be"],                ans: "won't be"            },
      { q: "I am hungry. I ____ (make) a sandwich.",               opts: ["make","am making","will make"],                 ans: "will make"           },
      { q: "She has already booked — she ____ (fly) to Paris.",   opts: ["will fly","is going to fly","flies"],           ans: "is going to fly"     },
      { q: "It's cloudy — look! It ____ (snow) soon.",             opts: ["will snow","is going to snow","snows"],         ans: "is going to snow"    },
      { q: "Which is correct? (spontaneous decision)",             opts: ["I am going to help","I help","I will help"],    ans: "I will help"         },
      { q: "Future negative with 'will' = ____.",                  opts: ["will not / won't","would not","am not going"],  ans: "will not / won't"    },
      { q: "Signal word for future: ____.",                        opts: ["yesterday","last week","tomorrow"],             ans: "tomorrow"            },
      { q: "____ she ____ (start) her new job next Monday?",       opts: ["Will / start","Does / start","Is / going start"], ans: "Will / start"    },
      { q: "They ____ (not finish) on time, I think.",             opts: ["won't finish","don't finish","aren't finishing"], ans: "won't finish"    },
      { q: "I have a plan: I ____ (open) a restaurant next year.", opts: ["will open","am going to open","open"],          ans: "am going to open"   },
      { q: "He ____ (be) 18 next year.",                           opts: ["is","was","will be"],                           ans: "will be"             }
    ]
  },

  "5-4": {
    title: "FUTURE CONTINUOUS",
    color: "#16a085",
    questions: [
      { q: "At 9 AM tomorrow, I ____ (work) in the office.",       opts: ["will work","will be working","am working"],     ans: "will be working"     },
      { q: "She ____ (not sleep) at midnight — she's a night owl.", opts: ["won't be sleeping","won't sleep","isn't sleeping"], ans: "won't be sleeping" },
      { q: "____ they ____ (travel) this time next week?",         opts: ["Will / travel","Will / be travelling","Are / travelling"], ans: "Will / be travelling" },
      { q: "When you arrive, we ____ (have) dinner.",              opts: ["have","will have","will be having"],             ans: "will be having"      },
      { q: "He ____ (study) all evening tomorrow.",                opts: ["studies","will study","will be studying"],       ans: "will be studying"    },
      { q: "____ she ____ (wait) for us at the station?",          opts: ["Will / wait","Will / be waiting","Is / waiting"], ans: "Will / be waiting" },
      { q: "At 6 PM, the kids ____ (play) in the garden.",         opts: ["play","will play","will be playing"],            ans: "will be playing"     },
      { q: "I ____ (not use) the car tomorrow morning.",           opts: ["won't use","won't be using","don't use"],        ans: "won't be using"      },
      { q: "This time next month, he ____ (live) in London.",      opts: ["lives","will live","will be living"],            ans: "will be living"      },
      { q: "____ you ____ (work) late tomorrow night?",            opts: ["Will / work","Will / be working","Do / work"],   ans: "Will / be working"   },
      { q: "The formula for Future Continuous is ____.",           opts: ["will + V","will + be + V-ing","am/is/are + V-ing"], ans: "will + be + V-ing" },
      { q: "Signal phrase for Future Continuous: ____.",           opts: ["yesterday","at this time tomorrow","every day"],  ans: "at this time tomorrow" },
      { q: "I ____ (not watch) TV at midnight, I'll be in bed.",   opts: ["won't watch","won't be watching","don't watch"], ans: "won't be watching"  },
      { q: "At 3 PM she ____ (drive) to the airport.",             opts: ["drives","will drive","will be driving"],         ans: "will be driving"     },
      { q: "____ he ____ (meet) the boss this time tomorrow?",     opts: ["Will / meet","Will / be meeting","Does / meet"], ans: "Will / be meeting"  },
      { q: "They ____ (sleep) when we call them at 7 AM.",         opts: ["sleep","will sleep","will be sleeping"],         ans: "will be sleeping"    },
      { q: "She ____ (cook) all afternoon for the party.",         opts: ["cooks","will cook","will be cooking"],           ans: "will be cooking"     },
      { q: "The negative of 'will be playing' is ____.",           opts: ["will not play","won't be playing","am not playing"], ans: "won't be playing" },
      { q: "Future Continuous describes actions that are ____.",   opts: ["finished","in progress at a future time","repeated"], ans: "in progress at a future time" },
      { q: "____ you ____ (use) the printer at 4 PM?",             opts: ["Will / use","Will / be using","Do / use"],       ans: "Will / be using"     }
    ]
  },

  "6-1": {
    title: "PRESENT PERFECT SIMPLE",
    color: "#27ae60",
    questions: [
      { q: "She ____ (finish) her homework already.",              opts: ["finished","has finished","have finished"],       ans: "has finished"     },
      { q: "I ____ never ____ (try) sushi before.",               opts: ["have / tried","has / tried","did / try"],        ans: "have / tried"     },
      { q: "____ you ever ____ (visit) New York?",                 opts: ["Have / visited","Has / visited","Did / visit"],  ans: "Have / visited"   },
      { q: "He ____ (not arrive) yet.",                            opts: ["hasn't arrived","didn't arrive","haven't arrived"], ans: "hasn't arrived" },
      { q: "We ____ (live) here since 2018.",                      opts: ["lived","have lived","has lived"],                ans: "have lived"       },
      { q: "She ____ (just buy) a new phone.",                     opts: ["just buyed","has just bought","just bought"],    ans: "has just bought"  },
      { q: "____ they ____ (finish) the project yet?",             opts: ["Did / finish","Have / finished","Has / finished"], ans: "Have / finished" },
      { q: "I ____ (read) that book three times.",                 opts: ["read","have read","has read"],                   ans: "have read"        },
      { q: "He ____ (work) here for ten years.",                   opts: ["worked","has worked","have worked"],             ans: "has worked"       },
      { q: "We ____ (not see) that movie yet.",                    opts: ["didn't see","haven't seen","hasn't seen"],       ans: "haven't seen"     },
      { q: "Signal word for Present Perfect: ____.",               opts: ["yesterday","just","last year"],                  ans: "just"             },
      { q: "I ____ (be) to France twice.",                         opts: ["was","have been","had been"],                    ans: "have been"        },
      { q: "She ____ (lose) her keys. We need to find them.",      opts: ["lost","has lost","have lost"],                   ans: "has lost"         },
      { q: "They ____ (already / leave).",                         opts: ["already left","have already left","had already left"], ans: "have already left" },
      { q: "Present Perfect uses ____ as the auxiliary.",          opts: ["did / didn't","have / has","was / were"],        ans: "have / has"       },
      { q: "Past participle of 'go' is ____.",                     opts: ["went","gone","going"],                           ans: "gone"             },
      { q: "Past participle of 'write' is ____.",                  opts: ["wrote","writing","written"],                     ans: "written"          },
      { q: "He ____ never ____ (meet) the President.",             opts: ["has / met","have / met","did / meet"],           ans: "has / met"        },
      { q: "____ she ____ (clean) the kitchen yet?",               opts: ["Did / clean","Has / cleaned","Have / cleaned"],  ans: "Has / cleaned"    },
      { q: "We use 'for' with ____.",                              opts: ["a point in time","a period of time","specific dates"], ans: "a period of time" }
    ]
  },

  "6-4": {
    title: "PRESENT PERFECT CONTINUOUS",
    color: "#1e8449",
    questions: [
      { q: "She ____ (study) for 4 hours without a break.",        opts: ["studied","has been studying","have been studying"], ans: "has been studying" },
      { q: "I ____ (wait) here since 9 AM.",                       opts: ["waited","have been waiting","has been waiting"],    ans: "have been waiting" },
      { q: "____ they ____ (work) on this project all week?",      opts: ["Have / been working","Has / been working","Did / work"], ans: "Have / been working" },
      { q: "He ____ (not sleep) well lately.",                     opts: ["hasn't been sleeping","haven't been sleeping","didn't sleep"], ans: "hasn't been sleeping" },
      { q: "How long ____ you ____ (learn) English?",              opts: ["have / been learning","has / been learning","did / learn"], ans: "have / been learning" },
      { q: "We ____ (build) this house for six months.",           opts: ["built","have been building","has been building"],    ans: "have been building" },
      { q: "It ____ (rain) all day — the streets are wet.",        opts: ["has been raining","have been raining","rained"],    ans: "has been raining"   },
      { q: "She ____ (teach) at this school since 2015.",          opts: ["taught","has been teaching","have been teaching"],  ans: "has been teaching"  },
      { q: "____ he ____ (exercise) recently?",                    opts: ["Has / been exercising","Have / been exercising","Did / exercise"], ans: "Has / been exercising" },
      { q: "I'm tired because I ____ (run) for an hour.",          opts: ["ran","have been running","has been running"],       ans: "have been running"  },
      { q: "The formula for Present Perfect Continuous is ____.",  opts: ["have/has + V-ing","have/has + been + V-ing","had + been + V-ing"], ans: "have/has + been + V-ing" },
      { q: "Signal word: ____.",                                   opts: ["yesterday","for 3 hours","last week"],              ans: "for 3 hours"        },
      { q: "I ____ (not feel) well all day.",                      opts: ["haven't been feeling","hasn't been feeling","didn't feel"], ans: "haven't been feeling" },
      { q: "They ____ (argue) for two hours.",                     opts: ["argued","have been arguing","has been arguing"],    ans: "have been arguing"  },
      { q: "____ she ____ (live) here for long?",                  opts: ["Has / been living","Have / been living","Did / live"], ans: "Has / been living" },
      { q: "He ____ (study) since morning — he looks tired.",      opts: ["studied","has been studying","have been studying"], ans: "has been studying"  },
      { q: "We use Present Perfect Continuous for ____.",          opts: ["finished actions","ongoing duration","repeated habits"], ans: "ongoing duration" },
      { q: "She ____ (not practice) her piano lately.",            opts: ["hasn't been practicing","haven't been practicing","didn't practice"], ans: "hasn't been practicing" },
      { q: "____ they ____ (play) all afternoon?",                 opts: ["Have / been playing","Has / been playing","Did / play"], ans: "Have / been playing" },
      { q: "I ____ (work) on this report since morning.",          opts: ["worked","have been working","has been working"],    ans: "have been working"  }
    ]
  },

  "7-1": {
    title: "PAST PERFECT SIMPLE",
    color: "#6c3483",
    questions: [
      { q: "When I arrived, she ____ (already leave).",            opts: ["already left","had already left","has already left"],  ans: "had already left"   },
      { q: "He ____ (eat) before the meeting started.",            opts: ["ate","had eaten","has eaten"],                          ans: "had eaten"          },
      { q: "____ they ____ (finish) by the time we called?",       opts: ["Had / finished","Have / finished","Did / finish"],      ans: "Had / finished"     },
      { q: "She ____ (not sleep) when I knocked on the door.",     opts: ["hadn't slept","didn't sleep","hasn't slept"],           ans: "hadn't slept"       },
      { q: "By 9 PM, I ____ (complete) all my homework.",          opts: ["completed","have completed","had completed"],           ans: "had completed"      },
      { q: "He was tired because he ____ (work) all day.",         opts: ["worked","has worked","had worked"],                     ans: "had worked"         },
      { q: "____ she ____ (see) that film before last night?",     opts: ["Has / seen","Had / seen","Did / see"],                  ans: "Had / seen"         },
      { q: "I ____ (never visit) Egypt before that trip.",         opts: ["have never visited","had never visited","never visited"],"ans": "had never visited" },
      { q: "After he ____ (leave), we started the meeting.",       opts: ["left","had left","has left"],                           ans: "had left"           },
      { q: "She ____ (not eat) anything, so she was very hungry.", opts: ["didn't eat","hasn't eaten","hadn't eaten"],             ans: "hadn't eaten"       },
      { q: "Formula for Past Perfect: ____.",                      opts: ["had + past participle","have + past participle","was + V3"], ans: "had + past participle" },
      { q: "Signal word = ____.",                                  opts: ["now","by the time","tomorrow"],                         ans: "by the time"        },
      { q: "Past Perfect is used for action ____ another past.",   opts: ["same time as","after","before"],                        ans: "before"             },
      { q: "Past participle of 'see' is ____.",                    opts: ["saw","seen","seeing"],                                  ans: "seen"               },
      { q: "She ____ (already/leave) when I called.",              opts: ["already left","had already left","has already left"],   ans: "had already left"   },
      { q: "They ____ (not finish) when the time ran out.",        opts: ["hadn't finished","didn't finish","haven't finished"],   ans: "hadn't finished"    },
      { q: "He ____ (be) to Japan twice before 2010.",             opts: ["was","had been","has been"],                            ans: "had been"           },
      { q: "By the time she arrived, we ____ (eat) everything.",   opts: ["ate","had eaten","have eaten"],                         ans: "had eaten"          },
      { q: "____ you ____ (hear) of him before that day?",         opts: ["Have / heard","Had / heard","Did / hear"],              ans: "Had / heard"        },
      { q: "Past Perfect negative = ____.",                        opts: ["didn't + V3","hadn't + V3","haven't + V3"],             ans: "hadn't + V3"        }
    ]
  },

  "7-4": {
    title: "IF CONDITIONS",
    color: "#c5a059",
    questions: [
      { q: "If I ____ you, I wouldn't do that.",                   opts: ["am","was","were"],                              ans: "were"              },
      { q: "If it ____, we will cancel the trip.",                 opts: ["rains","rained","will rain"],                   ans: "rains"             },
      { q: "If she ____ her phone, she would have called.",        opts: ["didn't lose","hasn't lost","hadn't lost"],      ans: "hadn't lost"       },
      { q: "Water ____ if you heat it to 100°C. (Zero)",          opts: ["boil","boils","will boil"],                     ans: "boils"             },
      { q: "If I ____ time, I would start a hobby. (Second)",      opts: ["have","will have","had"],                       ans: "had"               },
      { q: "If she studies hard, she ____ pass the exam.",         opts: ["would","will","had"],                           ans: "will"              },
      { q: "If you touch fire, you ____ burned. (Zero)",           opts: ["will get","get","got"],                         ans: "get"               },
      { q: "If he ____ money, he would have bought a car.",        opts: ["saved","had saved","has saved"],                ans: "had saved"         },
      { q: "Which is the correct First Conditional?",              opts: ["If it rained, I stay","If it rains, I will stay","If it will rain, I stay"], ans: "If it rains, I will stay" },
      { q: "If they ____ me, I would have gone. (Third)",          opts: ["invite","invited","had invited"],               ans: "had invited"       },
      { q: "Zero Conditional: if clause = ____.",                  opts: ["Past Simple","Present Simple","Past Perfect"],  ans: "Present Simple"    },
      { q: "First Conditional: main clause = ____.",               opts: ["would + V","will + V","had + V3"],              ans: "will + V"          },
      { q: "Second Conditional: if clause = ____.",                opts: ["Present Simple","Past Simple","Past Perfect"],  ans: "Past Simple"       },
      { q: "Third Conditional: main clause = ____.",               opts: ["will + V","would + V","would have + V3"],       ans: "would have + V3"   },
      { q: "If I ____ a bird, I would fly around the world. (Second)", opts: ["am","was","were"],                         ans: "were"              },
      { q: "If you ____ (not study), you will fail. (First)",      opts: ["don't study","didn't study","hadn't studied"],  ans: "don't study"       },
      { q: "If she ____ (tell) me, I would have helped. (Third)",  opts: ["told","tells","had told"],                      ans: "had told"          },
      { q: "If you mix red and blue, you ____ purple. (Zero)",     opts: ["got","get","will get"],                         ans: "get"               },
      { q: "Which conditional talks about past regrets?",          opts: ["Zero","First","Third"],                         ans: "Third"             },
      { q: "If it ____ tomorrow, we won't go out. (First)",        opts: ["rained","rains","will rain"],                   ans: "rains"             }
    ]
  },

  "8-1": {
    title: "THE PASSIVE VOICE",
    color: "#2980b9",
    questions: [
      { q: "The letter ____ (write) by Ahmed yesterday.",          opts: ["is written","was written","has written"],       ans: "was written"         },
      { q: "English ____ (speak) all over the world.",             opts: ["is spoken","was spoken","has spoken"],          ans: "is spoken"           },
      { q: "The cake ____ (eat) before we arrived.",               opts: ["was eating","has been eaten","had been eaten"], ans: "had been eaten"      },
      { q: "A new hospital ____ (build) in our city next year.",   opts: ["is built","was built","will be built"],         ans: "will be built"       },
      { q: "The report ____ (submit) already.",                    opts: ["has been submitted","is submitted","was submitting"], ans: "has been submitted" },
      { q: "The windows ____ (clean) right now.",                  opts: ["are cleaned","are being cleaned","were cleaned"], ans: "are being cleaned"  },
      { q: "This book ____ (write) in 1990.",                      opts: ["is written","was written","has been written"],  ans: "was written"         },
      { q: "The problem ____ (solve) by the team soon.",           opts: ["is solved","will be solved","has been solved"], ans: "will be solved"      },
      { q: "The match ____ (cancel) due to rain.",                 opts: ["is cancelled","was cancelled","has cancelled"], ans: "was cancelled"       },
      { q: "Cars ____ (make) in that factory since 1980.",         opts: ["are made","were made","have been made"],        ans: "have been made"      },
      { q: "Passive formula = ____.",                              opts: ["subject + to be + V3","subject + did + V3","object + V + by"], ans: "subject + to be + V3" },
      { q: "Active: She cleans the room. → Passive: ____.",       opts: ["The room clean","The room is cleaned","The room was clean"], ans: "The room is cleaned" },
      { q: "Active: He wrote the letter. → Passive: ____.",       opts: ["The letter is written","The letter was written","The letter has written"], ans: "The letter was written" },
      { q: "Passive in Future Simple: ____.",                      opts: ["will + be + V3","will + V3","be + V3"],         ans: "will + be + V3"      },
      { q: "Passive in Present Continuous: ____.",                 opts: ["is/are being + V3","is/are + V3","was/were being + V3"], ans: "is/are being + V3" },
      { q: "Active: They are painting the walls. → Passive: ____.", opts: ["The walls are being painted","The walls were being painted","The walls have been painted"], ans: "The walls are being painted" },
      { q: "We use passive when the agent is ____.",               opts: ["known and important","unknown or unimportant","always the subject"], ans: "unknown or unimportant" },
      { q: "Modal passive: The form must be ____.",                opts: ["signed","signing","sign"],                      ans: "signed"              },
      { q: "Active: They have built a bridge. → Passive: ____.",  opts: ["A bridge has been built","A bridge was built","A bridge is built"],        ans: "A bridge has been built" },
      { q: "The meal ____ (serve) at 7 PM tonight.",               opts: ["is served","will be served","has been served"], ans: "will be served"      }
    ]
  }

};

// ════════════════════════════════════════════
// GRAMMAR EXAM ENGINE
// ════════════════════════════════════════════
const GrammarExam = {

  lessonId:    null,
  questions:   [],
  answers:     [],   // { selected, correct, isRight }
  current:     0,
  score:       0,
  studentEmail: null,
  container:   null,

  // ── Start exam ──────────────────────────────
  start(lessonId, containerEl, studentEmail) {
    const bank = STUDENT_QUESTION_BANK[lessonId];
    if (!bank) { console.error("No questions for lesson:", lessonId); return; }

    this.lessonId     = lessonId;
    this.questions    = this._shuffle([...bank.questions]).slice(0, 20);
    this.answers      = [];
    this.current      = 0;
    this.score        = 0;
    this.studentEmail = studentEmail || null;
    this.container    = containerEl;

    this._injectStyles();
    this._renderShell(bank.title, bank.color);
    this._renderQuestion();
  },

  // ── Shuffle helper ───────────────────────────
  _shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  },

  // ── Build exam shell ─────────────────────────
  _renderShell(title, color) {
    this.container.innerHTML = `
      <div class="ge-exam-root" id="ge-exam-root">
        <div class="ge-exam-header" style="border-bottom:2px solid ${color}22">
          <div class="ge-exam-title" style="color:${color}">${title}</div>
          <div class="ge-exam-meta">
            <span class="ge-exam-badge">📝 GRAMMAR EXAM</span>
            <span class="ge-exam-counter" id="ge-exam-counter">1 / 20</span>
          </div>
          <div class="ge-exam-progress-wrap">
            <div class="ge-exam-progress-bar" id="ge-exam-progress" style="background:${color};width:5%"></div>
          </div>
        </div>
        <div class="ge-exam-body" id="ge-exam-body"></div>
      </div>`;
  },

  // ── Render single question ───────────────────
  _renderQuestion() {
    const q     = this.questions[this.current];
    const num   = this.current + 1;
    const total = this.questions.length;
    const color = STUDENT_QUESTION_BANK[this.lessonId].color;

    // update header
    const counter  = document.getElementById("ge-exam-counter");
    const progress = document.getElementById("ge-exam-progress");
    if (counter)  counter.textContent = `${num} / ${total}`;
    if (progress) progress.style.width = `${(num / total) * 100}%`;

    // shuffle options
    const opts = this._shuffle([...q.opts]);

    const body = document.getElementById("ge-exam-body");
    if (!body) return;

    body.innerHTML = `
      <div class="ge-exam-qcard">
        <div class="ge-exam-qnum">Q${num}</div>
        <div class="ge-exam-qtext">${q.q}</div>
        <div class="ge-exam-opts" id="ge-exam-opts">
          ${opts.map(o => `
            <button class="ge-exam-opt" onclick="GrammarExam._pick(this,'${o.replace(/'/g,"\\'")}')">
              ${o}
            </button>`).join("")}
        </div>
      </div>`;
  },

  // ── Handle answer pick ───────────────────────
  _pick(btn, selected) {
    const q       = this.questions[this.current];
    const isRight = selected.trim() === q.ans.trim();

    // disable all buttons
    document.querySelectorAll(".ge-exam-opt").forEach(b => b.disabled = true);

    if (isRight) {
      btn.classList.add("ge-opt-correct");
      this.score++;
    } else {
      btn.classList.add("ge-opt-wrong");
      // show correct answer
      document.querySelectorAll(".ge-exam-opt").forEach(b => {
        if (b.textContent.trim() === q.ans.trim()) b.classList.add("ge-opt-correct");
      });
    }

    this.answers.push({ q: q.q, selected, correct: q.ans, isRight });

    // auto-advance
    setTimeout(() => {
      this.current++;
      if (this.current < this.questions.length) {
        this._renderQuestion();
      } else {
        this._showResults();
      }
    }, 900);
  },

  // ── Show results & submit ────────────────────
  _showResults() {
    const total     = this.questions.length;
    const score     = this.score;
    const pct       = Math.round((score / total) * 100);
    const rawScore  = score * 50; // 50 pts per question
    const color     = pct >= 80 ? "#00ff88" : pct >= 60 ? "#f39c12" : "#ff4757";
    const label     = pct >= 80 ? "🏆 EXCELLENT!" : pct >= 60 ? "👍 GOOD JOB!" : "💪 KEEP PRACTISING!";

    const body = document.getElementById("ge-exam-body");
    if (!body) return;

    body.innerHTML = `
      <div class="ge-exam-result">
        <div class="ge-exam-result-score" style="color:${color}">${score} / ${total}</div>
        <div class="ge-exam-result-pct"   style="color:${color}">${pct}%</div>
        <div class="ge-exam-result-pts"   style="color:${color}">+${rawScore} pts</div>
        <div class="ge-exam-result-label">${label}</div>
        <div class="ge-exam-result-submitting" id="ge-submit-status">
          <span class="ge-spin">⏳</span> Saving your score...
        </div>
      </div>`;

    this._submitScore(rawScore);
  },

  // ── Submit score via Apps Script ─────────────
  async _submitScore(rawScore) {
    const statusEl = document.getElementById("ge-submit-status");

    if (!this.studentEmail) {
      if (statusEl) statusEl.innerHTML = "⚠️ Not logged in — score not saved.";
      return;
    }

    const grades  = [{ col: "Grammar", grade: rawScore }];
    const url     = `${APPS_SCRIPT_URL}?action=updateGrades&email=${encodeURIComponent(this.studentEmail)}&grades=${encodeURIComponent(JSON.stringify(grades))}`;

    try {
      const res  = await fetch(url);
      const data = await res.json();
      if (data.status === "received" || data.status === "success") {
        if (statusEl) statusEl.innerHTML = `✅ Score saved! +${rawScore} pts → Grammar`;
      } else {
        if (statusEl) statusEl.innerHTML = `❌ Error: ${data.message || "Could not save"}`;
      }
    } catch (err) {
      if (statusEl) statusEl.innerHTML = `❌ Network error — score not saved.`;
      console.error("Grammar score submit failed:", err);
    }
  },

  // ── Inject CSS ───────────────────────────────
  _injectStyles() {
    if (document.getElementById("ge-exam-styles")) return;
    const s = document.createElement("style");
    s.id = "ge-exam-styles";
    s.textContent = `
      /* ── Root ── */
      .ge-exam-root {
        min-height: 100vh;
        width: 100%;
        display: flex;
        flex-direction: column;
        background: radial-gradient(ellipse at 30% 20%, #0d1a2e 0%, #060810 70%);
        font-family: "Barlow", "Segoe UI", sans-serif;
        color: #fff;
      }

      /* ── Header ── */
      .ge-exam-header {
        padding: 18px 32px 12px;
        background: rgba(6,8,16,.95);
        position: sticky;
        top: 0;
        z-index: 10;
      }
      .ge-exam-title {
        font-family: "Orbitron", sans-serif;
        font-size: clamp(.9rem, 2.5vw, 1.4rem);
        font-weight: 900;
        letter-spacing: 3px;
        margin-bottom: 8px;
      }
      .ge-exam-meta {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 10px;
      }
      .ge-exam-badge {
        font-size: .72rem;
        letter-spacing: 2px;
        color: rgba(255,255,255,.45);
        text-transform: uppercase;
      }
      .ge-exam-counter {
        font-family: "Orbitron", sans-serif;
        font-size: .65rem;
        color: rgba(255,255,255,.35);
        letter-spacing: 2px;
      }
      .ge-exam-progress-wrap {
        height: 4px;
        background: rgba(255,255,255,.08);
        border-radius: 2px;
        overflow: hidden;
      }
      .ge-exam-progress-bar {
        height: 100%;
        border-radius: 2px;
        transition: width .4s ease;
        box-shadow: 0 0 10px currentColor;
      }

      /* ── Body ── */
      .ge-exam-body {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 4vh 5vw;
      }

      /* ── Question card ── */
      .ge-exam-qcard {
        width: 100%;
        max-width: 860px;
        display: flex;
        flex-direction: column;
        gap: 3.5vh;
      }
      .ge-exam-qnum {
        font-family: "Orbitron", sans-serif;
        font-size: .7rem;
        letter-spacing: 4px;
        color: rgba(255,255,255,.3);
      }
      .ge-exam-qtext {
        font-size: clamp(1.5rem, 4.5vw, 3rem);
        font-weight: 900;
        line-height: 1.35;
        color: #fff;
        padding: 3.5vh 4vw;
        border-radius: 24px;
        background: rgba(255,255,255,.03);
        border: 1px solid rgba(255,255,255,.08);
      }

      /* ── Options ── */
      .ge-exam-opts {
        display: flex;
        gap: 2vw;
        flex-wrap: wrap;
        justify-content: center;
      }
      .ge-exam-opt {
        flex: 1;
        min-width: 140px;
        max-width: 300px;
        padding: 3vh 2.5vw;
        border-radius: 20px;
        background: rgba(255,255,255,.04);
        border: 2px solid rgba(255,255,255,.1);
        color: #fff;
        cursor: pointer;
        font-size: clamp(1.1rem, 2.8vw, 2rem);
        font-weight: 900;
        font-family: "Barlow", sans-serif;
        transition: background .18s, border-color .18s, transform .12s;
      }
      .ge-exam-opt:hover:not(:disabled) {
        background: rgba(0,212,255,.08);
        border-color: rgba(0,212,255,.4);
        transform: translateY(-3px);
      }
      .ge-opt-correct {
        background: rgba(0,255,136,.15) !important;
        border-color: #00ff88 !important;
        color: #00ff88 !important;
      }
      .ge-opt-wrong {
        background: rgba(255,71,87,.15) !important;
        border-color: #ff4757 !important;
        color: #ff4757 !important;
      }

      /* ── Results ── */
      .ge-exam-result {
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2.5vh;
        padding: 5vh 4vw;
        animation: ge-exam-fadein .5s ease;
      }
      .ge-exam-result-score {
        font-family: "Orbitron", sans-serif;
        font-size: clamp(3.5rem, 12vw, 9rem);
        font-weight: 900;
        line-height: 1;
      }
      .ge-exam-result-pct {
        font-family: "Orbitron", sans-serif;
        font-size: clamp(1.5rem, 4vw, 3rem);
        font-weight: 700;
        opacity: .85;
      }
      .ge-exam-result-pts {
        font-family: "Orbitron", sans-serif;
        font-size: clamp(1.2rem, 3vw, 2.2rem);
        font-weight: 900;
        padding: 10px 30px;
        border-radius: 50px;
        border: 2px solid currentColor;
      }
      .ge-exam-result-label {
        font-size: clamp(1.2rem, 3vw, 2rem);
        color: rgba(255,255,255,.8);
        font-weight: 700;
        letter-spacing: 2px;
      }
      .ge-exam-result-submitting {
        font-size: .9rem;
        color: rgba(255,255,255,.5);
        margin-top: 1vh;
        letter-spacing: 1px;
      }
      .ge-spin { display: inline-block; animation: ge-exam-spin 1s linear infinite; }

      @keyframes ge-exam-fadein { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
      @keyframes ge-exam-spin   { to   { transform: rotate(360deg); } }
    `;
    document.head.appendChild(s);
  }

};

/*
  ════════════════════════════════════════════
  HOW TO USE IN VetoOnline.html
  ════════════════════════════════════════════

  1) أضف السكريبت في الصفحة:
     <script src="grammar-engine-student.js"></script>

  2) في أي مكان تريد تشغيل الامتحان:

     // احصل على إيميل الطالب من بروفايله المحمّل
     const studentEmail = window.currentProfile?.email || null;

     // اختر معرّف الدرس  — مثلاً: "1-1", "3-4", "7-4" ...
     const lessonId = "3-4";

     // أعطِه أي div موجود في الصفحة ليُحقنه فيه
     const container = document.getElementById("sessionActivityList");

     GrammarExam.start(lessonId, container, studentEmail);

  3) الدرجة تُرسَل تلقائياً بعد الانتهاء إلى Apps Script
     → updateGrades → Grammar column (F) in Scard sheet.

  ════════════════════════════════════════════
*/
