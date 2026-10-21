import { Lesson } from "./types";

// Month 2, Lesson 2 — Finnish Questions
// Stable lesson ID: month-2-questions (see lessonRegistry.ts)
// Question words missä / mistä / mihin follow Rafiqul Hyder's case chart
// (inessiivi -ssa, elatiivi -sta, illatiivi -n/-seen); the cases themselves
// are taught in Month 4, so answers here are given as fixed phrases.

export const questionsLesson: Lesson = {
  slug: "questions",
  month: 2,

  title: {
    fi: "Kysymykset",
    bn: "প্রশ্ন করা",
    en: "Finnish Questions",
  },

  intro: {
    fi: "Kuukaudella 1 opit, että kyllä/ei-kysymys tehdään -ko/-kö-päätteellä. Nyt opit kysymykset kunnolla: kysymyssanat, kuten missä, mitä ja miksi, sekä sen, miten kysymyksiin vastataan luontevasti.",
    bn: "প্রথম মাসে তুমি শিখেছ যে হ্যাঁ/না প্রশ্ন তৈরি হয় -ko/-kö দিয়ে। এখন তুমি প্রশ্ন করা ভালোভাবে শিখবে: প্রশ্নবোধক শব্দ, যেমন missä (কোথায়), mitä (কী) ও miksi (কেন), আর কীভাবে স্বাভাবিকভাবে প্রশ্নের উত্তর দিতে হয়।",
    en: "In Month 1 you learned that a yes/no question is made with the ending -ko/-kö. Now you'll learn questions properly: question words such as missä, mitä and miksi, and how to answer questions naturally.",
  },

  objectives: [
    {
      fi: "Muodostaa kyllä/ei-kysymyksiä -ko/-kö-päätteellä ja valita oikea pääte.",
      bn: "-ko/-kö দিয়ে হ্যাঁ/না প্রশ্ন তৈরি করা এবং সঠিক প্রত্যয় বেছে নেওয়া।",
      en: "Form yes/no questions with -ko/-kö and choose the right ending.",
    },
    {
      fi: "Käyttää tavallisimpia kysymyssanoja oikein.",
      bn: "সবচেয়ে প্রচলিত প্রশ্নবোধক শব্দগুলো সঠিকভাবে ব্যবহার করা।",
      en: "Use the most common question words correctly.",
    },
    {
      fi: "Vastata kysymyksiin lyhyesti ja luontevasti.",
      bn: "প্রশ্নের ছোট ও স্বাভাবিক উত্তর দিতে পারা।",
      en: "Answer questions briefly and naturally.",
    },
  ],

  explanation: [
    {
      fi: "Kyllä/ei-kysymys: verbi siirtyy lauseen alkuun ja saa päätteen -ko tai -kö. Väite: Sinä puhut suomea. Kysymys: Puhutko (sinä) suomea? Sama olla-verbin kanssa: Oletko opiskelija? Onko hän kotona? Pronomini tulee verbin jälkeen tai jätetään pois.",
      bn: "হ্যাঁ/না প্রশ্ন: ক্রিয়াটি বাক্যের শুরুতে আসে এবং এর সাথে -ko অথবা -kö যুক্ত হয়। বিবৃতি: Sinä puhut suomea (তুমি ফিনিশ বলো)। প্রশ্ন: Puhutko (sinä) suomea? (তুমি কি ফিনিশ বলো?) olla-র সাথেও একই: Oletko opiskelija? (তুমি কি শিক্ষার্থী?) Onko hän kotona? (সে কি বাড়িতে আছে?) সর্বনাম ক্রিয়ার পরে আসে, অথবা বাদ দেওয়া হয়।",
      en: "Yes/no question: the verb moves to the start of the sentence and takes -ko or -kö. Statement: Sinä puhut suomea. Question: Puhutko (sinä) suomea? The same with olla: Oletko opiskelija? Onko hän kotona? The pronoun comes after the verb or is left out.",
    },
    {
      fi: "-ko vai -kö? Vokaalisointu ratkaisee: jos verbissä on a, o tai u, pääte on -ko (puhutko, oletko, asutko). Jos verbissä on ä, ö tai y tai vain e ja i, pääte on -kö (ymmärrätkö, syötkö, menetkö).",
      bn: "-ko নাকি -kö? স্বরসংগতি ঠিক করে দেয়: ক্রিয়ায় a, o বা u থাকলে প্রত্যয় -ko (puhutko, oletko, asutko)। ক্রিয়ায় ä, ö বা y থাকলে, অথবা শুধু e ও i থাকলে প্রত্যয় -kö (ymmärrätkö, syötkö, menetkö)।",
      en: "-ko or -kö? Vowel harmony decides: if the verb has a, o or u, the ending is -ko (puhutko, oletko, asutko). If it has ä, ö or y, or only e and i, the ending is -kö (ymmärrätkö, syötkö, menetkö).",
    },
    {
      fi: "Kielteinen kysymys: pääte liitetään kieltoverbiin, koska se on lauseen alussa: Etkö ymmärrä? Eikö hän tule? Tämä tarkoittaa 'etkö sinä…?' eli 'don't you…?'.",
      bn: "না-বাচক প্রশ্ন: প্রত্যয়টি না-বাচক ক্রিয়ার সাথে যুক্ত হয়, কারণ সেটিই বাক্যের শুরুতে থাকে: Etkö ymmärrä? (তুমি কি বুঝতে পারছ না?) Eikö hän tule? (সে কি আসছে না?)",
      en: "Negative question: the ending goes on the negative verb, because it comes first: Etkö ymmärrä? (Don't you understand?) Eikö hän tule? (Isn't he/she coming?)",
    },
    {
      fi: "Kysymyssanakysymys: kysymyssana tulee alkuun, ja sen jälkeen verbi. Silloin -ko/-kö-päätettä ei käytetä: Missä sinä asut? (ei: Missäkö asut?).",
      bn: "প্রশ্নবোধক শব্দ দিয়ে প্রশ্ন: প্রশ্নবোধক শব্দটি শুরুতে আসে, তারপর ক্রিয়া। তখন -ko/-kö ব্যবহার হয় না: Missä sinä asut? (তুমি কোথায় থাকো?) — Missäkö asut নয়।",
      en: "Question-word question: the question word comes first, then the verb. Then -ko/-kö is NOT used: Missä sinä asut? (not: Missäkö asut?).",
    },
    {
      fi: "Mikä vai mitä? Mikä kysyy, mikä jokin on (subjekti): Mikä tämä on? Mikä sinun nimesi on? Mitä kysyy, mitä joku tekee, haluaa tai syö (objekti): Mitä sinä teet? Mitä haluat?",
      bn: "mikä নাকি mitä? mikä জিজ্ঞেস করে কোনো কিছু কী (কর্তা): Mikä tämä on? (এটা কী?) Mikä sinun nimesi on? (তোমার নাম কী?) mitä জিজ্ঞেস করে কেউ কী করছে, চাইছে বা খাচ্ছে (কর্ম): Mitä sinä teet? (তুমি কী করছ?) Mitä haluat? (তুমি কী চাও?)",
      en: "Mikä or mitä? Mikä asks what something is (the subject): Mikä tämä on? Mikä sinun nimesi on? Mitä asks what someone does, wants or eats (the object): Mitä sinä teet? Mitä haluat?",
    },
    {
      fi: "Missä, mistä vai mihin? Missä = missä paikassa (vastaus -ssa/-ssä: Espoossa). Mistä = mistä paikasta (vastaus -sta/-stä: Bangladeshista). Mihin = mihin paikkaan (vastaus -n tai -seen: kauppaan). Nämä sijamuodot opitaan kuukaudella 4; nyt riittää oppia vastaukset fraaseina.",
      bn: "missä, mistä নাকি mihin? missä = কোথায় (কোন জায়গায়; উত্তরে -ssa/-ssä: Espoossa — এসপোতে)। mistä = কোথা থেকে (উত্তরে -sta/-stä: Bangladeshista — বাংলাদেশ থেকে)। mihin = কোথায় (কোন দিকে / কোন জায়গায় যাওয়া; উত্তরে -n অথবা -seen: kauppaan — দোকানে)। এই কারকগুলো চতুর্থ মাসে শেখানো হবে; এখন উত্তরগুলো বাক্যাংশ হিসেবে শিখে নিলেই যথেষ্ট।",
      en: "Missä, mistä or mihin? Missä = where (in which place; answer -ssa/-ssä: Espoossa). Mistä = where from (answer -sta/-stä: Bangladeshista). Mihin = where to (answer -n or -seen: kauppaan). These cases are taught in Month 4; for now it's enough to learn the answers as phrases.",
    },
    {
      fi: "Kuinka paljon kysyy määrää tai hintaa: Kuinka paljon tämä maksaa? Kun kysytään lukumäärää, käytetään kuinka monta: Kuinka monta kieltä puhut?",
      bn: "kuinka paljon পরিমাণ বা দাম জিজ্ঞেস করে: Kuinka paljon tämä maksaa? (এটার দাম কত?) গোনা যায় এমন কিছুর সংখ্যা জিজ্ঞেস করতে kuinka monta ব্যবহার হয়: Kuinka monta kieltä puhut? (তুমি কয়টি ভাষা বলো?)",
      en: "Kuinka paljon asks about an amount or a price: Kuinka paljon tämä maksaa? To ask about a number of things, use kuinka monta: Kuinka monta kieltä puhut? (How many languages do you speak?)",
    },
    {
      fi: "Vastaaminen: kyllä/ei-kysymykseen voi vastata kyllä tai ei, mutta suomessa vastataan usein toistamalla verbi: Puhutko suomea? – Puhun. / Kyllä, puhun. / En puhu. Kysymyssanakysymykseen vastataan tiedolla: Missä asut? – Espoossa. / Asun Espoossa.",
      bn: "উত্তর দেওয়া: হ্যাঁ/না প্রশ্নের উত্তর kyllä (হ্যাঁ) বা ei (না) দিয়ে দেওয়া যায়, তবে ফিনিশে প্রায়ই ক্রিয়াটি পুনরাবৃত্তি করে উত্তর দেওয়া হয়: Puhutko suomea? – Puhun. / Kyllä, puhun. / En puhu. প্রশ্নবোধক শব্দের প্রশ্নের উত্তরে তথ্য দেওয়া হয়: Missä asut? – Espoossa. / Asun Espoossa।",
      en: "Answering: a yes/no question can be answered with kyllä or ei, but Finns often answer by repeating the verb: Puhutko suomea? – Puhun. / Kyllä, puhun. / En puhu. A question-word question is answered with the information: Missä asut? – Espoossa. / Asun Espoossa.",
    },
  ],

  // Reuses the lesson table: one row per question word.
  pronounTable: [
    { fi: "mitä — Mitä sinä teet?", en: "what (object) · What are you doing?", bn: "কী · তুমি কী করছ?" },
    { fi: "mikä — Mikä tämä on?", en: "what / which (subject) · What is this?", bn: "কী / কোনটি · এটা কী?" },
    { fi: "kuka — Kuka hän on?", en: "who · Who is he/she?", bn: "কে · সে কে?" },
    { fi: "missä — Missä asut? – Espoossa.", en: "where (location) · answer -ssa/-ssä", bn: "কোথায় · উত্তরে -ssa/-ssä" },
    { fi: "mistä — Mistä olet kotoisin? – Bangladeshista.", en: "where from · answer -sta/-stä", bn: "কোথা থেকে · উত্তরে -sta/-stä" },
    { fi: "mihin — Mihin menet? – Kauppaan.", en: "where to · answer -n / -seen", bn: "কোথায় (কোন দিকে) · উত্তরে -n / -seen" },
    { fi: "milloin — Milloin tulet? – Huomenna.", en: "when · When are you coming?", bn: "কখন · তুমি কখন আসবে?" },
    { fi: "miksi — Miksi opiskelet suomea?", en: "why · answer with koska (because)", bn: "কেন · উত্তরে koska (কারণ)" },
    { fi: "miten — Miten menee? – Hyvin.", en: "how · How's it going?", bn: "কীভাবে · কেমন চলছে?" },
    { fi: "kuinka paljon — Kuinka paljon tämä maksaa?", en: "how much · How much does this cost?", bn: "কত · এটার দাম কত?" },
  ],

  examples: [
    { fi: "Puhutko suomea? – Puhun vähän.", bn: "তুমি কি ফিনিশ বলো? – একটু বলি।", en: "Do you speak Finnish? – A little." },
    { fi: "Asutko Helsingissä? – En asu. Asun Espoossa.", bn: "তুমি কি হেলসিঙ্কিতে থাকো? – না। আমি এসপোতে থাকি।", en: "Do you live in Helsinki? – No. I live in Espoo." },
    { fi: "Oletko opiskelija? – Olen.", bn: "তুমি কি শিক্ষার্থী? – হ্যাঁ।", en: "Are you a student? – Yes, I am." },
    { fi: "Ymmärrätkö? – Kyllä, ymmärrän.", bn: "তুমি কি বুঝতে পারছ? – হ্যাঁ, বুঝতে পারছি।", en: "Do you understand? – Yes, I do." },
    { fi: "Liisa: Hei! Mikä sinun nimesi on?", bn: "লিসা: হাই! তোমার নাম কী?", en: "Liisa: Hi! What's your name?" },
    { fi: "Rahim: Minä olen Rahim. Entä sinä?", bn: "রহিম: আমি রহিম। আর তুমি?", en: "Rahim: I'm Rahim. And you?" },
    { fi: "Liisa: Minä olen Liisa. Mistä sinä olet kotoisin?", bn: "লিসা: আমি লিসা। তুমি কোথা থেকে এসেছ?", en: "Liisa: I'm Liisa. Where are you from?" },
    { fi: "Rahim: Olen kotoisin Bangladeshista.", bn: "রহিম: আমি বাংলাদেশ থেকে এসেছি।", en: "Rahim: I'm from Bangladesh." },
    { fi: "Liisa: Missä sinä asut nyt?", bn: "লিসা: তুমি এখন কোথায় থাকো?", en: "Liisa: Where do you live now?" },
    { fi: "Rahim: Asun Espoossa. Opiskelen suomea.", bn: "রহিম: আমি এসপোতে থাকি। আমি ফিনিশ পড়ি।", en: "Rahim: I live in Espoo. I study Finnish." },
    { fi: "Liisa: Miksi opiskelet suomea?", bn: "লিসা: তুমি কেন ফিনিশ পড়ছ?", en: "Liisa: Why are you studying Finnish?" },
    { fi: "Rahim: Koska haluan tehdä töitä Suomessa.", bn: "রহিম: কারণ আমি ফিনল্যান্ডে কাজ করতে চাই।", en: "Rahim: Because I want to work in Finland." },
    { fi: "Liisa: Hienoa! Ymmärrätkö minua hyvin?", bn: "লিসা: দারুণ! তুমি কি আমাকে ভালোভাবে বুঝতে পারছ?", en: "Liisa: Great! Do you understand me well?" },
    { fi: "Rahim: Kyllä, ymmärrän. Kiitos!", bn: "রহিম: হ্যাঁ, বুঝতে পারছি। ধন্যবাদ!", en: "Rahim: Yes, I do. Thank you!" },
  ],

  vocabulary: [
    { fi: "kysymys", bn: "প্রশ্ন", en: "question" },
    { fi: "vastaus", bn: "উত্তর", en: "answer" },
    { fi: "kyllä", bn: "হ্যাঁ", en: "yes" },
    { fi: "ei", bn: "না", en: "no" },
    { fi: "olla kotoisin", bn: "কোথাও থেকে আসা (জন্মস্থান)", en: "to be from (origin)" },
    { fi: "ymmärtää (minä ymmärrän)", bn: "বোঝা", en: "to understand" },
    { fi: "maksaa", bn: "দাম হওয়া / খরচ হওয়া", en: "to cost" },
    { fi: "nimi", bn: "নাম", en: "name" },
    { fi: "vähän", bn: "একটু", en: "a little" },
    { fi: "koska", bn: "কারণ", en: "because" },
    { fi: "entä", bn: "আর ...?", en: "and (what about)?" },
    { fi: "kiitos", bn: "ধন্যবাদ", en: "thank you" },
  ],

  pronunciation: {
    fi: "Suomen kysymyksissä ääni ei yleensä nouse lopussa niin kuin englannissa. Kysymyksen näyttää -ko/-kö-pääte tai kysymyssana, ei intonaatio. Paino on ensimmäisellä tavulla: PU-hut-ko, MIS-sä.",
    bn: "ফিনিশ প্রশ্নে বাক্যের শেষে সুর সাধারণত ইংরেজির মতো ওঠে না। প্রশ্ন বোঝা যায় -ko/-kö বা প্রশ্নবোধক শব্দ দিয়ে, সুর দিয়ে নয়। জোর প্রথম সিলেবলে: PU-hut-ko, MIS-sä।",
    en: "In Finnish questions the voice usually does not rise at the end the way it does in English. The question is shown by -ko/-kö or the question word, not by intonation. Stress is on the first syllable: PU-hut-ko, MIS-sä.",
  },

  commonMistakes: [
    {
      fi: "Unohdetaan -ko/-kö: väärin Sinä puhut suomea?, oikein Puhutko suomea?",
      bn: "-ko/-kö ভুলে যাওয়া: ভুল Sinä puhut suomea?, সঠিক Puhutko suomea?",
      en: "Forgetting -ko/-kö: wrong Sinä puhut suomea?, right Puhutko suomea?",
    },
    {
      fi: "Lisätään -ko kysymyssanaan: väärin Missäkö asut?, oikein Missä asut?",
      bn: "প্রশ্নবোধক শব্দের সাথে -ko যোগ করা: ভুল Missäkö asut?, সঠিক Missä asut?",
      en: "Adding -ko to a question word: wrong Missäkö asut?, right Missä asut?",
    },
    {
      fi: "Väärä vokaalisointu: väärin Ymmärrätko?, oikein Ymmärrätkö?",
      bn: "ভুল স্বরসংগতি: ভুল Ymmärrätko?, সঠিক Ymmärrätkö?",
      en: "Wrong vowel harmony: wrong Ymmärrätko?, right Ymmärrätkö?",
    },
    {
      fi: "Sekoitetaan missä, mistä ja mihin: väärin Missä menet?, oikein Mihin menet?; väärin Missä olet kotoisin?, oikein Mistä olet kotoisin?",
      bn: "missä, mistä ও mihin গুলিয়ে ফেলা: ভুল Missä menet?, সঠিক Mihin menet?; ভুল Missä olet kotoisin?, সঠিক Mistä olet kotoisin?",
      en: "Mixing up missä, mistä and mihin: wrong Missä menet?, right Mihin menet?; wrong Missä olet kotoisin?, right Mistä olet kotoisin?",
    },
    {
      fi: "Sekoitetaan mikä ja mitä: väärin Mikä sinä teet?, oikein Mitä sinä teet? (mitä kysyy tekemistä).",
      bn: "mikä ও mitä গুলিয়ে ফেলা: ভুল Mikä sinä teet?, সঠিক Mitä sinä teet? (কাজ জিজ্ঞেস করতে mitä)।",
      en: "Mixing up mikä and mitä: wrong Mikä sinä teet?, right Mitä sinä teet? (mitä asks about an action).",
    },
    {
      fi: "Väärä sanajärjestys: väärin Sinä puhutko suomea?, oikein Puhutko sinä suomea?",
      bn: "ভুল শব্দক্রম: ভুল Sinä puhutko suomea?, সঠিক Puhutko sinä suomea?",
      en: "Wrong word order: wrong Sinä puhutko suomea?, right Puhutko sinä suomea?",
    },
  ],

  practice: [
    {
      prompt: {
        fi: "Muuta kysymykseksi: Sinä asut Helsingissä.",
        bn: "প্রশ্নে রূপান্তর করো: Sinä asut Helsingissä.",
        en: "Turn into a question: Sinä asut Helsingissä.",
      },
      answer: "Asutko (sinä) Helsingissä?",
    },
    {
      prompt: {
        fi: "Muuta kysymykseksi: Hän on opettaja.",
        bn: "প্রশ্নে রূপান্তর করো: Hän on opettaja.",
        en: "Turn into a question: Hän on opettaja.",
      },
      answer: "Onko hän opettaja?",
    },
    {
      prompt: {
        fi: "-ko vai -kö? Ymmärrät___?",
        bn: "-ko নাকি -kö? Ymmärrät___?",
        en: "-ko or -kö? Ymmärrät___?",
      },
      answer: "Ymmärrätkö?",
    },
    {
      prompt: {
        fi: "-ko vai -kö? Puhut___ englantia?",
        bn: "-ko নাকি -kö? Puhut___ englantia?",
        en: "-ko or -kö? Puhut___ englantia?",
      },
      answer: "Puhutko englantia?",
    },
    {
      prompt: {
        fi: "Täydennä kysymyssana: ___ sinä asut? – Asun Espoossa.",
        bn: "প্রশ্নবোধক শব্দ বসাও: ___ sinä asut? – Asun Espoossa.",
        en: "Fill in the question word: ___ sinä asut? – Asun Espoossa.",
      },
      answer: "Missä",
    },
    {
      prompt: {
        fi: "Täydennä kysymyssana: ___ sinä olet kotoisin? – Bangladeshista.",
        bn: "প্রশ্নবোধক শব্দ বসাও: ___ sinä olet kotoisin? – Bangladeshista.",
        en: "Fill in the question word: ___ sinä olet kotoisin? – Bangladeshista.",
      },
      answer: "Mistä",
    },
    {
      prompt: {
        fi: "Täydennä kysymyssana: ___ sinä menet? – Kauppaan.",
        bn: "প্রশ্নবোধক শব্দ বসাও: ___ sinä menet? – Kauppaan.",
        en: "Fill in the question word: ___ sinä menet? – Kauppaan.",
      },
      answer: "Mihin",
    },
    {
      prompt: {
        fi: "Täydennä kysymyssana: ___ sinä teet? – Opiskelen.",
        bn: "প্রশ্নবোধক শব্দ বসাও: ___ sinä teet? – Opiskelen.",
        en: "Fill in the question word: ___ sinä teet? – Opiskelen.",
      },
      answer: "Mitä",
    },
    {
      prompt: {
        fi: "Täydennä kysymyssana: ___ tämä maksaa? – Viisi euroa.",
        bn: "প্রশ্নবোধক শব্দ বসাও: ___ tämä maksaa? – Viisi euroa.",
        en: "Fill in the question word: ___ tämä maksaa? – Viisi euroa.",
      },
      answer: "Kuinka paljon",
    },
    {
      prompt: {
        fi: "Vastaa myönteisesti toistamalla verbi: Puhutko suomea?",
        bn: "ক্রিয়াটি পুনরাবৃত্তি করে হ্যাঁ-সূচক উত্তর দাও: Puhutko suomea?",
        en: "Answer yes by repeating the verb: Puhutko suomea?",
      },
      answer: "(Kyllä,) puhun.",
    },
    {
      prompt: {
        fi: "Käännä suomeksi: Why do you study Finnish?",
        bn: "ফিনিশে অনুবাদ করো: তুমি কেন ফিনিশ পড়ো?",
        en: "Translate into Finnish: Why do you study Finnish?",
      },
      answer: "Miksi (sinä) opiskelet suomea?",
    },
  ],

  quiz: [
    {
      question: {
        fi: "Mikä on oikea kysymys?",
        en: "Which is the correct question?",
      },
      options: [
        { fi: "Sinä puhut suomea?", en: "Sinä puhut suomea?" },
        { fi: "Puhutko suomea?", en: "Puhutko suomea?" },
        { fi: "Puhutkö suomea?", en: "Puhutkö suomea?" },
        { fi: "Sinä puhutko suomea?", en: "Sinä puhutko suomea?" },
      ],
      correctIndex: 1,
      explanation: {
        fi: "Verbi tulee alkuun ja saa päätteen -ko, koska puhua-verbissä on u: Puhutko suomea?",
        bn: "ক্রিয়াটি শুরুতে আসে এবং -ko যুক্ত হয়, কারণ puhua-তে u আছে: Puhutko suomea?",
        en: "The verb comes first and takes -ko, because puhua has u: Puhutko suomea?",
      },
    },
    {
      question: {
        fi: "Mikä muoto on oikein?",
        en: "Which form is correct?",
      },
      options: [
        { fi: "Ymmärrätko?", en: "Ymmärrätko?" },
        { fi: "Ymmärrätkö?", en: "Ymmärrätkö?" },
        { fi: "Ymmärräkö?", en: "Ymmärräkö?" },
        { fi: "Ymmärrätkä?", en: "Ymmärrätkä?" },
      ],
      correctIndex: 1,
      explanation: {
        fi: "Ymmärtää-verbissä on ä ja y, joten pääte on -kö: Ymmärrätkö?",
        bn: "ymmärtää-তে ä ও y আছে, তাই প্রত্যয় -kö: Ymmärrätkö?",
        en: "Ymmärtää has ä and y, so the ending is -kö: Ymmärrätkö?",
      },
    },
    {
      question: {
        fi: "Täydennä: ___ sinä menet? – Menen kauppaan.",
        en: "Fill in: ___ sinä menet? – Menen kauppaan.",
      },
      options: [
        { fi: "Missä", en: "Missä" },
        { fi: "Mistä", en: "Mistä" },
        { fi: "Mihin", en: "Mihin" },
        { fi: "Milloin", en: "Milloin" },
      ],
      correctIndex: 2,
      explanation: {
        fi: "Mihin kysyy, mihin paikkaan joku menee: Menen kauppaan.",
        bn: "mihin জিজ্ঞেস করে কেউ কোন জায়গায় যাচ্ছে: Menen kauppaan (আমি দোকানে যাচ্ছি)।",
        en: "Mihin asks where someone is going to: Menen kauppaan.",
      },
    },
    {
      question: {
        fi: "Täydennä: ___ sinä olet kotoisin? – Bangladeshista.",
        en: "Fill in: ___ sinä olet kotoisin? – Bangladeshista.",
      },
      options: [
        { fi: "Missä", en: "Missä" },
        { fi: "Mistä", en: "Mistä" },
        { fi: "Mihin", en: "Mihin" },
        { fi: "Miksi", en: "Miksi" },
      ],
      correctIndex: 1,
      explanation: {
        fi: "Mistä kysyy, mistä paikasta joku tulee. Vastauksessa on -sta: Bangladeshista.",
        bn: "mistä জিজ্ঞেস করে কেউ কোন জায়গা থেকে এসেছে। উত্তরে -sta থাকে: Bangladeshista।",
        en: "Mistä asks where someone comes from. The answer has -sta: Bangladeshista.",
      },
    },
    {
      question: {
        fi: "Täydennä: ___ sinä haluat? – Kahvia.",
        en: "Fill in: ___ sinä haluat? – Kahvia.",
      },
      options: [
        { fi: "Mikä", en: "Mikä" },
        { fi: "Mitä", en: "Mitä" },
        { fi: "Kuka", en: "Kuka" },
        { fi: "Miten", en: "Miten" },
      ],
      correctIndex: 1,
      explanation: {
        fi: "Mitä kysyy, mitä joku haluaa tai tekee: Mitä sinä haluat?",
        bn: "mitä জিজ্ঞেস করে কেউ কী চায় বা কী করে: Mitä sinä haluat?",
        en: "Mitä asks what someone wants or does: Mitä sinä haluat?",
      },
    },
    {
      question: {
        fi: "Mikä on luonteva myönteinen vastaus? Asutko Suomessa?",
        en: "Which is a natural 'yes' answer? Asutko Suomessa?",
      },
      options: [
        { fi: "Asun.", en: "Asun." },
        { fi: "Asutko.", en: "Asutko." },
        { fi: "Kyllä asutko.", en: "Kyllä asutko." },
        { fi: "Ei asun.", en: "Ei asun." },
      ],
      correctIndex: 0,
      explanation: {
        fi: "Suomessa vastataan usein toistamalla verbi oikeassa muodossa: Asun. (tai: Kyllä, asun.)",
        bn: "ফিনিশে প্রায়ই সঠিক রূপে ক্রিয়াটি পুনরাবৃত্তি করে উত্তর দেওয়া হয়: Asun. (অথবা: Kyllä, asun.)",
        en: "Finns often answer by repeating the verb in the right form: Asun. (or: Kyllä, asun.)",
      },
    },
  ],

  summary: {
    fi: "Kyllä/ei-kysymys: verbi alkuun + -ko/-kö (Puhutko suomea? Ymmärrätkö?). Kysymyssana alkuun ilman -ko/-kö-päätettä (Missä asut?). Mikä kysyy, mikä jokin on; mitä kysyy, mitä joku tekee tai haluaa. Missä = missä paikassa, mistä = mistä paikasta, mihin = mihin paikkaan. Kuinka paljon = määrä tai hinta, kuinka monta = lukumäärä. Vastaa usein toistamalla verbi: Puhun. / En puhu.",
    bn: "হ্যাঁ/না প্রশ্ন: ক্রিয়া শুরুতে + -ko/-kö (Puhutko suomea? Ymmärrätkö?)। প্রশ্নবোধক শব্দ শুরুতে, -ko/-kö ছাড়া (Missä asut?)। mikä জিজ্ঞেস করে কোনো কিছু কী; mitä জিজ্ঞেস করে কেউ কী করছে বা চাইছে। missä = কোথায়, mistä = কোথা থেকে, mihin = কোথায় (কোন দিকে)। kuinka paljon = পরিমাণ বা দাম, kuinka monta = সংখ্যা। প্রায়ই ক্রিয়াটি পুনরাবৃত্তি করে উত্তর দাও: Puhun. / En puhu।",
    en: "Yes/no question: verb first + -ko/-kö (Puhutko suomea? Ymmärrätkö?). Question word first, without -ko/-kö (Missä asut?). Mikä asks what something is; mitä asks what someone does or wants. Missä = where, mistä = where from, mihin = where to. Kuinka paljon = amount or price, kuinka monta = number. Answer often by repeating the verb: Puhun. / En puhu.",
  },
};