import { Lesson } from "./types";

// Month 1 — Finnish Verb Types 1–2 (beginner introduction)
// Stable lesson ID: month-1-verb-types-1-2 (see lessonRegistry.ts)

export const verbTypes12Lesson: Lesson = {
  slug: "verb-types-1-2",
  month: 1,

  title: {
    fi: "Verbityypit 1 ja 2",
    bn: "ক্রিয়াশ্রেণি ১ ও ২",
    en: "Finnish Verb Types 1–2",
  },

  intro: {
    fi: "Preesens-oppitunnissa näit, että kaikki verbit eivät taivu täsmälleen samalla tavalla: hän puhuu, mutta hän syö. Syy on verbityypeissä. Suomen verbit jaetaan kuuteen tyyppiin, ja tässä oppitunnissa opit kaksi ensimmäistä: verbityypit 1 ja 2.",
    bn: "preesens পাঠে তুমি দেখেছ, সব ক্রিয়া ঠিক একইভাবে বদলায় না: hän puhuu, কিন্তু hän syö। এর কারণ হলো ক্রিয়াশ্রেণি (verbityyppi)। ফিনিশ ক্রিয়াগুলো ছয়টি শ্রেণিতে ভাগ করা, আর এই পাঠে তুমি প্রথম দুটি শিখবে: ক্রিয়াশ্রেণি ১ ও ২।",
    en: "In the present tense lesson you saw that not all verbs conjugate in exactly the same way: hän puhuu, but hän syö. The reason is verb types. Finnish verbs are divided into six types, and in this lesson you'll learn the first two: verb types 1 and 2.",
  },

  objectives: [
    {
      fi: "Ymmärtää, mitä verbityypit ovat ja miksi niitä tarvitaan.",
      bn: "ক্রিয়াশ্রেণি কী এবং কেন দরকার, তা বোঝা।",
      en: "Understand what verb types are and why they are needed.",
    },
    {
      fi: "Tunnistaa verbityypit 1 ja 2 infinitiivistä.",
      bn: "মূল রূপ (infinitiivi) দেখে ক্রিয়াশ্রেণি ১ ও ২ চিনতে পারা।",
      en: "Recognise verb types 1 and 2 from the infinitive.",
    },
    {
      fi: "Löytää verbin vartalon ja taivuttaa tyypin 1 ja 2 verbejä preesensissä.",
      bn: "ক্রিয়ার মূল অংশ (vartalo) খুঁজে বের করা এবং শ্রেণি ১ ও ২-এর ক্রিয়া বর্তমান কালে বদলাতে পারা।",
      en: "Find the verb stem and conjugate type 1 and 2 verbs in the present tense.",
    },
  ],

  explanation: [
    {
      fi: "Infinitiivi on verbin perusmuoto, se joka löytyy sanakirjasta: puhua, juoda. Verbityyppi kertoo, miten infinitiivistä saadaan vartalo. Kun tiedät vartalon, lisäät siihen jo tutut persoonapäätteet: -n, -t, -mme, -tte, -vat/-vät.",
      bn: "infinitiivi হলো ক্রিয়ার মূল রূপ, যা অভিধানে পাওয়া যায়: puhua, juoda। ক্রিয়াশ্রেণি বলে দেয়, মূল রূপ থেকে কীভাবে মূল অংশ (vartalo) পাওয়া যায়। মূল অংশ জানলে তুমি এর সাথে আগের পাঠের প্রত্যয়গুলো যোগ করবে: -n, -t, -mme, -tte, -vat/-vät।",
      en: "The infinitive is the basic form of a verb, the one in the dictionary: puhua, juoda. The verb type tells you how to get the stem from the infinitive. Once you know the stem, you add the personal endings you already know: -n, -t, -mme, -tte, -vat/-vät.",
    },
    {
      fi: "Verbityyppi 1: infinitiivi päättyy kahteen vokaaliin, joista viimeinen on a tai ä. Esimerkiksi puhua, asua, ostaa, kysyä, laulaa ja tanssia.",
      bn: "ক্রিয়াশ্রেণি ১: মূল রূপ দুটি স্বরবর্ণে শেষ হয়, যার শেষটি a বা ä। যেমন puhua (কথা বলা), asua (থাকা), ostaa (কেনা), kysyä (জিজ্ঞেস করা), laulaa (গান গাওয়া) ও tanssia (নাচা)।",
      en: "Verb type 1: the infinitive ends in two vowels, the last of which is a or ä. For example puhua, asua, ostaa, kysyä, laulaa and tanssia.",
    },
    {
      fi: "Tyypin 1 vartalo saadaan, kun infinitiivistä poistetaan viimeinen a tai ä: puhua → puhu-, ostaa → osta-, kysyä → kysy-. Hän-muodossa vartalon viimeinen vokaali pitenee: hän puhuu, hän ostaa, hän kysyy.",
      bn: "শ্রেণি ১-এর মূল অংশ পেতে মূল রূপ থেকে শেষের a বা ä বাদ দাও: puhua → puhu-, ostaa → osta-, kysyä → kysy-। hän-এর রূপে মূল অংশের শেষ স্বরটি দীর্ঘ হয়: hän puhuu, hän ostaa, hän kysyy।",
      en: "To get the type 1 stem, remove the last a or ä from the infinitive: puhua → puhu-, ostaa → osta-, kysyä → kysy-. In the hän form, the last vowel of the stem becomes long: hän puhuu, hän ostaa, hän kysyy.",
    },
    {
      fi: "Ostaa taipuu näin: minä ostan, sinä ostat, hän ostaa, me ostamme, te ostatte, he ostavat. Kysyä taipuu näin: minä kysyn, sinä kysyt, hän kysyy, me kysymme, te kysytte, he kysyvät.",
      bn: "ostaa (কেনা) বদলায় এভাবে: minä ostan, sinä ostat, hän ostaa, me ostamme, te ostatte, he ostavat। kysyä (জিজ্ঞেস করা) বদলায় এভাবে: minä kysyn, sinä kysyt, hän kysyy, me kysymme, te kysytte, he kysyvät।",
      en: "Ostaa conjugates like this: minä ostan, sinä ostat, hän ostaa, me ostamme, te ostatte, he ostavat. Kysyä conjugates like this: minä kysyn, sinä kysyt, hän kysyy, me kysymme, te kysytte, he kysyvät.",
    },
    {
      fi: "Huomio: monessa tyypin 1 verbissä vartalon konsonantti myös muuttuu, esimerkiksi lukea → minä luen. Tätä kutsutaan astevaihteluksi, ja se opitaan myöhemmin omassa oppitunnissaan. Tämän oppitunnin esimerkkiverbeissä astevaihtelua ei ole.",
      bn: "খেয়াল রাখো: শ্রেণি ১-এর অনেক ক্রিয়ায় মূল অংশের ব্যঞ্জনবর্ণও বদলায়, যেমন lukea (পড়া) → minä luen। একে astevaihtelu বলে, এবং এটি পরে আলাদা পাঠে শেখানো হবে। এই পাঠের উদাহরণের ক্রিয়াগুলোতে এই পরিবর্তন নেই।",
      en: "Note: in many type 1 verbs a consonant in the stem also changes, for example lukea → minä luen. This is called consonant gradation, and it is taught later in its own lesson. The example verbs in this lesson have no gradation.",
    },
    {
      fi: "Verbityyppi 2: infinitiivi päättyy -da tai -dä. Esimerkiksi juoda, syödä, saada, voida, käydä ja myydä.",
      bn: "ক্রিয়াশ্রেণি ২: মূল রূপ -da অথবা -dä দিয়ে শেষ হয়। যেমন juoda (পান করা), syödä (খাওয়া), saada (পাওয়া), voida (পারা), käydä (যাওয়া / ঘুরে আসা) ও myydä (বিক্রি করা)।",
      en: "Verb type 2: the infinitive ends in -da or -dä. For example juoda, syödä, saada, voida, käydä and myydä.",
    },
    {
      fi: "Tyypin 2 vartalo saadaan, kun infinitiivistä poistetaan -da tai -dä: juoda → juo-, syödä → syö-, saada → saa-. Hän-muodossa vokaali ei pitene, koska vartalo päättyy jo pitkään vokaaliin tai diftongiin: hän juo, hän syö, hän saa.",
      bn: "শ্রেণি ২-এর মূল অংশ পেতে মূল রূপ থেকে -da বা -dä বাদ দাও: juoda → juo-, syödä → syö-, saada → saa-। hän-এর রূপে স্বর দীর্ঘ হয় না, কারণ মূল অংশ আগেই দীর্ঘ স্বর বা যুগ্মস্বরে শেষ হয়: hän juo, hän syö, hän saa।",
      en: "To get the type 2 stem, remove -da or -dä from the infinitive: juoda → juo-, syödä → syö-, saada → saa-. In the hän form the vowel does not lengthen, because the stem already ends in a long vowel or a diphthong: hän juo, hän syö, hän saa.",
    },
    {
      fi: "Juoda taipuu näin: minä juon, sinä juot, hän juo, me juomme, te juotte, he juovat. Saada taipuu näin: minä saan, sinä saat, hän saa, me saamme, te saatte, he saavat. Kaksi tärkeää poikkeusta ovat tehdä (minä teen, hän tekee) ja nähdä (minä näen, hän näkee).",
      bn: "juoda (পান করা) বদলায় এভাবে: minä juon, sinä juot, hän juo, me juomme, te juotte, he juovat। saada (পাওয়া) বদলায় এভাবে: minä saan, sinä saat, hän saa, me saamme, te saatte, he saavat। দুটি গুরুত্বপূর্ণ ব্যতিক্রম হলো tehdä (করা: minä teen, hän tekee) ও nähdä (দেখা: minä näen, hän näkee)।",
      en: "Juoda conjugates like this: minä juon, sinä juot, hän juo, me juomme, te juotte, he juovat. Saada conjugates like this: minä saan, sinä saat, hän saa, me saamme, te saatte, he saavat. Two important exceptions are tehdä (minä teen, hän tekee) and nähdä (minä näen, hän näkee).",
    },
    {
      fi: "Vertailu: tyyppi 1 päättyy vokaali + a/ä (puhua), ja vartalosta poistetaan a/ä (puhu-). Tyyppi 2 päättyy -da/-dä (juoda), ja vartalosta poistetaan -da/-dä (juo-). Tyypissä 1 hän-muodon vokaali pitenee (hän puhuu), tyypissä 2 ei (hän juo).",
      bn: "তুলনা: শ্রেণি ১ শেষ হয় স্বরবর্ণ + a/ä দিয়ে (puhua), আর মূল অংশ পেতে a/ä বাদ দেওয়া হয় (puhu-)। শ্রেণি ২ শেষ হয় -da/-dä দিয়ে (juoda), আর মূল অংশ পেতে -da/-dä বাদ দেওয়া হয় (juo-)। শ্রেণি ১-এ hän-এর রূপে স্বর দীর্ঘ হয় (hän puhuu), শ্রেণি ২-এ হয় না (hän juo)।",
      en: "Comparison: type 1 ends in vowel + a/ä (puhua), and you remove a/ä to get the stem (puhu-). Type 2 ends in -da/-dä (juoda), and you remove -da/-dä (juo-). In type 1 the hän form lengthens the vowel (hän puhuu); in type 2 it does not (hän juo).",
    },
  ],

  // Reuses the lesson table: each row compares a type 1 verb (puhua)
  // and a type 2 verb (juoda) in the same person.
  pronounTable: [
    { fi: "minä puhun · minä juon", en: "I speak · I drink", bn: "আমি কথা বলি · আমি পান করি" },
    { fi: "sinä puhut · sinä juot", en: "you speak · you drink", bn: "তুমি কথা বলো · তুমি পান করো" },
    { fi: "hän puhuu · hän juo", en: "he / she speaks · drinks", bn: "সে কথা বলে · সে পান করে" },
    { fi: "me puhumme · me juomme", en: "we speak · we drink", bn: "আমরা কথা বলি · আমরা পান করি" },
    { fi: "te puhutte · te juotte", en: "you (plural / formal) speak · drink", bn: "তোমরা / আপনারা কথা বলো · পান করো" },
    { fi: "he puhuvat · he juovat", en: "they speak · they drink", bn: "তারা কথা বলে · তারা পান করে" },
  ],

  examples: [
    { fi: "Minä ostan leipää.", bn: "আমি রুটি কিনি।", en: "I buy bread." },
    { fi: "Hän kysyy paljon.", bn: "সে অনেক প্রশ্ন করে।", en: "He/She asks a lot." },
    { fi: "Me laulamme yhdessä.", bn: "আমরা একসঙ্গে গান গাই।", en: "We sing together." },
    { fi: "He tanssivat.", bn: "তারা নাচে।", en: "They dance." },
    { fi: "Minä juon kahvia.", bn: "আমি কফি পান করি।", en: "I drink coffee." },
    { fi: "Hän syö riisiä.", bn: "সে ভাত খায়।", en: "He/She eats rice." },
    { fi: "He juovat teetä.", bn: "তারা চা পান করে।", en: "They drink tea." },
    { fi: "Me käymme kaupassa.", bn: "আমরা দোকানে যাই।", en: "We go to the shop." },
    { fi: "Minä teen ruokaa.", bn: "আমি রান্না করি।", en: "I cook (make food)." },
    { fi: "Juotko kahvia?", bn: "তুমি কি কফি খাও?", en: "Do you drink coffee?" },
    { fi: "Voitko auttaa?", bn: "তুমি কি সাহায্য করতে পারো?", en: "Can you help?" },
  ],

  vocabulary: [
    { fi: "ostaa", bn: "কেনা", en: "to buy (type 1)" },
    { fi: "kysyä", bn: "জিজ্ঞেস করা", en: "to ask (type 1)" },
    { fi: "sanoa", bn: "বলা", en: "to say (type 1)" },
    { fi: "laulaa", bn: "গান গাওয়া", en: "to sing (type 1)" },
    { fi: "tanssia", bn: "নাচা", en: "to dance (type 1)" },
    { fi: "juoda", bn: "পান করা", en: "to drink (type 2)" },
    { fi: "syödä", bn: "খাওয়া", en: "to eat (type 2)" },
    { fi: "saada", bn: "পাওয়া", en: "to get (type 2)" },
    { fi: "voida", bn: "পারা", en: "to be able to, can (type 2)" },
    { fi: "käydä", bn: "যাওয়া / ঘুরে আসা", en: "to visit, to go (type 2)" },
    { fi: "myydä", bn: "বিক্রি করা", en: "to sell (type 2)" },
    { fi: "kahvi", bn: "কফি", en: "coffee" },
    { fi: "tee", bn: "চা", en: "tea" },
    { fi: "leipä", bn: "রুটি", en: "bread" },
    { fi: "riisi", bn: "ভাত / চাল", en: "rice" },
  ],

  pronunciation: {
    fi: "Kuuntele hän-muotojen eroa: tyypissä 1 vokaali on pitkä (hän puhuu, hän ostaa), tyypissä 2 vartalo ei muutu (hän juo, hän syö). Sanoissa juo ja syö on diftongi: uo ja yö äännetään yhtenä liukuvana äänteenä.",
    bn: "hän-এর রূপগুলোর পার্থক্য শোনো: শ্রেণি ১-এ স্বর দীর্ঘ (hän puhuu, hän ostaa), শ্রেণি ২-এ মূল অংশ বদলায় না (hän juo, hän syö)। juo ও syö শব্দে যুগ্মস্বর আছে: uo ও yö একটানা একটি ধ্বনি হিসেবে উচ্চারিত হয়।",
    en: "Listen for the difference in the hän forms: in type 1 the vowel is long (hän puhuu, hän ostaa); in type 2 the stem does not change (hän juo, hän syö). Juo and syö contain a diphthong: uo and yö are pronounced as one gliding sound.",
  },

  commonMistakes: [
    {
      fi: "Pidennetään tyypin 2 hän-muoto: väärin hän syöö tai hän juoo, oikein hän syö ja hän juo.",
      bn: "শ্রেণি ২-এর hän-এর রূপ দীর্ঘ করে ফেলা: ভুল hän syöö বা hän juoo, সঠিক hän syö ও hän juo।",
      en: "Lengthening the type 2 hän form: wrong hän syöö or hän juoo, right hän syö and hän juo.",
    },
    {
      fi: "Unohdetaan tyypin 1 hän-muodon pitkä vokaali: väärin hän puhu, oikein hän puhuu.",
      bn: "শ্রেণি ১-এর hän-এর রূপের দীর্ঘ স্বর ভুলে যাওয়া: ভুল hän puhu, সঠিক hän puhuu।",
      en: "Forgetting the long vowel in the type 1 hän form: wrong hän puhu, right hän puhuu.",
    },
    {
      fi: "Jätetään tyypin 2 d vartaloon: väärin minä juodan, oikein minä juon.",
      bn: "শ্রেণি ২-এর d মূল অংশে রেখে দেওয়া: ভুল minä juodan, সঠিক minä juon।",
      en: "Keeping the d of type 2 in the stem: wrong minä juodan, right minä juon.",
    },
    {
      fi: "Sekoitetaan tyypit: verbi, joka päättyy -da/-dä, on tyyppi 2, vaikka siinäkin on vokaaleja ennen loppua.",
      bn: "শ্রেণি গুলিয়ে ফেলা: যে ক্রিয়া -da/-dä দিয়ে শেষ হয়, সেটি শ্রেণি ২, যদিও শেষের আগে তাতেও স্বরবর্ণ থাকে।",
      en: "Mixing up the types: a verb ending in -da/-dä is type 2, even though it also has vowels before the ending.",
    },
  ],

  practice: [
    {
      prompt: {
        fi: "Mikä verbityyppi? juoda",
        bn: "কোন ক্রিয়াশ্রেণি? juoda",
        en: "Which verb type? juoda",
      },
      answer: "Verbityyppi 2 (-da)",
    },
    {
      prompt: {
        fi: "Mikä verbityyppi? ostaa",
        bn: "কোন ক্রিয়াশ্রেণি? ostaa",
        en: "Which verb type? ostaa",
      },
      answer: "Verbityyppi 1 (vokaali + a)",
    },
    {
      prompt: {
        fi: "Mikä on vartalo? kysyä",
        bn: "মূল অংশ কী? kysyä",
        en: "What is the stem? kysyä",
      },
      answer: "kysy-",
    },
    {
      prompt: {
        fi: "Mikä on vartalo? saada",
        bn: "মূল অংশ কী? saada",
        en: "What is the stem? saada",
      },
      answer: "saa-",
    },
    {
      prompt: {
        fi: "Täydennä (laulaa): minä ___",
        bn: "পূরণ করো (laulaa): minä ___",
        en: "Complete (laulaa): minä ___",
      },
      answer: "minä laulan",
    },
    {
      prompt: {
        fi: "Valitse oikea muoto (juoda): He ___ teetä.",
        bn: "সঠিক রূপ বেছে নাও (juoda): He ___ teetä.",
        en: "Choose the correct form (juoda): He ___ teetä.",
      },
      answer: "juovat",
    },
    {
      prompt: {
        fi: "Käännä suomeksi: I eat rice.",
        bn: "ফিনিশে অনুবাদ করো: আমি ভাত খাই।",
        en: "Translate into Finnish: I eat rice.",
      },
      answer: "Minä syön riisiä.",
    },
    {
      prompt: {
        fi: "Täydennä lause (käydä): Hän ___ kaupassa.",
        bn: "বাক্যটি পূরণ করো (käydä): Hän ___ kaupassa.",
        en: "Complete the sentence (käydä): Hän ___ kaupassa.",
      },
      answer: "käy",
    },
  ],

  quiz: [
    {
      question: {
        fi: "Mikä verbi kuuluu verbityyppiin 2?",
        en: "Which verb belongs to verb type 2?",
      },
      options: [
        { fi: "puhua", en: "puhua" },
        { fi: "ostaa", en: "ostaa" },
        { fi: "juoda", en: "juoda" },
        { fi: "kysyä", en: "kysyä" },
      ],
      correctIndex: 2,
      explanation: {
        fi: "Juoda päättyy -da, joten se on tyyppi 2.",
        bn: "juoda -da দিয়ে শেষ হয়, তাই এটি শ্রেণি ২।",
        en: "Juoda ends in -da, so it is type 2.",
      },
    },
    {
      question: {
        fi: "Mikä on verbin ostaa vartalo?",
        en: "What is the stem of ostaa?",
      },
      options: [
        { fi: "osta-", en: "osta-" },
        { fi: "ost-", en: "ost-" },
        { fi: "ostaa-", en: "ostaa-" },
        { fi: "os-", en: "os-" },
      ],
      correctIndex: 0,
      explanation: {
        fi: "Tyypissä 1 poistetaan viimeinen a: ostaa → osta-.",
        bn: "শ্রেণি ১-এ শেষের a বাদ দেওয়া হয়: ostaa → osta-।",
        en: "In type 1 you remove the last a: ostaa → osta-.",
      },
    },
    {
      question: {
        fi: "Täydennä: Hän ___ kahvia. (juoda)",
        en: "Fill in: Hän ___ kahvia. (juoda)",
      },
      options: [
        { fi: "juo", en: "juo" },
        { fi: "juoo", en: "juoo" },
        { fi: "juon", en: "juon" },
        { fi: "juovat", en: "juovat" },
      ],
      correctIndex: 0,
      explanation: {
        fi: "Tyypin 2 hän-muodossa vartalo ei muutu: hän juo.",
        bn: "শ্রেণি ২-এর hän-এর রূপে মূল অংশ বদলায় না: hän juo।",
        en: "In the type 2 hän form the stem does not change: hän juo.",
      },
    },
    {
      question: {
        fi: "Täydennä: Sinä ___ paljon. (kysyä)",
        en: "Fill in: Sinä ___ paljon. (kysyä)",
      },
      options: [
        { fi: "kysyn", en: "kysyn" },
        { fi: "kysyt", en: "kysyt" },
        { fi: "kysyy", en: "kysyy" },
        { fi: "kysyvät", en: "kysyvät" },
      ],
      correctIndex: 1,
      explanation: {
        fi: "Sinä-muodon pääte on -t: sinä kysyt.",
        bn: "sinä-র রূপে প্রত্যয় -t: sinä kysyt।",
        en: "The sinä ending is -t: sinä kysyt.",
      },
    },
    {
      question: {
        fi: "Mikä lause on oikein?",
        en: "Which sentence is correct?",
      },
      options: [
        { fi: "Hän syöö riisiä.", en: "Hän syöö riisiä." },
        { fi: "Hän syö riisiä.", en: "Hän syö riisiä." },
        { fi: "Hän syön riisiä.", en: "Hän syön riisiä." },
        { fi: "Hän syövät riisiä.", en: "Hän syövät riisiä." },
      ],
      correctIndex: 1,
      explanation: {
        fi: "Syödä on tyyppi 2, joten hän-muodossa vokaali ei pitene: hän syö.",
        bn: "syödä শ্রেণি ২-এর, তাই hän-এর রূপে স্বর দীর্ঘ হয় না: hän syö।",
        en: "Syödä is type 2, so the hän form does not lengthen: hän syö.",
      },
    },
  ],

  summary: {
    fi: "Verbityyppi kertoo, miten infinitiivistä saadaan vartalo. Tyyppi 1 päättyy vokaali + a/ä (puhua → puhu-), ja hän-muodossa vokaali pitenee (hän puhuu). Tyyppi 2 päättyy -da/-dä (juoda → juo-), ja hän-muoto on sama kuin vartalo (hän juo). Vartaloon lisätään tutut persoonapäätteet. Verbityypit 3–6 opitaan myöhemmin.",
    bn: "ক্রিয়াশ্রেণি বলে দেয়, মূল রূপ থেকে কীভাবে মূল অংশ পাওয়া যায়। শ্রেণি ১ শেষ হয় স্বরবর্ণ + a/ä দিয়ে (puhua → puhu-), আর hän-এর রূপে স্বর দীর্ঘ হয় (hän puhuu)। শ্রেণি ২ শেষ হয় -da/-dä দিয়ে (juoda → juo-), আর hän-এর রূপ মূল অংশের মতোই থাকে (hän juo)। মূল অংশের সাথে পরিচিত ব্যক্তিবাচক প্রত্যয় যোগ হয়। ক্রিয়াশ্রেণি ৩–৬ পরে শেখানো হবে।",
    en: "The verb type tells you how to get the stem from the infinitive. Type 1 ends in vowel + a/ä (puhua → puhu-), and the hän form lengthens the vowel (hän puhuu). Type 2 ends in -da/-dä (juoda → juo-), and the hän form is the same as the stem (hän juo). The familiar personal endings are added to the stem. Verb types 3–6 come later.",
  },
};