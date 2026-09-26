import { Lesson } from "./types";

// Month 1 — Finnish Alphabet & Pronunciation
// Stable lesson ID: month-1-finnish-alphabet-pronunciation (see lessonRegistry.ts)

export const finnishAlphabetLesson: Lesson = {
  slug: "finnish-alphabet-pronunciation",
  month: 1,

  title: {
    fi: "Suomen aakkoset ja ääntäminen",
    bn: "ফিনিশ বর্ণমালা ও উচ্চারণ",
    en: "Finnish Alphabet & Pronunciation",
  },

  intro: {
    fi: "Suomen ääntäminen on helpompaa kuin moni luulee: sanat äännetään lähes täsmälleen niin kuin ne kirjoitetaan. Kun opit kirjainten äänteet, osaat lukea ääneen melkein minkä tahansa suomen sanan.",
    bn: "ফিনিশ উচ্চারণ অনেকের ধারণার চেয়ে সহজ: শব্দ প্রায় ঠিক যেভাবে লেখা হয়, সেভাবেই উচ্চারণ করা হয়। অক্ষরগুলোর ধ্বনি শিখে নিলে তুমি প্রায় যেকোনো ফিনিশ শব্দ জোরে পড়তে পারবে।",
    en: "Finnish pronunciation is easier than many people think: words are pronounced almost exactly as they are written. Once you learn the sounds of the letters, you can read almost any Finnish word aloud.",
  },

  objectives: [
    {
      fi: "Tuntea suomen aakkoset ja niiden tärkeimmät äänteet.",
      bn: "ফিনিশ বর্ণমালা ও তার প্রধান ধ্বনিগুলো চেনা।",
      en: "Know the Finnish alphabet and its main sounds.",
    },
    {
      fi: "Ääntää suomen kahdeksan vokaalia, myös y, ä ja ö.",
      bn: "ফিনিশ ভাষার আটটি স্বরবর্ণ উচ্চারণ করতে পারা, y, ä ও ö সহ।",
      en: "Pronounce the eight Finnish vowels, including y, ä and ö.",
    },
    {
      fi: "Erottaa lyhyet ja pitkät äänteet toisistaan.",
      bn: "হ্রস্ব ও দীর্ঘ ধ্বনির পার্থক্য বুঝতে পারা।",
      en: "Tell short and long sounds apart.",
    },
  ],

  explanation: [
    {
      fi: "Suomen aakkosissa on 29 kirjainta: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z Å Ä Ö.",
      bn: "ফিনিশ বর্ণমালায় ২৯টি অক্ষর আছে: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z Å Ä Ö।",
      en: "The Finnish alphabet has 29 letters: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z Å Ä Ö.",
    },
    {
      fi: "Kirjaimet b, c, f, g, q, w, x, z ja å ovat harvinaisia alkuperäisissä suomen sanoissa. Niitä näkee lähinnä nimissä ja lainasanoissa, kuten banaani, filmi ja pizza. Å esiintyy yleensä ruotsinkielisissä nimissä.",
      bn: "b, c, f, g, q, w, x, z এবং å অক্ষরগুলো মূল ফিনিশ শব্দে খুব কম দেখা যায়। এগুলো সাধারণত নাম ও অন্য ভাষা থেকে আসা শব্দে থাকে, যেমন banaani, filmi ও pizza। Å সাধারণত সুইডিশ নামে দেখা যায়।",
      en: "The letters b, c, f, g, q, w, x, z and å are rare in native Finnish words. You mostly see them in names and loanwords, such as banaani, filmi and pizza. Å usually appears in Swedish names.",
    },
    {
      fi: "Suomessa jokainen kirjain äännetään, eikä hiljaisia kirjaimia ole. Sama kirjain äännetään aina samalla tavalla. Siksi ääntäminen kannattaa oppia kirjoitetusta muodosta, ei englannin oikeinkirjoituksen perusteella.",
      bn: "ফিনিশে প্রতিটি অক্ষর উচ্চারিত হয়, কোনো নীরব অক্ষর নেই। একই অক্ষর সবসময় একইভাবে উচ্চারিত হয়। তাই উচ্চারণ লেখা রূপ থেকে শেখা উচিত, ইংরেজি বানানের নিয়ম ধরে নয়।",
      en: "In Finnish every letter is pronounced, and there are no silent letters. The same letter is always pronounced the same way. So learn pronunciation from the written form, not from English spelling habits.",
    },
    {
      fi: "Suomessa on kahdeksan vokaalia: a, e, i, o, u, y, ä ja ö. Vokaalit y, ä ja ö ovat monelle oppijalle uusia, joten niitä kannattaa harjoitella erityisesti. Alla olevassa taulukossa on jokaisen vokaalin esimerkkisana ja ääntämisohje.",
      bn: "ফিনিশ ভাষায় আটটি স্বরবর্ণ আছে: a, e, i, o, u, y, ä ও ö। y, ä ও ö অনেক শিক্ষার্থীর কাছে নতুন, তাই এগুলো বিশেষভাবে অনুশীলন করা দরকার। নিচের টেবিলে প্রতিটি স্বরবর্ণের একটি উদাহরণ শব্দ ও উচ্চারণের নির্দেশনা আছে।",
      en: "Finnish has eight vowels: a, e, i, o, u, y, ä and ö. The vowels y, ä and ö are new for many learners, so practise them especially. The table below gives an example word and a pronunciation tip for each vowel.",
    },
    {
      fi: "Kaksi samaa vokaalia peräkkäin tarkoittaa pitkää vokaalia. Pituus voi muuttaa sanan merkityksen: esimerkiksi tuli ja tuuli ovat kaksi eri sanaa.",
      bn: "একই স্বরবর্ণ পরপর দুবার লেখা থাকলে সেটি দীর্ঘ স্বর। দৈর্ঘ্য শব্দের অর্থ বদলে দিতে পারে: tuli মানে আগুন, কিন্তু tuuli মানে বাতাস।",
      en: "Two identical vowels in a row mean a long vowel. Length can change the meaning of a word: tuli means 'fire', but tuuli means 'wind'.",
    },
    {
      fi: "Samoin kaksi samaa konsonanttia peräkkäin tarkoittaa pitkää konsonanttia. Esimerkiksi kuka ja kukka sekä mato ja matto ovat eri sanoja. Pitkää konsonanttia pidetään hetki ennen kuin sana jatkuu.",
      bn: "একইভাবে, একই ব্যঞ্জনবর্ণ পরপর দুবার থাকলে সেটি দীর্ঘ ব্যঞ্জন। যেমন kuka মানে 'কে', কিন্তু kukka মানে 'ফুল'; mato মানে 'কেঁচো', কিন্তু matto মানে 'কার্পেট'। দীর্ঘ ব্যঞ্জনে একটু থেমে তারপর শব্দটি এগিয়ে নেওয়া হয়, বাংলা 'পাক্কা' শব্দের 'ক্ক'-এর মতো।",
      en: "Likewise, two identical consonants in a row mean a long consonant. For example, kuka means 'who' but kukka means 'flower'; mato means 'worm' but matto means 'rug'. You hold a long consonant for a moment before the word continues.",
    },
    {
      fi: "Suomen sanan paino on aina ensimmäisellä tavulla. Pitkät sanat on helpompi lukea, kun jaat ne tavuihin: o-pis-ke-li-ja.",
      bn: "ফিনিশ শব্দে জোর সবসময় প্রথম সিলেবলে পড়ে। লম্বা শব্দকে সিলেবলে ভাগ করে পড়লে সহজ হয়: o-pis-ke-li-ja।",
      en: "In Finnish, stress always falls on the first syllable of a word. Long words are easier to read when you split them into syllables: o-pis-ke-li-ja.",
    },
    {
      fi: "Useimmat konsonantit ovat helppoja. Huomaa kuitenkin: r on aina tärisevä r, h äännetään aina, j äännetään kuten englannin sanan yes y, ja p, t ja k äännetään ilman henkäystä.",
      bn: "বেশিরভাগ ব্যঞ্জনবর্ণ সহজ। তবে খেয়াল রাখো: r সবসময় জিভ কাঁপিয়ে উচ্চারিত হয়, বাংলা 'র'-এর মতো; h সবসময় উচ্চারিত হয়; j উচ্চারিত হয় বাংলা 'য়'-এর মতো (ইংরেজি yes শব্দের y); আর p, t, k উচ্চারিত হয় বাতাস না ছেড়ে, বাংলা প, ত, ক-এর মতো, ফ, থ, খ-এর মতো নয়।",
      en: "Most consonants are easy. But note: r is always rolled; h is always pronounced; j sounds like the y in 'yes'; and p, t and k are pronounced without a puff of air.",
    },
  ],

  // Reuses the lesson table: here each row is one vowel.
  pronounTable: [
    {
      fi: "a — aamu",
      en: "morning · open a, close to the 'a' in 'father'",
      bn: "সকাল · বাংলা 'আ'-এর কাছাকাছি",
    },
    {
      fi: "e — eno",
      en: "uncle (mother's brother) · close to the 'e' in 'bed'",
      bn: "মামা · বাংলা 'এ'-এর কাছাকাছি",
    },
    {
      fi: "i — iso",
      en: "big · close to the 'i' in 'machine'",
      bn: "বড় · বাংলা 'ই'-এর কাছাকাছি",
    },
    {
      fi: "o — olla",
      en: "to be · a pure o with rounded lips",
      bn: "হওয়া · বাংলা 'ও'-এর কাছাকাছি",
    },
    {
      fi: "u — uni",
      en: "sleep · close to the 'oo' in 'food', but shorter",
      bn: "ঘুম · বাংলা 'উ'-এর কাছাকাছি",
    },
    {
      fi: "y — yksi",
      en: "one · say 'i' with lips rounded as for 'u' (no English equivalent)",
      bn: "এক · 'ই' বলো, কিন্তু ঠোঁট 'উ'-এর মতো গোল করে (বাংলায় এমন ধ্বনি নেই)",
    },
    {
      fi: "ä — äiti",
      en: "mother · close to the 'a' in 'cat'",
      bn: "মা · বাংলা 'অ্যা'-এর কাছাকাছি",
    },
    {
      fi: "ö — öljy",
      en: "oil · say 'e' with lips rounded as for 'o' (no English equivalent)",
      bn: "তেল · 'এ' বলো, কিন্তু ঠোঁট 'ও'-এর মতো গোল করে (বাংলায় এমন ধ্বনি নেই)",
    },
  ],

  examples: [
    {
      fi: "Minä olen opiskelija.",
      bn: "আমি একজন শিক্ষার্থী।",
      en: "I am a student.",
    },
    {
      fi: "Tuuli on kylmä.",
      bn: "বাতাস ঠান্ডা।",
      en: "The wind is cold.",
    },
    {
      fi: "Äiti juo kahvia.",
      bn: "মা কফি খান।",
      en: "Mother drinks coffee.",
    },
    {
      fi: "Kukka on kaunis.",
      bn: "ফুলটি সুন্দর।",
      en: "The flower is beautiful.",
    },
    {
      fi: "Yö on pitkä.",
      bn: "রাতটি দীর্ঘ।",
      en: "The night is long.",
    },
    {
      fi: "Kuka sinä olet?",
      bn: "তুমি কে?",
      en: "Who are you?",
    },
  ],

  vocabulary: [
    { fi: "aamu", bn: "সকাল", en: "morning" },
    { fi: "äiti", bn: "মা", en: "mother" },
    { fi: "yksi", bn: "এক", en: "one" },
    { fi: "öljy", bn: "তেল", en: "oil" },
    { fi: "tuli", bn: "আগুন", en: "fire" },
    { fi: "tuuli", bn: "বাতাস", en: "wind" },
    { fi: "kuka", bn: "কে", en: "who" },
    { fi: "kukka", bn: "ফুল", en: "flower" },
    { fi: "mato", bn: "কেঁচো", en: "worm" },
    { fi: "matto", bn: "কার্পেট", en: "rug" },
  ],

  pronunciation: {
    fi: "Harjoittele näitä pareja ääneen: tuli – tuuli, kuka – kukka, mato – matto, saa – sää. Tee pitkästä äänteestä selvästi pidempi, noin kaksi kertaa niin pitkä kuin lyhyestä. Lue sanat hitaasti ja äännä jokainen kirjain.",
    bn: "এই জোড়াগুলো জোরে জোরে অনুশীলন করো: tuli – tuuli, kuka – kukka, mato – matto, saa – sää। দীর্ঘ ধ্বনিকে স্পষ্টভাবে লম্বা করো, হ্রস্ব ধ্বনির প্রায় দ্বিগুণ। শব্দগুলো ধীরে পড়ো এবং প্রতিটি অক্ষর উচ্চারণ করো।",
    en: "Practise these pairs aloud: tuli – tuuli, kuka – kukka, mato – matto, saa – sää. Make the long sound clearly longer, about twice as long as the short one. Read the words slowly and pronounce every letter.",
  },

  commonMistakes: [
    {
      fi: "Suomen sanoja luetaan englannin sääntöjen mukaan, esimerkiksi i äännetään kuten englannin sanassa 'like'. Suomessa i on aina i.",
      bn: "ইংরেজি বানানের নিয়মে ফিনিশ শব্দ পড়া, যেমন i-কে ইংরেজি 'like' শব্দের মতো 'আই' পড়া। ফিনিশে i সবসময় 'ই'।",
      en: "Reading Finnish words with English rules, e.g. pronouncing i as in 'like'. In Finnish, i is always 'ee'.",
    },
    {
      fi: "Ä äännetään kuten a. Ne ovat eri vokaaleja: saa ja sää ovat eri sanoja.",
      bn: "ä-কে a-এর মতো উচ্চারণ করা। এরা আলাদা স্বরবর্ণ: saa মানে 'পায়', আর sää মানে 'আবহাওয়া'।",
      en: "Pronouncing ä like a. They are different vowels: saa means 'gets', while sää means 'weather'.",
    },
    {
      fi: "Pitkä ja lyhyt äänne äännetään yhtä pitkinä, jolloin esimerkiksi tuli ja tuuli kuulostavat samalta.",
      bn: "দীর্ঘ ও হ্রস্ব ধ্বনি একই দৈর্ঘ্যে উচ্চারণ করা, ফলে tuli (আগুন) আর tuuli (বাতাস) একই রকম শোনায়।",
      en: "Pronouncing long and short sounds with the same length, so that tuli (fire) and tuuli (wind) sound the same.",
    },
    {
      fi: "Y äännetään kuten u tai i. Y on oma vokaalinsa: kieli on kuin i:ssä, mutta huulet ovat pyöreät kuin u:ssa.",
      bn: "y-কে u বা i-এর মতো উচ্চারণ করা। y একটি আলাদা স্বরবর্ণ: জিভ থাকে 'ই'-এর মতো, কিন্তু ঠোঁট গোল থাকে 'উ'-এর মতো।",
      en: "Pronouncing y like u or i. Y is its own vowel: the tongue is placed as for i, but the lips are rounded as for u.",
    },
  ],

  practice: [
    {
      prompt: {
        fi: "Kumpi sana tarkoittaa tuulta: tuli vai tuuli?",
        bn: "কোন শব্দের অর্থ 'বাতাস': tuli নাকি tuuli?",
        en: "Which word means 'wind': tuli or tuuli?",
      },
      answer: "tuuli",
    },
    {
      prompt: {
        fi: "Kumpi sana tarkoittaa kukkaa: kuka vai kukka?",
        bn: "কোন শব্দের অর্থ 'ফুল': kuka নাকি kukka?",
        en: "Which word means 'flower': kuka or kukka?",
      },
      answer: "kukka",
    },
    {
      prompt: {
        fi: "Jaa sana tavuihin: opiskelija",
        bn: "শব্দটিকে সিলেবলে ভাগ করো: opiskelija",
        en: "Split the word into syllables: opiskelija",
      },
      answer: "o-pis-ke-li-ja",
    },
  ],

  quiz: [
    {
      question: {
        fi: "Montako kirjainta suomen aakkosissa on?",
        en: "How many letters are in the Finnish alphabet?",
      },
      options: [
        { fi: "26", en: "26" },
        { fi: "28", en: "28" },
        { fi: "29", en: "29" },
        { fi: "30", en: "30" },
      ],
      correctIndex: 2,
      explanation: {
        fi: "Suomen aakkosissa on 29 kirjainta, A:sta Ö:hön.",
        bn: "ফিনিশ বর্ণমালায় A থেকে Ö পর্যন্ত ২৯টি অক্ষর আছে।",
        en: "The Finnish alphabet has 29 letters, from A to Ö.",
      },
    },
    {
      question: {
        fi: "Mitä kaksi samaa vokaalia peräkkäin tarkoittaa?",
        en: "What do two identical vowels in a row mean?",
      },
      options: [
        { fi: "Pitkää vokaalia", en: "A long vowel" },
        { fi: "Hiljaista kirjainta", en: "A silent letter" },
        { fi: "Kahta eri äännettä", en: "Two different sounds" },
        { fi: "Painollista tavua", en: "A stressed syllable" },
      ],
      correctIndex: 0,
      explanation: {
        fi: "Kaksoisvokaali tarkoittaa pitkää vokaalia, esimerkiksi tuuli.",
        bn: "দ্বৈত স্বরবর্ণ মানে দীর্ঘ স্বর, যেমন tuuli।",
        en: "A double vowel means a long vowel, as in tuuli.",
      },
    },
    {
      question: {
        fi: "Millä tavulla suomen sanan paino on?",
        en: "Which syllable is stressed in a Finnish word?",
      },
      options: [
        { fi: "Ensimmäisellä", en: "The first" },
        { fi: "Toisella", en: "The second" },
        { fi: "Viimeisellä", en: "The last" },
        { fi: "Se vaihtelee", en: "It varies" },
      ],
      correctIndex: 0,
      explanation: {
        fi: "Suomessa paino on aina sanan ensimmäisellä tavulla.",
        bn: "ফিনিশে জোর সবসময় শব্দের প্রথম সিলেবলে পড়ে।",
        en: "In Finnish, stress is always on the first syllable of the word.",
      },
    },
    {
      question: {
        fi: "Mikä sana tarkoittaa kukkaa?",
        en: "Which word means 'flower'?",
      },
      options: [
        { fi: "kuka", en: "kuka" },
        { fi: "kukka", en: "kukka" },
        { fi: "kukko", en: "kukko" },
        { fi: "kakku", en: "kakku" },
      ],
      correctIndex: 1,
      explanation: {
        fi: "Kukka tarkoittaa kukkaa. Kuka on kysymyssana, kukko on eläin ja kakku on leivonnainen.",
        bn: "kukka মানে ফুল। kuka মানে 'কে', kukko মানে মোরগ, আর kakku মানে কেক।",
        en: "Kukka means 'flower'. Kuka means 'who', kukko means 'rooster' and kakku means 'cake'.",
      },
    },
    {
      question: {
        fi: "Mikä näistä kirjaimista on vokaali?",
        en: "Which of these letters is a vowel?",
      },
      options: [
        { fi: "j", en: "j" },
        { fi: "y", en: "y" },
        { fi: "h", en: "h" },
        { fi: "r", en: "r" },
      ],
      correctIndex: 1,
      explanation: {
        fi: "Suomessa y on aina vokaali.",
        bn: "ফিনিশে y সবসময় একটি স্বরবর্ণ।",
        en: "In Finnish, y is always a vowel.",
      },
    },
  ],

  summary: {
    fi: "Tässä oppitunnissa opit suomen aakkoset, kahdeksan vokaalia ja tärkeimmät ääntämisen säännöt: jokainen kirjain äännetään, kaksoiskirjain tarkoittaa pitkää äännettä ja paino on aina ensimmäisellä tavulla.",
    bn: "এই পাঠে তুমি ফিনিশ বর্ণমালা, আটটি স্বরবর্ণ এবং উচ্চারণের প্রধান নিয়মগুলো শিখেছ: প্রতিটি অক্ষর উচ্চারিত হয়, দ্বৈত অক্ষর মানে দীর্ঘ ধ্বনি, এবং জোর সবসময় প্রথম সিলেবলে পড়ে।",
    en: "In this lesson, you learned the Finnish alphabet, the eight vowels and the key pronunciation rules: every letter is pronounced, a double letter means a long sound, and stress always falls on the first syllable.",
  },
};