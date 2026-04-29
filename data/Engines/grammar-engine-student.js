/* ═══════════════════════════════════════════════════════════════
   grammar-engine-student.js
   VETO ONLINE | Student Grammar Exam Engine
   EYC Academy — Mr. Ezz
   ═══════════════════════════════════════════════════════════════
   الاستخدام:
     GrammarStudentExam.start(level, session, containerEl, onComplete)

   onComplete(result):
     result.score      → درجة خام (عدد الإجابات الصح)
     result.total      → إجمالي الأسئلة (20)
     result.percentage → النسبة المئوية
     result.grade      → الدرجة من 1000 (كل سؤال 50)
     result.level      → المستوى
     result.session    → الجلسة
   ═══════════════════════════════════════════════════════════════ */

// ════════════════════════════════════════════════════════════════
// STUDENT EXAM QUESTIONS — 20 سؤال لكل درس
// ════════════════════════════════════════════════════════════════
const GRAMMAR_STUDENT_EXAMS = {

  // ── LEVEL 1 | SESSION 1 — PRONOUNS ──────────────────────────
  "1-1": {
    title: "Grammar Exam — Pronouns",
    lessonTitle: "PRONOUNS",
    questions: [
      { q: "____ is my best friend.",                             opts: ["Him","He","His"],          ans: "He"   },
      { q: "Can you help ____? I need a hand.",                   opts: ["I","me","my"],             ans: "me"   },
      { q: "The car is old. ____ needs fixing.",                  opts: ["He","It","Its"],           ans: "It"   },
      { q: "Sara and I are tired. ____ want to rest.",            opts: ["They","We","Us"],          ans: "We"   },
      { q: "I gave ____ a present yesterday.",                    opts: ["she","her","hers"],        ans: "her"  },
      { q: "Are ____ the new student?",                           opts: ["you","your","yours"],      ans: "you"  },
      { q: "The boys are late. ____ missed the bus.",             opts: ["Them","They","Their"],     ans: "They" },
      { q: "My mother loves ____. I love her too.",               opts: ["I","me","my"],             ans: "me"   },
      { q: "Please call ____. He is waiting.",                    opts: ["he","him","his"],          ans: "him"  },
      { q: "____ am the class monitor.",                          opts: ["Me","My","I"],             ans: "I"    },
      { q: "The teacher asked ____. We were surprised.",          opts: ["us","we","our"],           ans: "us"   },
      { q: "This is Layla. ____ is very clever.",                 opts: ["He","Her","She"],          ans: "She"  },
      { q: "I met Ali and talked to ____.",                       opts: ["he","him","his"],          ans: "him"  },
      { q: "____ are coming to the party tonight.",               opts: ["Them","Us","They"],        ans: "They" },
      { q: "The bird lost ____ feather.",                         opts: ["it","its","it's"],         ans: "its"  },
      { q: "She invited ____ to her wedding.",                    opts: ["we","us","our"],           ans: "us"   },
      { q: "Look at that cat! ____ is so cute.",                  opts: ["He","It","Its"],           ans: "It"   },
      { q: "My father and ____ go fishing on Fridays.",           opts: ["me","I","my"],             ans: "I"    },
      { q: "Don't blame ____. It wasn't her fault.",              opts: ["she","her","hers"],        ans: "her"  },
      { q: "____ students passed the exam.",                      opts: ["Them","They","Their"],     ans: "Their"}
    ]
  },

  // ── LEVEL 1 | SESSION 2 — POSSESSIVES & VERB TO BE ──────────
  "1-2": {
    title: "Grammar Exam — Possessives & Verb To Be",
    lessonTitle: "POSSESSIVES & VERB TO BE",
    questions: [
      { q: "This bag belongs to Nour. It is ____.",               opts: ["her","hers","she"],        ans: "hers"  },
      { q: "____ am a student at EYC Academy.",                   opts: ["He","She","I"],            ans: "I"     },
      { q: "That is ____ book. Don't take it.",                   opts: ["mine","me","my"],          ans: "my"    },
      { q: "They ____ very happy today.",                         opts: ["is","am","are"],           ans: "are"   },
      { q: "Is this pen ____? No, it's not mine.",                opts: ["your","yours","you"],      ans: "yours" },
      { q: "He ____ not at home right now.",                      opts: ["am","is","are"],           ans: "is"    },
      { q: "The dog wags ____ tail every day.",                   opts: ["it","it's","its"],         ans: "its"   },
      { q: "____ you from Cairo?",                                opts: ["Is","Am","Are"],           ans: "Are"   },
      { q: "We love ____ school very much.",                      opts: ["ours","our","us"],         ans: "our"   },
      { q: "The keys are not ____. I don't own them.",            opts: ["mine","my","me"],          ans: "mine"  },
      { q: "She ____ the best teacher in the school.",            opts: ["am","are","is"],           ans: "is"    },
      { q: "Ahmed lost ____ phone yesterday.",                    opts: ["him","his","he"],          ans: "his"   },
      { q: "It ____ a beautiful day today.",                      opts: ["am","are","is"],           ans: "is"    },
      { q: "The house belongs to them. It is ____.",              opts: ["their","them","theirs"],   ans: "theirs"},
      { q: "____ not my fault at all!",                           opts: ["It is","It's","Its"],      ans: "It's"  },
      { q: "I ____ not tired, I feel great.",                     opts: ["is","am","are"],           ans: "am"    },
      { q: "That is ____ car over there.",                        opts: ["our","ours","us"],         ans: "our"   },
      { q: "Ali and Sara ____ best friends.",                     opts: ["is","am","are"],           ans: "are"   },
      { q: "She left ____ umbrella on the bus.",                  opts: ["hers","her","she"],        ans: "her"   },
      { q: "____ this your first time in Egypt?",                 opts: ["Am","Is","Are"],           ans: "Is"    }
    ]
  },

  // ── LEVEL 1 | SESSION 3 — ARTICLES ──────────────────────────
  "1-3": {
    title: "Grammar Exam — Articles (A / AN / THE)",
    lessonTitle: "INDEFINITE ARTICLES",
    questions: [
      { q: "She is ____ engineer.",                               opts: ["a","an","the"],            ans: "an"    },
      { q: "I saw ____ dog in the street. ____ dog was barking.", opts: ["a / The","the / A","an / The"], ans: "a / The" },
      { q: "____ Nile is the longest river in Africa.",           opts: ["A","An","The"],            ans: "The"   },
      { q: "He is ____ honest man.",                              opts: ["a","an","the"],            ans: "an"    },
      { q: "I'd like ____ orange juice, please.",                 opts: ["a","an","the"],            ans: "an"    },
      { q: "She goes to ____ gym every morning.",                 opts: ["a","an","the"],            ans: "the"   },
      { q: "He works at ____ hospital near here.",                opts: ["a","an","the"],            ans: "a"     },
      { q: "____ moon shines brightly tonight.",                  opts: ["A","An","The"],            ans: "The"   },
      { q: "Can I have ____ cup of tea?",                         opts: ["a","an","the"],            ans: "a"     },
      { q: "She is ____ best player on the team.",                opts: ["a","an","the"],            ans: "the"   },
      { q: "He bought ____ new car last week.",                   opts: ["a","an","the"],            ans: "a"     },
      { q: "____ United States is a large country.",              opts: ["A","An","The"],            ans: "The"   },
      { q: "It took ____ hour to finish the test.",               opts: ["a","an","the"],            ans: "an"    },
      { q: "I live near ____ old mosque.",                        opts: ["a","an","the"],            ans: "an"    },
      { q: "____ earth goes around the sun.",                     opts: ["A","An","The"],            ans: "The"   },
      { q: "He is ____ European student in our class.",           opts: ["a","an","the"],            ans: "a"     },
      { q: "She found ____ answer to the question.",              opts: ["a","an","the"],            ans: "the"   },
      { q: "They watched ____ interesting movie last night.",     opts: ["a","an","the"],            ans: "an"    },
      { q: "I want to be ____ doctor one day.",                   opts: ["a","an","the"],            ans: "a"     },
      { q: "____ sky is clear and blue today.",                   opts: ["A","An","The"],            ans: "The"   }
    ]
  },

  // ── LEVEL 1 | SESSION 4 — PLURAL NOUNS ──────────────────────
  "1-4": {
    title: "Grammar Exam — Plural Nouns",
    lessonTitle: "PLURAL NOUNS",
    questions: [
      { q: "What is the plural of 'woman'?",                      opts: ["womans","womens","women"],       ans: "women"     },
      { q: "What is the plural of 'church'?",                     opts: ["church","churchs","churches"],   ans: "churches"  },
      { q: "What is the plural of 'potato'?",                     opts: ["potatos","potatoes","potato"],   ans: "potatoes"  },
      { q: "Advice is ____ noun.",                                 opts: ["a countable","an uncountable","a plural"], ans: "an uncountable" },
      { q: "What is the plural of 'wolf'?",                       opts: ["wolfs","wolves","wolfes"],       ans: "wolves"    },
      { q: "What is the plural of 'tooth'?",                      opts: ["tooths","teeth","toothes"],      ans: "teeth"     },
      { q: "What is the plural of 'party'?",                      opts: ["partys","parties","partyes"],    ans: "parties"   },
      { q: "The furniture ____ very expensive.",                   opts: ["are","were","is"],               ans: "is"        },
      { q: "What is the plural of 'mouse'?",                      opts: ["mouses","mices","mice"],         ans: "mice"      },
      { q: "What is the plural of 'half'?",                       opts: ["halfs","halves","halfes"],       ans: "halves"    },
      { q: "Music is ____ noun.",                                  opts: ["a countable","an uncountable","a plural"], ans: "an uncountable" },
      { q: "What is the plural of 'foot'?",                       opts: ["foots","feet","feets"],          ans: "feet"      },
      { q: "What is the plural of 'dish'?",                       opts: ["dishs","dishes","dishies"],      ans: "dishes"    },
      { q: "What is the plural of 'goose'?",                      opts: ["gooses","gooses","geese"],       ans: "geese"     },
      { q: "Information ____ very useful here.",                   opts: ["are","were","is"],               ans: "is"        },
      { q: "What is the plural of 'diary'?",                      opts: ["diarys","diaries","diaryies"],   ans: "diaries"   },
      { q: "What is the plural of 'ox'?",                         opts: ["oxes","oxs","oxen"],             ans: "oxen"      },
      { q: "What is the plural of 'fish'?",                       opts: ["fishs","fishes","fish"],         ans: "fish"      },
      { q: "The traffic ____ very bad this morning.",              opts: ["are","were","is"],               ans: "is"        },
      { q: "What is the plural of 'scarf'?",                      opts: ["scarfs","scarves","scarfes"],    ans: "scarves"   }
    ]
  },

  // ── LEVEL 2 | SESSION 1 — TELLING THE TIME ──────────────────
  "2-1": {
    title: "Grammar Exam — Telling the Time",
    lessonTitle: "TELLING THE TIME",
    questions: [
      { q: "How do you say 8:15?",                                opts: ["quarter to eight","quarter past eight","eight and quarter"], ans: "quarter past eight" },
      { q: "How do you say 11:30?",                               opts: ["half to eleven","half past eleven","eleven past half"],    ans: "half past eleven"   },
      { q: "How do you say 4:45?",                                opts: ["quarter past five","quarter to five","four forty-five"],   ans: "quarter to five"    },
      { q: "How do you say 6:00?",                                opts: ["six past","six to","six o'clock"],                         ans: "six o'clock"        },
      { q: "3:20 in classic style is ____.",                      opts: ["twenty to three","twenty past three","three twenty past"], ans: "twenty past three"  },
      { q: "7:50 in classic style is ____.",                      opts: ["ten to eight","ten past seven","fifty to seven"],          ans: "ten to eight"       },
      { q: "12:00 at noon is ____.",                               opts: ["midnight","noon","AM"],                                    ans: "noon"               },
      { q: "9 PM means ____.",                                     opts: ["9 in the morning","9 at night","9 in the afternoon"],      ans: "9 at night"         },
      { q: "How do you say 1:05?",                                opts: ["five to one","one five past","five past one"],             ans: "five past one"      },
      { q: "How do you say 3:55?",                                opts: ["five past three","five to four","fifty-five to three"],    ans: "five to four"       },
      { q: "5:25 in classic style is ____.",                      opts: ["twenty-five past five","twenty-five to five","five and twenty"], ans: "twenty-five past five" },
      { q: "2:35 in classic style is ____.",                      opts: ["thirty-five past two","twenty-five to three","two thirty-five"], ans: "twenty-five to three" },
      { q: "What does AM stand for?",                             opts: ["After Midnight","Afternoon Morning","morning hours (midnight to noon)"], ans: "morning hours (midnight to noon)" },
      { q: "It's 12:00 AM. This means ____.",                     opts: ["noon","midnight","evening"],                               ans: "midnight"           },
      { q: "How do you say 10:15?",                               opts: ["quarter to ten","quarter past ten","ten fifteen to"],      ans: "quarter past ten"   },
      { q: "How do you say 8:30?",                                opts: ["half to eight","eight half","half past eight"],            ans: "half past eight"    },
      { q: "6 AM means ____.",                                     opts: ["6 in the evening","6 in the morning","6 at night"],       ans: "6 in the morning"   },
      { q: "How do you say 12:45?",                               opts: ["quarter to one","quarter past twelve","twelve forty-five past"], ans: "quarter to one" },
      { q: "How do you say 9:10?",                                opts: ["ten to nine","ten past nine","nine and ten"],              ans: "ten past nine"      },
      { q: "It's 3:00 in the afternoon. In numbers it's ____.",   opts: ["3 AM","3 PM","15:60"],                                     ans: "3 PM"               }
    ]
  },

  // ── LEVEL 2 | SESSION 4 — THE DATE ──────────────────────────
  "2-4": {
    title: "Grammar Exam — The Date",
    lessonTitle: "THE DATE",
    questions: [
      { q: "Which month comes after March?",                      opts: ["February","May","April"],           ans: "April"        },
      { q: "How do you say '2nd'?",                               opts: ["second","two","twoth"],             ans: "second"       },
      { q: "My birthday is ____ October.",                        opts: ["on","in","at"],                     ans: "in"           },
      { q: "The exam is ____ 10th June.",                         opts: ["in","at","on"],                     ans: "on"           },
      { q: "The class starts ____ 8 AM.",                         opts: ["in","on","at"],                     ans: "at"           },
      { q: "How do you say '31st'?",                              opts: ["thirty-one","thirty-oneth","thirty-first"], ans: "thirty-first" },
      { q: "What is the 7th month?",                              opts: ["June","July","August"],             ans: "July"         },
      { q: "He was born ____ 2005.",                              opts: ["on","at","in"],                     ans: "in"           },
      { q: "Which month comes before February?",                  opts: ["March","January","December"],       ans: "January"      },
      { q: "How do you say '22nd'?",                              opts: ["twenty-two","twenty-second","twenty-twoth"], ans: "twenty-second" },
      { q: "The meeting is ____ Monday.",                         opts: ["in","at","on"],                     ans: "on"           },
      { q: "What is the 9th month?",                              opts: ["August","October","September"],     ans: "September"    },
      { q: "How do you say '11th'?",                              opts: ["eleventh","eleven","eleventeenth"], ans: "eleventh"     },
      { q: "She arrived ____ summer.",                            opts: ["on","at","in"],                     ans: "in"           },
      { q: "Which month comes after November?",                   opts: ["October","January","December"],     ans: "December"     },
      { q: "How do you say '5th June 2020'?",                    opts: ["the five of June","the fifth of June, twenty twenty","five June twenty twenty"], ans: "the fifth of June, twenty twenty" },
      { q: "What is the 4th month?",                              opts: ["March","May","April"],              ans: "April"        },
      { q: "How do you say '12th'?",                              opts: ["twelveth","twelfth","twelfeth"],    ans: "twelfth"      },
      { q: "The concert was ____ the evening of 3rd March.",      opts: ["in","on","at"],                     ans: "on"           },
      { q: "Which month has only 28 or 29 days?",                 opts: ["January","April","February"],       ans: "February"     }
    ]
  },

  // ── LEVEL 3 | SESSION 1 — PRESENT CONTINUOUS ────────────────
  "3-1": {
    title: "Grammar Exam — Present Continuous",
    lessonTitle: "PRESENT CONTINUOUS",
    questions: [
      { q: "He ____ (cook) dinner right now.",                    opts: ["cooks","is cooking","cooking"],         ans: "is cooking"      },
      { q: "____ she ____ (study) at the moment?",               opts: ["Does / study","Is / studying","Are / studying"], ans: "Is / studying" },
      { q: "They ____ (not watch) TV currently.",                 opts: ["aren't watching","don't watching","isn't watching"], ans: "aren't watching" },
      { q: "Listen! Someone ____ (knock) at the door.",           opts: ["knocks","knock","is knocking"],         ans: "is knocking"     },
      { q: "What ____ you ____ (do) tonight?",                   opts: ["do / do","are / doing","is / doing"],   ans: "are / doing"     },
      { q: "The baby ____ (cry) in the next room.",               opts: ["cry","cries","is crying"],              ans: "is crying"       },
      { q: "We ____ (sit) in the garden now.",                    opts: ["sit","are sitting","were sitting"],     ans: "are sitting"     },
      { q: "She ____ (not listen) to me right now.",              opts: ["isn't listening","doesn't listen","aren't listening"], ans: "isn't listening" },
      { q: "What is the correct -ing form of 'swim'?",           opts: ["swiming","swimming","swimeing"],        ans: "swimming"        },
      { q: "What is the correct -ing form of 'dance'?",          opts: ["danceing","dancing","danccing"],        ans: "dancing"         },
      { q: "He ____ (write) a letter to his friend.",             opts: ["writes","is writing","write"],          ans: "is writing"      },
      { q: "The dog ____ (run) in the park at the moment.",       opts: ["run","runs","is running"],              ans: "is running"      },
      { q: "____ they ____ (play) football right now?",           opts: ["Do / play","Are / playing","Is / playing"], ans: "Are / playing" },
      { q: "I ____ (make) tea. Would you like some?",             opts: ["make","made","am making"],              ans: "am making"       },
      { q: "Which word is a signal for Present Continuous?",      opts: ["always","yesterday","at the moment"],   ans: "at the moment"   },
      { q: "The cat ____ (lie) on the sofa now.",                 opts: ["lie","is lying","are lying"],           ans: "is lying"        },
      { q: "What is the correct -ing form of 'sit'?",            opts: ["siting","sitting","sitteing"],          ans: "sitting"         },
      { q: "____ he ____ (come) to the meeting today?",           opts: ["Does / come","Is / coming","Are / coming"], ans: "Is / coming" },
      { q: "I can't talk now. I ____ (drive).",                   opts: ["drive","am driving","was driving"],     ans: "am driving"      },
      { q: "The children ____ (not sleep) — they're too excited.",opts: ["don't sleep","aren't sleeping","isn't sleeping"], ans: "aren't sleeping" }
    ]
  },

  // ── LEVEL 3 | SESSION 4 — PRESENT SIMPLE ────────────────────
  "3-4": {
    title: "Grammar Exam — Present Simple",
    lessonTitle: "PRESENT SIMPLE",
    questions: [
      { q: "He ____ (play) tennis every Saturday.",               opts: ["play","plays","is playing"],           ans: "plays"           },
      { q: "They ____ (not drink) coffee.",                       opts: ["doesn't drink","don't drink","aren't drinking"], ans: "don't drink" },
      { q: "____ she ____ (work) in a hospital?",                opts: ["Do / work","Does / works","Does / work"], ans: "Does / work"   },
      { q: "The sun ____ in the east.",                           opts: ["rise","rises","is rising"],             ans: "rises"           },
      { q: "I usually ____ (wake) up at 6 AM.",                  opts: ["wake","wakes","waking"],                ans: "wake"            },
      { q: "She often ____ (miss) the bus.",                      opts: ["miss","misses","is missing"],           ans: "misses"          },
      { q: "____ they ____ (come) from Cairo?",                   opts: ["Does / come","Do / comes","Do / come"], ans: "Do / come"       },
      { q: "He ____ (have) a big family.",                        opts: ["have","has","is having"],               ans: "has"             },
      { q: "What is the correct form of 'study' for he/she?",    opts: ["studys","studies","studyes"],           ans: "studies"         },
      { q: "Which word is a signal for Present Simple?",          opts: ["now","at the moment","always"],         ans: "always"          },
      { q: "Water ____ (freeze) at 0 degrees.",                   opts: ["freeze","freezes","is freezing"],       ans: "freezes"         },
      { q: "She never ____ (eat) fast food.",                     opts: ["eat","eats","is eating"],               ans: "eats"            },
      { q: "What is the correct form of 'fix' for he/she?",      opts: ["fixs","fixes","fixies"],                ans: "fixes"           },
      { q: "We rarely ____ (go) to the cinema.",                  opts: ["go","goes","going"],                    ans: "go"              },
      { q: "____ he ____ (like) spicy food?",                     opts: ["Do / like","Does / likes","Does / like"], ans: "Does / like"   },
      { q: "What is the correct form of 'carry' for he/she?",    opts: ["carrys","carries","carryies"],          ans: "carries"         },
      { q: "The train ____ (leave) at 7 every morning.",          opts: ["leave","leaves","is leaving"],          ans: "leaves"          },
      { q: "They sometimes ____ (play) chess after dinner.",      opts: ["play","plays","playing"],               ans: "play"            },
      { q: "She ____ (teach) English at our school.",             opts: ["teach","teaches","is teaching"],        ans: "teaches"         },
      { q: "He ____ (not know) the answer.",                      opts: ["doesn't know","don't know","isn't knowing"], ans: "doesn't know" }
    ]
  },

  // ── LEVEL 4 | SESSION 1 — PAST SIMPLE ───────────────────────
  "4-1": {
    title: "Grammar Exam — Past Simple",
    lessonTitle: "PAST SIMPLE",
    questions: [
      { q: "They ____ (travel) to London last summer.",           opts: ["travel","traveled","were traveling"],   ans: "traveled"        },
      { q: "She ____ (not finish) her homework.",                 opts: ["didn't finish","doesn't finish","didn't finished"], ans: "didn't finish" },
      { q: "____ he ____ (see) the accident?",                    opts: ["Did / saw","Did / see","Does / see"],   ans: "Did / see"       },
      { q: "I ____ (take) a taxi to the station.",                opts: ["take","took","taked"],                  ans: "took"            },
      { q: "We ____ (have) a great time at the party.",           opts: ["have","had","haved"],                   ans: "had"             },
      { q: "She ____ (not come) to class yesterday.",             opts: ["didn't come","doesn't come","didn't came"], ans: "didn't come"  },
      { q: "____ they ____ (win) the match?",                     opts: ["Did / won","Does / win","Did / win"],   ans: "Did / win"       },
      { q: "He ____ (give) me a book as a gift.",                 opts: ["give","gave","gived"],                  ans: "gave"            },
      { q: "Which word is a signal for Past Simple?",             opts: ["tomorrow","now","yesterday"],           ans: "yesterday"       },
      { q: "What is the past form of 'think'?",                   opts: ["thinked","thought","thunk"],            ans: "thought"         },
      { q: "I ____ (speak) to the manager last week.",            opts: ["speak","spoke","speaked"],              ans: "spoke"           },
      { q: "She ____ (buy) a new dress for the occasion.",        opts: ["buyed","bought","buied"],               ans: "bought"          },
      { q: "We ____ (not eat) anything this morning.",            opts: ["didn't eat","don't eat","didn't ate"],  ans: "didn't eat"      },
      { q: "____ you ____ (feel) sick last night?",               opts: ["Do / feel","Did / felt","Did / feel"],  ans: "Did / feel"      },
      { q: "He ____ (run) five kilometers yesterday.",            opts: ["run","runned","ran"],                   ans: "ran"             },
      { q: "What is the past form of 'know'?",                    opts: ["knowed","knew","known"],                ans: "knew"            },
      { q: "They ____ (not understand) the question.",            opts: ["didn't understand","don't understand","didn't understood"], ans: "didn't understand" },
      { q: "She ____ (write) a letter to her friend.",            opts: ["write","wrote","writed"],               ans: "wrote"           },
      { q: "____ he ____ (leave) before the party ended?",        opts: ["Did / left","Did / leave","Does / leave"], ans: "Did / leave"  },
      { q: "I ____ (meet) Ali two days ago.",                     opts: ["meet","met","meeted"],                  ans: "met"             }
    ]
  },

  // ── LEVEL 4 | SESSION 4 — PAST CONTINUOUS ───────────────────
  "4-4": {
    title: "Grammar Exam — Past Continuous",
    lessonTitle: "PAST CONTINUOUS",
    questions: [
      { q: "I ____ (read) when the phone rang.",                  opts: ["read","was reading","were reading"],    ans: "was reading"     },
      { q: "They ____ (not study) at midnight.",                  opts: ["weren't studying","wasn't studying","didn't study"], ans: "weren't studying" },
      { q: "____ she ____ (sleep) at 10 PM?",                    opts: ["Was / sleeping","Were / sleeping","Did / sleep"], ans: "Was / sleeping" },
      { q: "He ____ (drive) while she ____ (text).",              opts: ["drove / texted","was driving / was texting","drove / was texting"], ans: "was driving / was texting" },
      { q: "Which word signals Past Continuous (parallel actions)?",opts: ["when","while","before"],              ans: "while"           },
      { q: "The kids ____ (play) all afternoon yesterday.",       opts: ["played","were playing","was playing"],  ans: "were playing"    },
      { q: "She ____ (not pay) attention during class.",          opts: ["didn't pay","wasn't paying","weren't paying"], ans: "wasn't paying" },
      { q: "____ you ____ (work) at 9 PM last night?",            opts: ["Did / work","Were / working","Was / working"], ans: "Were / working" },
      { q: "What were you doing? I ____ (clean) the house.",      opts: ["clean","cleaned","was cleaning"],       ans: "was cleaning"    },
      { q: "The baby ____ (cry) when the doctor arrived.",        opts: ["cried","was crying","were crying"],     ans: "was crying"      },
      { q: "We ____ (sit) in the café for hours yesterday.",      opts: ["sat","were sitting","was sitting"],     ans: "were sitting"    },
      { q: "He fell while he ____ (run) in the garden.",          opts: ["ran","was running","were running"],     ans: "was running"     },
      { q: "____ they ____ (watch) the match at 8 PM?",           opts: ["Did / watch","Were / watching","Was / watching"], ans: "Were / watching" },
      { q: "I ____ (not feel) well all day yesterday.",           opts: ["didn't feel","wasn't feeling","weren't feeling"], ans: "wasn't feeling" },
      { q: "It ____ (rain) when we left the house.",              opts: ["rained","was raining","were raining"],  ans: "was raining"     },
      { q: "She ____ (study) when I knocked on her door.",        opts: ["studied","was studying","were studying"], ans: "was studying"   },
      { q: "Which is a signal word for Past Continuous?",         opts: ["yesterday (alone)","at that moment","last week (alone)"], ans: "at that moment" },
      { q: "They ____ (have) lunch when we called.",              opts: ["had","were having","was having"],       ans: "were having"     },
      { q: "He ____ (not sleep) — he was reading.",               opts: ["didn't sleep","wasn't sleeping","weren't sleeping"], ans: "wasn't sleeping" },
      { q: "What is the Past Continuous of 'sing' for 'she'?",   opts: ["she singed","she was singing","she were singing"], ans: "she was singing" }
    ]
  },

  // ── LEVEL 5 | SESSION 1 — FUTURE SIMPLE ─────────────────────
  "5-1": {
    title: "Grammar Exam — Future Simple",
    lessonTitle: "FUTURE SIMPLE",
    questions: [
      { q: "I ____ (help) you tomorrow, I promise.",              opts: ["am going help","will help","helps"],    ans: "will help"        },
      { q: "She ____ (travel) to Paris next summer.",             opts: ["is going to travel","will travels","go travel"], ans: "is going to travel" },
      { q: "____ he ____ (join) us for dinner?",                  opts: ["Is / going to join","Will / join","Will / joins"], ans: "Will / join" },
      { q: "Look at those clouds! It ____ (rain) soon.",          opts: ["will rain","is going to rain","rains"],  ans: "is going to rain"  },
      { q: "We ____ (not go) to the beach this weekend.",         opts: ["don't go","won't go","aren't go"],       ans: "won't go"          },
      { q: "She has already decided — she ____ (study) abroad.",  opts: ["will study","is going to study","studies"], ans: "is going to study" },
      { q: "I think the weather ____ (be) nice tomorrow.",        opts: ["is","will be","is going to be"],         ans: "will be"           },
      { q: "Which word signals WILL (unplanned decision)?",       opts: ["tomorrow","in 2030","Oh, I'll get it!"], ans: "Oh, I'll get it!"  },
      { q: "____ they ____ (come) to the party?",                 opts: ["Are / going come","Will / come","Do / come"], ans: "Will / come"  },
      { q: "He ____ (not be) late. He promised.",                 opts: ["isn't","won't be","doesn't be"],         ans: "won't be"          },
      { q: "We ____ (buy) tickets tonight.",                      opts: ["are going to buy","buy","bought"],        ans: "are going to buy"  },
      { q: "In ten years, robots ____ (do) many jobs.",           opts: ["do","are doing","will do"],               ans: "will do"           },
      { q: "She has a plan — she ____ (open) a café next year.",  opts: ["will open","opens","is going to open"],  ans: "is going to open"  },
      { q: "Phone rings — 'I ____ (answer) it!'",                 opts: ["am going to answer","will answer","answer"], ans: "will answer"   },
      { q: "____ you ____ (be) at home this evening?",            opts: ["Will / be","Are / going to be","Do / be"], ans: "Will / be"      },
      { q: "They ____ (not win) — the other team is stronger.",   opts: ["aren't going to win","won't wins","don't win"], ans: "aren't going to win" },
      { q: "Which is correct for a PLAN already decided?",        opts: ["will","going to","is to"],               ans: "going to"          },
      { q: "She ____ (graduate) next year.",                      opts: ["graduate","will graduate","is graduating"], ans: "will graduate"  },
      { q: "We ____ (meet) at the station at 7 PM.",              opts: ["met","are going to meet","meet"],         ans: "are going to meet" },
      { q: "He ____ (not come) unless you invite him.",           opts: ["doesn't come","won't come","isn't coming"], ans: "won't come"     }
    ]
  },

  // ── LEVEL 5 | SESSION 4 — FUTURE CONTINUOUS ─────────────────
  "5-4": {
    title: "Grammar Exam — Future Continuous",
    lessonTitle: "FUTURE CONTINUOUS",
    questions: [
      { q: "At 10 AM tomorrow, I ____ (sit) in an exam.",         opts: ["will sit","will be sitting","am sitting"],    ans: "will be sitting"    },
      { q: "She ____ (not sleep) at midnight — she's a doctor.",  opts: ["won't be sleeping","won't sleep","isn't sleeping"], ans: "won't be sleeping" },
      { q: "____ they ____ (travel) this time next week?",        opts: ["Will / travel","Will / be travelling","Are / travelling"], ans: "Will / be travelling" },
      { q: "When you arrive, I ____ (cook) dinner.",              opts: ["will cook","cook","will be cooking"],         ans: "will be cooking"    },
      { q: "He ____ (study) all night long.",                     opts: ["studies","will study","will be studying"],    ans: "will be studying"   },
      { q: "Which phrase signals Future Continuous?",             opts: ["yesterday","last night","this time tomorrow"], ans: "this time tomorrow" },
      { q: "____ she ____ (wait) for us at the airport?",         opts: ["Will / wait","Will / be waiting","Is / waiting"], ans: "Will / be waiting" },
      { q: "At 6 PM, we ____ (have) our English lesson.",         opts: ["have","will have","will be having"],          ans: "will be having"     },
      { q: "I ____ (not use) the car at noon — you can take it.", opts: ["won't use","won't be using","don't use"],     ans: "won't be using"     },
      { q: "This time next year, she ____ (live) in Canada.",     opts: ["will live","lives","will be living"],         ans: "will be living"     },
      { q: "____ you ____ (work) on Friday afternoon?",           opts: ["Will / work","Will / be working","Do / work"], ans: "Will / be working"  },
      { q: "He ____ (practice) football all day tomorrow.",       opts: ["practices","will practice","will be practicing"], ans: "will be practicing" },
      { q: "We ____ (not watch) TV at 9. We'll be asleep.",       opts: ["won't watch","won't be watching","don't watch"], ans: "won't be watching"  },
      { q: "____ they ____ (play) when we get there?",            opts: ["Will / play","Will / be playing","Are / playing"], ans: "Will / be playing"  },
      { q: "At 8 AM, the teacher ____ (give) a lecture.",         opts: ["gives","will give","will be giving"],         ans: "will be giving"     },
      { q: "She ____ (work) in London in two years.",             opts: ["will work","will be working","works"],         ans: "will be working"    },
      { q: "I can't call at 3 — I ____ (drive) home then.",       opts: ["will drive","will be driving","drove"],       ans: "will be driving"    },
      { q: "What is the Future Continuous of 'run' for 'they'?",  opts: ["they will run","they will be running","they are running"], ans: "they will be running" },
      { q: "____ he ____ (use) the office tomorrow morning?",     opts: ["Will / use","Will / be using","Does / use"],  ans: "Will / be using"    },
      { q: "Next month at this time, we ____ (sit) in our new house.", opts: ["will sit","will be sitting","sit"],      ans: "will be sitting"    }
    ]
  },

  // ── LEVEL 6 | SESSION 1 — PRESENT PERFECT SIMPLE ────────────
  "6-1": {
    title: "Grammar Exam — Present Perfect Simple",
    lessonTitle: "PRESENT PERFECT SIMPLE",
    questions: [
      { q: "I ____ (visit) Japan three times.",                   opts: ["visited","have visited","has visited"],    ans: "have visited"    },
      { q: "She ____ (not finish) her project yet.",              opts: ["didn't finish","hasn't finished","haven't finished"], ans: "hasn't finished" },
      { q: "____ you ever ____ (try) Thai food?",                opts: ["Did / try","Have / tried","Has / tried"],  ans: "Have / tried"    },
      { q: "He ____ (work) here since 2019.",                     opts: ["worked","has worked","have worked"],       ans: "has worked"      },
      { q: "They ____ (just arrive) at the airport.",             opts: ["just arrived","have just arrived","has just arrived"], ans: "have just arrived" },
      { q: "We ____ (not see) that film yet.",                    opts: ["didn't see","haven't seen","hasn't seen"],  ans: "haven't seen"    },
      { q: "____ she ____ (finish) the report already?",          opts: ["Did / finish","Has / finished","Have / finished"], ans: "Has / finished" },
      { q: "I ____ (live) in Cairo for five years.",              opts: ["lived","have lived","has lived"],           ans: "have lived"      },
      { q: "Which word signals Present Perfect?",                 opts: ["yesterday","in 2005","already"],           ans: "already"         },
      { q: "He ____ (never eat) sushi in his life.",              opts: ["never ate","has never eaten","have never eaten"], ans: "has never eaten" },
      { q: "She ____ (read) that book twice.",                    opts: ["read","has read","have read"],             ans: "has read"        },
      { q: "____ they ____ (pay) the bill yet?",                  opts: ["Did / pay","Have / paid","Has / paid"],    ans: "Have / paid"     },
      { q: "I ____ (not hear) from him since last week.",         opts: ["didn't hear","haven't heard","hasn't heard"], ans: "haven't heard" },
      { q: "What is the past participle of 'write'?",             opts: ["wrote","writing","written"],               ans: "written"         },
      { q: "He ____ (just buy) a new car.",                       opts: ["just buyed","has just bought","have just bought"], ans: "has just bought" },
      { q: "We ____ (know) each other for ten years.",            opts: ["knew","have known","has known"],           ans: "have known"      },
      { q: "What is the past participle of 'go'?",                opts: ["went","going","gone"],                     ans: "gone"            },
      { q: "She ____ (win) many awards in her career.",           opts: ["won","has won","have won"],                ans: "has won"         },
      { q: "____ he ____ (speak) to the manager yet?",            opts: ["Did / speak","Has / spoken","Have / spoken"], ans: "Has / spoken" },
      { q: "I ____ (already eat) — I'm not hungry.",              opts: ["already ate","have already eaten","has already eaten"], ans: "have already eaten" }
    ]
  },

  // ── LEVEL 6 | SESSION 4 — PRESENT PERFECT CONTINUOUS ────────
  "6-4": {
    title: "Grammar Exam — Present Perfect Continuous",
    lessonTitle: "PRESENT PERFECT CONTINUOUS",
    questions: [
      { q: "He ____ (study) for three hours without a break.",    opts: ["studied","has been studying","have been studying"], ans: "has been studying" },
      { q: "We ____ (wait) here since 8 AM.",                     opts: ["waited","have been waiting","has been waiting"], ans: "have been waiting" },
      { q: "____ she ____ (work) all day?",                       opts: ["Has / been working","Have / been working","Did / work"], ans: "Has / been working" },
      { q: "They ____ (not sleep) well recently.",                opts: ["haven't been sleeping","hasn't been sleeping","didn't sleep"], ans: "haven't been sleeping" },
      { q: "How long ____ you ____ (learn) English?",             opts: ["did / learn","have / been learning","has / been learning"], ans: "have / been learning" },
      { q: "It ____ (rain) since this morning.",                  opts: ["has been raining","have been raining","rained"],   ans: "has been raining"  },
      { q: "She ____ (teach) at this school since 2016.",         opts: ["taught","has been teaching","have been teaching"], ans: "has been teaching" },
      { q: "Which signal word is typical for Present Perfect Continuous?", opts: ["last year","in 2010","for 3 hours"], ans: "for 3 hours"       },
      { q: "I ____ (run) — that's why I'm tired.",                opts: ["ran","have been running","has been running"], ans: "have been running"  },
      { q: "____ he ____ (exercise) lately?",                     opts: ["Did / exercise","Has / been exercising","Have / been exercising"], ans: "Has / been exercising" },
      { q: "We ____ (build) this house for six months.",          opts: ["built","have been building","has been building"], ans: "have been building" },
      { q: "She looks exhausted. She ____ (work) all night.",     opts: ["worked","has been working","have been working"], ans: "has been working"  },
      { q: "I ____ (not feel) well all week.",                    opts: ["haven't been feeling","hasn't been feeling","didn't feel"], ans: "haven't been feeling" },
      { q: "He ____ (live) in Paris since January.",              opts: ["lived","has been living","have been living"],   ans: "has been living"   },
      { q: "They ____ (argue) since this morning.",               opts: ["argued","have been arguing","has been arguing"], ans: "have been arguing" },
      { q: "What is the Present Perfect Continuous of 'write' for 'she'?", opts: ["she wrote","she has been writing","she have been writing"], ans: "she has been writing" },
      { q: "I'm so hungry! I ____ (not eat) all day.",            opts: ["haven't been eating","hasn't been eating","didn't eat"], ans: "haven't been eating" },
      { q: "____ they ____ (wait) long?",                         opts: ["Did / wait","Have / been waiting","Has / been waiting"], ans: "Have / been waiting" },
      { q: "He's tired because he ____ (travel) all night.",      opts: ["traveled","has been travelling","have been travelling"], ans: "has been travelling" },
      { q: "She ____ (study) English since she was ten.",         opts: ["studied","has been studying","have been studying"], ans: "has been studying" }
    ]
  },

  // ── LEVEL 7 | SESSION 1 — PAST PERFECT SIMPLE ───────────────
  "7-1": {
    title: "Grammar Exam — Past Perfect Simple",
    lessonTitle: "PAST PERFECT SIMPLE",
    questions: [
      { q: "By the time I arrived, they ____ (leave).",           opts: ["left","had left","have left"],           ans: "had left"          },
      { q: "She ____ (not eat) anything before the meeting.",     opts: ["hadn't eaten","didn't eat","hasn't eaten"], ans: "hadn't eaten"   },
      { q: "____ he ____ (finish) his work before she called?",   opts: ["Did / finish","Had / finished","Have / finished"], ans: "Had / finished" },
      { q: "I was nervous because I ____ (never speak) in public before.", opts: ["never spoke","had never spoken","have never spoken"], ans: "had never spoken" },
      { q: "He ____ (already eat) when we arrived.",              opts: ["already ate","had already eaten","have already eaten"], ans: "had already eaten" },
      { q: "When I got home, my sister ____ (cook) dinner.",      opts: ["cooked","had cooked","has cooked"],        ans: "had cooked"        },
      { q: "They were happy because they ____ (pass) the exam.",  opts: ["passed","had passed","have passed"],       ans: "had passed"        },
      { q: "Which word signals Past Perfect?",                    opts: ["tomorrow","since","by the time"],          ans: "by the time"       },
      { q: "She ____ (not sleep) well, so she was tired.",        opts: ["hadn't slept","didn't sleep","hasn't slept"], ans: "hadn't slept"  },
      { q: "Before he moved to Cairo, he ____ (live) in Alex.",   opts: ["lived","had lived","has lived"],           ans: "had lived"         },
      { q: "What is the Past Perfect of 'see' for 'I'?",         opts: ["I saw","I had seen","I have seen"],         ans: "I had seen"        },
      { q: "____ they ____ (meet) before the party?",             opts: ["Had / met","Did / meet","Have / met"],     ans: "Had / met"         },
      { q: "After she ____ (finish), she went home.",             opts: ["finished","had finished","has finished"],  ans: "had finished"      },
      { q: "He ____ (not hear) the news before we told him.",     opts: ["hadn't heard","didn't hear","hasn't heard"], ans: "hadn't heard"   },
      { q: "By 2020, they ____ (build) a new school.",            opts: ["built","had built","have built"],          ans: "had built"         },
      { q: "I realized I ____ (forget) my keys at home.",         opts: ["forgot","had forgotten","have forgotten"],  ans: "had forgotten"    },
      { q: "She was tired because she ____ (run) five km.",       opts: ["ran","had run","has run"],                  ans: "had run"           },
      { q: "____ he ____ (read) the book before the class?",      opts: ["Did / read","Had / read","Has / read"],    ans: "Had / read"        },
      { q: "They ____ (not visit) Egypt before last year.",       opts: ["hadn't visited","didn't visit","haven't visited"], ans: "hadn't visited" },
      { q: "What is the Past Perfect of 'take' for 'she'?",      opts: ["she took","she had taken","she has taken"], ans: "she had taken"    }
    ]
  },

  // ── LEVEL 7 | SESSION 4 — IF CONDITIONS ─────────────────────
  "7-4": {
    title: "Grammar Exam — If Conditions",
    lessonTitle: "IF CONDITIONS",
    questions: [
      { q: "If you heat water to 100°C, it ____. (Zero)",         opts: ["boil","boils","will boil"],               ans: "boils"             },
      { q: "If it ____, we will cancel the match. (First)",       opts: ["rained","rains","will rain"],             ans: "rains"             },
      { q: "If I ____ you, I would take the job. (Second)",       opts: ["am","was","were"],                        ans: "were"              },
      { q: "If she ____ harder, she would have passed. (Third)",  opts: ["studied","had studied","has studied"],    ans: "had studied"       },
      { q: "If you don't study, you ____ fail. (First)",          opts: ["would","will","had"],                     ans: "will"              },
      { q: "If I ____ a car, I would drive to work. (Second)",    opts: ["have","will have","had"],                 ans: "had"               },
      { q: "If he ____ early, he would have caught the bus. (Third)", opts: ["woke","had woken","has woken"],       ans: "had woken"         },
      { q: "If people don't sleep, they ____. (Zero)",            opts: ["get tired","will get tired","got tired"], ans: "get tired"         },
      { q: "If she ____ me, I will help her. (First)",            opts: ["asked","asks","will ask"],                ans: "asks"              },
      { q: "Which type uses: If + Past Simple + Would?",          opts: ["Zero","First","Second"],                  ans: "Second"            },
      { q: "If they had invited me, I ____ have gone. (Third)",   opts: ["would","will","had"],                     ans: "would"             },
      { q: "If he ____ the map, he wouldn't be lost. (Second)",   opts: ["has","have","had"],                       ans: "had"               },
      { q: "If you touch fire, you ____ burned. (Zero)",          opts: ["will get","got","get"],                   ans: "get"               },
      { q: "Which type uses: If + Past Perfect + Would Have?",    opts: ["Zero","Second","Third"],                  ans: "Third"             },
      { q: "If I study hard, I ____ pass the exam. (First)",      opts: ["would","will","had"],                     ans: "will"              },
      { q: "If I ____ rich, I would buy a big house. (Second)",   opts: ["am","were","was"],                        ans: "were"              },
      { q: "If she ____ her keys, she wouldn't have been late. (Third)", opts: ["hadn't lost","didn't lose","hasn't lost"], ans: "hadn't lost" },
      { q: "If you mix red and blue, you ____ purple. (Zero)",    opts: ["will get","got","get"],                   ans: "get"              },
      { q: "If he ____ harder, he will win. (First)",             opts: ["tried","tries","will try"],               ans: "tries"            },
      { q: "Which type describes an IMPOSSIBLE past situation?",  opts: ["Zero","First","Third"],                   ans: "Third"            }
    ]
  },

  // ── LEVEL 8 | SESSION 1 — THE PASSIVE VOICE ─────────────────
  "8-1": {
    title: "Grammar Exam — The Passive Voice",
    lessonTitle: "THE PASSIVE VOICE",
    questions: [
      { q: "The meal ____ (cook) by the chef every day.",         opts: ["is cooked","cooked","has cooked"],        ans: "is cooked"        },
      { q: "The letter ____ (write) by Ahmed last week.",         opts: ["is written","was written","wrote"],       ans: "was written"      },
      { q: "A new bridge ____ (build) next year.",                opts: ["is built","will be built","was built"],   ans: "will be built"    },
      { q: "The room ____ (clean) already.",                      opts: ["was cleaned","is cleaned","has been cleaned"], ans: "has been cleaned" },
      { q: "The walls ____ (paint) right now.",                   opts: ["are painted","are being painted","were painted"], ans: "are being painted" },
      { q: "Arabic ____ (speak) in many countries.",              opts: ["is spoken","spoke","has spoken"],         ans: "is spoken"        },
      { q: "The report ____ (submit) before the deadline.",       opts: ["was submitted","submitted","has submitted"], ans: "was submitted"  },
      { q: "The problem ____ (solve) by the team soon.",          opts: ["is solved","will be solved","has been solved"], ans: "will be solved" },
      { q: "The cake ____ (eat) by the time she arrived.",        opts: ["was eaten","had been eaten","has been eaten"], ans: "had been eaten" },
      { q: "What is the passive of 'They make cars here'?",       opts: ["Cars are made here","Cars made here","Cars were made here"], ans: "Cars are made here" },
      { q: "This novel ____ (write) in 2001.",                    opts: ["is written","wrote","was written"],       ans: "was written"      },
      { q: "The match ____ (cancel) due to bad weather.",         opts: ["was cancelled","is cancelled","has cancelled"], ans: "was cancelled" },
      { q: "The experiment ____ (conduct) by scientists last year.", opts: ["conducted","was conducted","is conducted"], ans: "was conducted" },
      { q: "The forms ____ (must / sign) before submission.",     opts: ["must signed","must be signed","are must signed"], ans: "must be signed" },
      { q: "Cars ____ (produce) in this factory since 1990.",     opts: ["are produced","were produced","have been produced"], ans: "have been produced" },
      { q: "The thief ____ (arrest) by the police last night.",   opts: ["is arrested","arrested","was arrested"],  ans: "was arrested"    },
      { q: "English ____ (teach) at our school every day.",       opts: ["taught","is taught","has taught"],        ans: "is taught"       },
      { q: "The window ____ (break) by the ball.",                opts: ["is broken","was broken","broke"],         ans: "was broken"      },
      { q: "A new hospital ____ (open) in our city next month.",  opts: ["is opened","was opened","will be opened"], ans: "will be opened"  },
      { q: "The homework ____ (not do) by all students.",         opts: ["wasn't done","isn't done","didn't done"], ans: "wasn't done"     }
    ]
  }

};

