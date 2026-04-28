// ═══════════════════════════════════════════════════════════════════
//  questionBank.js  —  Grade 3 Secondary | Bit by Bit Final Revision
//  6 Question Types × 50 Questions Each = 300 Total
//  Used by: teacher_app.html  &  student_app.html
// ═══════════════════════════════════════════════════════════════════

const QB = {

// ──────────────────────────────────────────────────────────────────
// 1. VOCABULARY MCQ  (50 questions)
// ──────────────────────────────────────────────────────────────────
vocab: [
  {q:"After working a long night ________, the doctor was very tired and went straight to sleep.",o:["draft","career","beep","shift"],a:3},
  {q:"The teacher asked the class to pay close ________ while she explained the final exam rules.",o:["direction","attention","intention","extension"],a:1},
  {q:"Hospitals must always be prepared to deal with serious medical ________.",o:["emergencies","currencies","agencies","frequencies"],a:0},
  {q:"When the fire alarm rang, there was a lot of ________ as everyone ran to the exit.",o:["process","order","chaos","balance"],a:2},
  {q:"Her first year of marriage has been a real ________, with many ups and downs.",o:["communicator","rollercoaster","cooperator","broadcaster"],a:1},
  {q:"The patient slowly regained ________ after being unconscious for nearly thirty minutes.",o:["hopelessness","selfishness","carelessness","consciousness"],a:3},
  {q:"You must take your ________ every morning with a glass of water to get better.",o:["medication","dedication","indication","abdication"],a:0},
  {q:"The ________ arrived quickly and provided immediate medical care to the injured cyclist.",o:["epidemic","paramedic","academic","mechanic"],a:1},
  {q:"She accepted the job offer without any ________ after reading the contract carefully.",o:["vaccination","decoration","separation","hesitation"],a:3},
  {q:"The ________ of the accident were rushed to the nearest hospital as soon as possible.",o:["victims","monitors","visitors","editors"],a:0},
  {q:"The nurse checked the patient's ________ to make sure his heart was beating normally.",o:["puzzle","whistle","pulse","muscle"],a:2},
  {q:"The mother placed a cool wet cloth on her child's ________ to help reduce the fever.",o:["whiteboard","snowboard","overhead","forehead"],a:3},
  {q:"Please handle this email with ________; the client is waiting for an answer.",o:["currency","agency","urgency","fluency"],a:2},
  {q:"You cannot get this antibiotic without a doctor's ________.",o:["prescription","transcription","description","subscription"],a:0},
  {q:"High fever and a persistent cough are common ________ of the flu during the winter season.",o:["customs","victims","rhythms","symptoms"],a:3},
  {q:"The doctor placed the ________ on the boy's chest to listen to his heartbeat and breathing.",o:["stethoscope","telescope","horoscope","microscope"],a:0},
  {q:"She dedicated her entire career to the field of ________, caring for patients of all ages.",o:["cursing","nursing","teaching","learning"],a:1},
  {q:"Working as a nurse brings many ________ that require quick thinking and adaptability.",o:["passages","advantages","messages","challenges"],a:3},
  {q:"After volunteering at a hospital for a year, she decided to pursue a ________ in medicine.",o:["career","pioneer","barrier","carrier"],a:0},
  {q:"Success in a hospital relies on ________ between doctors, nurses, and technicians.",o:["coursework","homework","classwork","teamwork"],a:3},
  {q:"There was a lot of ________ about the new rules because nobody explained them well.",o:["expression","confusion","exclusion","expansion"],a:1},
  {q:"Her ________ to her children was clear from the extra work she did to ensure their comfort.",o:["hesitation","medication","dedication","separation"],a:2},
  {q:"The doctor treated all patients with great ________, regardless of their ability to pay.",o:["compassion","deduction","depression","discussion"],a:0},
  {q:"The documentary told a ________ story about children who lost their families.",o:["heartbroken","heartbreaking","breathtaking","strengthened"],a:1},
  {q:"The surgeon made sure that all the tools were ________ before the operation began.",o:["sterile","hostile","germy","fragile"],a:0},
  {q:"When the fire alarm rang, the ________ crowd rushed toward the exits in a disorganized way.",o:["picked","nicked","kicked","panicked"],a:3},
  {q:"You need to be more ________ and able to adapt to changing situations in the office.",o:["visible","flexible","terrified","severe"],a:1},
  {q:"The wound was quite deep, so the doctor ________ the skin to ensure it wouldn't leave a scar.",o:["switched","attached","stitched","grabbed"],a:2},
  {q:"The microwave ________ to let me know that my soup was finally hot.",o:["beeped","groaned","whispered","clutched"],a:0},
  {q:"The school nurse ________ the first aid to the student who fell on the stairs.",o:["discovered","measured","prescribed","administered"],a:3},
  {q:"The company offers rewards to employees who show high ________.",o:["productivity","jealousy","anxiety","humidity"],a:0},
  {q:"She decided to leave her government job for a higher-paying role in the ________ sector.",o:["public","special","general","private"],a:3},
  {q:"The doctor's accurate ________ and early treatment saved the patient's life.",o:["invitation","diagnosis","vacation","permission"],a:1},
  {q:"Thanks to modern medical ________, many diseases that were fatal can now be managed.",o:["treatments","complaints","punishments","arguments"],a:0},
  {q:"The graphic designer used his ________ to come up with unique logos that impressed us all.",o:["authority","appetite","creativity","security"],a:2},
  {q:"A good nurse must have both medical knowledge and genuine ________ for her patients.",o:["ambition","compassion","arrogance","suspicion"],a:1},
  {q:"In our ________ age, most people read the news online using their tablets and smartphones.",o:["stone","dark","digital","middle"],a:2},
  {q:"When the internet stopped working, I called a ________ to check the wiring and the router.",o:["technician","politician","musician","librarian"],a:0},
  {q:"I've installed the latest ________ of the operating system. My laptop should run faster now.",o:["edition","engine","manual","version"],a:3},
  {q:"The factory uses a fully ________ assembly line where robots put the cars together.",o:["estimated","associated","animated","automated"],a:3},
  {q:"Our company decided to ________ a more flexible policy to keep the employees happy.",o:["disturb","forbid","adopt","reject"],a:2},
  {q:"My job is to ________ any network problems that the office staff have with their computers.",o:["broadcast","overlook","rearrange","troubleshoot"],a:3},
  {q:"Delivery companies use technology to ________ every package on its way to clients.",o:["track","open","lose","delay"],a:0},
  {q:"Employers look for ________ like communication and problem-solving in new employees.",o:["job titles","soft skills","salary scales","hard skills"],a:1},
  {q:"________ means all the people employed or available for work.",o:["Background","Collaboration","Workforce","Transformation"],a:2},
  {q:"The ability to make wise decisions after careful thought is called ________.",o:["management","backgrounds","judgment","transformation"],a:2},
  {q:"A leader with ________ can make better decisions for the future.",o:["ladder","instance","literacy","insight"],a:3},
  {q:"Schools now focus on improving students' ________ so they can use technology responsibly.",o:["family income","physical strength","traffic awareness","digital literacy"],a:3},
  {q:"The building is still under ________, so nobody can enter it yet.",o:["connection","construction","consumption","conduction"],a:1},
  {q:"________ intelligence helps people understand their own feelings and the feelings of others.",o:["Technical","Emotional","Artificial","Educational"],a:1},
],

// ──────────────────────────────────────────────────────────────────
// 2. IDIOMS & COLLOCATIONS MCQ  (50 questions)
// ──────────────────────────────────────────────────────────────────
idioms: [
  {q:"In the old market, you could still ________ a basket of fresh eggs for a hand-woven blanket.",o:["trade","make","blame","do"],a:0},
  {q:"She asked me to ________ for a moment while she checked if the manager was available.",o:["take on","hold on","give up","put off"],a:1},
  {q:"After her father's death, she ________ the family business and expanded it globally.",o:["took part","took time","took over","took place"],a:2},
  {q:"Starting a new business is exciting, but be prepared to face the challenges ________.",o:["above","ahead","afoot","aside"],a:1},
  {q:"As soon as the paramedic saw the accident, he began to ________ to rescue the driver.",o:["hit the hay","jump into action","break a leg","bite the bullet"],a:1},
  {q:"Ali left his umbrella at home, so he arrived at the meeting looking miserable and ________.",o:["raining cats and dogs","soaked to the skin","on the career ladder","under the weather"],a:1},
  {q:"When the sailor saw the massive shark approaching him, he stepped back, looking ________.",o:["cool as a cucumber","pale as a ghost","fit as a fiddle","fresh as a daisy"],a:1},
  {q:"When her husband died, she worked in a factory and ________ to support her children.",o:["beat around the bush","broke the ice","hit the nail on the head","went the extra mile"],a:3},
  {q:"The villagers worked together and rebuilt the destroyed bridge, proving that ________.",o:["teamwork makes the dream work","actions speak louder than words","every cloud has a silver lining","practice makes perfect"],a:0},
  {q:"We had to move the garden party inside because suddenly it ________ outside.",o:["rained cats and dogs","cost an arm and a leg","broke the bank","hit the spot"],a:0},
  {q:"Despite the extreme heat, the hiker continued toward the summit, whispering '________'.",o:["a piece of cake","a blessing in disguise","no pain, no gain","the last straw"],a:2},
  {q:"City life is fast and noisy; ________, life in the countryside is calm and quiet.",o:["for instance","in contrast","in addition","in advance"],a:1},
  {q:"This old library is ________ some of the rarest and most expensive books in the entire world.",o:["home to","part of","side with","house for"],a:0},
  {q:"The local street market is ________ shoppers looking for fresh fruit and handmade crafts.",o:["covered in","broken by","alive with","famous for"],a:2},
  {q:"Without immediate action against air pollution, many historical monuments in the city center are ________ of collapsing.",o:["in control","at ease","on purpose","at risk"],a:3},
  {q:"High up in the Himalayan mountains, the oxygen is thin and the weather is freezing, making it a/an ________ environment for most animals and plants.",o:["easy-to-manage","hard-to-survive","widely accessible","down-to-earth"],a:1},
  {q:"With the invention of smartphones and GPS, stopping to ask for directions from a stranger has become ________.",o:["a thing of the past","a popular trend","a daily routine","a piece of cake"],a:0},
  {q:"The manager decided to ________ the employee's minor mistake because it was his first day on the job.",o:["turn a blind eye to","catch the attention of","catch the public eye","see eye to eye with"],a:0},
  {q:"When the emergency team heard the alarm, they immediately ________ to evacuate the building.",o:["go pale as a ghost","spring into action","bear the brunt","face the music"],a:1},
  {q:"Small nations ________ of climate change although they cause the least pollution.",o:["take the heat","shoulder the burden","bear the brunt","face the music"],a:2},
  {q:"People must learn to ________ to new technologies to succeed in the modern workplace.",o:["adapt","depend","took","give"],a:0},
  {q:"Robots are designed to ________ difficult tasks quickly and accurately.",o:["delay","avoid","ignore","perform"],a:3},
  {q:"To stay informed, employees should keep up ________ the latest news.",o:["in","with","at","for"],a:1},
  {q:"Talented artists can ________ music that reflects their emotions and ideas.",o:["copy","destroy","compose","forget"],a:2},
  {q:"To advance to higher positions in a job is to ________.",o:["climb the career ladder","spill the beans","stay ahead of the curve","think outside the box"],a:0},
  {q:"To be more advanced or better prepared than others in a certain area is to ________.",o:["be over the moon","stay ahead of the curve","think outside the box","climb the career ladder"],a:1},
  {q:"________ means to think in a creative and unconventional way.",o:["Stay behind the line","Spill the beans","Stay ahead of the curve","Think outside the box"],a:3},
  {q:"To do the quiz correctly, you must ________ the teacher's instructions precisely.",o:["disregard","implement","innovate","support"],a:1},
  {q:"When the system crashed, all automated factory came to a complete ________.",o:["agreement","breakthrough","standstill","promotion"],a:2},
  {q:"The guide warned us ________ the ancient artifacts in the museum.",o:["not touch","not to touch","not touching","don't touch"],a:1},
  {q:"You missed the meeting this morning. You ________ checked your calendar more carefully.",o:["must have","shouldn't have","might have","should have"],a:3},
  {q:"She is a renowned scientist; she ________ three important discoveries in her field so far.",o:["was making","'s been making","has made","makes"],a:2},
  {q:"To go the ________ mile means to make more effort than is expected of you.",o:["extra","long","short","far"],a:0},
  {q:"She felt she was ________ after working eighteen hours without rest.",o:["on top of the world","over the moon","under the weather","on cloud nine"],a:2},
  {q:"After months of disagreement, the two sides finally ________ a compromise.",o:["reached","arrived","got","fell"],a:0},
  {q:"He was very tired and could not concentrate, so the teacher told him to ________ a break.",o:["take","make","do","have"],a:0},
  {q:"The doctor told the patient to ________ an appointment for a follow-up check.",o:["do","make","take","arrange"],a:1},
  {q:"The new policy aims to ________ income inequality across different regions of the country.",o:["address","ignore","create","increase"],a:0},
  {q:"Despite the busy schedule, the manager always made time to ________ with her employees.",o:["connect","talk","touch base","work through"],a:2},
  {q:"The charity organisation aims to ________ the needs of the most vulnerable communities.",o:["meet","reach","offer","give"],a:0},
  {q:"The athlete broke the world record and was ________ by millions of fans around the world.",o:["cheered on","looked up to","put up with","come across"],a:0},
  {q:"He had to ________ a difficult decision between staying with his family and taking the job abroad.",o:["make","do","take","choose"],a:0},
  {q:"The company decided to ________ its workforce to cut costs during the economic crisis.",o:["reduce","decline","remove","lower"],a:0},
  {q:"The new product was an instant ________ and sold out in all stores within two days.",o:["hit","success","win","gain"],a:0},
  {q:"Despite her young age, she managed to ________ a name for herself in the field of science.",o:["make","do","get","build"],a:0},
  {q:"To ________ the record straight, I never said that all machines are better than humans.",o:["set","put","get","fix"],a:0},
  {q:"The government plans to ________ measures to reduce carbon emissions by 2030.",o:["take","make","do","put"],a:0},
  {q:"After years of practice, he could ________ the piano without even looking at his hands.",o:["play","do","perform","run"],a:0},
  {q:"She tried hard to ________ a balance between her work and personal life.",o:["strike","make","create","build"],a:0},
  {q:"The teacher asked students to ________ their own conclusions after reading the text.",o:["draw","make","reach","get"],a:0},
],

// ──────────────────────────────────────────────────────────────────
// 3. GRAMMAR MCQ  (50 questions) — Present Perfect / Reported Speech / Modals / Causative
// ──────────────────────────────────────────────────────────────────
grammar: [
  {q:"Since the new management took over, the company ________ its profits year after year.",o:["has increased","increased","has been increasing","increases"],a:0},
  {q:"He ________ far more confident since he started public speaking training.",o:["became","has become","has been becoming","was become"],a:1},
  {q:"The children's clothes are soaking wet because they ________ in the rain all afternoon.",o:["have played","played","are playing","have been playing"],a:3},
  {q:"She moved abroad in 2015, and she has completely changed her outlook on life ________.",o:["since","ever since","during","a & b"],a:3},
  {q:"This is the first time I ________ such a convincing argument against the proposal.",o:["hear","have heard","heard","am hearing"],a:1},
  {q:"Earlier this morning, I ________ the documents and handed them in personally.",o:["signed","have signed","had signed","have been signing"],a:0},
  {q:"She looked upset because her manager ________ her just now in front of everyone.",o:["has criticized","criticizes","criticized","had criticized"],a:2},
  {q:"He is clearly nervous because he hasn't ________ spoken in public before.",o:["never","ever","hardly","since"],a:1},
  {q:"He lost his job in April, and ________ he has been struggling to find stable work.",o:["from then","by then","until then","since then"],a:3},
  {q:"I ________ the report already and sent it to the board, so there's nothing more to change.",o:["have revised","have been revising","revised","am revising"],a:0},
  {q:"He still has paint on his clothes because he ________ the kitchen walls all morning.",o:["has painted","painted","is painting","has been painting"],a:3},
  {q:"She ________ as a university lecturer since she completed her PhD ten years ago.",o:["works","has been working","worked","has been worked"],a:1},
  {q:"He ________ the violin professionally since childhood, which explains his exceptional talent.",o:["has been playing","has played","was played","was playing"],a:0},
  {q:"The road is finally open again because the council ________ all the repair work overnight.",o:["has been doing","did","is doing","has done"],a:3},
  {q:"I ________ to contact Ali repeatedly this week, but he has been unavailable every time.",o:["have tried","was tried","have been trying","will try"],a:2},
  {q:"Why are your clothes covered in paint? What ________ in here today?",o:["have you been doing","have you been done","did you do","are you doing"],a:0},
  {q:"I trust him completely because I ________ him for over thirty years.",o:["have been knowing","are knowing","have known","have been known"],a:2},
  {q:"Sir Magsy Yacoub ________ hundreds of successful heart surgeries throughout his career.",o:["has performed","has been performing","was performed","was performing"],a:0},
  {q:"I ________ this documentary three times already and still find it interesting.",o:["have been watching","was watched","was watching","have watched"],a:3},
  {q:"I can't afford another holiday this year because I ________ all my savings on home renovations.",o:["have been spending","was spent","have spent","am spending"],a:2},
  {q:"Which of the following sentences is structurally INCORRECT?",o:["I lived in Cairo since 2012.","I have lived in Cairo since 2012.","I've been living in Cairo for years.","I've lived in Cairo for many years."],a:0},
  {q:"Which of the following sentences is structurally CORRECT?",o:["She has been knowing him since they were children.","She is knowing him for over twenty years now.","She has known him since they were children.","She knew him since they were children."],a:2},
  {q:"'I've been painting the living room.' This means ________.",o:["The living room is completely finished and looks great.","I am still working on the living room; it is not finished yet.","I painted the living room many years ago.","I decided not to paint the living room."],a:1},
  {q:"'I've painted the living room.' This means ________.",o:["The job is done, and the room is ready to use.","I am right in the middle of painting it.","I have been thinking about painting the room.","I need to buy more paint to finish the job."],a:0},
  {q:"'They've been living in London for five years.' This means ________.",o:["They lived in London for five years but moved away recently.","They are planning to move to London in five years.","They only visit London for five days every year.","They moved to London five years ago and still live there."],a:3},
  {q:"The employee stated that she ________ in that office since 2010.",o:["was working","is working","was working","had been working"],a:3},
  {q:"Clara exclaimed that she ________ such a beautiful sunset before.",o:["would never see","had never seen","never sees","has never seen"],a:1},
  {q:"The notice stated that all visitors ________ to security rules.",o:["must conform","had to conform","must have conformed","a & b"],a:3},
  {q:"The detective asked her what ________ at 8 PM; when the crime happened.",o:["she was doing","she had been doing","did she do","has she been doing"],a:0},
  {q:"Haneen told me last year that she ________ applying for a Master's in Canada ________.",o:["considers / next year","was considering / the following year","is considering / the year following","has considered / that year"],a:1},
  {q:"The mechanic advised me ________ the oil level before I ________ the engine.",o:["to check / starting","that I check / started","to check / started","checking / start"],a:2},
  {q:"Ahmed told Sarah that he ________ her as soon as he ________.",o:["calls / arrived","would call / arrived","would call / arrives","will call / arrived"],a:1},
  {q:"Sarah said that she ________ a new job ________.",o:["is going to start / last Monday","was going to start / the following Monday","would start / the Monday before","had started / the following Monday"],a:1},
  {q:"Which of the following sentences is structurally INCORRECT?",o:["Mark said he would meet us at the cinema at eight.","She asked me if I had finished my homework yet.","They mentioned that the flight had been delayed.","The teacher told that the exam was very difficult."],a:3},
  {q:"The wifi isn't working, but the router is on. It ________ be a problem with the main line.",o:["can't","must","could","won't"],a:1},
  {q:"She solved the difficult math problem in a second. She ________ a genius in maths.",o:["must be","can't be","should be","oughtn't be"],a:0},
  {q:"Your clothes are soaking wet. It ________ raining heavily outside.",o:["can't be","might be","should be","must be"],a:3},
  {q:"He knew the presentation was at 9 a.m. sharp. He ________ have been late.",o:["shouldn't","couldn't","mustn't","wouldn't"],a:0},
  {q:"You saw the warning sign about the wet floor. You ________ been more careful.",o:["may have","might have","must have","should have"],a:3},
  {q:"The pilot ________ ignored the severe storm warning; it was completely irresponsible.",o:["must be","can't have","shouldn't have","ought to have"],a:2},
  {q:"You ________ spent so much money on that car; you know we have many bills to pay!",o:["ought to have","couldn't have","should have","shouldn't have"],a:3},
  {q:"Your car looks terrible! You ________ serviced it for months. It's a miracle that it still works.",o:["shouldn't have","can't have","might not have","must have"],a:1},
  {q:"A ten-day cease fire will ________ the two armies to reach an agreement.",o:["make","have","allow","let"],a:2},
  {q:"We are ________ to work from home thanks to modern technology.",o:["let","allowed","got","had"],a:1},
  {q:"Our teacher of English made us ________ a short paragraph before we left.",o:["to write","wrote","write","writing"],a:2},
  {q:"He was angry with his parents as he wasn't ________ to take his own decisions.",o:["caused","made","allowed","let"],a:2},
  {q:"Lack of money ________ me not to complete my project.",o:["made","caused","allowed","let"],a:1},
  {q:"My father ________ me to go the party last night.",o:["made","let","had","allowed"],a:1},
  {q:"How often do you ________ your car examined?",o:["make","got","have","allow"],a:2},
  {q:"Today, many companies ________ repetitive tasks done by machines.",o:["make","do","have","allow"],a:2},
],

// ──────────────────────────────────────────────────────────────────
// 4. HYPHENATED / COMPOUND ADJECTIVES  (50 questions)
// ──────────────────────────────────────────────────────────────────
wordForms: [
  {q:"After years of research, the scientist is now ________ in the field of marine biotechnology.",o:["world famous","world-famous","famous-worldly","worldly-famous"],a:1},
  {q:"The minister delivered a ________ speech that clearly calmed investors about their investments.",o:["well worded","well-worded","worded-well","worded well"],a:1},
  {q:"Although the instructions were accompanied by ________ illustrations, many workers still misunderstood the safety procedures.",o:["careful-designed","designed-carefully","designed carefully","carefully-designed"],a:3},
  {q:"She adopted a ________ approach to problem-solving.",o:["data driven","data-driven","driven-data","dataly driven"],a:1},
  {q:"In which of the following sentences is the hyphen used correctly?",o:["The apartment is fully-furnished and ready-to-move-in.","The apartment is fully furnished and ready to move in.","The apartment is fully-furnished and ready to move-in.","The apartment is fully furnished and ready-to-move-in."],a:0},
  {q:"She wore a ________ scarf that you could see from across the street.",o:["brightly-colored","bright-colored","brightlycolored","colored brightly"],a:0},
  {q:"The ________ aroma of baking bread filled the whole street.",o:["mouth watering","mouth-watering","mouth-watered","watering-mouth"],a:1},
  {q:"A ________ shouldn't be using social media without being monitored.",o:["ten-year-olds","ten-year-old","ten years old","ten-years-old"],a:1},
  {q:"The game is suitable for ________ and adults alike.",o:["twelve years olds","twelve-year-old","twelve-year-olds","twelve-years-olds"],a:2},
  {q:"The new manager of the company is ________ for his experience in the tech industry.",o:["highly-respected","highly respected","high-respected","respected / highly"],a:1},
  {q:"I'm really grateful to her. Her advice was always practical and ________.",o:["down-to-earth","down to earth","earth to down","down to earth"],a:0},
  {q:"The divers explored a ________ cave in the Pacific Ocean.",o:["100-metre-deep","100-metres-deep","100 metre deep","100-metre deep"],a:0},
  {q:"They have a ________ daughter who has just started her primary school.",o:["six year old","six-year-old","six-years-old","six year old"],a:1},
  {q:"Unfortunately, ________ are not allowed in the pool today.",o:["ten-year-olds","ten-year-old","ten-year olds","ten years old"],a:0},
  {q:"The ________ won three gold medals at the Olympics.",o:["record-breaking athlete","record breaking athlete","record--breaking athlete","record breaking-athlete"],a:0},
  {q:"He is a very ________ who always asks thoughtful questions.",o:["hard working-student","hard working student","hard--working student","hard-working student"],a:3},
  {q:"I bought a ________ calculator that works perfectly as long as there is enough light.",o:["brightly-colored","battery-drained","solar-powered","manually-operated"],a:2},
  {q:"Which of the following sentences is correctly written?",o:["She is a well known-writer.","She is a well known writer.","She is a well-known-writer.","She is a well-known writer."],a:3},
  {q:"Which of the following sentences is correctly written?",o:["This is a-highly trained team.","This is a highly-trained team.","This is a highly trained-team.","This is a high-trained team."],a:1},
  {q:"Which of the following sentences is correctly written?",o:["She chose a more expensive-car.","She chose a more-expensive-car.","She chose a more-expensive car.","She chose a more expensive car."],a:3},
  {q:"Which of the following sentences is correctly written?",o:["This is a self service restaurant.","This is a selfservice restaurant.","This is a self-service restaurant.","This is a self-service restaurant."],a:2},
  {q:"Which of the following sentences is correctly written?",o:["The movie star is wellknown.","The movie star is well known.","The movie star is well-known.","The movie star is well-known."],a:2},
  {q:"Parents should give their children a ________ education, with skills that will always be useful.",o:["time-consuming","short-lived","short-term","future-proof"],a:3},
  {q:"Instead of writing 'rain that was very cold,' an effective writer would write '________ rain'.",o:["ice-cold","cold and wet","rain and cold","very cold rain"],a:0},
  {q:"The researchers were ________ by the ________ complexity of the ancient mechanism.",o:["fascinated / fascinated","fascinating / fascinating","fascinating / fascinated","fascinated / fascinating"],a:3},
  {q:"He is clearly a ________ person who never stops learning.",o:["open-minded","open minded","minded-open","openl minded"],a:0},
  {q:"The hotel offers ________ accommodation for all guests.",o:["five-star","five star","star-five","fivestar"],a:0},
  {q:"She has a ________ personality that makes everyone around her feel comfortable.",o:["easy-going","easy going","going-easy","easily going"],a:0},
  {q:"The old castle was ________ and attracted many tourists from around the world.",o:["well-preserved","well preserved","preserved-well","wellpreserved"],a:0},
  {q:"The company offers a ________ guarantee on all its electrical appliances.",o:["two-year","two year","year-two","twoyear"],a:0},
  {q:"She was wearing a ________ dress at the graduation ceremony.",o:["full-length","full length","length-full","fulllength"],a:0},
  {q:"The new building has a ________ design that makes it one of the most modern in the city.",o:["state-of-the-art","state of the art","art-of-the-state","stateof art"],a:0},
  {q:"He submitted a ________ report that covered all aspects of the project.",o:["well-researched","well researched","researched-well","wellresearched"],a:0},
  {q:"The students were asked to write a ________ essay about environmental issues.",o:["thought-provoking","thought provoking","provoking-thought","thoughtprovoking"],a:0},
  {q:"The company produces ________ goods that are popular worldwide.",o:["high-quality","high quality","quality-high","highquality"],a:0},
  {q:"The museum displayed a collection of ________ artefacts from ancient civilisations.",o:["well-preserved","well preserved","preserved-well","wellpreserved"],a:0},
  {q:"This is a ________ job that requires you to work on weekends.",o:["full-time","full time","time-full","fulltime"],a:0},
  {q:"The artist created a ________ sculpture that stood at the entrance of the gallery.",o:["life-sized","life sized","sized-life","lifesized"],a:0},
  {q:"He showed great ________ skills during the crisis.",o:["decision-making","decision making","making-decision","decisionmaking"],a:0},
  {q:"The ________ approach to the problem helped them find a solution quickly.",o:["hands-on","hands on","on-hands","handson"],a:0},
  {q:"She wore a ________ coat to protect herself from the cold weather.",o:["knee-length","knee length","length-knee","kneelength"],a:0},
  {q:"The ________ hospital treated thousands of patients during the crisis.",o:["well-equipped","well equipped","equipped-well","wellequipped"],a:0},
  {q:"The company launched a ________ campaign to promote environmental awareness.",o:["large-scale","large scale","scale-large","largescale"],a:0},
  {q:"She received a ________ scholarship to study abroad.",o:["merit-based","merit based","based-merit","meritbased"],a:0},
  {q:"The ________ team worked around the clock to complete the project.",o:["hard-working","hard working","working-hard","hardworking"],a:0},
  {q:"The school organised a ________ trip for students to visit the national museum.",o:["field-trip","field trip","trip-field","fieldtrip"],a:0},
  {q:"He is a ________ professional who is respected by all his colleagues.",o:["well-known","well known","known-well","wellknown"],a:0},
  {q:"The charity provides ________ support to families in need.",o:["long-term","long term","term-long","longterm"],a:0},
  {q:"She has a ________ approach to solving problems that many admire.",o:["no-nonsense","no nonsense","nonsense-no","nononsense"],a:0},
  {q:"The documentary revealed the ________ effects of pollution on marine life.",o:["far-reaching","far reaching","reaching-far","farreaching"],a:0},
],

// ──────────────────────────────────────────────────────────────────
// 5. TRANSLATION MCQ  (50 questions — Arabic ↔ English)
// ──────────────────────────────────────────────────────────────────
translation: [
  {q:"Choose the CORRECT Arabic translation:\n\"The joint US-Israeli military operation against Iran has entered its third day, with both sides exchanging missile strikes. Three American service members have been killed in action, and officials warn that further casualties are expected as the conflict widens.\"",
   o:[
    "لقد أنهت العملية العسكرية الأمريكية الإسرائيلية المشتركة ضد إيران يومها الثالث، حيث تبادل الجانبان الضربات المدفعية، وقد قُتل ثلاثة جنود أمريكيين في العمليات، ويحذر المسؤولون من توقع المزيد من الخسائر مع اتساع نطاق الحرب.",
    "لقد دخلت العملية العسكرية الأمريكية الإسرائيلية المشتركة ضد إيران يومها الثالث، حيث تبادل الجانبان الضربات الصاروخية، وقُتل ثلاثة جنود أمريكيين في العمليات، ويحذر المسؤولون من توقع المزيد من الخسائر مع اتساع نطاق الصراع.",
    "لقد بدأت العملية العسكرية الأمريكية الإسرائيلية المشتركة مع إيران يومها الثالث، حيث تبادل الجانبان الضربات المدفعية، وقُتل ثلاثة أمريكيين في الميدان، ويحذر المسؤولون من توقع المزيد من الخسائر مع اتساع نطاق الصراع.",
    "لقد دخلت العملية العسكرية الإسرائيلية-الأمريكية المشتركة ضد إيران يومها الثالث، حيث تبادل الجانبان الضربات الصاروخية، ويتوقع المسؤولون زيادة الخسائر مع اتساع نطاق المعارك."
   ],a:1},
  {q:"Choose the CORRECT Arabic translation:\n\"Iran has launched missile strikes targeting US military bases in Gulf states, including Qatar, Bahrain, and the UAE. The attacks have caused significant damage to runways and military infrastructure, though no further casualties have been reported.\"",
   o:[
    "لقد شنّت إيران معارك صاروخية استهدفت قواعد أمريكية في دول الخليج، بما فيها قطر والبحرين والولايات المتحدة، وقد تسببت هذه المعارك بأضرار جسيمة في مدارج الطائرات والبنية التحتية العسكرية، إلا أنه لم ترد أنباء عن وقوع إصابات أخرى.",
    "لقد أطلقت إيران هجمات صاروخية استهدفت قواعد أمريكية جوية في دول الخليج، بما فيها الكويت وقطر والإمارات العربية المتحدة، وقد نتجت عن هذه الهجمات أضرار جسيمة في مدارج الطائرات والبنية التحتية العسكرية، إلا أنه لم ترد أنباء عن وقوع إصابات أخرى.",
    "لقد شنّت إيران هجمات صاروخية مدفعية استهدفت قواعد عسكرية إسرائيلية في دول الخليج، وقد تسببت هذه الهجمات بأضرار جسيمة في مدارج الطائرات والبنية التحتية العسكرية، إلا أنه لم ترد أنباء عن وقوع إصابات.",
    "لقد شنّت إيران هجمات صاروخية استهدفت قواعد عسكرية أمريكية في دول الخليج، بما فيها قطر والبحرين والإمارات العربية المتحدة، وقد تسببت هذه الهجمات بأضرار جسيمة في مدارج الطائرات والبنية التحتية العسكرية، إلا أنه لم ترد أنباء عن وقوع إصابات أخرى."
   ],a:3},
  {q:"Choose the CORRECT English translation:\nيعتقد بعض العلماء أن اللحوم المستزرعة في المختبر قد تكون الحل الأمثل لمواجهة أزمة الغذاء العالمية وتقليل التأثير السلبي لتربية الماشية على البيئة.",
   o:[
    "Some scientists believe that lab-grown meat is the ideal solution to deal the global food crisis and reduce the negative environmental impact of animal farming.",
    "Some scientists believe that lab-grown meat should be the ideal solution to dress the global food shortage and reduce the passive environmental impact of cattle farming.",
    "Some scientists believe that lab-grown meat could be the ideal solution to address the global food crisis and reduce the negative environmental impact of livestock farming.",
    "Some scientists believe that lab-grown meat must be the ideal solution to impress the global food problem and deduce the negative environmental impact of livestock farming."
   ],a:2},
  {q:"Choose the CORRECT English translation:\nيجب أن نحافظ على مستقبلنا من خلال اعتماد ممارسات مستدامة وتقليل التلوث والحفاظ على الموارد الطبيعية واتخاذ إجراءات فعّالة لمكافحة تغيّر المناخ. فقط حينئذٍ يمكننا ضمان مستقبل آمن للأجيال القادمة.",
   o:[
    "We must protect our future by adopting sustainable practices, reducing pollution, conserving natural resources, and taking effective action to miss climate change. Only then we can assure a secure future for generations to come.",
    "We must protect our future by adopting sustainable practices, reducing pollution, conserving natural resources, and taking effective action to combat climate change. Only then can we ensure a secure future for generations to come.",
    "We must protect our future by adopting sustainable exercises, reducing pollution, conversing natural sources, and taking detective action to find climate change. Only then can we ensure a secure future for generations to come.",
    "We must protect our future by adopting sustainable practices, reducing pollution, conserving natural resources, and taking effective action to find climate change. Only then we can assure a secure future for generations to come."
   ],a:1},
  {q:"Choose the CORRECT Arabic translation:\n\"Marine biologists are using sophisticated technology to track the migration patterns of whales, hoping to establish protected corridors that ensure their safety from industrial shipping lanes.\"",
   o:[
    "يستخدم علماء الأحياء البحرية تكنولوجيا متطورة لتتبع أنماط هجرة الحيتان، آملين في إنشاء ممرات محمية تضمن سلامتها من ممرات الشحن الصناعية.",
    "تتبع الحيتان التكنولوجيا المتطورة لكي تعرف أنماط هجرة الحيتان، والذين يحاولون إنشاء شحنات داخل المناطق المحمية.",
    "ممرات الشحن الصناعية هي الوسيلة الوحيدة لضمان سلامة الحيتان، ولذلك يستخدم العلماء تكنولوجيا بسيطة لتتبع هجرتهم بعيداً عن البحر.",
    "يأمل العلماء في تدمير ممرات هجرة الحيتان باستخدام التكنولوجيا المتطورة لكي تصبح ممرات الشحن الصناعية أكثر سلامة للجميع."
   ],a:0},
  {q:"Choose the CORRECT English translation:\nتعتبر الغابات الساحلية، مثل الماتجروف، ضرورية لحماية الشواطئ من التآكل وامتصاص كميات هائلة من ثاني أكسيد الكربون من الغلاف الجوي.",
   o:[
    "Erosion is essential for mangroves because coastal forests release carbon dioxide into the vast atmosphere and the shores.",
    "Shores protect mangroves from coastal forests, which is essential for erosion and absorbing the atmosphere from carbon dioxide.",
    "Mangroves are vast amounts of carbon dioxide that erosion coastal forests from the atmosphere and essential shores.",
    "Coastal forests, such as mangroves, are essential for protecting shores from erosion and absorbing vast amounts of carbon dioxide from the atmosphere."
   ],a:3},
  {q:"Choose the CORRECT Arabic translation:\n\"A stitch in time saves nine is a vital principle in marine conservation; fixing small environmental problems early prevents them from becoming irreversible disasters that destroy entire ecosystems.\"",
   o:[
    "إن إصلاح المشكلات البيئية الكبيرة يتطلب تسع غرز في الوقت المناسب لكي نحافظ على البيئة البحرية من الكوارث الصغيرة التي لا تدمر الأنظمة البيئية.",
    "المبدأ الحيوي في الحفاظ على البيئة هو ترك المشكلات البيئية الصغيرة تنمو وتصبح كوارث، لأن الإصلاح المبكر يدمر الأنظمة البيئية الكاملة.",
    "درهم وقاية خير من قنطار علاج هو مبدأ حيوي في الحفاظ على البيئة البحرية؛ فإصلاح المشكلات البيئية الصغيرة مبكراً يمنعها من أن تصبح كوارث غير قابلة للإصلاح تدمر أنظمة بيئية بأكملها.",
    "الأنظمة البيئية البحرية لا يمكن إصلاحها إذا كانت المشكلات صغيرة، ولذلك يجب الانتظار حتى تصبح كوارث قبل استخدام الغرز في البيئة."
   ],a:2},
  {q:"Choose the CORRECT English translation:\nتكتّلت دول العالم معاً لإيجاد حلول فعّالة للتصدي لتحديات تغيّر المناخ، إذ يُشكّل ارتفاع درجات الحرارة تهديداً مباشراً للأنظمة البيئية والتنوع البيولوجي.",
   o:[
    "The nations of the world gathered to find efficient resolutions to resist climate difficulties, as the rising of temperatures represents a direct menace to biological systems.",
    "Countries around the world have united to find effective solutions to address the challenges of climate change, as rising temperatures pose a direct threat to ecosystems and biodiversity.",
    "World countries joined together to discover useful answers to face climate change challenges, as temperature raises threaten ecological systems and biological variety.",
    "Nations of the world combined to solve the problems of climate change effectively, because rising temperatures threatened both ecosystems and the diversity of life."
   ],a:1},
  {q:"Choose the CORRECT Arabic translation:\n\"Preserving ancient artifacts for future generations is a leading challenge for museums and historians today. These irreplaceable items provide a unique dimension to our understanding of human history.\"",
   o:[
    "الحفاظ على الآثار القديمة للأجيال القادمة يُعدّ من أبرز التحديات التي تواجه المتاحف والمؤرخين اليوم، وتوفر هذه القطع التي لا يمكن الاستغناء عنها بُعداً فريداً لفهمنا للتاريخ البشري.",
    "إن حفظ التحف القديمة للأجيال المقبلة هو أكبر تحدٍّ يواجه المتاحف، وتوفر هذه الأشياء المميزة دليلاً على تاريخ الإنسان.",
    "المتاحف والمؤرخون اليوم يواجهون تحديات كبيرة في الحفاظ على الآثار من الجيل القادم، وهذه الآثار تقدم تفسيراً واحداً للتاريخ البشري.",
    "الآثار القديمة ليست مهمة للمتاحف لأنه يمكن الاستغناء عنها، لكنها تقدم بُعداً مختلفاً لفهم التاريخ البشري."
   ],a:0},
  {q:"Choose the CORRECT English translation:\nتتطلب كتابة قصة قصيرة ناجحة توازناً دقيقاً بين الوصف للأحداث وبناء الشخصيات بطريقة تثير تعاطف القارئ واهتمامه.",
   o:[
    "Precise description of characters requires a short story to be successful and balanced between events and sparks of empathy.",
    "Writing a successful short story requires a balance between precise description of events and building characters in a way that sparks the reader's empathy and interest.",
    "Empathy and interest spark the balance of short stories which write characters and description of precise events.",
    "A successful short story is a balance between characters and building the precise description of empathy and interest events."
   ],a:1},
  {q:"Choose the CORRECT Arabic translation:\n\"As cities expand and farmland becomes scarce, scientists are developing new methods of food production. One innovative solution is vertical farming, a system in which crops are grown in stacked layers inside controlled environments.\"",
   o:[
    "مع توسع المدن وشح الأراضي الزراعية، يطور العلماء طرقاً جديدة لإنتاج الغذاء. ومن الحلول المبتكرة الزراعة الرأسية، وهي نظام تُزرع فيه المحاصيل في طبقات متراكبة داخل بيئات خاضعة للسيطرة.",
    "مع نمو المدن وندرة الأراضي الزراعية، يبحث العلماء عن طرق قديمة لإنتاج الغذاء. ومن الحلول التقليدية الزراعة الأفقية، وهي نظام تُزرع فيه المحاصيل في طبقات منفصلة داخل بيئات مفتوحة.",
    "بينما تتوسع المدن وتزداد الأراضي الزراعية، يطور العلماء طرقاً جديدة لتوزيع الغذاء. والزراعة الرأسية هي نظام ابتكاري تُزرع فيه المحاصيل في طبقات داخل بيئات مفتوحة.",
    "مع تقلص المدن وزيادة الأراضي الزراعية، يطور العلماء طرقاً حديثة لاستهلاك الغذاء في الطوابق العليا من المباني الخاضعة للسيطرة."
   ],a:0},
  {q:"Choose the CORRECT English translation:\nتُعدّ الإنسانية على أعتاب ثورة تكنولوجية غير مسبوقة، إذ تتشابك الأنظمة الرقمية مع الواقع المادي بشكل متزايد، مما يستدعي إعادة النظر في المفاهيم التقليدية للعمل والتعليم والهوية البشرية.",
   o:[
    "Humanity is on the threshold of an unprecedented technological revolution, where digital systems are increasingly intertwining with physical reality, necessitating a reconsideration of traditional concepts of work, education, and human identity.",
    "Humanity stands before a new technological era where digital and physical systems work together, and this requires changing all traditional concepts about work, education, and human identity.",
    "The world is witnessing a technological revolution that mixes digital systems with the physical world, which means that work, education, and human identity will completely disappear.",
    "Humanity is starting a technological revolution where digital systems replace physical reality, requiring humans to abandon traditional work, education, and their identity."
   ],a:0},
  {q:"Choose the CORRECT Arabic translation:\n\"Every year, millions of tons of plastic enter the world's oceans, but the most dangerous form might be the one we can barely see: microplastics.\"",
   o:[
    "كل عام، تدخل ملايين الأطنان من البلاستيك إلى محيطات العالم، لكن الشكل الأكثر خطورة قد يكون الذي نكاد لا نراه: الميكروبلاستيك.",
    "كل عام، يصنع الناس ملايين الأطنان من البلاستيك ويرمونها في البحر، وأكثرها خطورة ما يمكن رؤيته بسهولة.",
    "يُعدّ البلاستيك الصغير جداً الأقل خطورة لأنه يذوب في الماء بشكل طبيعي كل عام.",
    "دخول ملايين الأطنان من البلاستيك إلى المحيطات أمر مفيد لأنه يصنع طبقة واقية للأسماك."
   ],a:0},
  {q:"Choose the CORRECT English translation:\nتُعدّ قضية حماية البيانات الشخصية من أبرز التحديات القانونية في عصر الذكاء الاصطناعي، حيث يصعب تحديد الحدود الفاصلة بين الاستخدام المشروع للمعلومات وانتهاك الخصوصية الفردية.",
   o:[
    "The issue of protecting personal data is considered one of the most prominent legal challenges in the age of artificial intelligence, where it is difficult to define the boundaries between legitimate use of information and violation of individual privacy.",
    "Personal data protection is a new challenge that only concerns big companies in the digital age, as there is no clear law to separate legal use of information from privacy.",
    "Artificial intelligence makes it easy to protect personal data because it can automatically define what is legitimate use and what violates individual privacy.",
    "The legal challenges of artificial intelligence include creating personal data and using it to define boundaries between individuals."
   ],a:0},
  {q:"Choose the CORRECT Arabic translation:\n\"The meeting with Abbé Faria was a turning point in Edmond's life in the prison.\"",
   o:[
    "كان لقاء إدموند مع الأب فاريا في السجن بداية رحلة جديدة له خارج القضبان.",
    "أثّرت رسالة الأب فاريا في حياة إدموند بعد خروجه من السجن.",
    "كان لقاؤه بالأب فاريا نقطة تحوّل في حياة إدموند داخل السجن.",
    "التقى إدموند بالأب فاريا وقرر الانتقام من كل من تسبب في سجنه."
   ],a:2},
  {q:"Choose the CORRECT English translation:\nقدّمت الثورة الصناعية إسهامات جوهرية في تطور الاقتصاد العالمي، غير أنها خلّفت تداعيات بيئية واجتماعية بالغة الخطورة لا تزال تُلقي بظلالها على حاضرنا.",
   o:[
    "The Industrial Revolution made fundamental contributions to the development of the global economy, but it left serious environmental and social consequences that still cast their shadow on our present.",
    "The Industrial Revolution contributed to destroying the global economy and left positive environmental and social effects that improved our present situation.",
    "Thanks to the Industrial Revolution, the global economy improved significantly, and all environmental and social problems were solved immediately after it ended.",
    "The Industrial Revolution had no real effect on the global economy but created many environmental benefits that we still enjoy today."
   ],a:0},
  {q:"Choose the CORRECT Arabic translation:\n\"Knowledge is power — a principle that guided Abbé Faria throughout his imprisonment.\"",
   o:[
    "المعرفة قوة — مبدأ وجّه الأب فاريا طوال فترة سجنه.",
    "القوة هي المعرفة — وهذا ما جعل الأب فاريا يتمكن من الهروب من السجن.",
    "علّم الأب فاريا إدموند أن المعرفة لا فائدة منها داخل السجن.",
    "المعرفة والقوة مبدآن اكتشفهما الأب فاريا بعد خروجه من السجن."
   ],a:0},
  {q:"Choose the CORRECT English translation:\nأسهمت تكنولوجيا المعلومات في تقريب المسافات بين الشعوب وفتحت آفاقاً جديدة للتواصل والتعاون، لكنها في الوقت ذاته أفرزت تحديات أخلاقية وثقافية معقدة.",
   o:[
    "Information technology has contributed to bridging the distances between peoples and opened new horizons for communication and cooperation, but at the same time it has created complex ethical and cultural challenges.",
    "Information technology brought people together by reducing distances and created simple ethical and cultural issues that were easily solved.",
    "Information technology opened new ways for communication but closed all opportunities for cultural cooperation between peoples.",
    "People use information technology to increase cultural distances and create ethical challenges that benefit society."
   ],a:0},
  {q:"Choose the CORRECT Arabic translation:\n\"Edmond's transformation from a naive young sailor into the powerful Count of Monte Cristo is driven by betrayal, suffering, and an unwavering desire for justice.\"",
   o:[
    "تحوّل إدموند من بحار شاب بسيط إلى الكونت القدير دي مونتي كريستو مدفوعاً بالخيانة والعذاب ورغبة راسخة في العدالة.",
    "تحوّل إدموند من كونت مونتي كريستو إلى بحار بريء بسبب الخيانة والعذاب ورغبته في الانتقام.",
    "إدموند أصبح قوياً بعد سنوات من العمل كبحار، وساعده ذلك على تجنب الخيانة وتحقيق العدالة.",
    "قرر إدموند أن يتحول من بحار إلى كونت بعد أن تعلم من أخطاء الخيانة والمعاناة."
   ],a:0},
  {q:"Choose the CORRECT English translation:\nنقلت الفتاة الريفية المنعزلة حزنها وألمها في أغنية عذبة ذات جمال ساحر، رغم أن الشاعر لم يفهم كلمة واحدة مما كانت تترنم به.",
   o:[
    "The solitary highland girl expressed her sorrow and pain in a sweet song of enchanting beauty, even though the poet did not understand a single word of what she was singing.",
    "The lonely village girl sang a sad song that the poet understood completely, and it filled his heart with joy.",
    "The poet sang with the highland girl and understood all the words of her beautiful and enchanting song.",
    "The girl from the countryside refused to sing in front of the poet, though her voice was beautiful and full of emotion."
   ],a:0},
  {q:"Choose the CORRECT Arabic translation:\n\"The renewable energy sector is growing at an unprecedented rate, with solar and wind power becoming increasingly competitive with traditional fossil fuels.\"",
   o:[
    "قطاع الطاقة المتجددة ينمو بمعدل غير مسبوق، إذ باتت طاقة الشمس والرياح تنافس بشكل متزايد الوقود الأحفوري التقليدي.",
    "يعتمد قطاع الطاقة المتجددة على الطاقة الشمسية والرياح فقط، وهو ما يجعله أقل تنافسية من الوقود الأحفوري.",
    "الطاقة التقليدية تنمو بسرعة غير مسبوقة بينما تتراجع الطاقة الشمسية وطاقة الرياح بشكل مستمر.",
    "مصادر الطاقة المتجددة ليست قادرة على منافسة الوقود الأحفوري التقليدي رغم نموها السريع."
   ],a:0},
  {q:"Choose the CORRECT English translation:\nأعلنت الحكومة عن خطة طموحة لتحديث البنية التحتية للنقل في البلاد خلال السنوات العشر القادمة، تشمل إنشاء شبكة من القطارات فائقة السرعة وتطوير المطارات الرئيسية.",
   o:[
    "The government announced an ambitious plan to modernize the country's transport infrastructure over the next ten years, including building a network of high-speed trains and developing major airports.",
    "The government planned to build transport infrastructure in ten years by buying high-speed trains and closing major airports for renovation.",
    "An ambitious announcement was made about the country's transport plan, which includes delaying the construction of high-speed trains and airports.",
    "The government's ten-year plan focuses only on developing airports and does not include any plans for high-speed train networks."
   ],a:0},
  {q:"Choose the CORRECT Arabic translation:\n\"The water cycle is a delicate balance that sustains all life on Earth.\"",
   o:[
    "دورة المياه ميزان دقيق يُبقي الحياة على الأرض مستمرة.",
    "توازن الماء مهم لأن دورة الحياة على الأرض تعتمد على التوازن الدقيق.",
    "دورة المياه تُعيد توازن الأرض وتُحسّن جودة الحياة البشرية فقط.",
    "الحياة على الأرض تعتمد على المياه التي تسقط من السماء بشكل منتظم."
   ],a:0},
  {q:"Choose the CORRECT English translation:\nالنشاط البشري المتزايد هو السبب الرئيسي لتدهور التنوع البيولوجي على كوكب الأرض، مما يُهدد التوازن الدقيق للنظم البيئية التي تعتمد عليها جميع أشكال الحياة.",
   o:[
    "Increasing human activity is the main cause of the deterioration of biodiversity on planet Earth, threatening the delicate balance of ecosystems on which all forms of life depend.",
    "Human activity has improved biodiversity on Earth by creating new ecosystems that support different forms of life.",
    "The main reason for biodiversity is human activity, which created the delicate balance of ecosystems that support all life on Earth.",
    "Biodiversity is threatened only by natural disasters, not by human activity, and this affects the balance of ecosystems."
   ],a:0},
  {q:"Choose the CORRECT Arabic translation:\n\"Abbé Faria's lessons transformed Edmond from an uneducated sailor into a learned and resourceful man capable of remarkable achievements.\"",
   o:[
    "أحالت دروس الأب فاريا إدموند من ملاح أمي إلى رجل متعلم ذي حيلة قادر على تحقيق إنجازات مذهلة.",
    "علّم الأب فاريا إدموند كيف يهرب من السجن وكيف يصبح بحاراً ذا مهارة.",
    "حوّل إدموند الأب فاريا من رجل متعلم إلى بحار مبدع قادر على فعل المستحيل.",
    "أدرك إدموند بعد دروس الأب فاريا أنه لا فائدة من التعلم في السجن."
   ],a:0},
  {q:"Choose the CORRECT English translation:\nيُعاني كوكب الأرض من أزمة مناخية حادة تتجلى في ارتفاع مستويات البحار وتزايد حدة الظواهر الجوية المتطرفة، مما يُحتّم على المجتمع الدولي اتخاذ إجراءات عاجلة وشاملة.",
   o:[
    "Planet Earth is suffering from a severe climate crisis manifested in rising sea levels and increasing extreme weather events, necessitating urgent and comprehensive measures from the international community.",
    "The Earth is experiencing a climate crisis only in some regions, with sea levels rising slowly and extreme weather happening rarely.",
    "Rising sea levels and extreme weather are signs of progress in climate science that require minimal international action.",
    "The international community believes that climate change is not a crisis and does not require any immediate action."
   ],a:0},
  {q:"Choose the CORRECT Arabic translation:\n\"The Château d'If became both a prison for his body and, paradoxically, a school for his mind.\"",
   o:[
    "أصبح قصر إيف سجناً لجسد إدموند ومدرسة لعقله في الوقت ذاته، وهو أمر مفارق للمنطق.",
    "كان قصر إيف مدرسة أصبحت سجناً بسبب الخيانة والحسد.",
    "تحوّل قصر إيف من سجن مريح إلى مدرسة صعبة بعد لقاء إدموند بالأب فاريا.",
    "أراد إدموند أن يُحوّل قصر إيف من سجن إلى مدرسة لتعليم المساجين."
   ],a:0},
  {q:"Choose the CORRECT English translation:\nتشير الأبحاث الحديثة إلى أن الذكاء الاصطناعي يمكنه مضاعفة إنتاجية العمال في مجالات عديدة، لكنه يثير في الوقت ذاته مخاوف جدية بشأن مستقبل فرص العمل التقليدية.",
   o:[
    "Recent research suggests that artificial intelligence can double the productivity of workers in many fields, but at the same time raises serious concerns about the future of traditional job opportunities.",
    "Modern research shows that artificial intelligence reduces worker productivity while creating new traditional jobs.",
    "Artificial intelligence was created by researchers to eliminate traditional jobs and replace them with digital workers.",
    "Recent research confirms that artificial intelligence has no effect on worker productivity or on traditional job opportunities."
   ],a:0},
  {q:"Choose the CORRECT Arabic translation:\n\"The solar panels on the roof of the school generate enough electricity to power all its classrooms and laboratories.\"",
   o:[
    "تُولّد الألواح الشمسية المثبتة على سطح المدرسة كهرباء كافية لتشغيل جميع فصولها الدراسية ومختبراتها.",
    "تقوم المدرسة بشراء ألواح شمسية لتوليد الكهرباء اللازمة لبعض المختبرات فقط.",
    "تستخدم المدرسة الطاقة الشمسية لتوفير الكهرباء للمدينة بأكملها وليس للمدرسة فقط.",
    "الألواح الشمسية على سطح المدرسة تستهلك طاقة كهربائية كافية لتشغيل الفصول والمختبرات."
   ],a:0},
  {q:"Choose the CORRECT English translation:\nأقامت المنظمة الدولية ندوة علمية لبحث آخر المستجدات في مجال علم الأعصاب واستخدام التقنيات الحديثة في علاج الاضطرابات النفسية.",
   o:[
    "The international organisation held a scientific seminar to discuss the latest developments in neuroscience and the use of modern techniques in treating psychological disorders.",
    "An international organisation organised a scientific competition to test the latest discoveries in psychology and the use of old techniques in neuroscience.",
    "The international seminar focused on criticising the latest developments in psychology and rejecting the use of modern technology in treating mental illness.",
    "The international organisation called for stopping the use of modern techniques in neuroscience to protect patients from psychological disorders."
   ],a:0},
  {q:"Choose the CORRECT Arabic translation:\n\"In 'The Solitary Reaper', Wordsworth is so enchanted by the girl's song that he carries its music in his heart long after leaving the field.\"",
   o:[
    "في قصيدة الحاصدة المنعزلة، أُعجب ووردزورث بأغنية الفتاة إلى حد أنه حمل موسيقاها في قلبه طويلاً بعد مغادرة الحقل.",
    "في قصيدة الحاصدة المنعزلة، حاول ووردزورث أن يفهم كلمات أغنية الفتاة ولكنه لم يستطع، فتركها في الحقل.",
    "كان ووردزورث يكره أغنية الفتاة الحاصدة لكنه تذكرها لسنوات طويلة بعد مغادرته الحقل.",
    "أغنية الفتاة الحاصدة لم تؤثر في قلب ووردزورث لأنه لم يفهم كلماتها."
   ],a:0},
  {q:"Choose the CORRECT English translation:\nيسعى الإنسان منذ فجر التاريخ إلى فهم أسرار الكون والتعمق في ظواهره الغامضة، وقد أسهمت الاكتشافات العلمية الحديثة في كشف الكثير من الحقائق التي ظلت مجهولة لقرون طويلة.",
   o:[
    "Since the dawn of history, humans have sought to understand the secrets of the universe and delve into its mysterious phenomena, and modern scientific discoveries have contributed to revealing many truths that remained unknown for long centuries.",
    "Humans started understanding the secrets of the universe only after modern science was invented, and all ancient phenomena were completely understood immediately.",
    "Modern scientific discoveries have made the universe more mysterious, and humans are still unable to understand any of its phenomena.",
    "Since ancient times, humans believed that the universe had no secrets, and modern science has confirmed that all phenomena are simple and easy to understand."
   ],a:0},
  {q:"Choose the CORRECT Arabic translation:\n\"The digital divide between developed and developing countries remains one of the most significant barriers to achieving global educational equality.\"",
   o:[
    "تبقى الفجوة الرقمية بين الدول المتقدمة والنامية من أبرز العوائق التي تحول دون تحقيق المساواة التعليمية على المستوى العالمي.",
    "الدول النامية هي الأكثر تطوراً رقمياً، مما يجعل تحقيق المساواة التعليمية أمراً سهلاً.",
    "المساواة التعليمية على المستوى العالمي حُقّقت بالفعل بفضل التكنولوجيا الرقمية.",
    "الفجوة الرقمية لا تؤثر على التعليم لأن جميع الدول لديها نفس مستوى التطور التكنولوجي."
   ],a:0},
  {q:"Choose the CORRECT English translation:\nأبدت الدول الأعضاء في مجلس الأمن قلقها البالغ إزاء التصعيد العسكري في المنطقة، مطالبةً بوقف فوري لإطلاق النار والعودة إلى طاولة المفاوضات.",
   o:[
    "The member states of the Security Council expressed their deep concern about the military escalation in the region, calling for an immediate ceasefire and a return to the negotiating table.",
    "The Security Council members supported the military escalation and called on both sides to stop negotiations immediately.",
    "Security Council member states were not concerned about the military situation and called for more military operations in the region.",
    "The Security Council called for military escalation in the region and rejected all attempts at a ceasefire."
   ],a:0},
  {q:"Choose the CORRECT Arabic translation:\n\"In 'Bed in Summer', the child envies grown-ups who can stay outside long after sunset.\"",
   o:[
    "في قصيدة السرير في الصيف، يغار الطفل من الكبار الذين يمكنهم البقاء خارج البيت بعد مغيب الشمس بوقت طويل.",
    "في قصيدة السرير في الصيف، يكره الطفل الكبار لأنهم ينامون مبكراً ويتركونه يلعب وحده.",
    "في قصيدة السرير في الصيف، يحب الطفل النوم مبكراً لأن الظلام يخيفه.",
    "في قصيدة السرير في الصيف، يطلب الطفل من الكبار أن يناموا معه في وقت مبكر."
   ],a:0},
  {q:"Choose the CORRECT English translation:\nعلى مرّ القرون، كانت الحضارات العظيمة تتنافس على السيطرة على طرق التجارة الدولية، إذ كان التحكم في هذه الطرق يعني القدرة على التأثير في الاقتصاد العالمي.",
   o:[
    "Throughout the centuries, great civilisations competed to control international trade routes, as controlling these routes meant the ability to influence the global economy.",
    "Ancient civilisations avoided trade routes because controlling them was considered dangerous for the economy.",
    "Great civilisations created trade routes only to help smaller nations and had no interest in controlling the global economy.",
    "Trade routes were always controlled by small civilisations that had no influence on the global economy."
   ],a:0},
  {q:"Choose the CORRECT Arabic translation:\n\"The teacher encouraged her students to think critically about the information they find online rather than accepting it without question.\"",
   o:[
    "شجّعت المعلمة طلابها على التفكير النقدي في المعلومات التي يجدونها على الإنترنت بدلاً من قبولها دون تساؤل.",
    "طلبت المعلمة من طلابها عدم استخدام الإنترنت والاعتماد فقط على الكتب المدرسية.",
    "نصحت المعلمة طلابها بقبول كل المعلومات التي يجدونها على الإنترنت دون التفكير فيها.",
    "المعلمة لا تشجع طلابها على التفكير النقدي لأن المعلومات على الإنترنت دائماً صحيحة."
   ],a:0},
  {q:"Choose the CORRECT English translation:\nالغابات المطيرة هي رئة كوكبنا، إذ توفر الأكسجين وتمتص ثاني أكسيد الكربون، وتحتضن أكثر من نصف أنواع الحيوانات والنباتات الموجودة على وجه الأرض.",
   o:[
    "Rainforests are the lungs of our planet, providing oxygen and absorbing carbon dioxide, and hosting more than half of the animal and plant species found on Earth.",
    "Rainforests destroy oxygen and produce carbon dioxide, which is why they are home to most of the animal species on Earth.",
    "Rainforests are useful only because they absorb oxygen and provide carbon dioxide to animals and plants on Earth.",
    "Most animal and plant species live outside rainforests, which produce very little oxygen for the planet."
   ],a:0},
  {q:"Choose the CORRECT Arabic translation:\n\"Danglars' jealousy and Fernand's obsession with Mercédès were the two destructive forces that conspired to destroy Edmond's happiness.\"",
   o:[
    "كانت غيرة دانغلار وهوس فرناند بمرسيدس هما القوتان المدمّرتان اللتان تآمرتا على تدمير سعادة إدموند.",
    "تآمر إدموند مع دانغلار وفرناند لإبعاد مرسيدس عن حياتهم جميعاً.",
    "كانت مرسيدس السبب الرئيسي في غيرة دانغلار وفرناند من بعضهما البعض.",
    "قرر دانغلار وفرناند مساعدة إدموند على تحقيق سعادته بالرغم من غيرتهما منه."
   ],a:0},
  {q:"Choose the CORRECT English translation:\nرصدت الأقمار الصناعية ارتفاعاً ملحوظاً في درجات الحرارة في القطب الشمالي خلال العقود الأخيرة، مما يُشير إلى تسارع وتيرة ذوبان الجليد بشكل غير مسبوق.",
   o:[
    "Satellites have detected a notable rise in temperatures in the Arctic over recent decades, indicating an unprecedented acceleration in the rate of ice melting.",
    "Satellites showed that Arctic temperatures have been decreasing in recent decades, which has slowed down the melting of ice.",
    "The rise in Arctic temperatures was discovered only recently and has no connection to the melting of polar ice.",
    "Ice in the Arctic has been increasing in recent decades due to the rise in temperatures detected by satellites."
   ],a:0},
  {q:"Choose the CORRECT Arabic translation:\n\"The hospital administration has been talking about upgrading the emergency department for months, but they have not made a final decision yet.\"",
   o:[
    "تحدثت إدارة المستشفى عن تطوير قسم الطوارئ لأشهر، لكنها لم تتخذ قراراً نهائياً حتى الآن.",
    "اتخذت إدارة المستشفى قراراً نهائياً بتطوير قسم الطوارئ بعد أشهر من النقاش.",
    "قسم الطوارئ في المستشفى تم تطويره بالفعل بعد أشهر قليلة من المناقشة.",
    "رفضت إدارة المستشفى تطوير قسم الطوارئ بعد أشهر من النقاش الطويل."
   ],a:0},
  {q:"Choose the CORRECT English translation:\nيُمثّل الوعي البيئي الركيزة الأساسية لأي سياسة تنموية مستدامة، وينبغي أن يُدرَّس في جميع المراحل التعليمية.",
   o:[
    "Environmental awareness represents the fundamental pillar of any sustainable development policy, and should be taught at all educational levels.",
    "Environmental awareness is only important at university level and should not be included in school curricula.",
    "Sustainable development policies should avoid environmental awareness as it complicates decision-making.",
    "Environmental awareness should replace all other subjects in schools to ensure a sustainable future."
   ],a:0},
  {q:"Choose the CORRECT Arabic translation:\n\"For the past three decades, researchers have been working tirelessly to develop new treatments for patients with rare diseases, yet several conditions still lack a cure.\"",
   o:[
    "على مدار العقود الثلاثة الماضية، عمل الباحثون بلا كلل على تطوير علاجات جديدة لمرضى الأمراض النادرة، ومع ذلك لا تزال عدة حالات تفتقر إلى علاج.",
    "في خلال الثلاثين عاماً الماضية، اكتشف الباحثون علاجات لجميع الأمراض النادرة بعد عمل مضنٍ.",
    "الأمراض النادرة لا تزال عديمة العلاج لأن الباحثين توقفوا عن العمل منذ ثلاثين عاماً.",
    "يعمل الباحثون على إيجاد علاجات للأمراض الشائعة فقط ويتجاهلون الأمراض النادرة."
   ],a:0},
  {q:"Choose the CORRECT English translation:\nأثبتت الدراسات أن الأطفال الذين يقرؤون منذ سن مبكرة يُطوّرون مهارات تفكير نقدي أعلى وقدرة أكبر على التعاطف مع الآخرين مقارنةً بأقرانهم.",
   o:[
    "Studies have proven that children who read from an early age develop higher critical thinking skills and a greater ability to empathise with others compared to their peers.",
    "Studies show that reading from an early age reduces critical thinking skills in children but increases their ability to memorise information.",
    "Children who read from an early age develop social problems and find it difficult to communicate with their peers.",
    "Research suggests that reading has no significant effect on children's critical thinking or their ability to empathise with others."
   ],a:0},
  {q:"Choose the CORRECT Arabic translation:\n\"The Solitary Reaper's song could neither be translated nor truly explained; it could only be felt.\"",
   o:[
    "أغنية الحاصدة المنعزلة لم تكن قابلة للترجمة أو التفسير الحقيقي؛ لم يكن بالإمكان إلا الشعور بها.",
    "ترجم الشاعر أغنية الحاصدة إلى الإنجليزية وفسّر كل كلمة فيها بدقة متناهية.",
    "كانت أغنية الحاصدة سهلة الترجمة لكن الشاعر اختار عدم تفسيرها للقراء.",
    "رفض الشاعر الاستماع إلى أغنية الحاصدة لأنه لم يكن قادراً على الشعور بها."
   ],a:0},
  {q:"Choose the CORRECT English translation:\nقرر إدموند دانتيس الانتقام من كل من تآمر ضده، مستخدماً ثروته الطائلة وذكاءه الحاد أدواتين رئيسيتين في خطته المحكمة.",
   o:[
    "Edmond Dantès decided to take revenge on all those who conspired against him, using his vast fortune and sharp intelligence as the two main tools in his careful plan.",
    "Edmond Dantès forgave all those who betrayed him and used his fortune to help the poor instead of seeking revenge.",
    "Edmond Dantès decided to leave France and forget all those who conspired against him after becoming the Count of Monte Cristo.",
    "Edmond Dantès was too weak to seek revenge and gave all his fortune to charity after escaping from prison."
   ],a:0},
],

// ──────────────────────────────────────────────────────────────────
// 6. READING COMPREHENSION  (50 questions — passage-based)
// ──────────────────────────────────────────────────────────────────
reading: [
  // --- PASSAGE 1: Water Cycle ---
  {passage:"Every year, billions of gallons of water evaporate from the oceans, rivers, and lakes due to solar energy. This water vapour rises into the atmosphere, where it cools and condenses to form clouds. When enough water collects in clouds, it falls back to Earth as rain, snow, or hail — a process known as precipitation. This water then flows into rivers and oceans or soaks into the ground, replenishing underground water sources. Without this continuous cycle, life on Earth would be impossible, as it provides fresh water for plants, animals, and humans alike. However, climate change is disrupting the water cycle by increasing evaporation rates and altering precipitation patterns, leading to more frequent droughts in some areas and severe flooding in others.",
   q:"The main idea of this passage is that ________.",o:["The water cycle is a vital natural process","Clouds form when water vapour cools","Climate change is the main threat to humanity","Rain is the most important form of precipitation"],a:0},
  {passage:"Every year, billions of gallons of water evaporate from the oceans, rivers, and lakes due to solar energy. This water vapour rises into the atmosphere, where it cools and condenses to form clouds. When enough water collects in clouds, it falls back to Earth as rain, snow, or hail — a process known as precipitation. This water then flows into rivers and oceans or soaks into the ground, replenishing underground water sources. Without this continuous cycle, life on Earth would be impossible, as it provides fresh water for plants, animals, and humans alike. However, climate change is disrupting the water cycle by increasing evaporation rates and altering precipitation patterns, leading to more frequent droughts in some areas and severe flooding in others.",
   q:"According to the passage, what triggers the evaporation process?",o:["Wind energy","Solar energy","Gravitational pull","Ocean currents"],a:1},
  {passage:"Every year, billions of gallons of water evaporate from the oceans, rivers, and lakes due to solar energy. This water vapour rises into the atmosphere, where it cools and condenses to form clouds. When enough water collects in clouds, it falls back to Earth as rain, snow, or hail — a process known as precipitation. This water then flows into rivers and oceans or soaks into the ground, replenishing underground water sources. Without this continuous cycle, life on Earth would be impossible, as it provides fresh water for plants, animals, and humans alike. However, climate change is disrupting the water cycle by increasing evaporation rates and altering precipitation patterns, leading to more frequent droughts in some areas and severe flooding in others.",
   q:"The word 'replenishing' in the passage most likely means ________.",o:["polluting","emptying","refilling","heating"],a:2},
  {passage:"Every year, billions of gallons of water evaporate from the oceans, rivers, and lakes due to solar energy. This water vapour rises into the atmosphere, where it cools and condenses to form clouds. When enough water collects in clouds, it falls back to Earth as rain, snow, or hail — a process known as precipitation. This water then flows into rivers and oceans or soaks into the ground, replenishing underground water sources. Without this continuous cycle, life on Earth would be impossible, as it provides fresh water for plants, animals, and humans alike. However, climate change is disrupting the water cycle by increasing evaporation rates and altering precipitation patterns, leading to more frequent droughts in some areas and severe flooding in others.",
   q:"How does climate change affect the water cycle, according to the passage?",o:["It stops evaporation completely","It increases evaporation and alters precipitation patterns","It causes oceans to dry up permanently","It increases the amount of water in underground sources"],a:1},

  // --- PASSAGE 2: Microplastics ---
  {passage:"Every year, millions of tons of plastic enter the world's oceans, but the most dangerous form might be the one we can barely see: microplastics. These tiny particles, often less than five millimetres long, result from the breakdown of larger plastic items or are intentionally added to products like cosmetics. Because of their size, they are easily consumed by marine life, entering the food chain and eventually reaching human plates. The environmental impact is devastating. Marine animals often mistake these particles for food, leading to internal injuries or starvation. Scientists are also investigating the toxic chemicals that microplastics absorb from the water, which may pose health risks to humans who consume seafood. While some organisations are developing advanced filtration systems to capture these particles, environmentalists argue that the only real solution is to stop plastic pollution at its source.",
   q:"The main idea of the passage is that microplastics ________.",o:["are harmless particles found in water","are a serious environmental threat","are larger than most ocean waste","can easily be removed from oceans"],a:1},
  {passage:"Every year, millions of tons of plastic enter the world's oceans, but the most dangerous form might be the one we can barely see: microplastics. These tiny particles, often less than five millimetres long, result from the breakdown of larger plastic items or are intentionally added to products like cosmetics. Because of their size, they are easily consumed by marine life, entering the food chain and eventually reaching human plates. The environmental impact is devastating. Marine animals often mistake these particles for food, leading to internal injuries or starvation. Scientists are also investigating the toxic chemicals that microplastics absorb from the water, which may pose health risks to humans who consume seafood. While some organisations are developing advanced filtration systems to capture these particles, environmentalists argue that the only real solution is to stop plastic pollution at its source.",
   q:"Marine animals eat microplastics because they ________.",o:["need the toxic chemicals to grow faster","use the plastic to build homes under the water","are trained by scientists to clean the ocean","mistake them for their natural food"],a:3},
  {passage:"Every year, millions of tons of plastic enter the world's oceans, but the most dangerous form might be the one we can barely see: microplastics. These tiny particles, often less than five millimetres long, result from the breakdown of larger plastic items or are intentionally added to products like cosmetics. Because of their size, they are easily consumed by marine life, entering the food chain and eventually reaching human plates. The environmental impact is devastating. Marine animals often mistake these particles for food, leading to internal injuries or starvation. Scientists are also investigating the toxic chemicals that microplastics absorb from the water, which may pose health risks to humans who consume seafood. While some organisations are developing advanced filtration systems to capture these particles, environmentalists argue that the only real solution is to stop plastic pollution at its source.",
   q:"What is predicted to happen by 2040 if no action is taken about microplastics?",o:["The amount of plastic in the ocean will disappear","The amount of microplastics in the ocean could be three times higher","Fish will evolve to stop eating plastic particles","Single-use plastics will become much cheaper to produce"],a:1},
  {passage:"Every year, millions of tons of plastic enter the world's oceans, but the most dangerous form might be the one we can barely see: microplastics. These tiny particles, often less than five millimetres long, result from the breakdown of larger plastic items or are intentionally added to products like cosmetics. Because of their size, they are easily consumed by marine life, entering the food chain and eventually reaching human plates. The environmental impact is devastating. Marine animals often mistake these particles for food, leading to internal injuries or starvation. Scientists are also investigating the toxic chemicals that microplastics absorb from the water, which may pose health risks to humans who consume seafood. While some organisations are developing advanced filtration systems to capture these particles, environmentalists argue that the only real solution is to stop plastic pollution at its source.",
   q:"Contrast the solutions proposed by organisations and environmentalists.",o:["Organisations suggest filtration, while environmentalists focus on stopping pollution at its source","Environmentalists want to use more plastic, while organisations want to use less","Both groups believe that microplastics are not dangerous to humans","Organisations focus on the food chain, while environmentalists focus on cosmetics"],a:0},

  // --- PASSAGE 3: Vertical Farming ---
  {passage:"As cities expand and farmland becomes scarce, scientists are developing new methods of food production. One innovative solution is vertical farming, a system in which crops are grown in stacked layers inside controlled environments. These farms are often located in warehouses or high-rise buildings. Vertical farming uses advanced technology such as LED lighting and hydroponic systems, which allow plants to grow without soil. Water is recycled efficiently, reducing waste by up to 90% compared to traditional farming. In addition, crops are protected from extreme weather conditions, pests, and seasonal changes. Despite its advantages, vertical farming has challenges. The energy required for lighting and climate control can be expensive.",
   q:"The main idea of the passage is that vertical farming ________.",o:["is a high-cost method that will likely fail in urban areas","provides a technologically advanced way to address future food needs","is designed to replace traditional soil-based agriculture entirely","uses LED lighting to grow crops faster than natural sunlight"],a:1},
  {passage:"As cities expand and farmland becomes scarce, scientists are developing new methods of food production. One innovative solution is vertical farming, a system in which crops are grown in stacked layers inside controlled environments. These farms are often located in warehouses or high-rise buildings. Vertical farming uses advanced technology such as LED lighting and hydroponic systems, which allow plants to grow without soil. Water is recycled efficiently, reducing waste by up to 90% compared to traditional farming. In addition, crops are protected from extreme weather conditions, pests, and seasonal changes. Despite its advantages, vertical farming has challenges. The energy required for lighting and climate control can be expensive.",
   q:"How much water can vertical farming systems save compared to traditional methods?",o:["Up to 10%","Exactly 50%","Up to 90%","More than 95%"],a:2},
  {passage:"As cities expand and farmland becomes scarce, scientists are developing new methods of food production. One innovative solution is vertical farming, a system in which crops are grown in stacked layers inside controlled environments. These farms are often located in warehouses or high-rise buildings. Vertical farming uses advanced technology such as LED lighting and hydroponic systems, which allow plants to grow without soil. Water is recycled efficiently, reducing waste by up to 90% compared to traditional farming. In addition, crops are protected from extreme weather conditions, pests, and seasonal changes. Despite its advantages, vertical farming has challenges. The energy required for lighting and climate control can be expensive.",
   q:"Which sentence best summarises the third paragraph?",o:["Vertical farming is currently too expensive to try","Technological improvements have already solved the issue of high energy costs","Critics are pessimistic, while supporters are optimistic regarding the cost","Energy for climate control is the only reason vertical farming is better"],a:2},

  // --- PASSAGE 4: Preserving Ancient Artifacts ---
  {passage:"Preserving ancient artifacts for future generations is a leading challenge for museums and historians today. These irreplaceable items provide a unique dimension to our understanding of human history. However, their physical background is often fragile; many are made from sensitive materials that are highly susceptible to environmental changes. Museums employ sophisticated technology to slow down the decay process. Climate-controlled exhibits monitor humidity and temperature with flawless precision. In some cases, advanced 3D scanning is used to create digital transformation copies of the items, allowing researchers to study them without risking damage. The digital archiving of artifacts also makes them accessible to scholars worldwide, democratising access to historical knowledge.",
   q:"The word 'susceptible' in the passage most likely means ________.",o:["resistant to damage","easily affected by","completely immune from","carefully protected against"],a:1},
  {passage:"Preserving ancient artifacts for future generations is a leading challenge for museums and historians today. These irreplaceable items provide a unique dimension to our understanding of human history. However, their physical background is often fragile; many are made from sensitive materials that are highly susceptible to environmental changes. Museums employ sophisticated technology to slow down the decay process. Climate-controlled exhibits monitor humidity and temperature with flawless precision. In some cases, advanced 3D scanning is used to create digital transformation copies of the items, allowing researchers to study them without risking damage. The digital archiving of artifacts also makes them accessible to scholars worldwide, democratising access to historical knowledge.",
   q:"How does digital archiving benefit scholars worldwide?",o:["It replaces the need for physical museums entirely","It makes historical artifacts accessible to researchers everywhere","It destroys the original artifacts to create perfect digital copies","It limits access to artifacts to only well-funded institutions"],a:1},
  {passage:"Preserving ancient artifacts for future generations is a leading challenge for museums and historians today. These irreplaceable items provide a unique dimension to our understanding of human history. However, their physical background is often fragile; many are made from sensitive materials that are highly susceptible to environmental changes. Museums employ sophisticated technology to slow down the decay process. Climate-controlled exhibits monitor humidity and temperature with flawless precision. In some cases, advanced 3D scanning is used to create digital transformation copies of the items, allowing researchers to study them without risking damage. The digital archiving of artifacts also makes them accessible to scholars worldwide, democratising access to historical knowledge.",
   q:"What is the purpose of climate-controlled exhibits in museums?",o:["To display artifacts in an attractive way","To make artifacts look newer","To slow down the natural decay of artifacts","To increase the number of visitors to museums"],a:2},

  // --- PASSAGE 5: AI in Education ---
  {passage:"Artificial intelligence is rapidly transforming the education sector. AI-powered platforms can analyse students' performance data and provide personalised learning experiences tailored to individual needs and learning styles. This means that a student struggling with mathematics can receive additional practice materials, while an advanced learner can be challenged with more complex problems. Supporters argue that AI democratises education by giving all students access to high-quality, customised support regardless of their location or economic background. Critics, however, warn that over-dependence on AI could reduce meaningful human interaction in classrooms and raise concerns about data privacy. They also worry that students in less developed regions may lack the technological infrastructure necessary to benefit from AI tools.",
   q:"What is the main advantage of AI in education, according to supporters?",o:["It replaces teachers completely in the classroom","It only works during school hours","It provides personalised support to all students regardless of location","It requires constant internet connection to function"],a:2},
  {passage:"Artificial intelligence is rapidly transforming the education sector. AI-powered platforms can analyse students' performance data and provide personalised learning experiences tailored to individual needs and learning styles. This means that a student struggling with mathematics can receive additional practice materials, while an advanced learner can be challenged with more complex problems. Supporters argue that AI democratises education by giving all students access to high-quality, customised support regardless of their location or economic background. Critics, however, warn that over-dependence on AI could reduce meaningful human interaction in classrooms and raise concerns about data privacy. They also worry that students in less developed regions may lack the technological infrastructure necessary to benefit from AI tools.",
   q:"The word 'customised' in paragraph 1 most likely means ________.",o:["identical for every student","random and unplanned","difficult to understand","adapted to individual needs"],a:3},
  {passage:"Artificial intelligence is rapidly transforming the education sector. AI-powered platforms can analyse students' performance data and provide personalised learning experiences tailored to individual needs and learning styles. This means that a student struggling with mathematics can receive additional practice materials, while an advanced learner can be challenged with more complex problems. Supporters argue that AI democratises education by giving all students access to high-quality, customised support regardless of their location or economic background. Critics, however, warn that over-dependence on AI could reduce meaningful human interaction in classrooms and raise concerns about data privacy. They also worry that students in less developed regions may lack the technological infrastructure necessary to benefit from AI tools.",
   q:"What can happen if schools adopt AI without considering the critics' concerns?",o:["There may be negative effects on students' social skills","Students will immediately become better learners","All educational problems will be solved permanently","Teachers will have nothing left to do in classrooms"],a:0},
  {passage:"Artificial intelligence is rapidly transforming the education sector. AI-powered platforms can analyse students' performance data and provide personalised learning experiences tailored to individual needs and learning styles. This means that a student struggling with mathematics can receive additional practice materials, while an advanced learner can be challenged with more complex problems. Supporters argue that AI democratises education by giving all students access to high-quality, customised support regardless of their location or economic background. Critics, however, warn that over-dependence on AI could reduce meaningful human interaction in classrooms and raise concerns about data privacy. They also worry that students in less developed regions may lack the technological infrastructure necessary to benefit from AI tools.",
   q:"Which statement accurately describes both supporters and critics' attitudes?",o:["Both supporters and critics agree that AI should replace teachers","Supporters seek accessibility, while critics worry about interaction and privacy","Critics believe AI has no benefits whatsoever for education","Supporters ignore all concerns about technology in schools"],a:1},

  // --- PASSAGE 6: The Giver and The Taker ---
  {passage:"Have you ever suspected your friend of having two personalities; one that is caring and considerate and one that seems impossible to get along with? I'm sure you've not only noticed, but you've probably been horrified by the impossible one. I call these two personalities the Giver and the Taker. The Giver is the part of you that follows the rule: do whatever you can to make the other person happy and avoid anything that makes him unhappy, even if it makes you unhappy. It's the part of you that wants to make a difference in the lives of others. But the Giver is only half of the story. In life, our Givers and Takers usually solve problems together. They recognise our need to give and take. When the Giver is in charge, we are loving and considerate. But when the Taker is in charge, we are rude, demanding and inconsiderate.",
   q:"The taker is rude, that means he seems to think about ________.",o:["himself","others","the giver","things"],a:0},
  {passage:"Have you ever suspected your friend of having two personalities; one that is caring and considerate and one that seems impossible to get along with? I'm sure you've not only noticed, but you've probably been horrified by the impossible one. I call these two personalities the Giver and the Taker. The Giver is the part of you that follows the rule: do whatever you can to make the other person happy and avoid anything that makes him unhappy, even if it makes you unhappy. It's the part of you that wants to make a difference in the lives of others. But the Giver is only half of the story. In life, our Givers and Takers usually solve problems together. They recognise our need to give and take. When the Giver is in charge, we are loving and considerate. But when the Taker is in charge, we are rude, demanding and inconsiderate.",
   q:"'________' tries to stand beside others.",o:["The selfish","The giver","The taker","The inconsiderate"],a:1},
  {passage:"Have you ever suspected your friend of having two personalities; one that is caring and considerate and one that seems impossible to get along with? I'm sure you've not only noticed, but you've probably been horrified by the impossible one. I call these two personalities the Giver and the Taker. The Giver is the part of you that follows the rule: do whatever you can to make the other person happy and avoid anything that makes him unhappy, even if it makes you unhappy. It's the part of you that wants to make a difference in the lives of others. But the Giver is only half of the story. In life, our Givers and Takers usually solve problems together. They recognise our need to give and take. When the Giver is in charge, we are loving and considerate. But when the Taker is in charge, we are rude, demanding and inconsiderate.",
   q:"What does 'they' in the second paragraph refer to?",o:["givers","problems","givers and takers","stories"],a:2},
  {passage:"Have you ever suspected your friend of having two personalities; one that is caring and considerate and one that seems impossible to get along with? I'm sure you've not only noticed, but you've probably been horrified by the impossible one. I call these two personalities the Giver and the Taker. The Giver is the part of you that follows the rule: do whatever you can to make the other person happy and avoid anything that makes him unhappy, even if it makes you unhappy. It's the part of you that wants to make a difference in the lives of others. But the Giver is only half of the story. In life, our Givers and Takers usually solve problems together. They recognise our need to give and take. When the Giver is in charge, we are loving and considerate. But when the Taker is in charge, we are rude, demanding and inconsiderate.",
   q:"The writer thinks that every person ________.",o:["has two personalities","has only one character","has only advantages","has three personalities"],a:0},

  // --- PASSAGE 7: Renewable Energy ---
  {passage:"The renewable energy sector is growing at an unprecedented rate. Solar and wind power are becoming increasingly competitive with traditional fossil fuels. In 2023, renewable energy sources accounted for over 30% of global electricity generation, a figure that experts predict will double by 2035. Governments around the world are investing heavily in solar panels, wind turbines, and battery storage technology. However, challenges remain. The intermittent nature of solar and wind power means that energy storage solutions are critical. Without reliable battery systems, excess energy generated during sunny or windy periods is wasted. Additionally, the transition from fossil fuels to renewables requires significant investment in infrastructure, retraining workers, and updating electrical grids.",
   q:"What percentage of global electricity came from renewable sources in 2023?",o:["Over 10%","Over 20%","Over 30%","Over 50%"],a:2},
  {passage:"The renewable energy sector is growing at an unprecedented rate. Solar and wind power are becoming increasingly competitive with traditional fossil fuels. In 2023, renewable energy sources accounted for over 30% of global electricity generation, a figure that experts predict will double by 2035. Governments around the world are investing heavily in solar panels, wind turbines, and battery storage technology. However, challenges remain. The intermittent nature of solar and wind power means that energy storage solutions are critical. Without reliable battery systems, excess energy generated during sunny or windy periods is wasted. Additionally, the transition from fossil fuels to renewables requires significant investment in infrastructure, retraining workers, and updating electrical grids.",
   q:"What is the main challenge facing solar and wind power?",o:["They are too expensive to build","Their energy output is intermittent and storage is difficult","They require too many workers to operate","Governments do not support renewable energy"],a:1},
  {passage:"The renewable energy sector is growing at an unprecedented rate. Solar and wind power are becoming increasingly competitive with traditional fossil fuels. In 2023, renewable energy sources accounted for over 30% of global electricity generation, a figure that experts predict will double by 2035. Governments around the world are investing heavily in solar panels, wind turbines, and battery storage technology. However, challenges remain. The intermittent nature of solar and wind power means that energy storage solutions are critical. Without reliable battery systems, excess energy generated during sunny or windy periods is wasted. Additionally, the transition from fossil fuels to renewables requires significant investment in infrastructure, retraining workers, and updating electrical grids.",
   q:"The word 'intermittent' in the passage most likely means ________.",o:["constant and reliable","not continuous; happening at irregular intervals","very powerful and efficient","extremely dangerous and unpredictable"],a:1},

  // --- PASSAGE 8: Digital Literacy ---
  {passage:"In today's world, digital literacy is no longer a luxury but a necessity. The ability to evaluate online information critically is one of the most important skills a modern citizen can possess. With the rise of social media, misinformation spreads at an alarming rate, and those who lack digital literacy skills are particularly vulnerable. Studies have shown that people are more likely to share false information when it confirms their existing beliefs, a phenomenon known as confirmation bias. Schools and governments must work together to incorporate digital literacy into national curricula. Teaching students how to identify credible sources, detect fake news, and understand online privacy will prepare them for responsible citizenship in the digital age.",
   q:"The main idea of the passage is that ________.",o:["Social media is always dangerous for young people","Digital literacy is an essential skill for modern citizens","Governments should ban social media to stop misinformation","False news is only shared by people who are uneducated"],a:1},
  {passage:"In today's world, digital literacy is no longer a luxury but a necessity. The ability to evaluate online information critically is one of the most important skills a modern citizen can possess. With the rise of social media, misinformation spreads at an alarming rate, and those who lack digital literacy skills are particularly vulnerable. Studies have shown that people are more likely to share false information when it confirms their existing beliefs, a phenomenon known as confirmation bias. Schools and governments must work together to incorporate digital literacy into national curricula. Teaching students how to identify credible sources, detect fake news, and understand online privacy will prepare them for responsible citizenship in the digital age.",
   q:"'Confirmation bias' as explained in the passage means ________.",o:["sharing accurate news to confirm facts","sharing false information that agrees with what one already believes","being unable to use social media correctly","teaching people to think critically about news"],a:1},
  {passage:"In today's world, digital literacy is no longer a luxury but a necessity. The ability to evaluate online information critically is one of the most important skills a modern citizen can possess. With the rise of social media, misinformation spreads at an alarming rate, and those who lack digital literacy skills are particularly vulnerable. Studies have shown that people are more likely to share false information when it confirms their existing beliefs, a phenomenon known as confirmation bias. Schools and governments must work together to incorporate digital literacy into national curricula. Teaching students how to identify credible sources, detect fake news, and understand online privacy will prepare them for responsible citizenship in the digital age.",
   q:"According to the passage, how should society address the spread of misinformation?",o:["By banning social media platforms entirely","By incorporating digital literacy into school curricula","By punishing people who share false information","By reducing students' access to the internet"],a:1},

  // --- PASSAGE 9: Count of Monte Cristo ---
  {passage:"Edmond Dantès returned to Marseilles a hero, having safely guided the Pharaon to port after the captain's sudden death. He was young, talented, and deeply in love with Mercédès, whom he planned to marry. Monsieur Morrel, the ship's owner, had promised to make him captain. However, jealousy and betrayal lurked beneath the surface of his happiness. Fernand Mondego, who desired Mercédès for himself, and Danglars, who resented Edmond's imminent promotion, conspired together to write a false letter accusing Edmond of carrying a message for Napoleon's supporters. As a result, Edmond was arrested on his engagement day and sent to the dreaded Château d'If, a prison from which no one ever returned.",
   q:"Why was Edmond arrested on his engagement day?",o:["He attacked Fernand in public","He was found with stolen goods","He was falsely accused of carrying a message for Napoleon's supporters","He refused to become the captain of the Pharaon"],a:2},
  {passage:"Edmond Dantès returned to Marseilles a hero, having safely guided the Pharaon to port after the captain's sudden death. He was young, talented, and deeply in love with Mercédès, whom he planned to marry. Monsieur Morrel, the ship's owner, had promised to make him captain. However, jealousy and betrayal lurked beneath the surface of his happiness. Fernand Mondego, who desired Mercédès for himself, and Danglars, who resented Edmond's imminent promotion, conspired together to write a false letter accusing Edmond of carrying a message for Napoleon's supporters. As a result, Edmond was arrested on his engagement day and sent to the dreaded Château d'If, a prison from which no one ever returned.",
   q:"What motivated Danglars to conspire against Edmond?",o:["He was in love with Mercédès","He resented Edmond's promotion to captain","He wanted to own the Pharaon himself","He was loyal to Napoleon's enemies"],a:1},
  {passage:"Edmond Dantès returned to Marseilles a hero, having safely guided the Pharaon to port after the captain's sudden death. He was young, talented, and deeply in love with Mercédès, whom he planned to marry. Monsieur Morrel, the ship's owner, had promised to make him captain. However, jealousy and betrayal lurked beneath the surface of his happiness. Fernand Mondego, who desired Mercédès for himself, and Danglars, who resented Edmond's imminent promotion, conspired together to write a false letter accusing Edmond of carrying a message for Napoleon's supporters. As a result, Edmond was arrested on his engagement day and sent to the dreaded Château d'If, a prison from which no one ever returned.",
   q:"The phrase 'lurked beneath the surface' most likely means ________.",o:["was openly discussed","was hidden and not yet visible","was completely absent","was quickly dealt with"],a:1},
  {passage:"Edmond Dantès returned to Marseilles a hero, having safely guided the Pharaon to port after the captain's sudden death. He was young, talented, and deeply in love with Mercédès, whom he planned to marry. Monsieur Morrel, the ship's owner, had promised to make him captain. However, jealousy and betrayal lurked beneath the surface of his happiness. Fernand Mondego, who desired Mercédès for himself, and Danglars, who resented Edmond's imminent promotion, conspired together to write a false letter accusing Edmond of carrying a message for Napoleon's supporters. As a result, Edmond was arrested on his engagement day and sent to the dreaded Château d'If, a prison from which no one ever returned.",
   q:"What can we infer about Edmond's character from the passage?",o:["He was dishonest and ambitious","He was innocent and did not suspect his enemies","He was violent and quick-tempered","He was lazy and uninterested in his work"],a:1},

  // --- PASSAGE 10: Robots & Workforce ---
  {passage:"The rise of automation and artificial intelligence is fundamentally transforming the global workforce. Many routine tasks that were previously performed by humans are now being handled by robots and computer programs. While this technological shift increases efficiency and reduces costs for businesses, it also raises serious concerns about job displacement. Economists estimate that up to 40% of current jobs could be automated within the next two decades. However, history suggests that technological revolutions ultimately create more jobs than they destroy. The key is adaptability: workers who invest in continuous learning and develop skills in critical thinking, creativity, and emotional intelligence are more likely to thrive in the future economy.",
   q:"What is the main idea of this passage?",o:["Robots will soon replace all human workers","Automation increases costs for businesses","Technology is changing the workforce, but adaptability is key to success","Artificial intelligence has no effect on employment rates"],a:2},
  {passage:"The rise of automation and artificial intelligence is fundamentally transforming the global workforce. Many routine tasks that were previously performed by humans are now being handled by robots and computer programs. While this technological shift increases efficiency and reduces costs for businesses, it also raises serious concerns about job displacement. Economists estimate that up to 40% of current jobs could be automated within the next two decades. However, history suggests that technological revolutions ultimately create more jobs than they destroy. The key is adaptability: workers who invest in continuous learning and develop skills in critical thinking, creativity, and emotional intelligence are more likely to thrive in the future economy.",
   q:"According to economists, what percentage of current jobs could be automated in the next two decades?",o:["Up to 20%","Up to 40%","Up to 60%","Up to 80%"],a:1},
  {passage:"The rise of automation and artificial intelligence is fundamentally transforming the global workforce. Many routine tasks that were previously performed by humans are now being handled by robots and computer programs. While this technological shift increases efficiency and reduces costs for businesses, it also raises serious concerns about job displacement. Economists estimate that up to 40% of current jobs could be automated within the next two decades. However, history suggests that technological revolutions ultimately create more jobs than they destroy. The key is adaptability: workers who invest in continuous learning and develop skills in critical thinking, creativity, and emotional intelligence are more likely to thrive in the future economy.",
   q:"According to the passage, what skill is most important for workers to develop?",o:["Physical strength and endurance","The ability to operate machines","Adaptability through continuous learning","The ability to work in large teams"],a:2},
],

}; // end QB

