import { Lesson } from "./types";

// Month 1 — Review / Consolidation
// Stable lesson ID: month-1-review (see lessonRegistry.ts)
// No new grammar: everything here repeats the rules and example verbs
// from Month 1 lessons 1–9 (pronouns, olla, present tense, verb types 1–6).

export const month1ReviewLesson: Lesson = {
  slug: "review",
  month: 1,

  title: {
    fi: "Kuukauden 1 kertaus",
    bn: "প্রথম মাসের পুনরালোচনা",
    en: "Month 1 Review",
  },

  intro: {
    fi: "Onnittelut, olet käynyt läpi kuukauden 1 kaikki oppitunnit! Tässä kertauksessa ei ole uutta kielioppia. Kertaamme persoonapronominit, olla-verbin, preesensin ja kaikki kuusi verbityyppiä, ja harjoittelemme niitä yhdessä.",
    bn: "অভিনন্দন, তুমি প্রথম মাসের সব পাঠ শেষ করেছ! এই পুনরালোচনায় নতুন কোনো ব্যাকরণ নেই। আমরা ব্যক্তিবাচক সর্বনাম, olla ক্রিয়া, বর্তমান কাল এবং ছয়টি ক্রিয়াশ্রেণি আবার দেখব এবং একসাথে অনুশীলন করব।",
    en: "Congratulations, you have gone through all the Month 1 lessons! This review has no new grammar. We'll review the personal pronouns, the verb olla, the present tense and all six verb types, and practise them together.",
  },

  objectives: [
    {
      fi: "Kerrata kuukauden 1 tärkeimmät rakenteet yhdessä paikassa.",
      bn: "প্রথম মাসের সবচেয়ে গুরুত্বপূর্ণ বিষয়গুলো এক জায়গায় আবার দেখা।",
      en: "Review the key structures of Month 1 in one place.",
    },
    {
      fi: "Tunnistaa kaikki kuusi verbityyppiä ja erottaa erityisesti tyypit 4, 5 ja 6.",
      bn: "ছয়টি ক্রিয়াশ্রেণি চেনা, বিশেষ করে শ্রেণি ৪, ৫ ও ৬ আলাদা করতে পারা।",
      en: "Recognise all six verb types, and especially tell types 4, 5 and 6 apart.",
    },
    {
      fi: "Muodostaa myönteisiä ja kielteisiä preesenslauseita.",
      bn: "বর্তমান কালে হ্যাঁ-বাচক ও না-বাচক বাক্য তৈরি করতে পারা।",
      en: "Form positive and negative present-tense sentences.",
    },
  ],

  explanation: [
    {
      fi: "Persoonapronominit: minä, sinä, hän, me, te, he. Asioista käytetään myös se (yksikkö) ja ne (monikko). Hän tarkoittaa sekä miestä että naista.",
      bn: "ব্যক্তিবাচক সর্বনাম: minä (আমি), sinä (তুমি), hän (সে), me (আমরা), te (তোমরা / আপনি / আপনারা), he (তারা)। জিনিসের জন্য se (একবচন) ও ne (বহুবচন) ব্যবহার হয়। hän পুরুষ ও নারী দুজনকেই বোঝায়।",
      en: "Personal pronouns: minä, sinä, hän, me, te, he. For things we also use se (singular) and ne (plural). Hän means both he and she.",
    },
    {
      fi: "Olla: minä olen, sinä olet, hän on, me olemme, te olette, he ovat. Olla kuuluu tyyppiin 3, mutta hän on ja he ovat ovat epäsäännöllisiä. Esimerkiksi: Minä olen opiskelija. He ovat ystäviä.",
      bn: "olla (হওয়া / থাকা): minä olen, sinä olet, hän on, me olemme, te olette, he ovat। olla শ্রেণি ৩-এর, কিন্তু hän on ও he ovat অনিয়মিত। যেমন: Minä olen opiskelija (আমি একজন শিক্ষার্থী)। He ovat ystäviä (তারা বন্ধু)।",
      en: "Olla: minä olen, sinä olet, hän on, me olemme, te olette, he ovat. Olla belongs to type 3, but hän on and he ovat are irregular. For example: Minä olen opiskelija. He ovat ystäviä.",
    },
    {
      fi: "Peruslause on subjekti + verbi + täydennys: Minä asun Suomessa. Minä, sinä, me ja te jätetään usein pois: Asun Suomessa. Kyllä/ei-kysymyksessä verbi tulee alkuun ja saa päätteen -ko/-kö: Asutko Suomessa?",
      bn: "মৌলিক বাক্য: কর্তা + ক্রিয়া + পরিপূরক: Minä asun Suomessa (আমি ফিনল্যান্ডে থাকি)। minä, sinä, me ও te প্রায়ই বাদ দেওয়া হয়: Asun Suomessa। হ্যাঁ/না প্রশ্নে ক্রিয়া শুরুতে আসে এবং -ko/-kö যুক্ত হয়: Asutko Suomessa? (তুমি কি ফিনল্যান্ডে থাকো?)",
      en: "A basic sentence is subject + verb + complement: Minä asun Suomessa. Minä, sinä, me and te are often left out: Asun Suomessa. In a yes/no question the verb comes first and takes -ko/-kö: Asutko Suomessa?",
    },
    {
      fi: "Preesensin persoonapäätteet lisätään vartaloon: minä -n, sinä -t, me -mme, te -tte, he -vat/-vät. Hän-muodossa ei ole omaa päätettä. Valinta -vat vai -vät riippuu vokaalisoinnusta: puhuvat, mutta syövät.",
      bn: "বর্তমান কালের ব্যক্তিবাচক প্রত্যয়গুলো মূল অংশের সাথে যোগ হয়: minä -n, sinä -t, me -mme, te -tte, he -vat/-vät। hän-এর রূপে আলাদা কোনো প্রত্যয় নেই। -vat নাকি -vät হবে, তা স্বরসংগতির উপর নির্ভর করে: puhuvat, কিন্তু syövät।",
      en: "The present-tense personal endings are added to the stem: minä -n, sinä -t, me -mme, te -tte, he -vat/-vät. The hän form has no ending of its own. Whether it's -vat or -vät depends on vowel harmony: puhuvat, but syövät.",
    },
    {
      fi: "Verbityypit 1–3: tyyppi 1 päättyy vokaali + a/ä, ja a/ä poistetaan (puhua → puhu-). Tyyppi 2 päättyy -da/-dä, ja -da/-dä poistetaan (juoda → juo-). Tyyppi 3 päättyy -lla/-rra/-nna/-sta; tunnus poistetaan ja lisätään e (tulla → tule-, pestä → pese-, s jää).",
      bn: "ক্রিয়াশ্রেণি ১–৩: শ্রেণি ১ শেষ হয় স্বরবর্ণ + a/ä দিয়ে, আর a/ä বাদ যায় (puhua → puhu-)। শ্রেণি ২ শেষ হয় -da/-dä দিয়ে, আর -da/-dä বাদ যায় (juoda → juo-)। শ্রেণি ৩ শেষ হয় -lla/-rra/-nna/-sta দিয়ে; চিহ্ন বাদ দিয়ে e যোগ হয় (tulla → tule-, pestä → pese-, s থেকে যায়)।",
      en: "Verb types 1–3: type 1 ends in vowel + a/ä, and a/ä is removed (puhua → puhu-). Type 2 ends in -da/-dä, and -da/-dä is removed (juoda → juo-). Type 3 ends in -lla/-rra/-nna/-sta; the marker is removed and e is added (tulla → tule-, pestä → pese-, the s stays).",
    },
    {
      fi: "Verbityypit 4, 5 ja 6 päättyvät kaikki ta/tä. Katso ta/tä:tä edeltävää vokaalia: -ata/-ätä, -ota/-ötä, -uta/-ytä → tyyppi 4: poista ta/tä, lisää a/ä (osata → osaa-). -ita/-itä → tyyppi 5: poista ta/tä, lisää tse (tarvita → tarvitse-). -eta/-etä → tyyppi 6: poista ta/tä, lisää ne (vanheta → vanhene-).",
      bn: "ক্রিয়াশ্রেণি ৪, ৫ ও ৬ — তিনটিই ta/tä দিয়ে শেষ হয়। তাই ta/tä-র আগের স্বরবর্ণটি দেখো: -ata/-ätä, -ota/-ötä, -uta/-ytä → শ্রেণি ৪: ta/tä বাদ দিয়ে a/ä যোগ করো (osata → osaa-)। -ita/-itä → শ্রেণি ৫: ta/tä বাদ দিয়ে tse যোগ করো (tarvita → tarvitse-)। -eta/-etä → শ্রেণি ৬: ta/tä বাদ দিয়ে ne যোগ করো (vanheta → vanhene-)।",
      en: "Verb types 4, 5 and 6 all end in ta/tä. Look at the vowel before ta/tä: -ata/-ätä, -ota/-ötä, -uta/-ytä → type 4: remove ta/tä, add a/ä (osata → osaa-). -ita/-itä → type 5: remove ta/tä, add tse (tarvita → tarvitse-). -eta/-etä → type 6: remove ta/tä, add ne (vanheta → vanhene-).",
    },
    {
      fi: "Muistisääntö: A, O, U → 4 (osata, siivota, haluta). I → 5 (tarvita). E → 6 (vanheta). Muista poikkeukset: hävitä ja kiivetä ovat tyyppiä 4 (minä häviän, minä kiipeän).",
      bn: "মনে রাখার কৌশল: A, O, U → ৪ (osata, siivota, haluta)। I → ৫ (tarvita)। E → ৬ (vanheta)। ব্যতিক্রমগুলো মনে রাখো: hävitä ও kiivetä শ্রেণি ৪-এর (minä häviän, minä kiipeän)।",
      en: "Memory rule: A, O, U → 4 (osata, siivota, haluta). I → 5 (tarvita). E → 6 (vanheta). Remember the exceptions: hävitä and kiivetä are type 4 (minä häviän, minä kiipeän).",
    },
    {
      fi: "Hän-muoto: useimmissa tyypeissä vartalon viimeinen vokaali pitenee: hän puhuu, hän tulee, hän haluaa, hän tarvitsee, hän vanhenee. Tyypissä 2 vokaali ei pitene (hän juo), eikä myöskään, jos vartalo päättyy jo pitkään vokaaliin (hän osaa). Olla on poikkeus: hän on.",
      bn: "hän-এর রূপ: বেশিরভাগ শ্রেণিতে মূল অংশের শেষ স্বর দীর্ঘ হয়: hän puhuu, hän tulee, hän haluaa, hän tarvitsee, hän vanhenee। শ্রেণি ২-এ স্বর দীর্ঘ হয় না (hän juo), আর মূল অংশ আগেই দীর্ঘ স্বরে শেষ হলেও হয় না (hän osaa)। olla ব্যতিক্রম: hän on।",
      en: "The hän form: in most types the last vowel of the stem becomes long: hän puhuu, hän tulee, hän haluaa, hän tarvitsee, hän vanhenee. In type 2 it does not lengthen (hän juo), nor when the stem already ends in a long vowel (hän osaa). Olla is the exception: hän on.",
    },
    {
      fi: "Kielteinen preesens: kieltoverbi taipuu persoonan mukaan (minä en, sinä et, hän ei, me emme, te ette, he eivät), ja pääverbistä käytetään vartaloa ilman persoonapäätettä: minä en puhu, sinä et juo, hän ei tule, me emme osaa, te ette tarvitse, he eivät vanhene.",
      bn: "না-বাচক বর্তমান কাল: না-বাচক ক্রিয়াটি কর্তা অনুযায়ী বদলায় (minä en, sinä et, hän ei, me emme, te ette, he eivät), আর মূল ক্রিয়ার শুধু মূল অংশ ব্যবহার হয়, কোনো ব্যক্তিবাচক প্রত্যয় ছাড়া: minä en puhu, sinä et juo, hän ei tule, me emme osaa, te ette tarvitse, he eivät vanhene।",
      en: "The negative present: the negative verb changes with the person (minä en, sinä et, hän ei, me emme, te ette, he eivät), and the main verb uses the stem without a personal ending: minä en puhu, sinä et juo, hän ei tule, me emme osaa, te ette tarvitse, he eivät vanhene.",
    },
  ],

  // Reuses the lesson table: all six verb types in one overview.
  pronounTable: [
    { fi: "1 · puhua → puhu-", en: "vowel + a/ä · minä puhun, hän puhuu", bn: "কথা বলা → minä puhun (আমি কথা বলি)" },
    { fi: "2 · juoda → juo-", en: "-da/-dä · minä juon, hän juo", bn: "পান করা → minä juon (আমি পান করি)" },
    { fi: "3 · tulla → tule-", en: "-lla/-rra/-nna/-sta · minä tulen, hän tulee", bn: "আসা → minä tulen (আমি আসি)" },
    { fi: "4 · osata → osaa-", en: "-ata/-ota/-uta · minä osaan, hän osaa", bn: "জানা → minä osaan (আমি জানি)" },
    { fi: "5 · tarvita → tarvitse-", en: "-ita/-itä · minä tarvitsen, hän tarvitsee", bn: "দরকার হওয়া → minä tarvitsen (আমার দরকার)" },
    { fi: "6 · vanheta → vanhene-", en: "-eta/-etä · minä vanhenen, hän vanhenee", bn: "বুড়ো হওয়া → minä vanhenen (আমি বুড়ো হচ্ছি)" },
  ],

  examples: [
    { fi: "Minä olen bangladeshilainen.", bn: "আমি বাংলাদেশি।", en: "I am Bangladeshi." },
    { fi: "Minä asun Suomessa.", bn: "আমি ফিনল্যান্ডে থাকি।", en: "I live in Finland." },
    { fi: "Minä opiskelen suomea.", bn: "আমি ফিনিশ পড়ি।", en: "I study Finnish." },
    { fi: "Minä puhun bengalia ja englantia.", bn: "আমি বাংলা ও ইংরেজি বলি।", en: "I speak Bengali and English." },
    { fi: "Minä herään aikaisin.", bn: "আমি তাড়াতাড়ি ঘুম থেকে উঠি।", en: "I wake up early." },
    { fi: "Me syömme yhdessä.", bn: "আমরা একসঙ্গে খাই।", en: "We eat together." },
    { fi: "Minä haluan kahvia.", bn: "আমি কফি চাই।", en: "I want coffee." },
    { fi: "Minä tarvitsen apua.", bn: "আমার সাহায্য দরকার।", en: "I need help." },
    { fi: "Puhutko suomea?", bn: "তুমি কি ফিনিশ ভাষায় কথা বলো?", en: "Do you speak Finnish?" },
    { fi: "Minä en osaa uida.", bn: "আমি সাঁতার জানি না।", en: "I can't swim." },
    { fi: "He eivät juo kahvia.", bn: "তারা কফি পান করে না।", en: "They don't drink coffee." },
    { fi: "Sää kylmenee.", bn: "আবহাওয়া ঠান্ডা হচ্ছে।", en: "The weather is getting colder." },
  ],

  vocabulary: [
    { fi: "puhua (1)", bn: "কথা বলা", en: "to speak" },
    { fi: "juoda (2)", bn: "পান করা", en: "to drink" },
    { fi: "tulla (3)", bn: "আসা", en: "to come" },
    { fi: "osata (4)", bn: "জানা / পারা", en: "to know how" },
    { fi: "tarvita (5)", bn: "দরকার হওয়া", en: "to need" },
    { fi: "vanheta (6)", bn: "বুড়ো হওয়া", en: "to grow old" },
    { fi: "olla", bn: "হওয়া / থাকা", en: "to be" },
    { fi: "bangladeshilainen", bn: "বাংলাদেশি", en: "Bangladeshi" },
    { fi: "bengali", bn: "বাংলা ভাষা", en: "Bengali (language)" },
    { fi: "suomi", bn: "ফিনিশ ভাষা", en: "Finnish (language)" },
  ],

  pronunciation: {
    fi: "Kertaa ääntämisen perussäännöt: jokainen kirjain äännetään, kaksoiskirjain on pitkä (puhuu, menen – mennä), ja paino on aina ensimmäisellä tavulla. Lue tämän oppitunnin esimerkit ääneen ja kiinnitä huomiota pitkiin äänteisiin.",
    bn: "উচ্চারণের মূল নিয়মগুলো আবার দেখে নাও: প্রতিটি অক্ষর উচ্চারিত হয়, দ্বৈত অক্ষর দীর্ঘ (puhuu, menen – mennä), আর জোর সবসময় প্রথম সিলেবলে। এই পাঠের উদাহরণগুলো জোরে পড়ো এবং দীর্ঘ ধ্বনিগুলোর দিকে খেয়াল রাখো।",
    en: "Review the basic pronunciation rules: every letter is pronounced, a double letter is long (puhuu, menen – mennä), and stress is always on the first syllable. Read this lesson's examples aloud and pay attention to the long sounds.",
  },

  commonMistakes: [
    {
      fi: "Käytetään infinitiiviä taivutetun muodon sijaan: väärin minä tarvita apua, oikein minä tarvitsen apua.",
      bn: "রূপ বদলানোর বদলে মূল রূপ ব্যবহার করা: ভুল minä tarvita apua, সঠিক minä tarvitsen apua।",
      en: "Using the infinitive instead of a conjugated form: wrong minä tarvita apua, right minä tarvitsen apua.",
    },
    {
      fi: "Unohdetaan persoonapääte: väärin minä puhu suomea, oikein minä puhun suomea.",
      bn: "ব্যক্তিবাচক প্রত্যয় ভুলে যাওয়া: ভুল minä puhu suomea, সঠিক minä puhun suomea।",
      en: "Forgetting the personal ending: wrong minä puhu suomea, right minä puhun suomea.",
    },
    {
      fi: "Väärä hän-muoto: väärin hän juoo, hän osaaa, hän tule; oikein hän juo, hän osaa, hän tulee.",
      bn: "hän-এর ভুল রূপ: ভুল hän juoo, hän osaaa, hän tule; সঠিক hän juo, hän osaa, hän tulee।",
      en: "Wrong hän form: wrong hän juoo, hän osaaa, hän tule; right hän juo, hän osaa, hän tulee.",
    },
    {
      fi: "Sekoitetaan tyypit 4, 5 ja 6: väärin minä valiaan, oikein minä valitsen (valita on tyyppi 5).",
      bn: "শ্রেণি ৪, ৫ ও ৬ গুলিয়ে ফেলা: ভুল minä valiaan, সঠিক minä valitsen (valita শ্রেণি ৫)।",
      en: "Mixing up types 4, 5 and 6: wrong minä valiaan, right minä valitsen (valita is type 5).",
    },
    {
      fi: "Väärä kieltoverbi: väärin he ei juo, oikein he eivät juo.",
      bn: "ভুল না-বাচক ক্রিয়া: ভুল he ei juo, সঠিক he eivät juo।",
      en: "The wrong negative verb: wrong he ei juo, right he eivät juo.",
    },
    {
      fi: "Lisätään persoonapääte kieltolauseen pääverbiin: väärin minä en puhun, oikein minä en puhu.",
      bn: "না-বাচক বাক্যের মূল ক্রিয়ায় ব্যক্তিবাচক প্রত্যয় যোগ করা: ভুল minä en puhun, সঠিক minä en puhu।",
      en: "Adding a personal ending to the main verb in a negative sentence: wrong minä en puhun, right minä en puhu.",
    },
    {
      fi: "Unohdetaan vokaalisointu: väärin he syövat, oikein he syövät.",
      bn: "স্বরসংগতি ভুলে যাওয়া: ভুল he syövat, সঠিক he syövät।",
      en: "Forgetting vowel harmony: wrong he syövat, right he syövät.",
    },
  ],

  practice: [
    {
      prompt: {
        fi: "tarvita → minä ___",
        bn: "tarvita → minä ___",
        en: "tarvita → minä ___",
      },
      answer: "tarvitsen",
    },
    {
      prompt: {
        fi: "vanheta → hän ___",
        bn: "vanheta → hän ___",
        en: "vanheta → hän ___",
      },
      answer: "vanhenee",
    },
    {
      prompt: {
        fi: "puhua → me ___",
        bn: "puhua → me ___",
        en: "puhua → me ___",
      },
      answer: "puhumme",
    },
    {
      prompt: {
        fi: "juoda → he ___",
        bn: "juoda → he ___",
        en: "juoda → he ___",
      },
      answer: "juovat",
    },
    {
      prompt: {
        fi: "tulla → sinä ___",
        bn: "tulla → sinä ___",
        en: "tulla → sinä ___",
      },
      answer: "tulet",
    },
    {
      prompt: {
        fi: "osata → hän ___",
        bn: "osata → hän ___",
        en: "osata → hän ___",
      },
      answer: "osaa",
    },
    {
      prompt: {
        fi: "olla → te ___",
        bn: "olla → te ___",
        en: "olla → te ___",
      },
      answer: "olette",
    },
    {
      prompt: {
        fi: "Mikä verbityyppi? haluta, valita, kylmetä",
        bn: "কোন ক্রিয়াশ্রেণি? haluta, valita, kylmetä",
        en: "Which verb type? haluta, valita, kylmetä",
      },
      answer: "haluta 4, valita 5, kylmetä 6",
    },
    {
      prompt: {
        fi: "Muuta kielteiseksi: Minä puhun suomea.",
        bn: "না-বাচক করো: Minä puhun suomea.",
        en: "Make it negative: Minä puhun suomea.",
      },
      answer: "Minä en puhu suomea.",
    },
    {
      prompt: {
        fi: "Käännä suomeksi: I live in Finland and I study Finnish.",
        bn: "ফিনিশে অনুবাদ করো: আমি ফিনল্যান্ডে থাকি এবং ফিনিশ পড়ি।",
        en: "Translate into Finnish: I live in Finland and I study Finnish.",
      },
      answer: "Minä asun Suomessa ja opiskelen suomea.",
    },
  ],

  quiz: [
    {
      question: {
        fi: "Mikä pronomini tarkoittaa 'we'?",
        en: "Which pronoun means 'we'?",
      },
      options: [
        { fi: "minä", en: "minä" },
        { fi: "me", en: "me" },
        { fi: "te", en: "te" },
        { fi: "he", en: "he" },
      ],
      correctIndex: 1,
      explanation: {
        fi: "Me tarkoittaa 'we'. Te on 'you (plural)' ja he 'they'.",
        bn: "me মানে 'আমরা'। te মানে 'তোমরা / আপনারা', আর he মানে 'তারা'।",
        en: "Me means 'we'. Te is 'you (plural)' and he is 'they'.",
      },
    },
    {
      question: {
        fi: "Täydennä: He ___ opiskelijoita. (olla)",
        en: "Fill in: He ___ opiskelijoita. (olla)",
      },
      options: [
        { fi: "on", en: "on" },
        { fi: "olemme", en: "olemme" },
        { fi: "ovat", en: "ovat" },
        { fi: "olette", en: "olette" },
      ],
      correctIndex: 2,
      explanation: {
        fi: "He-muoto on ovat: he ovat.",
        bn: "he-র রূপ ovat: he ovat।",
        en: "The he form is ovat: he ovat.",
      },
    },
    {
      question: {
        fi: "Mikä verbi kuuluu verbityyppiin 5?",
        en: "Which verb belongs to verb type 5?",
      },
      options: [
        { fi: "haluta", en: "haluta" },
        { fi: "valita", en: "valita" },
        { fi: "kylmetä", en: "kylmetä" },
        { fi: "mennä", en: "mennä" },
      ],
      correctIndex: 1,
      explanation: {
        fi: "Valita päättyy -ita, joten se on tyyppi 5. Haluta on tyyppi 4, kylmetä tyyppi 6 ja mennä tyyppi 3.",
        bn: "valita -ita দিয়ে শেষ হয়, তাই এটি শ্রেণি ৫। haluta শ্রেণি ৪, kylmetä শ্রেণি ৬, আর mennä শ্রেণি ৩।",
        en: "Valita ends in -ita, so it is type 5. Haluta is type 4, kylmetä type 6 and mennä type 3.",
      },
    },
    {
      question: {
        fi: "Mikä on verbin vanheta vartalo?",
        en: "What is the stem of vanheta?",
      },
      options: [
        { fi: "vanhene-", en: "vanhene-" },
        { fi: "vanhe-", en: "vanhe-" },
        { fi: "vanheta-", en: "vanheta-" },
        { fi: "vanhetse-", en: "vanhetse-" },
      ],
      correctIndex: 0,
      explanation: {
        fi: "Tyyppi 6: poistetaan ta ja lisätään ne: vanhe-ta → vanhene-.",
        bn: "শ্রেণি ৬: ta বাদ দিয়ে ne যোগ হয়: vanhe-ta → vanhene-।",
        en: "Type 6: remove ta and add ne: vanhe-ta → vanhene-.",
      },
    },
    {
      question: {
        fi: "Täydennä: Me ___ suomea. (puhua)",
        en: "Fill in: Me ___ suomea. (puhua)",
      },
      options: [
        { fi: "puhun", en: "puhun" },
        { fi: "puhumme", en: "puhumme" },
        { fi: "puhuvat", en: "puhuvat" },
        { fi: "puhutte", en: "puhutte" },
      ],
      correctIndex: 1,
      explanation: {
        fi: "Me-muodon pääte on -mme: me puhumme.",
        bn: "me-র রূপে প্রত্যয় -mme: me puhumme।",
        en: "The me ending is -mme: me puhumme.",
      },
    },
    {
      question: {
        fi: "Mikä lause tarkoittaa 'They don't drink coffee'?",
        en: "Which sentence means 'They don't drink coffee'?",
      },
      options: [
        { fi: "He eivät juo kahvia.", en: "He eivät juo kahvia." },
        { fi: "He ei juo kahvia.", en: "He ei juo kahvia." },
        { fi: "He eivät juovat kahvia.", en: "He eivät juovat kahvia." },
        { fi: "He emme juo kahvia.", en: "He emme juo kahvia." },
      ],
      correctIndex: 0,
      explanation: {
        fi: "He-muodon kieltoverbi on eivät, ja pääverbi on vartalossa: he eivät juo.",
        bn: "he-র না-বাচক ক্রিয়া eivät, আর মূল ক্রিয়া মূল অংশে থাকে: he eivät juo।",
        en: "The negative verb for he is eivät, and the main verb is in the stem form: he eivät juo.",
      },
    },
  ],

  summary: {
    fi: "Kuukauden 1 jälkeen osaan: käyttää persoonapronomineja; tehdä olla-lauseita (Minä olen opiskelija); muodostaa preesenslauseita ja kysymyksiä (Puhutko suomea?); tunnistaa verbityypit 1–6 ja erottaa tyypit 4, 5 ja 6 (A/O/U → 4, I → 5, E → 6); taivuttaa tavallisia verbejä; tehdä kielteisiä lauseita (Minä en puhu). Onnittelut, kuukausi 1 on valmis!",
    bn: "প্রথম মাসের পর আমি পারি: ব্যক্তিবাচক সর্বনাম ব্যবহার করতে; olla দিয়ে বাক্য তৈরি করতে (Minä olen opiskelija); বর্তমান কালের বাক্য ও প্রশ্ন তৈরি করতে (Puhutko suomea?); ক্রিয়াশ্রেণি ১–৬ চিনতে এবং শ্রেণি ৪, ৫ ও ৬ আলাদা করতে (A/O/U → ৪, I → ৫, E → ৬); প্রচলিত ক্রিয়াগুলোর রূপ বদলাতে; না-বাচক বাক্য তৈরি করতে (Minä en puhu)। অভিনন্দন, প্রথম মাস সম্পূর্ণ!",
    en: "After Month 1, I can: use the personal pronouns; make olla sentences (Minä olen opiskelija); form present-tense sentences and questions (Puhutko suomea?); recognise verb types 1–6 and tell types 4, 5 and 6 apart (A/O/U → 4, I → 5, E → 6); conjugate common verbs; make negative sentences (Minä en puhu). Congratulations, Month 1 is complete!",
  },
};