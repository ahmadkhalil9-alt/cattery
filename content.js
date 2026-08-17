/* ============================================================
   JERUSALEM TOP CATTERY — ALL YOUR CONTENT LIVES HERE

   This is the only file you need to edit. Two sections:
     1. TEXT  — every word on the site, English and Arabic
     2. CATS  — your cats

   Anything you change here shows up on both pages.
   ============================================================ */


/* ---------- 1. TEXT ------------------------------------------
   Each line has an English version and an Arabic version.
   Edit the words inside the quotes. Keep the quotes and commas.

   NOTE: the Arabic was written as a starting point — please read
   it over and correct anything, especially the cattery name.
   ------------------------------------------------------------ */

const TEXT = {

  /* --- navigation --- */
  nav_cats:      { en: "Our cats",     ar: "قططنا" },
  nav_about:     { en: "About",        ar: "من نحن" },
  nav_visiting:  { en: "Visiting",     ar: "الزيارة" },
  nav_enquire:   { en: "Enquire",      ar: "استفسار" },
  lang_button:   { en: "عربي",         ar: "English" },

  /* --- homepage hero --- */
  hero_script:   { en: "Welcome to",   ar: "أهلاً بكم في" },
  hero_title:    { en: "Jerusalem Top Cattery", ar: "مربى جيروزاليم توب للقطط" },
  hero_lede:     {
    en: "Scottish Folds, Scottish Straights and British Shorthairs, raised at home in Jerusalem. Small litters, health-tested parents, and kittens that have been handled every day since they were born.",
    ar: "قطط سكوتش فولد وسكوتش ستريت وبريتش شورت هير، تتربّى في بيتنا في القدس. بطون صغيرة، وآباء وأمهات مفحوصون صحياً، وقطط صغيرة نداعبها كل يوم منذ ولادتها."
  },
  hero_btn1:     { en: "Meet the cats",        ar: "تعرّف على القطط" },
  hero_btn2:     { en: "Ask about a kitten",   ar: "اسأل عن قطة صغيرة" },
  hero_cap1:     { en: "Our girls, at home",   ar: "إناثنا في البيت" },
  hero_cap2:     { en: "Jerusalem · Scottish & British", ar: "القدس · سكوتش وبريتش" },

  /* --- the coloured strip --- */
  strip_1_label: { en: "Breeds",             ar: "السلالات" },
  strip_1_value: { en: "Scottish & British", ar: "سكوتش وبريتش" },
  strip_2_label: { en: "Where",              ar: "الموقع" },
  strip_2_value: { en: "Jerusalem",          ar: "القدس" },
  strip_3_label: { en: "Raised",             ar: "التربية" },
  strip_3_value: { en: "In our home",        ar: "في بيتنا" },
  strip_4_label: { en: "Waiting list",       ar: "قائمة الانتظار" },
  strip_4_value: { en: "Open",               ar: "مفتوحة" },

  /* --- about section --- */
  about_eyebrow: { en: "About us",    ar: "من نحن" },
  about_title_1: { en: "Cats first,", ar: "القطط أولاً،" },
  about_title_2: { en: "always",      ar: "دائماً" },
  about_p1: {
    en: "Jerusalem Top Cattery is a small home cattery. Our cats are not kept in cages or runs — they live with us, sleep on the furniture, and get under our feet in the kitchen. We think that is the single biggest reason our kittens settle so easily into new homes.",
    ar: "مربى جيروزاليم توب مربى منزلي صغير. قططنا لا تُحبس في أقفاص — إنها تعيش معنا، تنام على الأثاث، وتتمشى بين أقدامنا في المطبخ. نعتقد أن هذا هو السبب الأهم في سهولة تأقلم قططنا مع بيوتها الجديدة."
  },
  about_p2: {
    en: "We specialise in Scottish cats, both Folds and Straights, and also breed British Shorthairs. Every pairing is planned carefully, and we never breed fold to fold.",
    ar: "نتخصص في القطط السكوتش، فولد وستريت، ونربّي أيضاً البريتش شورت هير. كل تزاوج مدروس بعناية، ولا نزاوج أبداً بين فولد وفولد."
  },
  fact_1_bold: { en: "Health first.",        ar: "الصحة أولاً." },
  fact_1_rest: {
    en: " Parents are screened before breeding, and we're happy to discuss results with you.",
    ar: " نفحص الآباء والأمهات قبل التربية، ويسعدنا مناقشة النتائج معك."
  },
  fact_2_bold: { en: "Ready to go home.",    ar: "جاهزة لبيتها الجديد." },
  fact_2_rest: {
    en: " Kittens leave vaccinated, wormed, litter trained, and used to people.",
    ar: " تغادر القطط مطعّمة، ومعالجة من الديدان، ومدرّبة على الرمل، ومعتادة على الناس."
  },
  fact_3_bold: { en: "We stay in touch.",    ar: "نبقى على تواصل." },
  fact_3_rest: {
    en: " Ask us anything for the life of your cat — we like the updates as much as you like the answers.",
    ar: " اسألنا عن أي شيء طوال حياة قطتك — نحن نحب أخبارها بقدر ما تحب أنت الإجابات."
  },

  /* --- visiting section --- */
  visit_eyebrow: { en: "Visiting",     ar: "الزيارة" },
  visit_title:   { en: "How it works", ar: "كيف تتم العملية" },
  step_1_title:  { en: "Message us",   ar: "راسلنا" },
  step_1_body: {
    en: "Tell us a little about your home — other pets, children, whether someone is around during the day. It helps us match the right kitten to you.",
    ar: "أخبرنا قليلاً عن بيتك — حيوانات أخرى، أطفال، وهل يوجد أحد في البيت خلال النهار. هذا يساعدنا في اختيار القطة المناسبة لك."
  },
  step_2_title:  { en: "Come and meet them", ar: "تعال والتقِ بها" },
  step_2_body: {
    en: "You're welcome to visit once the kittens are old enough for guests. Expect to be climbed on.",
    ar: "أهلاً بك للزيارة عندما تصبح القطط الصغيرة جاهزة لاستقبال الضيوف. توقّع أن تتسلق عليك."
  },
  step_3_title:  { en: "Reserve and wait", ar: "احجز وانتظر" },
  step_3_body: {
    en: "A deposit holds your kitten. They go home once they're fully weaned, vaccinated and ready — never earlier.",
    ar: "عربون بسيط يحجز قطتك. تذهب إلى بيتها الجديد بعد الفطام الكامل والتطعيم وعندما تصبح جاهزة — وليس قبل ذلك أبداً."
  },

  /* --- red callout --- */
  callout_script: { en: "Looking for a kitten?",       ar: "تبحث عن قطة صغيرة؟" },
  callout_title:  { en: "See who's available right now.", ar: "شاهد المتوفر لدينا الآن." },
  callout_btn:    { en: "Available kittens",           ar: "القطط المتوفرة" },

  /* --- contact --- */
  contact_eyebrow: { en: "Contact",        ar: "تواصل معنا" },
  contact_title:   { en: "Come say hello", ar: "تعال وسلّم علينا" },
  contact_p: {
    en: "Instagram is the best place to reach us — that's where the newest photos and litter news go up first. Send a message and we'll get back to you.",
    ar: "إنستغرام هو أفضل وسيلة للتواصل معنا — هناك ننشر أحدث الصور وأخبار البطون أولاً. أرسل رسالة وسنرد عليك."
  },
  contact_ig_label: { en: "Instagram",     ar: "إنستغرام" },
  contact_ig_go:    { en: "Open Instagram →", ar: "افتح إنستغرام ←" },
  contact_loc_label:{ en: "Where we are",  ar: "أين نحن" },
  contact_loc_value:{ en: "Jerusalem, Israel", ar: "القدس" },
  contact_loc_note: { en: "Visits by arrangement", ar: "الزيارة بموعد مسبق" },

  /* --- footer --- */
  footer_mark: { en: "Jerusalem Top Cattery", ar: "مربى جيروزاليم توب" },
  footer_line: { en: "Scottish & British cats · Jerusalem", ar: "قطط سكوتش وبريتش · القدس" },

  /* --- cats page --- */
  cats_script: { en: "Our family", ar: "عائلتنا" },
  cats_title:  { en: "The cats",   ar: "القطط" },
  cats_lede: {
    en: "Everyone who lives with us, and the kittens currently looking for homes. Ask us anything about any of them.",
    ar: "كل من يعيش معنا، والقطط الصغيرة التي تبحث حالياً عن بيوت. اسألنا عن أي منها."
  },
  filter_all:       { en: "Everyone",      ar: "الجميع" },
  filter_available: { en: "Available now", ar: "متوفر الآن" },
  filter_kitten:    { en: "Kittens",       ar: "قطط صغيرة" },
  filter_queen:     { en: "Queens",        ar: "إناث التربية" },
  filter_stud:      { en: "Studs",         ar: "ذكور التربية" },
  filter_retired:   { en: "Retired",       ar: "متقاعدة" },
  empty_text:  { en: "No cats in that group right now.", ar: "لا توجد قطط في هذه المجموعة حالياً." },
  empty_btn:   { en: "Show everyone",      ar: "اعرض الجميع" },
  cats_callout_script: { en: "Seen one you like?", ar: "أعجبتك واحدة؟" },
  cats_callout_title:  { en: "Send us a message.",  ar: "أرسل لنا رسالة." },
  cats_callout_btn:    { en: "Message on Instagram", ar: "راسلنا على إنستغرام" },

  /* --- words used on the cat cards --- */
  word_cat:   { en: "cat",   ar: "قطة" },
  word_cats:  { en: "cats",  ar: "قطة" },
  label_born: { en: "Born",  ar: "الميلاد" },
  label_sire: { en: "Sire",  ar: "الأب" },
  label_dam:  { en: "Dam",   ar: "الأم" },

  role_queen:   { en: "Queen",   ar: "أنثى تربية" },
  role_stud:    { en: "Stud",    ar: "ذكر تربية" },
  role_kitten:  { en: "Kitten",  ar: "قطة صغيرة" },
  role_retired: { en: "Retired", ar: "متقاعدة" },

  status_Available: { en: "Available", ar: "متوفرة" },
  status_Reserved:  { en: "Reserved",  ar: "محجوزة" },
  status_Breeding:  { en: "Breeding",  ar: "للتربية" },
  status_Retired:   { en: "Retired",   ar: "متقاعدة" }
};


