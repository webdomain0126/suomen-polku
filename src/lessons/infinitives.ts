import { Lesson } from "./types";

// Month 2, Lesson 3 — Infinitives and Everyday Verb Usage
// Stable lesson ID: month-2-infinitives (see lessonRegistry.ts)
// Sources in Rafiqul Hyder's material: Genetiivi file (täytyy/pitää with
// the genitive person: Minun täytyy…), Elatiivi verb list (tykätä + -sta),
// ma/mä file (mennä/tulla + -maan form: Menen syömään).

export const infinitivesLesson: Lesson = {
  slug: "infinitives",
  month: 2,

  title: {
    fi: "Infinitiivi ja arjen verbit",
    bn: "ক্রিয়ার মূল রূপ ও দৈনন্দিন ক্রিয়া",
    en: "Infinitives and Everyday Verb Usage",
  },

  intro: {
    fi: "Olet jo oppinut taivuttamaan verbejä: minä puhun, sinä puhut. Nyt opit käyttämään kahta verbiä peräkkäin: Haluan puhua suomea. Voin auttaa. Tämä on yksi arjen tärkeimmistä rakenteista.",
    bn: "তুমি ইতিমধ্যে ক্রিয়ার রূপ বদলাতে শিখেছ: minä puhun, sinä puhut। এখন তুমি পরপর দুটি ক্রিয়া ব্যবহার করতে শিখবে: Haluan puhua suomea (আমি ফিনিশ বলতে চাই)। Voin auttaa (আমি সাহায্য করতে পারি)। এটি দৈনন্দিন জীবনের সবচেয়ে গুরুত্বপূর্ণ গঠনগুলোর একটি।",
    en: "You have already learned to conjugate verbs: minä puhun, sinä puhut. Now you'll learn to use two verbs in a row: Haluan puhua suomea. Voin auttaa. This is one of the most important everyday structures.",
  },

  objectives: [
    {
      fi: "Erottaa infinitiivin (sanakirjamuodon) ja taivutetun verbin.",
      bn: "মূল রূপ (অভিধানের রূপ) ও বদলানো ক্রিয়ার পার্থক্য বোঝা।",
      en: "Tell the infinitive (dictionary form) apart from a conjugated verb.",
    },
    {
      fi: "Käyttää rakenteita haluan / voin / osaan / yritän + infinitiivi.",
      bn: "haluan / voin / osaan / yritän + মূল রূপ — এই গঠনগুলো ব্যবহার করতে পারা।",
      en: "Use the structures haluan / voin / osaan / yritän + infinitive.",
    },
    {
      fi: "Tehdä näistä kielteisiä lauseita ja kysymyksiä.",
      bn: "এগুলো দিয়ে না-বাচক বাক্য ও প্রশ্ন তৈরি করতে পারা।",
      en: "Make negative sentences and questions with them.",
    },
  ],

  explanation: [
    {
      fi: "Infinitiivi on verbin perusmuoto, se joka on sanakirjassa: puhua, syödä, mennä, opiskella, nukkua, haluta, auttaa, ymmärtää. Taivutettu verbi kertoo, kuka tekee: minä puhun, hän syö. Suomessa on useita infinitiivejä, mutta tässä oppitunnissa opit vain tavallisimman, sanakirjamuodon.",
      bn: "infinitiivi হলো ক্রিয়ার মূল রূপ, যা অভিধানে থাকে: puhua (কথা বলা), syödä (খাওয়া), mennä (যাওয়া), opiskella (পড়াশোনা করা), nukkua (ঘুমানো), haluta (চাওয়া), auttaa (সাহায্য করা), ymmärtää (বোঝা)। বদলানো ক্রিয়া বলে দেয় কে কাজটি করছে: minä puhun, hän syö। ফিনিশে কয়েক ধরনের infinitiivi আছে, তবে এই পাঠে তুমি শুধু সবচেয়ে প্রচলিতটি, অর্থাৎ অভিধানের রূপ শিখবে।",
      en: "The infinitive is the basic form of a verb, the one in the dictionary: puhua, syödä, mennä, opiskella, nukkua, haluta, auttaa, ymmärtää. A conjugated verb shows who is doing it: minä puhun, hän syö. Finnish has several infinitives, but this lesson covers only the most common one, the dictionary form.",
    },
    {
      fi: "Kun lauseessa on kaksi verbiä, ensimmäinen taivutetaan ja toinen on infinitiivissä: Haluan puhua. Voin auttaa. Osaan lukea. Yritän ymmärtää. Ensimmäinen verbi kertoo, kuka tekee; toinen kertoo, mitä tehdään.",
      bn: "বাক্যে দুটি ক্রিয়া থাকলে প্রথমটির রূপ বদলায়, আর দ্বিতীয়টি মূল রূপে থাকে: Haluan puhua (আমি বলতে চাই)। Voin auttaa (আমি সাহায্য করতে পারি)। Osaan lukea (আমি পড়তে জানি)। Yritän ymmärtää (আমি বোঝার চেষ্টা করছি)। প্রথম ক্রিয়া বলে কে কাজটি করছে; দ্বিতীয়টি বলে কী কাজ।",
      en: "When a sentence has two verbs, the first is conjugated and the second stays in the infinitive: Haluan puhua. Voin auttaa. Osaan lukea. Yritän ymmärtää. The first verb shows who is doing it; the second says what is being done.",
    },
    {
      fi: "Osata vai voida? Osata kertoo taidosta: Osaan uida (olen oppinut sen). Voida kertoo mahdollisuudesta tai luvasta: Voin tulla huomenna (minulla on aikaa). Voinko tulla sisään? (saanko?)",
      bn: "osata নাকি voida? osata দক্ষতা বোঝায়: Osaan uida (আমি সাঁতার জানি — শিখেছি)। voida সম্ভাবনা বা অনুমতি বোঝায়: Voin tulla huomenna (আমি আগামীকাল আসতে পারব — সময় আছে)। Voinko tulla sisään? (আমি কি ভেতরে আসতে পারি?)",
      en: "Osata or voida? Osata is about a skill: Osaan uida (I've learned how). Voida is about possibility or permission: Voin tulla huomenna (I have time). Voinko tulla sisään? (May I come in?)",
    },
    {
      fi: "Kielteinen lause: vain ensimmäinen verbi muuttuu, kuten opit kieltolauseiden oppitunnilla, ja toinen pysyy infinitiivissä: Haluan opiskella → En halua opiskella. Voin auttaa → En voi auttaa. En voi tulla tänään.",
      bn: "না-বাচক বাক্য: শুধু প্রথম ক্রিয়াটি বদলায়, যেমন তুমি না-বাচক বাক্যের পাঠে শিখেছ, আর দ্বিতীয়টি মূল রূপেই থাকে: Haluan opiskella → En halua opiskella (আমি পড়তে চাই না)। Voin auttaa → En voi auttaa (আমি সাহায্য করতে পারি না)। En voi tulla tänään (আমি আজ আসতে পারব না)।",
      en: "A negative sentence: only the first verb changes, as you learned in the negative sentences lesson, and the second stays in the infinitive: Haluan opiskella → En halua opiskella. Voin auttaa → En voi auttaa. En voi tulla tänään.",
    },
    {
      fi: "Kysymys: -ko/-kö liitetään ensimmäiseen verbiin, ei infinitiiviin: Haluatko opiskella? Voitko auttaa? Osaatko uida?",
      bn: "প্রশ্ন: -ko/-kö প্রথম ক্রিয়ার সাথে যুক্ত হয়, মূল রূপের সাথে নয়: Haluatko opiskella? (তুমি কি পড়তে চাও?) Voitko auttaa? (তুমি কি সাহায্য করতে পারো?) Osaatko uida? (তুমি কি সাঁতার জানো?)",
      en: "A question: -ko/-kö goes on the first verb, not on the infinitive: Haluatko opiskella? Voitko auttaa? Osaatko uida?",
    },
    {
      fi: "Tykätä on arkikielen verbi, ja sillä on oma rakenteensa. Verbin kanssa käytetään infinitiiviä: Tykkään lukea. Mutta substantiivin kanssa tykätä saa -sta/-stä-päätteen: Tykkään kahvista. Tämä pääte opitaan myöhemmin.",
      bn: "tykätä (ভালো লাগা) কথ্য ভাষার একটি ক্রিয়া, এবং এর নিজস্ব গঠন আছে। অন্য ক্রিয়ার সাথে মূল রূপ ব্যবহার হয়: Tykkään lukea (আমি পড়তে ভালোবাসি)। কিন্তু বিশেষ্যের সাথে tykätä-র পরে -sta/-stä যুক্ত হয়: Tykkään kahvista (আমি কফি পছন্দ করি)। এই প্রত্যয়টি পরে শেখানো হবে।",
      en: "Tykätä is an everyday verb with its own structure. With another verb it takes the infinitive: Tykkään lukea. But with a noun, tykätä takes the ending -sta/-stä: Tykkään kahvista. That ending is taught later.",
    },
    {
      fi: "Minun täytyy + infinitiivi tarkoittaa 'minun on pakko': Minun täytyy mennä. Opettele se valmiina rakenteena: täytyy ei taivu koskaan, vaan persoona muuttuu: minun, sinun, hänen, meidän, teidän, heidän täytyy mennä.",
      bn: "Minun täytyy + মূল রূপ মানে 'আমাকে করতেই হবে': Minun täytyy mennä (আমাকে যেতে হবে)। এটি একটি তৈরি গঠন হিসেবে শিখে নাও: täytyy কখনো বদলায় না, বদলায় শুধু ব্যক্তি: minun, sinun, hänen, meidän, teidän, heidän täytyy mennä।",
      en: "Minun täytyy + infinitive means 'I have to': Minun täytyy mennä. Learn it as a fixed structure: täytyy never changes; only the person changes: minun, sinun, hänen, meidän, teidän, heidän täytyy mennä.",
    },
    {
      fi: "Kaikki verbit eivät käytä samaa rakennetta. Esimerkiksi mennä ja tulla käyttävät toisen verbin kanssa -maan/-mään-muotoa: Menen syömään (ei: Menen syödä). Tämä muoto opitaan myöhemmin.",
      bn: "সব ক্রিয়া একই গঠন ব্যবহার করে না। যেমন mennä (যাওয়া) ও tulla (আসা)-র পরে দ্বিতীয় ক্রিয়াটি -maan/-mään রূপে থাকে: Menen syömään (আমি খেতে যাচ্ছি) — Menen syödä নয়। এই রূপটি পরে শেখানো হবে।",
      en: "Not all verbs use the same structure. For example, mennä and tulla take the -maan/-mään form of the second verb: Menen syömään (not: Menen syödä). That form is taught later.",
    },
  ],

  // Reuses the lesson table: one row per everyday verb pattern.
  pronounTable: [
    { fi: "haluta → Haluan opiskella suomea.", en: "want to · I want to study Finnish.", bn: "চাওয়া · আমি ফিনিশ শিখতে চাই।" },
    { fi: "voida → Voin auttaa.", en: "can (possible / allowed) · I can help.", bn: "পারা (সম্ভব) · আমি সাহায্য করতে পারি।" },
    { fi: "osata → Osaan puhua vähän suomea.", en: "can (skill) · I can speak a little Finnish.", bn: "জানা (দক্ষতা) · আমি একটু ফিনিশ বলতে পারি।" },
    { fi: "yrittää → Yritän ymmärtää.", en: "try to · I'm trying to understand.", bn: "চেষ্টা করা · আমি বোঝার চেষ্টা করছি।" },
    { fi: "tykätä → Tykkään lukea.", en: "like to (own pattern) · I like reading.", bn: "ভালো লাগা · আমি পড়তে ভালোবাসি।" },
    { fi: "täytyy → Minun täytyy mennä.", en: "have to (fixed structure) · I have to go.", bn: "করতেই হবে · আমাকে যেতে হবে।" },
  ],

  examples: [
    { fi: "Haluan syödä.", bn: "আমি খেতে চাই।", en: "I want to eat." },
    { fi: "En voi tulla tänään.", bn: "আমি আজ আসতে পারব না।", en: "I can't come today." },
    { fi: "Haluatko opiskella?", bn: "তুমি কি পড়তে চাও?", en: "Do you want to study?" },
    { fi: "Yritän puhua suomea.", bn: "আমি ফিনিশ বলার চেষ্টা করছি।", en: "I'm trying to speak Finnish." },
    { fi: "Liisa: Opiskeletko suomea? – Rahim: Opiskelen. Haluan puhua suomea hyvin.", bn: "লিসা: তুমি কি ফিনিশ পড়ো? – রহিম: হ্যাঁ। আমি ভালোভাবে ফিনিশ বলতে চাই।", en: "Liisa: Do you study Finnish? – Rahim: Yes. I want to speak Finnish well." },
    { fi: "Rahim: Voitko auttaa minua? – Liisa: Voin. Mitä sinä tarvitset?", bn: "রহিম: তুমি কি আমাকে সাহায্য করতে পারো? – লিসা: পারি। তোমার কী দরকার?", en: "Rahim: Can you help me? – Liisa: Yes. What do you need?" },
    { fi: "Rahim: En ymmärrä tätä sanaa. – Liisa: Ei hätää, minä voin selittää.", bn: "রহিম: আমি এই শব্দটা বুঝতে পারছি না। – লিসা: চিন্তা নেই, আমি বুঝিয়ে দিতে পারি।", en: "Rahim: I don't understand this word. – Liisa: No problem, I can explain." },
    { fi: "Liisa: Osaatko uida? – Rahim: En osaa. Mutta haluan oppia.", bn: "লিসা: তুমি কি সাঁতার জানো? – রহিম: জানি না। কিন্তু শিখতে চাই।", en: "Liisa: Can you swim? – Rahim: No. But I want to learn." },
    { fi: "Liisa: Mitä haluat tehdä tänään? – Rahim: Haluan levätä.", bn: "লিসা: আজ তুমি কী করতে চাও? – রহিম: আমি বিশ্রাম নিতে চাই।", en: "Liisa: What do you want to do today? – Rahim: I want to rest." },
    { fi: "Rahim: Huomenna minun täytyy mennä töihin.", bn: "রহিম: আগামীকাল আমাকে কাজে যেতে হবে।", en: "Rahim: Tomorrow I have to go to work." },
  ],

  vocabulary: [
    { fi: "infinitiivi", bn: "ক্রিয়ার মূল রূপ", en: "infinitive" },
    { fi: "haluta (haluan)", bn: "চাওয়া", en: "to want" },
    { fi: "voida (voin)", bn: "পারা (সম্ভব / অনুমতি)", en: "can, to be able to" },
    { fi: "osata (osaan)", bn: "জানা / পারা (দক্ষতা)", en: "to know how, can" },
    { fi: "yrittää (yritän)", bn: "চেষ্টা করা", en: "to try" },
    { fi: "tykätä (tykkään)", bn: "ভালো লাগা / পছন্দ করা", en: "to like" },
    { fi: "minun täytyy", bn: "আমাকে করতেই হবে", en: "I have to" },
    { fi: "auttaa (autan)", bn: "সাহায্য করা", en: "to help" },
    { fi: "oppia (opin)", bn: "শেখা", en: "to learn" },
    { fi: "uida (uin)", bn: "সাঁতার কাটা", en: "to swim" },
    { fi: "levätä (lepään)", bn: "বিশ্রাম নেওয়া", en: "to rest" },
    { fi: "selittää (selitän)", bn: "ব্যাখ্যা করা / বুঝিয়ে দেওয়া", en: "to explain" },
  ],

  pronunciation: {
    fi: "Kahden verbin lauseessa molemmat verbit äännetään selvästi, ja kummankin paino on ensimmäisellä tavulla: HA-lu-an PU-hu-a. Huomaa pitkät konsonantit: auttaa (tt), yrittää (tt), nukkua (kk).",
    bn: "দুটি ক্রিয়ার বাক্যে দুটি ক্রিয়াই স্পষ্টভাবে উচ্চারিত হয়, আর প্রতিটির জোর প্রথম সিলেবলে: HA-lu-an PU-hu-a। দীর্ঘ ব্যঞ্জনগুলো খেয়াল করো: auttaa (tt), yrittää (tt), nukkua (kk)।",
    en: "In a two-verb sentence both verbs are pronounced clearly, each with stress on its first syllable: HA-lu-an PU-hu-a. Note the long consonants: auttaa (tt), yrittää (tt), nukkua (kk).",
  },

  commonMistakes: [
    {
      fi: "Taivutetaan myös toinen verbi: väärin Haluan puhun suomea, oikein Haluan puhua suomea.",
      bn: "দ্বিতীয় ক্রিয়াটিও বদলে ফেলা: ভুল Haluan puhun suomea, সঠিক Haluan puhua suomea।",
      en: "Conjugating the second verb too: wrong Haluan puhun suomea, right Haluan puhua suomea.",
    },
    {
      fi: "Käytetään infinitiiviä ensimmäisenä verbinä: väärin Minä haluta kahvia, oikein Minä haluan kahvia.",
      bn: "প্রথম ক্রিয়া হিসেবে মূল রূপ ব্যবহার করা: ভুল Minä haluta kahvia, সঠিক Minä haluan kahvia।",
      en: "Using the infinitive as the first verb: wrong Minä haluta kahvia, right Minä haluan kahvia.",
    },
    {
      fi: "Väärä kielto: väärin En haluan opiskella, oikein En halua opiskella.",
      bn: "ভুল না-বাচক রূপ: ভুল En haluan opiskella, সঠিক En halua opiskella।",
      en: "A wrong negative: wrong En haluan opiskella, right En halua opiskella.",
    },
    {
      fi: "-ko väärässä paikassa: väärin Haluat opiskellako?, oikein Haluatko opiskella?",
      bn: "-ko ভুল জায়গায়: ভুল Haluat opiskellako?, সঠিক Haluatko opiskella?",
      en: "-ko in the wrong place: wrong Haluat opiskellako?, right Haluatko opiskella?",
    },
    {
      fi: "Taivutetaan täytyy: väärin Minä täydyn mennä, oikein Minun täytyy mennä.",
      bn: "täytyy-কে বদলে ফেলা: ভুল Minä täydyn mennä, সঠিক Minun täytyy mennä।",
      en: "Conjugating täytyy: wrong Minä täydyn mennä, right Minun täytyy mennä.",
    },
    {
      fi: "Oletetaan, että kaikki verbit käyttävät samaa rakennetta: väärin Menen syödä, oikein Menen syömään (mennä + -maan, opitaan myöhemmin).",
      bn: "ধরে নেওয়া যে সব ক্রিয়া একই গঠন ব্যবহার করে: ভুল Menen syödä, সঠিক Menen syömään (mennä + -maan, পরে শেখানো হবে)।",
      en: "Assuming all verbs use the same structure: wrong Menen syödä, right Menen syömään (mennä + -maan, taught later).",
    },
  ],

  practice: [
    {
      prompt: {
        fi: "Täydennä (puhua): Haluan ___ suomea.",
        bn: "পূরণ করো (puhua): Haluan ___ suomea.",
        en: "Complete (puhua): Haluan ___ suomea.",
      },
      answer: "puhua",
    },
    {
      prompt: {
        fi: "Täydennä (auttaa): Voin ___ sinua.",
        bn: "পূরণ করো (auttaa): Voin ___ sinua.",
        en: "Complete (auttaa): Voin ___ sinua.",
      },
      answer: "auttaa",
    },
    {
      prompt: {
        fi: "Täydennä (uida): Osaatko ___?",
        bn: "পূরণ করো (uida): Osaatko ___?",
        en: "Complete (uida): Osaatko ___?",
      },
      answer: "uida",
    },
    {
      prompt: {
        fi: "Muuta kielteiseksi: Haluan opiskella.",
        bn: "না-বাচক করো: Haluan opiskella.",
        en: "Make it negative: Haluan opiskella.",
      },
      answer: "En halua opiskella.",
    },
    {
      prompt: {
        fi: "Muuta kielteiseksi: Voin tulla tänään.",
        bn: "না-বাচক করো: Voin tulla tänään.",
        en: "Make it negative: Voin tulla tänään.",
      },
      answer: "En voi tulla tänään.",
    },
    {
      prompt: {
        fi: "Muuta kysymykseksi: Sinä voit auttaa.",
        bn: "প্রশ্নে রূপান্তর করো: Sinä voit auttaa.",
        en: "Turn into a question: Sinä voit auttaa.",
      },
      answer: "Voitko (sinä) auttaa?",
    },
    {
      prompt: {
        fi: "Muuta kysymykseksi: Sinä haluat syödä.",
        bn: "প্রশ্নে রূপান্তর করো: Sinä haluat syödä.",
        en: "Turn into a question: Sinä haluat syödä.",
      },
      answer: "Haluatko (sinä) syödä?",
    },
    {
      prompt: {
        fi: "Korjaa virhe: Haluan puhun suomea.",
        bn: "ভুলটি ঠিক করো: Haluan puhun suomea.",
        en: "Correct the mistake: Haluan puhun suomea.",
      },
      answer: "Haluan puhua suomea.",
    },
    {
      prompt: {
        fi: "Osaan vai voin? (taito) ___ puhua englantia.",
        bn: "osaan নাকি voin? (দক্ষতা) ___ puhua englantia.",
        en: "Osaan or voin? (a skill) ___ puhua englantia.",
      },
      answer: "Osaan",
    },
    {
      prompt: {
        fi: "Käännä suomeksi: I have to go.",
        bn: "ফিনিশে অনুবাদ করো: আমাকে যেতে হবে।",
        en: "Translate into Finnish: I have to go.",
      },
      answer: "Minun täytyy mennä.",
    },
    {
      prompt: {
        fi: "Käännä suomeksi: I'm trying to understand.",
        bn: "ফিনিশে অনুবাদ করো: আমি বোঝার চেষ্টা করছি।",
        en: "Translate into Finnish: I'm trying to understand.",
      },
      answer: "Yritän ymmärtää.",
    },
  ],

  quiz: [
    {
      question: {
        fi: "Täydennä: Haluan ___ suomea. (puhua)",
        en: "Fill in: Haluan ___ suomea. (puhua)",
      },
      options: [
        { fi: "puhun", en: "puhun" },
        { fi: "puhua", en: "puhua" },
        { fi: "puhuu", en: "puhuu" },
        { fi: "puhut", en: "puhut" },
      ],
      correctIndex: 1,
      explanation: {
        fi: "Haluta-verbin jälkeen toinen verbi on infinitiivissä: Haluan puhua.",
        bn: "haluta-র পরে দ্বিতীয় ক্রিয়াটি মূল রূপে থাকে: Haluan puhua।",
        en: "After haluta the second verb is in the infinitive: Haluan puhua.",
      },
    },
    {
      question: {
        fi: "Mikä on lauseen 'Voin auttaa' kielteinen muoto?",
        en: "What is the negative of 'Voin auttaa'?",
      },
      options: [
        { fi: "En voi auttaa.", en: "En voi auttaa." },
        { fi: "En voin auttaa.", en: "En voin auttaa." },
        { fi: "En voi autan.", en: "En voi autan." },
        { fi: "Ei voi auttaa.", en: "Ei voi auttaa." },
      ],
      correctIndex: 0,
      explanation: {
        fi: "Vain ensimmäinen verbi muuttuu (voin → en voi), ja auttaa pysyy infinitiivissä.",
        bn: "শুধু প্রথম ক্রিয়াটি বদলায় (voin → en voi), আর auttaa মূল রূপেই থাকে।",
        en: "Only the first verb changes (voin → en voi), and auttaa stays in the infinitive.",
      },
    },
    {
      question: {
        fi: "Mikä kysymys on oikein?",
        en: "Which question is correct?",
      },
      options: [
        { fi: "Haluatko syödä?", en: "Haluatko syödä?" },
        { fi: "Haluat syödäkö?", en: "Haluat syödäkö?" },
        { fi: "Haluatkö syödä?", en: "Haluatkö syödä?" },
        { fi: "Halutko syödä?", en: "Halutko syödä?" },
      ],
      correctIndex: 0,
      explanation: {
        fi: "-ko liitetään ensimmäiseen verbiin, ja haluta-verbissä on a ja u, joten pääte on -ko: Haluatko syödä?",
        bn: "-ko প্রথম ক্রিয়ার সাথে যুক্ত হয়, আর haluta-তে a ও u আছে, তাই প্রত্যয় -ko: Haluatko syödä?",
        en: "-ko goes on the first verb, and haluta has a and u, so the ending is -ko: Haluatko syödä?",
      },
    },
    {
      question: {
        fi: "Miten sanotaan 'I have to go'?",
        en: "How do you say 'I have to go'?",
      },
      options: [
        { fi: "Minun täytyy mennä.", en: "Minun täytyy mennä." },
        { fi: "Minä täydyn mennä.", en: "Minä täydyn mennä." },
        { fi: "Minä täytyy mennä.", en: "Minä täytyy mennä." },
        { fi: "Minun täytyn mennä.", en: "Minun täytyn mennä." },
      ],
      correctIndex: 0,
      explanation: {
        fi: "Valmis rakenne: minun täytyy + infinitiivi. Täytyy ei taivu.",
        bn: "তৈরি গঠন: minun täytyy + মূল রূপ। täytyy বদলায় না।",
        en: "A fixed structure: minun täytyy + infinitive. Täytyy doesn't change.",
      },
    },
    {
      question: {
        fi: "Miten sanotaan 'I can swim' (osaan uida = taito)?",
        en: "How do you say 'I can swim' (a skill)?",
      },
      options: [
        { fi: "Osaan uida.", en: "Osaan uida." },
        { fi: "Osaan uin.", en: "Osaan uin." },
        { fi: "Osata uida.", en: "Osata uida." },
        { fi: "Osaan uimaan.", en: "Osaan uimaan." },
      ],
      correctIndex: 0,
      explanation: {
        fi: "Osata kertoo taidosta, ja sen jälkeen tulee infinitiivi: Osaan uida.",
        bn: "osata দক্ষতা বোঝায়, আর এর পরে মূল রূপ আসে: Osaan uida।",
        en: "Osata is about a skill, and it is followed by the infinitive: Osaan uida.",
      },
    },
    {
      question: {
        fi: "Mikä lause on oikein?",
        en: "Which sentence is correct?",
      },
      options: [
        { fi: "Menen syödä.", en: "Menen syödä." },
        { fi: "Menen syömään.", en: "Menen syömään." },
        { fi: "Menen syön.", en: "Menen syön." },
        { fi: "Menen syömässä.", en: "Menen syömässä." },
      ],
      correctIndex: 1,
      explanation: {
        fi: "Mennä ei käytä infinitiiviä, vaan -maan/-mään-muotoa: Menen syömään. Tämä muoto opitaan myöhemmin.",
        bn: "mennä-র পরে মূল রূপ নয়, -maan/-mään রূপ বসে: Menen syömään। এই রূপটি পরে শেখানো হবে।",
        en: "Mennä doesn't take the infinitive but the -maan/-mään form: Menen syömään. That form is taught later.",
      },
    },
  ],

  summary: {
    fi: "Kun lauseessa on kaksi verbiä, ensimmäinen taivutetaan ja toinen on infinitiivissä: Haluan puhua, Voin auttaa, Osaan lukea, Yritän ymmärtää. Kiellossa ja kysymyksessä vain ensimmäinen verbi muuttuu: En halua opiskella, Haluatko opiskella? Osata = taito, voida = mahdollisuus. Tykkään lukea on oma rakenteensa. Minun täytyy mennä on valmis rakenne. Kaikki verbit eivät käytä infinitiiviä: Menen syömään.",
    bn: "বাক্যে দুটি ক্রিয়া থাকলে প্রথমটির রূপ বদলায়, আর দ্বিতীয়টি মূল রূপে থাকে: Haluan puhua, Voin auttaa, Osaan lukea, Yritän ymmärtää। না-বাচক বাক্য ও প্রশ্নে শুধু প্রথম ক্রিয়াটি বদলায়: En halua opiskella, Haluatko opiskella? osata = দক্ষতা, voida = সম্ভাবনা। Tykkään lukea-র নিজস্ব গঠন আছে। Minun täytyy mennä একটি তৈরি গঠন। সব ক্রিয়া মূল রূপ নেয় না: Menen syömään।",
    en: "When a sentence has two verbs, the first is conjugated and the second stays in the infinitive: Haluan puhua, Voin auttaa, Osaan lukea, Yritän ymmärtää. In negatives and questions only the first verb changes: En halua opiskella, Haluatko opiskella? Osata = a skill, voida = a possibility. Tykkään lukea has its own pattern. Minun täytyy mennä is a fixed structure. Not all verbs take the infinitive: Menen syömään.",
  },
};