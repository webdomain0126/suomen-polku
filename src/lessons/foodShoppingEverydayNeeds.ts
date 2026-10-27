import { Lesson } from "./types";

// Month 2, Lesson 6 — Food, Shopping, and Everyday Needs
// Stable lesson ID: month-2-food-shopping-everyday-needs (see lessonRegistry.ts)
// Sources in Rafiqul Hyder's material: partitive file (shopping and food
// sentences: ostaa salaattia, juo maitoa, syö leipää; kolme tölkkiä maitoa),
// Konditionaali file (-isi- for polite requests), adessive (millä:
// kynällä, autolla → maksaa kortilla). Taught here as ready-made phrases.

export const foodShoppingEverydayNeedsLesson: Lesson = {
  slug: "food-shopping-everyday-needs",
  month: 2,

  title: {
    fi: "Ruoka, ostokset ja arjen tarpeet",
    bn: "খাবার, কেনাকাটা ও দৈনন্দিন প্রয়োজন",
    en: "Food, Shopping, and Everyday Needs",
  },

  intro: {
    fi: "Tässä oppitunnissa opit ostamaan ruokaa, kysymään hintaa, tilaamaan kahvilassa kohteliaasti ja maksamaan. Käytät tuttuja kysymyksiä ja kieltoa sekä uusia valmiita fraaseja, joita tarvitset joka päivä.",
    bn: "এই পাঠে তুমি খাবার কেনা, দাম জিজ্ঞেস করা, ক্যাফেতে ভদ্রভাবে অর্ডার দেওয়া এবং দাম মেটানো শিখবে। তুমি পরিচিত প্রশ্ন ও না-বাচক বাক্য ব্যবহার করবে, সাথে কিছু নতুন তৈরি বাক্যাংশ, যা প্রতিদিন কাজে লাগে।",
    en: "In this lesson you'll learn to buy food, ask about prices, order politely at a café and pay. You'll use familiar questions and negation, plus new ready-made phrases you need every day.",
  },

  objectives: [
    {
      fi: "Kysyä hintaa ja ymmärtää vastaus.",
      bn: "দাম জিজ্ঞেস করা এবং উত্তর বুঝতে পারা।",
      en: "Ask about prices and understand the answer.",
    },
    {
      fi: "Tilata ja pyytää kohteliaasti (Haluaisin…, Saisinko…?).",
      bn: "ভদ্রভাবে অর্ডার দেওয়া ও কিছু চাওয়া (Haluaisin…, Saisinko…?)।",
      en: "Order and ask politely (Haluaisin…, Saisinko…?).",
    },
    {
      fi: "Selviytyä kaupassa ja kassalla.",
      bn: "দোকানে ও ক্যাশ কাউন্টারে কাজ সারতে পারা।",
      en: "Manage in a shop and at the checkout.",
    },
  ],

  explanation: [
    {
      fi: "Hinta: Paljonko tämä maksaa? tai Kuinka paljon tämä maksaa? – Se maksaa viisi euroa. Tämä (yksi asia) → maksaa. Nämä (monta asiaa) → maksavat: Paljonko nämä maksavat?",
      bn: "দাম: Paljonko tämä maksaa? অথবা Kuinka paljon tämä maksaa? (এটার দাম কত?) – Se maksaa viisi euroa (এটার দাম পাঁচ ইউরো)। tämä (একটি জিনিস) → maksaa। nämä (একাধিক জিনিস) → maksavat: Paljonko nämä maksavat? (এগুলোর দাম কত?)",
      en: "Price: Paljonko tämä maksaa? or Kuinka paljon tämä maksaa? – Se maksaa viisi euroa. Tämä (one thing) → maksaa. Nämä (several things) → maksavat: Paljonko nämä maksavat?",
    },
    {
      fi: "Kun puhut määrästä etkä yhdestä kokonaisesta asiasta, ruokasana on partitiivissa: maitoa, vettä, leipää, kahvia, riisiä. Esimerkiksi: Hän ostaa salaattia, tomaattia, kurkkua ja sipulia. Partitiivi tulee myös luvun jälkeen (kaksi omenaa, kolme euroa), monikossa (omenoita) ja kieltolauseessa (En tarvitse kassia). Opettele nämä nyt sanoina; koko sääntö opitaan myöhemmin.",
      bn: "যখন তুমি কোনো পরিমাণের কথা বলো, একটি গোটা জিনিসের নয়, তখন খাবারের শব্দটি partitiivi রূপে থাকে: maitoa (কিছু দুধ), vettä (পানি), leipää (রুটি), kahvia (কফি), riisiä (চাল/ভাত)। যেমন: Hän ostaa salaattia, tomaattia, kurkkua ja sipulia (সে সালাদপাতা, টমেটো, শসা ও পেঁয়াজ কেনে)। partitiivi সংখ্যার পরেও আসে (kaksi omenaa — দুটি আপেল, kolme euroa — তিন ইউরো), বহুবচনে (omenoita — আপেল) এবং না-বাচক বাক্যে (En tarvitse kassia — আমার ব্যাগ লাগবে না)। এখন এগুলো শব্দ হিসেবে শিখে নাও; পুরো নিয়ম পরে শেখানো হবে।",
      en: "When you talk about an amount rather than one whole thing, the food word is in the partitive: maitoa, vettä, leipää, kahvia, riisiä. For example: Hän ostaa salaattia, tomaattia, kurkkua ja sipulia. The partitive also comes after numbers (kaksi omenaa, kolme euroa), in the plural (omenoita) and in negatives (En tarvitse kassia). Learn these as words for now; the full rule comes later.",
    },
    {
      fi: "Kohteliaat pyynnöt: Haluaisin yhden kahvin, kiitos. Saisinko vettä, kiitos? Muoto -isi- tekee pyynnöstä kohteliaan (kuin englannin would/could). Se opitaan tarkemmin kuukaudella 7. Lyhyt ja täysin kohtelias tapa on myös: Yksi kahvi, kiitos.",
      bn: "ভদ্র অনুরোধ: Haluaisin yhden kahvin, kiitos (আমি একটা কফি চাই, ধন্যবাদ)। Saisinko vettä, kiitos? (আমি কি একটু পানি পেতে পারি?) -isi- রূপটি অনুরোধকে ভদ্র করে (ইংরেজির would/could-এর মতো)। এটি সপ্তম মাসে বিস্তারিত শেখানো হবে। ছোট কিন্তু পুরোপুরি ভদ্র একটি উপায়ও আছে: Yksi kahvi, kiitos (একটা কফি, ধন্যবাদ)।",
      en: "Polite requests: Haluaisin yhden kahvin, kiitos. Saisinko vettä, kiitos? The form -isi- makes the request polite (like English would/could). It is taught in detail in Month 7. A short and fully polite way is also: Yksi kahvi, kiitos.",
    },
    {
      fi: "Kysymykset ja kielto kaupassa: Onko teillä maitoa? Onko tämä kallis? Haluatko vettä? En tarvitse kassia. En juo kahvia. Nämä ovat samoja rakenteita, jotka opit kysymysten ja kieltolauseiden oppitunneilla.",
      bn: "দোকানে প্রশ্ন ও না-বাচক বাক্য: Onko teillä maitoa? (আপনাদের কাছে কি দুধ আছে?) Onko tämä kallis? (এটা কি দামি?) Haluatko vettä? (তুমি কি পানি চাও?) En tarvitse kassia (আমার ব্যাগ লাগবে না)। En juo kahvia (আমি কফি খাই না)। এগুলো সেই একই গঠন, যা তুমি প্রশ্ন ও না-বাচক বাক্যের পাঠে শিখেছ।",
      en: "Questions and negatives in a shop: Onko teillä maitoa? Onko tämä kallis? Haluatko vettä? En tarvitse kassia. En juo kahvia. These are the same structures you learned in the questions and negative sentences lessons.",
    },
    {
      fi: "Maksaminen: Voinko maksaa kortilla? Voinko maksaa käteisellä? Pääte -lla tarkoittaa tässä 'jollakin' (by). Myyjä voi kysyä: Kortilla vai käteisellä? Tarvitsetko kassin? Haluatko kuitin? Loppusumma: Se tekee yhteensä kahdeksan euroa.",
      bn: "দাম মেটানো: Voinko maksaa kortilla? (আমি কি কার্ডে দিতে পারি?) Voinko maksaa käteisellä? (আমি কি নগদে দিতে পারি?) এখানে -lla প্রত্যয়ের মানে 'দিয়ে' (by)। বিক্রেতা জিজ্ঞেস করতে পারেন: Kortilla vai käteisellä? (কার্ডে নাকি নগদে?) Tarvitsetko kassin? (তোমার কি ব্যাগ লাগবে?) Haluatko kuitin? (তুমি কি রসিদ চাও?) মোট দাম: Se tekee yhteensä kahdeksan euroa (সব মিলিয়ে আট ইউরো)।",
      en: "Paying: Voinko maksaa kortilla? Voinko maksaa käteisellä? Here the ending -lla means 'by'. The cashier may ask: Kortilla vai käteisellä? Tarvitsetko kassin? Haluatko kuitin? The total: Se tekee yhteensä kahdeksan euroa.",
    },
    {
      fi: "Kahvilassa ja ravintolassa: Mitä saisi olla? (myyjä kysyy, mitä haluat). Saisinko ruokalistan? Onko tämä kasvisruokaa? Ilman sokeria, kiitos. Lasku, kiitos. Kiitos, hyvää päivänjatkoa! Monet näistä ovat lyhyitä arkifraaseja.",
      bn: "ক্যাফে ও রেস্তোরাঁয়: Mitä saisi olla? (বিক্রেতা জিজ্ঞেস করেন তুমি কী চাও)। Saisinko ruokalistan? (আমি কি মেনুটা পেতে পারি?) Onko tämä kasvisruokaa? (এটা কি নিরামিষ খাবার?) Ilman sokeria, kiitos (চিনি ছাড়া, ধন্যবাদ)। Lasku, kiitos (বিলটা দিন, ধন্যবাদ)। Kiitos, hyvää päivänjatkoa! (ধন্যবাদ, আপনার দিনটা ভালো কাটুক!) এর অনেকগুলোই ছোট দৈনন্দিন বাক্যাংশ।",
      en: "At a café or restaurant: Mitä saisi olla? (the server asks what you'd like). Saisinko ruokalistan? Onko tämä kasvisruokaa? Ilman sokeria, kiitos. Lasku, kiitos. Kiitos, hyvää päivänjatkoa! Many of these are short everyday phrases.",
    },
    {
      fi: "Arjen vinkkejä: hinnat ovat euroissa. Kortilla maksaminen on yleistä, mutta voit aina kysyä: Voinko maksaa kortilla? Apua voi pyytää näin: Anteeksi, missä on maito? tai Voitteko auttaa? Kaupan kassit maksavat usein erikseen, ja monessa ruokakaupassa on myös itsepalvelukassa.",
      bn: "দৈনন্দিন টিপস: দাম ইউরোতে লেখা থাকে। কার্ডে দাম দেওয়া প্রচলিত, তবে তুমি সবসময় জিজ্ঞেস করতে পারো: Voinko maksaa kortilla? সাহায্য চাইতে পারো এভাবে: Anteeksi, missä on maito? (মাফ করবেন, দুধ কোথায়?) অথবা Voitteko auttaa? (আপনি কি সাহায্য করতে পারেন?) দোকানের ব্যাগের জন্য প্রায়ই আলাদা দাম দিতে হয়, আর অনেক মুদি দোকানে নিজে দাম মেটানোর কাউন্টারও (itsepalvelukassa) থাকে।",
      en: "Everyday tips: prices are in euros. Paying by card is common, but you can always ask: Voinko maksaa kortilla? You can ask for help like this: Anteeksi, missä on maito? or Voitteko auttaa? Shopping bags often cost extra, and many grocery stores also have a self-checkout.",
    },
  ],

  // Reuses the lesson table: key shopping and café phrases.
  pronounTable: [
    { fi: "Paljonko tämä maksaa?", en: "How much does this cost?", bn: "এটার দাম কত?" },
    { fi: "Paljonko nämä maksavat?", en: "How much do these cost?", bn: "এগুলোর দাম কত?" },
    { fi: "Haluaisin yhden kahvin, kiitos.", en: "I'd like one coffee, please.", bn: "আমি একটা কফি চাই, ধন্যবাদ।" },
    { fi: "Saisinko vettä, kiitos?", en: "Could I have some water, please?", bn: "আমি কি একটু পানি পেতে পারি?" },
    { fi: "Onko teillä omenoita?", en: "Do you have apples?", bn: "আপনাদের কাছে কি আপেল আছে?" },
    { fi: "Tarvitsen leipää.", en: "I need bread.", bn: "আমার রুটি দরকার।" },
    { fi: "Voinko maksaa kortilla?", en: "Can I pay by card?", bn: "আমি কি কার্ডে দাম দিতে পারি?" },
    { fi: "En tarvitse kassia.", en: "I don't need a bag.", bn: "আমার ব্যাগ লাগবে না।" },
    { fi: "Lasku, kiitos.", en: "The bill, please.", bn: "বিলটা দিন, ধন্যবাদ।" },
    { fi: "Kiitos, hyvää päivänjatkoa!", en: "Thanks, have a nice day!", bn: "ধন্যবাদ, আপনার দিনটা ভালো কাটুক!" },
  ],

  examples: [
    { fi: "Ostan maitoa ja leipää.", bn: "আমি দুধ ও রুটি কিনি।", en: "I buy milk and bread." },
    { fi: "Hän juo maitoa, kahvia ja vettä.", bn: "সে দুধ, কফি ও পানি পান করে।", en: "He/She drinks milk, coffee and water." },
    { fi: "Onko tämä kallis? – Ei ole. Se on halpa.", bn: "এটা কি দামি? – না। এটা সস্তা।", en: "Is this expensive? – No. It's cheap." },
    { fi: "Rahim: Anteeksi, onko teillä riisiä? – Myyjä: On. Riisi on tuolla.", bn: "রহিম: মাফ করবেন, আপনাদের কাছে কি চাল আছে? – বিক্রেতা: আছে। চাল ওখানে।", en: "Rahim: Excuse me, do you have rice? – Clerk: Yes. The rice is over there." },
    { fi: "Rahim: Paljonko omenat maksavat? – Myyjä: Kilo maksaa kaksi euroa.", bn: "রহিম: আপেলের দাম কত? – বিক্রেতা: এক কেজি দুই ইউরো।", en: "Rahim: How much are the apples? – Clerk: A kilo costs two euros." },
    { fi: "Rahim: Hyvä. Ostan kilon omenoita.", bn: "রহিম: ভালো। আমি এক কেজি আপেল কিনব।", en: "Rahim: Good. I'll buy a kilo of apples." },
    { fi: "Myyjä: Hei, mitä saisi olla? – Tisa: Yksi kahvi, kiitos. Ilman sokeria.", bn: "বিক্রেতা: হাই, কী দেব? – তিসা: একটা কফি, ধন্যবাদ। চিনি ছাড়া।", en: "Server: Hi, what would you like? – Tisa: One coffee, please. Without sugar." },
    { fi: "Myyjä: Haluatko maitoa? – Tisa: Vähän maitoa, kiitos.", bn: "বিক্রেতা: দুধ দেব? – তিসা: একটু দুধ, ধন্যবাদ।", en: "Server: Would you like milk? – Tisa: A little milk, please." },
    { fi: "Myyjä: Ole hyvä. – Tisa: Kiitos!", bn: "বিক্রেতা: এই নিন। – তিসা: ধন্যবাদ!", en: "Server: Here you are. – Tisa: Thank you!" },
    { fi: "Myyjä: Se tekee yhteensä kahdeksan euroa. – Ali: Voinko maksaa kortilla?", bn: "বিক্রেতা: সব মিলিয়ে আট ইউরো। – আলী: আমি কি কার্ডে দিতে পারি?", en: "Cashier: That's eight euros altogether. – Ali: Can I pay by card?" },
    { fi: "Myyjä: Totta kai. Tarvitsetko kassin? – Ali: En tarvitse, kiitos.", bn: "বিক্রেতা: অবশ্যই। ব্যাগ লাগবে? – আলী: লাগবে না, ধন্যবাদ।", en: "Cashier: Of course. Do you need a bag? – Ali: No, thank you." },
    { fi: "Myyjä: Haluatko kuitin? – Ali: Kyllä, kiitos. Hyvää päivänjatkoa!", bn: "বিক্রেতা: রসিদ চান? – আলী: হ্যাঁ, ধন্যবাদ। আপনার দিনটা ভালো কাটুক!", en: "Cashier: Would you like a receipt? – Ali: Yes, please. Have a nice day!" },
  ],

  vocabulary: [
    { fi: "ruoka", bn: "খাবার", en: "food" },
    { fi: "vesi (vettä)", bn: "পানি", en: "water" },
    { fi: "maito (maitoa)", bn: "দুধ", en: "milk" },
    { fi: "kahvi / tee", bn: "কফি / চা", en: "coffee / tea" },
    { fi: "leipä (leipää)", bn: "রুটি", en: "bread" },
    { fi: "riisi (riisiä)", bn: "চাল / ভাত", en: "rice" },
    { fi: "omena / banaani", bn: "আপেল / কলা", en: "apple / banana" },
    { fi: "peruna", bn: "আলু", en: "potato" },
    { fi: "vihannes / hedelmä", bn: "সবজি / ফল", en: "vegetable / fruit" },
    { fi: "kana / kala", bn: "মুরগি / মাছ", en: "chicken / fish" },
    { fi: "juusto", bn: "পনির", en: "cheese" },
    { fi: "aamiainen / lounas / päivällinen", bn: "সকালের নাস্তা / দুপুরের খাবার / রাতের খাবার", en: "breakfast / lunch / dinner" },
    { fi: "kauppa / ruokakauppa", bn: "দোকান / মুদি দোকান", en: "shop / grocery store" },
    { fi: "hinta / euro", bn: "দাম / ইউরো", en: "price / euro" },
    { fi: "halpa / kallis", bn: "সস্তা / দামি", en: "cheap / expensive" },
    { fi: "kuitti / kassi", bn: "রসিদ / ব্যাগ", en: "receipt / bag" },
    { fi: "kortti / käteinen", bn: "কার্ড / নগদ টাকা", en: "card / cash" },
    { fi: "kilo / litra", bn: "কেজি / লিটার", en: "kilogram / litre" },
    { fi: "paljonko", bn: "কত", en: "how much" },
  ],

  pronunciation: {
    fi: "Kiinnitä huomiota pitkiin äänteisiin: maitoa (ai), leipää (pitkä ää), kallis (ll), kuitti (tt), käteinen (ä). Paino on ensimmäisellä tavulla: PAL-jon-ko, KÄ-tei-nen. Hinnan sanominen: viisi euroa, kaksi euroa.",
    bn: "দীর্ঘ ধ্বনিগুলোর দিকে খেয়াল রাখো: maitoa (ai), leipää (দীর্ঘ ää), kallis (ll), kuitti (tt), käteinen (ä)। জোর প্রথম সিলেবলে: PAL-jon-ko, KÄ-tei-nen। দাম বলা: viisi euroa (পাঁচ ইউরো), kaksi euroa (দুই ইউরো)।",
    en: "Pay attention to the long sounds: maitoa (ai), leipää (long ää), kallis (ll), kuitti (tt), käteinen (ä). Stress is on the first syllable: PAL-jon-ko, KÄ-tei-nen. Saying a price: viisi euroa, kaksi euroa.",
  },

  commonMistakes: [
    {
      fi: "-ko kysymyssanan kanssa: väärin Paljonko maksaako tämä?, oikein Paljonko tämä maksaa?",
      bn: "প্রশ্নবোধক শব্দের সাথে -ko: ভুল Paljonko maksaako tämä?, সঠিক Paljonko tämä maksaa?",
      en: "-ko together with a question word: wrong Paljonko maksaako tämä?, right Paljonko tämä maksaa?",
    },
    {
      fi: "Sekoitetaan tämä ja nämä: väärin Paljonko tämä maksavat?, oikein Paljonko tämä maksaa? tai Paljonko nämä maksavat?",
      bn: "tämä ও nämä গুলিয়ে ফেলা: ভুল Paljonko tämä maksavat?, সঠিক Paljonko tämä maksaa? অথবা Paljonko nämä maksavat?",
      en: "Mixing up tämä and nämä: wrong Paljonko tämä maksavat?, right Paljonko tämä maksaa? or Paljonko nämä maksavat?",
    },
    {
      fi: "Väärä kieltoverbi: väärin Minä ei tarvitse kassia, oikein En tarvitse kassia.",
      bn: "ভুল না-বাচক ক্রিয়া: ভুল Minä ei tarvitse kassia, সঠিক En tarvitse kassia।",
      en: "The wrong negative verb: wrong Minä ei tarvitse kassia, right En tarvitse kassia.",
    },
    {
      fi: "Perusmuoto luvun jälkeen: väärin Ostan kaksi omena, oikein Ostan kaksi omenaa.",
      bn: "সংখ্যার পরে মূল রূপ: ভুল Ostan kaksi omena, সঠিক Ostan kaksi omenaa।",
      en: "The basic form after a number: wrong Ostan kaksi omena, right Ostan kaksi omenaa.",
    },
    {
      fi: "Perusmuoto määrästä: väärin Tarvitsen maito, oikein Tarvitsen maitoa.",
      bn: "পরিমাণ বোঝাতে মূল রূপ: ভুল Tarvitsen maito, সঠিক Tarvitsen maitoa।",
      en: "The basic form for an amount: wrong Tarvitsen maito, right Tarvitsen maitoa.",
    },
    {
      fi: "Unohdetaan kysymys kirjakielessä: väärin Teillä on maitoa?, oikein Onko teillä maitoa?",
      bn: "লিখিত ভাষায় প্রশ্নের রূপ ভুলে যাওয়া: ভুল Teillä on maitoa?, সঠিক Onko teillä maitoa?",
      en: "Forgetting the question form in standard Finnish: wrong Teillä on maitoa?, right Onko teillä maitoa?",
    },
    {
      fi: "Liian suora pyyntö kahvilassa: Anna kahvi! kuulostaa käskyltä. Kohteliaampi: Yksi kahvi, kiitos. tai Saisinko kahvin?",
      bn: "ক্যাফেতে খুব সরাসরি অনুরোধ: Anna kahvi! আদেশের মতো শোনায়। আরও ভদ্র: Yksi kahvi, kiitos। অথবা Saisinko kahvin?",
      en: "A request that is too direct at a café: Anna kahvi! sounds like an order. More polite: Yksi kahvi, kiitos. or Saisinko kahvin?",
    },
  ],

  practice: [
    {
      prompt: {
        fi: "Mitä tarkoittaa 'leipä'?",
        bn: "'leipä' মানে কী?",
        en: "What does 'leipä' mean?",
      },
      answer: "bread — রুটি",
    },
    {
      prompt: {
        fi: "Täydennä: Paljonko tämä ___?",
        bn: "পূরণ করো: Paljonko tämä ___?",
        en: "Complete: Paljonko tämä ___?",
      },
      answer: "maksaa",
    },
    {
      prompt: {
        fi: "Täydennä: Paljonko nämä ___?",
        bn: "পূরণ করো: Paljonko nämä ___?",
        en: "Complete: Paljonko nämä ___?",
      },
      answer: "maksavat",
    },
    {
      prompt: {
        fi: "Täydennä (maito): Ostan ___ ja leipää.",
        bn: "পূরণ করো (maito): Ostan ___ ja leipää.",
        en: "Complete (maito): Ostan ___ ja leipää.",
      },
      answer: "maitoa",
    },
    {
      prompt: {
        fi: "Muuta kysymykseksi: Teillä on omenoita.",
        bn: "প্রশ্নে রূপান্তর করো: Teillä on omenoita.",
        en: "Turn into a question: Teillä on omenoita.",
      },
      answer: "Onko teillä omenoita?",
    },
    {
      prompt: {
        fi: "Muuta kielteiseksi: Tarvitsen kassin.",
        bn: "না-বাচক করো: Tarvitsen kassin.",
        en: "Make it negative: Tarvitsen kassin.",
      },
      answer: "En tarvitse kassia.",
    },
    {
      prompt: {
        fi: "Käännä suomeksi: Can I pay by card?",
        bn: "ফিনিশে অনুবাদ করো: আমি কি কার্ডে দাম দিতে পারি?",
        en: "Translate into Finnish: Can I pay by card?",
      },
      answer: "Voinko maksaa kortilla?",
    },
    {
      prompt: {
        fi: "Käännä suomeksi: The bill, please.",
        bn: "ফিনিশে অনুবাদ করো: বিলটা দিন, ধন্যবাদ।",
        en: "Translate into Finnish: The bill, please.",
      },
      answer: "Lasku, kiitos.",
    },
    {
      prompt: {
        fi: "Tee pyynnöstä kohtelias: Anna vettä!",
        bn: "অনুরোধটি ভদ্র করো: Anna vettä!",
        en: "Make the request polite: Anna vettä!",
      },
      answer: "Saisinko vettä, kiitos?",
    },
    {
      prompt: {
        fi: "Myyjä kysyy: Tarvitsetko kassin? Vastaa kieltävästi.",
        bn: "বিক্রেতা জিজ্ঞেস করছেন: Tarvitsetko kassin? না-সূচক উত্তর দাও।",
        en: "The cashier asks: Tarvitsetko kassin? Answer no.",
      },
      answer: "En tarvitse, kiitos.",
    },
    {
      prompt: {
        fi: "Tilaa kahvilassa yksi tee.",
        bn: "ক্যাফেতে একটা চা অর্ডার দাও।",
        en: "Order one tea at a café.",
      },
      answer: "Yksi tee, kiitos. / Haluaisin teetä.",
    },
    {
      prompt: {
        fi: "Tee oma ostoslista: kirjoita lause, jossa on kolme ruokaa partitiivissa.",
        bn: "নিজের বাজারের তালিকা বানাও: partitiivi রূপে তিনটি খাবার দিয়ে একটি বাক্য লেখো।",
        en: "Make your own shopping list: write a sentence with three foods in the partitive.",
      },
      answer: "Esimerkki: Ostan maitoa, leipää ja riisiä.",
    },
  ],

  quiz: [
    {
      question: {
        fi: "Miten kysytään 'How much does this cost?'",
        en: "How do you ask 'How much does this cost?'",
      },
      options: [
        { fi: "Paljonko tämä maksaa?", en: "Paljonko tämä maksaa?" },
        { fi: "Paljonko maksaako tämä?", en: "Paljonko maksaako tämä?" },
        { fi: "Paljonko tämä maksavat?", en: "Paljonko tämä maksavat?" },
        { fi: "Maksaako paljonko tämä?", en: "Maksaako paljonko tämä?" },
      ],
      correctIndex: 0,
      explanation: {
        fi: "Kysymyssana paljonko ilman -ko-päätettä, ja tämä + maksaa: Paljonko tämä maksaa?",
        bn: "প্রশ্নবোধক শব্দ paljonko, -ko ছাড়া, আর tämä + maksaa: Paljonko tämä maksaa?",
        en: "The question word paljonko without -ko, and tämä + maksaa: Paljonko tämä maksaa?",
      },
    },
    {
      question: {
        fi: "Täydennä: Ostan ___ ja leipää. (maito)",
        en: "Fill in: Ostan ___ ja leipää. (maito)",
      },
      options: [
        { fi: "maito", en: "maito" },
        { fi: "maitoa", en: "maitoa" },
        { fi: "maitossa", en: "maitossa" },
        { fi: "maitoon", en: "maitoon" },
      ],
      correctIndex: 1,
      explanation: {
        fi: "Määrästä puhutaan partitiivilla: maitoa (ja leipää).",
        bn: "পরিমাণ বোঝাতে partitiivi ব্যবহার হয়: maitoa (ও leipää)।",
        en: "An amount is expressed with the partitive: maitoa (and leipää).",
      },
    },
    {
      question: {
        fi: "Mikä on kohtelias tapa tilata kahvilassa?",
        en: "Which is a polite way to order at a café?",
      },
      options: [
        { fi: "Saisinko kahvin?", en: "Saisinko kahvin?" },
        { fi: "Anna kahvi!", en: "Anna kahvi!" },
        { fi: "Kahvi minä haluan.", en: "Kahvi minä haluan." },
        { fi: "Saisin kahvi?", en: "Saisin kahvi?" },
      ],
      correctIndex: 0,
      explanation: {
        fi: "Saisinko…? on kohtelias pyyntö. Anna kahvi! kuulostaa käskyltä.",
        bn: "Saisinko…? একটি ভদ্র অনুরোধ। Anna kahvi! আদেশের মতো শোনায়।",
        en: "Saisinko…? is a polite request. Anna kahvi! sounds like an order.",
      },
    },
    {
      question: {
        fi: "Miten sanotaan 'I don't need a bag'?",
        en: "How do you say 'I don't need a bag'?",
      },
      options: [
        { fi: "En tarvitse kassia.", en: "En tarvitse kassia." },
        { fi: "Minä ei tarvitse kassia.", en: "Minä ei tarvitse kassia." },
        { fi: "En tarvitsen kassia.", en: "En tarvitsen kassia." },
        { fi: "En tarvitse kassi.", en: "En tarvitse kassi." },
      ],
      correctIndex: 0,
      explanation: {
        fi: "Minä → en, tarvitsen → tarvitse, ja kielteisessä lauseessa partitiivi: kassia.",
        bn: "minä → en, tarvitsen → tarvitse, আর না-বাচক বাক্যে partitiivi: kassia।",
        en: "Minä → en, tarvitsen → tarvitse, and in a negative sentence the partitive: kassia.",
      },
    },
    {
      question: {
        fi: "Miten kysytään 'Can I pay in cash?'",
        en: "How do you ask 'Can I pay in cash?'",
      },
      options: [
        { fi: "Voinko maksaa käteisellä?", en: "Voinko maksaa käteisellä?" },
        { fi: "Voinko maksaa käteinen?", en: "Voinko maksaa käteinen?" },
        { fi: "Voin maksaako käteisellä?", en: "Voin maksaako käteisellä?" },
        { fi: "Voinko maksan käteisellä?", en: "Voinko maksan käteisellä?" },
      ],
      correctIndex: 0,
      explanation: {
        fi: "-ko ensimmäiseen verbiin (voinko), infinitiivi maksaa ja valmis fraasi käteisellä.",
        bn: "-ko প্রথম ক্রিয়ায় (voinko), মূল রূপ maksaa এবং তৈরি বাক্যাংশ käteisellä।",
        en: "-ko on the first verb (voinko), the infinitive maksaa and the fixed phrase käteisellä.",
      },
    },
    {
      question: {
        fi: "Täydennä: Ostan kaksi ___. (omena)",
        en: "Fill in: Ostan kaksi ___. (omena)",
      },
      options: [
        { fi: "omena", en: "omena" },
        { fi: "omenaa", en: "omenaa" },
        { fi: "omenat", en: "omenat" },
        { fi: "omenassa", en: "omenassa" },
      ],
      correctIndex: 1,
      explanation: {
        fi: "Luvun 2 jälkeen partitiivi: kaksi omenaa.",
        bn: "২ সংখ্যার পরে partitiivi: kaksi omenaa।",
        en: "After the number 2, the partitive: kaksi omenaa.",
      },
    },
  ],

  summary: {
    fi: "Hinta: Paljonko tämä maksaa? / Paljonko nämä maksavat? – Se maksaa viisi euroa. Määrästä puhutaan partitiivilla: maitoa, vettä, leipää; myös kaksi omenaa, omenoita ja En tarvitse kassia. Kohteliaasti: Haluaisin…, Saisinko…?, Yksi kahvi, kiitos. Maksaminen: Voinko maksaa kortilla / käteisellä? Kahvilassa: Lasku, kiitos. Kiitos, hyvää päivänjatkoa!",
    bn: "দাম: Paljonko tämä maksaa? / Paljonko nämä maksavat? – Se maksaa viisi euroa। পরিমাণ বোঝাতে partitiivi: maitoa, vettä, leipää; আর kaksi omenaa, omenoita ও En tarvitse kassia। ভদ্রভাবে: Haluaisin…, Saisinko…?, Yksi kahvi, kiitos। দাম মেটানো: Voinko maksaa kortilla / käteisellä? ক্যাফেতে: Lasku, kiitos। Kiitos, hyvää päivänjatkoa!",
    en: "Price: Paljonko tämä maksaa? / Paljonko nämä maksavat? – Se maksaa viisi euroa. Amounts use the partitive: maitoa, vettä, leipää; also kaksi omenaa, omenoita and En tarvitse kassia. Politely: Haluaisin…, Saisinko…?, Yksi kahvi, kiitos. Paying: Voinko maksaa kortilla / käteisellä? At a café: Lasku, kiitos. Kiitos, hyvää päivänjatkoa!",
  },
};