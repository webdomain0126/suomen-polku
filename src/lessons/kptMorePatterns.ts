import { Lesson } from "./types";

// Month 3, Lesson 2 — More Consonant Gradation Patterns
// Stable lesson ID: month-3-kpt-more-patterns (see lessonRegistry.ts)
// New pairs: nk–ng, mp–mm, lt–ll, nt–nn, rt–rr. Noun examples use the -n
// form (genitive, previewed; cases are taught in Month 4). Verb examples use
// the minä/hän contrast from Lesson 1.

export const kptMorePatternsLesson: Lesson = {
  slug: "kpt-more-patterns",
  month: 3,

  title: {
    fi: "Lisää astevaihtelua",
    bn: "ব্যঞ্জনবর্ণের পরিবর্তনের আরও ধরন",
    en: "More Consonant Gradation Patterns",
  },

  intro: {
    fi: "Edellisessä oppitunnissa opit parit kk–k, pp–p, tt–t, k–∅, p–v ja t–d. Nyt opit viisi uutta paria, joissa k, p tai t on toisen konsonantin jälkeen: nk–ng, mp–mm, lt–ll, nt–nn ja rt–rr.",
    bn: "আগের পাঠে তুমি kk–k, pp–p, tt–t, k–∅, p–v ও t–d জোড়াগুলো শিখেছ। এখন তুমি পাঁচটি নতুন জোড়া শিখবে, যেখানে k, p বা t অন্য একটি ব্যঞ্জনবর্ণের পরে থাকে: nk–ng, mp–mm, lt–ll, nt–nn ও rt–rr।",
    en: "In the previous lesson you learned the pairs kk–k, pp–p, tt–t, k–∅, p–v and t–d. Now you'll learn five new pairs in which k, p or t comes after another consonant: nk–ng, mp–mm, lt–ll, nt–nn and rt–rr.",
  },

  objectives: [
    {
      fi: "Tunnistaa parit nk–ng, mp–mm, lt–ll, nt–nn ja rt–rr.",
      bn: "nk–ng, mp–mm, lt–ll, nt–nn ও rt–rr জোড়াগুলো চিনতে পারা।",
      en: "Recognise the pairs nk–ng, mp–mm, lt–ll, nt–nn and rt–rr.",
    },
    {
      fi: "Muodostaa heikon asteen substantiivien -n-muodossa ja verbien minä-muodossa.",
      bn: "বিশেষ্যের -n রূপে ও ক্রিয়ার minä-রূপে দুর্বল রূপ তৈরি করতে পারা।",
      en: "Form the weak grade in the -n form of nouns and the minä form of verbs.",
    },
    {
      fi: "Ääntää ng oikein.",
      bn: "ng সঠিকভাবে উচ্চারণ করতে পারা।",
      en: "Pronounce ng correctly.",
    },
  ],

  explanation: [
    {
      fi: "Lyhyt kertaus: heikko aste tulee usein, kun viimeinen tavu sulkeutuu (kauppa → kaupan, minä nukun), ja vahva aste avoimessa tavussa (hän nukkuu). Sama nyrkkisääntö toimii myös uusissa pareissa.",
      bn: "ছোট পুনরালোচনা: শেষ সিলেবল বন্ধ হলে প্রায়ই দুর্বল রূপ আসে (kauppa → kaupan, minä nukun), আর খোলা সিলেবলে শক্তিশালী রূপ (hän nukkuu)। নতুন জোড়াগুলোতেও একই নিয়ম কাজ করে।",
      en: "Quick recap: the weak grade often appears when the last syllable closes (kauppa → kaupan, minä nukun), the strong grade in an open syllable (hän nukkuu). The same rule of thumb works for the new pairs.",
    },
    {
      fi: "Uusissa pareissa k, p tai t muuttuu samaksi kuin sitä edeltävä konsonantti: lt → ll, nt → nn, rt → rr, mp → mm. Parissa nk → ng k muuttuu g:ksi: kenkä → kengän.",
      bn: "নতুন জোড়াগুলোতে k, p বা t তার আগের ব্যঞ্জনবর্ণের মতো হয়ে যায়: lt → ll, nt → nn, rt → rr, mp → mm। nk → ng জোড়ায় k বদলে g হয়: kenkä → kengän।",
      en: "In the new pairs, k, p or t becomes the same as the consonant before it: lt → ll, nt → nn, rt → rr, mp → mm. In the pair nk → ng, k becomes g: kenkä → kengän.",
    },
    {
      fi: "Substantiiveissa näet heikon asteen -n-muodossa, joka tarkoittaa 'jonkin' (genetiivi, opitaan kuukaudella 4): kenkä → kengän, kaupunki → kaupungin, kampa → kamman, ilta → illan, ranta → rannan, parta → parran.",
      bn: "বিশেষ্যে তুমি দুর্বল রূপ দেখতে পাও -n রূপে, যার মানে 'কোনো কিছুর' (genetiivi, চতুর্থ মাসে শেখানো হবে): kenkä → kengän (জুতার), kaupunki → kaupungin (শহরের), kampa → kamman (চিরুনির), ilta → illan (সন্ধ্যার), ranta → rannan (তীরের), parta → parran (দাড়ির)।",
      en: "In nouns you see the weak grade in the -n form, which means 'of' (the genitive, taught in Month 4): kenkä → kengän, kaupunki → kaupungin, kampa → kamman, ilta → illan, ranta → rannan, parta → parran.",
    },
    {
      fi: "Verbeissä minä-muoto on heikossa asteessa ja hän-muoto vahvassa, kuten oppitunnilla 1: antaa → minä annan, hän antaa (nt → nn); ymmärtää → minä ymmärrän, hän ymmärtää (rt → rr); kertoa → minä kerron, hän kertoo (rt → rr).",
      bn: "ক্রিয়ায় minä-রূপ দুর্বল আর hän-রূপ শক্তিশালী থাকে, যেমন পাঠ ১-এ: antaa (দেওয়া) → minä annan, hän antaa (nt → nn); ymmärtää (বোঝা) → minä ymmärrän, hän ymmärtää (rt → rr); kertoa (বলা) → minä kerron, hän kertoo (rt → rr)।",
      en: "In verbs, the minä form has the weak grade and the hän form the strong one, as in Lesson 1: antaa → minä annan, hän antaa (nt → nn); ymmärtää → minä ymmärrän, hän ymmärtää (rt → rr); kertoa → minä kerron, hän kertoo (rt → rr).",
    },
    {
      fi: "Kielteisessä lauseessa on heikko aste, koska se käyttää minä-muotoa ilman -n:ää: en anna, en ymmärrä, en kerro.",
      bn: "না-বাচক বাক্যে দুর্বল রূপ থাকে, কারণ সেখানে -n ছাড়া minä-রূপ ব্যবহার হয়: en anna, en ymmärrä, en kerro।",
      en: "A negative sentence has the weak grade, because it uses the minä form without -n: en anna, en ymmärrä, en kerro.",
    },
    {
      fi: "Ääntäminen: ng ei ole n + g, vaan yksi pitkä nenä-äänne, kuten englannin sanassa singer. Kengän, kaupungin, Helsingin.",
      bn: "উচ্চারণ: ng মানে n + g নয়, বরং একটি দীর্ঘ নাসিক্য ধ্বনি, ইংরেজি singer শব্দের মতো (অনেকটা বাংলা 'ঙ'-এর মতো)। kengän, kaupungin, Helsingin।",
      en: "Pronunciation: ng is not n + g but one long nasal sound, as in English singer. Kengän, kaupungin, Helsingin.",
    },
    {
      fi: "Laajennus: Helsinki → Helsingin (nk → ng). Muodossa Helsingissä ('Helsingissä, in Helsinki') on astevaihtelun lisäksi pääte -ssä. Sijamuodot opitaan kuukaudella 4.",
      bn: "অতিরিক্ত: Helsinki → Helsingin (হেলসিঙ্কির; nk → ng)। Helsingissä (হেলসিঙ্কিতে) রূপে ব্যঞ্জন পরিবর্তনের সাথে -ssä প্রত্যয়ও আছে। কারকগুলো চতুর্থ মাসে শেখানো হবে।",
      en: "Extension: Helsinki → Helsingin (nk → ng). The form Helsingissä ('in Helsinki') has the -ssä ending in addition to gradation. Cases are taught in Month 4.",
    },
    {
      fi: "Kaikki sanat eivät muutu. Jos k, p tai t ei ole viimeisen tavun alussa, sana pysyy samanlaisena, esimerkiksi talo → talon.",
      bn: "সব শব্দ বদলায় না। k, p বা t যদি শেষ সিলেবলের শুরুতে না থাকে, শব্দটি একই থাকে, যেমন talo → talon।",
      en: "Not every word changes. If k, p or t isn't at the start of the last syllable, the word stays the same, e.g. talo → talon.",
    },
  ],

  // Reuses the lesson table: one row per new gradation pair.
  pronounTable: [
    { fi: "nk → ng: kenkä → kengän; kaupunki → kaupungin", en: "shoe; city", bn: "জুতা; শহর" },
    { fi: "mp → mm: kampa → kamman", en: "comb", bn: "চিরুনি" },
    { fi: "lt → ll: ilta → illan; silta → sillan", en: "evening; bridge", bn: "সন্ধ্যা; সেতু" },
    { fi: "nt → nn: ranta → rannan; antaa → minä annan", en: "shore, beach; to give → I give", bn: "তীর, সৈকত; দেওয়া → আমি দিই" },
    { fi: "rt → rr: parta → parran; ymmärtää → minä ymmärrän", en: "beard; to understand → I understand", bn: "দাড়ি; বোঝা → আমি বুঝি" },
  ],

  examples: [
    { fi: "Tämä on Helsingin keskusta.", bn: "এটা হেলসিঙ্কির কেন্দ্র।", en: "This is the centre of Helsinki." },
    { fi: "Kaupungin kirjasto on lähellä.", bn: "শহরের লাইব্রেরি কাছেই।", en: "The city library is nearby." },
    { fi: "Rannan kahvila on auki.", bn: "সৈকতের ক্যাফে খোলা।", en: "The beach café is open." },
    { fi: "Illan bussi lähtee kello kuusi.", bn: "সন্ধ্যার বাস ছয়টায় ছাড়ে।", en: "The evening bus leaves at six." },
    { fi: "Minä annan sinulle kirjan. Hän antaa minulle kahvia.", bn: "আমি তোমাকে একটা বই দিই। সে আমাকে কফি দেয়।", en: "I give you a book. He/She gives me coffee." },
    { fi: "Minä ymmärrän vähän. Hän ymmärtää hyvin.", bn: "আমি একটু বুঝি। সে ভালো বোঝে।", en: "I understand a little. He/She understands well." },
    { fi: "Minä en ymmärrä.", bn: "আমি বুঝতে পারছি না।", en: "I don't understand." },
    { fi: "Minä kerron tarinan. Hän kertoo vitsin.", bn: "আমি একটা গল্প বলি। সে একটা কৌতুক বলে।", en: "I tell a story. He/She tells a joke." },
  ],

  vocabulary: [
    { fi: "kenkä", bn: "জুতা", en: "shoe" },
    { fi: "kaupunki", bn: "শহর", en: "city, town" },
    { fi: "kampa", bn: "চিরুনি", en: "comb" },
    { fi: "ilta", bn: "সন্ধ্যা", en: "evening" },
    { fi: "silta", bn: "সেতু", en: "bridge" },
    { fi: "ranta", bn: "তীর / সৈকত", en: "shore, beach" },
    { fi: "parta", bn: "দাড়ি", en: "beard" },
    { fi: "antaa (annan)", bn: "দেওয়া", en: "to give" },
    { fi: "ymmärtää (ymmärrän)", bn: "বোঝা", en: "to understand" },
    { fi: "kertoa (kerron)", bn: "বলা / জানানো", en: "to tell" },
    { fi: "tarina", bn: "গল্প", en: "story" },
  ],

  pronunciation: {
    fi: "ng on yksi pitkä nenä-äänne: ken-gän, kau-pun-gin. Kaksoiskonsonantit ovat pitkiä: an-nan, il-lan, par-ran, kam-man. Sano parit ääneen: hän antaa – minä annan.",
    bn: "ng একটি দীর্ঘ নাসিক্য ধ্বনি: ken-gän, kau-pun-gin। দ্বৈত ব্যঞ্জনগুলো দীর্ঘ: an-nan, il-lan, par-ran, kam-man। জোড়াগুলো জোরে বলো: hän antaa – minä annan।",
    en: "ng is one long nasal sound: ken-gän, kau-pun-gin. Double consonants are long: an-nan, il-lan, par-ran, kam-man. Say the pairs aloud: hän antaa – minä annan.",
  },

  commonMistakes: [
    {
      fi: "Unohdetaan nk → ng: väärin kenkän, oikein kengän.",
      bn: "nk → ng ভুলে যাওয়া: ভুল kenkän, সঠিক kengän।",
      en: "Forgetting nk → ng: wrong kenkän, right kengän.",
    },
    {
      fi: "Ääntäminen n + g: kengän ei ole 'ken-gän' kahdella erillisellä äänteellä, vaan yksi pitkä ng-äänne.",
      bn: "n + g আলাদা করে উচ্চারণ: kengän-এ n ও g আলাদা নয়, বরং একটি দীর্ঘ ng ধ্বনি।",
      en: "Pronouncing n + g: kengän doesn't have two separate sounds, but one long ng sound.",
    },
    {
      fi: "Vahva aste minä-muodossa: väärin minä antan, oikein minä annan.",
      bn: "minä-রূপে শক্তিশালী রূপ: ভুল minä antan, সঠিক minä annan।",
      en: "The strong grade in the minä form: wrong minä antan, right minä annan.",
    },
    {
      fi: "Heikko aste hän-muodossa: väärin hän annaa, oikein hän antaa.",
      bn: "hän-রূপে দুর্বল রূপ: ভুল hän annaa, সঠিক hän antaa।",
      en: "The weak grade in the hän form: wrong hän annaa, right hän antaa.",
    },
    {
      fi: "Persoonapääte kieltolauseessa: väärin en ymmärrän, oikein en ymmärrä.",
      bn: "না-বাচক বাক্যে ব্যক্তিবাচক প্রত্যয়: ভুল en ymmärrän, সঠিক en ymmärrä।",
      en: "A personal ending in a negative sentence: wrong en ymmärrän, right en ymmärrä.",
    },
    {
      fi: "Unohdetaan nt → nn: väärin rantan, oikein rannan.",
      bn: "nt → nn ভুলে যাওয়া: ভুল rantan, সঠিক rannan।",
      en: "Forgetting nt → nn: wrong rantan, right rannan.",
    },
  ],

  practice: [
    {
      prompt: { fi: "Mikä on nk:n heikko aste?", bn: "nk-এর দুর্বল রূপ কী?", en: "What is the weak grade of nk?" },
      answer: "ng",
    },
    {
      prompt: { fi: "Mikä on lt:n heikko aste?", bn: "lt-এর দুর্বল রূপ কী?", en: "What is the weak grade of lt?" },
      answer: "ll",
    },
    {
      prompt: { fi: "kenkä → -n-muoto?", bn: "kenkä → -n রূপ?", en: "kenkä → the -n form?" },
      answer: "kengän",
    },
    {
      prompt: { fi: "kaupunki → -n-muoto?", bn: "kaupunki → -n রূপ?", en: "kaupunki → the -n form?" },
      answer: "kaupungin",
    },
    {
      prompt: { fi: "ilta → -n-muoto?", bn: "ilta → -n রূপ?", en: "ilta → the -n form?" },
      answer: "illan",
    },
    {
      prompt: { fi: "ranta → -n-muoto?", bn: "ranta → -n রূপ?", en: "ranta → the -n form?" },
      answer: "rannan",
    },
    {
      prompt: { fi: "parta → -n-muoto?", bn: "parta → -n রূপ?", en: "parta → the -n form?" },
      answer: "parran",
    },
    {
      prompt: { fi: "kampa → -n-muoto?", bn: "kampa → -n রূপ?", en: "kampa → the -n form?" },
      answer: "kamman",
    },
    {
      prompt: { fi: "antaa: minä ___, hän ___", bn: "antaa: minä ___, hän ___", en: "antaa: minä ___, hän ___" },
      answer: "minä annan, hän antaa",
    },
    {
      prompt: { fi: "ymmärtää: minä ___; kielteinen: minä en ___", bn: "ymmärtää: minä ___; না-বাচক: minä en ___", en: "ymmärtää: minä ___; negative: minä en ___" },
      answer: "ymmärrän; en ymmärrä",
    },
    {
      prompt: { fi: "kertoa: minä ___", bn: "kertoa: minä ___", en: "kertoa: minä ___" },
      answer: "kerron",
    },
    {
      prompt: { fi: "Helsinki → -n-muoto?", bn: "Helsinki → -n রূপ?", en: "Helsinki → the -n form?" },
      answer: "Helsingin",
    },
  ],

  quiz: [
    {
      question: { fi: "kenkä → -n-muoto?", en: "kenkä → the -n form?" },
      options: [
        { fi: "kengän", en: "kengän" },
        { fi: "kenkän", en: "kenkän" },
        { fi: "kengkän", en: "kengkän" },
        { fi: "kennän", en: "kennän" },
      ],
      correctIndex: 0,
      explanation: {
        fi: "nk → ng: kenkä → kengän.",
        bn: "nk → ng: kenkä → kengän।",
        en: "nk → ng: kenkä → kengän.",
      },
    },
    {
      question: { fi: "ilta → -n-muoto?", en: "ilta → the -n form?" },
      options: [
        { fi: "iltan", en: "iltan" },
        { fi: "illan", en: "illan" },
        { fi: "ilan", en: "ilan" },
        { fi: "ildan", en: "ildan" },
      ],
      correctIndex: 1,
      explanation: {
        fi: "lt → ll: ilta → illan.",
        bn: "lt → ll: ilta → illan।",
        en: "lt → ll: ilta → illan.",
      },
    },
    {
      question: { fi: "Täydennä: Minä ___ sinulle kirjan. (antaa)", en: "Fill in: Minä ___ sinulle kirjan. (antaa)" },
      options: [
        { fi: "antan", en: "antan" },
        { fi: "anna", en: "anna" },
        { fi: "annan", en: "annan" },
        { fi: "annaa", en: "annaa" },
      ],
      correctIndex: 2,
      explanation: {
        fi: "Minä-muodon -n sulkee tavun, joten nt → nn: minä annan.",
        bn: "minä-রূপের -n সিলেবল বন্ধ করে, তাই nt → nn: minä annan।",
        en: "The -n of the minä form closes the syllable, so nt → nn: minä annan.",
      },
    },
    {
      question: { fi: "Täydennä: Hän ___ suomea. (ymmärtää)", en: "Fill in: Hän ___ suomea. (ymmärtää)" },
      options: [
        { fi: "ymmärrää", en: "ymmärrää" },
        { fi: "ymmärtää", en: "ymmärtää" },
        { fi: "ymmärrän", en: "ymmärrän" },
        { fi: "ymmärtä", en: "ymmärtä" },
      ],
      correctIndex: 1,
      explanation: {
        fi: "Hän-muodossa vahva aste: hän ymmärtää.",
        bn: "hän-রূপে শক্তিশালী রূপ: hän ymmärtää।",
        en: "The hän form has the strong grade: hän ymmärtää.",
      },
    },
    {
      question: { fi: "Mikä pari on oikein (vahva → heikko)?", en: "Which pair is correct (strong → weak)?" },
      options: [
        { fi: "nn → nt", en: "nn → nt" },
        { fi: "nt → nd", en: "nt → nd" },
        { fi: "nt → t", en: "nt → t" },
        { fi: "nt → nn", en: "nt → nn" },
      ],
      correctIndex: 3,
      explanation: {
        fi: "nt → nn, kuten ranta → rannan ja antaa → annan.",
        bn: "nt → nn, যেমন ranta → rannan ও antaa → annan।",
        en: "nt → nn, as in ranta → rannan and antaa → annan.",
      },
    },
    {
      question: { fi: "Miten ng äännetään (esim. kengän)?", en: "How is ng pronounced (e.g. kengän)?" },
      options: [
        { fi: "n ja g erikseen", en: "n and g separately" },
        { fi: "yksi pitkä nenä-äänne (kuten singer)", en: "one long nasal sound (as in singer)" },
        { fi: "pelkkä g", en: "only g" },
        { fi: "pelkkä n", en: "only n" },
      ],
      correctIndex: 1,
      explanation: {
        fi: "ng on yksi pitkä nenä-äänne, kuten englannin sanassa singer.",
        bn: "ng একটি দীর্ঘ নাসিক্য ধ্বনি, ইংরেজি singer শব্দের মতো।",
        en: "ng is one long nasal sound, as in English singer.",
      },
    },
  ],

  summary: {
    fi: "Uudet parit: nk → ng (kenkä → kengän, kaupunki → kaupungin), mp → mm (kampa → kamman), lt → ll (ilta → illan), nt → nn (ranta → rannan, minä annan), rt → rr (parta → parran, minä ymmärrän). Heikko aste suljetussa tavussa (-n-muoto, minä-muoto, kielto), vahva aste hän-muodossa. ng äännetään yhtenä pitkänä nenä-äänteenä. Kaikki sanat eivät muutu.",
    bn: "নতুন জোড়া: nk → ng (kenkä → kengän, kaupunki → kaupungin), mp → mm (kampa → kamman), lt → ll (ilta → illan), nt → nn (ranta → rannan, minä annan), rt → rr (parta → parran, minä ymmärrän)। বন্ধ সিলেবলে দুর্বল রূপ (-n রূপ, minä-রূপ, না-বাচক), hän-রূপে শক্তিশালী রূপ। ng একটি দীর্ঘ নাসিক্য ধ্বনি হিসেবে উচ্চারিত হয়। সব শব্দ বদলায় না।",
    en: "New pairs: nk → ng (kenkä → kengän, kaupunki → kaupungin), mp → mm (kampa → kamman), lt → ll (ilta → illan), nt → nn (ranta → rannan, minä annan), rt → rr (parta → parran, minä ymmärrän). The weak grade in a closed syllable (-n form, minä form, negative), the strong grade in the hän form. ng is pronounced as one long nasal sound. Not every word changes.",
  },
};