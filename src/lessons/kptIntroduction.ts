import { Lesson } from "./types";

// Month 3, Lesson 1 — Introduction to Finnish Consonant Gradation (K-P-T)
// Stable lesson ID: month-3-kpt-introduction (see lessonRegistry.ts)
// Rafiqul Hyder's verb-type tables mark K-P-T, including the reversed
// direction in types 3, 4 and 6 (e.g. tavata → tapaan). Noun forms with -n
// (genitive) are previewed only; the cases are taught in Month 4.

export const kptIntroductionLesson: Lesson = {
  slug: "kpt-introduction",
  month: 3,

  title: {
    fi: "Astevaihtelu (K-P-T): johdanto",
    bn: "ব্যঞ্জন পরিবর্তন (K-P-T): পরিচিতি",
    en: "Consonant Gradation (K-P-T): Introduction",
  },

  intro: {
    fi: "Olet jo nähnyt, että sana voi muuttua: minä luen, mutta hän lukee. Tätä kutsutaan astevaihteluksi. Siinä k, p ja t vaihtelevat vahvan ja heikon asteen välillä. Tässä oppitunnissa opit tunnistamaan tavallisimmat parit.",
    bn: "তুমি ইতিমধ্যে দেখেছ যে একটি শব্দ বদলাতে পারে: minä luen (আমি পড়ি), কিন্তু hän lukee (সে পড়ে)। একে বলে astevaihtelu (ব্যঞ্জন পরিবর্তন)। এখানে k, p ও t শক্তিশালী (vahva) ও দুর্বল (heikko) রূপের মধ্যে বদলায়। এই পাঠে তুমি সবচেয়ে প্রচলিত জোড়াগুলো চিনতে শিখবে।",
    en: "You have already seen that a word can change: minä luen, but hän lukee. This is called consonant gradation. In it, k, p and t alternate between a strong and a weak grade. In this lesson you'll learn to recognise the most common pairs.",
  },

  objectives: [
    {
      fi: "Ymmärtää, mitä vahva ja heikko aste tarkoittavat.",
      bn: "শক্তিশালী (vahva) ও দুর্বল (heikko) রূপ মানে কী, তা বোঝা।",
      en: "Understand what the strong and weak grades mean.",
    },
    {
      fi: "Tunnistaa parit kk–k, pp–p, tt–t, k–∅, p–v ja t–d.",
      bn: "kk–k, pp–p, tt–t, k–∅, p–v ও t–d জোড়াগুলো চিনতে পারা।",
      en: "Recognise the pairs kk–k, pp–p, tt–t, k–∅, p–v and t–d.",
    },
    {
      fi: "Nähdä astevaihtelu tutuissa verbeissä (nukun – nukkuu).",
      bn: "পরিচিত ক্রিয়ায় ব্যঞ্জন পরিবর্তন দেখতে পারা (nukun – nukkuu)।",
      en: "Spot gradation in familiar verbs (nukun – nukkuu).",
    },
  ],

  explanation: [
    {
      fi: "Astevaihtelussa sanan viimeisen tavun alussa oleva k, p tai t voi muuttua. Vahva aste on perusmuoto (esim. kauppa), heikko aste on muuttunut muoto (esim. kaupan). Tämä koskee monia sanoja, mutta ei kaikkia.",
      bn: "ব্যঞ্জন পরিবর্তনে শব্দের শেষ সিলেবলের শুরুতে থাকা k, p বা t বদলাতে পারে। শক্তিশালী রূপ (vahva aste) হলো মূল রূপ (যেমন kauppa), আর দুর্বল রূপ (heikko aste) হলো বদলে যাওয়া রূপ (যেমন kaupan)। এটি অনেক শব্দে ঘটে, তবে সব শব্দে নয়।",
      en: "In consonant gradation, a k, p or t at the start of the word's last syllable can change. The strong grade is the basic form (e.g. kauppa); the weak grade is the changed form (e.g. kaupan). This affects many words, but not all.",
    },
    {
      fi: "Milloin heikko aste? Yksinkertainen nyrkkisääntö: kun viimeinen tavu muuttuu suljetuksi eli päättyy konsonanttiin, k, p ja t ovat usein heikossa asteessa. Kaup-pa (avoin tavu, vahva) → kau-pan (suljettu tavu, heikko). Tarkemmat säännöt opitaan kuukauden 3 aikana.",
      bn: "কখন দুর্বল রূপ? একটি সহজ নিয়ম: শেষ সিলেবল যখন বন্ধ হয়ে যায়, অর্থাৎ ব্যঞ্জনবর্ণে শেষ হয়, তখন k, p ও t প্রায়ই দুর্বল রূপে থাকে। kaup-pa (খোলা সিলেবল, শক্তিশালী) → kau-pan (বন্ধ সিলেবল, দুর্বল)। বিস্তারিত নিয়ম তৃতীয় মাসেই শেখানো হবে।",
      en: "When is the grade weak? A simple rule of thumb: when the last syllable becomes closed, i.e. ends in a consonant, k, p and t are often in the weak grade. Kaup-pa (open syllable, strong) → kau-pan (closed syllable, weak). The detailed rules come during Month 3.",
    },
    {
      fi: "Parit ovat kahta tyyppiä. Kaksoiskonsonantista tulee yksi: kk → k, pp → p, tt → t. Yksi konsonantti muuttuu tai katoaa: k → ∅ (katoaa), p → v, t → d.",
      bn: "জোড়াগুলো দুই ধরনের। দ্বৈত ব্যঞ্জন একক হয়ে যায়: kk → k, pp → p, tt → t। একটি ব্যঞ্জন বদলে যায় বা হারিয়ে যায়: k → ∅ (হারিয়ে যায়), p → v, t → d।",
      en: "The pairs are of two kinds. A double consonant becomes single: kk → k, pp → p, tt → t. A single consonant changes or disappears: k → ∅ (disappears), p → v, t → d.",
    },
    {
      fi: "Verbeissä näet astevaihtelun jo preesensissä. Minä-muodon -n sulkee tavun, joten aste on heikko; hän-muodossa tavu on avoin, joten aste on vahva: minä nukun – hän nukkuu, minä otan – hän ottaa, minä luen – hän lukee, minä tiedän – hän tietää.",
      bn: "ক্রিয়ায় তুমি বর্তমান কালেই ব্যঞ্জন পরিবর্তন দেখতে পাও। minä-রূপের -n সিলেবলকে বন্ধ করে, তাই রূপ দুর্বল; hän-রূপে সিলেবল খোলা, তাই রূপ শক্তিশালী: minä nukun – hän nukkuu (ঘুমানো), minä otan – hän ottaa (নেওয়া), minä luen – hän lukee (পড়া), minä tiedän – hän tietää (জানা)।",
      en: "In verbs you already see gradation in the present tense. The -n of the minä form closes the syllable, so the grade is weak; in the hän form the syllable is open, so the grade is strong: minä nukun – hän nukkuu, minä otan – hän ottaa, minä luen – hän lukee, minä tiedän – hän tietää.",
    },
    {
      fi: "Kielteinen lause käyttää minä-muotoa ilman -n:ää, joten siinäkin on heikko aste: en nuku, en ota, en lue, en tiedä.",
      bn: "না-বাচক বাক্যে -n ছাড়া minä-রূপ ব্যবহার হয়, তাই সেখানেও দুর্বল রূপ থাকে: en nuku, en ota, en lue, en tiedä।",
      en: "A negative sentence uses the minä form without -n, so it also has the weak grade: en nuku, en ota, en lue, en tiedä.",
    },
    {
      fi: "Substantiiveissa näet astevaihtelun esimerkiksi -n-muodossa, joka tarkoittaa omistamista (genetiivi, opitaan kuukaudella 4): kauppa → kaupan (kaupan ovi), tyttö → tytön, katu → kadun, leipä → leivän.",
      bn: "বিশেষ্যে তুমি ব্যঞ্জন পরিবর্তন দেখতে পাও, যেমন -n রূপে, যা মালিকানা বা 'এর' বোঝায় (genetiivi, চতুর্থ মাসে শেখানো হবে): kauppa → kaupan (দোকানের দরজা: kaupan ovi), tyttö → tytön (মেয়েটির), katu → kadun (রাস্তার), leipä → leivän (রুটির)।",
      en: "In nouns you see gradation, for example, in the -n form, which means 'of' (the genitive, taught in Month 4): kauppa → kaupan (kaupan ovi = the shop's door), tyttö → tytön, katu → kadun, leipä → leivän.",
    },
    {
      fi: "Joissakin verbityypeissä suunta on päinvastainen: infinitiivissä on heikko aste ja preesensissä vahva. Esimerkiksi tyypissä 4: tavata → minä tapaan, pakata → minä pakkaan. Tämä opitaan myöhemmin tarkemmin.",
      bn: "কিছু ক্রিয়াশ্রেণিতে দিকটা উল্টো: মূল রূপে দুর্বল আর বর্তমান কালে শক্তিশালী। যেমন শ্রেণি ৪-এ: tavata → minä tapaan (দেখা করা), pakata → minä pakkaan (ব্যাগ গোছানো)। এটি পরে বিস্তারিত শেখানো হবে।",
      en: "In some verb types the direction is reversed: the infinitive has the weak grade and the present tense the strong one. For example in type 4: tavata → minä tapaan, pakata → minä pakkaan. This is covered in detail later.",
    },
    {
      fi: "Kaikki sanat eivät muutu. Esimerkiksi talo → talon ja auto → auton pysyvät samanlaisina. Muita pareja, kuten nk → ng, mp → mm, lt → ll, nt → nn ja rt → rr, opitaan seuraavilla oppitunneilla.",
      bn: "সব শব্দ বদলায় না। যেমন talo → talon (বাড়ি) ও auto → auton (গাড়ি) একই রকম থাকে। অন্য জোড়াগুলো, যেমন nk → ng, mp → mm, lt → ll, nt → nn ও rt → rr, পরের পাঠগুলোতে শেখানো হবে।",
      en: "Not every word changes. For example, talo → talon and auto → auton stay the same. Other pairs, such as nk → ng, mp → mm, lt → ll, nt → nn and rt → rr, come in the next lessons.",
    },
  ],

  // Reuses the lesson table: one row per gradation pair.
  pronounTable: [
    { fi: "kk → k: kukka → kukan; nukkua → minä nukun", en: "flower; to sleep → I sleep", bn: "ফুল; ঘুমানো → আমি ঘুমাই" },
    { fi: "pp → p: kauppa → kaupan; kuppi → kupin", en: "shop; cup", bn: "দোকান; কাপ" },
    { fi: "tt → t: tyttö → tytön; ottaa → minä otan", en: "girl; to take → I take", bn: "মেয়ে; নেওয়া → আমি নিই" },
    { fi: "k → ∅: jalka → jalan; lukea → minä luen", en: "leg, foot; to read → I read", bn: "পা; পড়া → আমি পড়ি" },
    { fi: "p → v: leipä → leivän; tapa → tavan", en: "bread; way, habit", bn: "রুটি; উপায় / অভ্যাস" },
    { fi: "t → d: katu → kadun; tietää → minä tiedän", en: "street; to know → I know", bn: "রাস্তা; জানা → আমি জানি" },
  ],

  examples: [
    { fi: "Minä luen kirjaa. Hän lukee lehteä.", bn: "আমি বই পড়ি। সে পত্রিকা পড়ে।", en: "I read a book. He/She reads a newspaper." },
    { fi: "Minä nukun hyvin. Hän nukkuu huonosti.", bn: "আমি ভালো ঘুমাই। সে খারাপ ঘুমায়।", en: "I sleep well. He/She sleeps badly." },
    { fi: "Minä otan kahvia. Hän ottaa teetä.", bn: "আমি কফি নিই। সে চা নেয়।", en: "I take coffee. He/She takes tea." },
    { fi: "Minä en tiedä. Hän tietää.", bn: "আমি জানি না। সে জানে।", en: "I don't know. He/She knows." },
    { fi: "Kaupan ovi on auki.", bn: "দোকানের দরজা খোলা।", en: "The shop's door is open." },
    { fi: "Tytön nimi on Aino.", bn: "মেয়েটির নাম আইনো।", en: "The girl's name is Aino." },
    { fi: "Kadun nimi on Mannerheimintie.", bn: "রাস্তাটির নাম মানেরহেইমিন্তিয়ে।", en: "The street's name is Mannerheimintie." },
    { fi: "Leivän hinta on kaksi euroa.", bn: "রুটির দাম দুই ইউরো।", en: "The price of the bread is two euros." },
    { fi: "Minä tapaan ystävän huomenna.", bn: "আমি আগামীকাল এক বন্ধুর সাথে দেখা করব।", en: "I'm meeting a friend tomorrow." },
  ],

  vocabulary: [
    { fi: "astevaihtelu", bn: "ব্যঞ্জন পরিবর্তন", en: "consonant gradation" },
    { fi: "vahva aste / heikko aste", bn: "শক্তিশালী রূপ / দুর্বল রূপ", en: "strong grade / weak grade" },
    { fi: "tavu", bn: "সিলেবল / অক্ষরাংশ", en: "syllable" },
    { fi: "kauppa", bn: "দোকান", en: "shop" },
    { fi: "kuppi", bn: "কাপ", en: "cup" },
    { fi: "tyttö", bn: "মেয়ে", en: "girl" },
    { fi: "kukka", bn: "ফুল", en: "flower" },
    { fi: "jalka", bn: "পা", en: "leg, foot" },
    { fi: "leipä", bn: "রুটি", en: "bread" },
    { fi: "katu", bn: "রাস্তা", en: "street" },
    { fi: "nukkua (nukun)", bn: "ঘুমানো", en: "to sleep" },
    { fi: "ottaa (otan)", bn: "নেওয়া", en: "to take" },
    { fi: "tietää (tiedän)", bn: "জানা", en: "to know" },
  ],

  pronunciation: {
    fi: "Vahvassa asteessa kaksoiskonsonantti on pitkä: kaup-pa, tyt-tö, nuk-kuu. Heikossa asteessa se on lyhyt: kau-pan, ty-tön, nu-kun. Kuuntele eroa ja sano parit ääneen: hän nukkuu – minä nukun.",
    bn: "শক্তিশালী রূপে দ্বৈত ব্যঞ্জন দীর্ঘ: kaup-pa, tyt-tö, nuk-kuu। দুর্বল রূপে তা হ্রস্ব: kau-pan, ty-tön, nu-kun। পার্থক্যটা শোনো এবং জোড়াগুলো জোরে বলো: hän nukkuu – minä nukun।",
    en: "In the strong grade the double consonant is long: kaup-pa, tyt-tö, nuk-kuu. In the weak grade it is short: kau-pan, ty-tön, nu-kun. Listen for the difference and say the pairs aloud: hän nukkuu – minä nukun.",
  },

  commonMistakes: [
    {
      fi: "Vahva aste minä-muodossa: väärin minä nukkun, oikein minä nukun.",
      bn: "minä-রূপে শক্তিশালী রূপ: ভুল minä nukkun, সঠিক minä nukun।",
      en: "The strong grade in the minä form: wrong minä nukkun, right minä nukun.",
    },
    {
      fi: "Heikko aste hän-muodossa: väärin hän nukuu, oikein hän nukkuu.",
      bn: "hän-রূপে দুর্বল রূপ: ভুল hän nukuu, সঠিক hän nukkuu।",
      en: "The weak grade in the hän form: wrong hän nukuu, right hän nukkuu.",
    },
    {
      fi: "Vahva aste kieltolauseessa: väärin en nukku, oikein en nuku.",
      bn: "না-বাচক বাক্যে শক্তিশালী রূপ: ভুল en nukku, সঠিক en nuku।",
      en: "The strong grade in a negative sentence: wrong en nukku, right en nuku.",
    },
    {
      fi: "Unohdetaan t → d: väärin katun, oikein kadun.",
      bn: "t → d ভুলে যাওয়া: ভুল katun, সঠিক kadun।",
      en: "Forgetting t → d: wrong katun, right kadun.",
    },
    {
      fi: "Muutetaan sana, joka ei muutu: väärin audon, oikein auton.",
      bn: "যে শব্দ বদলায় না তা বদলে ফেলা: ভুল audon, সঠিক auton।",
      en: "Changing a word that doesn't change: wrong audon, right auton.",
    },
    {
      fi: "Väärä suunta tyypissä 4: väärin minä tavaan, oikein minä tapaan.",
      bn: "শ্রেণি ৪-এ ভুল দিক: ভুল minä tavaan, সঠিক minä tapaan।",
      en: "The wrong direction in type 4: wrong minä tavaan, right minä tapaan.",
    },
  ],

  practice: [
    {
      prompt: { fi: "Mikä on kk:n heikko aste?", bn: "kk-এর দুর্বল রূপ কী?", en: "What is the weak grade of kk?" },
      answer: "k",
    },
    {
      prompt: { fi: "Mikä on t:n heikko aste (esim. katu)?", bn: "t-এর দুর্বল রূপ কী (যেমন katu)?", en: "What is the weak grade of t (e.g. katu)?" },
      answer: "d",
    },
    {
      prompt: { fi: "kauppa → -n-muoto?", bn: "kauppa → -n রূপ?", en: "kauppa → the -n form?" },
      answer: "kaupan",
    },
    {
      prompt: { fi: "tyttö → -n-muoto?", bn: "tyttö → -n রূপ?", en: "tyttö → the -n form?" },
      answer: "tytön",
    },
    {
      prompt: { fi: "katu → -n-muoto?", bn: "katu → -n রূপ?", en: "katu → the -n form?" },
      answer: "kadun",
    },
    {
      prompt: { fi: "leipä → -n-muoto?", bn: "leipä → -n রূপ?", en: "leipä → the -n form?" },
      answer: "leivän",
    },
    {
      prompt: { fi: "nukkua: minä ___, hän ___", bn: "nukkua: minä ___, hän ___", en: "nukkua: minä ___, hän ___" },
      answer: "minä nukun, hän nukkuu",
    },
    {
      prompt: { fi: "tietää: minä ___", bn: "tietää: minä ___", en: "tietää: minä ___" },
      answer: "tiedän",
    },
    {
      prompt: { fi: "Täydennä kielteinen (lukea): Minä en ___.", bn: "না-বাচক পূরণ করো (lukea): Minä en ___.", en: "Complete the negative (lukea): Minä en ___." },
      answer: "lue",
    },
    {
      prompt: { fi: "Muuttuuko? talo → -n-muoto", bn: "বদলায় কি? talo → -n রূপ", en: "Does it change? talo → the -n form" },
      answer: "Ei muutu: talon",
    },
    {
      prompt: { fi: "tavata (tyyppi 4): minä ___", bn: "tavata (শ্রেণি ৪): minä ___", en: "tavata (type 4): minä ___" },
      answer: "tapaan",
    },
    {
      prompt: { fi: "Käännä suomeksi: the girl's name", bn: "ফিনিশে অনুবাদ করো: মেয়েটির নাম", en: "Translate into Finnish: the girl's name" },
      answer: "tytön nimi",
    },
  ],

  quiz: [
    {
      question: { fi: "kauppa → -n-muoto?", en: "kauppa → the -n form?" },
      options: [
        { fi: "kaupan", en: "kaupan" },
        { fi: "kauppan", en: "kauppan" },
        { fi: "kauvan", en: "kauvan" },
        { fi: "kaupaan", en: "kaupaan" },
      ],
      correctIndex: 0,
      explanation: {
        fi: "pp → p, kun tavu sulkeutuu: kauppa → kaupan.",
        bn: "সিলেবল বন্ধ হলে pp → p: kauppa → kaupan।",
        en: "pp → p when the syllable closes: kauppa → kaupan.",
      },
    },
    {
      question: { fi: "katu → -n-muoto?", en: "katu → the -n form?" },
      options: [
        { fi: "katun", en: "katun" },
        { fi: "kadun", en: "kadun" },
        { fi: "kavun", en: "kavun" },
        { fi: "kattun", en: "kattun" },
      ],
      correctIndex: 1,
      explanation: {
        fi: "t → d: katu → kadun.",
        bn: "t → d: katu → kadun।",
        en: "t → d: katu → kadun.",
      },
    },
    {
      question: { fi: "Täydennä: Minä ___ hyvin. (nukkua)", en: "Fill in: Minä ___ hyvin. (nukkua)" },
      options: [
        { fi: "nukkun", en: "nukkun" },
        { fi: "nukuu", en: "nukuu" },
        { fi: "nukun", en: "nukun" },
        { fi: "nukkuu", en: "nukkuu" },
      ],
      correctIndex: 2,
      explanation: {
        fi: "Minä-muodon -n sulkee tavun, joten kk → k: minä nukun.",
        bn: "minä-রূপের -n সিলেবল বন্ধ করে, তাই kk → k: minä nukun।",
        en: "The -n of the minä form closes the syllable, so kk → k: minä nukun.",
      },
    },
    {
      question: { fi: "Täydennä: Hän ___ kirjaa. (lukea)", en: "Fill in: Hän ___ kirjaa. (lukea)" },
      options: [
        { fi: "luee", en: "luee" },
        { fi: "luen", en: "luen" },
        { fi: "luke", en: "luke" },
        { fi: "lukee", en: "lukee" },
      ],
      correctIndex: 3,
      explanation: {
        fi: "Hän-muodossa tavu on avoin, joten vahva aste: hän lukee.",
        bn: "hän-রূপে সিলেবল খোলা, তাই শক্তিশালী রূপ: hän lukee।",
        en: "In the hän form the syllable is open, so the strong grade: hän lukee.",
      },
    },
    {
      question: { fi: "Mikä pari on oikein (vahva → heikko)?", en: "Which pair is correct (strong → weak)?" },
      options: [
        { fi: "v → p", en: "v → p" },
        { fi: "p → v", en: "p → v" },
        { fi: "d → t", en: "d → t" },
        { fi: "k → g", en: "k → g" },
      ],
      correctIndex: 1,
      explanation: {
        fi: "p → v, kuten leipä → leivän.",
        bn: "p → v, যেমন leipä → leivän।",
        en: "p → v, as in leipä → leivän.",
      },
    },
    {
      question: { fi: "Mikä sana EI muutu -n-muodossa?", en: "Which word does NOT change in the -n form?" },
      options: [
        { fi: "kauppa", en: "kauppa" },
        { fi: "tyttö", en: "tyttö" },
        { fi: "talo", en: "talo" },
        { fi: "katu", en: "katu" },
      ],
      correctIndex: 2,
      explanation: {
        fi: "Talo → talon. Siinä ei ole vaihtuvaa k:ta, p:tä tai t:tä.",
        bn: "talo → talon। এতে বদলানোর মতো k, p বা t নেই।",
        en: "Talo → talon. It has no k, p or t that alternates.",
      },
    },
  ],

  summary: {
    fi: "Astevaihtelussa k, p ja t vaihtelevat vahvan ja heikon asteen välillä: kk → k, pp → p, tt → t, k → ∅, p → v, t → d. Heikko aste tulee usein, kun tavu sulkeutuu (kauppa → kaupan, minä nukun), vahva aste avoimessa tavussa (hän nukkuu). Tyypin 4 verbeissä suunta on päinvastainen (tavata → tapaan). Kaikki sanat eivät muutu (talo → talon).",
    bn: "ব্যঞ্জন পরিবর্তনে k, p ও t শক্তিশালী ও দুর্বল রূপের মধ্যে বদলায়: kk → k, pp → p, tt → t, k → ∅, p → v, t → d। সিলেবল বন্ধ হলে প্রায়ই দুর্বল রূপ আসে (kauppa → kaupan, minä nukun), খোলা সিলেবলে শক্তিশালী রূপ (hän nukkuu)। শ্রেণি ৪-এর ক্রিয়ায় দিকটা উল্টো (tavata → tapaan)। সব শব্দ বদলায় না (talo → talon)।",
    en: "In consonant gradation, k, p and t alternate between strong and weak grades: kk → k, pp → p, tt → t, k → ∅, p → v, t → d. The weak grade often appears when the syllable closes (kauppa → kaupan, minä nukun), the strong grade in an open syllable (hän nukkuu). In type 4 verbs the direction is reversed (tavata → tapaan). Not every word changes (talo → talon).",
  },
};