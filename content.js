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
  status_Retired:   { en: "Retired",   ar: "متقاعدة" },

  /* --- the individual cat page --- */
  back_to_cats:  { en: "All cats",        ar: "كل القطط" },
  sec_photos:    { en: "Photos",          ar: "الصور" },
  sec_details:   { en: "Details",         ar: "التفاصيل" },
  sec_about:     { en: "Personality",     ar: "الطباع" },
  sec_health:    { en: "Health",          ar: "الصحة" },
  gallery_hint:  { en: "Tap a photo to enlarge", ar: "اضغط على الصورة لتكبيرها" },

  label_weight:  { en: "Weight",          ar: "الوزن" },
  label_reg:     { en: "Registration",    ar: "رقم التسجيل" },
  label_breed:   { en: "Breed",           ar: "السلالة" },
  label_colour:  { en: "Colour",          ar: "اللون" },
  label_sex:     { en: "Sex",             ar: "الجنس" },
  label_price:   { en: "Price",           ar: "السعر" },
  label_ready:   { en: "Ready to go home", ar: "جاهزة للانتقال" },
  unit_kg:       { en: "kg",              ar: "كغ" },

  cta_ask:       { en: "Ask about",       ar: "اسأل عن" },
  not_found_title: { en: "Cat not found", ar: "لم يتم العثور على القطة" },
  not_found_text:  { en: "We couldn't find that cat. She may have gone to her new home.", ar: "لم نتمكن من إيجاد هذه القطة. ربما انتقلت إلى بيتها الجديد." },

  lb_close: { en: "Close",    ar: "إغلاق" },
  lb_prev:  { en: "Previous", ar: "السابق" },
  lb_next:  { en: "Next",     ar: "التالي" }
};


/* --- words that appear inside the cat list below ------------
   If you use a breed, colour, sex or month that isn't here,
   add it and give it an Arabic version. Anything missing just
   shows in English, so nothing breaks.
   ------------------------------------------------------------ */

