import { Lesson } from "./types";

// Month 2, Lesson 1 — Finnish Negative Sentences
// Stable lesson ID: month-2-negative-sentences (see lessonRegistry.ts)
// Rule follows Rafiqul Hyder's present-tense negative tables (Imperfekti
// file): negative verb + present stem. Typos in his tables corrected:
// "ei anta" → ei anna, "en pakka" → en pakkaa, "nourene" → nuorene.

export const negativeSentencesLesson: Lesson = {
  slug: "negative-sentences",
  month: 2,

  title: {
    fi: "Kielteiset lauseet",
    bn: "না-বাচক বাক্য",
    en: "Finnish Negative Sentences",
  },

  intro: {
    fi: "Kuukaudella 1 näit kieltoa vain lyhyesti. Nyt opit sen kunnolla. Suomessa kielto tehdään omalla kieltoverbillä, joka taipuu persoonan mukaan. Kun osaat tämän, voit sanoa, mitä et tee, mitä et halua ja mitä et tarvitse.",
    bn: "প্রথম মাসে তুমি না-বাচক বাক্য শুধু সংক্ষেপে দেখেছ। এখন এটি ভালোভাবে শিখবে। ফিনিশে না-বাচক বাক্য তৈরি হয় একটি আলাদা না-বাচক ক্রিয়া দিয়ে, যা কর্তা অনুযায়ী বদলায়। এটি শিখলে তুমি বলতে পারবে তুমি কী করো না, কী চাও না, আর কী তোমার দরকার নেই।",
    en: "In Month 1 you saw negation only briefly. Now you'll learn it properly. In Finnish, negation is made with a separate negative verb that changes with the person. Once you know it, you can say what you don't do, don't want and don't need.",
  },

  objectives: [
    {
      fi: "Tuntea kieltoverbin muodot: en, et, ei, emme, ette, eivät.",
      bn: "না-বাচক ক্রিয়ার রূপগুলো জানা: en, et, ei, emme, ette, eivät।",
      en: "Know the forms of the negative verb: en, et, ei, emme, ette, eivät.",
    },
    {
      fi: "Muodostaa pääverbin kielteinen muoto kaikista verbityypeistä.",
      bn: "সব ক্রিয়াশ্রেণি থেকে মূল ক্রিয়ার না-বাচক রূপ তৈরি করতে পারা।",
      en: "Form the negative form of the main verb for all verb types.",
    },
    {
      fi: "Muuttaa myönteisen lauseen kielteiseksi ja vastata kieltävästi.",
      bn: "হ্যাঁ-বাচক বাক্যকে না-বাচক করা এবং না-সূচক উত্তর দিতে পারা।",
      en: "Turn a positive sentence into a negative one and answer with no.",
    },
  ],

  explanation: [
    {
      fi: "Suomessa ei ole sanaa, joka vastaisi suoraan englannin sanaa not. Sen sijaan käytetään kieltoverbiä, joka taipuu persoonan mukaan: minä en, sinä et, hän ei, me emme, te ette, he eivät.",
      bn: "ফিনিশে ইংরেজির not-এর মতো সরাসরি কোনো শব্দ নেই। এর বদলে একটি না-বাচক ক্রিয়া ব্যবহার হয়, যা কর্তা অনুযায়ী বদলায়: minä en, sinä et, hän ei, me emme, te ette, he eivät।",
      en: "Finnish has no word that directly matches English 'not'. Instead, it uses a negative verb that changes with the person: minä en, sinä et, hän ei, me emme, te ette, he eivät.",
    },
    {
      fi: "Persoonapääte on kieltoverbissä, ei pääverbissä. Pääverbi on kaikissa persoonissa samassa muodossa: minä en puhu, hän ei puhu, he eivät puhu.",
      bn: "ব্যক্তিবাচক প্রত্যয়টি থাকে না-বাচক ক্রিয়ায়, মূল ক্রিয়ায় নয়। মূল ক্রিয়াটি সব কর্তার সাথে একই রূপে থাকে: minä en puhu, hän ei puhu, he eivät puhu।",
      en: "The personal ending is on the negative verb, not on the main verb. The main verb has the same form for every person: minä en puhu, hän ei puhu, he eivät puhu.",
    },
    {
      fi: "Helppo sääntö pääverbin muodolle: ota minä-muoto ja poista lopusta -n. Puhun → en puhu, juon → en juo, tulen → en tule, osaan → en osaa, tarvitsen → en tarvitse, vanhenen → en vanhene. Sääntö toimii kaikissa verbityypeissä 1–6.",
      bn: "মূল ক্রিয়ার রূপের একটি সহজ নিয়ম: minä-র রূপটি নাও এবং শেষের -n বাদ দাও। puhun → en puhu, juon → en juo, tulen → en tule, osaan → en osaa, tarvitsen → en tarvitse, vanhenen → en vanhene। নিয়মটি ১–৬ সব ক্রিয়াশ্রেণিতেই কাজ করে।",
      en: "An easy rule for the main verb: take the minä form and remove the -n at the end. Puhun → en puhu, juon → en juo, tulen → en tule, osaan → en osaa, tarvitsen → en tarvitse, vanhenen → en vanhene. The rule works for all verb types 1–6.",
    },
    {
      fi: "Sama sääntö hoitaa myös astevaihtelun automaattisesti: lukea → minä luen → en lue, antaa → minä annan → en anna, tavata → minä tapaan → en tapaa. Astevaihtelun säännöt opitaan myöhemmin.",
      bn: "এই একই নিয়ম ব্যঞ্জন পরিবর্তনও (astevaihtelu) নিজে থেকেই সামলে নেয়: lukea (পড়া) → minä luen → en lue, antaa (দেওয়া) → minä annan → en anna, tavata (দেখা করা) → minä tapaan → en tapaa। ব্যঞ্জন পরিবর্তনের নিয়ম পরে শেখানো হবে।",
      en: "The same rule also handles consonant gradation automatically: lukea → minä luen → en lue, antaa → minä annan → en anna, tavata → minä tapaan → en tapaa. The gradation rules are taught later.",
    },
    {
      fi: "Olla: minä en ole, sinä et ole, hän ei ole, me emme ole, te ette ole, he eivät ole. Huomaa: hän on, mutta hän ei ole (ei koskaan ei on).",
      bn: "olla: minä en ole, sinä et ole, hän ei ole, me emme ole, te ette ole, he eivät ole। খেয়াল করো: hän on, কিন্তু hän ei ole (কখনো ei on নয়)।",
      en: "Olla: minä en ole, sinä et ole, hän ei ole, me emme ole, te ette ole, he eivät ole. Note: hän on, but hän ei ole (never ei on).",
    },
    {
      fi: "Sanajärjestys: kieltoverbi tulee pääverbin eteen, tavallisesti heti subjektin jälkeen: Minä en asu Helsingissä. Minä, sinä, me ja te voidaan jättää pois: En asu Helsingissä. Kysymykseen voi vastata lyhyesti: Puhutko ruotsia? – En. tai En puhu. Pelkkä Ei tarkoittaa myös 'no'.",
      bn: "শব্দক্রম: না-বাচক ক্রিয়া মূল ক্রিয়ার আগে আসে, সাধারণত কর্তার ঠিক পরে: Minä en asu Helsingissä (আমি হেলসিঙ্কিতে থাকি না)। minä, sinä, me ও te বাদ দেওয়া যায়: En asu Helsingissä। প্রশ্নের ছোট উত্তর দেওয়া যায়: Puhutko ruotsia? – En. অথবা En puhu.। শুধু Ei মানেও 'না'।",
      en: "Word order: the negative verb comes before the main verb, usually right after the subject: Minä en asu Helsingissä. Minä, sinä, me and te can be left out: En asu Helsingissä. A question can be answered briefly: Puhutko ruotsia? – En. or En puhu. Ei on its own also means 'no'.",
    },
    {
      fi: "Pieni esimakua: kielteisessä lauseessa objekti on tavallisesti partitiivissa: Minä ostan auton → Minä en osta autoa. Minulla on kirja → Minulla ei ole kirjaa. Tämä opitaan tarkemmin myöhemmin.",
      bn: "একটি ছোট পূর্বাভাস: না-বাচক বাক্যে কর্ম (object) সাধারণত partitiivi রূপে থাকে: Minä ostan auton (আমি গাড়িটা কিনি) → Minä en osta autoa (আমি গাড়ি কিনি না)। Minulla on kirja → Minulla ei ole kirjaa। এটি পরে বিস্তারিত শেখানো হবে।",
      en: "A small preview: in a negative sentence the object is usually in the partitive: Minä ostan auton → Minä en osta autoa. Minulla on kirja → Minulla ei ole kirjaa. This is taught in detail later.",
    },
  ],

  // Reuses the lesson table: the negative present of puhua for every person.
  pronounTable: [
    { fi: "minä en puhu", en: "I don't speak", bn: "আমি কথা বলি না" },
    { fi: "sinä et puhu", en: "you don't speak", bn: "তুমি কথা বলো না" },
    { fi: "hän ei puhu", en: "he / she doesn't speak", bn: "সে কথা বলে না" },
    { fi: "me emme puhu", en: "we don't speak", bn: "আমরা কথা বলি না" },
    { fi: "te ette puhu", en: "you (plural / formal) don't speak", bn: "তোমরা / আপনারা কথা বলো না / বলেন না" },
    { fi: "he eivät puhu", en: "they don't speak", bn: "তারা কথা বলে না" },
  ],

  examples: [
    { fi: "Minä en asu Helsingissä.", bn: "আমি হেলসিঙ্কিতে থাকি না।", en: "I don't live in Helsinki." },
    { fi: "Hän ei juo kahvia.", bn: "সে কফি পান করে না।", en: "He/She doesn't drink coffee." },
    { fi: "Me emme mene kouluun tänään.", bn: "আমরা আজ স্কুলে যাচ্ছি না।", en: "We're not going to school today." },
    { fi: "Sinä et osaa ruotsia.", bn: "তুমি সুইডিশ জানো না।", en: "You don't know Swedish." },
    { fi: "Te ette tarvitse apua.", bn: "তোমাদের সাহায্য দরকার নেই।", en: "You (all) don't need help." },
    { fi: "Sää ei kylmene vielä.", bn: "আবহাওয়া এখনো ঠান্ডা হচ্ছে না।", en: "The weather isn't getting colder yet." },
    { fi: "Minä en ole opiskelija.", bn: "আমি শিক্ষার্থী নই।", en: "I'm not a student." },
    { fi: "Hän ei ole kotona.", bn: "সে বাড়িতে নেই।", en: "He/She isn't at home." },
    { fi: "En halua kahvia.", bn: "আমি কফি চাই না।", en: "I don't want coffee." },
    { fi: "En tee töitä viikonloppuna.", bn: "আমি সপ্তাহান্তে কাজ করি না।", en: "I don't work at the weekend." },
    { fi: "En herää aikaisin.", bn: "আমি তাড়াতাড়ি ঘুম থেকে উঠি না।", en: "I don't wake up early." },
    { fi: "Puhutko ruotsia? – En puhu.", bn: "তুমি কি সুইডিশ বলো? – না, বলি না।", en: "Do you speak Swedish? – No, I don't." },
  ],

  vocabulary: [
    { fi: "en, et, ei", bn: "না-বাচক ক্রিয়া (আমি, তুমি, সে)", en: "negative verb (I, you, he/she)" },
    { fi: "emme, ette, eivät", bn: "না-বাচক ক্রিয়া (আমরা, তোমরা, তারা)", en: "negative verb (we, you, they)" },
    { fi: "ei", bn: "না", en: "no" },
    { fi: "vielä", bn: "এখনো", en: "yet, still" },
    { fi: "kotona", bn: "বাড়িতে", en: "at home" },
    { fi: "ruotsi", bn: "সুইডিশ ভাষা", en: "Swedish (language)" },
    { fi: "tehdä töitä", bn: "কাজ করা", en: "to work" },
    { fi: "viikonloppuna", bn: "সপ্তাহান্তে", en: "at the weekend" },
    { fi: "tänään", bn: "আজ", en: "today" },
  ],

  pronunciation: {
    fi: "Kieltoverbit ovat lyhyitä, mutta ääntämisen yksityiskohdat ovat tärkeitä: emme (pitkä mm), ette (pitkä tt), eivät (diftongi ei). Kieltoverbiä ei yleensä paineta voimakkaasti, paino on pääverbillä: en PUHU.",
    bn: "না-বাচক ক্রিয়াগুলো ছোট, কিন্তু উচ্চারণের খুঁটিনাটি গুরুত্বপূর্ণ: emme (দীর্ঘ mm), ette (দীর্ঘ tt), eivät (যুগ্মস্বর ei)। না-বাচক ক্রিয়ায় সাধারণত জোর দেওয়া হয় না, জোর পড়ে মূল ক্রিয়ায়: en PUHU।",
    en: "The negative verbs are short, but the details matter: emme (long mm), ette (long tt), eivät (the diphthong ei). The negative verb is usually not stressed strongly; the stress is on the main verb: en PUHU.",
  },

  commonMistakes: [
    {
      fi: "Lisätään persoonapääte pääverbiin: väärin minä en puhun, oikein minä en puhu.",
      bn: "মূল ক্রিয়ায় ব্যক্তিবাচক প্রত্যয় যোগ করা: ভুল minä en puhun, সঠিক minä en puhu।",
      en: "Adding a personal ending to the main verb: wrong minä en puhun, right minä en puhu.",
    },
    {
      fi: "Väärä kieltoverbi: väärin he ei puhu, oikein he eivät puhu.",
      bn: "ভুল না-বাচক ক্রিয়া: ভুল he ei puhu, সঠিক he eivät puhu।",
      en: "The wrong negative verb: wrong he ei puhu, right he eivät puhu.",
    },
    {
      fi: "Käytetään infinitiiviä: väärin en puhua, oikein en puhu.",
      bn: "মূল রূপ (infinitiivi) ব্যবহার করা: ভুল en puhua, সঠিক en puhu।",
      en: "Using the infinitive: wrong en puhua, right en puhu.",
    },
    {
      fi: "Käytetään hän-muotoa: väärin hän ei puhuu, oikein hän ei puhu.",
      bn: "hän-এর রূপ ব্যবহার করা: ভুল hän ei puhuu, সঠিক hän ei puhu।",
      en: "Using the hän form: wrong hän ei puhuu, right hän ei puhu.",
    },
    {
      fi: "Olla väärin: väärin hän ei on, oikein hän ei ole.",
      bn: "olla-র ভুল রূপ: ভুল hän ei on, সঠিক hän ei ole।",
      en: "Olla in the wrong form: wrong hän ei on, right hän ei ole.",
    },
    {
      fi: "Väärä sanajärjestys: väärin minä puhu en, oikein minä en puhu.",
      bn: "ভুল শব্দক্রম: ভুল minä puhu en, সঠিক minä en puhu।",
      en: "Wrong word order: wrong minä puhu en, right minä en puhu.",
    },
  ],

  practice: [
    {
      prompt: {
        fi: "Muuta kielteiseksi: Minä asun Suomessa.",
        bn: "না-বাচক করো: Minä asun Suomessa.",
        en: "Make it negative: Minä asun Suomessa.",
      },
      answer: "Minä en asu Suomessa.",
    },
    {
      prompt: {
        fi: "Muuta kielteiseksi: Hän juo kahvia.",
        bn: "না-বাচক করো: Hän juo kahvia.",
        en: "Make it negative: Hän juo kahvia.",
      },
      answer: "Hän ei juo kahvia.",
    },
    {
      prompt: {
        fi: "Muuta kielteiseksi: Me tulemme huomenna.",
        bn: "না-বাচক করো: Me tulemme huomenna.",
        en: "Make it negative: Me tulemme huomenna.",
      },
      answer: "Me emme tule huomenna.",
    },
    {
      prompt: {
        fi: "Muuta kielteiseksi: He osaavat suomea.",
        bn: "না-বাচক করো: He osaavat suomea.",
        en: "Make it negative: He osaavat suomea.",
      },
      answer: "He eivät osaa suomea.",
    },
    {
      prompt: {
        fi: "Muuta kielteiseksi: Sinä tarvitset apua.",
        bn: "না-বাচক করো: Sinä tarvitset apua.",
        en: "Make it negative: Sinä tarvitset apua.",
      },
      answer: "Sinä et tarvitse apua.",
    },
    {
      prompt: {
        fi: "Täydennä kielteisellä muodolla (olla): Te ___ kotona.",
        bn: "না-বাচক রূপ দিয়ে পূরণ করো (olla): Te ___ kotona.",
        en: "Fill in with the negative form (olla): Te ___ kotona.",
      },
      answer: "ette ole",
    },
    {
      prompt: {
        fi: "Täydennä kielteisellä muodolla (kylmetä): Sää ___ vielä.",
        bn: "না-বাচক রূপ দিয়ে পূরণ করো (kylmetä): Sää ___ vielä.",
        en: "Fill in with the negative form (kylmetä): Sää ___ vielä.",
      },
      answer: "ei kylmene",
    },
    {
      prompt: {
        fi: "Käännä suomeksi: I don't want coffee.",
        bn: "ফিনিশে অনুবাদ করো: আমি কফি চাই না।",
        en: "Translate into Finnish: I don't want coffee.",
      },
      answer: "(Minä) en halua kahvia.",
    },
    {
      prompt: {
        fi: "Vastaa kieltävästi: Puhutko ruotsia?",
        bn: "না-সূচক উত্তর দাও: Puhutko ruotsia?",
        en: "Answer with no: Puhutko ruotsia?",
      },
      answer: "En (puhu). / Ei.",
    },
    {
      prompt: {
        fi: "Korjaa virhe: Minä en puhun englantia.",
        bn: "ভুলটি ঠিক করো: Minä en puhun englantia.",
        en: "Correct the mistake: Minä en puhun englantia.",
      },
      answer: "Minä en puhu englantia.",
    },
  ],

  quiz: [
    {
      question: {
        fi: "Mikä kieltoverbi kuuluu he-pronominiin?",
        en: "Which negative verb goes with he (they)?",
      },
      options: [
        { fi: "ei", en: "ei" },
        { fi: "eivät", en: "eivät" },
        { fi: "emme", en: "emme" },
        { fi: "ette", en: "ette" },
      ],
      correctIndex: 1,
      explanation: {
        fi: "He-pronominin kanssa kieltoverbi on eivät: he eivät puhu.",
        bn: "he-র সাথে না-বাচক ক্রিয়া eivät: he eivät puhu।",
        en: "With he (they), the negative verb is eivät: he eivät puhu.",
      },
    },
    {
      question: {
        fi: "Täydennä: Minä ___ asu Helsingissä.",
        en: "Fill in: Minä ___ asu Helsingissä.",
      },
      options: [
        { fi: "en", en: "en" },
        { fi: "et", en: "et" },
        { fi: "ei", en: "ei" },
        { fi: "emme", en: "emme" },
      ],
      correctIndex: 0,
      explanation: {
        fi: "Minä-pronominin kanssa kieltoverbi on en.",
        bn: "minä-র সাথে না-বাচক ক্রিয়া en।",
        en: "With minä, the negative verb is en.",
      },
    },
    {
      question: {
        fi: "Täydennä: Hän ei ___ kotona. (olla)",
        en: "Fill in: Hän ei ___ kotona. (olla)",
      },
      options: [
        { fi: "on", en: "on" },
        { fi: "ole", en: "ole" },
        { fi: "olen", en: "olen" },
        { fi: "ovat", en: "ovat" },
      ],
      correctIndex: 1,
      explanation: {
        fi: "Kielteisessä lauseessa olla on muodossa ole: hän ei ole.",
        bn: "না-বাচক বাক্যে olla হয়ে যায় ole: hän ei ole।",
        en: "In a negative sentence, olla takes the form ole: hän ei ole.",
      },
    },
    {
      question: {
        fi: "Mikä lause on oikein?",
        en: "Which sentence is correct?",
      },
      options: [
        { fi: "Me emme puhumme suomea.", en: "Me emme puhumme suomea." },
        { fi: "Me emme puhu suomea.", en: "Me emme puhu suomea." },
        { fi: "Me ei puhu suomea.", en: "Me ei puhu suomea." },
        { fi: "Me emme puhua suomea.", en: "Me emme puhua suomea." },
      ],
      correctIndex: 1,
      explanation: {
        fi: "Persoonapääte on kieltoverbissä (emme), ja pääverbi on ilman päätettä (puhu).",
        bn: "ব্যক্তিবাচক প্রত্যয় থাকে না-বাচক ক্রিয়ায় (emme), আর মূল ক্রিয়া প্রত্যয় ছাড়া থাকে (puhu)।",
        en: "The personal ending is on the negative verb (emme), and the main verb has no ending (puhu).",
      },
    },
    {
      question: {
        fi: "Mikä on lauseen 'Sinä tulet huomenna' kielteinen muoto?",
        en: "What is the negative form of 'Sinä tulet huomenna'?",
      },
      options: [
        { fi: "Sinä et tule huomenna.", en: "Sinä et tule huomenna." },
        { fi: "Sinä et tulet huomenna.", en: "Sinä et tulet huomenna." },
        { fi: "Sinä ei tule huomenna.", en: "Sinä ei tule huomenna." },
        { fi: "Sinä et tulla huomenna.", en: "Sinä et tulla huomenna." },
      ],
      correctIndex: 0,
      explanation: {
        fi: "Sinä → et, ja tulen → tule: sinä et tule.",
        bn: "sinä → et, আর tulen → tule: sinä et tule।",
        en: "Sinä → et, and tulen → tule: sinä et tule.",
      },
    },
    {
      question: {
        fi: "Mikä on lauseen 'He tarvitsevat apua' kielteinen muoto?",
        en: "What is the negative form of 'He tarvitsevat apua'?",
      },
      options: [
        { fi: "He eivät tarvitse apua.", en: "He eivät tarvitse apua." },
        { fi: "He eivät tarvitsevat apua.", en: "He eivät tarvitsevat apua." },
        { fi: "He ei tarvitse apua.", en: "He ei tarvitse apua." },
        { fi: "He eivät tarvita apua.", en: "He eivät tarvita apua." },
      ],
      correctIndex: 0,
      explanation: {
        fi: "He → eivät, ja tarvitsen → tarvitse: he eivät tarvitse.",
        bn: "he → eivät, আর tarvitsen → tarvitse: he eivät tarvitse।",
        en: "He → eivät, and tarvitsen → tarvitse: he eivät tarvitse.",
      },
    },
  ],

  summary: {
    fi: "Suomessa kielto tehdään kieltoverbillä: en, et, ei, emme, ette, eivät. Persoonapääte on kieltoverbissä, ja pääverbi on kaikissa persoonissa samassa muodossa. Helppo sääntö: minä-muoto ilman -n:ää (puhun → en puhu, tarvitsen → en tarvitse). Olla: en ole, ei ole. Kieltoverbi tulee pääverbin eteen, ja pronomini voidaan jättää pois: En asu Helsingissä.",
    bn: "ফিনিশে না-বাচক বাক্য তৈরি হয় না-বাচক ক্রিয়া দিয়ে: en, et, ei, emme, ette, eivät। ব্যক্তিবাচক প্রত্যয় থাকে না-বাচক ক্রিয়ায়, আর মূল ক্রিয়া সব কর্তার সাথে একই রূপে থাকে। সহজ নিয়ম: minä-র রূপ থেকে -n বাদ দাও (puhun → en puhu, tarvitsen → en tarvitse)। olla: en ole, ei ole। না-বাচক ক্রিয়া মূল ক্রিয়ার আগে আসে, আর সর্বনাম বাদ দেওয়া যায়: En asu Helsingissä।",
    en: "In Finnish, negation is made with the negative verb: en, et, ei, emme, ette, eivät. The personal ending is on the negative verb, and the main verb has the same form for every person. Easy rule: the minä form without the -n (puhun → en puhu, tarvitsen → en tarvitse). Olla: en ole, ei ole. The negative verb comes before the main verb, and the pronoun can be left out: En asu Helsingissä.",
  },
};