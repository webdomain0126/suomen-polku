import { Lesson } from "./types";

// Month 1 — Finnish Verb Type 3
// Stable lesson ID: month-1-verb-type-3 (see lessonRegistry.ts)
// Stem rule follows Rafiqul Hyder's material: remove the infinitive
// marker (la/lä, ra/rä, na/nä, ta/tä) and add e. In -sta/-stä verbs
// the s stays: pes-tä → pese-.

export const verbType3Lesson: Lesson = {
  slug: "verb-type-3",
  month: 1,

  title: {
    fi: "Verbityyppi 3",
    bn: "ক্রিয়াশ্রেণি ৩",
    en: "Finnish Verb Type 3",
  },

  intro: {
    fi: "Edellisessä oppitunnissa opit verbityypit 1 ja 2. Nyt jatketaan verbityyppiin 3. Siihen kuuluu monia arjen tärkeitä verbejä, kuten tulla, mennä ja opiskella, ja myös jo tuttu olla.",
    bn: "আগের পাঠে তুমি ক্রিয়াশ্রেণি ১ ও ২ শিখেছ। এখন আমরা ক্রিয়াশ্রেণি ৩-এ যাব। এই শ্রেণিতে দৈনন্দিন জীবনের অনেক গুরুত্বপূর্ণ ক্রিয়া আছে, যেমন tulla (আসা), mennä (যাওয়া) ও opiskella (পড়াশোনা করা), আর পরিচিত olla-ও এই শ্রেণির।",
    en: "In the previous lesson you learned verb types 1 and 2. Now we continue with verb type 3. It includes many important everyday verbs, such as tulla, mennä and opiskella, and also the familiar olla.",
  },

  objectives: [
    {
      fi: "Tunnistaa verbityypin 3 infinitiivin neljästä päätteestä.",
      bn: "মূল রূপের চারটি শেষাংশ দেখে ক্রিয়াশ্রেণি ৩ চিনতে পারা।",
      en: "Recognise verb type 3 from its four infinitive endings.",
    },
    {
      fi: "Muodostaa tyypin 3 vartalon oikein jokaisesta päätteestä.",
      bn: "প্রতিটি শেষাংশ থেকে শ্রেণি ৩-এর মূল অংশ সঠিকভাবে তৈরি করতে পারা।",
      en: "Form the type 3 stem correctly from each ending.",
    },
    {
      fi: "Taivuttaa tyypin 3 verbejä preesensissä ja erottaa tyypit 1, 2 ja 3.",
      bn: "শ্রেণি ৩-এর ক্রিয়া বর্তমান কালে বদলাতে পারা এবং শ্রেণি ১, ২ ও ৩ আলাদা করতে পারা।",
      en: "Conjugate type 3 verbs in the present tense and tell types 1, 2 and 3 apart.",
    },
  ],

  explanation: [
    {
      fi: "Verbityypin 3 infinitiivi päättyy johonkin näistä: -la/-lä (tulla, kävellä), -ra/-rä (purra), -na/-nä (mennä) tai -sta/-stä (pestä, nousta). Kolmessa ensimmäisessä ennen loppua on kaksi samaa konsonanttia: ll, rr, nn.",
      bn: "ক্রিয়াশ্রেণি ৩-এর মূল রূপ এগুলোর একটি দিয়ে শেষ হয়: -la/-lä (tulla, kävellä), -ra/-rä (purra), -na/-nä (mennä) অথবা -sta/-stä (pestä, nousta)। প্রথম তিনটিতে শেষের আগে দুটি একই ব্যঞ্জনবর্ণ থাকে: ll, rr, nn।",
      en: "The verb type 3 infinitive ends in one of these: -la/-lä (tulla, kävellä), -ra/-rä (purra), -na/-nä (mennä) or -sta/-stä (pestä, nousta). In the first three, there are two identical consonants before the ending: ll, rr, nn.",
    },
    {
      fi: "Vartalon sääntö: poista infinitiivin tunnus (la/lä, ra/rä, na/nä tai ta/tä) ja lisää e. Silloin kaksoiskonsonantista jää jäljelle vain yksi: tul-la → tule-, kävel-lä → kävele-, pur-ra → pure-, men-nä → mene-.",
      bn: "মূল অংশের নিয়ম: মূল রূপের চিহ্নটি (la/lä, ra/rä, na/nä অথবা ta/tä) বাদ দাও এবং e যোগ করো। তখন দ্বৈত ব্যঞ্জনের শুধু একটি থেকে যায়: tul-la → tule-, kävel-lä → kävele-, pur-ra → pure-, men-nä → mene-।",
      en: "The stem rule: remove the infinitive marker (la/lä, ra/rä, na/nä or ta/tä) and add e. Only one of the double consonants then remains: tul-la → tule-, kävel-lä → kävele-, pur-ra → pure-, men-nä → mene-.",
    },
    {
      fi: "Tärkeä yksityiskohta -sta/-stä-verbeissä: vain ta/tä poistetaan, ja s jää vartaloon: pes-tä → pese-, nous-ta → nouse-. Väärin olisi poistaa koko -sta.",
      bn: "-sta/-stä ক্রিয়ায় একটি গুরুত্বপূর্ণ বিষয়: শুধু ta/tä বাদ যায়, আর s মূল অংশে থেকে যায়: pes-tä → pese- (ধোয়া), nous-ta → nouse- (ওঠা)। পুরো -sta বাদ দেওয়া ভুল হবে।",
      en: "An important detail in -sta/-stä verbs: only ta/tä is removed, and the s stays in the stem: pes-tä → pese-, nous-ta → nouse-. Removing the whole -sta would be wrong.",
    },
    {
      fi: "-ra/-rä- ja -na/-nä-verbejä on vähän. Tavallisimmat ovat purra ja surra sekä mennä ja panna. -la/-lä- ja -sta/-stä-verbejä on paljon enemmän.",
      bn: "-ra/-rä ও -na/-nä দিয়ে শেষ হওয়া ক্রিয়া খুব কম। সবচেয়ে প্রচলিত হলো purra (কামড়ানো) ও surra (শোক করা), আর mennä (যাওয়া) ও panna (রাখা)। -la/-lä ও -sta/-stä ক্রিয়া অনেক বেশি।",
      en: "There are only a few -ra/-rä and -na/-nä verbs. The most common are purra and surra, and mennä and panna. There are many more -la/-lä and -sta/-stä verbs.",
    },
    {
      fi: "Vartaloon lisätään tutut persoonapäätteet. Hän-muodossa vartalon e pitenee: hän tulee, hän menee, hän pesee. Tulla taipuu näin: minä tulen, sinä tulet, hän tulee, me tulemme, te tulette, he tulevat.",
      bn: "মূল অংশের সাথে পরিচিত ব্যক্তিবাচক প্রত্যয়গুলো যোগ হয়। hän-এর রূপে মূল অংশের e দীর্ঘ হয়: hän tulee, hän menee, hän pesee। tulla (আসা) বদলায় এভাবে: minä tulen, sinä tulet, hän tulee, me tulemme, te tulette, he tulevat।",
      en: "The familiar personal endings are added to the stem. In the hän form the e of the stem becomes long: hän tulee, hän menee, hän pesee. Tulla conjugates like this: minä tulen, sinä tulet, hän tulee, me tulemme, te tulette, he tulevat.",
    },
    {
      fi: "Mennä taipuu näin: minä menen, sinä menet, hän menee, me menemme, te menette, he menevät. Pestä taipuu näin: minä pesen, sinä peset, hän pesee, me pesemme, te pesette, he pesevät.",
      bn: "mennä (যাওয়া) বদলায় এভাবে: minä menen, sinä menet, hän menee, me menemme, te menette, he menevät। pestä (ধোয়া) বদলায় এভাবে: minä pesen, sinä peset, hän pesee, me pesemme, te pesette, he pesevät।",
      en: "Mennä conjugates like this: minä menen, sinä menet, hän menee, me menemme, te menette, he menevät. Pestä conjugates like this: minä pesen, sinä peset, hän pesee, me pesemme, te pesette, he pesevät.",
    },
    {
      fi: "Olla kuuluu myös verbityyppiin 3, ja sen vartalo on ole-: minä olen, sinä olet, me olemme, te olette. Kaksi muotoa ovat kuitenkin epäsäännöllisiä: hän on ja he ovat. Nämä opit jo olla-oppitunnissa.",
      bn: "olla-ও ক্রিয়াশ্রেণি ৩-এর, আর এর মূল অংশ ole-: minä olen, sinä olet, me olemme, te olette। তবে দুটি রূপ অনিয়মিত: hän on ও he ovat (hän olee নয়)। এগুলো তুমি olla পাঠেই শিখেছ।",
      en: "Olla also belongs to verb type 3, and its stem is ole-: minä olen, sinä olet, me olemme, te olette. Two forms are irregular, though: hän on and he ovat (not hän olee). You already learned these in the olla lesson.",
    },
    {
      fi: "Vertailu: tyyppi 1 päättyy vokaali + a/ä (puhua → puhu-), tyyppi 2 päättyy -da/-dä (juoda → juo-) ja tyyppi 3 päättyy -la/-ra/-na/-sta (tulla → tule-). Tyypeissä 1 ja 3 hän-muodon vokaali pitenee (hän puhuu, hän tulee), tyypissä 2 ei (hän juo).",
      bn: "তুলনা: শ্রেণি ১ শেষ হয় স্বরবর্ণ + a/ä দিয়ে (puhua → puhu-), শ্রেণি ২ শেষ হয় -da/-dä দিয়ে (juoda → juo-), আর শ্রেণি ৩ শেষ হয় -la/-ra/-na/-sta দিয়ে (tulla → tule-)। শ্রেণি ১ ও ৩-এ hän-এর রূপে স্বর দীর্ঘ হয় (hän puhuu, hän tulee), শ্রেণি ২-এ হয় না (hän juo)।",
      en: "Comparison: type 1 ends in vowel + a/ä (puhua → puhu-), type 2 ends in -da/-dä (juoda → juo-), and type 3 ends in -la/-ra/-na/-sta (tulla → tule-). In types 1 and 3 the hän form lengthens the vowel (hän puhuu, hän tulee); in type 2 it does not (hän juo).",
    },
    {
      fi: "Huomio: joissakin -la/-lä-verbeissä vartalon konsonantti muuttuu, esimerkiksi ajatella → minä ajattelen ja kuunnella → minä kuuntelen. Tämä astevaihtelu opitaan myöhemmin. Tämän oppitunnin esimerkkiverbeissä sitä ei ole.",
      bn: "খেয়াল রাখো: কিছু -la/-lä ক্রিয়ায় মূল অংশের ব্যঞ্জনবর্ণ বদলায়, যেমন ajatella (ভাবা) → minä ajattelen, kuunnella (শোনা) → minä kuuntelen। এই পরিবর্তন (astevaihtelu) পরে শেখানো হবে। এই পাঠের উদাহরণের ক্রিয়াগুলোতে এটি নেই।",
      en: "Note: in some -la/-lä verbs a consonant in the stem changes, for example ajatella → minä ajattelen and kuunnella → minä kuuntelen. This consonant gradation is taught later. The example verbs in this lesson have none.",
    },
    {
      fi: "Kysymys tehdään tuttuun tapaan -ko/-kö-päätteellä: Tuletko huomenna? Menetkö kotiin? Pieni esimakua kiellosta: kielteisessä lauseessa käytetään vartaloa: Minä en tule tänään. Hän ei mene kouluun.",
      bn: "প্রশ্ন তৈরি হয় পরিচিত নিয়মে, -ko/-kö দিয়ে: Tuletko huomenna? (তুমি কি আগামীকাল আসবে?) Menetkö kotiin? (তুমি কি বাড়ি যাচ্ছ?) না-বাচক বাক্যের ছোট্ট পরিচয়: না-বাচক বাক্যে মূল অংশ ব্যবহার হয়: Minä en tule tänään (আমি আজ আসব না)। Hän ei mene kouluun (সে স্কুলে যায় না)।",
      en: "Questions are made the familiar way with -ko/-kö: Tuletko huomenna? Menetkö kotiin? A small preview of negation: a negative sentence uses the stem: Minä en tule tänään. Hän ei mene kouluun.",
    },
  ],

  // Reuses the lesson table: one row per type 3 ending pattern.
  pronounTable: [
    { fi: "tulla → tul + e → tule-", en: "-la · to come → minä tulen", bn: "আসা → minä tulen (আমি আসি)" },
    { fi: "kävellä → kävel + e → kävele-", en: "-lä · to walk → minä kävelen", bn: "হাঁটা → minä kävelen (আমি হাঁটি)" },
    { fi: "purra → pur + e → pure-", en: "-ra · to bite → minä puren", bn: "কামড়ানো → minä puren (আমি কামড়াই)" },
    { fi: "mennä → men + e → mene-", en: "-nä · to go → minä menen", bn: "যাওয়া → minä menen (আমি যাই)" },
    { fi: "pestä → pes + e → pese-", en: "-tä (s stays) · to wash → minä pesen", bn: "ধোয়া → minä pesen (আমি ধুই)" },
    { fi: "nousta → nous + e → nouse-", en: "-ta (s stays) · to rise, get up → minä nousen", bn: "ওঠা → minä nousen (আমি উঠি)" },
  ],

  examples: [
    { fi: "Minä tulen kotiin.", bn: "আমি বাড়ি আসি।", en: "I come home." },
    { fi: "Me menemme kauppaan.", bn: "আমরা দোকানে যাই।", en: "We go to the shop." },
    { fi: "He opiskelevat yliopistossa.", bn: "তারা বিশ্ববিদ্যালয়ে পড়াশোনা করে।", en: "They study at the university." },
    { fi: "Sinä kävelet nopeasti.", bn: "তুমি দ্রুত হাঁটো।", en: "You walk fast." },
    { fi: "Minä pesen kädet.", bn: "আমি হাত ধুই।", en: "I wash my hands." },
    { fi: "Hän nousee aikaisin.", bn: "সে তাড়াতাড়ি ওঠে।", en: "He/She gets up early." },
    { fi: "Koira puree.", bn: "কুকুরটা কামড়ায়।", en: "The dog bites." },
    { fi: "Te tulette huomenna.", bn: "তোমরা আগামীকাল আসবে।", en: "You (all) are coming tomorrow." },
    { fi: "Tuletko huomenna?", bn: "তুমি কি আগামীকাল আসবে?", en: "Are you coming tomorrow?" },
    { fi: "Menetkö kotiin?", bn: "তুমি কি বাড়ি যাচ্ছ?", en: "Are you going home?" },
    { fi: "Minä en tule tänään.", bn: "আমি আজ আসব না।", en: "I'm not coming today." },
    { fi: "Hän ei mene kouluun.", bn: "সে স্কুলে যায় না।", en: "He/She doesn't go to school." },
  ],

  vocabulary: [
    { fi: "tulla", bn: "আসা", en: "to come" },
    { fi: "mennä", bn: "যাওয়া", en: "to go" },
    { fi: "opiskella", bn: "পড়াশোনা করা", en: "to study" },
    { fi: "kävellä", bn: "হাঁটা", en: "to walk" },
    { fi: "pestä", bn: "ধোয়া", en: "to wash" },
    { fi: "nousta", bn: "ওঠা", en: "to rise, to get up" },
    { fi: "purra", bn: "কামড়ানো", en: "to bite" },
    { fi: "panna", bn: "রাখা", en: "to put" },
    { fi: "kotiin", bn: "বাড়িতে (বাড়ির দিকে)", en: "home (to home)" },
    { fi: "kauppa", bn: "দোকান", en: "shop" },
    { fi: "yliopisto", bn: "বিশ্ববিদ্যালয়", en: "university" },
    { fi: "aikaisin", bn: "তাড়াতাড়ি / ভোরে", en: "early" },
  ],

  pronunciation: {
    fi: "Infinitiivissä konsonantti on pitkä (tul-la, men-nä), mutta preesensmuodoissa lyhyt (tu-len, me-nen). Hän-muodossa e on pitkä: tu-lee, me-nee. Paino on aina ensimmäisellä tavulla: TU-lem-me.",
    bn: "মূল রূপে ব্যঞ্জনবর্ণ দীর্ঘ (tul-la, men-nä), কিন্তু বর্তমান কালের রূপে হ্রস্ব (tu-len, me-nen)। hän-এর রূপে e দীর্ঘ: tu-lee, me-nee। জোর সবসময় প্রথম সিলেবলে: TU-lem-me।",
    en: "In the infinitive the consonant is long (tul-la, men-nä), but in the present-tense forms it is short (tu-len, me-nen). In the hän form the e is long: tu-lee, me-nee. Stress is always on the first syllable: TU-lem-me.",
  },

  commonMistakes: [
    {
      fi: "Poistetaan -sta-verbistä koko -sta: väärin minä nouen, oikein minä nousen (s jää).",
      bn: "-sta ক্রিয়া থেকে পুরো -sta বাদ দেওয়া: ভুল minä nouen, সঠিক minä nousen (s থেকে যায়)।",
      en: "Removing the whole -sta: wrong minä nouen, right minä nousen (the s stays).",
    },
    {
      fi: "Jätetään kaksoiskonsonantti vartaloon: väärin minä tullen, oikein minä tulen.",
      bn: "দ্বৈত ব্যঞ্জন মূল অংশে রেখে দেওয়া: ভুল minä tullen, সঠিক minä tulen।",
      en: "Keeping the double consonant in the stem: wrong minä tullen, right minä tulen.",
    },
    {
      fi: "Unohdetaan hän-muodon pitkä e: väärin hän tule, oikein hän tulee.",
      bn: "hän-এর রূপের দীর্ঘ e ভুলে যাওয়া: ভুল hän tule, সঠিক hän tulee।",
      en: "Forgetting the long e in the hän form: wrong hän tule, right hän tulee.",
    },
    {
      fi: "Taivutetaan olla täysin säännöllisesti: väärin hän olee, oikein hän on.",
      bn: "olla-কে পুরোপুরি নিয়মিত ধরে নেওয়া: ভুল hän olee, সঠিক hän on।",
      en: "Treating olla as fully regular: wrong hän olee, right hän on.",
    },
  ],

  practice: [
    {
      prompt: {
        fi: "Mikä verbityyppi? kävellä",
        bn: "কোন ক্রিয়াশ্রেণি? kävellä",
        en: "Which verb type? kävellä",
      },
      answer: "Verbityyppi 3 (-lä)",
    },
    {
      prompt: {
        fi: "Mikä verbityyppi? nousta",
        bn: "কোন ক্রিয়াশ্রেণি? nousta",
        en: "Which verb type? nousta",
      },
      answer: "Verbityyppi 3 (-sta)",
    },
    {
      prompt: {
        fi: "Mikä on vartalo? mennä",
        bn: "মূল অংশ কী? mennä",
        en: "What is the stem? mennä",
      },
      answer: "mene-",
    },
    {
      prompt: {
        fi: "Mikä on vartalo? pestä",
        bn: "মূল অংশ কী? pestä",
        en: "What is the stem? pestä",
      },
      answer: "pese- (s jää / s stays)",
    },
    {
      prompt: {
        fi: "Täydennä (tulla): minä ___",
        bn: "পূরণ করো (tulla): minä ___",
        en: "Complete (tulla): minä ___",
      },
      answer: "minä tulen",
    },
    {
      prompt: {
        fi: "Valitse oikea muoto (opiskella): He ___ yliopistossa.",
        bn: "সঠিক রূপ বেছে নাও (opiskella): He ___ yliopistossa.",
        en: "Choose the correct form (opiskella): He ___ yliopistossa.",
      },
      answer: "opiskelevat",
    },
    {
      prompt: {
        fi: "Muuta kysymykseksi: Sinä tulet huomenna.",
        bn: "প্রশ্নে রূপান্তর করো: Sinä tulet huomenna.",
        en: "Turn into a question: Sinä tulet huomenna.",
      },
      answer: "Tuletko (sinä) huomenna?",
    },
    {
      prompt: {
        fi: "Käännä suomeksi: I get up early.",
        bn: "ফিনিশে অনুবাদ করো: আমি তাড়াতাড়ি উঠি।",
        en: "Translate into Finnish: I get up early.",
      },
      answer: "Minä nousen aikaisin.",
    },
  ],

  quiz: [
    {
      question: {
        fi: "Mikä verbi kuuluu verbityyppiin 3?",
        en: "Which verb belongs to verb type 3?",
      },
      options: [
        { fi: "puhua", en: "puhua" },
        { fi: "juoda", en: "juoda" },
        { fi: "kävellä", en: "kävellä" },
        { fi: "ostaa", en: "ostaa" },
      ],
      correctIndex: 2,
      explanation: {
        fi: "Kävellä päättyy -lä, joten se on tyyppi 3. Puhua ja ostaa ovat tyyppi 1, juoda tyyppi 2.",
        bn: "kävellä -lä দিয়ে শেষ হয়, তাই এটি শ্রেণি ৩। puhua ও ostaa শ্রেণি ১, juoda শ্রেণি ২।",
        en: "Kävellä ends in -lä, so it is type 3. Puhua and ostaa are type 1, juoda is type 2.",
      },
    },
    {
      question: {
        fi: "Mikä on verbin nousta vartalo?",
        en: "What is the stem of nousta?",
      },
      options: [
        { fi: "nouse-", en: "nouse-" },
        { fi: "noue-", en: "noue-" },
        { fi: "nousta-", en: "nousta-" },
        { fi: "noust-", en: "noust-" },
      ],
      correctIndex: 0,
      explanation: {
        fi: "Poistetaan ta, s jää, ja lisätään e: nous-ta → nouse-.",
        bn: "ta বাদ যায়, s থাকে, আর e যোগ হয়: nous-ta → nouse-।",
        en: "Remove ta, keep the s, and add e: nous-ta → nouse-.",
      },
    },
    {
      question: {
        fi: "Täydennä: Hän ___ kotiin. (tulla)",
        en: "Fill in: Hän ___ kotiin. (tulla)",
      },
      options: [
        { fi: "tule", en: "tule" },
        { fi: "tulee", en: "tulee" },
        { fi: "tullee", en: "tullee" },
        { fi: "tulen", en: "tulen" },
      ],
      correctIndex: 1,
      explanation: {
        fi: "Hän-muodossa vartalon e pitenee: hän tulee.",
        bn: "hän-এর রূপে মূল অংশের e দীর্ঘ হয়: hän tulee।",
        en: "In the hän form the e of the stem becomes long: hän tulee.",
      },
    },
    {
      question: {
        fi: "Täydennä: Me ___ kauppaan. (mennä)",
        en: "Fill in: Me ___ kauppaan. (mennä)",
      },
      options: [
        { fi: "menemme", en: "menemme" },
        { fi: "mennemme", en: "mennemme" },
        { fi: "menevät", en: "menevät" },
        { fi: "menette", en: "menette" },
      ],
      correctIndex: 0,
      explanation: {
        fi: "Vartalo on mene- ja me-muodon pääte -mme: me menemme.",
        bn: "মূল অংশ mene-, আর me-র প্রত্যয় -mme: me menemme।",
        en: "The stem is mene- and the me ending is -mme: me menemme.",
      },
    },
    {
      question: {
        fi: "Mikä lause on oikein?",
        en: "Which sentence is correct?",
      },
      options: [
        { fi: "Hän olee kotona.", en: "Hän olee kotona." },
        { fi: "Hän on kotona.", en: "Hän on kotona." },
        { fi: "Hän ole kotona.", en: "Hän ole kotona." },
        { fi: "Hän olen kotona.", en: "Hän olen kotona." },
      ],
      correctIndex: 1,
      explanation: {
        fi: "Olla on tyyppi 3, mutta hän-muoto on epäsäännöllinen: hän on.",
        bn: "olla শ্রেণি ৩-এর, কিন্তু hän-এর রূপটি অনিয়মিত: hän on।",
        en: "Olla is type 3, but its hän form is irregular: hän on.",
      },
    },
  ],

  summary: {
    fi: "Verbityyppi 3 päättyy -la/-lä, -ra/-rä, -na/-nä tai -sta/-stä. Vartalo saadaan poistamalla tunnus (la, ra, na, ta) ja lisäämällä e: tulla → tule-, mennä → mene-, pestä → pese- (s jää). Hän-muodossa e pitenee (hän tulee). Olla kuuluu tyyppiin 3, mutta hän on ja he ovat ovat epäsäännöllisiä. Astevaihtelu ja verbityypit 4–6 opitaan myöhemmin.",
    bn: "ক্রিয়াশ্রেণি ৩ শেষ হয় -la/-lä, -ra/-rä, -na/-nä অথবা -sta/-stä দিয়ে। মূল অংশ পেতে চিহ্নটি (la, ra, na, ta) বাদ দিয়ে e যোগ করো: tulla → tule-, mennä → mene-, pestä → pese- (s থেকে যায়)। hän-এর রূপে e দীর্ঘ হয় (hän tulee)। olla শ্রেণি ৩-এর, কিন্তু hän on ও he ovat অনিয়মিত। ব্যঞ্জন পরিবর্তন (astevaihtelu) ও ক্রিয়াশ্রেণি ৪–৬ পরে শেখানো হবে।",
    en: "Verb type 3 ends in -la/-lä, -ra/-rä, -na/-nä or -sta/-stä. The stem is formed by removing the marker (la, ra, na, ta) and adding e: tulla → tule-, mennä → mene-, pestä → pese- (the s stays). The hän form lengthens the e (hän tulee). Olla belongs to type 3, but hän on and he ovat are irregular. Consonant gradation and verb types 4–6 come later.",
  },
};