// ════════════════════════════════════════════════════════════════
// STUDENT EXAM ENGINE
// ════════════════════════════════════════════════════════════════
const GrammarStudentExam = {

  _level:      null,
  _session:    null,
  _container:  null,
  _onComplete: null,
  _questions:  [],
  _current:    0,
  _score:      0,
  _answers:    [],

  // ─── PUBLIC: start(level, session, container, onComplete) ────
  start(level, session, container, onComplete) {
    const key  = `${level}-${session}`;
    const exam = GRAMMAR_STUDENT_EXAMS[key];

    if (!exam) {
      container.innerHTML = `
        <div class="gse-error">
          <div class="gse-error-icon">📚</div>
          <div class="gse-error-msg">Grammar exam not available for Level ${level} Session ${session} yet.</div>
        </div>`;
      return;
    }

    this._level      = level;
    this._session    = session;
    this._container  = container;
    this._onComplete = onComplete || null;
    this._questions  = this._shuffle([...exam.questions]);
    this._current    = 0;
    this._score      = 0;
    this._answers    = [];
    this._examTitle  = exam.title;
    this._lessonTitle= exam.lessonTitle;

    this._injectStyles();
    this._render();
  },

  // ─── Shuffle (Fisher-Yates) ──────────────────────────────────
  _shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  },

  // ─── Render shell ────────────────────────────────────────────
  _render() {
    this._container.innerHTML = `
      <div class="gse-root" id="gseRoot">
        <div class="gse-header">
          <div class="gse-header-top">
            <div class="gse-badge">GRAMMAR EXAM</div>
            <div class="gse-lesson-name">${this._lessonTitle}</div>
          </div>
          <div class="gse-meta">Level ${this._level} · Session ${this._session}</div>
          <div class="gse-progress-wrap">
            <div class="gse-progress-fill" id="gseProgress"></div>
          </div>
          <div class="gse-counter" id="gseCounter">Question 1 of ${this._questions.length}</div>
        </div>
        <div class="gse-body" id="gseBody"></div>
      </div>`;
    this._renderQuestion();
  },

  // ─── Render question ─────────────────────────────────────────
  _renderQuestion() {
    const q     = this._questions[this._current];
    const body  = document.getElementById("gseBody");
    const prog  = document.getElementById("gseProgress");
    const cnt   = document.getElementById("gseCounter");
    const total = this._questions.length;
    const idx   = this._current;

    if (prog) prog.style.width = ((idx / total) * 100) + "%";
    if (cnt)  cnt.textContent  = `Question ${idx + 1} of ${total}`;

    body.style.opacity   = "0";
    body.style.transform = "translateY(14px)";

    setTimeout(() => {
      body.innerHTML = `
        <div class="gse-q-num">Q${idx + 1}</div>
        <div class="gse-q-text">${q.q}</div>
        <div class="gse-opts" id="gseOpts">
          ${q.opts.map(opt => `
            <button class="gse-opt" onclick="GrammarStudentExam._pick(${JSON.stringify(opt)}, ${JSON.stringify(q.ans)}, this)">
              ${opt}
            </button>`).join("")}
        </div>`;

      requestAnimationFrame(() => {
        body.style.transition = "opacity .3s ease, transform .3s ease";
        body.style.opacity    = "1";
        body.style.transform  = "translateY(0)";
      });
    }, 180);
  },

  // ─── Handle answer pick ──────────────────────────────────────
  _pick(selected, correct, btn) {
    document.querySelectorAll(".gse-opt").forEach(b => b.disabled = true);

    if (selected === correct) {
      btn.classList.add("correct");
      this._score++;
      this._answers.push({ correct: true });
      setTimeout(() => this._next(), 700);
    } else {
      btn.classList.add("wrong");
      btn.style.animation = "gse-shake .35s ease";
      // show correct answer
      document.querySelectorAll(".gse-opt").forEach(b => {
        if (b.textContent.trim() === correct) b.classList.add("correct");
      });
      this._answers.push({ correct: false });
      setTimeout(() => { btn.style.animation = ""; this._next(); }, 1100);
    }
  },

  // ─── Next question or finish ──────────────────────────────────
  _next() {
    this._current++;
    if (this._current < this._questions.length) {
      this._renderQuestion();
    } else {
      this._showResult();
    }
  },

  // ─── Show result ─────────────────────────────────────────────
  _showResult() {
    const total   = this._questions.length;
    const score   = this._score;
    const pct     = Math.round((score / total) * 100);
    const grade   = score * 50;   // كل سؤال = 50 درجة
    const color   = pct >= 80 ? "#00e676" : pct >= 60 ? "#f39c12" : "#ff4757";
    const label   = pct >= 80 ? "🏆 EXCELLENT!" : pct >= 60 ? "👍 GOOD JOB!" : "💪 KEEP GOING!";

    const prog = document.getElementById("gseProgress");
    const cnt  = document.getElementById("gseCounter");
    if (prog) prog.style.width = "100%";
    if (cnt)  cnt.textContent  = "Completed ✓";

    const body = document.getElementById("gseBody");
    body.style.opacity = "0";
    setTimeout(() => {
      body.innerHTML = `
        <div class="gse-result">
          <div class="gse-result-circle" style="border-color:${color};box-shadow:0 0 40px ${color}44">
            <div class="gse-result-score" style="color:${color}">${score}/${total}</div>
            <div class="gse-result-pct"   style="color:${color}">${pct}%</div>
          </div>
          <div class="gse-result-label">${label}</div>
          <div class="gse-result-grade">Score: <span style="color:${color}">${grade}</span> / 1000</div>
          <div class="gse-result-info">Level ${this._level} · Session ${this._session} · Grammar</div>
          <div class="gse-result-saving" id="gseSaving">
            <span class="gse-saving-dot"></span> Saving your score...
          </div>
        </div>`;
      body.style.transition = "opacity .4s ease";
      body.style.opacity    = "1";

      const result = {
        score,
        total,
        percentage: pct,
        grade,
        level:   this._level,
        session: this._session
      };

      // بعث الدرجة للـ callback (Vetoojava.js هيعمل إيه بيها)
      this._submitScore(result);
    }, 200);
  },

  // ─── Submit score to GAS ─────────────────────────────────────
  async _submitScore(result) {
    try {
      // جلب بيانات الطالب من localStorage
      const stored = localStorage.getItem("vetoOnlineUser");
      if (!stored) {
        this._savingStatus("⚠️ Please log in to save your score.", "warning");
        if (this._onComplete) this._onComplete(result);
        return;
      }
      const user = JSON.parse(stored);

      // إرسال الدرجة للـ GAS
      const gasUrl = (typeof CONFIG !== "undefined" && CONFIG.GAS_URL)
        ? CONFIG.GAS_URL
        : "https://script.google.com/macros/s/AKfycbzRj1XtnuXrrDR79M3H5J9AYs4sdBWSBhAa3jSC9XwcNxB-pumSw0pxv8jvbybyZrpGGw/exec";

      const params = new URLSearchParams({
        action:  "submitGrammarScore",
        email:   user.email,
        level:   result.level,
        session: result.session,
        score:   result.grade      // الدرجة من 1000
      });

      const res  = await fetch(`${gasUrl}?${params}`);
      const data = await res.json();

      if (data.status === "success") {
        this._savingStatus("✅ Score saved successfully!", "success");
      } else {
        this._savingStatus("⚠️ " + (data.message || "Could not save score."), "warning");
      }
    } catch (e) {
      this._savingStatus("⚠️ Network error — score not saved.", "warning");
    }

    if (this._onComplete) this._onComplete(result);
  },

  _savingStatus(msg, type) {
    const el = document.getElementById("gseSaving");
    if (!el) return;
    const colors = { success: "#00e676", warning: "#f39c12", error: "#ff4757" };
    el.style.color = colors[type] || "#aaa";
    el.innerHTML   = msg;
  },

  // ─── Styles ──────────────────────────────────────────────────
  _injectStyles() {
    if (document.getElementById("gse-styles")) return;
    const s = document.createElement("style");
    s.id    = "gse-styles";
    s.textContent = `
    .gse-root{
      width:100%;max-width:820px;margin:0 auto;
      font-family:"Barlow","Segoe UI",sans-serif;
      background:radial-gradient(ellipse at 30% 20%,#0d1a2e 0%,#060810 70%);
      border-radius:24px;overflow:hidden;
      border:1px solid rgba(197,160,89,.25);
      box-shadow:0 20px 60px rgba(0,0,0,.7);
      color:#fff;
    }
    .gse-header{
      padding:28px 32px 20px;
      background:rgba(6,8,16,.95);
      border-bottom:1px solid rgba(197,160,89,.2);
    }
    .gse-header-top{
      display:flex;align-items:center;gap:14px;margin-bottom:8px;
    }
    .gse-badge{
      font-family:"Orbitron",sans-serif;
      font-size:.6rem;font-weight:900;letter-spacing:3px;
      color:#000;background:#c5a059;
      padding:5px 14px;border-radius:20px;
    }
    .gse-lesson-name{
      font-family:"Orbitron",sans-serif;
      font-size:.75rem;font-weight:700;letter-spacing:2px;
      color:#c5a059;
    }
    .gse-meta{
      font-size:.75rem;color:rgba(255,255,255,.35);
      letter-spacing:1px;margin-bottom:14px;
    }
    .gse-progress-wrap{
      height:4px;background:rgba(255,255,255,.08);
      border-radius:2px;overflow:hidden;margin-bottom:10px;
    }
    .gse-progress-fill{
      height:100%;background:linear-gradient(90deg,#c5a059,#00d4ff);
      border-radius:2px;transition:width .4s ease;
      box-shadow:0 0 8px rgba(197,160,89,.4);
    }
    .gse-counter{
      font-family:"Orbitron",sans-serif;
      font-size:.55rem;color:rgba(255,255,255,.3);letter-spacing:2px;
    }
    .gse-body{
      padding:40px 36px 44px;min-height:340px;
      display:flex;flex-direction:column;gap:28px;
    }
    .gse-q-num{
      font-family:"Orbitron",sans-serif;
      font-size:.65rem;font-weight:900;letter-spacing:3px;
      color:rgba(197,160,89,.6);
    }
    .gse-q-text{
      font-size:clamp(1.3rem,3vw,1.9rem);
      font-weight:800;line-height:1.4;color:#fff;
      padding:22px 28px;border-radius:18px;
      background:rgba(255,255,255,.04);
      border:1px solid rgba(255,255,255,.08);
    }
    .gse-opts{
      display:flex;flex-direction:column;gap:12px;
    }
    .gse-opt{
      width:100%;padding:18px 24px;
      border-radius:14px;
      background:rgba(255,255,255,.04);
      border:2px solid rgba(255,255,255,.1);
      color:#e0e0e0;cursor:pointer;
      font-size:clamp(1.1rem,2.5vw,1.4rem);
      font-weight:700;font-family:"Barlow",sans-serif;
      text-align:left;
      transition:background .2s,border-color .2s,transform .15s;
    }
    .gse-opt:hover:not(:disabled){
      background:rgba(0,212,255,.08);
      border-color:rgba(0,212,255,.4);
      transform:translateX(4px);
    }
    .gse-opt.correct{
      background:rgba(0,230,118,.15)!important;
      border-color:#00e676!important;color:#00e676;
    }
    .gse-opt.wrong{
      background:rgba(255,71,87,.15);
      border-color:#ff4757;color:#ff4757;
    }
    .gse-result{
      display:flex;flex-direction:column;align-items:center;
      gap:20px;text-align:center;
    }
    .gse-result-circle{
      width:160px;height:160px;border-radius:50%;
      border:4px solid;
      display:flex;flex-direction:column;
      align-items:center;justify-content:center;gap:4px;
    }
    .gse-result-score{
      font-family:"Orbitron",sans-serif;
      font-size:2.2rem;font-weight:900;line-height:1;
    }
    .gse-result-pct{
      font-family:"Orbitron",sans-serif;
      font-size:1.1rem;font-weight:700;opacity:.85;
    }
    .gse-result-label{
      font-size:1.5rem;font-weight:800;letter-spacing:2px;color:#fff;
    }
    .gse-result-grade{
      font-size:1.1rem;color:rgba(255,255,255,.6);
    }
    .gse-result-info{
      font-size:.8rem;color:rgba(255,255,255,.3);letter-spacing:1px;
    }
    .gse-result-saving{
      font-size:.85rem;color:rgba(255,255,255,.4);
      display:flex;align-items:center;gap:8px;
    }
    .gse-saving-dot{
      width:8px;height:8px;border-radius:50%;
      background:#c5a059;
      animation:gse-pulse 1s infinite;
    }
    .gse-error{
      padding:60px 32px;text-align:center;
    }
    .gse-error-icon{font-size:3rem;margin-bottom:16px;}
    .gse-error-msg{
      font-size:1.1rem;color:rgba(255,255,255,.5);
    }
    @keyframes gse-shake{
      0%,100%{transform:translateX(0)}
      25%{transform:translateX(-8px)}
      75%{transform:translateX(8px)}
    }
    @keyframes gse-pulse{
      0%,100%{opacity:1} 50%{opacity:.3}
    }
    `;
    document.head.appendChild(s);
  }

};

// تصدير للاستخدام في Node.js إن لزم
if (typeof module !== "undefined") {
  module.exports = { GrammarStudentExam, GRAMMAR_STUDENT_EXAMS };
}
