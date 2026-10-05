import { Lesson } from "./types";

// Month 1 — Finnish Verb Type 6
// Stable lesson ID: month-1-verb-type-6 (see lessonRegistry.ts)
// Rule follows Rafiqul Hyder's material: infinitive marker -eta/-etä;
// present stem = remove ta/tä and add ne (vanhe-ta → vanhene-).
// His material notes reversed consonant gradation (rohjeta → rohkene-,
// paeta → pakene-); here it is only previewed. Typo in his table
// corrected: nuoreta → nuorene- (not "nourene").

export const verbType6Lesson: Lesson = {
  slug: "verb-type-6",
  month: 1,

  title: {
    fi: "Verbityyppi 6",
    bn: "ক্রিয়াশ্রেণি ৬",
    en: "Finnish Verb Type 6",
  },

  intro: {
    fi: "Tämä on viimeinen verbityyppi. Verbityypin 6 verbit kertovat usein muutoksesta, siitä että jokin muuttuu joksikin: vanha → vanheta, kylmä → kylmetä. Oppitunnin lopussa näet kaikki kuusi verbityyppiä yhdessä.",
    bn: "এটি শেষ ক্রিয়াশ্রেণি। ক্রিয়াশ্রেণি ৬-এর ক্রিয়াগুলো প্রায়ই কোনো পরিবর্তন বোঝায়, অর্থাৎ কোনো কিছু অন্য কিছুতে পরিণত হচ্ছে: vanha (বুড়ো) → vanheta (বুড়ো হওয়া), kylmä (ঠান্ডা) → kylmetä (ঠান্ডা হওয়া)। পাঠের শেষে তুমি ছয়টি ক্রিয়াশ্রেণি একসাথে দেখবে।",
    en: "This is the last verb type. Verb type 6 verbs often describe a change, something becoming something: vanha → vanheta, kylmä → kylmetä. At the end of the lesson you'll see all six verb types together.",
  },

  objectives: [
    {
      fi: "Tunnistaa verbityypin 6 infinitiivistä.",
      bn: "মূল রূপ দেখে ক্রিয়াশ্রেণি ৬ চিনতে পারা।",
      en: "Recognise verb type 6 from the infinitive.",
    },
    {
      fi: "Muodostaa tyypin 6 vartalon ja taivuttaa verbejä preesensissä.",
      bn: "শ্রেণি ৬-এর মূল অংশ তৈরি করা এবং বর্তমান কালে ক্রিয়া বদলাতে পারা।",
      en: "Form the type 6 stem and conjugate verbs in the present tense.",
    },
    {
      fi: "Tunnistaa kaikki kuusi verbityyppiä.",
      bn: "ছয়টি ক্রিয়াশ্রেণিই চিনতে পারা।",
      en: "Recognise all six verb types.",
    },
  ],

  explanation: [
    {
      fi: "Verbityypin 6 infinitiivi päättyy -eta tai -etä. Monet näistä verbeistä tulevat adjektiiveista ja tarkoittavat muuttumista: vanha → vanheta, nuori → nuoreta, kylmä → kylmetä, kuuma → kuumeta, lyhyt → lyhetä.",
      bn: "ক্রিয়াশ্রেণি ৬-এর মূল রূপ -eta অথবা -etä দিয়ে শেষ হয়। এর অনেক ক্রিয়া বিশেষণ থেকে তৈরি, এবং কোনো কিছুতে পরিণত হওয়া বোঝায়: vanha (বুড়ো) → vanheta (বুড়ো হওয়া), nuori (তরুণ) → nuoreta (তরুণ হওয়া), kylmä (ঠান্ডা) → kylmetä (ঠান্ডা হওয়া), kuuma (গরম) → kuumeta (গরম হওয়া), lyhyt (ছোট) → lyhetä (ছোট হওয়া)।",
      en: "The verb type 6 infinitive ends in -eta or -etä. Many of these verbs come from adjectives and mean becoming something: vanha → vanheta, nuori → nuoreta, kylmä → kylmetä, kuuma → kuumeta, lyhyt → lyhetä.",
    },
    {
      fi: "Vartalon sääntö: poista ta/tä ja lisää ne. Vanhe-ta → vanhene-, kylme-tä → kylmene-, kuume-ta → kuumene-, lyhe-tä → lyhene-, nuore-ta → nuorene-.",
      bn: "মূল অংশের নিয়ম: ta/tä বাদ দাও এবং ne যোগ করো। vanhe-ta → vanhene-, kylme-tä → kylmene-, kuume-ta → kuumene-, lyhe-tä → lyhene-, nuore-ta → nuorene-।",
      en: "The stem rule: remove ta/tä and add ne. Vanhe-ta → vanhene-, kylme-tä → kylmene-, kuume-ta → kuumene-, lyhe-tä → lyhene-, nuore-ta → nuorene-.",
    },
    {
      fi: "Hän-muodossa vartalon viimeinen e pitenee: hän vanhenee, se kylmenee. Koska nämä verbit kertovat muutoksesta, niitä käytetään usein hän-, se- ja ne-muodoissa: Sää kylmenee. Päivät lyhenevät.",
      bn: "hän-এর রূপে মূল অংশের শেষ e দীর্ঘ হয়: hän vanhenee, se kylmenee। এই ক্রিয়াগুলো পরিবর্তন বোঝায় বলে এগুলো প্রায়ই hän, se ও ne-এর রূপে ব্যবহার হয়: Sää kylmenee (আবহাওয়া ঠান্ডা হচ্ছে)। Päivät lyhenevät (দিন ছোট হচ্ছে)।",
      en: "In the hän form the last e of the stem becomes long: hän vanhenee, se kylmenee. Because these verbs describe change, they are often used in the hän, se and ne forms: Sää kylmenee. Päivät lyhenevät.",
    },
    {
      fi: "Vanheta taipuu näin: minä vanhenen, sinä vanhenet, hän vanhenee, me vanhenemme, te vanhenette, he vanhenevat.",
      bn: "vanheta (বুড়ো হওয়া) বদলায় এভাবে: minä vanhenen, sinä vanhenet, hän vanhenee, me vanhenemme, te vanhenette, he vanhenevat।",
      en: "Vanheta conjugates like this: minä vanhenen, sinä vanhenet, hän vanhenee, me vanhenemme, te vanhenette, he vanhenevat.",
    },
    {
      fi: "Kylmetä taipuu näin: minä kylmenen, sinä kylmenet, hän kylmenee, me kylmenemme, te kylmenette, he kylmenevät. Vokaalisointu: kylmetä-verbissä on y ja ä, joten pääte on -vät. Vanheta-verbissä on a, joten pääte on -vat.",
      bn: "kylmetä (ঠান্ডা হওয়া) বদলায় এভাবে: minä kylmenen, sinä kylmenet, hän kylmenee, me kylmenemme, te kylmenette, he kylmenevät। স্বরসংগতি: kylmetä-তে y ও ä আছে, তাই প্রত্যয় -vät। vanheta-তে a আছে, তাই প্রত্যয় -vat।",
      en: "Kylmetä conjugates like this: minä kylmenen, sinä kylmenet, hän kylmenee, me kylmenemme, te kylmenette, he kylmenevät. Vowel harmony: kylmetä has y and ä, so the ending is -vät. Vanheta has a, so the ending is -vat.",
    },
    {
      fi: "Huomio: joissakin tyypin 6 verbeissä konsonantti vahvistuu, samaan suuntaan kuin tyypissä 4: paeta → minä pakenen, lämmetä → ilma lämpenee, rohjeta → minä rohkenen. Tätä astevaihtelua opitaan myöhemmin. Tämän oppitunnin pääesimerkeissä sitä ei ole.",
      bn: "খেয়াল রাখো: শ্রেণি ৬-এর কিছু ক্রিয়ায় ব্যঞ্জনবর্ণ শক্তিশালী হয়, শ্রেণি ৪-এর মতো একই দিকে: paeta (পালানো) → minä pakenen, lämmetä (উষ্ণ হওয়া) → ilma lämpenee, rohjeta (সাহস করা) → minä rohkenen। এই ব্যঞ্জন পরিবর্তন (astevaihtelu) পরে শেখানো হবে। এই পাঠের প্রধান উদাহরণগুলোতে এটি নেই।",
      en: "Note: in some type 6 verbs a consonant becomes stronger, in the same direction as in type 4: paeta → minä pakenen, lämmetä → ilma lämpenee, rohjeta → minä rohkenen. This consonant gradation is taught later. The main examples in this lesson have none.",
    },
    {
      fi: "Kaikki -eta/-etä-verbit eivät ole tyyppiä 6. Esimerkiksi kiivetä (kiipeillä vuorelle) kuuluu tyyppiin 4: minä kiipeän. Sellaiset verbit kannattaa opetella sanastona.",
      bn: "সব -eta/-etä ক্রিয়া শ্রেণি ৬-এর নয়। যেমন kiivetä (চড়া / বেয়ে ওঠা) শ্রেণি ৪-এর: minä kiipeän। এমন ক্রিয়াগুলো শব্দ হিসেবে আলাদা করে মনে রাখা ভালো।",
      en: "Not all -eta/-etä verbs are type 6. For example, kiivetä (to climb) belongs to type 4: minä kiipeän. It's best to learn such verbs as vocabulary.",
    },
    {
      fi: "Kaikki kuusi verbityyppiä: 1) vokaali + a/ä: puhua → puhu-. 2) -da/-dä: juoda → juo-. 3) -la/-ra/-na/-sta: tulla → tule-. 4) vokaali + ta/tä: osata → osaa-. 5) -ita/-itä: tarvita → tarvitse-. 6) -eta/-etä: vanheta → vanhene-. Tyypeissä 4, 5 ja 6 kaikissa on ta/tä-loppu, joten katso ta/tä:tä edeltävää vokaalia: -ata/-ota/-uta → 4, -ita → 5, -eta → 6.",
      bn: "ছয়টি ক্রিয়াশ্রেণি একসাথে: ১) স্বরবর্ণ + a/ä: puhua → puhu-। ২) -da/-dä: juoda → juo-। ৩) -la/-ra/-na/-sta: tulla → tule-। ৪) স্বরবর্ণ + ta/tä: osata → osaa-। ৫) -ita/-itä: tarvita → tarvitse-। ৬) -eta/-etä: vanheta → vanhene-। শ্রেণি ৪, ৫ ও ৬ — তিনটিতেই ta/tä শেষাংশ আছে, তাই ta/tä-র আগের স্বরবর্ণটি দেখো: -ata/-ota/-uta → ৪, -ita → ৫, -eta → ৬।",
      en: "All six verb types: 1) vowel + a/ä: puhua → puhu-. 2) -da/-dä: juoda → juo-. 3) -la/-ra/-na/-sta: tulla → tule-. 4) vowel + ta/tä: osata → osaa-. 5) -ita/-itä: tarvita → tarvitse-. 6) -eta/-etä: vanheta → vanhene-. Types 4, 5 and 6 all end in ta/tä, so look at the vowel before ta/tä: -ata/-ota/-uta → 4, -ita → 5, -eta → 6.",
    },
    {
      fi: "Kysymys tehdään -ko/-kö-päätteellä: Kylmeneekö sää? Pieni esimakua kiellosta: kielteisessä lauseessa käytetään vartaloa: Minä en vanhene. Kahvi ei kuumene.",
      bn: "প্রশ্ন তৈরি হয় -ko/-kö দিয়ে: Kylmeneekö sää? (আবহাওয়া কি ঠান্ডা হচ্ছে?) না-বাচক বাক্যের ছোট্ট পরিচয়: না-বাচক বাক্যে মূল অংশ ব্যবহার হয়: Minä en vanhene (আমি বুড়ো হই না)। Kahvi ei kuumene (কফি গরম হচ্ছে না)।",
      en: "Questions are made with -ko/-kö: Kylmeneekö sää? A small preview of negation: a negative sentence uses the stem: Minä en vanhene. Kahvi ei kuumene.",
    },
  ],

  // Reuses the lesson table: one row per type 6 verb.
  pronounTable: [
    { fi: "vanheta → vanhe + ne → vanhene-", en: "to grow old → minä vanhenen, hän vanhenee", bn: "বুড়ো হওয়া → minä vanhenen (আমি বুড়ো হচ্ছি)" },
    { fi: "kylmetä → kylme + ne → kylmene-", en: "to get cold → se kylmenee", bn: "ঠান্ডা হওয়া → se kylmenee (এটা ঠান্ডা হচ্ছে)" },
    { fi: "kuumeta → kuume + ne → kuumene-", en: "to get hot → se kuumenee", bn: "গরম হওয়া → se kuumenee (এটা গরম হচ্ছে)" },
    { fi: "lyhetä → lyhe + ne → lyhene-", en: "to get shorter → ne lyhenevät", bn: "ছোট হওয়া → ne lyhenevät (এগুলো ছোট হচ্ছে)" },
    { fi: "nuoreta → nuore + ne → nuorene-", en: "to get younger → hän nuorenee", bn: "তরুণ হওয়া → hän nuorenee (সে তরুণ হচ্ছে)" },
  ],

  examples: [
    { fi: "Minä vanhenen.", bn: "আমি বুড়ো হচ্ছি।", en: "I'm getting older." },
    { fi: "Sää kylmenee.", bn: "আবহাওয়া ঠান্ডা হচ্ছে।", en: "The weather is getting colder." },
    { fi: "Vesi kuumenee.", bn: "পানি গরম হচ্ছে।", en: "The water is getting hot." },
    { fi: "Päivät lyhenevät syksyllä.", bn: "শরৎকালে দিন ছোট হয়।", en: "The days get shorter in autumn." },
    { fi: "Me vanhenemme yhdessä.", bn: "আমরা একসঙ্গে বুড়ো হই।", en: "We grow old together." },
    { fi: "Kahvi kylmenee.", bn: "কফি ঠান্ডা হয়ে যাচ্ছে।", en: "The coffee is getting cold." },
    { fi: "Ilma lämpenee keväällä.", bn: "বসন্তে আবহাওয়া উষ্ণ হয়।", en: "The air gets warmer in spring." },
    { fi: "Kylmeneekö sää?", bn: "আবহাওয়া কি ঠান্ডা হচ্ছে?", en: "Is the weather getting colder?" },
    { fi: "Minä en vanhene.", bn: "আমি বুড়ো হই না।", en: "I don't get older." },
    { fi: "Kahvi ei kuumene.", bn: "কফি গরম হচ্ছে না।", en: "The coffee isn't getting hot." },
  ],

  vocabulary: [
    { fi: "vanheta", bn: "বুড়ো হওয়া / বয়স বাড়া", en: "to grow old" },
    { fi: "kylmetä", bn: "ঠান্ডা হওয়া", en: "to get cold" },
    { fi: "kuumeta", bn: "গরম হওয়া", en: "to get hot" },
    { fi: "lyhetä", bn: "ছোট হওয়া", en: "to get shorter" },
    { fi: "nuoreta", bn: "তরুণ হওয়া", en: "to get younger" },
    { fi: "lämmetä", bn: "উষ্ণ হওয়া", en: "to get warmer (se lämpenee)" },
    { fi: "sää", bn: "আবহাওয়া", en: "weather" },
    { fi: "vesi", bn: "পানি", en: "water" },
    { fi: "päivä", bn: "দিন", en: "day" },
    { fi: "syksyllä", bn: "শরৎকালে", en: "in autumn" },
    { fi: "keväällä", bn: "বসন্তকালে", en: "in spring" },
  ],

  pronunciation: {
    fi: "Tyypin 6 muodoissa on ne-tavu: van-he-nen, kyl-me-nee. Hän-muodossa viimeinen e on pitkä: van-he-nee. Paino on aina ensimmäisellä tavulla: VAN-he-nen.",
    bn: "শ্রেণি ৬-এর রূপগুলোতে ne সিলেবল থাকে: van-he-nen, kyl-me-nee। hän-এর রূপে শেষ e দীর্ঘ: van-he-nee। জোর সবসময় প্রথম সিলেবলে: VAN-he-nen।",
    en: "Type 6 forms contain the syllable ne: van-he-nen, kyl-me-nee. In the hän form the last e is long: van-he-nee. Stress is always on the first syllable: VAN-he-nen.",
  },

  commonMistakes: [
    {
      fi: "Unohdetaan ne: väärin minä vanhen, oikein minä vanhenen.",
      bn: "ne ভুলে যাওয়া: ভুল minä vanhen, সঠিক minä vanhenen।",
      en: "Forgetting ne: wrong minä vanhen, right minä vanhenen.",
    },
    {
      fi: "Taivutetaan kuin tyyppi 4: väärin sää kylmeää, oikein sää kylmenee.",
      bn: "শ্রেণি ৪-এর মতো বদলানো: ভুল sää kylmeää, সঠিক sää kylmenee।",
      en: "Conjugating like type 4: wrong sää kylmeää, right sää kylmenee.",
    },
    {
      fi: "Unohdetaan hän-muodon pitkä e: väärin hän vanhene, oikein hän vanhenee.",
      bn: "hän-এর রূপের দীর্ঘ e ভুলে যাওয়া: ভুল hän vanhene, সঠিক hän vanhenee।",
      en: "Forgetting the long e in the hän form: wrong hän vanhene, right hän vanhenee.",
    },
    {
      fi: "Käytetään kielteisessä lauseessa infinitiiviä: väärin minä en vanheta, oikein minä en vanhene.",
      bn: "না-বাচক বাক্যে মূল রূপ ব্যবহার করা: ভুল minä en vanheta, সঠিক minä en vanhene।",
      en: "Using the infinitive in a negative sentence: wrong minä en vanheta, right minä en vanhene.",
    },
    {
      fi: "Pidetään kiivetä-verbiä tyyppinä 6: väärin minä kiivenen, oikein minä kiipeän (tyyppi 4).",
      bn: "kiivetä-কে শ্রেণি ৬ ধরে নেওয়া: ভুল minä kiivenen, সঠিক minä kiipeän (শ্রেণি ৪)।",
      en: "Treating kiivetä as type 6: wrong minä kiivenen, right minä kiipeän (type 4).",
    },
  ],

  practice: [
    {
      prompt: {
        fi: "Mikä verbityyppi? vanheta",
        bn: "কোন ক্রিয়াশ্রেণি? vanheta",
        en: "Which verb type? vanheta",
      },
      answer: "Verbityyppi 6 (-eta)",
    },
    {
      prompt: {
        fi: "Mikä verbityyppi? tarvita",
        bn: "কোন ক্রিয়াশ্রেণি? tarvita",
        en: "Which verb type? tarvita",
      },
      answer: "Verbityyppi 5 (-ita)",
    },
    {
      prompt: {
        fi: "Mikä on vartalo? kylmetä",
        bn: "মূল অংশ কী? kylmetä",
        en: "What is the stem? kylmetä",
      },
      answer: "kylmene-",
    },
    {
      prompt: {
        fi: "Mikä on vartalo? nuoreta",
        bn: "মূল অংশ কী? nuoreta",
        en: "What is the stem? nuoreta",
      },
      answer: "nuorene-",
    },
    {
      prompt: {
        fi: "Täydennä (vanheta): hän ___",
        bn: "পূরণ করো (vanheta): hän ___",
        en: "Complete (vanheta): hän ___",
      },
      answer: "hän vanhenee",
    },
    {
      prompt: {
        fi: "Valitse oikea muoto (lyhetä): Päivät ___ syksyllä.",
        bn: "সঠিক রূপ বেছে নাও (lyhetä): Päivät ___ syksyllä.",
        en: "Choose the correct form (lyhetä): Päivät ___ syksyllä.",
      },
      answer: "lyhenevät",
    },
    {
      prompt: {
        fi: "Muuta kysymykseksi: Sää kylmenee.",
        bn: "প্রশ্নে রূপান্তর করো: Sää kylmenee.",
        en: "Turn into a question: Sää kylmenee.",
      },
      answer: "Kylmeneekö sää?",
    },
    {
      prompt: {
        fi: "Käännä suomeksi: The water is getting hot.",
        bn: "ফিনিশে অনুবাদ করো: পানি গরম হচ্ছে।",
        en: "Translate into Finnish: The water is getting hot.",
      },
      answer: "Vesi kuumenee.",
    },
  ],

  quiz: [
    {
      question: {
        fi: "Mikä verbi kuuluu verbityyppiin 6?",
        en: "Which verb belongs to verb type 6?",
      },
      options: [
        { fi: "tarvita", en: "tarvita" },
        { fi: "vanheta", en: "vanheta" },
        { fi: "osata", en: "osata" },
        { fi: "tulla", en: "tulla" },
      ],
      correctIndex: 1,
      explanation: {
        fi: "Vanheta päättyy -eta, joten se on tyyppi 6. Tarvita on tyyppi 5, osata tyyppi 4 ja tulla tyyppi 3.",
        bn: "vanheta -eta দিয়ে শেষ হয়, তাই এটি শ্রেণি ৬। tarvita শ্রেণি ৫, osata শ্রেণি ৪, আর tulla শ্রেণি ৩।",
        en: "Vanheta ends in -eta, so it is type 6. Tarvita is type 5, osata type 4 and tulla type 3.",
      },
    },
    {
      question: {
        fi: "Mikä on verbin kylmetä vartalo?",
        en: "What is the stem of kylmetä?",
      },
      options: [
        { fi: "kylmene-", en: "kylmene-" },
        { fi: "kylme-", en: "kylme-" },
        { fi: "kylmeä-", en: "kylmeä-" },
        { fi: "kylmetse-", en: "kylmetse-" },
      ],
      correctIndex: 0,
      explanation: {
        fi: "Poistetaan tä ja lisätään ne: kylme-tä → kylmene-.",
        bn: "tä বাদ দিয়ে ne যোগ হয়: kylme-tä → kylmene-।",
        en: "Remove tä and add ne: kylme-tä → kylmene-.",
      },
    },
    {
      question: {
        fi: "Täydennä: Hän ___. (vanheta)",
        en: "Fill in: Hän ___. (vanheta)",
      },
      options: [
        { fi: "vanhenee", en: "vanhenee" },
        { fi: "vanhene", en: "vanhene" },
        { fi: "vanhetaa", en: "vanhetaa" },
        { fi: "vanhenen", en: "vanhenen" },
      ],
      correctIndex: 0,
      explanation: {
        fi: "Hän-muodossa vartalon viimeinen e pitenee: hän vanhenee.",
        bn: "hän-এর রূপে মূল অংশের শেষ e দীর্ঘ হয়: hän vanhenee।",
        en: "In the hän form the last e of the stem becomes long: hän vanhenee.",
      },
    },
    {
      question: {
        fi: "Täydennä: Päivät ___ syksyllä. (lyhetä)",
        en: "Fill in: Päivät ___ syksyllä. (lyhetä)",
      },
      options: [
        { fi: "lyhenevät", en: "lyhenevät" },
        { fi: "lyhenevat", en: "lyhenevat" },
        { fi: "lyhenee", en: "lyhenee" },
        { fi: "lyhenemme", en: "lyhenemme" },
      ],
      correctIndex: 0,
      explanation: {
        fi: "Päivät on monikko, ja lyhetä-verbissä on y ja ä, joten muoto on lyhenevät.",
        bn: "päivät বহুবচন, আর lyhetä-তে y ও ä আছে, তাই রূপটি lyhenevät।",
        en: "Päivät is plural, and lyhetä has y and ä, so the form is lyhenevät.",
      },
    },
    {
      question: {
        fi: "Täydennä: Minä en ___. (vanheta)",
        en: "Fill in: Minä en ___. (vanheta)",
      },
      options: [
        { fi: "vanheta", en: "vanheta" },
        { fi: "vanhene", en: "vanhene" },
        { fi: "vanhenen", en: "vanhenen" },
        { fi: "vanhenee", en: "vanhenee" },
      ],
      correctIndex: 1,
      explanation: {
        fi: "Kielteisessä lauseessa käytetään vartaloa: minä en vanhene.",
        bn: "না-বাচক বাক্যে মূল অংশ ব্যবহার হয়: minä en vanhene।",
        en: "A negative sentence uses the stem: minä en vanhene.",
      },
    },
  ],

  summary: {
    fi: "Verbityyppi 6 päättyy -eta/-etä (vanheta, kylmetä), ja verbit kertovat usein muutoksesta. Vartalo saadaan poistamalla ta/tä ja lisäämällä ne: vanheta → vanhene-. Hän-muodossa e pitenee (hän vanhenee). Kiivetä näyttää tyypiltä 6, mutta on tyyppi 4. Nyt tunnet kaikki kuusi verbityyppiä: 1 puhua, 2 juoda, 3 tulla, 4 osata, 5 tarvita, 6 vanheta. Astevaihtelu opitaan myöhemmin.",
    bn: "ক্রিয়াশ্রেণি ৬ শেষ হয় -eta/-etä দিয়ে (vanheta, kylmetä), আর এর ক্রিয়াগুলো প্রায়ই পরিবর্তন বোঝায়। মূল অংশ পেতে ta/tä বাদ দিয়ে ne যোগ করো: vanheta → vanhene-। hän-এর রূপে e দীর্ঘ হয় (hän vanhenee)। kiivetä দেখতে শ্রেণি ৬-এর মতো, কিন্তু আসলে শ্রেণি ৪। এখন তুমি ছয়টি ক্রিয়াশ্রেণিই জানো: ১ puhua, ২ juoda, ৩ tulla, ৪ osata, ৫ tarvita, ৬ vanheta। ব্যঞ্জন পরিবর্তন (astevaihtelu) পরে শেখানো হবে।",
    en: "Verb type 6 ends in -eta/-etä (vanheta, kylmetä), and its verbs often describe change. The stem is formed by removing ta/tä and adding ne: vanheta → vanhene-. The hän form lengthens the e (hän vanhenee). Kiivetä looks like type 6 but is type 4. Now you know all six verb types: 1 puhua, 2 juoda, 3 tulla, 4 osata, 5 tarvita, 6 vanheta. Consonant gradation comes later.",
  },
};