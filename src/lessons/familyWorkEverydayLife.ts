import { Lesson } from "./types";

// Month 2, Lesson 5 — Family, Work, and Everyday Life
// Stable lesson ID: month-2-family-work-everyday-life (see lessonRegistry.ts)
// Sources in Rafiqul Hyder's material: partitive file (Minulla on kirja →
// Minulla ei ole kirjaa; kaksi autoa), genitive file (kanssa: Liisan
// kanssa), case-verb list (työskennellä / olla töissä → missä).
// Forms not yet taught (perheeni, perheeseeni) are marked as fixed phrases.

export const familyWorkEverydayLifeLesson: Lesson = {
  slug: "family-work-everyday-life",
  month: 2,

  title: {
    fi: "Perhe, työ ja arki",
    bn: "পরিবার, কাজ ও দৈনন্দিন জীবন",
    en: "Family, Work, and Everyday Life",
  },

  intro: {
    fi: "Tässä oppitunnissa opit kertomaan perheestäsi, työstäsi tai opiskelustasi ja tavallisesta päivästäsi. Käytät tuttua preesensiä, kieltoa ja kysymyksiä. Sinun ei tarvitse kertoa mitään, mitä et halua: vastaa omalla tavallasi.",
    bn: "এই পাঠে তুমি নিজের পরিবার, কাজ বা পড়াশোনা এবং তোমার সাধারণ দিন সম্পর্কে বলতে শিখবে। তুমি পরিচিত বর্তমান কাল, না-বাচক বাক্য ও প্রশ্ন ব্যবহার করবে। যা বলতে চাও না, তা বলার দরকার নেই: নিজের মতো করে উত্তর দাও।",
    en: "In this lesson you'll learn to talk about your family, your work or studies and your ordinary day. You'll use the familiar present tense, negation and questions. You don't have to share anything you don't want to: answer in your own way.",
  },

  objectives: [
    {
      fi: "Käyttää perhesanastoa ja rakennetta Minulla on…",
      bn: "পরিবারের শব্দ এবং Minulla on… (আমার আছে…) গঠন ব্যবহার করা।",
      en: "Use family vocabulary and the structure Minulla on… (I have…).",
    },
    {
      fi: "Kertoa työstä tai opiskelusta.",
      bn: "কাজ বা পড়াশোনা সম্পর্কে বলতে পারা।",
      en: "Talk about work or studies.",
    },
    {
      fi: "Kuvata tavallista päivää aikasanojen avulla.",
      bn: "সময়বাচক শব্দ দিয়ে একটি সাধারণ দিনের বর্ণনা দিতে পারা।",
      en: "Describe an ordinary day using time words.",
    },
  ],

  explanation: [
    {
      fi: "Suomessa ei ole verbiä 'have'. Omistamisesta sanotaan Minulla on…: Minulla on yksi lapsi. Persoonat: minulla, sinulla, hänellä, meillä, teillä, heillä on. Kysymys: Onko sinulla lapsia? Opettele nämä muodot valmiina sanoina; niiden pääte opitaan myöhemmin.",
      bn: "ফিনিশে 'have' (আছে) অর্থের আলাদা কোনো ক্রিয়া নেই। কারো কিছু আছে বোঝাতে বলা হয় Minulla on…: Minulla on yksi lapsi (আমার একটি সন্তান আছে)। ব্যক্তিভেদে: minulla, sinulla, hänellä, meillä, teillä, heillä on। প্রশ্ন: Onko sinulla lapsia? (তোমার কি সন্তান আছে?) এই রূপগুলো তৈরি শব্দ হিসেবে শিখে নাও; এদের প্রত্যয় পরে শেখানো হবে।",
      en: "Finnish has no verb 'have'. To say what you have, use Minulla on…: Minulla on yksi lapsi. By person: minulla, sinulla, hänellä, meillä, teillä, heillä on. Question: Onko sinulla lapsia? Learn these forms as ready-made words; their ending is taught later.",
    },
    {
      fi: "Luvun 2, 3, 4… jälkeen sana on partitiivissa: kaksi lasta, kolme siskoa. Myös kielteisessä lauseessa: Minulla ei ole veljeä. Minulla ei ole lapsia. Tämä on sama sääntö, jonka näit kieltolauseiden oppitunnilla.",
      bn: "২, ৩, ৪… সংখ্যার পরে শব্দটি partitiivi রূপে থাকে: kaksi lasta (দুটি সন্তান), kolme siskoa (তিন বোন)। না-বাচক বাক্যেও: Minulla ei ole veljeä (আমার কোনো ভাই নেই)। Minulla ei ole lapsia (আমার কোনো সন্তান নেই)। এটি সেই একই নিয়ম, যা তুমি না-বাচক বাক্যের পাঠে দেখেছ।",
      en: "After the numbers 2, 3, 4… the word is in the partitive: kaksi lasta, kolme siskoa. Also in a negative sentence: Minulla ei ole veljeä. Minulla ei ole lapsia. This is the same rule you saw in the negative sentences lesson.",
    },
    {
      fi: "Joillakin sanoilla on kaksi merkitystä: poika = poika tai oma poika (son), mies = mies tai aviomies (husband). Lapsi on yksikkö, lapset monikko.",
      bn: "কিছু শব্দের দুটি অর্থ আছে: poika = ছেলে (বালক) অথবা পুত্র, mies = পুরুষ অথবা স্বামী। lapsi একবচন (একটি সন্তান / শিশু), lapset বহুবচন (সন্তানেরা)।",
      en: "Some words have two meanings: poika = boy or son, mies = man or husband. Lapsi is singular (child), lapset is plural (children).",
    },
    {
      fi: "Valmiita fraaseja perheestä: Asun perheeni kanssa. Perheeseeni kuuluu kolme henkilöä. Asun yksin. Perheet ovat erilaisia, joten valitse lauseet, jotka sopivat sinulle.",
      bn: "পরিবার নিয়ে তৈরি বাক্যাংশ: Asun perheeni kanssa (আমি পরিবারের সাথে থাকি)। Perheeseeni kuuluu kolme henkilöä (আমার পরিবারে তিনজন মানুষ)। Asun yksin (আমি একা থাকি)। পরিবার একেক জনের একেক রকম, তাই তোমার জন্য যেটা মানায় সেই বাক্যগুলো বেছে নাও।",
      en: "Ready-made phrases about family: Asun perheeni kanssa. Perheeseeni kuuluu kolme henkilöä. Asun yksin. Families are different, so choose the sentences that fit you.",
    },
    {
      fi: "Työ ja opiskelu: Mitä teet? – Olen opiskelija. / Teen töitä. / Olen lääkäri. Ammatin kanssa ei käytetä sanaa 'a': Olen insinööri. Missä olet töissä? – Olen töissä Espoossa. Työskentelen kotona.",
      bn: "কাজ ও পড়াশোনা: Mitä teet? (তুমি কী করো?) – Olen opiskelija (আমি শিক্ষার্থী)। / Teen töitä (আমি কাজ করি)। / Olen lääkäri (আমি ডাক্তার)। পেশার আগে ইংরেজির 'a'-এর মতো কিছু লাগে না: Olen insinööri। Missä olet töissä? (তুমি কোথায় কাজ করো?) – Olen töissä Espoossa। Työskentelen kotona (আমি বাড়ি থেকে কাজ করি)।",
      en: "Work and studies: Mitä teet? – Olen opiskelija. / Teen töitä. / Olen lääkäri. No word for 'a' is used with a profession: Olen insinööri. Missä olet töissä? – Olen töissä Espoossa. Työskentelen kotona.",
    },
    {
      fi: "Työ, työpaikka vai tehdä töitä? Työ = itse työ (Työ on mielenkiintoista). Työpaikka = paikka, jossa olet töissä. Tehdä töitä = työskennellä: Teen töitä joka päivä.",
      bn: "työ, työpaikka নাকি tehdä töitä? työ = কাজ নিজেই (Työ on mielenkiintoista — কাজটা আকর্ষণীয়)। työpaikka = কর্মস্থল, যেখানে তুমি কাজ করো। tehdä töitä = কাজ করা: Teen töitä joka päivä (আমি প্রতিদিন কাজ করি)।",
      en: "Työ, työpaikka or tehdä töitä? Työ = the work itself (Työ on mielenkiintoista). Työpaikka = the place where you work. Tehdä töitä = to work: Teen töitä joka päivä.",
    },
    {
      fi: "Aikasanat: aamulla, päivällä, illalla, yöllä, joka päivä, yleensä, joskus. Ne ovat valmiita sanoja. Aikasana voi olla lauseen alussa tai lopussa: Aamulla herään. / Herään aamulla. Molemmat ovat oikein.",
      bn: "সময়বাচক শব্দ: aamulla (সকালে), päivällä (দিনে), illalla (সন্ধ্যায়), yöllä (রাতে), joka päivä (প্রতিদিন), yleensä (সাধারণত), joskus (মাঝে মাঝে)। এগুলো তৈরি শব্দ। সময়বাচক শব্দ বাক্যের শুরুতে বা শেষে বসতে পারে: Aamulla herään। / Herään aamulla। দুটোই সঠিক।",
      en: "Time words: aamulla, päivällä, illalla, yöllä, joka päivä, yleensä, joskus. They are ready-made words. A time word can come at the start or the end of the sentence: Aamulla herään. / Herään aamulla. Both are correct.",
    },
  ],

  // Reuses the lesson table: family vocabulary.
  pronounTable: [
    { fi: "perhe", en: "family", bn: "পরিবার" },
    { fi: "äiti / isä", en: "mother / father", bn: "মা / বাবা" },
    { fi: "vanhemmat", en: "parents", bn: "বাবা-মা" },
    { fi: "lapsi / lapset", en: "child / children", bn: "সন্তান, শিশু / সন্তানেরা" },
    { fi: "poika", en: "boy / son", bn: "ছেলে / পুত্র" },
    { fi: "tytär", en: "daughter", bn: "মেয়ে (কন্যা)" },
    { fi: "veli / sisko", en: "brother / sister", bn: "ভাই / বোন" },
    { fi: "sisarukset", en: "siblings", bn: "ভাইবোন" },
    { fi: "mies / vaimo", en: "man, husband / wife", bn: "পুরুষ, স্বামী / স্ত্রী" },
    { fi: "ystävä", en: "friend", bn: "বন্ধু" },
  ],

  examples: [
    { fi: "Minulla on kaksi lasta.", bn: "আমার দুটি সন্তান আছে।", en: "I have two children." },
    { fi: "Minulla ei ole lapsia.", bn: "আমার কোনো সন্তান নেই।", en: "I don't have children." },
    { fi: "Herään aamulla ja syön aamupalaa.", bn: "আমি সকালে ঘুম থেকে উঠি এবং নাস্তা খাই।", en: "I wake up in the morning and eat breakfast." },
    { fi: "Opiskelen suomea joka päivä.", bn: "আমি প্রতিদিন ফিনিশ পড়ি।", en: "I study Finnish every day." },
    { fi: "Illalla lepään. Yöllä nukun.", bn: "সন্ধ্যায় আমি বিশ্রাম নিই। রাতে আমি ঘুমাই।", en: "In the evening I rest. At night I sleep." },
    { fi: "Anna: Onko sinulla sisaruksia? – Rahim: On. Minulla on yksi veli ja kaksi siskoa.", bn: "আনা: তোমার কি ভাইবোন আছে? – রহিম: আছে। আমার একজন ভাই ও দুজন বোন আছে।", en: "Anna: Do you have siblings? – Rahim: Yes. I have one brother and two sisters." },
    { fi: "Anna: Onko sinulla lapsia? – Rahim: Ei ole. Entä sinulla?", bn: "আনা: তোমার কি সন্তান আছে? – রহিম: নেই। আর তোমার?", en: "Anna: Do you have children? – Rahim: No. And you?" },
    { fi: "Anna: Minulla on yksi lapsi. Asun perheeni kanssa.", bn: "আনা: আমার একটি সন্তান আছে। আমি পরিবারের সাথে থাকি।", en: "Anna: I have one child. I live with my family." },
    { fi: "Mikko: Mitä teet? – Tisa: Olen opiskelija. Opiskelen suomea. Entä sinä?", bn: "মিক্কো: তুমি কী করো? – তিসা: আমি শিক্ষার্থী। আমি ফিনিশ পড়ি। আর তুমি?", en: "Mikko: What do you do? – Tisa: I'm a student. I study Finnish. And you?" },
    { fi: "Mikko: Olen insinööri. – Tisa: Missä olet töissä?", bn: "মিক্কো: আমি প্রকৌশলী। – তিসা: তুমি কোথায় কাজ করো?", en: "Mikko: I'm an engineer. – Tisa: Where do you work?" },
    { fi: "Mikko: Olen töissä Espoossa. Joskus työskentelen kotona.", bn: "মিক্কো: আমি এসপোতে কাজ করি। মাঝে মাঝে বাড়ি থেকে কাজ করি।", en: "Mikko: I work in Espoo. Sometimes I work from home." },
    { fi: "Ali: Mitä teet yleensä aamulla? – Sara: Herään aikaisin ja syön aamupalaa.", bn: "আলী: সাধারণত সকালে তুমি কী করো? – সারা: আমি তাড়াতাড়ি উঠি আর নাস্তা খাই।", en: "Ali: What do you usually do in the morning? – Sara: I wake up early and eat breakfast." },
    { fi: "Ali: Entä illalla? – Sara: Illalla lepään. Joskus opiskelen suomea.", bn: "আলী: আর সন্ধ্যায়? – সারা: সন্ধ্যায় আমি বিশ্রাম নিই। মাঝে মাঝে ফিনিশ পড়ি।", en: "Ali: And in the evening? – Sara: In the evening I rest. Sometimes I study Finnish." },
    { fi: "Ali: Minä teen töitä päivällä ja nukun yöllä hyvin.", bn: "আলী: আমি দিনে কাজ করি আর রাতে ভালো ঘুমাই।", en: "Ali: I work during the day and sleep well at night." },
  ],

  vocabulary: [
    { fi: "työ", bn: "কাজ", en: "work, job" },
    { fi: "työpaikka", bn: "কর্মস্থল", en: "workplace" },
    { fi: "työntekijä", bn: "কর্মচারী", en: "employee" },
    { fi: "tehdä töitä / työskennellä", bn: "কাজ করা", en: "to work" },
    { fi: "olla töissä", bn: "কাজে থাকা / কাজ করা", en: "to be at work, to work (somewhere)" },
    { fi: "lääkäri", bn: "ডাক্তার", en: "doctor" },
    { fi: "insinööri", bn: "প্রকৌশলী", en: "engineer" },
    { fi: "koti / kotona", bn: "বাড়ি / বাড়িতে", en: "home / at home" },
    { fi: "aamupala", bn: "সকালের নাস্তা", en: "breakfast" },
    { fi: "aamulla / päivällä", bn: "সকালে / দিনে", en: "in the morning / during the day" },
    { fi: "illalla / yöllä", bn: "সন্ধ্যায় / রাতে", en: "in the evening / at night" },
    { fi: "joka päivä", bn: "প্রতিদিন", en: "every day" },
    { fi: "yleensä / joskus", bn: "সাধারণত / মাঝে মাঝে", en: "usually / sometimes" },
  ],

  pronunciation: {
    fi: "Kiinnitä huomiota pitkiin äänteisiin: äiti (ä), isä, vanhemmat (mm), työpaikka (kk), insinööri (öö). Diftongi yö äännetään yhtenä liukuvana äänteenä: työ, yöllä. Paino on aina ensimmäisellä tavulla: TYÖ-paik-ka.",
    bn: "দীর্ঘ ধ্বনিগুলোর দিকে খেয়াল রাখো: äiti (ä), isä, vanhemmat (mm), työpaikka (kk), insinööri (öö)। যুগ্মস্বর yö একটানা একটি ধ্বনি হিসেবে উচ্চারিত হয়: työ, yöllä। জোর সবসময় প্রথম সিলেবলে: TYÖ-paik-ka।",
    en: "Pay attention to the long sounds: äiti (ä), isä, vanhemmat (mm), työpaikka (kk), insinööri (öö). The diphthong yö is pronounced as one gliding sound: työ, yöllä. Stress is always on the first syllable: TYÖ-paik-ka.",
  },

  commonMistakes: [
    {
      fi: "Väärä muoto luvun jälkeen: väärin Minulla on kaksi lapsi tai kaksi lapset, oikein Minulla on kaksi lasta.",
      bn: "সংখ্যার পরে ভুল রূপ: ভুল Minulla on kaksi lapsi অথবা kaksi lapset, সঠিক Minulla on kaksi lasta।",
      en: "The wrong form after a number: wrong Minulla on kaksi lapsi or kaksi lapset, right Minulla on kaksi lasta.",
    },
    {
      fi: "Käytetään olla-verbiä omistamiseen: väärin Minä olen kaksi lasta (= 'I am two children'), oikein Minulla on kaksi lasta.",
      bn: "'আছে' বোঝাতে olla ব্যবহার করা: ভুল Minä olen kaksi lasta (মানে 'আমি দুটি শিশু'), সঠিক Minulla on kaksi lasta।",
      en: "Using olla for having: wrong Minä olen kaksi lasta (= 'I am two children'), right Minulla on kaksi lasta.",
    },
    {
      fi: "Unohdetaan partitiivi kieltolauseessa: väärin Minulla ei ole veli, oikein Minulla ei ole veljeä.",
      bn: "না-বাচক বাক্যে partitiivi ভুলে যাওয়া: ভুল Minulla ei ole veli, সঠিক Minulla ei ole veljeä।",
      en: "Forgetting the partitive in a negative sentence: wrong Minulla ei ole veli, right Minulla ei ole veljeä.",
    },
    {
      fi: "Väärä kieltoverbi: väärin He ei tee töitä, oikein He eivät tee töitä.",
      bn: "ভুল না-বাচক ক্রিয়া: ভুল He ei tee töitä, সঠিক He eivät tee töitä।",
      en: "The wrong negative verb: wrong He ei tee töitä, right He eivät tee töitä.",
    },
    {
      fi: "Käytetään infinitiiviä taivutetun verbin sijaan: väärin Yöllä minä nukkua, oikein Yöllä minä nukun.",
      bn: "রূপ বদলানো ক্রিয়ার বদলে মূল রূপ ব্যবহার করা: ভুল Yöllä minä nukkua, সঠিক Yöllä minä nukun।",
      en: "Using the infinitive instead of a conjugated verb: wrong Yöllä minä nukkua, right Yöllä minä nukun.",
    },
    {
      fi: "Väärä kysymyksen sanajärjestys: väärin Sinä teetkö töitä?, oikein Teetkö (sinä) töitä?",
      bn: "প্রশ্নে ভুল শব্দক্রম: ভুল Sinä teetkö töitä?, সঠিক Teetkö (sinä) töitä?",
      en: "Wrong question word order: wrong Sinä teetkö töitä?, right Teetkö (sinä) töitä?",
    },
    {
      fi: "Sekoitetaan työ ja tehdä töitä: väärin Minä työ joka päivä, oikein Teen töitä joka päivä (työ on substantiivi, ei verbi).",
      bn: "työ ও tehdä töitä গুলিয়ে ফেলা: ভুল Minä työ joka päivä, সঠিক Teen töitä joka päivä (työ একটি বিশেষ্য, ক্রিয়া নয়)।",
      en: "Mixing up työ and tehdä töitä: wrong Minä työ joka päivä, right Teen töitä joka päivä (työ is a noun, not a verb).",
    },
  ],

  practice: [
    {
      prompt: {
        fi: "Mitä tarkoittaa 'tytär'?",
        bn: "'tytär' মানে কী?",
        en: "What does 'tytär' mean?",
      },
      answer: "daughter — মেয়ে (কন্যা)",
    },
    {
      prompt: {
        fi: "Täydennä: Minulla ___ yksi lapsi.",
        bn: "পূরণ করো: Minulla ___ yksi lapsi.",
        en: "Complete: Minulla ___ yksi lapsi.",
      },
      answer: "on",
    },
    {
      prompt: {
        fi: "Täydennä (lapsi): Minulla on kaksi ___.",
        bn: "পূরণ করো (lapsi): Minulla on kaksi ___.",
        en: "Complete (lapsi): Minulla on kaksi ___.",
      },
      answer: "lasta",
    },
    {
      prompt: {
        fi: "Muuta kielteiseksi: Minulla on veli.",
        bn: "না-বাচক করো: Minulla on veli.",
        en: "Make it negative: Minulla on veli.",
      },
      answer: "Minulla ei ole veljeä.",
    },
    {
      prompt: {
        fi: "Muuta kysymykseksi: Sinulla on lapsia.",
        bn: "প্রশ্নে রূপান্তর করো: Sinulla on lapsia.",
        en: "Turn into a question: Sinulla on lapsia.",
      },
      answer: "Onko sinulla lapsia?",
    },
    {
      prompt: {
        fi: "Vastaa (opiskelija): Mitä teet?",
        bn: "উত্তর দাও (শিক্ষার্থী): Mitä teet?",
        en: "Answer (student): Mitä teet?",
      },
      answer: "Olen opiskelija.",
    },
    {
      prompt: {
        fi: "Täydennä (herätä): ___ aamulla.",
        bn: "পূরণ করো (herätä): ___ aamulla.",
        en: "Complete (herätä): ___ aamulla.",
      },
      answer: "Herään",
    },
    {
      prompt: {
        fi: "Täydennä (nukkua): Yöllä ___.",
        bn: "পূরণ করো (nukkua): Yöllä ___.",
        en: "Complete (nukkua): Yöllä ___.",
      },
      answer: "nukun",
    },
    {
      prompt: {
        fi: "Muuta kielteiseksi: He tekevät töitä.",
        bn: "না-বাচক করো: He tekevät töitä.",
        en: "Make it negative: He tekevät töitä.",
      },
      answer: "He eivät tee töitä.",
    },
    {
      prompt: {
        fi: "Käännä suomeksi: I live with my family.",
        bn: "ফিনিশে অনুবাদ করো: আমি পরিবারের সাথে থাকি।",
        en: "Translate into Finnish: I live with my family.",
      },
      answer: "Asun perheeni kanssa.",
    },
    {
      prompt: {
        fi: "Käännä suomeksi: I study Finnish every day.",
        bn: "ফিনিশে অনুবাদ করো: আমি প্রতিদিন ফিনিশ পড়ি।",
        en: "Translate into Finnish: I study Finnish every day.",
      },
      answer: "Opiskelen suomea joka päivä.",
    },
    {
      prompt: {
        fi: "Kerro päivästäsi kahdella lauseella (aamulla, illalla).",
        bn: "দুটি বাক্যে তোমার দিনের কথা বলো (aamulla, illalla)।",
        en: "Describe your day in two sentences (aamulla, illalla).",
      },
      answer: "Esimerkki: Aamulla herään aikaisin. Illalla lepään.",
    },
  ],

  quiz: [
    {
      question: {
        fi: "Mikä sana tarkoittaa 'daughter'?",
        en: "Which word means 'daughter'?",
      },
      options: [
        { fi: "tytär", en: "tytär" },
        { fi: "poika", en: "poika" },
        { fi: "sisko", en: "sisko" },
        { fi: "vaimo", en: "vaimo" },
      ],
      correctIndex: 0,
      explanation: {
        fi: "Tytär = daughter. Poika = son tai boy, sisko = sister, vaimo = wife.",
        bn: "tytär = মেয়ে (কন্যা)। poika = পুত্র বা ছেলে, sisko = বোন, vaimo = স্ত্রী।",
        en: "Tytär = daughter. Poika = son or boy, sisko = sister, vaimo = wife.",
      },
    },
    {
      question: {
        fi: "Täydennä: Minulla on kaksi ___.",
        en: "Fill in: Minulla on kaksi ___.",
      },
      options: [
        { fi: "lapsi", en: "lapsi" },
        { fi: "lasta", en: "lasta" },
        { fi: "lapset", en: "lapset" },
        { fi: "lapsen", en: "lapsen" },
      ],
      correctIndex: 1,
      explanation: {
        fi: "Luvun 2 jälkeen sana on partitiivissa: kaksi lasta.",
        bn: "২ সংখ্যার পরে শব্দটি partitiivi রূপে থাকে: kaksi lasta।",
        en: "After the number 2 the word is in the partitive: kaksi lasta.",
      },
    },
    {
      question: {
        fi: "Miten sanotaan 'I don't have a brother'?",
        en: "How do you say 'I don't have a brother'?",
      },
      options: [
        { fi: "Minulla ei ole veljeä.", en: "Minulla ei ole veljeä." },
        { fi: "Minulla ei ole veli.", en: "Minulla ei ole veli." },
        { fi: "Minä en ole veljeä.", en: "Minä en ole veljeä." },
        { fi: "Minulla ei on veli.", en: "Minulla ei on veli." },
      ],
      correctIndex: 0,
      explanation: {
        fi: "Minulla ei ole + partitiivi: veljeä.",
        bn: "Minulla ei ole + partitiivi: veljeä।",
        en: "Minulla ei ole + partitive: veljeä.",
      },
    },
    {
      question: {
        fi: "Miten kysytään 'Where do you work?'",
        en: "How do you ask 'Where do you work?'",
      },
      options: [
        { fi: "Missä olet töissä?", en: "Missä olet töissä?" },
        { fi: "Mistä olet töissä?", en: "Mistä olet töissä?" },
        { fi: "Missä sinä työ?", en: "Missä sinä työ?" },
        { fi: "Mihin olet töissä?", en: "Mihin olet töissä?" },
      ],
      correctIndex: 0,
      explanation: {
        fi: "Olla töissä kertoo paikasta, joten kysymyssana on missä: Missä olet töissä?",
        bn: "olla töissä জায়গা বোঝায়, তাই প্রশ্নবোধক শব্দ missä: Missä olet töissä?",
        en: "Olla töissä is about a place, so the question word is missä: Missä olet töissä?",
      },
    },
    {
      question: {
        fi: "Miten sanotaan 'I sleep at night'?",
        en: "How do you say 'I sleep at night'?",
      },
      options: [
        { fi: "Yöllä nukun.", en: "Yöllä nukun." },
        { fi: "Yöllä nukkua.", en: "Yöllä nukkua." },
        { fi: "Yöllä nukkun.", en: "Yöllä nukkun." },
        { fi: "Yö nukun.", en: "Yö nukun." },
      ],
      correctIndex: 0,
      explanation: {
        fi: "Yöllä = at night, ja nukkua → minä nukun.",
        bn: "yöllä = রাতে, আর nukkua → minä nukun।",
        en: "Yöllä = at night, and nukkua → minä nukun.",
      },
    },
    {
      question: {
        fi: "Mikä on lauseen 'He tekevät töitä' kielteinen muoto?",
        en: "What is the negative of 'He tekevät töitä'?",
      },
      options: [
        { fi: "He eivät tee töitä.", en: "He eivät tee töitä." },
        { fi: "He ei tee töitä.", en: "He ei tee töitä." },
        { fi: "He eivät tekevät töitä.", en: "He eivät tekevät töitä." },
        { fi: "He eivät teen töitä.", en: "He eivät teen töitä." },
      ],
      correctIndex: 0,
      explanation: {
        fi: "He → eivät, ja teen → tee: he eivät tee töitä.",
        bn: "he → eivät, আর teen → tee: he eivät tee töitä।",
        en: "He → eivät, and teen → tee: he eivät tee töitä.",
      },
    },
  ],

  summary: {
    fi: "Omistaminen: Minulla on yksi lapsi. Luvun 2, 3… jälkeen ja kielteisessä lauseessa partitiivi: kaksi lasta, Minulla ei ole veljeä. Työ: Mitä teet? – Olen opiskelija / Teen töitä. Missä olet töissä? – Olen töissä Espoossa. Arki: Herään aamulla, lepään illalla, nukun yöllä. Aikasanat: aamulla, päivällä, illalla, yöllä, joka päivä, yleensä, joskus.",
    bn: "কারো কিছু আছে: Minulla on yksi lapsi। ২, ৩… সংখ্যার পরে এবং না-বাচক বাক্যে partitiivi: kaksi lasta, Minulla ei ole veljeä। কাজ: Mitä teet? – Olen opiskelija / Teen töitä। Missä olet töissä? – Olen töissä Espoossa। দৈনন্দিন জীবন: Herään aamulla, lepään illalla, nukun yöllä। সময়বাচক শব্দ: aamulla, päivällä, illalla, yöllä, joka päivä, yleensä, joskus।",
    en: "Having: Minulla on yksi lapsi. After the numbers 2, 3… and in negatives, the partitive: kaksi lasta, Minulla ei ole veljeä. Work: Mitä teet? – Olen opiskelija / Teen töitä. Missä olet töissä? – Olen töissä Espoossa. Daily life: Herään aamulla, lepään illalla, nukun yöllä. Time words: aamulla, päivällä, illalla, yöllä, joka päivä, yleensä, joskus.",
  },
};