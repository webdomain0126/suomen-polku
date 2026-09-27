import { Lesson } from "./types";

// Month 1 — Olla (To Be) & Basic Sentences
// Stable lesson ID: month-1-olla-basic-sentences (see lessonRegistry.ts)

export const ollaLesson: Lesson = {
  slug: "olla-basic-sentences",
  month: 1,

  title: {
    fi: "Olla ja peruslauseet",
    bn: "Olla ক্রিয়া ও মৌলিক বাক্য",
    en: "Olla (To Be) & Basic Sentences",
  },

  intro: {
    fi: "Olla on suomen tärkein verbi. Sen avulla voit kertoa, kuka olet, millainen jokin on ja missä jokin on. Tässä oppitunnissa opit olla-verbin preesensmuodot ja teet ensimmäiset omat lauseesi.",
    bn: "olla হলো ফিনিশ ভাষার 'হওয়া / থাকা' অর্থের সবচেয়ে গুরুত্বপূর্ণ ক্রিয়া। এটি দিয়ে তুমি বলতে পারো তুমি কে, কোনো কিছু কেমন, আর কোনো কিছু কোথায় আছে। এই পাঠে তুমি olla-র বর্তমান কালের রূপগুলো শিখবে এবং নিজের প্রথম বাক্য তৈরি করবে।",
    en: "Olla is the most important verb in Finnish. With it you can say who you are, what something is like and where something is. In this lesson you'll learn the present-tense forms of olla and make your first sentences.",
  },

  objectives: [
    {
      fi: "Ymmärtää, mitä olla tarkoittaa, ja osata sen preesensmuodot.",
      bn: "olla-র অর্থ বোঝা এবং এর বর্তমান কালের রূপগুলো জানা।",
      en: "Understand what olla means and know its present-tense forms.",
    },
    {
      fi: "Muodostaa yksinkertaisia myönteisiä lauseita.",
      bn: "সহজ হ্যাঁ-বাচক বাক্য তৈরি করতে পারা।",
      en: "Form simple affirmative sentences.",
    },
    {
      fi: "Kysyä yksinkertaisia kysymyksiä -ko/-kö-päätteen avulla.",
      bn: "-ko/-kö প্রত্যয় দিয়ে সহজ প্রশ্ন করতে পারা।",
      en: "Ask simple questions using the -ko/-kö ending.",
    },
    {
      fi: "Tunnistaa kielteinen lause.",
      bn: "না-বাচক বাক্য চিনতে পারা।",
      en: "Recognise a negative sentence.",
    },
  ],

  explanation: [
    {
      fi: "Olla vastaa englannin verbejä am, is ja are. Suomessa verbin muoto vaihtuu sen mukaan, kuka tekee: minä olen, sinä olet, hän on.",
      bn: "olla হলো ফিনিশ ভাষার 'হওয়া / থাকা' অর্থের একটি গুরুত্বপূর্ণ ক্রিয়া। ইংরেজির am, is, are-এর মতো এর রূপও কর্তা অনুযায়ী বদলায়: minä olen, sinä olet, hän on।",
      en: "Olla corresponds to English am, is and are. In Finnish the verb form changes depending on who is doing it: minä olen, sinä olet, hän on.",
    },
    {
      fi: "Yksikössä on neljä muotoa: minä olen, sinä olet, hän on ja se on. Monikossa on neljä muotoa: me olemme, te olette, he ovat ja ne ovat. Hän ja se käyttävät samaa muotoa on, ja he ja ne samaa muotoa ovat.",
      bn: "একবচনে চারটি রূপ: minä olen, sinä olet, hän on ও se on। বহুবচনে চারটি রূপ: me olemme, te olette, he ovat ও ne ovat। hän ও se একই রূপ on ব্যবহার করে, আর he ও ne একই রূপ ovat ব্যবহার করে।",
      en: "In the singular there are four forms: minä olen, sinä olet, hän on and se on. In the plural there are four: me olemme, te olette, he ovat and ne ovat. Hän and se share the form on, and he and ne share the form ovat.",
    },
    {
      fi: "Pronominit minä, sinä, me ja te jätetään usein pois, koska verbin pääte kertoo jo, kuka on kyseessä: Olen opiskelija tarkoittaa samaa kuin Minä olen opiskelija. Pronominia hän ei jätetä pois.",
      bn: "minä, sinä, me ও te সর্বনামগুলো প্রায়ই বাদ দেওয়া হয়, কারণ ক্রিয়ার শেষাংশ থেকেই বোঝা যায় কর্তা কে: Olen opiskelija মানে Minä olen opiskelija। কিন্তু hän বাদ দেওয়া হয় না।",
      en: "The pronouns minä, sinä, me and te are often left out, because the verb ending already shows who is meant: Olen opiskelija means the same as Minä olen opiskelija. The pronoun hän is not left out.",
    },
    {
      fi: "Peruslauseen järjestys on: subjekti + verbi + täydennys. Täydennys voi olla substantiivi (Minä olen opiskelija), adjektiivi (Kahvi on hyvä) tai paikka (Me olemme Suomessa).",
      bn: "মৌলিক বাক্যের ক্রম হলো: কর্তা + ক্রিয়া + পরিপূরক। পরিপূরক হতে পারে একটি বিশেষ্য (Minä olen opiskelija), একটি বিশেষণ (Kahvi on hyvä), অথবা একটি স্থান (Me olemme Suomessa)।",
      en: "The basic sentence order is: subject + verb + complement. The complement can be a noun (Minä olen opiskelija), an adjective (Kahvi on hyvä) or a place (Me olemme Suomessa).",
    },
    {
      fi: "Vertaa bengaliin: bengalissa verbi tulee yleensä lauseen loppuun, ja preesensissä 'olla' jätetään usein kokonaan pois. Suomessa verbi tulee subjektin jälkeen, ja olla tarvitaan aina. Suomessa ei myöskään ole artikkeleita, joten opiskelija voi tarkoittaa 'a student' tai 'the student'.",
      bn: "বাংলার সাথে তুলনা করো: বাংলায় ক্রিয়া সাধারণত বাক্যের শেষে আসে, আর বর্তমান কালে 'হওয়া' প্রায়ই বলাই হয় না ('আমি শিক্ষার্থী')। ফিনিশে ক্রিয়া কর্তার ঠিক পরে আসে, এবং olla সবসময় লাগে। ফিনিশে ইংরেজির মতো 'a / the'-ও নেই।",
      en: "Compare with Bengali: in Bengali the verb usually comes at the end, and 'to be' is often left out in the present tense. In Finnish the verb comes right after the subject, and olla is always needed. Finnish also has no articles, so opiskelija can mean 'a student' or 'the student'.",
    },
    {
      fi: "Monikon lauseissa täydennys on usein muodossa, jota kutsutaan partitiiviksi: Me olemme opiskelijoita, He ovat ystäviä. Partitiivi opitaan myöhemmin. Nyt riittää tunnistaa nämä muodot.",
      bn: "বহুবচনের বাক্যে পরিপূরক প্রায়ই একটি বিশেষ রূপে থাকে, যাকে partitiivi বলে: Me olemme opiskelijoita, He ovat ystäviä। এই রূপটি পরে শেখানো হবে; এখন শুধু চিনে রাখলেই যথেষ্ট।",
      en: "In plural sentences the complement is often in a form called the partitive: Me olemme opiskelijoita, He ovat ystäviä. The partitive is taught later. For now, it's enough to recognise these forms.",
    },
    {
      fi: "Kyllä/ei-kysymys tehdään siirtämällä verbi lauseen alkuun ja lisäämällä siihen pääte -ko tai -kö: Sinä olet opiskelija. → Oletko opiskelija? Olla-verbin kanssa pääte on aina -ko. Pääte -kö tulee sanoihin, joissa on ä, ö tai y.",
      bn: "হ্যাঁ/না প্রশ্ন তৈরি করতে ক্রিয়াটিকে বাক্যের শুরুতে আনা হয় এবং এর সাথে -ko বা -kö যোগ করা হয়: Sinä olet opiskelija. → Oletko opiskelija? (তুমি কি শিক্ষার্থী?) olla-র সাথে সবসময় -ko বসে। -kö বসে সেসব শব্দে, যেখানে ä, ö বা y আছে।",
      en: "A yes/no question is made by moving the verb to the start of the sentence and adding the ending -ko or -kö: Sinä olet opiskelija. → Oletko opiskelija? With olla the ending is always -ko. The ending -kö goes on words that contain ä, ö or y.",
    },
    {
      fi: "Pieni esimakua kiellosta: suomessa on oma kieltoverbi ei, joka taipuu persoonan mukaan, ja olla on silloin muodossa ole: Minä en ole opiskelija. Hän ei ole opettaja. Kieltoa harjoitellaan tarkemmin myöhemmin.",
      bn: "না-বাচক বাক্যের ছোট্ট পরিচয়: ফিনিশে না-বাচক বোঝাতে একটি আলাদা ক্রিয়া ei আছে, যা কর্তা অনুযায়ী বদলায়, আর তখন olla হয়ে যায় ole: Minä en ole opiskelija (আমি শিক্ষার্থী নই)। Hän ei ole opettaja (তিনি শিক্ষক নন)। এটি পরে বিস্তারিত শেখানো হবে।",
      en: "A small preview of negation: Finnish has its own negative verb ei, which changes with the person, and olla then takes the form ole: Minä en ole opiskelija. Hän ei ole opettaja. Negation is practised in detail later.",
    },
  ],

  // Reuses the lesson table: here each row is one form of olla.
  pronounTable: [
    { fi: "minä olen", en: "I am", bn: "আমি (হই / আছি)" },
    { fi: "sinä olet", en: "you are (singular)", bn: "তুমি (হও / আছ)" },
    { fi: "hän on", en: "he / she is", bn: "সে / তিনি (হয় / আছে)" },
    { fi: "se on", en: "it is", bn: "এটি (হয় / আছে)" },
    { fi: "me olemme", en: "we are", bn: "আমরা (হই / আছি)" },
    { fi: "te olette", en: "you are (plural / formal)", bn: "তোমরা / আপনি / আপনারা (হও / আছেন)" },
    { fi: "he ovat", en: "they are (people)", bn: "তারা (হয় / আছে)" },
    { fi: "ne ovat", en: "they / these are (things)", bn: "ওগুলো / এগুলো (হয় / আছে)" },
  ],

  examples: [
    { fi: "Minä olen opiskelija.", bn: "আমি একজন শিক্ষার্থী।", en: "I am a student." },
    { fi: "Sinä olet opettaja.", bn: "তুমি একজন শিক্ষক।", en: "You are a teacher." },
    { fi: "Hän on suomalainen.", bn: "তিনি ফিনিশ।", en: "He/She is Finnish." },
    { fi: "Me olemme opiskelijoita.", bn: "আমরা শিক্ষার্থী।", en: "We are students." },
    { fi: "He ovat ystäviä.", bn: "তারা বন্ধু।", en: "They are friends." },
    { fi: "Kahvi on hyvä.", bn: "কফিটা ভালো।", en: "The coffee is good." },
    { fi: "Me olemme Suomessa.", bn: "আমরা ফিনল্যান্ডে আছি।", en: "We are in Finland." },
    { fi: "Oletko opiskelija?", bn: "তুমি কি শিক্ষার্থী?", en: "Are you a student?" },
    { fi: "Onko hän opettaja?", bn: "তিনি কি শিক্ষক?", en: "Is he/she a teacher?" },
    { fi: "Oletteko te opiskelijoita?", bn: "আপনারা কি শিক্ষার্থী?", en: "Are you students?" },
    { fi: "Minä en ole opiskelija.", bn: "আমি শিক্ষার্থী নই।", en: "I am not a student." },
    { fi: "Hän ei ole opettaja.", bn: "তিনি শিক্ষক নন।", en: "He/She is not a teacher." },
  ],

  vocabulary: [
    { fi: "olla", bn: "হওয়া / থাকা", en: "to be" },
    { fi: "opiskelija", bn: "শিক্ষার্থী", en: "student" },
    { fi: "opettaja", bn: "শিক্ষক", en: "teacher" },
    { fi: "ystävä", bn: "বন্ধু", en: "friend" },
    { fi: "suomalainen", bn: "ফিনিশ / একজন ফিনিশ মানুষ", en: "Finnish / a Finn" },
    { fi: "suomalaiset", bn: "ফিনিশ মানুষেরা", en: "Finns" },
    { fi: "hyvä", bn: "ভালো", en: "good" },
    { fi: "uusi", bn: "নতুন", en: "new" },
    { fi: "täällä", bn: "এখানে", en: "here" },
    { fi: "Suomessa", bn: "ফিনল্যান্ডে", en: "in Finland" },
  ],

  pronunciation: {
    fi: "Olla-sanassa on pitkä l: ol-la. Muista myös pitkä mm sanassa olemme ja pitkä tt sanassa olette. Kysymyksissäkin paino on ensimmäisellä tavulla: O-let-ko, On-ko.",
    bn: "olla শব্দে l দীর্ঘ: ol-la। olemme শব্দে দীর্ঘ mm এবং olette শব্দে দীর্ঘ tt মনে রাখো। প্রশ্নেও জোর প্রথম সিলেবলে পড়ে: O-let-ko, On-ko।",
    en: "Olla has a long l: ol-la. Also remember the long mm in olemme and the long tt in olette. In questions too, stress falls on the first syllable: O-let-ko, On-ko.",
  },

  commonMistakes: [
    {
      fi: "Sekoitetaan olen ja olet: minä olen, mutta sinä olet.",
      bn: "olen ও olet গুলিয়ে ফেলা: minä olen (আমি), কিন্তু sinä olet (তুমি)।",
      en: "Confusing olen and olet: minä olen, but sinä olet.",
    },
    {
      fi: "Käytetään samaa muotoa kaikille persoonille: väärin Minä on opiskelija, oikein Minä olen opiskelija.",
      bn: "ইংরেজির is-এর মতো ভেবে সব কর্তার সাথে একই রূপ ব্যবহার করা: ভুল Minä on opiskelija, সঠিক Minä olen opiskelija।",
      en: "Using one form for every person, like English 'is': wrong Minä on opiskelija, right Minä olen opiskelija.",
    },
    {
      fi: "Unohdetaan -ko kyllä/ei-kysymyksestä: väärin Sinä olet opiskelija?, oikein Oletko opiskelija?",
      bn: "হ্যাঁ/না প্রশ্নে -ko ভুলে যাওয়া: ভুল Sinä olet opiskelija?, সঠিক Oletko opiskelija?",
      en: "Forgetting -ko in yes/no questions: wrong Sinä olet opiskelija?, right Oletko opiskelija?",
    },
    {
      fi: "Sekoitetaan yksikkö ja monikko: hän on (yksi henkilö), mutta he ovat (monta henkilöä).",
      bn: "একবচন ও বহুবচন গুলিয়ে ফেলা: hän on (একজন), কিন্তু he ovat (একাধিক জন)।",
      en: "Confusing singular and plural: hän on (one person), but he ovat (several people).",
    },
  ],

  practice: [
    {
      prompt: {
        fi: "Täydennä oikealla olla-muodolla: Me ___ opiskelijoita.",
        bn: "olla-র সঠিক রূপ দিয়ে পূরণ করো: Me ___ opiskelijoita.",
        en: "Fill in the correct form of olla: Me ___ opiskelijoita.",
      },
      answer: "olemme",
    },
    {
      prompt: {
        fi: "Täydennä: Sinä ___ opettaja.",
        bn: "পূরণ করো: Sinä ___ opettaja.",
        en: "Fill in: Sinä ___ opettaja.",
      },
      answer: "olet",
    },
    {
      prompt: {
        fi: "Käännä suomeksi: I am a student.",
        bn: "ফিনিশে অনুবাদ করো: আমি একজন শিক্ষার্থী।",
        en: "Translate into Finnish: I am a student.",
      },
      answer: "Minä olen opiskelija.",
    },
    {
      prompt: {
        fi: "Muuta kysymykseksi: Hän on suomalainen.",
        bn: "প্রশ্নে রূপান্তর করো: Hän on suomalainen.",
        en: "Turn into a question: Hän on suomalainen.",
      },
      answer: "Onko hän suomalainen?",
    },
  ],

  quiz: [
    {
      question: {
        fi: "Valitse oikea muoto: Minä ___ opiskelija.",
        en: "Choose the correct form: Minä ___ opiskelija.",
      },
      options: [
        { fi: "olen", en: "olen" },
        { fi: "olet", en: "olet" },
        { fi: "on", en: "on" },
        { fi: "ovat", en: "ovat" },
      ],
      correctIndex: 0,
      explanation: {
        fi: "Minä-pronominin kanssa muoto on olen.",
        bn: "minä-র সাথে রূপটি হলো olen।",
        en: "With minä, the form is olen.",
      },
    },
    {
      question: {
        fi: "Valitse oikea muoto: He ___ ystäviä.",
        en: "Choose the correct form: He ___ ystäviä.",
      },
      options: [
        { fi: "on", en: "on" },
        { fi: "olemme", en: "olemme" },
        { fi: "ovat", en: "ovat" },
        { fi: "olette", en: "olette" },
      ],
      correctIndex: 2,
      explanation: {
        fi: "He-pronominin kanssa muoto on ovat.",
        bn: "he-র সাথে রূপটি হলো ovat।",
        en: "With he (they), the form is ovat.",
      },
    },
    {
      question: {
        fi: "Mikä lause tarkoittaa 'Are you a student?'",
        en: "Which sentence means 'Are you a student?'",
      },
      options: [
        { fi: "Sinä olet opiskelija.", en: "Sinä olet opiskelija." },
        { fi: "Oletko opiskelija?", en: "Oletko opiskelija?" },
        { fi: "Olenko opiskelija?", en: "Olenko opiskelija?" },
        { fi: "Onko opiskelija?", en: "Onko opiskelija?" },
      ],
      correctIndex: 1,
      explanation: {
        fi: "Kysymyksessä verbi tulee alkuun ja saa päätteen -ko: Oletko opiskelija?",
        bn: "প্রশ্নে ক্রিয়াটি শুরুতে আসে এবং -ko যুক্ত হয়: Oletko opiskelija?",
        en: "In a question the verb comes first and takes -ko: Oletko opiskelija?",
      },
    },
    {
      question: {
        fi: "Mikä lause tarkoittaa 'We are in Finland'?",
        en: "Which sentence means 'We are in Finland'?",
      },
      options: [
        { fi: "Me olemme Suomessa.", en: "Me olemme Suomessa." },
        { fi: "Me olette Suomessa.", en: "Me olette Suomessa." },
        { fi: "Te olemme Suomessa.", en: "Te olemme Suomessa." },
        { fi: "He on Suomessa.", en: "He on Suomessa." },
      ],
      correctIndex: 0,
      explanation: {
        fi: "Me-pronominin kanssa muoto on olemme.",
        bn: "me-র সাথে রূপটি হলো olemme।",
        en: "With me (we), the form is olemme.",
      },
    },
    {
      question: {
        fi: "Mikä lause on kielteinen?",
        en: "Which sentence is negative?",
      },
      options: [
        { fi: "Hän on opettaja.", en: "Hän on opettaja." },
        { fi: "Onko hän opettaja?", en: "Onko hän opettaja?" },
        { fi: "Hän ei ole opettaja.", en: "Hän ei ole opettaja." },
        { fi: "He ovat opettajia.", en: "He ovat opettajia." },
      ],
      correctIndex: 2,
      explanation: {
        fi: "Kieltoverbi ei tekee lauseesta kielteisen: Hän ei ole opettaja.",
        bn: "না-বাচক ক্রিয়া ei বাক্যটিকে না-বাচক করে: Hän ei ole opettaja (তিনি শিক্ষক নন)।",
        en: "The negative verb ei makes the sentence negative: Hän ei ole opettaja.",
      },
    },
  ],

  summary: {
    fi: "Tässä oppitunnissa opit, että olla tarkoittaa 'olla / sijaita', ja opit sen preesensmuodot: olen, olet, on, olemme, olette, ovat. Peruslause on subjekti + verbi + täydennys. Kyllä/ei-kysymys tehdään päätteellä -ko/-kö (Oletko opiskelija?), ja kielteinen lause kieltoverbillä ei (Minä en ole opiskelija).",
    bn: "এই পাঠে তুমি শিখেছ olla মানে 'হওয়া / থাকা', এবং এর বর্তমান কালের রূপগুলো: olen, olet, on, olemme, olette, ovat। মৌলিক বাক্য হলো কর্তা + ক্রিয়া + পরিপূরক। হ্যাঁ/না প্রশ্ন তৈরি হয় -ko/-kö দিয়ে (Oletko opiskelija?), আর না-বাচক বাক্য তৈরি হয় ei দিয়ে (Minä en ole opiskelija)।",
    en: "In this lesson you learned that olla means 'to be', and its present-tense forms: olen, olet, on, olemme, olette, ovat. A basic sentence is subject + verb + complement. Yes/no questions use the ending -ko/-kö (Oletko opiskelija?), and negative sentences use the negative verb ei (Minä en ole opiskelija).",
  },
};