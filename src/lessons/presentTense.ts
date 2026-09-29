import { Lesson } from "./types";

// Month 1 — Present Tense (Preesens)
// Stable lesson ID: month-1-present-tense (see lessonRegistry.ts)

export const presentTenseLesson: Lesson = {
  slug: "present-tense",
  month: 1,

  title: {
    fi: "Preesens – nykyhetken tekeminen",
    bn: "বর্তমান কাল — এখন কী ঘটছে",
    en: "Present Tense – Talking About What Happens Now",
  },

  intro: {
    fi: "Olla-oppitunnissa näit, että verbin muoto vaihtuu sen mukaan, kuka tekee. Sama periaate koskee lähes kaikkia suomen verbejä. Tässä oppitunnissa opit preesensin eli nykyhetken aikamuodon ja sen persoonapäätteet.",
    bn: "olla পাঠে তুমি দেখেছ, কর্তা অনুযায়ী ক্রিয়ার রূপ বদলায়। প্রায় সব ফিনিশ ক্রিয়ার ক্ষেত্রেই এই একই নিয়ম খাটে। এই পাঠে তুমি preesens অর্থাৎ বর্তমান কাল এবং এর ব্যক্তিবাচক প্রত্যয়গুলো শিখবে।",
    en: "In the olla lesson you saw that the verb form changes depending on who is doing it. The same principle applies to almost all Finnish verbs. In this lesson you'll learn the present tense (preesens) and its personal endings.",
  },

  objectives: [
    {
      fi: "Ymmärtää, mitä preesens on ja milloin sitä käytetään.",
      bn: "preesens কী এবং কখন এটি ব্যবহার হয় তা বোঝা।",
      en: "Understand what the present tense is and when it is used.",
    },
    {
      fi: "Tunnistaa preesensin persoonapäätteet ja taivuttaa yksinkertaisia verbejä.",
      bn: "বর্তমান কালের ব্যক্তিবাচক প্রত্যয়গুলো চেনা এবং সহজ ক্রিয়ার রূপ তৈরি করতে পারা।",
      en: "Recognise the present-tense personal endings and conjugate simple verbs.",
    },
    {
      fi: "Muodostaa yksinkertaisia myönteisiä lauseita ja kysymyksiä.",
      bn: "সহজ হ্যাঁ-বাচক বাক্য ও প্রশ্ন তৈরি করতে পারা।",
      en: "Form simple positive sentences and questions.",
    },
  ],

  explanation: [
    {
      fi: "Preesensiä käytetään, kun puhutaan siitä, mitä tapahtuu nyt (Minä opiskelen suomea), mitä tapahtuu säännöllisesti (Me syömme yhdessä joka päivä) tai mikä on yleisesti totta (Suomessa puhutaan suomea). Joskus preesens tarkoittaa myös tulevaisuutta, kun asiayhteys näyttää sen: Juna lähtee huomenna.",
      bn: "preesens ব্যবহার হয় যখন বলা হয় এখন কী ঘটছে (Minä opiskelen suomea — আমি ফিনিশ পড়ছি), নিয়মিত কী ঘটে (Me syömme yhdessä joka päivä — আমরা প্রতিদিন একসঙ্গে খাই), অথবা কোনো সাধারণ সত্য। কখনো কখনো প্রসঙ্গ থেকে বোঝা গেলে preesens ভবিষ্যৎও বোঝায়: Juna lähtee huomenna (ট্রেন আগামীকাল ছাড়বে)।",
      en: "The present tense is used for what is happening now (Minä opiskelen suomea), what happens regularly (Me syömme yhdessä joka päivä) or what is generally true. Sometimes it also refers to the future when the context shows it: Juna lähtee huomenna (The train leaves tomorrow).",
    },
    {
      fi: "Preesensmuoto rakentuu verbin vartalosta ja persoonapäätteestä. Esimerkiksi puhua-verbin vartalo on puhu-, ja siihen lisätään pääte: puhu + n = puhun.",
      bn: "বর্তমান কালের রূপ তৈরি হয় ক্রিয়ার মূল অংশ (vartalo) আর ব্যক্তিবাচক প্রত্যয় দিয়ে। যেমন puhua (কথা বলা) ক্রিয়ার মূল অংশ puhu-, এর সাথে প্রত্যয় যোগ হয়: puhu + n = puhun (আমি কথা বলি)।",
      en: "A present-tense form is built from the verb stem and a personal ending. For example, the stem of puhua is puhu-, and the ending is added to it: puhu + n = puhun.",
    },
    {
      fi: "Persoonapäätteet ovat: minä -n, sinä -t, me -mme, te -tte ja he/ne -vat tai -vät. Hän- ja se-muodossa ei ole omaa persoonapäätettä. Monissa verbeissä vartalon viimeinen vokaali kuitenkin pitenee: hän puhuu.",
      bn: "ব্যক্তিবাচক প্রত্যয়গুলো হলো: minä -n, sinä -t, me -mme, te -tte, আর he/ne -vat অথবা -vät। hän ও se-এর রূপে আলাদা কোনো প্রত্যয় নেই। তবে অনেক ক্রিয়ায় মূল অংশের শেষ স্বরটি দীর্ঘ হয়: hän puhuu (সে কথা বলে)।",
      en: "The personal endings are: minä -n, sinä -t, me -mme, te -tte and he/ne -vat or -vät. The hän and se forms have no personal ending of their own. In many verbs, however, the last vowel of the stem becomes long: hän puhuu.",
    },
    {
      fi: "Valinta -vat vai -vät riippuu vokaalisoinnusta: jos verbissä on a, o tai u, pääte on -vat (puhuvat, asuvat). Jos verbissä on ä, ö tai y tai vain e ja i, pääte on -vät (syövät, menevät).",
      bn: "-vat নাকি -vät হবে, তা নির্ভর করে স্বরসংগতির (vokaalisointu) উপর: ক্রিয়ায় a, o বা u থাকলে -vat (puhuvat, asuvat)। আর ä, ö, y থাকলে, অথবা শুধু e ও i থাকলে -vät (syövät, menevät)।",
      en: "Whether the ending is -vat or -vät depends on vowel harmony: if the verb has a, o or u, the ending is -vat (puhuvat, asuvat). If it has ä, ö or y, or only e and i, the ending is -vät (syövät, menevät).",
    },
    {
      fi: "Asua taipuu samalla tavalla kuin puhua: minä asun, sinä asut, hän asuu, me asumme, te asutte, he asuvat.",
      bn: "asua (থাকা / বসবাস করা) ক্রিয়াটিও puhua-র মতোই বদলায়: minä asun, sinä asut, hän asuu, me asumme, te asutte, he asuvat।",
      en: "Asua (to live) conjugates the same way as puhua: minä asun, sinä asut, hän asuu, me asumme, te asutte, he asuvat.",
    },
    {
      fi: "Kaikki verbit eivät kuitenkaan taivu täsmälleen samalla tavalla. Syödä taipuu näin: minä syön, sinä syöt, hän syö, me syömme, te syötte, he syövät. Huomaa, että hän syö, ei syöö. Opiskella-verbin vartalo on opiskele-: minä opiskelen, hän opiskelee. Suomen verbit jaetaan kuuteen verbityyppiin, ja vartalo riippuu verbityypistä. Verbityypit 1–6 opitaan omassa oppitunnissaan.",
      bn: "তবে সব ক্রিয়া ঠিক একইভাবে বদলায় না। syödä (খাওয়া) বদলায় এভাবে: minä syön, sinä syöt, hän syö, me syömme, te syötte, he syövät। খেয়াল করো, hän syö, syöö নয়। opiskella (পড়াশোনা করা)-র মূল অংশ opiskele-: minä opiskelen, hän opiskelee। ফিনিশ ক্রিয়াগুলো ছয়টি ক্রিয়াশ্রেণিতে (verbityyppi) ভাগ করা, এবং মূল অংশ নির্ভর করে শ্রেণির উপর। ক্রিয়াশ্রেণি ১–৬ আলাদা পাঠে শেখানো হবে।",
      en: "Not all verbs conjugate in exactly the same way, though. Syödä goes like this: minä syön, sinä syöt, hän syö, me syömme, te syötte, he syövät. Note: hän syö, not syöö. The stem of opiskella is opiskele-: minä opiskelen, hän opiskelee. Finnish verbs are divided into six verb types, and the stem depends on the type. Verb types 1–6 have their own lesson.",
    },
    {
      fi: "Kysymys tehdään kuten olla-verbin kanssa: verbi siirtyy alkuun ja saa päätteen -ko tai -kö. Sinä puhut suomea. → Puhutko (sinä) suomea? Pääte liitetään aina verbiin. Verbeissä, joissa on ä, ö tai y tai vain e ja i, pääte on -kö: Syötkö? Menetkö?",
      bn: "প্রশ্ন তৈরি হয় olla-র মতোই: ক্রিয়াটি শুরুতে আসে এবং এর সাথে -ko বা -kö যুক্ত হয়। Sinä puhut suomea. → Puhutko (sinä) suomea? (তুমি কি ফিনিশ ভাষায় কথা বলো?) প্রত্যয়টি সবসময় ক্রিয়ার সাথেই যুক্ত হয়। যেসব ক্রিয়ায় ä, ö, y অথবা শুধু e ও i আছে, সেখানে -kö বসে: Syötkö? Menetkö?",
      en: "Questions are made just like with olla: the verb moves to the front and takes -ko or -kö. Sinä puhut suomea. → Puhutko (sinä) suomea? The ending is always attached to the verb. With verbs that have ä, ö or y, or only e and i, the ending is -kö: Syötkö? Menetkö?",
    },
    {
      fi: "Pieni esimakua kiellosta: kielteisessä lauseessa käytetään kieltoverbiä, ja pääverbistä jää jäljelle vain vartalo: Minä en puhu englantia. Hän ei asu Suomessa. Kieltoa harjoitellaan tarkemmin myöhemmin.",
      bn: "না-বাচক বাক্যের ছোট্ট পরিচয়: না-বাচক বাক্যে একটি না-বাচক ক্রিয়া ব্যবহার হয়, আর মূল ক্রিয়ার শুধু মূল অংশটুকু থাকে: Minä en puhu englantia (আমি ইংরেজিতে কথা বলি না)। Hän ei asu Suomessa (সে ফিনল্যান্ডে থাকে না)। এটি পরে বিস্তারিত শেখানো হবে।",
      en: "A small preview of negation: a negative sentence uses the negative verb, and only the stem of the main verb remains: Minä en puhu englantia. Hän ei asu Suomessa. Negation is practised in detail later.",
    },
  ],

  // Reuses the lesson table: here each row is one form of puhua with its ending.
  pronounTable: [
    { fi: "minä puhun", en: "-n · I speak", bn: "আমি কথা বলি" },
    { fi: "sinä puhut", en: "-t · you speak", bn: "তুমি কথা বলো" },
    { fi: "hän / se puhuu", en: "no ending (vowel lengthens) · he / she / it speaks", bn: "সে / তিনি কথা বলে" },
    { fi: "me puhumme", en: "-mme · we speak", bn: "আমরা কথা বলি" },
    { fi: "te puhutte", en: "-tte · you (plural / formal) speak", bn: "তোমরা / আপনি / আপনারা কথা বলো / বলেন" },
    { fi: "he / ne puhuvat", en: "-vat / -vät · they speak", bn: "তারা কথা বলে" },
  ],

  examples: [
    { fi: "Minä puhun suomea.", bn: "আমি ফিনিশ ভাষায় কথা বলি।", en: "I speak Finnish." },
    { fi: "Sinä puhut englantia.", bn: "তুমি ইংরেজিতে কথা বলো।", en: "You speak English." },
    { fi: "Minä asun Suomessa.", bn: "আমি ফিনল্যান্ডে থাকি।", en: "I live in Finland." },
    { fi: "He asuvat Helsingissä.", bn: "তারা হেলসিঙ্কিতে থাকে।", en: "They live in Helsinki." },
    { fi: "Hän opiskelee suomea.", bn: "সে ফিনিশ ভাষা পড়ে।", en: "He/She studies Finnish." },
    { fi: "Me syömme yhdessä.", bn: "আমরা একসঙ্গে খাই।", en: "We eat together." },
    { fi: "Minä menen kouluun.", bn: "আমি স্কুলে যাই।", en: "I go to school." },
    { fi: "Mitä sinä teet nyt?", bn: "তুমি এখন কী করছ?", en: "What are you doing now?" },
    { fi: "Juna lähtee huomenna.", bn: "ট্রেন আগামীকাল ছাড়বে।", en: "The train leaves tomorrow." },
    { fi: "Puhutko suomea?", bn: "তুমি কি ফিনিশ ভাষায় কথা বলো?", en: "Do you speak Finnish?" },
    { fi: "Asutko Suomessa?", bn: "তুমি কি ফিনল্যান্ডে থাকো?", en: "Do you live in Finland?" },
    { fi: "Opiskeletko sinä suomea?", bn: "তুমি কি ফিনিশ পড়ো?", en: "Do you study Finnish?" },
    { fi: "Minä en puhu englantia.", bn: "আমি ইংরেজিতে কথা বলি না।", en: "I don't speak English." },
    { fi: "Hän ei asu Suomessa.", bn: "সে ফিনল্যান্ডে থাকে না।", en: "He/She doesn't live in Finland." },
  ],

  vocabulary: [
    { fi: "puhua", bn: "কথা বলা", en: "to speak" },
    { fi: "asua", bn: "থাকা / বসবাস করা", en: "to live" },
    { fi: "opiskella", bn: "পড়াশোনা করা", en: "to study" },
    { fi: "tehdä", bn: "করা / বানানো", en: "to do / to make" },
    { fi: "mennä", bn: "যাওয়া", en: "to go" },
    { fi: "syödä", bn: "খাওয়া", en: "to eat" },
    { fi: "suomi", bn: "ফিনিশ ভাষা", en: "the Finnish language" },
    { fi: "Suomessa", bn: "ফিনল্যান্ডে", en: "in Finland" },
    { fi: "yhdessä", bn: "একসঙ্গে", en: "together" },
    { fi: "tänään", bn: "আজ", en: "today" },
    { fi: "huomenna", bn: "আগামীকাল", en: "tomorrow" },
    { fi: "nyt", bn: "এখন", en: "now" },
  ],

  pronunciation: {
    fi: "Kuuntele eroa: puhun ja puhuu eroavat vain viimeisestä äänteestä, ja hän-muodossa u on pitkä: pu-huu. Samoin asun ja asuu. Me- ja te-muodoissa on pitkä konsonantti: puhumme (mm), puhutte (tt). Paino on aina ensimmäisellä tavulla: PU-hum-me.",
    bn: "পার্থক্যটা খেয়াল করো: puhun আর puhuu শুধু শেষ ধ্বনিতে আলাদা, আর hän-এর রূপে u দীর্ঘ: pu-huu। একইভাবে asun ও asuu। me ও te-এর রূপে দীর্ঘ ব্যঞ্জন আছে: puhumme (mm), puhutte (tt)। জোর সবসময় প্রথম সিলেবলে: PU-hum-me।",
    en: "Listen for the difference: puhun and puhuu differ only in the last sound, and in the hän form the u is long: pu-huu. The same goes for asun and asuu. The me and te forms have a long consonant: puhumme (mm), puhutte (tt). Stress is always on the first syllable: PU-hum-me.",
  },

  commonMistakes: [
    {
      fi: "Käytetään -n-päätettä kaikille persoonille: väärin Hän puhun, oikein Hän puhuu.",
      bn: "সব কর্তার সাথে -n ব্যবহার করা: ভুল Hän puhun, সঠিক Hän puhuu।",
      en: "Using -n with every subject: wrong Hän puhun, right Hän puhuu.",
    },
    {
      fi: "Sekoitetaan puhun ja puhut: minä puhun, mutta sinä puhut.",
      bn: "puhun ও puhut গুলিয়ে ফেলা: minä puhun (আমি), কিন্তু sinä puhut (তুমি)।",
      en: "Confusing puhun and puhut: minä puhun, but sinä puhut.",
    },
    {
      fi: "Unohdetaan hän-muodon pitkä vokaali: väärin Hän puhu suomea, oikein Hän puhuu suomea.",
      bn: "hän-এর রূপের দীর্ঘ স্বর ভুলে যাওয়া: ভুল Hän puhu suomea, সঠিক Hän puhuu suomea।",
      en: "Forgetting the long vowel in the hän form: wrong Hän puhu suomea, right Hän puhuu suomea.",
    },
    {
      fi: "Ajatellaan englannin mukaan ja lisätään kysymykseen ylimääräinen apuverbi. Suomessa ei ole do-sanaa: kysymys tehdään vain -ko/-kö-päätteellä: Puhutko suomea?",
      bn: "ইংরেজির মতো ভেবে প্রশ্নে 'do'-এর মতো বাড়তি শব্দ খোঁজা। ফিনিশে 'do' নেই: প্রশ্ন তৈরি হয় শুধু -ko/-kö দিয়ে: Puhutko suomea?",
      en: "Thinking in English and looking for a 'do' in questions. Finnish has no 'do': the question is made only with -ko/-kö: Puhutko suomea?",
    },
    {
      fi: "Oletetaan, että kaikki verbit taipuvat täsmälleen samalla tavalla: hän puhuu, mutta hän syö (ei syöö). Vartalo riippuu verbityypistä.",
      bn: "ধরে নেওয়া যে সব ক্রিয়া ঠিক একইভাবে বদলায়: hän puhuu, কিন্তু hän syö (syöö নয়)। মূল অংশ নির্ভর করে ক্রিয়াশ্রেণির উপর।",
      en: "Assuming all verbs conjugate in exactly the same way: hän puhuu, but hän syö (not syöö). The stem depends on the verb type.",
    },
  ],

  practice: [
    {
      prompt: {
        fi: "Valitse oikea muoto (asua): Minä ___ Suomessa.",
        bn: "সঠিক রূপ বেছে নাও (asua): Minä ___ Suomessa.",
        en: "Choose the correct form (asua): Minä ___ Suomessa.",
      },
      answer: "asun",
    },
    {
      prompt: {
        fi: "Täydennä pääte: Me puhu___ suomea.",
        bn: "প্রত্যয়টি পূরণ করো: Me puhu___ suomea.",
        en: "Fill in the ending: Me puhu___ suomea.",
      },
      answer: "-mme (me puhumme)",
    },
    {
      prompt: {
        fi: "Yhdistä subjekti ja verbi: te + puhua = ?",
        bn: "কর্তা ও ক্রিয়া মেলাও: te + puhua = ?",
        en: "Match subject and verb: te + puhua = ?",
      },
      answer: "te puhutte",
    },
    {
      prompt: {
        fi: "Täydennä lause (syödä): He ___ yhdessä.",
        bn: "বাক্যটি পূরণ করো (syödä): He ___ yhdessä.",
        en: "Complete the sentence (syödä): He ___ yhdessä.",
      },
      answer: "syövät",
    },
    {
      prompt: {
        fi: "Muuta kysymykseksi: Sinä asut Suomessa.",
        bn: "প্রশ্নে রূপান্তর করো: Sinä asut Suomessa.",
        en: "Turn into a question: Sinä asut Suomessa.",
      },
      answer: "Asutko (sinä) Suomessa?",
    },
    {
      prompt: {
        fi: "Mitä lause tarkoittaa? Hän opiskelee suomea.",
        bn: "বাক্যটির অর্থ কী? Hän opiskelee suomea.",
        en: "What does the sentence mean? Hän opiskelee suomea.",
      },
      answer: "He/She studies Finnish. — সে ফিনিশ ভাষা পড়ে।",
    },
  ],

  quiz: [
    {
      question: {
        fi: "Valitse oikea muoto: Sinä ___ suomea.",
        en: "Choose the correct form: Sinä ___ suomea.",
      },
      options: [
        { fi: "puhun", en: "puhun" },
        { fi: "puhut", en: "puhut" },
        { fi: "puhuu", en: "puhuu" },
        { fi: "puhumme", en: "puhumme" },
      ],
      correctIndex: 1,
      explanation: {
        fi: "Sinä-muodon pääte on -t: sinä puhut.",
        bn: "sinä-র রূপে প্রত্যয় -t: sinä puhut।",
        en: "The sinä ending is -t: sinä puhut.",
      },
    },
    {
      question: {
        fi: "Täydennä: He ___ Suomessa. (asua)",
        en: "Fill in: He ___ Suomessa. (asua)",
      },
      options: [
        { fi: "asuu", en: "asuu" },
        { fi: "asumme", en: "asumme" },
        { fi: "asuvat", en: "asuvat" },
        { fi: "asutte", en: "asutte" },
      ],
      correctIndex: 2,
      explanation: {
        fi: "He-muodon pääte on -vat, koska asua-verbissä on a ja u: he asuvat.",
        bn: "he-র রূপে প্রত্যয় -vat, কারণ asua-তে a ও u আছে: he asuvat।",
        en: "The he ending is -vat, because asua has a and u: he asuvat.",
      },
    },
    {
      question: {
        fi: "Mikä lause tarkoittaa 'We eat together'?",
        en: "Which sentence means 'We eat together'?",
      },
      options: [
        { fi: "Me syömme yhdessä.", en: "Me syömme yhdessä." },
        { fi: "Me syötte yhdessä.", en: "Me syötte yhdessä." },
        { fi: "He syövät yhdessä.", en: "He syövät yhdessä." },
        { fi: "Me syön yhdessä.", en: "Me syön yhdessä." },
      ],
      correctIndex: 0,
      explanation: {
        fi: "Me-muodon pääte on -mme: me syömme.",
        bn: "me-র রূপে প্রত্যয় -mme: me syömme।",
        en: "The me ending is -mme: me syömme.",
      },
    },
    {
      question: {
        fi: "Mikä on lauseen 'Sinä puhut suomea' kysymysmuoto?",
        en: "What is the question form of 'Sinä puhut suomea'?",
      },
      options: [
        { fi: "Puhutko sinä suomea?", en: "Puhutko sinä suomea?" },
        { fi: "Puhunko sinä suomea?", en: "Puhunko sinä suomea?" },
        { fi: "Sinä puhut suomea?", en: "Sinä puhut suomea?" },
        { fi: "Puhuuko sinä suomea?", en: "Puhuuko sinä suomea?" },
      ],
      correctIndex: 0,
      explanation: {
        fi: "Verbi puhut siirtyy alkuun ja saa päätteen -ko: Puhutko sinä suomea?",
        bn: "puhut ক্রিয়াটি শুরুতে আসে এবং -ko যুক্ত হয়: Puhutko sinä suomea?",
        en: "The verb puhut moves to the front and takes -ko: Puhutko sinä suomea?",
      },
    },
    {
      question: {
        fi: "Mikä pääte tulee me-muotoon?",
        en: "Which ending is used in the me form?",
      },
      options: [
        { fi: "-n", en: "-n" },
        { fi: "-t", en: "-t" },
        { fi: "-mme", en: "-mme" },
        { fi: "-vat", en: "-vat" },
      ],
      correctIndex: 2,
      explanation: {
        fi: "Me-muodon pääte on -mme, esimerkiksi me puhumme.",
        bn: "me-র রূপে প্রত্যয় -mme, যেমন me puhumme।",
        en: "The me ending is -mme, for example me puhumme.",
      },
    },
  ],

  summary: {
    fi: "Preesens kertoo, mitä tapahtuu nyt, säännöllisesti tai yleisesti, ja joskus myös tulevaisuudesta. Preesensmuoto on vartalo + persoonapääte: -n, -t, (hän: ei päätettä), -mme, -tte, -vat/-vät. Kysymys tehdään liittämällä verbiin -ko/-kö (Puhutko suomea?), ja kielteinen lause kieltoverbillä (Minä en puhu englantia). Verbityypit 1–6 opitaan omassa oppitunnissaan.",
    bn: "preesens বোঝায় এখন, নিয়মিত বা সাধারণভাবে কী ঘটে, আর কখনো কখনো ভবিষ্যৎও। বর্তমান কালের রূপ = মূল অংশ + ব্যক্তিবাচক প্রত্যয়: -n, -t, (hän: কোনো প্রত্যয় নেই), -mme, -tte, -vat/-vät। প্রশ্ন তৈরি হয় ক্রিয়ার সাথে -ko/-kö যোগ করে (Puhutko suomea?), আর না-বাচক বাক্য তৈরি হয় না-বাচক ক্রিয়া দিয়ে (Minä en puhu englantia)। ক্রিয়াশ্রেণি ১–৬ আলাদা পাঠে শেখানো হবে।",
    en: "The present tense describes what happens now, regularly or in general, and sometimes the future. A present-tense form is stem + personal ending: -n, -t, (hän: no ending), -mme, -tte, -vat/-vät. Questions attach -ko/-kö to the verb (Puhutko suomea?), and negative sentences use the negative verb (Minä en puhu englantia). Verb types 1–6 are studied in their own lesson.",
  },
};