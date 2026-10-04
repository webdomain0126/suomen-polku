import { Lesson } from "./types";

// Month 1 — Finnish Verb Type 5
// Stable lesson ID: month-1-verb-type-5 (see lessonRegistry.ts)
// Rule follows Rafiqul Hyder's material: infinitive marker -ita/-itä;
// present stem = remove ta/tä and add tse (tarvi-ta → tarvitse-).
// His material states there is no consonant gradation in type 5.

export const verbType5Lesson: Lesson = {
  slug: "verb-type-5",
  month: 1,

  title: {
    fi: "Verbityyppi 5",
    bn: "ক্রিয়াশ্রেণি ৫",
    en: "Finnish Verb Type 5",
  },

  intro: {
    fi: "Olet oppinut jo verbityypit 1–4. Verbityyppi 5 on helppo, koska sen vartalo muodostetaan aina samalla tavalla, eikä siinä ole astevaihtelua. Siihen kuuluu hyödyllisiä verbejä, kuten tarvita, valita ja häiritä.",
    bn: "তুমি ইতিমধ্যে ক্রিয়াশ্রেণি ১–৪ শিখেছ। ক্রিয়াশ্রেণি ৫ সহজ, কারণ এর মূল অংশ সবসময় একইভাবে তৈরি হয়, আর এতে ব্যঞ্জন পরিবর্তন (astevaihtelu) নেই। এই শ্রেণিতে কাজের অনেক ক্রিয়া আছে, যেমন tarvita (দরকার হওয়া), valita (বেছে নেওয়া) ও häiritä (বিরক্ত করা)।",
    en: "You have already learned verb types 1–4. Verb type 5 is easy, because its stem is always formed the same way and there is no consonant gradation. It includes useful verbs such as tarvita, valita and häiritä.",
  },

  objectives: [
    {
      fi: "Tunnistaa verbityypin 5 infinitiivistä.",
      bn: "মূল রূপ দেখে ক্রিয়াশ্রেণি ৫ চিনতে পারা।",
      en: "Recognise verb type 5 from the infinitive.",
    },
    {
      fi: "Muodostaa tyypin 5 vartalon ja taivuttaa verbejä preesensissä.",
      bn: "শ্রেণি ৫-এর মূল অংশ তৈরি করা এবং বর্তমান কালে ক্রিয়া বদলাতে পারা।",
      en: "Form the type 5 stem and conjugate verbs in the present tense.",
    },
    {
      fi: "Erottaa verbityypit 4 ja 5 toisistaan.",
      bn: "ক্রিয়াশ্রেণি ৪ ও ৫ আলাদা করতে পারা।",
      en: "Tell verb types 4 and 5 apart.",
    },
  ],

  explanation: [
    {
      fi: "Verbityypin 5 infinitiivi päättyy -ita tai -itä: tarvita, valita, häiritä, merkitä, ansaita, lukita.",
      bn: "ক্রিয়াশ্রেণি ৫-এর মূল রূপ -ita অথবা -itä দিয়ে শেষ হয়: tarvita (দরকার হওয়া), valita (বেছে নেওয়া), häiritä (বিরক্ত করা), merkitä (মানে হওয়া), ansaita (আয় করা), lukita (তালা দেওয়া)।",
      en: "The verb type 5 infinitive ends in -ita or -itä: tarvita, valita, häiritä, merkitä, ansaita, lukita.",
    },
    {
      fi: "Vartalon sääntö: poista ta/tä ja lisää tse. Tarvi-ta → tarvitse-, vali-ta → valitse-, häiri-tä → häiritse-. Sääntö on aina sama, eikä tyypissä 5 ole astevaihtelua.",
      bn: "মূল অংশের নিয়ম: ta/tä বাদ দাও এবং tse যোগ করো। tarvi-ta → tarvitse-, vali-ta → valitse-, häiri-tä → häiritse-। নিয়মটি সবসময় একই, আর শ্রেণি ৫-এ কোনো ব্যঞ্জন পরিবর্তন নেই।",
      en: "The stem rule: remove ta/tä and add tse. Tarvi-ta → tarvitse-, vali-ta → valitse-, häiri-tä → häiritse-. The rule is always the same, and type 5 has no consonant gradation.",
    },
    {
      fi: "Hän-muodossa vartalon e pitenee: hän tarvitsee, hän valitsee, hän häiritsee.",
      bn: "hän-এর রূপে মূল অংশের e দীর্ঘ হয়: hän tarvitsee, hän valitsee, hän häiritsee।",
      en: "In the hän form the e of the stem becomes long: hän tarvitsee, hän valitsee, hän häiritsee.",
    },
    {
      fi: "Tarvita taipuu näin: minä tarvitsen, sinä tarvitset, hän tarvitsee, me tarvitsemme, te tarvitsette, he tarvitsevat.",
      bn: "tarvita (দরকার হওয়া) বদলায় এভাবে: minä tarvitsen, sinä tarvitset, hän tarvitsee, me tarvitsemme, te tarvitsette, he tarvitsevat।",
      en: "Tarvita conjugates like this: minä tarvitsen, sinä tarvitset, hän tarvitsee, me tarvitsemme, te tarvitsette, he tarvitsevat.",
    },
    {
      fi: "Häiritä taipuu näin: minä häiritsen, sinä häiritset, hän häiritsee, me häiritsemme, te häiritsette, he häiritsevät. Huomaa vokaalisointu: häiritä-verbissä on ä, joten pääte on -vät.",
      bn: "häiritä (বিরক্ত করা) বদলায় এভাবে: minä häiritsen, sinä häiritset, hän häiritsee, me häiritsemme, te häiritsette, he häiritsevät। স্বরসংগতি খেয়াল করো: häiritä-তে ä আছে, তাই প্রত্যয় -vät।",
      en: "Häiritä conjugates like this: minä häiritsen, sinä häiritset, hän häiritsee, me häiritsemme, te häiritsette, he häiritsevät. Note the vowel harmony: häiritä has ä, so the ending is -vät.",
    },
    {
      fi: "Huomio: kaikki -itä-verbit eivät ole tyyppiä 5. Esimerkiksi hävitä (minä häviän) ja selvitä (minä selviän) kuuluvat tyyppiin 4. Ne kannattaa opetella sanastona.",
      bn: "খেয়াল রাখো: সব -itä ক্রিয়া শ্রেণি ৫-এর নয়। যেমন hävitä (হারানো / হেরে যাওয়া: minä häviän) ও selvitä (টিকে যাওয়া / সামলে ওঠা: minä selviän) শ্রেণি ৪-এর। এগুলো শব্দ হিসেবে আলাদা করে মনে রাখা ভালো।",
      en: "Note: not all -itä verbs are type 5. For example hävitä (minä häviän) and selvitä (minä selviän) belong to type 4. It's best to learn these as vocabulary.",
    },
    {
      fi: "Vertailu: tyyppi 1 vokaali + a/ä (ostaa → osta-), tyyppi 2 -da/-dä (juoda → juo-), tyyppi 3 -la/-ra/-na/-sta (tulla → tule-), tyyppi 4 vokaali + ta/tä (osata → osaa-) ja tyyppi 5 -ita/-itä (tarvita → tarvitse-). Tyypeissä 4 ja 5 molemmissa on ta/tä-loppu, mutta tyypin 5 vartaloon tulee tse.",
      bn: "তুলনা: শ্রেণি ১ স্বরবর্ণ + a/ä (ostaa → osta-), শ্রেণি ২ -da/-dä (juoda → juo-), শ্রেণি ৩ -la/-ra/-na/-sta (tulla → tule-), শ্রেণি ৪ স্বরবর্ণ + ta/tä (osata → osaa-), আর শ্রেণি ৫ -ita/-itä (tarvita → tarvitse-)। শ্রেণি ৪ ও ৫ দুটোতেই ta/tä শেষাংশ আছে, কিন্তু শ্রেণি ৫-এর মূল অংশে tse যোগ হয়।",
      en: "Comparison: type 1 vowel + a/ä (ostaa → osta-), type 2 -da/-dä (juoda → juo-), type 3 -la/-ra/-na/-sta (tulla → tule-), type 4 vowel + ta/tä (osata → osaa-), and type 5 -ita/-itä (tarvita → tarvitse-). Types 4 and 5 both end in ta/tä, but the type 5 stem gets tse.",
    },
    {
      fi: "Kysymys tehdään -ko/-kö-päätteellä: Tarvitsetko apua? Häiritsenkö? Pieni esimakua kiellosta: kielteisessä lauseessa käytetään vartaloa: Minä en tarvitse apua. Hän ei häiritse ketään.",
      bn: "প্রশ্ন তৈরি হয় -ko/-kö দিয়ে: Tarvitsetko apua? (তোমার কি সাহায্য দরকার?) Häiritsenkö? (আমি কি বিরক্ত করছি?) না-বাচক বাক্যের ছোট্ট পরিচয়: না-বাচক বাক্যে মূল অংশ ব্যবহার হয়: Minä en tarvitse apua (আমার সাহায্য দরকার নেই)। Hän ei häiritse ketään (সে কাউকে বিরক্ত করে না)।",
      en: "Questions are made with -ko/-kö: Tarvitsetko apua? Häiritsenkö? A small preview of negation: a negative sentence uses the stem: Minä en tarvitse apua. Hän ei häiritse ketään.",
    },
  ],

  // Reuses the lesson table: one row per type 5 verb.
  pronounTable: [
    { fi: "tarvita → tarvi + tse → tarvitse-", en: "to need → minä tarvitsen, hän tarvitsee", bn: "দরকার হওয়া → minä tarvitsen (আমার দরকার)" },
    { fi: "valita → vali + tse → valitse-", en: "to choose → minä valitsen, hän valitsee", bn: "বেছে নেওয়া → minä valitsen (আমি বেছে নিই)" },
    { fi: "häiritä → häiri + tse → häiritse-", en: "to disturb → minä häiritsen, hän häiritsee", bn: "বিরক্ত করা → minä häiritsen (আমি বিরক্ত করি)" },
    { fi: "merkitä → merki + tse → merkitse-", en: "to mean, to mark → se merkitsee", bn: "মানে হওয়া → se merkitsee (এর মানে)" },
    { fi: "ansaita → ansai + tse → ansaitse-", en: "to earn → minä ansaitsen, hän ansaitsee", bn: "আয় করা → minä ansaitsen (আমি আয় করি)" },
    { fi: "lukita → luki + tse → lukitse-", en: "to lock → minä lukitsen, hän lukitsee", bn: "তালা দেওয়া → minä lukitsen (আমি তালা দিই)" },
  ],

  examples: [
    { fi: "Minä tarvitsen apua.", bn: "আমার সাহায্য দরকার।", en: "I need help." },
    { fi: "Hän tarvitsee uuden puhelimen.", bn: "তার একটা নতুন ফোন দরকার।", en: "He/She needs a new phone." },
    { fi: "Me valitsemme ravintolan.", bn: "আমরা রেস্তোরাঁ বেছে নিই।", en: "We choose the restaurant." },
    { fi: "Sinä häiritset minua.", bn: "তুমি আমাকে বিরক্ত করছ।", en: "You are disturbing me." },
    { fi: "He ansaitsevat hyvin.", bn: "তারা ভালো আয় করে।", en: "They earn well." },
    { fi: "Mitä tämä sana merkitsee?", bn: "এই শব্দের মানে কী?", en: "What does this word mean?" },
    { fi: "Minä lukitsen oven.", bn: "আমি দরজায় তালা দিই।", en: "I lock the door." },
    { fi: "Te valitsette itse.", bn: "তোমরা নিজেরাই বেছে নাও।", en: "You (all) choose yourselves." },
    { fi: "Tarvitsetko apua?", bn: "তোমার কি সাহায্য দরকার?", en: "Do you need help?" },
    { fi: "Häiritsenkö?", bn: "আমি কি বিরক্ত করছি?", en: "Am I disturbing you?" },
    { fi: "Minä en tarvitse apua.", bn: "আমার সাহায্য দরকার নেই।", en: "I don't need help." },
    { fi: "Hän ei häiritse ketään.", bn: "সে কাউকে বিরক্ত করে না।", en: "He/She doesn't disturb anyone." },
  ],

  vocabulary: [
    { fi: "tarvita", bn: "দরকার হওয়া / প্রয়োজন হওয়া", en: "to need" },
    { fi: "valita", bn: "বেছে নেওয়া", en: "to choose" },
    { fi: "häiritä", bn: "বিরক্ত করা", en: "to disturb" },
    { fi: "merkitä", bn: "মানে হওয়া / চিহ্নিত করা", en: "to mean, to mark" },
    { fi: "ansaita", bn: "আয় করা / অর্জন করা", en: "to earn, to deserve" },
    { fi: "lukita", bn: "তালা দেওয়া", en: "to lock" },
    { fi: "mainita", bn: "উল্লেখ করা", en: "to mention" },
    { fi: "apu", bn: "সাহায্য", en: "help" },
    { fi: "puhelin", bn: "ফোন", en: "phone" },
    { fi: "ovi", bn: "দরজা", en: "door" },
    { fi: "sana", bn: "শব্দ", en: "word" },
  ],

  pronunciation: {
    fi: "Tyypin 5 muodoissa on ts-yhdistelmä: tar-vit-sen, va-lit-sen. T ja s äännetään selvästi peräkkäin. Hän-muodossa e on pitkä: tar-vit-see. Paino on aina ensimmäisellä tavulla: TAR-vit-sen.",
    bn: "শ্রেণি ৫-এর রূপগুলোতে ts যুক্তধ্বনি থাকে: tar-vit-sen, va-lit-sen। t ও s পরপর স্পষ্টভাবে উচ্চারিত হয়, অনেকটা বাংলা 'ৎস'-এর মতো। hän-এর রূপে e দীর্ঘ: tar-vit-see। জোর সবসময় প্রথম সিলেবলে: TAR-vit-sen।",
    en: "Type 5 forms contain the combination ts: tar-vit-sen, va-lit-sen. The t and s are pronounced clearly one after the other. In the hän form the e is long: tar-vit-see. Stress is always on the first syllable: TAR-vit-sen.",
  },

  commonMistakes: [
    {
      fi: "Unohdetaan tse: väärin minä tarvin, oikein minä tarvitsen.",
      bn: "tse ভুলে যাওয়া: ভুল minä tarvin, সঠিক minä tarvitsen।",
      en: "Forgetting tse: wrong minä tarvin, right minä tarvitsen.",
    },
    {
      fi: "Taivutetaan kuin tyyppi 4: väärin minä valiaan, oikein minä valitsen.",
      bn: "শ্রেণি ৪-এর মতো বদলানো: ভুল minä valiaan, সঠিক minä valitsen।",
      en: "Conjugating like type 4: wrong minä valiaan, right minä valitsen.",
    },
    {
      fi: "Unohdetaan hän-muodon pitkä e: väärin hän tarvitse, oikein hän tarvitsee.",
      bn: "hän-এর রূপের দীর্ঘ e ভুলে যাওয়া: ভুল hän tarvitse, সঠিক hän tarvitsee।",
      en: "Forgetting the long e in the hän form: wrong hän tarvitse, right hän tarvitsee.",
    },
    {
      fi: "Käytetään kielteisessä lauseessa infinitiiviä: väärin minä en tarvita, oikein minä en tarvitse.",
      bn: "না-বাচক বাক্যে মূল রূপ ব্যবহার করা: ভুল minä en tarvita, সঠিক minä en tarvitse।",
      en: "Using the infinitive in a negative sentence: wrong minä en tarvita, right minä en tarvitse.",
    },
    {
      fi: "Oletetaan, että jokainen -itä-verbi on tyyppiä 5: hävitä on tyyppi 4 (minä häviän).",
      bn: "ধরে নেওয়া যে প্রতিটি -itä ক্রিয়া শ্রেণি ৫-এর: hävitä শ্রেণি ৪ (minä häviän)।",
      en: "Assuming every -itä verb is type 5: hävitä is type 4 (minä häviän).",
    },
  ],

  practice: [
    {
      prompt: {
        fi: "Mikä verbityyppi? valita",
        bn: "কোন ক্রিয়াশ্রেণি? valita",
        en: "Which verb type? valita",
      },
      answer: "Verbityyppi 5 (-ita)",
    },
    {
      prompt: {
        fi: "Mikä verbityyppi? osata",
        bn: "কোন ক্রিয়াশ্রেণি? osata",
        en: "Which verb type? osata",
      },
      answer: "Verbityyppi 4 (-ata)",
    },
    {
      prompt: {
        fi: "Mikä on vartalo? tarvita",
        bn: "মূল অংশ কী? tarvita",
        en: "What is the stem? tarvita",
      },
      answer: "tarvitse-",
    },
    {
      prompt: {
        fi: "Mikä on vartalo? häiritä",
        bn: "মূল অংশ কী? häiritä",
        en: "What is the stem? häiritä",
      },
      answer: "häiritse-",
    },
    {
      prompt: {
        fi: "Täydennä (valita): minä ___",
        bn: "পূরণ করো (valita): minä ___",
        en: "Complete (valita): minä ___",
      },
      answer: "minä valitsen",
    },
    {
      prompt: {
        fi: "Valitse oikea muoto (tarvita): Hän ___ apua.",
        bn: "সঠিক রূপ বেছে নাও (tarvita): Hän ___ apua.",
        en: "Choose the correct form (tarvita): Hän ___ apua.",
      },
      answer: "tarvitsee",
    },
    {
      prompt: {
        fi: "Muuta kysymykseksi: Sinä tarvitset apua.",
        bn: "প্রশ্নে রূপান্তর করো: Sinä tarvitset apua.",
        en: "Turn into a question: Sinä tarvitset apua.",
      },
      answer: "Tarvitsetko (sinä) apua?",
    },
    {
      prompt: {
        fi: "Käännä suomeksi: What does this word mean?",
        bn: "ফিনিশে অনুবাদ করো: এই শব্দের মানে কী?",
        en: "Translate into Finnish: What does this word mean?",
      },
      answer: "Mitä tämä sana merkitsee?",
    },
  ],

  quiz: [
    {
      question: {
        fi: "Mikä verbi kuuluu verbityyppiin 5?",
        en: "Which verb belongs to verb type 5?",
      },
      options: [
        { fi: "osata", en: "osata" },
        { fi: "tarvita", en: "tarvita" },
        { fi: "tulla", en: "tulla" },
        { fi: "juoda", en: "juoda" },
      ],
      correctIndex: 1,
      explanation: {
        fi: "Tarvita päättyy -ita, joten se on tyyppi 5. Osata on tyyppi 4, tulla tyyppi 3 ja juoda tyyppi 2.",
        bn: "tarvita -ita দিয়ে শেষ হয়, তাই এটি শ্রেণি ৫। osata শ্রেণি ৪, tulla শ্রেণি ৩, আর juoda শ্রেণি ২।",
        en: "Tarvita ends in -ita, so it is type 5. Osata is type 4, tulla type 3 and juoda type 2.",
      },
    },
    {
      question: {
        fi: "Mikä on verbin valita vartalo?",
        en: "What is the stem of valita?",
      },
      options: [
        { fi: "valitse-", en: "valitse-" },
        { fi: "vali-", en: "vali-" },
        { fi: "valia-", en: "valia-" },
        { fi: "valit-", en: "valit-" },
      ],
      correctIndex: 0,
      explanation: {
        fi: "Poistetaan ta ja lisätään tse: vali-ta → valitse-.",
        bn: "ta বাদ দিয়ে tse যোগ হয়: vali-ta → valitse-।",
        en: "Remove ta and add tse: vali-ta → valitse-.",
      },
    },
    {
      question: {
        fi: "Täydennä: Hän ___ uuden puhelimen. (tarvita)",
        en: "Fill in: Hän ___ uuden puhelimen. (tarvita)",
      },
      options: [
        { fi: "tarvitse", en: "tarvitse" },
        { fi: "tarvitsee", en: "tarvitsee" },
        { fi: "tarvitsen", en: "tarvitsen" },
        { fi: "tarvitaa", en: "tarvitaa" },
      ],
      correctIndex: 1,
      explanation: {
        fi: "Hän-muodossa vartalon e pitenee: hän tarvitsee.",
        bn: "hän-এর রূপে মূল অংশের e দীর্ঘ হয়: hän tarvitsee।",
        en: "In the hän form the e of the stem becomes long: hän tarvitsee.",
      },
    },
    {
      question: {
        fi: "Täydennä: He ___ minua. (häiritä)",
        en: "Fill in: He ___ minua. (häiritä)",
      },
      options: [
        { fi: "häiritsevät", en: "häiritsevät" },
        { fi: "häiritsevat", en: "häiritsevat" },
        { fi: "häiritsee", en: "häiritsee" },
        { fi: "häiritsemme", en: "häiritsemme" },
      ],
      correctIndex: 0,
      explanation: {
        fi: "He-muodon pääte on -vät, koska häiritä-verbissä on ä: he häiritsevät.",
        bn: "he-র রূপে প্রত্যয় -vät, কারণ häiritä-তে ä আছে: he häiritsevät।",
        en: "The he ending is -vät, because häiritä has ä: he häiritsevät.",
      },
    },
    {
      question: {
        fi: "Täydennä: Minä en ___ apua. (tarvita)",
        en: "Fill in: Minä en ___ apua. (tarvita)",
      },
      options: [
        { fi: "tarvita", en: "tarvita" },
        { fi: "tarvitse", en: "tarvitse" },
        { fi: "tarvitsen", en: "tarvitsen" },
        { fi: "tarvitsee", en: "tarvitsee" },
      ],
      correctIndex: 1,
      explanation: {
        fi: "Kielteisessä lauseessa käytetään vartaloa: minä en tarvitse.",
        bn: "না-বাচক বাক্যে মূল অংশ ব্যবহার হয়: minä en tarvitse।",
        en: "A negative sentence uses the stem: minä en tarvitse.",
      },
    },
  ],

  summary: {
    fi: "Verbityyppi 5 päättyy -ita/-itä (tarvita, valita, häiritä). Vartalo saadaan poistamalla ta/tä ja lisäämällä tse: tarvita → tarvitse-. Hän-muodossa e pitenee (hän tarvitsee). Tyypissä 5 ei ole astevaihtelua. Muista, että jotkin -itä-verbit, kuten hävitä, ovat tyyppiä 4. Verbityyppi 6 opitaan seuraavaksi.",
    bn: "ক্রিয়াশ্রেণি ৫ শেষ হয় -ita/-itä দিয়ে (tarvita, valita, häiritä)। মূল অংশ পেতে ta/tä বাদ দিয়ে tse যোগ করো: tarvita → tarvitse-। hän-এর রূপে e দীর্ঘ হয় (hän tarvitsee)। শ্রেণি ৫-এ কোনো ব্যঞ্জন পরিবর্তন নেই। মনে রাখো, কিছু -itä ক্রিয়া, যেমন hävitä, শ্রেণি ৪-এর। এরপর ক্রিয়াশ্রেণি ৬ শেখানো হবে।",
    en: "Verb type 5 ends in -ita/-itä (tarvita, valita, häiritä). The stem is formed by removing ta/tä and adding tse: tarvita → tarvitse-. The hän form lengthens the e (hän tarvitsee). Type 5 has no consonant gradation. Remember that some -itä verbs, such as hävitä, are type 4. Verb type 6 comes next.",
  },
};