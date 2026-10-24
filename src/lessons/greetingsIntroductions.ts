import { Lesson } from "./types";

// Month 2, Lesson 4 — Greetings and Introducing Yourself
// Stable lesson ID: month-2-greetings-introductions (see lessonRegistry.ts)
// Sources: Rafiqul Hyder's genitive material (minun = my) and his
// place-question chart (mistä ↔ -sta, missä ↔ -ssa). Possessive endings
// (nimeni, nimesi) and place endings are taught as fixed phrases here.

export const greetingsIntroductionsLesson: Lesson = {
  slug: "greetings-introductions",
  month: 2,

  title: {
    fi: "Tervehdykset ja esittäytyminen",
    bn: "অভিবাদন ও নিজের পরিচয় দেওয়া",
    en: "Greetings and Introducing Yourself",
  },

  intro: {
    fi: "Tässä oppitunnissa opit tervehtimään, esittäytymään ja käymään lyhyen ensimmäisen keskustelun suomeksi. Käytät jo oppimiasi rakenteita: kysymyksiä, kieltoa ja voida + infinitiivi.",
    bn: "এই পাঠে তুমি অভিবাদন জানানো, নিজের পরিচয় দেওয়া এবং ফিনিশে একটি ছোট প্রথম কথোপকথন চালানো শিখবে। তুমি আগে শেখা গঠনগুলো ব্যবহার করবে: প্রশ্ন, না-বাচক বাক্য এবং voida + মূল রূপ।",
    en: "In this lesson you'll learn to greet people, introduce yourself and have a short first conversation in Finnish. You'll use structures you already know: questions, negation and voida + infinitive.",
  },

  objectives: [
    {
      fi: "Tervehtiä ja hyvästellä tilanteeseen sopivasti.",
      bn: "পরিস্থিতি অনুযায়ী অভিবাদন জানানো ও বিদায় নেওয়া।",
      en: "Greet people and say goodbye in a way that suits the situation.",
    },
    {
      fi: "Kertoa nimensä, kotimaansa, asuinpaikkansa ja kielensä.",
      bn: "নিজের নাম, দেশ, কোথায় থাকো এবং কোন ভাষা বলো তা জানানো।",
      en: "Tell your name, where you're from, where you live and what languages you speak.",
    },
    {
      fi: "Pyytää apua, kun et ymmärrä.",
      bn: "বুঝতে না পারলে সাহায্য চাইতে পারা।",
      en: "Ask for help when you don't understand.",
    },
  ],

  explanation: [
    {
      fi: "Tervehdykset ja muodollisuus: Hei sopii melkein kaikkiin tilanteisiin. Moi, Moikka ja Terve ovat rentoja, ja niitä käytetään tuttujen kanssa. Hyvää päivää on muodollinen, esimerkiksi virastossa tai työhaastattelussa. Hyvää huomenta ja Hyvää iltaa sopivat sekä arkeen että muodollisiin tilanteisiin. Jos et ole varma, sano Hei.",
      bn: "অভিবাদন ও আনুষ্ঠানিকতা: Hei প্রায় সব পরিস্থিতিতে চলে। Moi, Moikka ও Terve অনানুষ্ঠানিক, পরিচিতদের সাথে ব্যবহার হয়। Hyvää päivää আনুষ্ঠানিক, যেমন সরকারি অফিসে বা চাকরির সাক্ষাৎকারে। Hyvää huomenta (সুপ্রভাত) ও Hyvää iltaa (শুভ সন্ধ্যা) দৈনন্দিন ও আনুষ্ঠানিক দুই পরিস্থিতিতেই চলে। নিশ্চিত না হলে Hei বলো।",
      en: "Greetings and formality: Hei works in almost any situation. Moi, Moikka and Terve are casual and used with people you know. Hyvää päivää is formal, for example at a government office or a job interview. Hyvää huomenta and Hyvää iltaa fit both everyday and formal situations. If you're not sure, say Hei.",
    },
    {
      fi: "Hyvästely: Näkemiin on muodollinen. Hei hei, Moi moi ja Moikka ovat rentoja. Kohteliaat sanat: Kiitos. – Ole hyvä. Ole hyvä tarkoittaa sekä 'ole hyvä, ei kestä' että 'tässä, ole hyvä', kun annat jotain. Anteeksi tarkoittaa sekä 'excuse me' että 'sorry'.",
      bn: "বিদায় নেওয়া: Näkemiin আনুষ্ঠানিক। Hei hei, Moi moi ও Moikka অনানুষ্ঠানিক। ভদ্রতার শব্দ: Kiitos (ধন্যবাদ)। – Ole hyvä। Ole hyvä মানে 'স্বাগতম' এবং কিছু দেওয়ার সময় 'এই নাও' — দুটোই। Anteeksi মানে 'মাফ করবেন' এবং 'দুঃখিত' — দুটোই।",
      en: "Saying goodbye: Näkemiin is formal. Hei hei, Moi moi and Moikka are casual. Polite words: Kiitos. – Ole hyvä. Ole hyvä means both 'you're welcome' and 'here you are' when you hand something over. Anteeksi means both 'excuse me' and 'sorry'.",
    },
    {
      fi: "Mitä kuuluu? on tavallinen kysymys tervehdyksen jälkeen. Vastaus on usein lyhyt: Hyvää, kiitos. Entä sinulle? Opettele nämä valmiina fraaseina.",
      bn: "Mitä kuuluu? (কেমন আছ?) অভিবাদনের পর একটি সাধারণ প্রশ্ন। উত্তর প্রায়ই ছোট: Hyvää, kiitos. Entä sinulle? (ভালো, ধন্যবাদ। আর তুমি?) এগুলো তৈরি বাক্যাংশ হিসেবে শিখে নাও।",
      en: "Mitä kuuluu? is a common question after a greeting. The answer is often short: Hyvää, kiitos. Entä sinulle? (Fine, thanks. And you?) Learn these as fixed phrases.",
    },
    {
      fi: "Esittäytyminen: Minun nimeni on Tisa. tai lyhyemmin Olen Tisa. Kysymys on Mikä sinun nimesi on? Lauseessa on päätteet -ni (minun) ja -si (sinun), joita opitaan myöhemmin. Nyt riittää oppia lauseet sellaisinaan.",
      bn: "নিজের পরিচয় দেওয়া: Minun nimeni on Tisa (আমার নাম তিসা)। অথবা আরও ছোট করে Olen Tisa (আমি তিসা)। প্রশ্নটি হলো Mikä sinun nimesi on? (তোমার নাম কী?) বাক্যে -ni (আমার) ও -si (তোমার) প্রত্যয় আছে, যা পরে শেখানো হবে। এখন বাক্যগুলো যেমন আছে তেমন শিখে নিলেই যথেষ্ট।",
      en: "Introducing yourself: Minun nimeni on Tisa. or, shorter, Olen Tisa. The question is Mikä sinun nimesi on? It contains the endings -ni (my) and -si (your), which are taught later. For now, learn the sentences as they are.",
    },
    {
      fi: "Kotimaa vai asuinpaikka? Mistä olet kotoisin? kysyy, mistä tulet: Olen kotoisin Bangladeshista (-sta). Missä asut? kysyy, missä asut nyt: Asun Dhakassa / Asun Suomessa (-ssa). Vastaus sopii kysymyssanaan, kuten kysymysten oppitunnilla opit.",
      bn: "জন্মভূমি নাকি বাসস্থান? Mistä olet kotoisin? জিজ্ঞেস করে তুমি কোথা থেকে এসেছ: Olen kotoisin Bangladeshista (-sta)। Missä asut? জিজ্ঞেস করে তুমি এখন কোথায় থাকো: Asun Dhakassa (আমি ঢাকায় থাকি) / Asun Suomessa (-ssa)। উত্তর প্রশ্নবোধক শব্দের সাথে মিলে যায়, যেমন প্রশ্নের পাঠে শিখেছ।",
      en: "Home country or where you live? Mistä olet kotoisin? asks where you come from: Olen kotoisin Bangladeshista (-sta). Missä asut? asks where you live now: Asun Dhakassa / Asun Suomessa (-ssa). The answer matches the question word, as you learned in the questions lesson.",
    },
    {
      fi: "Kielet: Mitä kieliä puhut? – Puhun bengalia ja englantia. Bengali on kielen tavallinen suomenkielinen nimi, mutta myös banglaa ymmärretään. Puhun vähän suomea.",
      bn: "ভাষা: Mitä kieliä puhut? (তুমি কোন কোন ভাষা বলো?) – Puhun bengalia ja englantia (আমি বাংলা ও ইংরেজি বলি)। ফিনিশে বাংলা ভাষার প্রচলিত নাম bengali, তবে banglaa বললেও বোঝা যায়। Puhun vähän suomea (আমি একটু ফিনিশ বলি)।",
      en: "Languages: Mitä kieliä puhut? – Puhun bengalia ja englantia. Bengali is the usual Finnish name for the language, but banglaa is also understood. Puhun vähän suomea.",
    },
    {
      fi: "Kun suomea on vielä vähän, nämä lauseet auttavat: En puhu vielä hyvin suomea. Ymmärrän vähän. Voitko puhua hitaammin? Voitko toistaa? Niissä on jo opittuja rakenteita: kielto ja voida + infinitiivi.",
      bn: "ফিনিশ এখনো কম জানলে এই বাক্যগুলো কাজে লাগবে: En puhu vielä hyvin suomea (আমি এখনো ভালো ফিনিশ বলতে পারি না)। Ymmärrän vähän (আমি একটু বুঝি)। Voitko puhua hitaammin? (তুমি কি আরও ধীরে বলতে পারো?) Voitko toistaa? (তুমি কি আবার বলতে পারো?) এগুলোতে আগে শেখা গঠন আছে: না-বাচক বাক্য ও voida + মূল রূপ।",
      en: "When your Finnish is still limited, these sentences help: En puhu vielä hyvin suomea. Ymmärrän vähän. Voitko puhua hitaammin? Voitko toistaa? They use structures you already know: negation and voida + infinitive.",
    },
  ],

  // Reuses the lesson table: greetings and polite phrases with formality.
  pronounTable: [
    { fi: "Hei!", en: "Hello! · neutral, any situation", bn: "হ্যালো · যেকোনো পরিস্থিতিতে" },
    { fi: "Moi! / Moikka! / Terve!", en: "Hi! · casual", bn: "হাই · অনানুষ্ঠানিক" },
    { fi: "Hyvää huomenta!", en: "Good morning!", bn: "সুপ্রভাত" },
    { fi: "Hyvää päivää!", en: "Good day! · formal", bn: "শুভ দিন · আনুষ্ঠানিক" },
    { fi: "Hyvää iltaa!", en: "Good evening!", bn: "শুভ সন্ধ্যা" },
    { fi: "Mitä kuuluu? – Hyvää, kiitos.", en: "How are you? – Fine, thanks.", bn: "কেমন আছ? – ভালো, ধন্যবাদ।" },
    { fi: "Hauska tutustua.", en: "Nice to meet you.", bn: "পরিচিত হয়ে ভালো লাগলো।" },
    { fi: "Kiitos. – Ole hyvä.", en: "Thank you. – You're welcome / Here you are.", bn: "ধন্যবাদ। – স্বাগতম / এই নাও।" },
    { fi: "Anteeksi.", en: "Excuse me / Sorry.", bn: "মাফ করবেন / দুঃখিত।" },
    { fi: "Näkemiin!", en: "Goodbye! · formal", bn: "বিদায় · আনুষ্ঠানিক" },
    { fi: "Hei hei! / Moi moi!", en: "Bye! · casual", bn: "বাই · অনানুষ্ঠানিক" },
  ],

  examples: [
    { fi: "Tisa: Hei! Minun nimeni on Tisa. – Mikko: Hei! Olen Mikko. Hauska tutustua.", bn: "তিসা: হাই! আমার নাম তিসা। – মিক্কো: হাই! আমি মিক্কো। পরিচিত হয়ে ভালো লাগলো।", en: "Tisa: Hi! My name is Tisa. – Mikko: Hi! I'm Mikko. Nice to meet you." },
    { fi: "Tisa: Hauska tutustua! Mitä kuuluu? – Mikko: Hyvää, kiitos. Entä sinulle?", bn: "তিসা: পরিচিত হয়ে ভালো লাগলো! কেমন আছ? – মিক্কো: ভালো, ধন্যবাদ। আর তুমি?", en: "Tisa: Nice to meet you! How are you? – Mikko: Fine, thanks. And you?" },
    { fi: "Tisa: Kiitos, hyvää.", bn: "তিসা: ধন্যবাদ, ভালো।", en: "Tisa: Fine, thank you." },
    { fi: "Mikko: Mistä olet kotoisin? – Tisa: Olen kotoisin Bangladeshista.", bn: "মিক্কো: তুমি কোথা থেকে এসেছ? – তিসা: আমি বাংলাদেশ থেকে এসেছি।", en: "Mikko: Where are you from? – Tisa: I'm from Bangladesh." },
    { fi: "Mikko: Missä asut nyt? – Tisa: Asun Dhakassa. Opiskelen suomea.", bn: "মিক্কো: তুমি এখন কোথায় থাকো? – তিসা: আমি ঢাকায় থাকি। আমি ফিনিশ পড়ি।", en: "Mikko: Where do you live now? – Tisa: I live in Dhaka. I study Finnish." },
    { fi: "Opettaja: Hyvää huomenta! – Opiskelijat: Huomenta!", bn: "শিক্ষক: সুপ্রভাত! – শিক্ষার্থীরা: সুপ্রভাত!", en: "Teacher: Good morning! – Students: Morning!" },
    { fi: "Ali: Anteeksi, puhutko englantia? – Anna: Puhun vähän. Entä sinä?", bn: "আলী: মাফ করবেন, তুমি কি ইংরেজি বলো? – আনা: একটু বলি। আর তুমি?", en: "Ali: Excuse me, do you speak English? – Anna: A little. And you?" },
    { fi: "Ali: Puhun bengalia ja englantia. Suomea puhun vielä vähän.", bn: "আলী: আমি বাংলা ও ইংরেজি বলি। ফিনিশ এখনো একটু বলি।", en: "Ali: I speak Bengali and English. I still speak only a little Finnish." },
    { fi: "Anna: Ymmärrätkö minua? – Ali: Ymmärrän vähän. Voitko puhua hitaammin?", bn: "আনা: তুমি কি আমাকে বুঝতে পারছ? – আলী: একটু বুঝি। তুমি কি আরও ধীরে বলতে পারো?", en: "Anna: Do you understand me? – Ali: A little. Can you speak more slowly?" },
    { fi: "Anna: Totta kai! – Ali: Kiitos! – Anna: Ole hyvä. Moi moi!", bn: "আনা: অবশ্যই! – আলী: ধন্যবাদ! – আনা: স্বাগতম। বাই!", en: "Anna: Of course! – Ali: Thanks! – Anna: You're welcome. Bye!" },
  ],

  vocabulary: [
    { fi: "tervehdys", bn: "অভিবাদন", en: "greeting" },
    { fi: "nimi", bn: "নাম", en: "name" },
    { fi: "kieli (kieliä)", bn: "ভাষা", en: "language" },
    { fi: "bengali (bengalia)", bn: "বাংলা ভাষা", en: "Bengali (language)" },
    { fi: "englanti (englantia)", bn: "ইংরেজি ভাষা", en: "English (language)" },
    { fi: "olla kotoisin", bn: "কোথাও থেকে আসা (জন্মস্থান)", en: "to be from (origin)" },
    { fi: "hitaammin", bn: "আরও ধীরে", en: "more slowly" },
    { fi: "toistaa", bn: "আবার বলা / পুনরাবৃত্তি করা", en: "to repeat" },
    { fi: "totta kai", bn: "অবশ্যই", en: "of course" },
    { fi: "hauska tutustua", bn: "পরিচিত হয়ে ভালো লাগলো", en: "nice to meet you" },
  ],

  pronunciation: {
    fi: "Suomi äännetään niin kuin se kirjoitetaan, ja paino on ensimmäisellä tavulla: HY-vää, NÄ-ke-miin. Pitkä ja lyhyt vokaali voivat erottaa sanoja, joten äännä Hyvää-sanan pitkä ää selvästi. Kulttuurivinkki: suomalaiset tervehtivät usein lyhyesti, ja virallisessa esittäytymisessä kätellään.",
    bn: "ফিনিশ যেভাবে লেখা হয় সেভাবেই উচ্চারিত হয়, আর জোর প্রথম সিলেবলে: HY-vää, NÄ-ke-miin। দীর্ঘ ও হ্রস্ব স্বর শব্দের অর্থ বদলে দিতে পারে, তাই Hyvää-র দীর্ঘ ää স্পষ্টভাবে উচ্চারণ করো। সংস্কৃতির টিপস: ফিনিশরা প্রায়ই সংক্ষেপে অভিবাদন জানায়, আর আনুষ্ঠানিক পরিচয়ে করমর্দন করা হয়।",
    en: "Finnish is pronounced the way it is written, and stress is on the first syllable: HY-vää, NÄ-ke-miin. Long and short vowels can change a word, so pronounce the long ää in Hyvää clearly. Culture tip: Finns often greet briefly, and people shake hands in formal introductions.",
  },

  commonMistakes: [
    {
      fi: "Sekoitetaan missä ja mistä: väärin Missä olet kotoisin?, oikein Mistä olet kotoisin?",
      bn: "missä ও mistä গুলিয়ে ফেলা: ভুল Missä olet kotoisin?, সঠিক Mistä olet kotoisin?",
      en: "Mixing up missä and mistä: wrong Missä olet kotoisin?, right Mistä olet kotoisin?",
    },
    {
      fi: "Sekoitetaan kotimaa ja asuinpaikka: väärin Asun Bangladeshista, oikein Asun Bangladeshissa tai Olen kotoisin Bangladeshista.",
      bn: "জন্মভূমি ও বাসস্থান গুলিয়ে ফেলা: ভুল Asun Bangladeshista, সঠিক Asun Bangladeshissa অথবা Olen kotoisin Bangladeshista।",
      en: "Mixing up origin and residence: wrong Asun Bangladeshista, right Asun Bangladeshissa or Olen kotoisin Bangladeshista.",
    },
    {
      fi: "Yhdistetään kysymyssana ja -ko: väärin Mitä puhutko suomea?, oikein Puhutko suomea?",
      bn: "প্রশ্নবোধক শব্দ ও -ko একসাথে ব্যবহার করা: ভুল Mitä puhutko suomea?, সঠিক Puhutko suomea?",
      en: "Combining a question word with -ko: wrong Mitä puhutko suomea?, right Puhutko suomea?",
    },
    {
      fi: "Väärä kielto: väärin En puhun hyvin suomea, oikein En puhu hyvin suomea.",
      bn: "ভুল না-বাচক রূপ: ভুল En puhun hyvin suomea, সঠিক En puhu hyvin suomea।",
      en: "A wrong negative: wrong En puhun hyvin suomea, right En puhu hyvin suomea.",
    },
    {
      fi: "Unohdetaan -ko: väärin Sinä opiskelet suomea?, oikein Opiskeletko suomea?",
      bn: "-ko ভুলে যাওয়া: ভুল Sinä opiskelet suomea?, সঠিক Opiskeletko suomea?",
      en: "Forgetting -ko: wrong Sinä opiskelet suomea?, right Opiskeletko suomea?",
    },
    {
      fi: "Liian rento tervehdys muodollisessa tilanteessa: työhaastattelussa Moikka! on liian rento. Parempi: Hyvää päivää! tai Hei!",
      bn: "আনুষ্ঠানিক পরিস্থিতিতে খুব অনানুষ্ঠানিক অভিবাদন: চাকরির সাক্ষাৎকারে Moikka! খুব অনানুষ্ঠানিক। ভালো: Hyvää päivää! অথবা Hei!",
      en: "A greeting that is too casual for a formal situation: at a job interview, Moikka! is too casual. Better: Hyvää päivää! or Hei!",
    },
    {
      fi: "Unohdetaan -si: väärin Mikä sinun nimi on?, oikein Mikä sinun nimesi on?",
      bn: "-si ভুলে যাওয়া: ভুল Mikä sinun nimi on?, সঠিক Mikä sinun nimesi on?",
      en: "Forgetting -si: wrong Mikä sinun nimi on?, right Mikä sinun nimesi on?",
    },
  ],

  practice: [
    {
      prompt: {
        fi: "Täydennä: Hauska ___!",
        bn: "পূরণ করো: Hauska ___!",
        en: "Complete: Hauska ___!",
      },
      answer: "tutustua",
    },
    {
      prompt: {
        fi: "Vastaa (nimi: Tisa): Mikä sinun nimesi on?",
        bn: "উত্তর দাও (নাম: তিসা): Mikä sinun nimesi on?",
        en: "Answer (name: Tisa): Mikä sinun nimesi on?",
      },
      answer: "Minun nimeni on Tisa. / Olen Tisa.",
    },
    {
      prompt: {
        fi: "Vastaa (Bangladesh): Mistä olet kotoisin?",
        bn: "উত্তর দাও (বাংলাদেশ): Mistä olet kotoisin?",
        en: "Answer (Bangladesh): Mistä olet kotoisin?",
      },
      answer: "Olen kotoisin Bangladeshista.",
    },
    {
      prompt: {
        fi: "Vastaa (Dhaka): Missä asut?",
        bn: "উত্তর দাও (ঢাকা): Missä asut?",
        en: "Answer (Dhaka): Missä asut?",
      },
      answer: "Asun Dhakassa.",
    },
    {
      prompt: {
        fi: "Täydennä kysymyssana: ___ olet kotoisin?",
        bn: "প্রশ্নবোধক শব্দ বসাও: ___ olet kotoisin?",
        en: "Fill in the question word: ___ olet kotoisin?",
      },
      answer: "Mistä",
    },
    {
      prompt: {
        fi: "Muuta kysymykseksi: Sinä puhut suomea.",
        bn: "প্রশ্নে রূপান্তর করো: Sinä puhut suomea.",
        en: "Turn into a question: Sinä puhut suomea.",
      },
      answer: "Puhutko (sinä) suomea?",
    },
    {
      prompt: {
        fi: "Muuta kielteiseksi: Puhun hyvin suomea.",
        bn: "না-বাচক করো: Puhun hyvin suomea.",
        en: "Make it negative: Puhun hyvin suomea.",
      },
      answer: "En puhu hyvin suomea.",
    },
    {
      prompt: {
        fi: "Käännä suomeksi: Can you speak more slowly?",
        bn: "ফিনিশে অনুবাদ করো: তুমি কি আরও ধীরে বলতে পারো?",
        en: "Translate into Finnish: Can you speak more slowly?",
      },
      answer: "Voitko puhua hitaammin?",
    },
    {
      prompt: {
        fi: "Käännä suomeksi: I understand a little.",
        bn: "ফিনিশে অনুবাদ করো: আমি একটু বুঝি।",
        en: "Translate into Finnish: I understand a little.",
      },
      answer: "Ymmärrän vähän.",
    },
    {
      prompt: {
        fi: "Mikä tervehdys sopii työhaastatteluun: Moikka vai Hyvää päivää?",
        bn: "চাকরির সাক্ষাৎকারে কোন অভিবাদন মানানসই: Moikka নাকি Hyvää päivää?",
        en: "Which greeting suits a job interview: Moikka or Hyvää päivää?",
      },
      answer: "Hyvää päivää! (tai Hei!)",
    },
    {
      prompt: {
        fi: "Vastaa: Kiitos!",
        bn: "উত্তর দাও: Kiitos!",
        en: "Respond: Kiitos!",
      },
      answer: "Ole hyvä.",
    },
  ],

  quiz: [
    {
      question: {
        fi: "Mikä hyvästely on muodollinen?",
        en: "Which goodbye is formal?",
      },
      options: [
        { fi: "Näkemiin!", en: "Näkemiin!" },
        { fi: "Moi moi!", en: "Moi moi!" },
        { fi: "Moikka!", en: "Moikka!" },
        { fi: "Hei hei!", en: "Hei hei!" },
      ],
      correctIndex: 0,
      explanation: {
        fi: "Näkemiin on muodollinen. Muut ovat rentoja.",
        bn: "Näkemiin আনুষ্ঠানিক। বাকিগুলো অনানুষ্ঠানিক।",
        en: "Näkemiin is formal. The others are casual.",
      },
    },
    {
      question: {
        fi: "Miten sanotaan 'Nice to meet you'?",
        en: "How do you say 'Nice to meet you'?",
      },
      options: [
        { fi: "Hauska tutustua.", en: "Hauska tutustua." },
        { fi: "Hyvää iltaa.", en: "Hyvää iltaa." },
        { fi: "Ole hyvä.", en: "Ole hyvä." },
        { fi: "Anteeksi.", en: "Anteeksi." },
      ],
      correctIndex: 0,
      explanation: {
        fi: "Hauska tutustua sanotaan, kun tapaa jonkun ensimmäistä kertaa.",
        bn: "কারো সাথে প্রথমবার দেখা হলে Hauska tutustua বলা হয়।",
        en: "Hauska tutustua is said when you meet someone for the first time.",
      },
    },
    {
      question: {
        fi: "Täydennä: ___ olet kotoisin? – Bangladeshista.",
        en: "Fill in: ___ olet kotoisin? – Bangladeshista.",
      },
      options: [
        { fi: "Missä", en: "Missä" },
        { fi: "Mistä", en: "Mistä" },
        { fi: "Mihin", en: "Mihin" },
        { fi: "Mikä", en: "Mikä" },
      ],
      correctIndex: 1,
      explanation: {
        fi: "Kotimaata kysytään mistä-sanalla: Mistä olet kotoisin?",
        bn: "জন্মভূমি জিজ্ঞেস করতে mistä ব্যবহার হয়: Mistä olet kotoisin?",
        en: "Origin is asked with mistä: Mistä olet kotoisin?",
      },
    },
    {
      question: {
        fi: "Mikä lause on oikein?",
        en: "Which sentence is correct?",
      },
      options: [
        { fi: "Asun Dhakassa.", en: "Asun Dhakassa." },
        { fi: "Asun Dhakasta.", en: "Asun Dhakasta." },
        { fi: "Olen kotoisin Dhakassa.", en: "Olen kotoisin Dhakassa." },
        { fi: "Asun kotoisin Dhaka.", en: "Asun kotoisin Dhaka." },
      ],
      correctIndex: 0,
      explanation: {
        fi: "Asuinpaikka: asun + -ssa/-ssä: Asun Dhakassa.",
        bn: "বাসস্থান: asun + -ssa/-ssä: Asun Dhakassa।",
        en: "Where you live: asun + -ssa/-ssä: Asun Dhakassa.",
      },
    },
    {
      question: {
        fi: "Mikä kielteinen lause on oikein?",
        en: "Which negative sentence is correct?",
      },
      options: [
        { fi: "En puhu vielä hyvin suomea.", en: "En puhu vielä hyvin suomea." },
        { fi: "En puhun vielä hyvin suomea.", en: "En puhun vielä hyvin suomea." },
        { fi: "Ei puhu vielä hyvin suomea minä.", en: "Ei puhu vielä hyvin suomea minä." },
        { fi: "En puhua vielä hyvin suomea.", en: "En puhua vielä hyvin suomea." },
      ],
      correctIndex: 0,
      explanation: {
        fi: "Minä → en, ja pääverbi on ilman persoonapäätettä: en puhu.",
        bn: "minä → en, আর মূল ক্রিয়া ব্যক্তিবাচক প্রত্যয় ছাড়া থাকে: en puhu।",
        en: "Minä → en, and the main verb has no personal ending: en puhu.",
      },
    },
    {
      question: {
        fi: "Joku sanoo sinulle 'Kiitos!'. Mitä vastaat?",
        en: "Someone says 'Kiitos!' to you. What do you reply?",
      },
      options: [
        { fi: "Ole hyvä.", en: "Ole hyvä." },
        { fi: "Anteeksi.", en: "Anteeksi." },
        { fi: "Näkemiin.", en: "Näkemiin." },
        { fi: "Hauska tutustua.", en: "Hauska tutustua." },
      ],
      correctIndex: 0,
      explanation: {
        fi: "Kiitokseen vastataan: Ole hyvä.",
        bn: "ধন্যবাদের উত্তরে বলা হয়: Ole hyvä (স্বাগতম)।",
        en: "The reply to thanks is: Ole hyvä.",
      },
    },
  ],

  summary: {
    fi: "Hei sopii kaikkialle; Moi, Moikka ja Terve ovat rentoja; Hyvää päivää ja Näkemiin ovat muodollisia. Esittäydy: Minun nimeni on Tisa / Olen Tisa. Hauska tutustua. Kotimaa: Olen kotoisin Bangladeshista (mistä). Asuinpaikka: Asun Dhakassa (missä). Kielet: Puhun bengalia ja englantia. Jos et ymmärrä: Voitko puhua hitaammin? Voitko toistaa?",
    bn: "Hei সব জায়গায় চলে; Moi, Moikka ও Terve অনানুষ্ঠানিক; Hyvää päivää ও Näkemiin আনুষ্ঠানিক। পরিচয় দাও: Minun nimeni on Tisa / Olen Tisa। Hauska tutustua। জন্মভূমি: Olen kotoisin Bangladeshista (mistä)। বাসস্থান: Asun Dhakassa (missä)। ভাষা: Puhun bengalia ja englantia। না বুঝলে: Voitko puhua hitaammin? Voitko toistaa?",
    en: "Hei works everywhere; Moi, Moikka and Terve are casual; Hyvää päivää and Näkemiin are formal. Introduce yourself: Minun nimeni on Tisa / Olen Tisa. Hauska tutustua. Origin: Olen kotoisin Bangladeshista (mistä). Where you live: Asun Dhakassa (missä). Languages: Puhun bengalia ja englantia. If you don't understand: Voitko puhua hitaammin? Voitko toistaa?",
  },
};