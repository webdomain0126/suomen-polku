import { Lesson } from "./types";

// Month 1 — Finnish Verb Type 4
// Stable lesson ID: month-1-verb-type-4 (see lessonRegistry.ts)
// Rule follows Rafiqul Hyder's material: infinitive marker -ata/-ätä
// (also -ota, -uta); present stem = remove ta/tä and add a/ä.
// His material notes that type 4 uses consonant gradation in reverse
// (tavata → tapaan, pakata → pakkaan); here it is only previewed.

export const verbType4Lesson: Lesson = {
  slug: "verb-type-4",
  month: 1,

  title: {
    fi: "Verbityyppi 4",
    bn: "ক্রিয়াশ্রেণি ৪",
    en: "Finnish Verb Type 4",
  },

  intro: {
    fi: "Olet nyt oppinut verbityypit 1, 2 ja 3. Seuraavaksi vuorossa on verbityyppi 4. Siihen kuuluu monia arjen hyödyllisiä verbejä, kuten osata, haluta ja pelata.",
    bn: "তুমি এখন ক্রিয়াশ্রেণি ১, ২ ও ৩ শিখেছ। এবার ক্রিয়াশ্রেণি ৪-এর পালা। এই শ্রেণিতে দৈনন্দিন জীবনের অনেক কাজের ক্রিয়া আছে, যেমন osata (জানা / পারা), haluta (চাওয়া) ও pelata (খেলা)।",
    en: "You have now learned verb types 1, 2 and 3. Next comes verb type 4. It includes many useful everyday verbs, such as osata, haluta and pelata.",
  },

  objectives: [
    {
      fi: "Tunnistaa verbityypin 4 infinitiivistä.",
      bn: "মূল রূপ দেখে ক্রিয়াশ্রেণি ৪ চিনতে পারা।",
      en: "Recognise verb type 4 from the infinitive.",
    },
    {
      fi: "Muodostaa tyypin 4 vartalon ja taivuttaa verbejä preesensissä.",
      bn: "শ্রেণি ৪-এর মূল অংশ তৈরি করা এবং বর্তমান কালে ক্রিয়া বদলাতে পারা।",
      en: "Form the type 4 stem and conjugate verbs in the present tense.",
    },
    {
      fi: "Erottaa verbityypit 1, 2, 3 ja 4 toisistaan.",
      bn: "ক্রিয়াশ্রেণি ১, ২, ৩ ও ৪ আলাদা করতে পারা।",
      en: "Tell verb types 1, 2, 3 and 4 apart.",
    },
  ],

  explanation: [
    {
      fi: "Verbityypin 4 infinitiivi päättyy vokaaliin + ta tai tä. Tavallisin loppu on -ata/-ätä (pelata, vastata, osata, herätä), mutta myös -ota/-ötä (siivota) ja -uta/-ytä (haluta) kuuluvat tähän tyyppiin.",
      bn: "ক্রিয়াশ্রেণি ৪-এর মূল রূপ শেষ হয় স্বরবর্ণ + ta অথবা tä দিয়ে। সবচেয়ে প্রচলিত শেষাংশ -ata/-ätä (pelata, vastata, osata, herätä), তবে -ota/-ötä (siivota) ও -uta/-ytä (haluta)-ও এই শ্রেণির।",
      en: "The verb type 4 infinitive ends in a vowel + ta or tä. The most common ending is -ata/-ätä (pelata, vastata, osata, herätä), but -ota/-ötä (siivota) and -uta/-ytä (haluta) also belong to this type.",
    },
    {
      fi: "Tärkeä ero tyyppiin 3: tyypissä 4 ennen ta/tä-loppua on vokaali (osa-ta), tyypissä 3 konsonantti s (pes-tä). Siksi osata on tyyppi 4 ja pestä tyyppi 3.",
      bn: "শ্রেণি ৩-এর সাথে একটি গুরুত্বপূর্ণ পার্থক্য: শ্রেণি ৪-এ ta/tä-র আগে একটি স্বরবর্ণ থাকে (osa-ta), আর শ্রেণি ৩-এ থাকে ব্যঞ্জনবর্ণ s (pes-tä)। তাই osata শ্রেণি ৪, আর pestä শ্রেণি ৩।",
      en: "An important difference from type 3: in type 4 there is a vowel before ta/tä (osa-ta), in type 3 the consonant s (pes-tä). That's why osata is type 4 and pestä is type 3.",
    },
    {
      fi: "Vartalon sääntö: poista ta/tä ja lisää a tai ä. Jos verbi päättyy -ata/-ätä, syntyy pitkä vokaali: osa-ta → osaa-, pela-ta → pelaa-, herä-tä → herää-. Jos ennen loppua on muu vokaali, syntyy kaksi eri vokaalia: halu-ta → halua-, siivo-ta → siivoa-.",
      bn: "মূল অংশের নিয়ম: ta/tä বাদ দাও এবং a অথবা ä যোগ করো। ক্রিয়াটি -ata/-ätä দিয়ে শেষ হলে একটি দীর্ঘ স্বর তৈরি হয়: osa-ta → osaa-, pela-ta → pelaa-, herä-tä → herää-। শেষের আগে অন্য স্বর থাকলে দুটি আলাদা স্বর তৈরি হয়: halu-ta → halua-, siivo-ta → siivoa-।",
      en: "The stem rule: remove ta/tä and add a or ä. If the verb ends in -ata/-ätä, you get a long vowel: osa-ta → osaa-, pela-ta → pelaa-, herä-tä → herää-. If there's a different vowel before the ending, you get two different vowels: halu-ta → halua-, siivo-ta → siivoa-.",
    },
    {
      fi: "Hän-muoto: jos vartalo päättyy pitkään vokaaliin (aa, ää), hän-muoto on sama kuin vartalo: hän osaa, hän herää. Jos vartalo päättyy kahteen eri vokaaliin (ua, oa), viimeinen vokaali pitenee: hän haluaa, hän siivoaa.",
      bn: "hän-এর রূপ: মূল অংশ দীর্ঘ স্বরে (aa, ää) শেষ হলে hän-এর রূপ মূল অংশের মতোই থাকে: hän osaa, hän herää। মূল অংশ দুটি আলাদা স্বরে (ua, oa) শেষ হলে শেষ স্বরটি দীর্ঘ হয়: hän haluaa, hän siivoaa।",
      en: "The hän form: if the stem ends in a long vowel (aa, ää), the hän form is the same as the stem: hän osaa, hän herää. If the stem ends in two different vowels (ua, oa), the last vowel becomes long: hän haluaa, hän siivoaa.",
    },
    {
      fi: "Osata taipuu näin: minä osaan, sinä osaat, hän osaa, me osaamme, te osaatte, he osaavat. Haluta taipuu näin: minä haluan, sinä haluat, hän haluaa, me haluamme, te haluatte, he haluavat.",
      bn: "osata (জানা / পারা) বদলায় এভাবে: minä osaan, sinä osaat, hän osaa, me osaamme, te osaatte, he osaavat। haluta (চাওয়া) বদলায় এভাবে: minä haluan, sinä haluat, hän haluaa, me haluamme, te haluatte, he haluavat।",
      en: "Osata conjugates like this: minä osaan, sinä osaat, hän osaa, me osaamme, te osaatte, he osaavat. Haluta conjugates like this: minä haluan, sinä haluat, hän haluaa, me haluamme, te haluatte, he haluavat.",
    },
    {
      fi: "Herätä taipuu näin: minä herään, sinä heräät, hän herää, me heräämme, te heräätte, he heräävät. Huomaa vokaalisointu: herätä-verbissä on ä, joten pääte on -vät.",
      bn: "herätä (ঘুম থেকে জাগা) বদলায় এভাবে: minä herään, sinä heräät, hän herää, me heräämme, te heräätte, he heräävät। স্বরসংগতি খেয়াল করো: herätä-তে ä আছে, তাই প্রত্যয় -vät।",
      en: "Herätä conjugates like this: minä herään, sinä heräät, hän herää, me heräämme, te heräätte, he heräävät. Note the vowel harmony: herätä has ä, so the ending is -vät.",
    },
    {
      fi: "Huomio: monessa tyypin 4 verbissä konsonantti vahvistuu preesensissä, esimerkiksi tavata → minä tapaan ja pakata → minä pakkaan. Muutos on päinvastainen kuin tyypissä 1 (lukea → minä luen). Tätä astevaihtelua opitaan myöhemmin. Tämän oppitunnin pääesimerkeissä sitä ei ole.",
      bn: "খেয়াল রাখো: শ্রেণি ৪-এর অনেক ক্রিয়ায় বর্তমান কালে ব্যঞ্জনবর্ণ শক্তিশালী হয়, যেমন tavata (দেখা করা) → minä tapaan, pakata (ব্যাগ গোছানো) → minä pakkaan। এই পরিবর্তন শ্রেণি ১-এর উল্টো (lukea → minä luen)। এই ব্যঞ্জন পরিবর্তন (astevaihtelu) পরে শেখানো হবে। এই পাঠের প্রধান উদাহরণগুলোতে এটি নেই।",
      en: "Note: in many type 4 verbs a consonant becomes stronger in the present tense, for example tavata → minä tapaan and pakata → minä pakkaan. The change goes the opposite way from type 1 (lukea → minä luen). This consonant gradation is taught later. The main examples in this lesson have none.",
    },
    {
      fi: "Vertailu: tyyppi 1 päättyy vokaali + a/ä (ostaa → osta-), tyyppi 2 -da/-dä (juoda → juo-), tyyppi 3 -la/-ra/-na/-sta (tulla → tule-) ja tyyppi 4 vokaali + ta/tä (osata → osaa-). Huomaa erityisesti ostaa (tyyppi 1) ja osata (tyyppi 4): minä ostan, mutta minä osaan.",
      bn: "তুলনা: শ্রেণি ১ শেষ হয় স্বরবর্ণ + a/ä দিয়ে (ostaa → osta-), শ্রেণি ২ -da/-dä দিয়ে (juoda → juo-), শ্রেণি ৩ -la/-ra/-na/-sta দিয়ে (tulla → tule-), আর শ্রেণি ৪ স্বরবর্ণ + ta/tä দিয়ে (osata → osaa-)। বিশেষভাবে খেয়াল করো ostaa (কেনা, শ্রেণি ১) ও osata (জানা, শ্রেণি ৪): minä ostan, কিন্তু minä osaan।",
      en: "Comparison: type 1 ends in vowel + a/ä (ostaa → osta-), type 2 in -da/-dä (juoda → juo-), type 3 in -la/-ra/-na/-sta (tulla → tule-), and type 4 in vowel + ta/tä (osata → osaa-). Watch out especially for ostaa (type 1) and osata (type 4): minä ostan, but minä osaan.",
    },
    {
      fi: "Kysymys tehdään -ko/-kö-päätteellä: Osaatko suomea? Haluatko kahvia? Pieni esimakua kiellosta: kielteisessä lauseessa käytetään vartaloa: Minä en osaa uida. Hän ei halua tulla.",
      bn: "প্রশ্ন তৈরি হয় -ko/-kö দিয়ে: Osaatko suomea? (তুমি কি ফিনিশ জানো?) Haluatko kahvia? (তুমি কি কফি চাও?) না-বাচক বাক্যের ছোট্ট পরিচয়: না-বাচক বাক্যে মূল অংশ ব্যবহার হয়: Minä en osaa uida (আমি সাঁতার জানি না)। Hän ei halua tulla (সে আসতে চায় না)।",
      en: "Questions are made with -ko/-kö: Osaatko suomea? Haluatko kahvia? A small preview of negation: a negative sentence uses the stem: Minä en osaa uida. Hän ei halua tulla.",
    },
  ],

  // Reuses the lesson table: one row per type 4 verb.
  pronounTable: [
    { fi: "osata → osa + a → osaa-", en: "-ata · to know how → minä osaan, hän osaa", bn: "জানা / পারা → minä osaan (আমি জানি)" },
    { fi: "pelata → pela + a → pelaa-", en: "-ata · to play → minä pelaan, hän pelaa", bn: "খেলা → minä pelaan (আমি খেলি)" },
    { fi: "vastata → vasta + a → vastaa-", en: "-ata · to answer → minä vastaan, hän vastaa", bn: "উত্তর দেওয়া → minä vastaan (আমি উত্তর দিই)" },
    { fi: "herätä → herä + ä → herää-", en: "-ätä · to wake up → minä herään, hän herää", bn: "ঘুম থেকে জাগা → minä herään (আমি জাগি)" },
    { fi: "haluta → halu + a → halua-", en: "-uta · to want → minä haluan, hän haluaa", bn: "চাওয়া → minä haluan (আমি চাই)" },
    { fi: "siivota → siivo + a → siivoa-", en: "-ota · to clean → minä siivoan, hän siivoaa", bn: "পরিষ্কার করা → minä siivoan (আমি পরিষ্কার করি)" },
  ],

  examples: [
    { fi: "Minä osaan suomea.", bn: "আমি ফিনিশ জানি।", en: "I know Finnish." },
    { fi: "Hän haluaa kahvia.", bn: "সে কফি চায়।", en: "He/She wants coffee." },
    { fi: "Me pelaamme jalkapalloa.", bn: "আমরা ফুটবল খেলি।", en: "We play football." },
    { fi: "Sinä vastaat oikein.", bn: "তুমি সঠিক উত্তর দাও।", en: "You answer correctly." },
    { fi: "He siivoavat keittiön.", bn: "তারা রান্নাঘর পরিষ্কার করে।", en: "They clean the kitchen." },
    { fi: "Minä herään aikaisin.", bn: "আমি তাড়াতাড়ি ঘুম থেকে উঠি।", en: "I wake up early." },
    { fi: "Te haluatte teetä.", bn: "তোমরা চা চাও।", en: "You (all) want tea." },
    { fi: "Osaatko englantia?", bn: "তুমি কি ইংরেজি জানো?", en: "Do you know English?" },
    { fi: "Haluatko kahvia?", bn: "তুমি কি কফি চাও?", en: "Do you want coffee?" },
    { fi: "Minä en osaa uida.", bn: "আমি সাঁতার জানি না।", en: "I can't swim." },
    { fi: "Hän ei halua tulla.", bn: "সে আসতে চায় না।", en: "He/She doesn't want to come." },
  ],

  vocabulary: [
    { fi: "osata", bn: "জানা / পারা", en: "to know how, can" },
    { fi: "haluta", bn: "চাওয়া", en: "to want" },
    { fi: "pelata", bn: "খেলা", en: "to play (a game)" },
    { fi: "vastata", bn: "উত্তর দেওয়া", en: "to answer" },
    { fi: "siivota", bn: "পরিষ্কার করা", en: "to clean" },
    { fi: "herätä", bn: "ঘুম থেকে জাগা", en: "to wake up" },
    { fi: "tavata", bn: "দেখা করা", en: "to meet (minä tapaan)" },
    { fi: "jalkapallo", bn: "ফুটবল", en: "football" },
    { fi: "keittiö", bn: "রান্নাঘর", en: "kitchen" },
    { fi: "oikein", bn: "সঠিকভাবে", en: "correctly" },
  ],

  pronunciation: {
    fi: "Tyypin 4 muodoissa on usein pitkä vokaali: o-saan, pe-laan, he-rään. Hän haluaa -muodossa u ja aa äännetään erikseen: ha-lu-aa. Kuuntele eroa: ostan (tyyppi 1) ja osaan (tyyppi 4). Paino on aina ensimmäisellä tavulla.",
    bn: "শ্রেণি ৪-এর রূপগুলোতে প্রায়ই দীর্ঘ স্বর থাকে: o-saan, pe-laan, he-rään। hän haluaa-তে u ও aa আলাদাভাবে উচ্চারিত হয়: ha-lu-aa। পার্থক্যটা শোনো: ostan (শ্রেণি ১, আমি কিনি) ও osaan (শ্রেণি ৪, আমি জানি)। জোর সবসময় প্রথম সিলেবলে।",
    en: "Type 4 forms often have a long vowel: o-saan, pe-laan, he-rään. In hän haluaa, the u and the aa are pronounced separately: ha-lu-aa. Listen for the difference: ostan (type 1) and osaan (type 4). Stress is always on the first syllable.",
  },

  commonMistakes: [
    {
      fi: "Sekoitetaan ostaa ja osata: minä ostan (ostaa, tyyppi 1), mutta minä osaan (osata, tyyppi 4).",
      bn: "ostaa ও osata গুলিয়ে ফেলা: minä ostan (ostaa — কেনা, শ্রেণি ১), কিন্তু minä osaan (osata — জানা, শ্রেণি ৪)।",
      en: "Confusing ostaa and osata: minä ostan (ostaa, type 1), but minä osaan (osata, type 4).",
    },
    {
      fi: "Jätetään t vartaloon: väärin minä osatan, oikein minä osaan.",
      bn: "মূল অংশে t রেখে দেওয়া: ভুল minä osatan, সঠিক minä osaan।",
      en: "Keeping the t in the stem: wrong minä osatan, right minä osaan.",
    },
    {
      fi: "Unohdetaan hän-muodon pitkä vokaali ua-vartalossa: väärin hän halua, oikein hän haluaa.",
      bn: "ua-তে শেষ হওয়া মূল অংশে hän-এর দীর্ঘ স্বর ভুলে যাওয়া: ভুল hän halua, সঠিক hän haluaa।",
      en: "Forgetting the long vowel in the hän form of a ua-stem: wrong hän halua, right hän haluaa.",
    },
    {
      fi: "Pidennetään jo pitkää vokaalia: väärin hän osaaa, oikein hän osaa. Suomessa ei ole kolmea samaa vokaalia peräkkäin.",
      bn: "আগে থেকেই দীর্ঘ স্বরকে আরও দীর্ঘ করা: ভুল hän osaaa, সঠিক hän osaa। ফিনিশে পরপর তিনটি একই স্বর হয় না।",
      en: "Lengthening an already long vowel: wrong hän osaaa, right hän osaa. Finnish never has three identical vowels in a row.",
    },
    {
      fi: "Pidetään pestä-verbiä tyyppinä 4. Ennen tä-loppua on s, joten se on tyyppi 3: minä pesen.",
      bn: "pestä-কে শ্রেণি ৪ ধরে নেওয়া। tä-র আগে s আছে, তাই এটি শ্রেণি ৩: minä pesen।",
      en: "Treating pestä as type 4. There's an s before tä, so it is type 3: minä pesen.",
    },
  ],

  practice: [
    {
      prompt: {
        fi: "Mikä verbityyppi? pelata",
        bn: "কোন ক্রিয়াশ্রেণি? pelata",
        en: "Which verb type? pelata",
      },
      answer: "Verbityyppi 4 (vokaali + ta)",
    },
    {
      prompt: {
        fi: "Mikä verbityyppi? pestä",
        bn: "কোন ক্রিয়াশ্রেণি? pestä",
        en: "Which verb type? pestä",
      },
      answer: "Verbityyppi 3 (s + tä)",
    },
    {
      prompt: {
        fi: "Mikä on vartalo? vastata",
        bn: "মূল অংশ কী? vastata",
        en: "What is the stem? vastata",
      },
      answer: "vastaa-",
    },
    {
      prompt: {
        fi: "Mikä on vartalo? haluta",
        bn: "মূল অংশ কী? haluta",
        en: "What is the stem? haluta",
      },
      answer: "halua-",
    },
    {
      prompt: {
        fi: "Täydennä (osata): minä ___",
        bn: "পূরণ করো (osata): minä ___",
        en: "Complete (osata): minä ___",
      },
      answer: "minä osaan",
    },
    {
      prompt: {
        fi: "Valitse oikea muoto (haluta): Hän ___ kahvia.",
        bn: "সঠিক রূপ বেছে নাও (haluta): Hän ___ kahvia.",
        en: "Choose the correct form (haluta): Hän ___ kahvia.",
      },
      answer: "haluaa",
    },
    {
      prompt: {
        fi: "Muuta kysymykseksi: Sinä osaat suomea.",
        bn: "প্রশ্নে রূপান্তর করো: Sinä osaat suomea.",
        en: "Turn into a question: Sinä osaat suomea.",
      },
      answer: "Osaatko (sinä) suomea?",
    },
    {
      prompt: {
        fi: "Käännä suomeksi: I wake up early.",
        bn: "ফিনিশে অনুবাদ করো: আমি তাড়াতাড়ি ঘুম থেকে উঠি।",
        en: "Translate into Finnish: I wake up early.",
      },
      answer: "Minä herään aikaisin.",
    },
  ],

  quiz: [
    {
      question: {
        fi: "Mikä verbi kuuluu verbityyppiin 4?",
        en: "Which verb belongs to verb type 4?",
      },
      options: [
        { fi: "ostaa", en: "ostaa" },
        { fi: "juoda", en: "juoda" },
        { fi: "pelata", en: "pelata" },
        { fi: "tulla", en: "tulla" },
      ],
      correctIndex: 2,
      explanation: {
        fi: "Pelata päättyy vokaali + ta, joten se on tyyppi 4. Ostaa on tyyppi 1, juoda tyyppi 2 ja tulla tyyppi 3.",
        bn: "pelata স্বরবর্ণ + ta দিয়ে শেষ হয়, তাই এটি শ্রেণি ৪। ostaa শ্রেণি ১, juoda শ্রেণি ২, আর tulla শ্রেণি ৩।",
        en: "Pelata ends in vowel + ta, so it is type 4. Ostaa is type 1, juoda type 2 and tulla type 3.",
      },
    },
    {
      question: {
        fi: "Mikä on verbin haluta vartalo?",
        en: "What is the stem of haluta?",
      },
      options: [
        { fi: "halua-", en: "halua-" },
        { fi: "halu-", en: "halu-" },
        { fi: "haluta-", en: "haluta-" },
        { fi: "halut-", en: "halut-" },
      ],
      correctIndex: 0,
      explanation: {
        fi: "Poistetaan ta ja lisätään a: halu-ta → halua-.",
        bn: "ta বাদ দিয়ে a যোগ হয়: halu-ta → halua-।",
        en: "Remove ta and add a: halu-ta → halua-.",
      },
    },
    {
      question: {
        fi: "Täydennä: Hän ___ suomea. (osata)",
        en: "Fill in: Hän ___ suomea. (osata)",
      },
      options: [
        { fi: "osaa", en: "osaa" },
        { fi: "osaaa", en: "osaaa" },
        { fi: "osata", en: "osata" },
        { fi: "osaan", en: "osaan" },
      ],
      correctIndex: 0,
      explanation: {
        fi: "Vartalo osaa- päättyy jo pitkään vokaaliin, joten hän-muoto on hän osaa.",
        bn: "মূল অংশ osaa- আগেই দীর্ঘ স্বরে শেষ হয়, তাই hän-এর রূপ hän osaa।",
        en: "The stem osaa- already ends in a long vowel, so the hän form is hän osaa.",
      },
    },
    {
      question: {
        fi: "Täydennä: Hän ___ kahvia. (haluta)",
        en: "Fill in: Hän ___ kahvia. (haluta)",
      },
      options: [
        { fi: "halua", en: "halua" },
        { fi: "haluaa", en: "haluaa" },
        { fi: "haluan", en: "haluan" },
        { fi: "haluta", en: "haluta" },
      ],
      correctIndex: 1,
      explanation: {
        fi: "Vartalo halua- päättyy kahteen eri vokaaliin, joten viimeinen pitenee: hän haluaa.",
        bn: "মূল অংশ halua- দুটি আলাদা স্বরে শেষ হয়, তাই শেষেরটি দীর্ঘ হয়: hän haluaa।",
        en: "The stem halua- ends in two different vowels, so the last one becomes long: hän haluaa.",
      },
    },
    {
      question: {
        fi: "Täydennä: Me ___ jalkapalloa. (pelata)",
        en: "Fill in: Me ___ jalkapalloa. (pelata)",
      },
      options: [
        { fi: "pelaamme", en: "pelaamme" },
        { fi: "pelatamme", en: "pelatamme" },
        { fi: "pelamme", en: "pelamme" },
        { fi: "pelaavat", en: "pelaavat" },
      ],
      correctIndex: 0,
      explanation: {
        fi: "Vartalo on pelaa- ja me-muodon pääte -mme: me pelaamme.",
        bn: "মূল অংশ pelaa-, আর me-র প্রত্যয় -mme: me pelaamme।",
        en: "The stem is pelaa- and the me ending is -mme: me pelaamme.",
      },
    },
  ],

  summary: {
    fi: "Verbityyppi 4 päättyy vokaali + ta/tä (osata, haluta, herätä). Vartalo saadaan poistamalla ta/tä ja lisäämällä a/ä: osata → osaa-, haluta → halua-. Hän-muoto on sama kuin vartalo, jos vartalo päättyy pitkään vokaaliin (hän osaa), mutta muuten viimeinen vokaali pitenee (hän haluaa). Muista ero: ostaa (tyyppi 1) ja osata (tyyppi 4). Astevaihtelu ja verbityypit 5–6 opitaan myöhemmin.",
    bn: "ক্রিয়াশ্রেণি ৪ শেষ হয় স্বরবর্ণ + ta/tä দিয়ে (osata, haluta, herätä)। মূল অংশ পেতে ta/tä বাদ দিয়ে a/ä যোগ করো: osata → osaa-, haluta → halua-। মূল অংশ দীর্ঘ স্বরে শেষ হলে hän-এর রূপ মূল অংশের মতোই (hän osaa), নইলে শেষ স্বরটি দীর্ঘ হয় (hän haluaa)। পার্থক্যটা মনে রাখো: ostaa (শ্রেণি ১) ও osata (শ্রেণি ৪)। ব্যঞ্জন পরিবর্তন ও ক্রিয়াশ্রেণি ৫–৬ পরে শেখানো হবে।",
    en: "Verb type 4 ends in vowel + ta/tä (osata, haluta, herätä). The stem is formed by removing ta/tä and adding a/ä: osata → osaa-, haluta → halua-. The hän form equals the stem if the stem ends in a long vowel (hän osaa); otherwise the last vowel lengthens (hän haluaa). Remember the difference: ostaa (type 1) and osata (type 4). Consonant gradation and verb types 5–6 come later.",
  },
};