/* --- words that appear inside the cat list below ------------
   If you use a breed, colour, sex or month that isn't here,
   add it and give it an Arabic version. Anything missing just
   shows in English, so nothing breaks.
   ------------------------------------------------------------ */

const WORDS = {
  "Scottish Fold":     "سكوتش فولد",
  "Scottish Straight": "سكوتش ستريت",
  "British Shorthair": "بريتش شورت هير",

  "Blue":          "أزرق",
  "Cream":         "كريمي",
  "Lilac":         "ليلكي",
  "Golden tabby":  "ذهبي مخطط",
  "Silver tabby":  "فضي مخطط",
  "Black":         "أسود",
  "White":         "أبيض",
  "Chocolate":     "شوكولاتي",

  "Female": "أنثى",
  "Male":   "ذكر",

  "January": "يناير",  "February": "فبراير", "March": "مارس",
  "April":   "أبريل",  "May": "مايو",       "June": "يونيو",
  "July":    "يوليو",  "August": "أغسطس",   "September": "سبتمبر",
  "October": "أكتوبر", "November": "نوفمبر", "December": "ديسمبر"
};


/* ---------- 2. CATS -----------------------------------------
   To add a cat, copy a block from { to } and change the values.
   Every block needs a comma after it except the last one.

   role   — "queen" | "stud" | "kitten" | "retired"
   status — "Available" | "Reserved" | "Breeding" | "Retired"
   photo  — a file in images/, e.g. "images/luna.jpg"
   note   — English description
   note_ar— the same thing in Arabic

   THESE SIX CATS ARE PLACEHOLDERS. Send the real ones over.
   ------------------------------------------------------------ */

