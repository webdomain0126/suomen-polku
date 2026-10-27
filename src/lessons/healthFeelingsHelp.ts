import { Lesson } from "./types";

// Month 2, Lesson 9 — Health, Feelings, and Asking for Help
// Stable lesson ID: month-2-health-feelings-help (see lessonRegistry.ts)
// Rafiqul Hyder's material used where it applies: Minulla on / ei ole
// (partitive and adessive material). Other phrases follow standard
// Finnish; new structures (Minua väsyttää, päänsärkyyn) are fixed phrases.
// This lesson teaches language, not medical advice.

export const healthFeelingsHelpLesson: Lesson = {
  slug: "health-feelings-help",
  month: 2,

  title: {
    fi: "Terveys, tunteet ja avun pyytäminen",
    bn: "স্বাস্থ্য, অনুভূতি ও সাহায্য চাওয়া",
    en: "Health, Feelings, and Asking for Help",
  },

  intro: {
    fi: "Tässä oppitunnissa opit kertomaan, miltä sinusta tuntuu, kuvaamaan yksinkertaisia oireita ja pyytämään apua kohteliaasti. Oppitunti opettaa kieltä, ei anna lääketieteellisiä neuvoja.",
    bn: "এই পাঠে তুমি শিখবে কেমন লাগছে তা বলতে, সহজ উপসর্গের বর্ণনা দিতে এবং ভদ্রভাবে সাহায্য চাইতে। এই পাঠ ভাষা শেখায়, কোনো চিকিৎসা-পরামর্শ দেয় না।",
    en: "In this lesson you'll learn to say how you feel, describe simple symptoms and ask for help politely. The lesson teaches language; it is not medical advice.",
  },

  objectives: [
    {
      fi: "Käyttää terveyteen liittyviä perussanoja.",
      bn: "স্বাস্থ্য-সংক্রান্ত মৌলিক শব্দ ব্যবহার করা।",
      en: "Use basic health vocabulary.",
    },
    {
      fi: "Kertoa, miltä tuntuu (Minulla on päänsärky, Olen väsynyt).",
      bn: "কেমন লাগছে তা বলতে পারা (Minulla on päänsärky, Olen väsynyt)।",
      en: "Say how you feel (Minulla on päänsärky, Olen väsynyt).",
    },
    {
      fi: "Pyytää apua, toistoa ja selitystä kohteliaasti.",
      bn: "ভদ্রভাবে সাহায্য চাওয়া, আবার বলতে বলা ও ব্যাখ্যা চাওয়া।",
      en: "Ask politely for help, repetition and explanation.",
    },
  ],

  explanation: [
    {
      fi: "Oireet ja tuntemukset sanotaan usein rakenteella Minulla on…: Minulla on päänsärky. Minulla on vatsakipu. Minulla on huono olo. Minulla on nälkä. Minulla on jano. Kuume on partitiivissa: Minulla on kuumetta.",
      bn: "উপসর্গ ও শারীরিক অনুভূতি প্রায়ই Minulla on… (আমার আছে…) গঠন দিয়ে বলা হয়: Minulla on päänsärky (আমার মাথাব্যথা)। Minulla on vatsakipu (আমার পেটব্যথা)। Minulla on huono olo (আমার শরীর খারাপ লাগছে)। Minulla on nälkä (আমার খিদে পেয়েছে)। Minulla on jano (আমার তেষ্টা পেয়েছে)। জ্বর partitiivi রূপে থাকে: Minulla on kuumetta (আমার জ্বর)।",
      en: "Symptoms and feelings are often expressed with Minulla on…: Minulla on päänsärky. Minulla on vatsakipu. Minulla on huono olo. Minulla on nälkä. Minulla on jano. Fever is in the partitive: Minulla on kuumetta.",
    },
    {
      fi: "Olla + adjektiivi: Olen kipeä. Olen sairas. Olen väsynyt. Kysymys: Miten voit? – Voin hyvin. / Voin huonosti. Tässä voida tarkoittaa 'to feel', ei 'can'.",
      bn: "olla + বিশেষণ: Olen kipeä (আমি অসুস্থ)। Olen sairas (আমি অসুস্থ)। Olen väsynyt (আমি ক্লান্ত)। প্রশ্ন: Miten voit? (তুমি কেমন বোধ করছ?) – Voin hyvin (ভালো আছি)। / Voin huonosti (ভালো নেই)। এখানে voida মানে 'অনুভব করা / বোধ করা', 'পারা' নয়।",
      en: "Olla + adjective: Olen kipeä. Olen sairas. Olen väsynyt. Question: Miten voit? – Voin hyvin. / Voin huonosti. Here voida means 'to feel', not 'can'.",
    },
    {
      fi: "Minua väsyttää = I feel sleepy. Tässä fraasissa persoona on partitiivissa (minua). Opettele se valmiina fraasina. Yksinkertaisempi vaihtoehto: Olen väsynyt.",
      bn: "Minua väsyttää = আমার ঘুম পাচ্ছে / আমি ক্লান্ত বোধ করছি। এই বাক্যাংশে ব্যক্তি partitiivi রূপে থাকে (minua)। এটি তৈরি বাক্যাংশ হিসেবে শিখে নাও। সহজ বিকল্প: Olen väsynyt (আমি ক্লান্ত)।",
      en: "Minua väsyttää = I feel sleepy. In this phrase the person is in the partitive (minua). Learn it as a fixed phrase. A simpler alternative: Olen väsynyt.",
    },
    {
      fi: "Tunteet: Olen iloinen. Olen surullinen. Olen hermostunut. Olen stressaantunut. Kysy toiselta: Onko kaikki hyvin?",
      bn: "অনুভূতি: Olen iloinen (আমি খুশি)। Olen surullinen (আমি দুঃখিত / মন খারাপ)। Olen hermostunut (আমি নার্ভাস)। Olen stressaantunut (আমি চাপে আছি)। অন্যকে জিজ্ঞেস করো: Onko kaikki hyvin? (সব ঠিক আছে তো?)",
      en: "Feelings: Olen iloinen. Olen surullinen. Olen hermostunut. Olen stressaantunut. Ask someone else: Onko kaikki hyvin? (Is everything OK?)",
    },
    {
      fi: "Avun pyytäminen: Tarvitsen apua. Voitko auttaa minua? Kohteliaammin: Voitteko auttaa? En ymmärrä. Voitko toistaa? Voitko puhua hitaammin? Voitko selittää? Mitä tämä tarkoittaa? Miten sanotaan … suomeksi? Missä on terveysasema?",
      bn: "সাহায্য চাওয়া: Tarvitsen apua (আমার সাহায্য দরকার)। Voitko auttaa minua? (তুমি কি আমাকে সাহায্য করতে পারো?) আরও ভদ্রভাবে: Voitteko auttaa? (আপনি কি সাহায্য করতে পারেন?) En ymmärrä (আমি বুঝতে পারছি না)। Voitko toistaa? (আবার বলতে পারো?) Voitko puhua hitaammin? (আরও ধীরে বলতে পারো?) Voitko selittää? (বুঝিয়ে বলতে পারো?) Mitä tämä tarkoittaa? (এর মানে কী?) Miten sanotaan … suomeksi? (ফিনিশে … কীভাবে বলে?) Missä on terveysasema? (স্বাস্থ্যকেন্দ্র কোথায়?)",
      en: "Asking for help: Tarvitsen apua. Voitko auttaa minua? More politely: Voitteko auttaa? En ymmärrä. Voitko toistaa? Voitko puhua hitaammin? Voitko selittää? Mitä tämä tarkoittaa? Miten sanotaan … suomeksi? Missä on terveysasema?",
    },
    {
      fi: "Apteekissa: Tarvitsen jotain päänsärkyyn. Onko teillä jotain flunssaan? Tarvitsenko reseptin? Miten tätä käytetään? Nämä ovat valmiita fraaseja. Lue aina lääkkeen ohje ja kysy farmaseutilta, jos et ole varma.",
      bn: "ফার্মেসিতে: Tarvitsen jotain päänsärkyyn (মাথাব্যথার জন্য কিছু দরকার)। Onko teillä jotain flunssaan? (সর্দি-জ্বরের জন্য কিছু আছে?) Tarvitsenko reseptin? (আমার কি প্রেসক্রিপশন লাগবে?) Miten tätä käytetään? (এটা কীভাবে ব্যবহার করতে হয়?) এগুলো তৈরি বাক্যাংশ। সবসময় ওষুধের নির্দেশনা পড়ো, আর নিশ্চিত না হলে ফার্মাসিস্টকে জিজ্ঞেস করো।",
      en: "At the pharmacy: Tarvitsen jotain päänsärkyyn. Onko teillä jotain flunssaan? Tarvitsenko reseptin? Miten tätä käytetään? These are fixed phrases. Always read the medicine's instructions and ask the pharmacist if you're not sure.",
    },
    {
      fi: "Tärkeää tietoa: hätätilanteessa soita numeroon 112. Kiireettömissä asioissa ota yhteyttä omaan terveysasemaan. Voit kysyä: Puhutteko englantia? tai pyytää tulkkia: Tarvitsen tulkin.",
      bn: "গুরুত্বপূর্ণ তথ্য: জরুরি অবস্থায় 112 নম্বরে ফোন করো। জরুরি নয় এমন বিষয়ে নিজের স্বাস্থ্যকেন্দ্রে (terveysasema) যোগাযোগ করো। তুমি জিজ্ঞেস করতে পারো: Puhutteko englantia? (আপনি কি ইংরেজি বলেন?) অথবা দোভাষী চাইতে পারো: Tarvitsen tulkin (আমার একজন দোভাষী দরকার)।",
      en: "Important: in an emergency, call 112. For non-urgent matters, contact your own health centre (terveysasema). You can ask: Puhutteko englantia? or ask for an interpreter: Tarvitsen tulkin.",
    },
  ],

  // Reuses the lesson table: basic health vocabulary.
  pronounTable: [
    { fi: "pää / päänsärky", en: "head / headache", bn: "মাথা / মাথাব্যথা" },
    { fi: "vatsa / vatsakipu", en: "stomach / stomach ache", bn: "পেট / পেটব্যথা" },
    { fi: "kurkku / kurkkukipu", en: "throat / sore throat", bn: "গলা / গলাব্যথা" },
    { fi: "selkä / selkäkipu", en: "back / back pain", bn: "পিঠ / পিঠব্যথা" },
    { fi: "hammas / hammassärky", en: "tooth / toothache", bn: "দাঁত / দাঁতব্যথা" },
    { fi: "kipu / kuume", en: "pain / fever", bn: "ব্যথা / জ্বর" },
    { fi: "lääkäri / sairaanhoitaja", en: "doctor / nurse", bn: "ডাক্তার / নার্স" },
    { fi: "apteekki / lääke", en: "pharmacy / medicine", bn: "ফার্মেসি / ওষুধ" },
    { fi: "kipeä / sairas", en: "sick, ill", bn: "অসুস্থ" },
    { fi: "väsynyt / terve", en: "tired / healthy", bn: "ক্লান্ত / সুস্থ" },
    { fi: "nälkä / jano", en: "hunger / thirst", bn: "খিদে / তেষ্টা" },
  ],

  examples: [
    { fi: "Minulla on huono olo.", bn: "আমার শরীর খারাপ লাগছে।", en: "I feel unwell." },
    { fi: "Minua väsyttää.", bn: "আমার ঘুম পাচ্ছে।", en: "I feel sleepy." },
    { fi: "Minulla on nälkä ja jano.", bn: "আমার খিদে আর তেষ্টা পেয়েছে।", en: "I'm hungry and thirsty." },
    { fi: "Hoitaja: Miten voin auttaa? – Rahim: Minulla on huono olo. Minulla on päänsärky ja kuumetta.", bn: "নার্স: কীভাবে সাহায্য করতে পারি? – রহিম: আমার শরীর খারাপ লাগছে। আমার মাথাব্যথা আর জ্বর।", en: "Nurse: How can I help? – Rahim: I feel unwell. I have a headache and a fever." },
    { fi: "Hoitaja: Onko sinulla kurkkukipua? – Rahim: On, vähän.", bn: "নার্স: তোমার কি গলাব্যথা আছে? – রহিম: আছে, একটু।", en: "Nurse: Do you have a sore throat? – Rahim: Yes, a little." },
    { fi: "Hoitaja: Lääkäri voi tavata sinut huomenna kello yhdeksän. – Rahim: Sopii hyvin. Kiitos.", bn: "নার্স: ডাক্তার আগামীকাল নয়টায় তোমাকে দেখতে পারবেন। – রহিম: খুব ভালো। ধন্যবাদ।", en: "Nurse: The doctor can see you tomorrow at nine. – Rahim: That's fine. Thank you." },
    { fi: "Tisa: Hei, tarvitsen jotain päänsärkyyn. – Farmaseutti: Onko sinulla muita oireita?", bn: "তিসা: হাই, মাথাব্যথার জন্য কিছু দরকার। – ফার্মাসিস্ট: তোমার কি অন্য কোনো উপসর্গ আছে?", en: "Tisa: Hi, I need something for a headache. – Pharmacist: Do you have any other symptoms?" },
    { fi: "Tisa: Ei ole. Olen vain väsynyt. – Farmaseutti: Tämä voi auttaa. Lue ohje pakkauksesta.", bn: "তিসা: নেই। আমি শুধু ক্লান্ত। – ফার্মাসিস্ট: এটা কাজে আসতে পারে। প্যাকেটের নির্দেশনা পড়ে নিও।", en: "Tisa: No. I'm just tired. – Pharmacist: This may help. Read the instructions on the package." },
    { fi: "Tisa: Tarvitsenko reseptin? – Farmaseutti: Et tarvitse.", bn: "তিসা: আমার কি প্রেসক্রিপশন লাগবে? – ফার্মাসিস্ট: লাগবে না।", en: "Tisa: Do I need a prescription? – Pharmacist: No, you don't." },
    { fi: "Ali: Anteeksi, en ymmärrä. Voitko toistaa? – Anna: Totta kai. Bussi lähtee kello kaksi.", bn: "আলী: মাফ করবেন, আমি বুঝতে পারছি না। আবার বলতে পারো? – আনা: অবশ্যই। বাস দুইটায় ছাড়বে।", en: "Ali: Sorry, I don't understand. Can you repeat? – Anna: Of course. The bus leaves at two." },
    { fi: "Ali: Voitko puhua vähän hitaammin? – Anna: Bussi… lähtee… kello kaksi.", bn: "আলী: একটু ধীরে বলতে পারো? – আনা: বাস… ছাড়বে… দুইটায়।", en: "Ali: Can you speak a little more slowly? – Anna: The bus… leaves… at two." },
    { fi: "Ali: Kiitos! Mitä 'lähtee' tarkoittaa? – Anna: Se tarkoittaa 'leaves'.", bn: "আলী: ধন্যবাদ! 'lähtee' মানে কী? – আনা: এর মানে 'ছাড়ে / রওনা দেয়'।", en: "Ali: Thanks! What does 'lähtee' mean? – Anna: It means 'leaves'." },
  ],

  vocabulary: [
    { fi: "terveys", bn: "স্বাস্থ্য", en: "health" },
    { fi: "terveysasema", bn: "স্বাস্থ্যকেন্দ্র", en: "health centre" },
    { fi: "huono olo", bn: "শরীর খারাপ লাগা", en: "feeling unwell" },
    { fi: "oire (oireita)", bn: "উপসর্গ", en: "symptom" },
    { fi: "resepti", bn: "প্রেসক্রিপশন", en: "prescription" },
    { fi: "flunssa", bn: "সর্দি-জ্বর / ফ্লু", en: "cold, flu" },
    { fi: "apu (apua)", bn: "সাহায্য", en: "help" },
    { fi: "auttaa (autan)", bn: "সাহায্য করা", en: "to help" },
    { fi: "toistaa", bn: "আবার বলা", en: "to repeat" },
    { fi: "selittää", bn: "বুঝিয়ে বলা / ব্যাখ্যা করা", en: "to explain" },
    { fi: "tulkki", bn: "দোভাষী", en: "interpreter" },
    { fi: "iloinen / surullinen", bn: "খুশি / দুঃখিত (মন খারাপ)", en: "happy / sad" },
    { fi: "hermostunut / stressaantunut", bn: "নার্ভাস / চাপে আছে এমন", en: "nervous / stressed" },
    { fi: "Miten voit?", bn: "তুমি কেমন বোধ করছ?", en: "How are you feeling?" },
  ],

  pronunciation: {
    fi: "Kiinnitä huomiota pitkiin äänteisiin: päänsärky (ää), hammas (mm), kurkku (kk), apteekki (ee, kk), lääkäri (ää). Paino on ensimmäisellä tavulla: LÄÄ-kä-ri, TER-veys-a-se-ma. Puhumisvinkki: opettele ulkoa kolme lausetta hätää varten: Tarvitsen apua. En ymmärrä. Voitko puhua hitaammin?",
    bn: "দীর্ঘ ধ্বনিগুলোর দিকে খেয়াল রাখো: päänsärky (ää), hammas (mm), kurkku (kk), apteekki (ee, kk), lääkäri (ää)। জোর প্রথম সিলেবলে: LÄÄ-kä-ri, TER-veys-a-se-ma। কথা বলার টিপস: প্রয়োজনের সময়ের জন্য তিনটি বাক্য মুখস্থ করে রাখো: Tarvitsen apua। En ymmärrä। Voitko puhua hitaammin?",
    en: "Pay attention to the long sounds: päänsärky (ää), hammas (mm), kurkku (kk), apteekki (ee, kk), lääkäri (ää). Stress is on the first syllable: LÄÄ-kä-ri, TER-veys-a-se-ma. Speaking tip: memorise three sentences for when you need help: Tarvitsen apua. En ymmärrä. Voitko puhua hitaammin?",
  },

  commonMistakes: [
    {
      fi: "Väärä omistusrakenne: väärin Minä on päänsärky, oikein Minulla on päänsärky.",
      bn: "ভুল 'আছে' গঠন: ভুল Minä on päänsärky, সঠিক Minulla on päänsärky।",
      en: "The wrong 'have' structure: wrong Minä on päänsärky, right Minulla on päänsärky.",
    },
    {
      fi: "Olla väärässä merkityksessä: Olen päänsärky tarkoittaa 'I am a headache'. Oikein: Minulla on päänsärky.",
      bn: "olla ভুল অর্থে: Olen päänsärky মানে 'আমি একটি মাথাব্যথা'। সঠিক: Minulla on päänsärky।",
      en: "Olla with the wrong meaning: Olen päänsärky means 'I am a headache'. Right: Minulla on päänsärky.",
    },
    {
      fi: "Väärä muoto fraasissa: väärin Minä väsyttää, oikein Minua väsyttää (tai Olen väsynyt).",
      bn: "বাক্যাংশে ভুল রূপ: ভুল Minä väsyttää, সঠিক Minua väsyttää (অথবা Olen väsynyt)।",
      en: "A wrong form in the phrase: wrong Minä väsyttää, right Minua väsyttää (or Olen väsynyt).",
    },
    {
      fi: "Sekoitetaan rakenteet: väärin Minulla on nälkäinen, oikein Minulla on nälkä tai Olen nälkäinen.",
      bn: "দুটি গঠন মিশিয়ে ফেলা: ভুল Minulla on nälkäinen, সঠিক Minulla on nälkä অথবা Olen nälkäinen।",
      en: "Mixing two structures: wrong Minulla on nälkäinen, right Minulla on nälkä or Olen nälkäinen.",
    },
    {
      fi: "Väärä kielto: väärin En ymmärrän, oikein En ymmärrä.",
      bn: "ভুল না-বাচক রূপ: ভুল En ymmärrän, সঠিক En ymmärrä।",
      en: "A wrong negative: wrong En ymmärrän, right En ymmärrä.",
    },
    {
      fi: "Väärä objektin muoto: väärin Voitko auttaa minä?, oikein Voitko auttaa minua?",
      bn: "কর্মের ভুল রূপ: ভুল Voitko auttaa minä?, সঠিক Voitko auttaa minua?",
      en: "The wrong object form: wrong Voitko auttaa minä?, right Voitko auttaa minua?",
    },
    {
      fi: "-ko kahteen kertaan: väärin Voitko toistaako?, oikein Voitko toistaa? (-ko vain ensimmäiseen verbiin).",
      bn: "দুবার -ko: ভুল Voitko toistaako?, সঠিক Voitko toistaa? (-ko শুধু প্রথম ক্রিয়ায়)।",
      en: "-ko twice: wrong Voitko toistaako?, right Voitko toistaa? (-ko only on the first verb).",
    },
  ],

  practice: [
    {
      prompt: {
        fi: "Mitä tarkoittaa 'pää'?",
        bn: "'pää' মানে কী?",
        en: "What does 'pää' mean?",
      },
      answer: "head — মাথা",
    },
    {
      prompt: {
        fi: "Täydennä: Minulla ___ päänsärky.",
        bn: "পূরণ করো: Minulla ___ päänsärky.",
        en: "Complete: Minulla ___ päänsärky.",
      },
      answer: "on",
    },
    {
      prompt: {
        fi: "Täydennä (minä): ___ väsyttää.",
        bn: "পূরণ করো (minä): ___ väsyttää.",
        en: "Complete (minä): ___ väsyttää.",
      },
      answer: "Minua",
    },
    {
      prompt: {
        fi: "Käännä suomeksi: I'm hungry.",
        bn: "ফিনিশে অনুবাদ করো: আমার খিদে পেয়েছে।",
        en: "Translate into Finnish: I'm hungry.",
      },
      answer: "Minulla on nälkä.",
    },
    {
      prompt: {
        fi: "Käännä suomeksi: I need help.",
        bn: "ফিনিশে অনুবাদ করো: আমার সাহায্য দরকার।",
        en: "Translate into Finnish: I need help.",
      },
      answer: "Tarvitsen apua.",
    },
    {
      prompt: {
        fi: "Käännä suomeksi: Can you help me?",
        bn: "ফিনিশে অনুবাদ করো: তুমি কি আমাকে সাহায্য করতে পারো?",
        en: "Translate into Finnish: Can you help me?",
      },
      answer: "Voitko auttaa minua?",
    },
    {
      prompt: {
        fi: "Muuta kielteiseksi: Ymmärrän.",
        bn: "না-বাচক করো: Ymmärrän.",
        en: "Make it negative: Ymmärrän.",
      },
      answer: "En ymmärrä.",
    },
    {
      prompt: {
        fi: "Pyydä kohteliaasti, että toinen puhuu hitaammin.",
        bn: "ভদ্রভাবে অনুরোধ করো যেন অন্যজন আরও ধীরে বলে।",
        en: "Politely ask someone to speak more slowly.",
      },
      answer: "Voitko puhua hitaammin? (Voitteko puhua hitaammin?)",
    },
    {
      prompt: {
        fi: "Olet apteekissa ja sinulla on päänsärky. Mitä sanot?",
        bn: "তুমি ফার্মেসিতে আছ, তোমার মাথাব্যথা। কী বলবে?",
        en: "You're at a pharmacy and you have a headache. What do you say?",
      },
      answer: "Tarvitsen jotain päänsärkyyn.",
    },
    {
      prompt: {
        fi: "Vastaa (huonosti, kipeä): Miten voit?",
        bn: "উত্তর দাও (ভালো নেই, অসুস্থ): Miten voit?",
        en: "Answer (not well, sick): Miten voit?",
      },
      answer: "Voin huonosti. Olen kipeä.",
    },
    {
      prompt: {
        fi: "Mihin numeroon soitat hätätilanteessa Suomessa?",
        bn: "ফিনল্যান্ডে জরুরি অবস্থায় কোন নম্বরে ফোন করবে?",
        en: "Which number do you call in an emergency in Finland?",
      },
      answer: "112",
    },
    {
      prompt: {
        fi: "Kysy sanan merkitystä (sana: resepti).",
        bn: "শব্দের মানে জিজ্ঞেস করো (শব্দ: resepti)।",
        en: "Ask what a word means (word: resepti).",
      },
      answer: "Mitä 'resepti' tarkoittaa?",
    },
  ],

  quiz: [
    {
      question: {
        fi: "Miten sanotaan 'I have a headache'?",
        en: "How do you say 'I have a headache'?",
      },
      options: [
        { fi: "Minulla on päänsärky.", en: "Minulla on päänsärky." },
        { fi: "Minä on päänsärky.", en: "Minä on päänsärky." },
        { fi: "Olen päänsärky.", en: "Olen päänsärky." },
        { fi: "Minulla ole päänsärky.", en: "Minulla ole päänsärky." },
      ],
      correctIndex: 0,
      explanation: {
        fi: "Oireet sanotaan rakenteella Minulla on: Minulla on päänsärky.",
        bn: "উপসর্গ বলা হয় Minulla on গঠন দিয়ে: Minulla on päänsärky।",
        en: "Symptoms use the structure Minulla on: Minulla on päänsärky.",
      },
    },
    {
      question: {
        fi: "Miten sanotaan 'I feel sleepy'?",
        en: "How do you say 'I feel sleepy'?",
      },
      options: [
        { fi: "Minua väsyttää.", en: "Minua väsyttää." },
        { fi: "Minä väsyttää.", en: "Minä väsyttää." },
        { fi: "Minulla väsyttää.", en: "Minulla väsyttää." },
        { fi: "Minua väsyttävät.", en: "Minua väsyttävät." },
      ],
      correctIndex: 0,
      explanation: {
        fi: "Valmis fraasi: Minua väsyttää (persoona partitiivissa).",
        bn: "তৈরি বাক্যাংশ: Minua väsyttää (ব্যক্তি partitiivi রূপে)।",
        en: "A fixed phrase: Minua väsyttää (the person in the partitive).",
      },
    },
    {
      question: {
        fi: "Miten kysytään 'Can you help me?'",
        en: "How do you ask 'Can you help me?'",
      },
      options: [
        { fi: "Voitko auttaa minua?", en: "Voitko auttaa minua?" },
        { fi: "Voitko auttaa minä?", en: "Voitko auttaa minä?" },
        { fi: "Voitko autat minua?", en: "Voitko autat minua?" },
        { fi: "Voit auttaako minua?", en: "Voit auttaako minua?" },
      ],
      correctIndex: 0,
      explanation: {
        fi: "-ko ensimmäiseen verbiin, infinitiivi auttaa ja objekti minua.",
        bn: "-ko প্রথম ক্রিয়ায়, মূল রূপ auttaa এবং কর্ম minua।",
        en: "-ko on the first verb, the infinitive auttaa and the object minua.",
      },
    },
    {
      question: {
        fi: "Miten sanotaan 'I'm hungry'?",
        en: "How do you say 'I'm hungry'?",
      },
      options: [
        { fi: "Minulla on nälkä.", en: "Minulla on nälkä." },
        { fi: "Minulla on nälkäinen.", en: "Minulla on nälkäinen." },
        { fi: "Olen nälkä.", en: "Olen nälkä." },
        { fi: "Minä nälkä.", en: "Minä nälkä." },
      ],
      correctIndex: 0,
      explanation: {
        fi: "Minulla on nälkä (tai Olen nälkäinen). Rakenteita ei sekoiteta.",
        bn: "Minulla on nälkä (অথবা Olen nälkäinen)। দুটি গঠন মেশানো যায় না।",
        en: "Minulla on nälkä (or Olen nälkäinen). The two structures are not mixed.",
      },
    },
    {
      question: {
        fi: "Mikä on hätänumero Suomessa?",
        en: "What is the emergency number in Finland?",
      },
      options: [
        { fi: "112", en: "112" },
        { fi: "911", en: "911" },
        { fi: "999", en: "999" },
        { fi: "100", en: "100" },
      ],
      correctIndex: 0,
      explanation: {
        fi: "Suomen hätänumero on 112.",
        bn: "ফিনল্যান্ডের জরুরি নম্বর 112।",
        en: "The emergency number in Finland is 112.",
      },
    },
    {
      question: {
        fi: "Mikä kielteinen lause on oikein?",
        en: "Which negative sentence is correct?",
      },
      options: [
        { fi: "En ymmärrä.", en: "En ymmärrä." },
        { fi: "En ymmärrän.", en: "En ymmärrän." },
        { fi: "Minä ei ymmärrä.", en: "Minä ei ymmärrä." },
        { fi: "En ymmärtää.", en: "En ymmärtää." },
      ],
      correctIndex: 0,
      explanation: {
        fi: "Minä → en, ja ymmärrän → ymmärrä: en ymmärrä.",
        bn: "minä → en, আর ymmärrän → ymmärrä: en ymmärrä।",
        en: "Minä → en, and ymmärrän → ymmärrä: en ymmärrä.",
      },
    },
  ],

  summary: {
    fi: "Oireet: Minulla on päänsärky / vatsakipu / huono olo / kuumetta / nälkä / jano. Olen kipeä / väsynyt. Minua väsyttää on valmis fraasi. Miten voit? – Voin hyvin / huonosti. Apu: Tarvitsen apua. Voitko auttaa minua? En ymmärrä. Voitko toistaa / puhua hitaammin / selittää? Apteekissa: Tarvitsen jotain päänsärkyyn. Hätätilanteessa: 112.",
    bn: "উপসর্গ: Minulla on päänsärky / vatsakipu / huono olo / kuumetta / nälkä / jano। Olen kipeä / väsynyt। Minua väsyttää একটি তৈরি বাক্যাংশ। Miten voit? – Voin hyvin / huonosti। সাহায্য: Tarvitsen apua। Voitko auttaa minua? En ymmärrä। Voitko toistaa / puhua hitaammin / selittää? ফার্মেসিতে: Tarvitsen jotain päänsärkyyn। জরুরি অবস্থায়: 112।",
    en: "Symptoms: Minulla on päänsärky / vatsakipu / huono olo / kuumetta / nälkä / jano. Olen kipeä / väsynyt. Minua väsyttää is a fixed phrase. Miten voit? – Voin hyvin / huonosti. Help: Tarvitsen apua. Voitko auttaa minua? En ymmärrä. Voitko toistaa / puhua hitaammin / selittää? At the pharmacy: Tarvitsen jotain päänsärkyyn. In an emergency: 112.",
  },
};