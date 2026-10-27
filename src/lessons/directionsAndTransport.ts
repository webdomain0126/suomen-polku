import { Lesson } from "./types";

// Month 2, Lesson 7 — Getting Around and Asking for Directions
// Stable lesson ID: month-2-directions-and-transport (see lessonRegistry.ts)
// Sources in Rafiqul Hyder's material: Adverbit file (oikealla / oikealle /
// oikealta, vasemmalla / vasemmalle, kaukana; "Bussi kääntyy oikealle"),
// postposition list (vieressä, lähellä with the genitive; päästä),
// adessive (millä kulkuneuvolla: autolla, ratikalla, junalla).
// New forms are taught as useful expressions, not as full case rules.

export const directionsAndTransportLesson: Lesson = {
  slug: "directions-and-transport",
  month: 2,

  title: {
    fi: "Suunnat ja liikkuminen",
    bn: "পথ জিজ্ঞেস করা ও যাতায়াত",
    en: "Getting Around and Asking for Directions",
  },

  intro: {
    fi: "Tässä oppitunnissa opit kysymään, missä jokin paikka on, ymmärtämään yksinkertaisia ohjeita ja liikkumaan bussilla, junalla ja metrolla. Käytät tuttuja kysymyssanoja missä ja mihin.",
    bn: "এই পাঠে তুমি শিখবে কোনো জায়গা কোথায় তা জিজ্ঞেস করতে, সহজ নির্দেশনা বুঝতে এবং বাস, ট্রেন ও মেট্রোতে চলাফেরা করতে। তুমি পরিচিত প্রশ্নবোধক শব্দ missä (কোথায়) ও mihin (কোথায় যাওয়া) ব্যবহার করবে।",
    en: "In this lesson you'll learn to ask where a place is, understand simple directions and get around by bus, train and metro. You'll use the familiar question words missä and mihin.",
  },

  objectives: [
    {
      fi: "Kysyä, missä paikka on, ja miten sinne pääsee.",
      bn: "কোনো জায়গা কোথায় এবং সেখানে কীভাবে যাওয়া যায় তা জিজ্ঞেস করা।",
      en: "Ask where a place is and how to get there.",
    },
    {
      fi: "Ymmärtää ohjeita: suoraan, vasemmalle, oikealle, lähellä, vieressä.",
      bn: "নির্দেশনা বুঝতে পারা: suoraan (সোজা), vasemmalle (বাঁয়ে), oikealle (ডানে), lähellä (কাছে), vieressä (পাশে)।",
      en: "Understand directions: suoraan, vasemmalle, oikealle, lähellä, vieressä.",
    },
    {
      fi: "Kysyä bussista tai junasta ja ostaa lipun.",
      bn: "বাস বা ট্রেন সম্পর্কে জিজ্ঞেস করা এবং টিকিট কিনতে পারা।",
      en: "Ask about a bus or train and buy a ticket.",
    },
  ],

  explanation: [
    {
      fi: "Paikan kysyminen: Anteeksi, missä on rautatieasema? Missä on lähin apteekki? Missä on WC? Aloita kohteliaasti sanalla Anteeksi.",
      bn: "জায়গা জিজ্ঞেস করা: Anteeksi, missä on rautatieasema? (মাফ করবেন, রেলস্টেশন কোথায়?) Missä on lähin apteekki? (সবচেয়ে কাছের ফার্মেসি কোথায়?) Missä on WC? (টয়লেট কোথায়?) ভদ্রভাবে Anteeksi দিয়ে শুরু করো।",
      en: "Asking about a place: Anteeksi, missä on rautatieasema? Missä on lähin apteekki? Missä on WC? Start politely with Anteeksi.",
    },
    {
      fi: "Minne mennään? Miten pääsen keskustaan? Onko tämä oikea tie asemalle? Mihin tämä juna menee? Haluan mennä keskustaan. Päätteet -an ja -lle (keskustaan, asemalle) kertovat, mihin mennään. Opettele nämä nyt fraaseina.",
      bn: "কোথায় যাওয়া? Miten pääsen keskustaan? (শহরের কেন্দ্রে কীভাবে যাব?) Onko tämä oikea tie asemalle? (এটা কি স্টেশনে যাওয়ার সঠিক পথ?) Mihin tämä juna menee? (এই ট্রেন কোথায় যায়?) Haluan mennä keskustaan (আমি শহরের কেন্দ্রে যেতে চাই)। -an ও -lle প্রত্যয় (keskustaan, asemalle) বোঝায় কোথায় যাওয়া হচ্ছে। এখন এগুলো বাক্যাংশ হিসেবে শিখে নাও।",
      en: "Where to? Miten pääsen keskustaan? Onko tämä oikea tie asemalle? Mihin tämä juna menee? Haluan mennä keskustaan. The endings -an and -lle (keskustaan, asemalle) show where you are going. Learn these as phrases for now.",
    },
    {
      fi: "Ohjeet: Mene suoraan. Käänny vasemmalle. Käänny oikealle. Nämä ovat käskymuotoja, joita opitaan myöhemmin. Nyt riittää ymmärtää ne, kun joku neuvoo sinua.",
      bn: "নির্দেশনা: Mene suoraan (সোজা যাও)। Käänny vasemmalle (বাঁয়ে ঘোরো)। Käänny oikealle (ডানে ঘোরো)। এগুলো আদেশসূচক রূপ, যা পরে শেখানো হবে। এখন কেউ পথ দেখালে বুঝতে পারলেই যথেষ্ট।",
      en: "Directions: Mene suoraan. Käänny vasemmalle. Käänny oikealle. These are command forms, which are taught later. For now it's enough to understand them when someone gives you directions.",
    },
    {
      fi: "Missä vai mihin? Vasemmalla = vasemmalla puolella (missä?): Apteekki on vasemmalla. Vasemmalle = vasempaan suuntaan (mihin?): Käänny vasemmalle. Samoin oikealla ja oikealle: Bussi kääntyy oikealle.",
      bn: "missä নাকি mihin? vasemmalla = বাঁ দিকে আছে (missä?): Apteekki on vasemmalla (ফার্মেসিটা বাঁ দিকে)। vasemmalle = বাঁ দিকে যাওয়া (mihin?): Käänny vasemmalle (বাঁয়ে ঘোরো)। একইভাবে oikealla ও oikealle: Bussi kääntyy oikealle (বাসটা ডানে ঘোরে)।",
      en: "Missä or mihin? Vasemmalla = on the left (missä?): Apteekki on vasemmalla. Vasemmalle = to the left (mihin?): Käänny vasemmalle. The same goes for oikealla and oikealle: Bussi kääntyy oikealle.",
    },
    {
      fi: "Lähellä ja vieressä: Asema on lähellä. Asema on kaukana. Paikan kanssa käytetään genetiiviä: Apteekki on pankin vieressä. Kirjasto on koulun lähellä. Opettele malli: (paikka)-n vieressä / lähellä.",
      bn: "lähellä (কাছে) ও vieressä (পাশে): Asema on lähellä (স্টেশনটা কাছে)। Asema on kaukana (স্টেশনটা দূরে)। কোনো জায়গার সাথে ব্যবহার করলে genetiivi লাগে: Apteekki on pankin vieressä (ফার্মেসিটা ব্যাংকের পাশে)। Kirjasto on koulun lähellä (লাইব্রেরিটা স্কুলের কাছে)। কাঠামোটা শিখে নাও: (জায়গা)-n vieressä / lähellä।",
      en: "Near and next to: Asema on lähellä. Asema on kaukana. With a place, the genitive is used: Apteekki on pankin vieressä. Kirjasto on koulun lähellä. Learn the pattern: (place)-n vieressä / lähellä.",
    },
    {
      fi: "Liikenne: Menen bussilla, junalla, metrolla tai raitiovaunulla (arkikielessä: ratikalla). Pääte -lla tarkoittaa tässä 'jollakin kulkuneuvolla'. Hyödyllisiä lauseita: Missä voin ostaa lipun? Milloin bussi lähtee? Juna saapuu asemalle. Tarvitsen bussilipun.",
      bn: "যাতায়াত: Menen bussilla, junalla, metrolla অথবা raitiovaunulla (কথ্য ভাষায়: ratikalla) — আমি বাসে, ট্রেনে, মেট্রোতে বা ট্রামে যাই। এখানে -lla মানে 'কোনো যানবাহনে করে'। কাজের বাক্য: Missä voin ostaa lipun? (টিকিট কোথায় কিনতে পারি?) Milloin bussi lähtee? (বাস কখন ছাড়বে?) Juna saapuu asemalle (ট্রেন স্টেশনে পৌঁছায়)। Tarvitsen bussilipun (আমার বাসের টিকিট দরকার)।",
      en: "Transport: Menen bussilla, junalla, metrolla or raitiovaunulla (colloquially: ratikalla). Here the ending -lla means 'by (vehicle)'. Useful sentences: Missä voin ostaa lipun? Milloin bussi lähtee? Juna saapuu asemalle. Tarvitsen bussilipun.",
    },
    {
      fi: "Käytännön vinkki: lippuja myydään usein sovelluksessa tai lippuautomaatissa. Jos et ole varma, kysy: Missä voin ostaa lipun? tai Mihin tämä bussi menee?",
      bn: "ব্যবহারিক টিপস: টিকিট প্রায়ই অ্যাপে বা টিকিট মেশিনে বিক্রি হয়। নিশ্চিত না হলে জিজ্ঞেস করো: Missä voin ostaa lipun? অথবা Mihin tämä bussi menee? (এই বাস কোথায় যায়?)",
      en: "Practical tip: tickets are often sold in an app or a ticket machine. If you're not sure, ask: Missä voin ostaa lipun? or Mihin tämä bussi menee?",
    },
  ],

  // Reuses the lesson table: direction and location words.
  pronounTable: [
    { fi: "vasemmalla / vasemmalle", en: "on the left / to the left", bn: "বাঁ দিকে (আছে) / বাঁ দিকে (যাওয়া)" },
    { fi: "oikealla / oikealle", en: "on the right / to the right", bn: "ডান দিকে (আছে) / ডান দিকে (যাওয়া)" },
    { fi: "suoraan", en: "straight ahead", bn: "সোজা" },
    { fi: "eteenpäin", en: "forward", bn: "সামনের দিকে" },
    { fi: "lähellä / kaukana", en: "nearby / far away", bn: "কাছে / দূরে" },
    { fi: "tässä / tuolla", en: "here / over there", bn: "এখানে / ওখানে" },
    { fi: "pankin vieressä", en: "next to the bank", bn: "ব্যাংকের পাশে" },
    { fi: "vastapäätä", en: "opposite, across the street", bn: "উল্টো দিকে / রাস্তার ওপারে" },
  ],

  examples: [
    { fi: "Mene suoraan ja käänny oikealle.", bn: "সোজা যাও, তারপর ডানে ঘোরো।", en: "Go straight ahead and turn right." },
    { fi: "Apteekki on pankin vieressä.", bn: "ফার্মেসিটা ব্যাংকের পাশে।", en: "The pharmacy is next to the bank." },
    { fi: "Menen kouluun bussilla.", bn: "আমি বাসে করে স্কুলে যাই।", en: "I go to school by bus." },
    { fi: "Tisa: Anteeksi, missä on rautatieasema? – Mies: Mene suoraan ja käänny sitten vasemmalle.", bn: "তিসা: মাফ করবেন, রেলস্টেশন কোথায়? – লোকটি: সোজা যান, তারপর বাঁয়ে ঘুরুন।", en: "Tisa: Excuse me, where is the railway station? – Man: Go straight ahead and then turn left." },
    { fi: "Tisa: Onko se kaukana? – Mies: Ei ole. Se on lähellä, noin viisi minuuttia.", bn: "তিসা: এটা কি দূরে? – লোকটি: না। কাছেই, প্রায় পাঁচ মিনিট।", en: "Tisa: Is it far? – Man: No. It's nearby, about five minutes." },
    { fi: "Tisa: Kiitos paljon! – Mies: Ole hyvä.", bn: "তিসা: অনেক ধন্যবাদ! – লোকটি: স্বাগতম।", en: "Tisa: Thank you very much! – Man: You're welcome." },
    { fi: "Ali: Anteeksi, onko täällä lähellä apteekkia? – Nainen: On. Apteekki on pankin vieressä.", bn: "আলী: মাফ করবেন, এখানে কাছে কি কোনো ফার্মেসি আছে? – মহিলা: আছে। ফার্মেসিটা ব্যাংকের পাশে।", en: "Ali: Excuse me, is there a pharmacy nearby? – Woman: Yes. The pharmacy is next to the bank." },
    { fi: "Ali: Missä pankki on? – Nainen: Tuolla, oikealla.", bn: "আলী: ব্যাংকটা কোথায়? – মহিলা: ওখানে, ডান দিকে।", en: "Ali: Where is the bank? – Woman: Over there, on the right." },
    { fi: "Ali: Entä ruokakauppa? – Nainen: Ruokakauppa on vastapäätä.", bn: "আলী: আর মুদি দোকান? – মহিলা: মুদি দোকানটা উল্টো দিকে।", en: "Ali: And the grocery store? – Woman: The grocery store is across the street." },
    { fi: "Rahim: Mihin tämä bussi menee? – Kuljettaja: Keskustaan.", bn: "রহিম: এই বাস কোথায় যায়? – চালক: শহরের কেন্দ্রে।", en: "Rahim: Where does this bus go? – Driver: To the city centre." },
    { fi: "Rahim: Milloin se lähtee? – Kuljettaja: Viiden minuutin päästä.", bn: "রহিম: কখন ছাড়বে? – চালক: পাঁচ মিনিট পরে।", en: "Rahim: When does it leave? – Driver: In five minutes." },
    { fi: "Rahim: Missä voin ostaa lipun? – Kuljettaja: Sovelluksesta tai automaatista.", bn: "রহিম: টিকিট কোথায় কিনতে পারি? – চালক: অ্যাপ থেকে অথবা মেশিন থেকে।", en: "Rahim: Where can I buy a ticket? – Driver: From the app or the machine." },
  ],

  vocabulary: [
    { fi: "kauppa / ruokakauppa", bn: "দোকান / মুদি দোকান", en: "shop / grocery store" },
    { fi: "asema / rautatieasema", bn: "স্টেশন / রেলস্টেশন", en: "station / railway station" },
    { fi: "bussipysäkki / pysäkki", bn: "বাস স্টপ / স্টপ", en: "bus stop / stop" },
    { fi: "koulu", bn: "স্কুল", en: "school" },
    { fi: "sairaala", bn: "হাসপাতাল", en: "hospital" },
    { fi: "apteekki", bn: "ফার্মেসি / ওষুধের দোকান", en: "pharmacy" },
    { fi: "pankki", bn: "ব্যাংক", en: "bank" },
    { fi: "kirjasto", bn: "লাইব্রেরি / গ্রন্থাগার", en: "library" },
    { fi: "ravintola", bn: "রেস্তোরাঁ", en: "restaurant" },
    { fi: "keskusta", bn: "শহরের কেন্দ্র", en: "city centre" },
    { fi: "WC", bn: "টয়লেট", en: "toilet, restroom" },
    { fi: "bussi / juna", bn: "বাস / ট্রেন", en: "bus / train" },
    { fi: "raitiovaunu (ratikka) / metro", bn: "ট্রাম / মেট্রো", en: "tram / metro" },
    { fi: "taksi", bn: "ট্যাক্সি", en: "taxi" },
    { fi: "lippu", bn: "টিকিট", en: "ticket" },
    { fi: "matka", bn: "যাত্রা / ভ্রমণ", en: "journey, trip" },
    { fi: "lähteä (lähden)", bn: "রওনা দেওয়া / ছাড়া", en: "to leave" },
    { fi: "saapua (saavun)", bn: "পৌঁছানো", en: "to arrive" },
  ],

  pronunciation: {
    fi: "Kiinnitä huomiota pitkiin konsonantteihin: apteekki (kk), pankki (kk), bussi (ss), lippu (pp). Vasemmalle ja oikealle päättyvät pitkään l-äänteeseen: va-sem-mal-le, oi-ke-al-le. WC sanotaan vee-see. Paino on ensimmäisellä tavulla: AP-teek-ki.",
    bn: "দীর্ঘ ব্যঞ্জনগুলোর দিকে খেয়াল রাখো: apteekki (kk), pankki (kk), bussi (ss), lippu (pp)। vasemmalle ও oikealle দীর্ঘ l ধ্বনি দিয়ে শেষ হয়: va-sem-mal-le, oi-ke-al-le। WC উচ্চারণ হয় 'ভে-সে'। জোর প্রথম সিলেবলে: AP-teek-ki।",
    en: "Pay attention to the long consonants: apteekki (kk), pankki (kk), bussi (ss), lippu (pp). Vasemmalle and oikealle end in a long l sound: va-sem-mal-le, oi-ke-al-le. WC is said vee-see. Stress is on the first syllable: AP-teek-ki.",
  },

  commonMistakes: [
    {
      fi: "Sekoitetaan missä ja mihin: väärin Missä sinä menet?, oikein Mihin sinä menet?",
      bn: "missä ও mihin গুলিয়ে ফেলা: ভুল Missä sinä menet?, সঠিক Mihin sinä menet?",
      en: "Mixing up missä and mihin: wrong Missä sinä menet?, right Mihin sinä menet?",
    },
    {
      fi: "Sekoitetaan paikka ja suunta: väärin Käänny vasemmalla, oikein Käänny vasemmalle (kääntyminen on suunta).",
      bn: "অবস্থান ও দিক গুলিয়ে ফেলা: ভুল Käänny vasemmalla, সঠিক Käänny vasemmalle (ঘোরা মানে একটি দিকে যাওয়া)।",
      en: "Mixing up location and direction: wrong Käänny vasemmalla, right Käänny vasemmalle (turning is a direction).",
    },
    {
      fi: "Sekoitetaan vasen ja oikea: vasemmalle = left, oikealle = right. Oikea tarkoittaa myös 'correct' (oikea tie).",
      bn: "বাম ও ডান গুলিয়ে ফেলা: vasemmalle = বাঁয়ে, oikealle = ডানে। oikea মানে 'সঠিক'-ও (oikea tie — সঠিক পথ)।",
      en: "Mixing up left and right: vasemmalle = left, oikealle = right. Oikea also means 'correct' (oikea tie).",
    },
    {
      fi: "-ko kysymyssanan kanssa: väärin Missäkö on asema?, oikein Missä on asema?",
      bn: "প্রশ্নবোধক শব্দের সাথে -ko: ভুল Missäkö on asema?, সঠিক Missä on asema?",
      en: "-ko together with a question word: wrong Missäkö on asema?, right Missä on asema?",
    },
    {
      fi: "Väärä kielto: väärin Bussi ei lähtee nyt, oikein Bussi ei lähde nyt.",
      bn: "ভুল না-বাচক রূপ: ভুল Bussi ei lähtee nyt, সঠিক Bussi ei lähde nyt।",
      en: "A wrong negative: wrong Bussi ei lähtee nyt, right Bussi ei lähde nyt.",
    },
    {
      fi: "Sekoitetaan bussi ja bussipysäkki: Missä on bussi? kysyy, missä bussi (auto) on. Pysäkkiä kysytään: Missä on bussipysäkki?",
      bn: "bussi ও bussipysäkki গুলিয়ে ফেলা: Missä on bussi? জিজ্ঞেস করে বাসটা (গাড়িটা) কোথায়। স্টপ জিজ্ঞেস করতে: Missä on bussipysäkki?",
      en: "Mixing up bussi and bussipysäkki: Missä on bussi? asks where the bus (vehicle) is. To ask about the stop: Missä on bussipysäkki?",
    },
    {
      fi: "Väärä muoto fraasissa: väärin Apteekki on pankki vieressä, oikein Apteekki on pankin vieressä; väärin Miten pääsen keskusta?, oikein Miten pääsen keskustaan?",
      bn: "বাক্যাংশে ভুল রূপ: ভুল Apteekki on pankki vieressä, সঠিক Apteekki on pankin vieressä; ভুল Miten pääsen keskusta?, সঠিক Miten pääsen keskustaan?",
      en: "A wrong form in a fixed phrase: wrong Apteekki on pankki vieressä, right Apteekki on pankin vieressä; wrong Miten pääsen keskusta?, right Miten pääsen keskustaan?",
    },
  ],

  practice: [
    {
      prompt: {
        fi: "Mitä tarkoittaa 'apteekki'?",
        bn: "'apteekki' মানে কী?",
        en: "What does 'apteekki' mean?",
      },
      answer: "pharmacy — ফার্মেসি",
    },
    {
      prompt: {
        fi: "Täydennä: ___ on rautatieasema?",
        bn: "পূরণ করো: ___ on rautatieasema?",
        en: "Complete: ___ on rautatieasema?",
      },
      answer: "Missä",
    },
    {
      prompt: {
        fi: "Täydennä: ___ tämä juna menee? – Keskustaan.",
        bn: "পূরণ করো: ___ tämä juna menee? – Keskustaan.",
        en: "Complete: ___ tämä juna menee? – Keskustaan.",
      },
      answer: "Mihin",
    },
    {
      prompt: {
        fi: "Valitse (to the left): Käänny vasemmalla vai vasemmalle?",
        bn: "বেছে নাও (বাঁয়ে): Käänny vasemmalla নাকি vasemmalle?",
        en: "Choose (to the left): Käänny vasemmalla or vasemmalle?",
      },
      answer: "Käänny vasemmalle.",
    },
    {
      prompt: {
        fi: "Valitse (on the right): Apteekki on oikealla vai oikealle?",
        bn: "বেছে নাও (ডান দিকে আছে): Apteekki on oikealla নাকি oikealle?",
        en: "Choose (on the right): Apteekki on oikealla or oikealle?",
      },
      answer: "Apteekki on oikealla.",
    },
    {
      prompt: {
        fi: "Käännä suomeksi: Where can I buy a ticket?",
        bn: "ফিনিশে অনুবাদ করো: টিকিট কোথায় কিনতে পারি?",
        en: "Translate into Finnish: Where can I buy a ticket?",
      },
      answer: "Missä voin ostaa lipun?",
    },
    {
      prompt: {
        fi: "Käännä suomeksi: When does the bus leave?",
        bn: "ফিনিশে অনুবাদ করো: বাস কখন ছাড়বে?",
        en: "Translate into Finnish: When does the bus leave?",
      },
      answer: "Milloin bussi lähtee?",
    },
    {
      prompt: {
        fi: "Käännä suomeksi: Go straight ahead.",
        bn: "ফিনিশে অনুবাদ করো: সোজা যাও।",
        en: "Translate into Finnish: Go straight ahead.",
      },
      answer: "Mene suoraan.",
    },
    {
      prompt: {
        fi: "Muuta kielteiseksi: Juna lähtee nyt.",
        bn: "না-বাচক করো: Juna lähtee nyt.",
        en: "Make it negative: Juna lähtee nyt.",
      },
      answer: "Juna ei lähde nyt.",
    },
    {
      prompt: {
        fi: "Muuta kysymykseksi: Tämä on oikea tie asemalle.",
        bn: "প্রশ্নে রূপান্তর করো: Tämä on oikea tie asemalle.",
        en: "Turn into a question: Tämä on oikea tie asemalle.",
      },
      answer: "Onko tämä oikea tie asemalle?",
    },
    {
      prompt: {
        fi: "Joku kysyy: Missä on kirjasto? Vastaa (lähellä, koulun vieressä).",
        bn: "কেউ জিজ্ঞেস করছে: Missä on kirjasto? উত্তর দাও (কাছে, স্কুলের পাশে)।",
        en: "Someone asks: Missä on kirjasto? Answer (nearby, next to the school).",
      },
      answer: "Kirjasto on lähellä, koulun vieressä.",
    },
    {
      prompt: {
        fi: "Miten matkustat? Vastaa (bussi).",
        bn: "তুমি কীভাবে যাতায়াত করো? উত্তর দাও (বাস)।",
        en: "How do you travel? Answer (bus).",
      },
      answer: "Menen bussilla.",
    },
  ],

  quiz: [
    {
      question: {
        fi: "Miten kysytään 'Where is the pharmacy?'",
        en: "How do you ask 'Where is the pharmacy?'",
      },
      options: [
        { fi: "Missä on apteekki?", en: "Missä on apteekki?" },
        { fi: "Mihin on apteekki?", en: "Mihin on apteekki?" },
        { fi: "Missäkö on apteekki?", en: "Missäkö on apteekki?" },
        { fi: "Mistä on apteekki?", en: "Mistä on apteekki?" },
      ],
      correctIndex: 0,
      explanation: {
        fi: "Paikkaa kysytään missä-sanalla ilman -ko-päätettä: Missä on apteekki?",
        bn: "জায়গা জিজ্ঞেস করতে missä ব্যবহার হয়, -ko ছাড়া: Missä on apteekki?",
        en: "A location is asked with missä, without -ko: Missä on apteekki?",
      },
    },
    {
      question: {
        fi: "Miten sanotaan 'Turn right'?",
        en: "How do you say 'Turn right'?",
      },
      options: [
        { fi: "Käänny oikealle.", en: "Käänny oikealle." },
        { fi: "Käänny oikealla.", en: "Käänny oikealla." },
        { fi: "Käänny vasemmalle.", en: "Käänny vasemmalle." },
        { fi: "Käänny oikea.", en: "Käänny oikea." },
      ],
      correctIndex: 0,
      explanation: {
        fi: "Kääntyminen on suunta, joten -lle: Käänny oikealle.",
        bn: "ঘোরা একটি দিক, তাই -lle: Käänny oikealle।",
        en: "Turning is a direction, so -lle: Käänny oikealle.",
      },
    },
    {
      question: {
        fi: "Täydennä: ___ tämä bussi menee? – Keskustaan.",
        en: "Fill in: ___ tämä bussi menee? – Keskustaan.",
      },
      options: [
        { fi: "Missä", en: "Missä" },
        { fi: "Mihin", en: "Mihin" },
        { fi: "Mistä", en: "Mistä" },
        { fi: "Milloin", en: "Milloin" },
      ],
      correctIndex: 1,
      explanation: {
        fi: "Vastaus keskustaan kertoo suunnan, joten kysymyssana on mihin.",
        bn: "উত্তর keskustaan একটি দিক বোঝায়, তাই প্রশ্নবোধক শব্দ mihin।",
        en: "The answer keskustaan is a direction, so the question word is mihin.",
      },
    },
    {
      question: {
        fi: "Miten sanotaan 'The station is nearby'?",
        en: "How do you say 'The station is nearby'?",
      },
      options: [
        { fi: "Asema on lähellä.", en: "Asema on lähellä." },
        { fi: "Asema on lähelle.", en: "Asema on lähelle." },
        { fi: "Asema on kaukana.", en: "Asema on kaukana." },
        { fi: "Asema ei ole lähellä.", en: "Asema ei ole lähellä." },
      ],
      correctIndex: 0,
      explanation: {
        fi: "Lähellä = nearby. Kaukana = far away, ja Asema ei ole lähellä on kielteinen.",
        bn: "lähellä = কাছে। kaukana = দূরে, আর Asema ei ole lähellä না-বাচক।",
        en: "Lähellä = nearby. Kaukana = far away, and Asema ei ole lähellä is negative.",
      },
    },
    {
      question: {
        fi: "Miten sanotaan 'The pharmacy is next to the bank'?",
        en: "How do you say 'The pharmacy is next to the bank'?",
      },
      options: [
        { fi: "Apteekki on pankin vieressä.", en: "Apteekki on pankin vieressä." },
        { fi: "Apteekki on pankki vieressä.", en: "Apteekki on pankki vieressä." },
        { fi: "Apteekki on vieressä pankki.", en: "Apteekki on vieressä pankki." },
        { fi: "Apteekki on pankin vierelle.", en: "Apteekki on pankin vierelle." },
      ],
      correctIndex: 0,
      explanation: {
        fi: "Malli: (paikka)-n vieressä: pankin vieressä.",
        bn: "কাঠামো: (জায়গা)-n vieressä: pankin vieressä।",
        en: "The pattern: (place)-n vieressä: pankin vieressä.",
      },
    },
    {
      question: {
        fi: "Miten sanotaan 'I go by train'?",
        en: "How do you say 'I go by train'?",
      },
      options: [
        { fi: "Menen junalla.", en: "Menen junalla." },
        { fi: "Menen juna.", en: "Menen juna." },
        { fi: "Menen junasta.", en: "Menen junasta." },
        { fi: "Menen junaa.", en: "Menen junaa." },
      ],
      correctIndex: 0,
      explanation: {
        fi: "Kulkuneuvo + -lla: Menen junalla.",
        bn: "যানবাহন + -lla: Menen junalla।",
        en: "Vehicle + -lla: Menen junalla.",
      },
    },
  ],

  summary: {
    fi: "Paikka: Anteeksi, missä on apteekki? Suunta: Mihin tämä bussi menee? Miten pääsen keskustaan? Ohjeet: Mene suoraan. Käänny vasemmalle / oikealle. Vasemmalla = missä, vasemmalle = mihin. Lähellä, kaukana, pankin vieressä. Liikenne: Menen bussilla / junalla. Missä voin ostaa lipun? Milloin bussi lähtee?",
    bn: "জায়গা: Anteeksi, missä on apteekki? দিক: Mihin tämä bussi menee? Miten pääsen keskustaan? নির্দেশনা: Mene suoraan। Käänny vasemmalle / oikealle। vasemmalla = কোথায় আছে, vasemmalle = কোন দিকে যাওয়া। lähellä, kaukana, pankin vieressä। যাতায়াত: Menen bussilla / junalla। Missä voin ostaa lipun? Milloin bussi lähtee?",
    en: "Location: Anteeksi, missä on apteekki? Direction: Mihin tämä bussi menee? Miten pääsen keskustaan? Directions: Mene suoraan. Käänny vasemmalle / oikealle. Vasemmalla = where (location), vasemmalle = where to. Lähellä, kaukana, pankin vieressä. Transport: Menen bussilla / junalla. Missä voin ostaa lipun? Milloin bussi lähtee?",
  },
};