const CATS = [
  {
    name: "Luna",
    name_ar: "لونا",
    role: "queen",
    status: "Breeding",
    breed: "Scottish Fold",
    colour: "Blue",
    sex: "Female",
    born: "March 2022",
    sire: "",
    dam: "",
    photo: "images/luna.jpg",
    note: "Our foundation girl. Calm, heavy, and completely in charge of the house.",
    note_ar: "أنثانا الأساسية. هادئة، ممتلئة، ومسيطرة تماماً على البيت."
  },
  {
    name: "Simba",
    name_ar: "سيمبا",
    role: "stud",
    status: "Breeding",
    breed: "Scottish Straight",
    colour: "Golden tabby",
    sex: "Male",
    born: "July 2021",
    sire: "",
    dam: "",
    photo: "images/simba.jpg",
    note: "Health tested and cleared. Gentle with the kittens, loud about dinner.",
    note_ar: "مفحوص صحياً والنتائج سليمة. لطيف مع القطط الصغيرة، وصوته عالٍ وقت العشاء."
  },
  {
    name: "Nala",
    name_ar: "نالا",
    role: "queen",
    status: "Breeding",
    breed: "British Shorthair",
    colour: "Blue",
    sex: "Female",
    born: "January 2023",
    sire: "",
    dam: "",
    photo: "images/nala.jpg",
    note: "The friendliest cat here. Greets every visitor at the door.",
    note_ar: "ألطف قطة عندنا. تستقبل كل زائر عند الباب."
  },
  {
    name: "Zaytoun",
    name_ar: "زيتون",
    role: "kitten",
    status: "Available",
    breed: "Scottish Fold",
    colour: "Blue",
    sex: "Female",
    born: "May 2026",
    sire: "Simba",
    dam: "Luna",
    photo: "images/zaytoun.jpg",
    note: "Ready for her new home in August. The brave one of the litter.",
    note_ar: "جاهزة لبيتها الجديد في أغسطس. الأجرأ بين إخوتها."
  },
  {
    name: "Sukkar",
    name_ar: "سكر",
    role: "kitten",
    status: "Available",
    breed: "Scottish Straight",
    colour: "Cream",
    sex: "Male",
    born: "May 2026",
    sire: "Simba",
    dam: "Luna",
    photo: "images/sukkar.jpg",
    note: "Quieter than his sister and a determined lap cat.",
    note_ar: "أهدأ من أخته، ويصرّ على النوم في الحضن."
  },
  {
    name: "Amber",
    name_ar: "عنبر",
    role: "retired",
    status: "Retired",
    breed: "British Shorthair",
    colour: "Lilac",
    sex: "Female",
    born: "February 2018",
    sire: "",
    dam: "",
    photo: "images/amber.jpg",
    note: "Retired from breeding and now fully employed as a cushion.",
    note_ar: "تقاعدت من التربية وتعمل الآن كوسادة بدوام كامل."
  }
];
