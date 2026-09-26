import { Lesson } from "./types";

export const personalPronounsLesson: Lesson = {
  slug: "personal-pronouns",
  month: 1,

  title: {
    fi: "Henkilökohtaiset pronominit",
    en: "Personal Pronouns",
    bn: "ব্যক্তিবাচক সর্বনাম",
  },

  intro: {
    fi: "Suomen henkilökohtaiset pronominit ovat yksi ensimmäisistä asioista, jotka jokainen suomen oppija tarvitsee. Niitä käytetään joka ikisessä lauseessa, joten ne kannattaa oppia kunnolla heti alussa.",
    en: "Finnish personal pronouns are one of the very first things every learner needs. They appear in almost every sentence you'll ever say in Finnish, so it's worth learning them properly from the start.",
    bn: "ফিনিশ ব্যক্তিবাচক সর্বনাম প্রতিটি শিক্ষার্থীর প্রথম দিকে শেখা উচিত এমন একটি বিষয়। প্রায় প্রতিটি বাক্যেই এগুলো ব্যবহার হয়, তাই শুরুতেই এগুলো ভালোভাবে শেখা জরুরি।",
  },

  objectives: [
    {
      fi: "Tunnistaa ja käyttää kaikkia kahdeksaa suomen persoonapronominia.",
      en: "Recognize and use all eight Finnish personal pronouns.",
      bn: "আটটি ফিনিশ ব্যক্তিবাচক সর্বনাম চিনতে ও ব্যবহার করতে পারা।",
    },
    {
      fi: "Ymmärtää eron yksikön ja monikon pronominien välillä.",
      en: "Understand the difference between singular and plural pronouns.",
      bn: "একবচন ও বহুবচন সর্বনামের মধ্যে পার্থক্য বুঝতে পারা।",
    },
    {
      fi: "Osata muodostaa yksinkertaisia lauseita olla-verbin kanssa.",
      en: "Be able to form simple sentences using the verb olla (\"to be\").",
      bn: "olla (\"হওয়া\") ক্রিয়া দিয়ে সহজ বাক্য তৈরি করতে পারা।",
    },
  ],

  pronounTable: [
    { fi: "minä", en: "I", bn: "আমি" },
    { fi: "sinä", en: "you (singular)", bn: "তুমি / আপনি" },
    { fi: "hän", en: "he / she", bn: "সে / তিনি" },
    { fi: "se", en: "it / this", bn: "এটি / সেটা" },
    { fi: "me", en: "we", bn: "আমরা" },
    { fi: "te", en: "you (plural / formal)", bn: "তোমরা / আপনারা" },
    { fi: "he", en: "they (people)", bn: "তারা" },
    { fi: "ne", en: "they / these (things, spoken Finnish)", bn: "তারা / এগুলো" },
  ],

  explanation: [
    {
      fi: "Suomessa on kahdeksan persoonapronominia: neljä yksikössä (minä, sinä, hän, se) ja neljä monikossa (me, te, he, ne).",
      en: "Finnish has eight personal pronouns: four singular (minä, sinä, hän, se) and four plural (me, te, he, ne).",
      bn: "ফিনিশ ভাষায় আটটি ব্যক্তিবাচক সর্বনাম আছে: চারটি একবচনে (minä, sinä, hän, se) এবং চারটি বহুবচনে (me, te, he, ne)।",
    },
    {
      fi: "Tärkeä ero englantiin: suomessa hän tarkoittaa sekä \"hän\" (mies) että \"hän\" (nainen). Suomi ei erottele sukupuolta pronomineissa lainkaan.",
      en: "An important difference from English: hän means both \"he\" and \"she\". Finnish pronouns don't distinguish gender at all.",
      bn: "ইংরেজি থেকে গুরুত্বপূর্ণ পার্থক্য: hän শব্দটি \"সে (পুরুষ)\" এবং \"সে (নারী)\" উভয় অর্থেই ব্যবহৃত হয়। ফিনিশ সর্বনামে লিঙ্গভেদ নেই।",
    },
    {
      fi: "Puhekielessä hän ja he korvataan usein sanoilla se ja ne, vaikka puhutaan ihmisistä. Kirjakielessä käytetään kuitenkin hän ja he ihmisille.",
      en: "In spoken Finnish, hän and he are often replaced by se and ne, even when talking about people. In formal/written Finnish, hän and he are used for people.",
      bn: "কথ্য ফিনিশে মানুষ সম্পর্কে বলার সময়ও প্রায়ই hän ও he-এর বদলে se ও ne ব্যবহার করা হয়। লিখিত/আনুষ্ঠানিক ফিনিশে মানুষের জন্য hän ও he ব্যবহার হয়।",
    },
    {
      fi: "Te-pronominia käytetään kahdessa tilanteessa: puhuttaessa useammalle henkilölle, tai kohteliaana muotona yhdelle henkilölle (kuten teitittely).",
      en: "The pronoun te is used in two situations: when speaking to more than one person, or as a polite/formal way of addressing a single person.",
      bn: "te সর্বনামটি দুই ক্ষেত্রে ব্যবহৃত হয়: একাধিক ব্যক্তিকে সম্বোধন করার সময়, অথবা একজন ব্যক্তিকে ভদ্রভাবে/আনুষ্ঠানিকভাবে সম্বোধন করার সময়।",
    },
  ],

  examples: [
    { fi: "Minä olen opiskelija.", bn: "আমি একজন শিক্ষার্থী।", en: "I am a student." },
    { fi: "Sinä olet opiskelija.", bn: "তুমি একজন শিক্ষার্থী।", en: "You are a student." },
    { fi: "Hän on opettaja.", bn: "তিনি একজন শিক্ষক।", en: "He/She is a teacher." },
    { fi: "Me olemme opiskelijoita.", bn: "আমরা শিক্ষার্থী।", en: "We are students." },
    { fi: "Te olette opettajia.", bn: "আপনারা শিক্ষক।", en: "You (all) are teachers." },
    { fi: "He ovat opiskelijoita.", bn: "তারা শিক্ষার্থী।", en: "They are students." },
  ],

  vocabulary: [
    { fi: "opiskelija", bn: "শিক্ষার্থী", en: "student" },
    { fi: "opettaja", bn: "শিক্ষক", en: "teacher" },
    { fi: "ystävä", bn: "বন্ধু", en: "friend" },
    { fi: "henkilö", bn: "ব্যক্তি", en: "person" },
  ],

  pronunciation: {
    fi: "Suomessa jokainen kirjain äännetään aina samalla tavalla, ja sanan paino on aina ensimmäisellä tavulla. Kaksoisvokaali tai -konsonantti tarkoittaa pidempää äännettä: esimerkiksi olla äännetään pidemmällä l-äänteellä kuin ola.",
    en: "In Finnish, every letter is pronounced consistently, and word stress always falls on the first syllable. A doubled vowel or consonant means a longer sound: for example, olla is pronounced with a longer \"l\" sound than a single-l word would be.",
    bn: "ফিনিশ ভাষায় প্রতিটি অক্ষর সবসময় একইভাবে উচ্চারিত হয়, এবং শব্দের জোর সবসময় প্রথম সিলেবলে পড়ে। দ্বৈত স্বরবর্ণ বা ব্যঞ্জনবর্ণ মানে দীর্ঘ উচ্চারণ — যেমন olla-তে \"ল\" ধ্বনিটি একক \"ল\"-এর চেয়ে দীর্ঘ।",
  },

  commonMistakes: [
    {
      fi: "Sekoitetaan hän ja he: hän on yksikössä (yksi henkilö), he on monikossa (useampi henkilö).",
      en: "Confusing hän and he: hän is singular (one person), he is plural (multiple people).",
      bn: "hän এবং he গুলিয়ে ফেলা: hän একবচন (একজন ব্যক্তি), he বহুবচন (একাধিক ব্যক্তি)।",
    },
    {
      fi: "Sekoitetaan sinä ja te: sinä on yhdelle henkilölle epämuodollisesti, te on useammalle henkilölle tai kohteliaana muotona.",
      en: "Confusing sinä and te: sinä is informal, to one person; te is for multiple people or as a polite/formal form.",
      bn: "sinä এবং te গুলিয়ে ফেলা: sinä অনানুষ্ঠানিকভাবে একজনকে বলার জন্য; te একাধিক ব্যক্তি বা ভদ্র/আনুষ্ঠানিক রূপের জন্য।",
    },
    {
      fi: "Luullaan, että hän kertoo puhujan sukupuolen. Hän ei kerro, onko kyseessä mies vai nainen.",
      en: "Assuming hän tells you the person's gender. It does not — hän works for both \"he\" and \"she\".",
      bn: "মনে করা যে hän দিয়ে লিঙ্গ বোঝা যায়। আসলে hän পুরুষ ও নারী উভয়ের জন্যই ব্যবহৃত হয়।",
    },
    {
      fi: "Unohdetaan, että se ja ne viittaavat yleensä esineisiin tai asioihin, mutta puhekielessä niitä käytetään usein myös ihmisistä.",
      en: "Forgetting that se and ne usually refer to things, but in spoken Finnish they're also commonly used for people.",
      bn: "ভুলে যাওয়া যে se ও ne সাধারণত জিনিসের জন্য ব্যবহৃত হয়, কিন্তু কথ্য ফিনিশে মানুষের জন্যও এগুলো প্রায়ই ব্যবহার হয়।",
    },
  ],

  practice: [
    {
      prompt: {
        fi: "Täydennä lause oikealla pronominilla: ___ olen opiskelija.",
        en: "Fill in the blank with the correct pronoun: ___ olen opiskelija.",
        bn: "সঠিক সর্বনাম দিয়ে বাক্যটি সম্পূর্ণ করো: ___ olen opiskelija.",
      },
      answer: "Minä",
      hint: { fi: "Kuka puhuu itsestään?", en: "Who is speaking about themselves?", bn: "কে নিজের সম্পর্কে কথা বলছে?" },
    },
    {
      prompt: {
        fi: "Valitse oikea pronomini: ___ on opettaja. (Puhutaan yhdestä henkilöstä.)",
        en: "Choose the correct pronoun: ___ on opettaja. (Talking about one person.)",
        bn: "সঠিক সর্বনাম বেছে নাও: ___ on opettaja. (একজন ব্যক্তির কথা বলা হচ্ছে।)",
      },
      answer: "Hän",
      hint: { fi: "Yksi henkilö, ei tiedetä sukupuolta.", en: "One person, gender not specified.", bn: "একজন ব্যক্তি, লিঙ্গ উল্লেখ নেই।" },
    },
    {
      prompt: {
        fi: "Täydennä: ___ ovat opiskelijoita. (Puhutaan useasta henkilöstä.)",
        en: "Fill in: ___ ovat opiskelijoita. (Talking about several people.)",
        bn: "সম্পূর্ণ করো: ___ ovat opiskelijoita. (একাধিক ব্যক্তির কথা বলা হচ্ছে।)",
      },
      answer: "He",
      hint: { fi: "Monikko, ihmisiä.", en: "Plural, people.", bn: "বহুবচন, মানুষ।" },
    },
  ],

  quiz: [
    {
      question: { fi: "Mikä pronomini tarkoittaa \"minä\" englanniksi \"I\"?", en: "Which pronoun means \"I\"?", bn: "কোন সর্বনামের অর্থ \"আমি\"?" },
      options: [
        { fi: "sinä", en: "sinä", bn: "sinä" },
        { fi: "minä", en: "minä", bn: "minä" },
        { fi: "hän", en: "hän", bn: "hän" },
        { fi: "me", en: "me", bn: "me" },
      ],
      correctIndex: 1,
      explanation: { fi: "Minä tarkoittaa \"I\" englanniksi ja \"আমি\" bengaliksi.", en: "Minä means \"I\".", bn: "Minä মানে \"আমি\"।" },
    },
    {
      question: { fi: "Kumpi lause on oikein, kun puhutaan yhdestä opettajasta?", en: "Which sentence is correct when talking about one teacher?", bn: "একজন শিক্ষকের কথা বলার সময় কোন বাক্যটি সঠিক?" },
      options: [
        { fi: "He on opettaja.", en: "He on opettaja.", bn: "He on opettaja." },
        { fi: "Hän on opettaja.", en: "Hän on opettaja.", bn: "Hän on opettaja." },
        { fi: "Ne on opettaja.", en: "Ne on opettaja.", bn: "Ne on opettaja." },
        { fi: "Me on opettaja.", en: "Me on opettaja.", bn: "Me on opettaja." },
      ],
      correctIndex: 1,
      explanation: { fi: "Hän on yksikön kolmas persoona ja sopii yhdelle henkilölle.", en: "Hän is third person singular and is correct for one person.", bn: "Hän তৃতীয় পুরুষ একবচন, একজন ব্যক্তির জন্য সঠিক।" },
    },
    {
      question: { fi: "Mitä pronominia käytät puhuessasi kohteliaasti yhdelle vieraalle henkilölle?", en: "Which pronoun do you use to politely address one unfamiliar person?", bn: "একজন অপরিচিত ব্যক্তিকে ভদ্রভাবে সম্বোধনের জন্য কোন সর্বনাম ব্যবহার করবে?" },
      options: [
        { fi: "sinä", en: "sinä", bn: "sinä" },
        { fi: "te", en: "te", bn: "te" },
        { fi: "he", en: "he", bn: "he" },
        { fi: "se", en: "se", bn: "se" },
      ],
      correctIndex: 1,
      explanation: { fi: "Te toimii kohteliaana muotona yhdelle henkilölle, vaikka se on muodoltaan monikko.", en: "Te works as a polite form for one person, even though it's grammatically plural.", bn: "Te ব্যাকরণগতভাবে বহুবচন হলেও, একজন ব্যক্তিকে ভদ্রভাবে সম্বোধনের রূপ হিসেবে ব্যবহৃত হয়।" },
    },
    {
      question: { fi: "Onko hän maskuliininen vai feminiininen pronomini?", en: "Is hän masculine or feminine?", bn: "Hän কি পুংলিঙ্গ নাকি স্ত্রীলিঙ্গ সর্বনাম?" },
      options: [
        { fi: "Vain maskuliininen", en: "Only masculine", bn: "শুধু পুংলিঙ্গ" },
        { fi: "Vain feminiininen", en: "Only feminine", bn: "শুধু স্ত্রীলিঙ্গ" },
        { fi: "Ei kumpikaan — sopii molemmille", en: "Neither — it works for both", bn: "কোনোটিই না — উভয়ের জন্য" },
        { fi: "Riippuu lauseesta", en: "Depends on the sentence", bn: "বাক্যের ওপর নির্ভর করে" },
      ],
      correctIndex: 2,
      explanation: { fi: "Suomi ei erottele sukupuolta pronomineissa. Hän sopii sekä miehelle että naiselle.", en: "Finnish doesn't distinguish gender in pronouns. Hän works for both men and women.", bn: "ফিনিশ ভাষায় সর্বনামে লিঙ্গভেদ নেই। Hän পুরুষ ও নারী উভয়ের জন্যই ব্যবহৃত হয়।" },
    },
    {
      question: { fi: "Mikä on oikea monikkomuoto pronominille hän?", en: "What is the correct plural form of hän?", bn: "Hän-এর সঠিক বহুবচন রূপ কোনটি?" },
      options: [
        { fi: "ne", en: "ne", bn: "ne" },
        { fi: "te", en: "te", bn: "te" },
        { fi: "he", en: "he", bn: "he" },
        { fi: "me", en: "me", bn: "me" },
      ],
      correctIndex: 2,
      explanation: { fi: "He on pronominin hän monikkomuoto, kun puhutaan ihmisistä.", en: "He is the plural of hän, used for people.", bn: "মানুষদের ক্ষেত্রে hän-এর বহুবচন রূপ হলো he।" },
    },
  ],

  summary: {
    fi: "Tässä oppitunnissa opit suomen kahdeksan persoonapronominia, niiden käytön yksikössä ja monikossa, sekä muutamia yleisiä virheitä, joita kannattaa välttää. Nyt osaat muodostaa yksinkertaisia lauseita olla-verbin kanssa.",
    en: "In this lesson, you learned Finnish's eight personal pronouns, how they work in singular and plural, and a few common mistakes to avoid. You can now form simple sentences using the verb olla.",
    bn: "এই পাঠে তুমি ফিনিশ ভাষার আটটি ব্যক্তিবাচক সর্বনাম, একবচন ও বহুবচনে তাদের ব্যবহার, এবং কিছু সাধারণ ভুল সম্পর্কে শিখেছ। এখন তুমি olla ক্রিয়া দিয়ে সহজ বাক্য তৈরি করতে পারবে।",
  },
};