// ────────────────────────────────────────────────────────────────────
// SECTION METADATA
// ────────────────────────────────────────────────────────────────────
QB.meta = {
  vocab:       { label: "Vocabulary MCQ",              icon: "📚", color: "#3fb950", count: 50 },
  idioms:      { label: "Idioms & Collocations MCQ",   icon: "💡", color: "#58a6ff", count: 50 },
  grammar:     { label: "Grammar MCQ",                 icon: "📝", color: "#bc8cff", count: 50 },
  wordForms:   { label: "Compound Adjectives MCQ",     icon: "🔡", color: "#f0883e", count: 50 },
  translation: { label: "Translation MCQ",             icon: "🌐", color: "#e3b341", count: 50 },
  reading:     { label: "Reading Comprehension MCQ",   icon: "📖", color: "#f85149", count: 50 },
};

// ────────────────────────────────────────────────────────────────────
// ACCESS CODES for student_app.html
// (teacher can edit these freely — codes can be reused)
// ────────────────────────────────────────────────────────────────────
QB.codes = {
  // code       → section key
  "ENG-V1":     "vocab",
  "ENG-V2":     "vocab",
  "ENG-I1":     "idioms",
  "ENG-I2":     "idioms",
  "ENG-G1":     "grammar",
  "ENG-G2":     "grammar",
  "ENG-W1":     "wordForms",
  "ENG-T1":     "translation",
  "ENG-R1":     "reading",
  "ENG-R2":     "reading",
};

// ────────────────────────────────────────────────────────────────────
// UTILITY — shuffle and pick N questions randomly
// ────────────────────────────────────────────────────────────────────
QB.getRandom = function(section, n) {
  const pool = [...(QB[section] || [])];
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  return pool.slice(0, n);
};