const WORDS = {
  "Scottish Fold":     "سكوتش فولد",
  "Scottish Straight": "سكوتش ستريت",
  "British Shorthair": "بريطاني شورت هير",

  "Blue":          "أزرق",
  "Cream":         "كريمي",
  "Lilac":         "ليلكي",
  "Golden tabby":  "ذهبي مخطط",
  "Silver tabby":  "فضي مخطط",
  "Black":         "أسود",
  "White":         "أبيض",
  "Chocolate":     "شوكولاتي",
  "Gold":          "ذهبي",
   "Gold NY12":          " NY12 ذهبي",
    "Black Golden Chinchilla":          "شانشيلا اسود ذهبي",

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

   REQUIRED
   name, name_ar    the cat's name in both languages
   role             "queen" | "stud" | "kitten" | "retired"
   status           "Available" | "Reserved" | "Breeding" | "Retired"
   breed, colour, sex, born
   photos           six files in images/ — the first is the card photo

   OPTIONAL — leave as "" and that part of the page simply
   doesn't appear. Fill these in for your important cats and
   skip them for the rest.
   weight           just the number, e.g. "4.2" (kg is added for you)
   reg              registration number
   health/health_ar what testing has been done
   about/about_ar   a paragraph on personality
   price            e.g. "₪4,500" — kittens only
   ready            e.g. "August 2026" — kittens only
   sire, dam        parent names. If the parent is also on this
                    list, their name becomes a link automatically.
   note/note_ar     the one-line summary shown on the card

   PHOTO NAMING: name them after the cat with a number, so
   images/zarzoora-1.jpg through images/zarzoora-6.jpg. The
   first photo is the one that shows on the catalog card.
   Missing photos are skipped, so you can add them over time.

   THESE SIX CATS ARE PLACEHOLDERS. Send the real ones over.
   ------------------------------------------------------------ */

const CATS = [
  {
    name:      "Zarzoora",
    name_ar:   "زرزورة",
    slug:      "zarzoora",
    role:      "queen",
    status:    "Breeding",

    breed:     "Scottish Fold",
    colour:    "Gold",
    sex:       "Female",
    born:      "March 2022",
    weight:    "4.2",
    reg:       "",
    sire:      "",
    dam:       "",

    photos: [
      "images/zarzoora-1.jpg",
      "images/zarzoora-2.jpg",
      "images/zarzoora-3.jpg",
      "images/zarzoora-4.jpg",
      "images/zarzoora-5.jpg",
      "images/zarzoora-6.jpg"
    ],

    note:      "Our foundation girl. Calm, heavy, and completely in charge of the house.",
    note_ar:   "أنثانا الأساسية. هادئة، ممتلئة، ومسيطرة تماماً على البيت.",

    health:    "HCM and PKD screened, both clear.",
    health_ar: "تم فحصها لأمراض القلب والكلى، والنتائج سليمة.",

    about:     "Our foundation girl and the reason the cattery exists. Zarzoora is unhurried about everything — she supervises the kittens from a distance, decides which lap is acceptable that day, and has never once been rushed by anyone.",
    about_ar:  "أنثانا الأساسية وسبب وجود المربى. زرزورة لا تستعجل في شيء — تراقب القطط الصغيرة من بعيد، وتقرر أي حضن يناسبها في ذلك اليوم، ولم يستعجلها أحد يوماً.",

    price:     "",
    ready:     ""
  },
  {
    name:      "Simba",
    name_ar:   "سيمبا",
    slug:      "simba",
    role:      "stud",
    status:    "Breeding",

    breed:     "Scottish Straight",
    colour:    "Golden tabby",
    sex:       "Male",
    born:      "July 2021",
    weight:    "5.6",
    reg:       "",
    sire:      "",
    dam:       "",

    photos: [
      "images/simba-1.jpg",
      "images/simba-2.jpg",
      "images/simba-3.jpg",
      "images/simba-4.jpg",
      "images/simba-5.jpg",
      "images/simba-6.jpg"
    ],

    note:      "Health tested and cleared. Gentle with the kittens, loud about dinner.",
    note_ar:   "مفحوص صحياً والنتائج سليمة. لطيف مع القطط الصغيرة، وصوته عالٍ وقت العشاء.",

    health:    "Health tested and cleared before breeding.",
    health_ar: "تم فحصه صحياً والنتائج سليمة قبل التربية.",

    about:     "Simba is gentle with every kitten in the house and completely undignified about food. He follows whoever is cooking, comments loudly, and gives up the moment the fridge closes.",
    about_ar:  "سيمبا لطيف مع كل قطة صغيرة في البيت، وبلا كرامة تماماً عندما يتعلق الأمر بالطعام. يتبع من يطبخ، ويعلّق بصوت عالٍ، ويستسلم فور إغلاق الثلاجة.",

    price:     "",
    ready:     ""
  },
  {
    name:      "Nala",
    name_ar:   "نالا",
    slug:      "nala",
    role:      "queen",
    status:    "Breeding",

    breed:     "British Shorthair",
    colour:    "Blue",
    sex:       "Female",
    born:      "January 2023",
    weight:    "4.0",
    reg:       "",
    sire:      "",
    dam:       "",

    photos: [
      "images/nala-1.jpg",
      "images/nala-2.jpg",
      "images/nala-3.jpg",
      "images/nala-4.jpg",
      "images/nala-5.jpg",
      "images/nala-6.jpg"
    ],

    note:      "The friendliest cat here. Greets every visitor at the door.",
    note_ar:   "ألطف قطة عندنا. تستقبل كل زائر عند الباب.",

    health:    "HCM and PKD screened, both clear.",
    health_ar: "تم فحصها لأمراض القلب والكلى، والنتائج سليمة.",

    about:     "The friendliest cat in the house by a wide margin. Nala hears the door before anyone else and is always the first to greet a visitor, whether or not the visitor came for her.",
    about_ar:  "ألطف قطة في البيت بفارق كبير. نالا تسمع الباب قبل الجميع، وهي دائماً أول من يستقبل الزائر، سواء جاء من أجلها أم لا.",

    price:     "",
    ready:     ""
  },
  {
    name:      "Zaytoun",
    name_ar:   "زيتون",
    slug:      "zaytoun",
    role:      "kitten",
    status:    "Available",

    breed:     "Scottish Fold",
    colour:    "Blue",
    sex:       "Female",
    born:      "May 2026",
    weight:    "1.1",
    reg:       "",
    sire:      "Simba",
    dam:       "Zarzoora",

    photos: [
      "images/zaytoun-1.jpg",
      "images/zaytoun-2.jpg",
      "images/zaytoun-3.jpg",
      "images/zaytoun-4.jpg",
      "images/zaytoun-5.jpg",
      "images/zaytoun-6.jpg"
    ],

    note:      "Ready for her new home in August. The brave one of the litter.",
    note_ar:   "جاهزة لبيتها الجديد في أغسطس. الأجرأ بين إخوتها.",

    health:    "First vaccinations done, wormed, microchipped.",
    health_ar: "أخذت التطعيمات الأولى، وعولجت من الديدان، وزُرعت لها شريحة.",

    about:     "The brave one of the litter. Zaytoun was first out of the nest, first onto the sofa, and first to work out that the kitchen bin has a lid that moves.",
    about_ar:  "الأجرأ بين إخوتها. زيتون كانت أول من خرج من العش، وأول من صعد على الأريكة، وأول من اكتشف أن غطاء سلة المطبخ يتحرك.",

    price:     "",
    ready:     "August 2026"
  },
  {
    name:      "Sukkar",
    name_ar:   "سكر",
    slug:      "sukkar",
    role:      "kitten",
    status:    "Available",

    breed:     "British Shorthair",
    colour:    "Gold NY12",
    sex:       "Male",
    born:      "Apr 21 2026",
    weight:    "1.5",
    reg:       "",
    sire:      "Absolu Kasper",
    dam:       "Zarzoora",

    photos: [
      "images/sukkar-1.jpg",
      "images/sukkar-2.jpg",
      "images/sukkar-3.jpg",
      "images/sukkar-4.jpg",
      "images/sukkar-5.jpg",
      "images/sukkar-6.jpg"
    ],

    note:      "Quieter than his sister and a determined lap cat.",
    note_ar:   "أهدأ من أخته، ويصرّ على النوم في الحضن.",

    health:    "First vaccinations done, wormed, microchipped.",
    health_ar: "أخذ التطعيمات الأولى، وعولج من الديدان، وزُرعت له شريحة.",

    about:     "Quieter than his sister and far more determined about laps. Sukkar will wait patiently beside you until you sit down, then treat the matter as settled.",
    about_ar:  "أهدأ من أخته وأكثر إصراراً على الحضن. سكر ينتظر بجانبك بصبر حتى تجلس، ثم يعتبر الأمر منتهياً.",

    price:     "",
    ready:     "August 2026"
  },

   {
    name:      "Absolu Kasper",
    name_ar:   "ابسولو كاسبر",
    slug:      "absolu kasper",
    role:      "stud",
    status:    "Breeding",

    breed:     "British Shorthair",
    colour:    "Black Golden Chinchilla",
    sex:       "Male",
    born:      "Jun 2 2022",
    weight:    "4",
    reg:       "",
    sire:      "",
    dam:       "",

    photos: [
      "images/sukkar-1.jpg",
      "images/sukkar-2.jpg",
      "images/sukkar-3.jpg",
      "images/sukkar-4.jpg",
      "images/sukkar-5.jpg",
      "images/sukkar-6.jpg"
    ],

    note:      "Quieter than his sister and a determined lap cat.",
    note_ar:   "أهدأ من أخته، ويصرّ على النوم في الحضن.",

    health:    "First vaccinations done, wormed, microchipped.",
    health_ar: "أخذ التطعيمات الأولى، وعولج من الديدان، وزُرعت له شريحة.",

    about:     "Quieter than his sister and far more determined about laps. Sukkar will wait patiently beside you until you sit down, then treat the matter as settled.",
    about_ar:  "أهدأ من أخته وأكثر إصراراً على الحضن. سكر ينتظر بجانبك بصبر حتى تجلس، ثم يعتبر الأمر منتهياً.",

    price:     "",
    ready:     "August 2026"
  },
  {
    name:      "Amber",
    name_ar:   "عنبر",
    slug:      "amber",
    role:      "retired",
    status:    "Retired",

    breed:     "British Shorthair",
    colour:    "Lilac",
    sex:       "Female",
    born:      "February 2018",
    weight:    "4.5",
    reg:       "",
    sire:      "",
    dam:       "",

    photos: [
      "images/amber-1.jpg",
      "images/amber-2.jpg",
      "images/amber-3.jpg",
      "images/amber-4.jpg",
      "images/amber-5.jpg",
      "images/amber-6.jpg"
    ],

    note:      "Retired from breeding and now fully employed as a cushion.",
    note_ar:   "تقاعدت من التربية وتعمل الآن كوسادة بدوام كامل.",

    health:    "",
    health_ar: "",

    about:     "",
    about_ar:  "",

    price:     "",
    ready:     ""
  }
];
