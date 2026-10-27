import { Lesson } from "./types";

// Month 2, Lesson 8 — Appointments, Time, and Making Plans
// Stable lesson ID: month-2-appointments-time-plans (see lessonRegistry.ts)
// Rafiqul Hyder's material used where it applies: postposition list
// (päästä: vuoden päästä) and Minulla on / ei ole (partitive file).
// Days, clock times and scheduling phrases follow standard Finnish;
// new forms (maanantaina, minulle) are taught as fixed phrases.

export const appointmentsTimePlansLesson: Lesson = {
  slug: "appointments-time-plans",
  month: 2,

  title: {
    fi: "Ajanvaraukset, aika ja suunnitelmat",
    bn: "অ্যাপয়েন্টমেন্ট, সময় ও পরিকল্পনা",
    en: "Appointments, Time, and Making Plans",
  },

  intro: {
    fi: "Tässä oppitunnissa opit viikonpäivät, kellonajat ja sen, miten sovitaan tapaaminen tai varataan aika. Käytät tuttuja rakenteita: kysymyksiä, kieltoa, voida + infinitiivi ja Minulla on.",
    bn: "এই পাঠে তুমি সপ্তাহের দিন, ঘড়ির সময়, আর কীভাবে দেখা করার সময় ঠিক করতে হয় বা অ্যাপয়েন্টমেন্ট নিতে হয় তা শিখবে। তুমি পরিচিত গঠনগুলো ব্যবহার করবে: প্রশ্ন, না-বাচক বাক্য, voida + মূল রূপ এবং Minulla on।",
    en: "In this lesson you'll learn the days of the week, clock times, and how to arrange a meeting or book an appointment. You'll use familiar structures: questions, negation, voida + infinitive and Minulla on.",
  },

  objectives: [
    {
      fi: "Käyttää viikonpäiviä, aikasanoja ja kellonaikoja.",
      bn: "সপ্তাহের দিন, সময়বাচক শব্দ ও ঘড়ির সময় ব্যবহার করা।",
      en: "Use the days of the week, time words and clock times.",
    },
    {
      fi: "Kysyä milloin, mihin aikaan ja missä tavataan.",
      bn: "কখন, কয়টায় ও কোথায় দেখা হবে তা জিজ্ঞেস করা।",
      en: "Ask when, at what time and where to meet.",
    },
    {
      fi: "Sopia, varata ja siirtää tapaaminen.",
      bn: "দেখা করার সময় ঠিক করা, অ্যাপয়েন্টমেন্ট নেওয়া ও তা পিছিয়ে দেওয়া।",
      en: "Arrange, book and reschedule a meeting.",
    },
  ],

  explanation: [
    {
      fi: "Viikonpäivät ovat maanantai, tiistai, keskiviikko, torstai, perjantai, lauantai ja sunnuntai. Kun sanot, minä päivänä jotain tapahtuu, lisää -na/-nä: maanantaina = on Monday. Opettele muodot taulukosta; päätteen sääntö opitaan myöhemmin.",
      bn: "সপ্তাহের দিনগুলো: maanantai (সোমবার), tiistai (মঙ্গলবার), keskiviikko (বুধবার), torstai (বৃহস্পতিবার), perjantai (শুক্রবার), lauantai (শনিবার), sunnuntai (রবিবার)। কোন দিনে কিছু ঘটছে বলতে -na/-nä যোগ করো: maanantaina = সোমবারে। রূপগুলো সারণি থেকে শিখে নাও; এই প্রত্যয়ের নিয়ম পরে শেখানো হবে।",
      en: "The days of the week are maanantai, tiistai, keskiviikko, torstai, perjantai, lauantai and sunnuntai. To say on which day something happens, add -na/-nä: maanantaina = on Monday. Learn the forms from the table; the rule for the ending comes later.",
    },
    {
      fi: "Aikasanoja: tänään, huomenna, eilen, tällä viikolla, ensi viikolla, aamulla, iltapäivällä, illalla. Esimerkki: Tapaamme ensi viikolla. Olen vapaa iltapäivällä.",
      bn: "সময়বাচক শব্দ: tänään (আজ), huomenna (আগামীকাল), eilen (গতকাল), tällä viikolla (এই সপ্তাহে), ensi viikolla (আগামী সপ্তাহে), aamulla (সকালে), iltapäivällä (বিকেলে), illalla (সন্ধ্যায়)। উদাহরণ: Tapaamme ensi viikolla (আমরা আগামী সপ্তাহে দেখা করব)। Olen vapaa iltapäivällä (আমি বিকেলে ফাঁকা আছি)।",
      en: "Time words: tänään, huomenna, eilen, tällä viikolla, ensi viikolla, aamulla, iltapäivällä, illalla. Example: Tapaamme ensi viikolla. Olen vapaa iltapäivällä.",
    },
    {
      fi: "Kellonajat: Paljonko kello on? tai Mitä kello on? – Kello on kolme. Luvut: yksi, kaksi, kolme, neljä, viisi, kuusi, seitsemän, kahdeksan, yhdeksän, kymmenen, yksitoista, kaksitoista. Tärkeä: puoli neljä = 3.30. Puoli kertoo, että seuraavaan tasatuntiin on puoli tuntia.",
      bn: "ঘড়ির সময়: Paljonko kello on? অথবা Mitä kello on? (কয়টা বাজে?) – Kello on kolme (তিনটা বাজে)। সংখ্যা: yksi (১), kaksi (২), kolme (৩), neljä (৪), viisi (৫), kuusi (৬), seitsemän (৭), kahdeksan (৮), yhdeksän (৯), kymmenen (১০), yksitoista (১১), kaksitoista (১২)। গুরুত্বপূর্ণ: puoli neljä = সাড়ে তিনটা (৩:৩০)। puoli মানে পরের ঘণ্টা পূর্ণ হতে আধা ঘণ্টা বাকি।",
      en: "Clock times: Paljonko kello on? or Mitä kello on? – Kello on kolme. Numbers: yksi, kaksi, kolme, neljä, viisi, kuusi, seitsemän, kahdeksan, yhdeksän, kymmenen, yksitoista, kaksitoista. Important: puoli neljä = 3:30. Puoli means it's half an hour until the next full hour.",
    },
    {
      fi: "Milloin vai mihin aikaan? Milloin kysyy aikaa yleisesti (päivä, viikko): Milloin tapaamme? – Ensi viikolla. Mihin aikaan kysyy kellonaikaa: Mihin aikaan tapaamme? – Kello kolme. Paikkaa kysytään: Missä tapaamme?",
      bn: "milloin নাকি mihin aikaan? milloin সাধারণভাবে সময় জিজ্ঞেস করে (দিন, সপ্তাহ): Milloin tapaamme? (আমরা কখন দেখা করব?) – Ensi viikolla (আগামী সপ্তাহে)। mihin aikaan ঘড়ির সময় জিজ্ঞেস করে: Mihin aikaan tapaamme? (আমরা কয়টায় দেখা করব?) – Kello kolme (তিনটায়)। জায়গা জিজ্ঞেস করতে: Missä tapaamme? (আমরা কোথায় দেখা করব?)",
      en: "Milloin or mihin aikaan? Milloin asks about time in general (day, week): Milloin tapaamme? – Ensi viikolla. Mihin aikaan asks for the clock time: Mihin aikaan tapaamme? – Kello kolme. To ask about the place: Missä tapaamme?",
    },
    {
      fi: "Sopia: Minulle sopii. = It suits me / That works for me. Sopiiko sinulle? = Does it suit you? Se sopii hyvin. Sopiiko torstaina kello kymmenen? Huomaa: minulle, ei minä. Opettele tämä valmiina fraasina.",
      bn: "sopia (মানানো / সুবিধা হওয়া): Minulle sopii = আমার জন্য ঠিক আছে / আমার সুবিধা হবে। Sopiiko sinulle? = তোমার কি সুবিধা হবে? Se sopii hyvin (এটা ভালোভাবে চলবে)। Sopiiko torstaina kello kymmenen? (বৃহস্পতিবার দশটায় কি সুবিধা হবে?) খেয়াল করো: minulle, minä নয়। এটি একটি তৈরি বাক্যাংশ হিসেবে শিখে নাও।",
      en: "Sopia: Minulle sopii. = That works for me. Sopiiko sinulle? = Does it work for you? Se sopii hyvin. Sopiiko torstaina kello kymmenen? Note: minulle, not minä. Learn this as a fixed phrase.",
    },
    {
      fi: "Suunnitelmat: Onko sinulla aikaa tänään? Haluatko tavata huomenna? Voimmeko tavata kello kolme? Olen vapaa iltapäivällä. Minulla on kiire. Valitettavasti en ehdi (ehtiä = ehtiä tehdä jotain, olla aikaa). Lopuksi: Nähdään huomenna! Sovitaan niin.",
      bn: "পরিকল্পনা: Onko sinulla aikaa tänään? (আজ কি তোমার সময় আছে?) Haluatko tavata huomenna? (তুমি কি আগামীকাল দেখা করতে চাও?) Voimmeko tavata kello kolme? (আমরা কি তিনটায় দেখা করতে পারি?) Olen vapaa iltapäivällä (আমি বিকেলে ফাঁকা আছি)। Minulla on kiire (আমার তাড়া আছে / আমি ব্যস্ত)। Valitettavasti en ehdi (দুঃখিত, আমার সময় হবে না — ehtiä = সময়মতো করতে পারা)। শেষে: Nähdään huomenna! (কাল দেখা হবে!) Sovitaan niin (তাহলে এটাই ঠিক রইল)।",
      en: "Plans: Onko sinulla aikaa tänään? Haluatko tavata huomenna? Voimmeko tavata kello kolme? Olen vapaa iltapäivällä. Minulla on kiire. Valitettavasti en ehdi (ehtiä = to have time to do something). To finish: Nähdään huomenna! Sovitaan niin.",
    },
    {
      fi: "Ajanvaraus: Haluaisin varata ajan lääkärille. Minulla on aika lääkärille. Huomaa: aika tarkoittaa sekä 'time' (Onko sinulla aikaa?) että 'appointment' (Minulla on aika lääkärille). Muutokset: Voimmeko siirtää tapaamista? Haluan peruuttaa ajan. Olen myöhässä. Tulen kymmenen minuutin päästä.",
      bn: "অ্যাপয়েন্টমেন্ট নেওয়া: Haluaisin varata ajan lääkärille (আমি ডাক্তারের অ্যাপয়েন্টমেন্ট নিতে চাই)। Minulla on aika lääkärille (আমার ডাক্তারের অ্যাপয়েন্টমেন্ট আছে)। খেয়াল করো: aika মানে 'সময়' (Onko sinulla aikaa? — তোমার কি সময় আছে?) এবং 'অ্যাপয়েন্টমেন্ট' (Minulla on aika lääkärille) — দুটোই। পরিবর্তন: Voimmeko siirtää tapaamista? (আমরা কি দেখা করার সময়টা পিছিয়ে দিতে পারি?) Haluan peruuttaa ajan (আমি অ্যাপয়েন্টমেন্ট বাতিল করতে চাই)। Olen myöhässä (আমার দেরি হচ্ছে)। Tulen kymmenen minuutin päästä (আমি দশ মিনিট পরে আসছি)।",
      en: "Booking: Haluaisin varata ajan lääkärille. Minulla on aika lääkärille. Note: aika means both 'time' (Onko sinulla aikaa?) and 'appointment' (Minulla on aika lääkärille). Changes: Voimmeko siirtää tapaamista? Haluan peruuttaa ajan. Olen myöhässä. Tulen kymmenen minuutin päästä.",
    },
  ],

  // Reuses the lesson table: days of the week and "on (day)".
  pronounTable: [
    { fi: "maanantai → maanantaina", en: "Monday → on Monday", bn: "সোমবার → সোমবারে" },
    { fi: "tiistai → tiistaina", en: "Tuesday → on Tuesday", bn: "মঙ্গলবার → মঙ্গলবারে" },
    { fi: "keskiviikko → keskiviikkona", en: "Wednesday → on Wednesday", bn: "বুধবার → বুধবারে" },
    { fi: "torstai → torstaina", en: "Thursday → on Thursday", bn: "বৃহস্পতিবার → বৃহস্পতিবারে" },
    { fi: "perjantai → perjantaina", en: "Friday → on Friday", bn: "শুক্রবার → শুক্রবারে" },
    { fi: "lauantai → lauantaina", en: "Saturday → on Saturday", bn: "শনিবার → শনিবারে" },
    { fi: "sunnuntai → sunnuntaina", en: "Sunday → on Sunday", bn: "রবিবার → রবিবারে" },
  ],

  examples: [
    { fi: "Paljonko kello on? – Kello on puoli neljä.", bn: "কয়টা বাজে? – সাড়ে তিনটা।", en: "What time is it? – It's half past three." },
    { fi: "Tapaamme perjantaina kello viisi.", bn: "আমরা শুক্রবার পাঁচটায় দেখা করব।", en: "We'll meet on Friday at five." },
    { fi: "Minulla on aika lääkärille tiistaina.", bn: "মঙ্গলবার আমার ডাক্তারের অ্যাপয়েন্টমেন্ট আছে।", en: "I have a doctor's appointment on Tuesday." },
    { fi: "Anna: Hei! Onko sinulla aikaa huomenna? – Ali: On. Olen vapaa iltapäivällä.", bn: "আনা: হাই! আগামীকাল কি তোমার সময় আছে? – আলী: আছে। আমি বিকেলে ফাঁকা আছি।", en: "Anna: Hi! Do you have time tomorrow? – Ali: Yes. I'm free in the afternoon." },
    { fi: "Anna: Voimmeko tavata kello kolme? – Ali: Minulle sopii. Missä tapaamme?", bn: "আনা: আমরা কি তিনটায় দেখা করতে পারি? – আলী: আমার সুবিধা হবে। কোথায় দেখা করব?", en: "Anna: Can we meet at three? – Ali: That works for me. Where shall we meet?" },
    { fi: "Anna: Kahvilassa keskustassa. – Ali: Hyvä. Nähdään huomenna!", bn: "আনা: শহরের কেন্দ্রের ক্যাফেতে। – আলী: ভালো। কাল দেখা হবে!", en: "Anna: At a café in the city centre. – Ali: Good. See you tomorrow!" },
    { fi: "Tisa: Hei, haluaisin varata ajan lääkärille. – Vastaanotto: Sopiiko torstaina kello kymmenen?", bn: "তিসা: হাই, আমি ডাক্তারের অ্যাপয়েন্টমেন্ট নিতে চাই। – রিসেপশন: বৃহস্পতিবার দশটায় কি সুবিধা হবে?", en: "Tisa: Hi, I'd like to book a doctor's appointment. – Reception: Would Thursday at ten suit you?" },
    { fi: "Tisa: Sopii hyvin. – Vastaanotto: Teillä on aika torstaina kello kymmenen.", bn: "তিসা: খুব ভালো হবে। – রিসেপশন: আপনার অ্যাপয়েন্টমেন্ট বৃহস্পতিবার দশটায়।", en: "Tisa: That suits me well. – Reception: Your appointment is on Thursday at ten." },
    { fi: "Tisa: Kiitos! Näkemiin.", bn: "তিসা: ধন্যবাদ! বিদায়।", en: "Tisa: Thank you! Goodbye." },
    { fi: "Rahim: Anteeksi, en ehdi tänään. Voimmeko siirtää tapaamista? – Mikko: Totta kai. Sopiiko perjantai?", bn: "রহিম: দুঃখিত, আজ আমার সময় হবে না। আমরা কি দেখা করার সময়টা পিছিয়ে দিতে পারি? – মিক্কো: অবশ্যই। শুক্রবার কি সুবিধা হবে?", en: "Rahim: Sorry, I don't have time today. Can we move the meeting? – Mikko: Of course. Does Friday work?" },
    { fi: "Rahim: Valitettavasti perjantaina olen töissä. Entä lauantaina? – Mikko: Lauantai sopii hyvin. Mihin aikaan?", bn: "রহিম: দুঃখিত, শুক্রবার আমি কাজে থাকি। শনিবার কেমন? – মিক্কো: শনিবার খুব ভালো হবে। কয়টায়?", en: "Rahim: Unfortunately I'm at work on Friday. What about Saturday? – Mikko: Saturday works well. At what time?" },
    { fi: "Rahim: Kello yksitoista? – Mikko: Sovitaan niin. Nähdään lauantaina!", bn: "রহিম: এগারোটায়? – মিক্কো: তাহলে এটাই ঠিক রইল। শনিবার দেখা হবে!", en: "Rahim: At eleven? – Mikko: Let's do that. See you on Saturday!" },
  ],

  vocabulary: [
    { fi: "aika (aikaa)", bn: "সময় / অ্যাপয়েন্টমেন্ট", en: "time / appointment" },
    { fi: "tapaaminen", bn: "সাক্ষাৎ / মিটিং", en: "meeting" },
    { fi: "ajanvaraus", bn: "অ্যাপয়েন্টমেন্ট বুকিং", en: "appointment booking" },
    { fi: "varata aika (varaan ajan)", bn: "অ্যাপয়েন্টমেন্ট নেওয়া", en: "to book an appointment" },
    { fi: "tavata (tapaan)", bn: "দেখা করা", en: "to meet" },
    { fi: "sopia (sopii)", bn: "মানানো / সুবিধা হওয়া", en: "to suit, to be OK" },
    { fi: "vapaa", bn: "ফাঁকা / অবসর", en: "free" },
    { fi: "minulla on kiire", bn: "আমি ব্যস্ত / আমার তাড়া আছে", en: "I'm busy / in a hurry" },
    { fi: "ehtiä (ehdin)", bn: "সময়মতো করতে পারা", en: "to have time (to do something)" },
    { fi: "siirtää", bn: "পিছিয়ে দেওয়া / সরানো", en: "to move, to reschedule" },
    { fi: "peruuttaa", bn: "বাতিল করা", en: "to cancel" },
    { fi: "olla myöhässä / ajoissa", bn: "দেরি হওয়া / সময়মতো থাকা", en: "to be late / on time" },
    { fi: "kello / tunti / minuutti", bn: "ঘড়ি, সময় / ঘণ্টা / মিনিট", en: "clock, o'clock / hour / minute" },
    { fi: "tänään / huomenna / eilen", bn: "আজ / আগামীকাল / গতকাল", en: "today / tomorrow / yesterday" },
    { fi: "tällä viikolla / ensi viikolla", bn: "এই সপ্তাহে / আগামী সপ্তাহে", en: "this week / next week" },
    { fi: "iltapäivällä", bn: "বিকেলে", en: "in the afternoon" },
  ],

  pronunciation: {
    fi: "Kiinnitä huomiota pitkiin äänteisiin: maanantai (aa), kymmenen (mm), yksitoista, myöhässä (öö, ss). Paino on ensimmäisellä tavulla: MAA-nan-tai, PER-jan-tai. Puhumisvinkki: harjoittele kellonaikoja ääneen joka päivä, esimerkiksi kun katsot kelloa: Kello on puoli kaksi.",
    bn: "দীর্ঘ ধ্বনিগুলোর দিকে খেয়াল রাখো: maanantai (aa), kymmenen (mm), yksitoista, myöhässä (öö, ss)। জোর প্রথম সিলেবলে: MAA-nan-tai, PER-jan-tai। কথা বলার টিপস: প্রতিদিন জোরে জোরে ঘড়ির সময় অনুশীলন করো, যেমন ঘড়ির দিকে তাকিয়ে বলো: Kello on puoli kaksi (দেড়টা বাজে)।",
    en: "Pay attention to the long sounds: maanantai (aa), kymmenen (mm), yksitoista, myöhässä (öö, ss). Stress is on the first syllable: MAA-nan-tai, PER-jan-tai. Speaking tip: practise clock times aloud every day, for example whenever you look at a clock: Kello on puoli kaksi.",
  },

  commonMistakes: [
    {
      fi: "Väärä muoto sopia-verbin kanssa: väärin Minä sopii, oikein Minulle sopii.",
      bn: "sopia-র সাথে ভুল রূপ: ভুল Minä sopii, সঠিক Minulle sopii।",
      en: "The wrong form with sopia: wrong Minä sopii, right Minulle sopii.",
    },
    {
      fi: "Sekoitetaan puoli: puoli kolme ei ole 3.30 vaan 2.30. Kello 3.30 on puoli neljä.",
      bn: "puoli গুলিয়ে ফেলা: puoli kolme মানে ৩:৩০ নয়, বরং ২:৩০। ৩:৩০ হলো puoli neljä।",
      en: "Mixing up puoli: puoli kolme is not 3:30 but 2:30. 3:30 is puoli neljä.",
    },
    {
      fi: "Viikonpäivä ilman -na-päätettä: väärin Tapaamme maanantai, oikein Tapaamme maanantaina.",
      bn: "-na প্রত্যয় ছাড়া সপ্তাহের দিন: ভুল Tapaamme maanantai, সঠিক Tapaamme maanantaina।",
      en: "A weekday without -na: wrong Tapaamme maanantai, right Tapaamme maanantaina.",
    },
    {
      fi: "Väärä kielto: väärin En ehdin tänään, oikein En ehdi tänään.",
      bn: "ভুল না-বাচক রূপ: ভুল En ehdin tänään, সঠিক En ehdi tänään।",
      en: "A wrong negative: wrong En ehdin tänään, right En ehdi tänään.",
    },
    {
      fi: "Väärä omistusrakenne: väärin Onko sinä aikaa?, oikein Onko sinulla aikaa?",
      bn: "ভুল 'আছে' গঠন: ভুল Onko sinä aikaa?, সঠিক Onko sinulla aikaa?",
      en: "The wrong 'have' structure: wrong Onko sinä aikaa?, right Onko sinulla aikaa?",
    },
    {
      fi: "-ko kysymyssanan kanssa: väärin Mihinkö aikaan tapaamme?, oikein Mihin aikaan tapaamme?",
      bn: "প্রশ্নবোধক শব্দের সাথে -ko: ভুল Mihinkö aikaan tapaamme?, সঠিক Mihin aikaan tapaamme?",
      en: "-ko together with a question word: wrong Mihinkö aikaan tapaamme?, right Mihin aikaan tapaamme?",
    },
    {
      fi: "Taivutetaan toinen verbi: väärin Haluatko tapaat huomenna?, oikein Haluatko tavata huomenna?",
      bn: "দ্বিতীয় ক্রিয়াটিও বদলে ফেলা: ভুল Haluatko tapaat huomenna?, সঠিক Haluatko tavata huomenna?",
      en: "Conjugating the second verb: wrong Haluatko tapaat huomenna?, right Haluatko tavata huomenna?",
    },
  ],

  practice: [
    {
      prompt: {
        fi: "Mitä tarkoittaa 'huomenna'?",
        bn: "'huomenna' মানে কী?",
        en: "What does 'huomenna' mean?",
      },
      answer: "tomorrow — আগামীকাল",
    },
    {
      prompt: {
        fi: "Täydennä (on Monday): Tapaamme ___.",
        bn: "পূরণ করো (সোমবারে): Tapaamme ___.",
        en: "Complete (on Monday): Tapaamme ___.",
      },
      answer: "maanantaina",
    },
    {
      prompt: {
        fi: "Milloin vai mihin aikaan? ___ tapaamme? – Ensi viikolla.",
        bn: "milloin নাকি mihin aikaan? ___ tapaamme? – Ensi viikolla.",
        en: "Milloin or mihin aikaan? ___ tapaamme? – Ensi viikolla.",
      },
      answer: "Milloin",
    },
    {
      prompt: {
        fi: "Täydennä (3.00): Kello on ___.",
        bn: "পূরণ করো (৩:০০): Kello on ___.",
        en: "Complete (3:00): Kello on ___.",
      },
      answer: "kolme",
    },
    {
      prompt: {
        fi: "Mikä kellonaika on 'puoli viisi'?",
        bn: "'puoli viisi' মানে কয়টা?",
        en: "What time is 'puoli viisi'?",
      },
      answer: "4.30 (সাড়ে চারটা / half past four)",
    },
    {
      prompt: {
        fi: "Täydennä (sopia): Minulle ___.",
        bn: "পূরণ করো (sopia): Minulle ___.",
        en: "Complete (sopia): Minulle ___.",
      },
      answer: "sopii",
    },
    {
      prompt: {
        fi: "Muuta kielteiseksi: Ehdin tänään.",
        bn: "না-বাচক করো: Ehdin tänään.",
        en: "Make it negative: Ehdin tänään.",
      },
      answer: "En ehdi tänään.",
    },
    {
      prompt: {
        fi: "Käännä suomeksi: Do you have time tomorrow?",
        bn: "ফিনিশে অনুবাদ করো: আগামীকাল কি তোমার সময় আছে?",
        en: "Translate into Finnish: Do you have time tomorrow?",
      },
      answer: "Onko sinulla aikaa huomenna?",
    },
    {
      prompt: {
        fi: "Käännä suomeksi: I'm free in the afternoon.",
        bn: "ফিনিশে অনুবাদ করো: আমি বিকেলে ফাঁকা আছি।",
        en: "Translate into Finnish: I'm free in the afternoon.",
      },
      answer: "Olen vapaa iltapäivällä.",
    },
    {
      prompt: {
        fi: "Käännä suomeksi: I'd like to book an appointment.",
        bn: "ফিনিশে অনুবাদ করো: আমি একটি অ্যাপয়েন্টমেন্ট নিতে চাই।",
        en: "Translate into Finnish: I'd like to book an appointment.",
      },
      answer: "Haluaisin varata ajan.",
    },
    {
      prompt: {
        fi: "Ehdota tapaamista (huomenna, kello kaksi).",
        bn: "দেখা করার প্রস্তাব দাও (আগামীকাল, দুইটায়)।",
        en: "Suggest a meeting (tomorrow, at two).",
      },
      answer: "Voimmeko tavata huomenna kello kaksi?",
    },
    {
      prompt: {
        fi: "Ystävä kysyy: Sopiiko perjantai? Et ehdi. Vastaa kohteliaasti.",
        bn: "বন্ধু জিজ্ঞেস করছে: Sopiiko perjantai? তোমার সময় হবে না। ভদ্রভাবে উত্তর দাও।",
        en: "A friend asks: Sopiiko perjantai? You don't have time. Answer politely.",
      },
      answer: "Valitettavasti en ehdi perjantaina.",
    },
  ],

  quiz: [
    {
      question: {
        fi: "Miten sanotaan 'on Friday'?",
        en: "How do you say 'on Friday'?",
      },
      options: [
        { fi: "perjantaina", en: "perjantaina" },
        { fi: "perjantai", en: "perjantai" },
        { fi: "perjantain", en: "perjantain" },
        { fi: "perjantaissa", en: "perjantaissa" },
      ],
      correctIndex: 0,
      explanation: {
        fi: "Viikonpäivä + -na: perjantaina = on Friday.",
        bn: "সপ্তাহের দিন + -na: perjantaina = শুক্রবারে।",
        en: "Weekday + -na: perjantaina = on Friday.",
      },
    },
    {
      question: {
        fi: "Mikä tarkoittaa kellonaikaa 3.30?",
        en: "Which means 3:30?",
      },
      options: [
        { fi: "puoli neljä", en: "puoli neljä" },
        { fi: "puoli kolme", en: "puoli kolme" },
        { fi: "kolme puoli", en: "kolme puoli" },
        { fi: "neljä puoli", en: "neljä puoli" },
      ],
      correctIndex: 0,
      explanation: {
        fi: "Puoli neljä = puoli tuntia ennen neljää = 3.30.",
        bn: "puoli neljä = চারটার আধা ঘণ্টা আগে = ৩:৩০।",
        en: "Puoli neljä = half an hour before four = 3:30.",
      },
    },
    {
      question: {
        fi: "Miten sanotaan 'That works for me'?",
        en: "How do you say 'That works for me'?",
      },
      options: [
        { fi: "Minulle sopii.", en: "Minulle sopii." },
        { fi: "Minä sopii.", en: "Minä sopii." },
        { fi: "Minun sopii.", en: "Minun sopii." },
        { fi: "Minulla sopii.", en: "Minulla sopii." },
      ],
      correctIndex: 0,
      explanation: {
        fi: "Valmis fraasi: Minulle sopii.",
        bn: "তৈরি বাক্যাংশ: Minulle sopii।",
        en: "A fixed phrase: Minulle sopii.",
      },
    },
    {
      question: {
        fi: "Täydennä: ___ tapaamme? – Ensi viikolla.",
        en: "Fill in: ___ tapaamme? – Ensi viikolla.",
      },
      options: [
        { fi: "Milloin", en: "Milloin" },
        { fi: "Missä", en: "Missä" },
        { fi: "Mihin", en: "Mihin" },
        { fi: "Mistä", en: "Mistä" },
      ],
      correctIndex: 0,
      explanation: {
        fi: "Vastaus ensi viikolla kertoo ajan, joten kysymyssana on milloin.",
        bn: "উত্তর ensi viikolla একটি সময় বোঝায়, তাই প্রশ্নবোধক শব্দ milloin।",
        en: "The answer ensi viikolla is a time, so the question word is milloin.",
      },
    },
    {
      question: {
        fi: "Miten sanotaan 'Unfortunately I don't have time'?",
        en: "How do you say 'Unfortunately I don't have time'?",
      },
      options: [
        { fi: "Valitettavasti en ehdi.", en: "Valitettavasti en ehdi." },
        { fi: "Valitettavasti en ehdin.", en: "Valitettavasti en ehdin." },
        { fi: "Valitettavasti minä ei ehdi.", en: "Valitettavasti minä ei ehdi." },
        { fi: "Valitettavasti en ehtiä.", en: "Valitettavasti en ehtiä." },
      ],
      correctIndex: 0,
      explanation: {
        fi: "Minä → en, ja ehdin → ehdi: en ehdi.",
        bn: "minä → en, আর ehdin → ehdi: en ehdi।",
        en: "Minä → en, and ehdin → ehdi: en ehdi.",
      },
    },
    {
      question: {
        fi: "Miten kysytään 'Do you have time today?'",
        en: "How do you ask 'Do you have time today?'",
      },
      options: [
        { fi: "Onko sinulla aikaa tänään?", en: "Onko sinulla aikaa tänään?" },
        { fi: "Onko sinä aikaa tänään?", en: "Onko sinä aikaa tänään?" },
        { fi: "Sinulla onko aikaa tänään?", en: "Sinulla onko aikaa tänään?" },
        { fi: "Onkö sinulla aikaa tänään?", en: "Onkö sinulla aikaa tänään?" },
      ],
      correctIndex: 0,
      explanation: {
        fi: "Onko alkuun, sinulla on, ja aikaa partitiivissa: Onko sinulla aikaa tänään?",
        bn: "শুরুতে onko, sinulla on, আর aikaa partitiivi রূপে: Onko sinulla aikaa tänään?",
        en: "Onko first, sinulla on, and aikaa in the partitive: Onko sinulla aikaa tänään?",
      },
    },
  ],

  summary: {
    fi: "Viikonpäivät + -na: maanantaina, perjantaina. Aikasanat: tänään, huomenna, eilen, ensi viikolla, iltapäivällä. Kello: Paljonko kello on? – Kello on kolme; puoli neljä = 3.30. Milloin = milloin yleisesti, mihin aikaan = kellonaika, missä = paikka. Sopiminen: Onko sinulla aikaa? Voimmeko tavata…? Minulle sopii. Valitettavasti en ehdi. Ajanvaraus: Haluaisin varata ajan. Voimmeko siirtää tapaamista? Nähdään!",
    bn: "সপ্তাহের দিন + -na: maanantaina, perjantaina। সময়বাচক শব্দ: tänään, huomenna, eilen, ensi viikolla, iltapäivällä। ঘড়ি: Paljonko kello on? – Kello on kolme; puoli neljä = ৩:৩০। milloin = সাধারণভাবে কখন, mihin aikaan = কয়টায়, missä = কোথায়। সময় ঠিক করা: Onko sinulla aikaa? Voimmeko tavata…? Minulle sopii। Valitettavasti en ehdi। অ্যাপয়েন্টমেন্ট: Haluaisin varata ajan। Voimmeko siirtää tapaamista? Nähdään!",
    en: "Weekdays + -na: maanantaina, perjantaina. Time words: tänään, huomenna, eilen, ensi viikolla, iltapäivällä. Clock: Paljonko kello on? – Kello on kolme; puoli neljä = 3:30. Milloin = when in general, mihin aikaan = clock time, missä = place. Arranging: Onko sinulla aikaa? Voimmeko tavata…? Minulle sopii. Valitettavasti en ehdi. Booking: Haluaisin varata ajan. Voimmeko siirtää tapaamista? Nähdään!",
  },
};