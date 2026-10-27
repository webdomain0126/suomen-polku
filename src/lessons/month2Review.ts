import { Lesson } from "./types";

// Month 2, Lesson 10 — Month 2 Review and Everyday Finnish Conversation
// Stable lesson ID: month-2-review (see lessonRegistry.ts)
// No new grammar: everything here repeats the rules, phrases and example
// vocabulary from Month 2 lessons 1–9.

export const month2ReviewLesson: Lesson = {
  slug: "review",
  month: 2,

  title: {
    fi: "Kuukauden 2 kertaus ja arjen keskustelut",
    bn: "দ্বিতীয় মাসের পুনরালোচনা ও দৈনন্দিন কথোপকথন",
    en: "Month 2 Review and Everyday Finnish Conversation",
  },

  intro: {
    fi: "Onnittelut, olet käynyt läpi kuukauden 2 kaikki oppitunnit! Tässä kertauksessa ei ole uutta kielioppia. Kertaamme kiellon, kysymykset, infinitiivin ja arjen tilanteet, ja harjoittelemme niitä keskusteluissa.",
    bn: "অভিনন্দন, তুমি দ্বিতীয় মাসের সব পাঠ শেষ করেছ! এই পুনরালোচনায় নতুন কোনো ব্যাকরণ নেই। আমরা না-বাচক বাক্য, প্রশ্ন, মূল রূপ (infinitiivi) ও দৈনন্দিন পরিস্থিতিগুলো আবার দেখব, আর কথোপকথনে অনুশীলন করব।",
    en: "Congratulations, you have gone through all the Month 2 lessons! This review has no new grammar. We'll review negation, questions, the infinitive and everyday situations, and practise them in conversations.",
  },

  objectives: [
    {
      fi: "Kerrata kuukauden 2 yhdeksän aihetta yhdessä paikassa.",
      bn: "দ্বিতীয় মাসের নয়টি বিষয় এক জায়গায় আবার দেখা।",
      en: "Review the nine Month 2 topics in one place.",
    },
    {
      fi: "Yhdistää aiheita lyhyissä arjen keskusteluissa.",
      bn: "ছোট দৈনন্দিন কথোপকথনে বিষয়গুলো একসাথে ব্যবহার করা।",
      en: "Combine the topics in short everyday conversations.",
    },
    {
      fi: "Arvioida omaa osaamista ennen kuukautta 3.",
      bn: "তৃতীয় মাসের আগে নিজের দক্ষতা যাচাই করা।",
      en: "Check your own skills before Month 3.",
    },
  ],

  explanation: [
    {
      fi: "1. Kielto: en, et, ei, emme, ette, eivät + minä-muoto ilman -n:ää: puhun → en puhu, tarvitsen → en tarvitse. Olla: en ole, ei ole. He-muodon kanssa aina eivät: he eivät juo.",
      bn: "১. না-বাচক: en, et, ei, emme, ette, eivät + minä-র রূপ থেকে -n বাদ: puhun → en puhu, tarvitsen → en tarvitse। olla: en ole, ei ole। he-র সাথে সবসময় eivät: he eivät juo।",
      en: "1. Negation: en, et, ei, emme, ette, eivät + the minä form without -n: puhun → en puhu, tarvitsen → en tarvitse. Olla: en ole, ei ole. With he always eivät: he eivät juo.",
    },
    {
      fi: "2. Kysymykset: kyllä/ei-kysymyksessä verbi alkuun + -ko/-kö (Puhutko suomea? Ymmärrätkö?). Kysymyssana alkuun ilman -ko-päätettä: mitä, mikä, kuka, missä, mistä, mihin, milloin, miksi, miten, kuinka paljon, mihin aikaan. Vastaa usein toistamalla verbi: Puhun. / En puhu.",
      bn: "২. প্রশ্ন: হ্যাঁ/না প্রশ্নে ক্রিয়া শুরুতে + -ko/-kö (Puhutko suomea? Ymmärrätkö?)। প্রশ্নবোধক শব্দ শুরুতে, -ko ছাড়া: mitä, mikä, kuka, missä, mistä, mihin, milloin, miksi, miten, kuinka paljon, mihin aikaan। প্রায়ই ক্রিয়াটি পুনরাবৃত্তি করে উত্তর দাও: Puhun। / En puhu।",
      en: "2. Questions: in a yes/no question the verb comes first + -ko/-kö (Puhutko suomea? Ymmärrätkö?). A question word comes first, without -ko: mitä, mikä, kuka, missä, mistä, mihin, milloin, miksi, miten, kuinka paljon, mihin aikaan. Answer often by repeating the verb: Puhun. / En puhu.",
    },
    {
      fi: "3. Kaksi verbiä: ensimmäinen taivutetaan, toinen on infinitiivissä: Haluan oppia. Voin auttaa. Osaan uida. Yritän ymmärtää. Kiellossa ja kysymyksessä vain ensimmäinen muuttuu: En halua, Haluatko? Osata = taito, voida = mahdollisuus. Minun täytyy mennä on valmis rakenne.",
      bn: "৩. দুটি ক্রিয়া: প্রথমটির রূপ বদলায়, দ্বিতীয়টি মূল রূপে থাকে: Haluan oppia (আমি শিখতে চাই)। Voin auttaa। Osaan uida। Yritän ymmärtää। না-বাচক ও প্রশ্নে শুধু প্রথমটি বদলায়: En halua, Haluatko? osata = দক্ষতা, voida = সম্ভাবনা। Minun täytyy mennä একটি তৈরি গঠন।",
      en: "3. Two verbs: the first is conjugated, the second is in the infinitive: Haluan oppia. Voin auttaa. Osaan uida. Yritän ymmärtää. In negatives and questions only the first changes: En halua, Haluatko? Osata = a skill, voida = a possibility. Minun täytyy mennä is a fixed structure.",
    },
    {
      fi: "4. Esittäytyminen: Minun nimeni on… / Olen… Mistä olet kotoisin? – Olen kotoisin Bangladeshista (-sta). Missä asut? – Asun Dhakassa (-ssa). Puhun bengalia ja englantia. Hei sopii kaikkialle; Hyvää päivää ja Näkemiin ovat muodollisia.",
      bn: "৪. পরিচয় দেওয়া: Minun nimeni on… / Olen…। Mistä olet kotoisin? – Olen kotoisin Bangladeshista (-sta)। Missä asut? – Asun Dhakassa (-ssa)। Puhun bengalia ja englantia। Hei সব জায়গায় চলে; Hyvää päivää ও Näkemiin আনুষ্ঠানিক।",
      en: "4. Introducing yourself: Minun nimeni on… / Olen… Mistä olet kotoisin? – Olen kotoisin Bangladeshista (-sta). Missä asut? – Asun Dhakassa (-ssa). Puhun bengalia ja englantia. Hei works everywhere; Hyvää päivää and Näkemiin are formal.",
    },
    {
      fi: "5. Perhe, työ ja arki: Minulla on yksi lapsi / kaksi lasta. Minulla ei ole veljeä. Mitä teet? – Olen opiskelija / Teen töitä. Missä olet töissä? Aikasanat: aamulla, päivällä, illalla, yöllä, joka päivä, yleensä, joskus.",
      bn: "৫. পরিবার, কাজ ও দৈনন্দিন জীবন: Minulla on yksi lapsi / kaksi lasta। Minulla ei ole veljeä। Mitä teet? – Olen opiskelija / Teen töitä। Missä olet töissä? সময়বাচক শব্দ: aamulla, päivällä, illalla, yöllä, joka päivä, yleensä, joskus।",
      en: "5. Family, work and daily life: Minulla on yksi lapsi / kaksi lasta. Minulla ei ole veljeä. Mitä teet? – Olen opiskelija / Teen töitä. Missä olet töissä? Time words: aamulla, päivällä, illalla, yöllä, joka päivä, yleensä, joskus.",
    },
    {
      fi: "6. Ostokset: Paljonko tämä maksaa? / Paljonko nämä maksavat? Määrä partitiivissa: maitoa, leipää, kaksi omenaa. Kohteliaasti: Haluaisin…, Saisinko…?, Yksi kahvi, kiitos. Voinko maksaa kortilla?",
      bn: "৬. কেনাকাটা: Paljonko tämä maksaa? / Paljonko nämä maksavat? পরিমাণ partitiivi রূপে: maitoa, leipää, kaksi omenaa। ভদ্রভাবে: Haluaisin…, Saisinko…?, Yksi kahvi, kiitos। Voinko maksaa kortilla?",
      en: "6. Shopping: Paljonko tämä maksaa? / Paljonko nämä maksavat? Amounts in the partitive: maitoa, leipää, kaksi omenaa. Politely: Haluaisin…, Saisinko…?, Yksi kahvi, kiitos. Voinko maksaa kortilla?",
    },
    {
      fi: "7. Liikkuminen: missä = paikka, mihin = suunta. Apteekki on vasemmalla (missä?), Käänny vasemmalle (mihin?). Pankin vieressä, lähellä, kaukana. Menen bussilla / junalla. Mihin tämä bussi menee?",
      bn: "৭. চলাফেরা: missä = অবস্থান, mihin = দিক। Apteekki on vasemmalla (missä?), Käänny vasemmalle (mihin?)। Pankin vieressä, lähellä, kaukana। Menen bussilla / junalla। Mihin tämä bussi menee?",
      en: "7. Getting around: missä = location, mihin = direction. Apteekki on vasemmalla (missä?), Käänny vasemmalle (mihin?). Pankin vieressä, lähellä, kaukana. Menen bussilla / junalla. Mihin tämä bussi menee?",
    },
    {
      fi: "8. Aika ja suunnitelmat: maanantaina, tiistaina… Kello on kolme; puoli neljä = 3.30. Milloin = yleisesti, mihin aikaan = kellonaika. Onko sinulla aikaa? Voimmeko tavata…? Minulle sopii. Valitettavasti en ehdi. Haluaisin varata ajan.",
      bn: "৮. সময় ও পরিকল্পনা: maanantaina, tiistaina…। Kello on kolme; puoli neljä = ৩:৩০। milloin = সাধারণভাবে কখন, mihin aikaan = কয়টায়। Onko sinulla aikaa? Voimmeko tavata…? Minulle sopii। Valitettavasti en ehdi। Haluaisin varata ajan।",
      en: "8. Time and plans: maanantaina, tiistaina… Kello on kolme; puoli neljä = 3:30. Milloin = in general, mihin aikaan = clock time. Onko sinulla aikaa? Voimmeko tavata…? Minulle sopii. Valitettavasti en ehdi. Haluaisin varata ajan.",
    },
    {
      fi: "9. Terveys ja apu: Minulla on päänsärky / huono olo / nälkä. Olen kipeä. Minua väsyttää. Miten voit? – Voin hyvin. Tarvitsen apua. Voitko auttaa minua? Voitko toistaa / puhua hitaammin? Hätätilanteessa 112.",
      bn: "৯. স্বাস্থ্য ও সাহায্য: Minulla on päänsärky / huono olo / nälkä। Olen kipeä। Minua väsyttää। Miten voit? – Voin hyvin। Tarvitsen apua। Voitko auttaa minua? Voitko toistaa / puhua hitaammin? জরুরি অবস্থায় 112।",
      en: "9. Health and help: Minulla on päänsärky / huono olo / nälkä. Olen kipeä. Minua väsyttää. Miten voit? – Voin hyvin. Tarvitsen apua. Voitko auttaa minua? Voitko toistaa / puhua hitaammin? In an emergency: 112.",
    },
  ],

  // Reuses the lesson table: one key example per Month 2 topic.
  pronounTable: [
    { fi: "1 · En puhu ruotsia.", en: "Negation · I don't speak Swedish.", bn: "না-বাচক · আমি সুইডিশ বলি না।" },
    { fi: "2 · Asutko Suomessa? Missä asut?", en: "Questions · Do you live in Finland? Where do you live?", bn: "প্রশ্ন · তুমি কি ফিনল্যান্ডে থাকো? কোথায় থাকো?" },
    { fi: "3 · Haluan oppia suomea.", en: "Two verbs · I want to learn Finnish.", bn: "দুটি ক্রিয়া · আমি ফিনিশ শিখতে চাই।" },
    { fi: "4 · Olen kotoisin Bangladeshista. Asun Dhakassa.", en: "Introductions · I'm from Bangladesh. I live in Dhaka.", bn: "পরিচয় · আমি বাংলাদেশ থেকে এসেছি। আমি ঢাকায় থাকি।" },
    { fi: "5 · Minulla on kaksi lasta. Olen opiskelija.", en: "Family and work · I have two children. I'm a student.", bn: "পরিবার ও কাজ · আমার দুটি সন্তান আছে। আমি শিক্ষার্থী।" },
    { fi: "6 · Paljonko tämä maksaa? Saisinko vettä?", en: "Shopping · How much is this? Could I have water?", bn: "কেনাকাটা · এটার দাম কত? আমি কি পানি পেতে পারি?" },
    { fi: "7 · Käänny vasemmalle. Menen bussilla.", en: "Getting around · Turn left. I go by bus.", bn: "চলাফেরা · বাঁয়ে ঘোরো। আমি বাসে যাই।" },
    { fi: "8 · Tapaamme maanantaina kello kolme.", en: "Time · We'll meet on Monday at three.", bn: "সময় · আমরা সোমবার তিনটায় দেখা করব।" },
    { fi: "9 · Minulla on päänsärky. Voitko auttaa minua?", en: "Health and help · I have a headache. Can you help me?", bn: "স্বাস্থ্য ও সাহায্য · আমার মাথাব্যথা। তুমি কি আমাকে সাহায্য করতে পারো?" },
  ],

  examples: [
    { fi: "Anna: Hei! Minä olen Anna. Mikä sinun nimesi on? – Rahim: Minun nimeni on Rahim. Hauska tutustua!", bn: "আনা: হাই! আমি আনা। তোমার নাম কী? – রহিম: আমার নাম রহিম। পরিচিত হয়ে ভালো লাগলো!", en: "Anna: Hi! I'm Anna. What's your name? – Rahim: My name is Rahim. Nice to meet you!" },
    { fi: "Anna: Mistä olet kotoisin? – Rahim: Olen kotoisin Bangladeshista, mutta asun nyt Espoossa.", bn: "আনা: তুমি কোথা থেকে এসেছ? – রহিম: আমি বাংলাদেশ থেকে এসেছি, কিন্তু এখন এসপোতে থাকি।", en: "Anna: Where are you from? – Rahim: I'm from Bangladesh, but now I live in Espoo." },
    { fi: "Anna: Mitä teet? – Rahim: Olen insinööri. Minulla on vaimo ja yksi lapsi.", bn: "আনা: তুমি কী করো? – রহিম: আমি প্রকৌশলী। আমার স্ত্রী ও একটি সন্তান আছে।", en: "Anna: What do you do? – Rahim: I'm an engineer. I have a wife and one child." },
    { fi: "Myyjä: Hei, mitä saisi olla? – Tisa: Haluaisin leipää ja maitoa. Paljonko nämä maksavat?", bn: "বিক্রেতা: হাই, কী দেব? – তিসা: আমি রুটি আর দুধ চাই। এগুলোর দাম কত?", en: "Clerk: Hi, what would you like? – Tisa: I'd like bread and milk. How much do these cost?" },
    { fi: "Myyjä: Yhteensä viisi euroa. Tarvitsetko kassin? – Tisa: En tarvitse, kiitos. Voinko maksaa kortilla?", bn: "বিক্রেতা: সব মিলিয়ে পাঁচ ইউরো। ব্যাগ লাগবে? – তিসা: লাগবে না, ধন্যবাদ। আমি কি কার্ডে দিতে পারি?", en: "Clerk: Five euros altogether. Do you need a bag? – Tisa: No, thank you. Can I pay by card?" },
    { fi: "Myyjä: Totta kai. – Tisa: Kiitos, hyvää päivänjatkoa!", bn: "বিক্রেতা: অবশ্যই। – তিসা: ধন্যবাদ, আপনার দিনটা ভালো কাটুক!", en: "Clerk: Of course. – Tisa: Thanks, have a nice day!" },
    { fi: "Ali: Anteeksi, missä on rautatieasema? – Nainen: Mene suoraan ja käänny oikealle. Asema on pankin vieressä.", bn: "আলী: মাফ করবেন, রেলস্টেশন কোথায়? – মহিলা: সোজা যান, তারপর ডানে ঘুরুন। স্টেশনটা ব্যাংকের পাশে।", en: "Ali: Excuse me, where is the railway station? – Woman: Go straight and turn right. The station is next to the bank." },
    { fi: "Ali: Mihin tämä bussi menee? – Kuljettaja: Keskustaan.", bn: "আলী: এই বাস কোথায় যায়? – চালক: শহরের কেন্দ্রে।", en: "Ali: Where does this bus go? – Driver: To the city centre." },
    { fi: "Ali: Milloin se lähtee? – Kuljettaja: Viiden minuutin päästä.", bn: "আলী: কখন ছাড়বে? – চালক: পাঁচ মিনিট পরে।", en: "Ali: When does it leave? – Driver: In five minutes." },
    { fi: "Mikko: Onko sinulla aikaa huomenna? Voimmeko tavata kello kolme? – Sara: Valitettavasti en ehdi. Minulla on aika lääkärille.", bn: "মিক্কো: আগামীকাল কি তোমার সময় আছে? আমরা কি তিনটায় দেখা করতে পারি? – সারা: দুঃখিত, আমার সময় হবে না। আমার ডাক্তারের অ্যাপয়েন্টমেন্ট আছে।", en: "Mikko: Do you have time tomorrow? Can we meet at three? – Sara: Unfortunately I don't have time. I have a doctor's appointment." },
    { fi: "Mikko: Onko kaikki hyvin? – Sara: Minulla on vähän huono olo. Sopiiko perjantaina?", bn: "মিক্কো: সব ঠিক আছে তো? – সারা: আমার একটু শরীর খারাপ লাগছে। শুক্রবার কি সুবিধা হবে?", en: "Mikko: Is everything OK? – Sara: I feel a little unwell. Does Friday work?" },
    { fi: "Mikko: Minulle sopii. Parane pian! – Sara: Kiitos! Nähdään perjantaina.", bn: "মিক্কো: আমার সুবিধা হবে। তাড়াতাড়ি সুস্থ হয়ে ওঠো! – সারা: ধন্যবাদ! শুক্রবার দেখা হবে।", en: "Mikko: That works for me. Get well soon! – Sara: Thanks! See you on Friday." },
  ],

  vocabulary: [
    { fi: "en, et, ei, emme, ette, eivät", bn: "না-বাচক ক্রিয়া", en: "the negative verb" },
    { fi: "missä / mistä / mihin", bn: "কোথায় / কোথা থেকে / কোথায় (কোন দিকে)", en: "where / where from / where to" },
    { fi: "milloin / mihin aikaan", bn: "কখন / কয়টায়", en: "when / at what time" },
    { fi: "haluta, voida, osata, yrittää", bn: "চাওয়া, পারা, জানা, চেষ্টা করা", en: "want, can, know how, try" },
    { fi: "olla kotoisin / asua", bn: "কোথাও থেকে আসা / বাস করা", en: "to be from / to live" },
    { fi: "perhe, lapsi, työ", bn: "পরিবার, সন্তান, কাজ", en: "family, child, work" },
    { fi: "hinta, kortti, kassi", bn: "দাম, কার্ড, ব্যাগ", en: "price, card, bag" },
    { fi: "vasemmalla / vasemmalle", bn: "বাঁ দিকে (আছে) / বাঁ দিকে (যাওয়া)", en: "on the left / to the left" },
    { fi: "bussi, juna, lippu", bn: "বাস, ট্রেন, টিকিট", en: "bus, train, ticket" },
    { fi: "kello, aika, tapaaminen", bn: "ঘড়ি, সময় / অ্যাপয়েন্টমেন্ট, সাক্ষাৎ", en: "clock, time / appointment, meeting" },
    { fi: "sopia, ehtiä", bn: "সুবিধা হওয়া, সময়মতো করতে পারা", en: "to suit, to have time" },
    { fi: "kipeä, päänsärky, apu", bn: "অসুস্থ, মাথাব্যথা, সাহায্য", en: "sick, headache, help" },
  ],

  pronunciation: {
    fi: "Puhumishaaste: puhu ääneen noin minuutti ja yhdistä aiheita. Kerro nimesi, mistä olet kotoisin ja missä asut. Kerro perheestäsi tai työstäsi, mitä teet yleensä aamulla ja mitä haluat oppia. Sano lopuksi yksi asia, jota et tee (En…), ja kysy yksi kysymys (…ko?).",
    bn: "কথা বলার চ্যালেঞ্জ: প্রায় এক মিনিট জোরে কথা বলো এবং বিষয়গুলো একসাথে মেলাও। নিজের নাম বলো, কোথা থেকে এসেছ আর কোথায় থাকো। পরিবার বা কাজ সম্পর্কে বলো, সাধারণত সকালে কী করো এবং কী শিখতে চাও। শেষে এমন একটি কাজের কথা বলো যা তুমি করো না (En…), আর একটি প্রশ্ন করো (…ko?)।",
    en: "Speaking challenge: speak aloud for about a minute and combine the topics. Say your name, where you're from and where you live. Talk about your family or work, what you usually do in the morning and what you want to learn. Finally, say one thing you don't do (En…) and ask one question (…ko?).",
  },

  commonMistakes: [
    {
      fi: "Persoonapääte kieltolauseen pääverbissä: väärin En puhun ruotsia, oikein En puhu ruotsia.",
      bn: "না-বাচক বাক্যের মূল ক্রিয়ায় ব্যক্তিবাচক প্রত্যয়: ভুল En puhun ruotsia, সঠিক En puhu ruotsia।",
      en: "A personal ending on the main verb in a negative sentence: wrong En puhun ruotsia, right En puhu ruotsia.",
    },
    {
      fi: "Väärä kieltoverbi: väärin He ei asu täällä, oikein He eivät asu täällä.",
      bn: "ভুল না-বাচক ক্রিয়া: ভুল He ei asu täällä, সঠিক He eivät asu täällä।",
      en: "The wrong negative verb: wrong He ei asu täällä, right He eivät asu täällä.",
    },
    {
      fi: "-ko kysymyssanan kanssa: väärin Missäkö asut?, oikein Missä asut?",
      bn: "প্রশ্নবোধক শব্দের সাথে -ko: ভুল Missäkö asut?, সঠিক Missä asut?",
      en: "-ko together with a question word: wrong Missäkö asut?, right Missä asut?",
    },
    {
      fi: "Taivutetaan toinen verbi: väärin Haluan puhun suomea, oikein Haluan puhua suomea.",
      bn: "দ্বিতীয় ক্রিয়াটিও বদলে ফেলা: ভুল Haluan puhun suomea, সঠিক Haluan puhua suomea।",
      en: "Conjugating the second verb: wrong Haluan puhun suomea, right Haluan puhua suomea.",
    },
    {
      fi: "Sekoitetaan missä ja mistä: väärin Missä olet kotoisin?, oikein Mistä olet kotoisin?",
      bn: "missä ও mistä গুলিয়ে ফেলা: ভুল Missä olet kotoisin?, সঠিক Mistä olet kotoisin?",
      en: "Mixing up missä and mistä: wrong Missä olet kotoisin?, right Mistä olet kotoisin?",
    },
    {
      fi: "Väärä muoto luvun jälkeen: väärin Minulla on kaksi lapsi, oikein Minulla on kaksi lasta.",
      bn: "সংখ্যার পরে ভুল রূপ: ভুল Minulla on kaksi lapsi, সঠিক Minulla on kaksi lasta।",
      en: "The wrong form after a number: wrong Minulla on kaksi lapsi, right Minulla on kaksi lasta.",
    },
    {
      fi: "Sekoitetaan tämä ja nämä: väärin Paljonko tämä maksavat?, oikein Paljonko tämä maksaa?",
      bn: "tämä ও nämä গুলিয়ে ফেলা: ভুল Paljonko tämä maksavat?, সঠিক Paljonko tämä maksaa?",
      en: "Mixing up tämä and nämä: wrong Paljonko tämä maksavat?, right Paljonko tämä maksaa?",
    },
    {
      fi: "Sekoitetaan paikka ja suunta: väärin Käänny vasemmalla, oikein Käänny vasemmalle.",
      bn: "অবস্থান ও দিক গুলিয়ে ফেলা: ভুল Käänny vasemmalla, সঠিক Käänny vasemmalle।",
      en: "Mixing up location and direction: wrong Käänny vasemmalla, right Käänny vasemmalle.",
    },
    {
      fi: "Väärä muoto sopia-verbin kanssa: väärin Minä sopii, oikein Minulle sopii.",
      bn: "sopia-র সাথে ভুল রূপ: ভুল Minä sopii, সঠিক Minulle sopii।",
      en: "The wrong form with sopia: wrong Minä sopii, right Minulle sopii.",
    },
    {
      fi: "Väärä omistusrakenne: väärin Minä on päänsärky, oikein Minulla on päänsärky.",
      bn: "ভুল 'আছে' গঠন: ভুল Minä on päänsärky, সঠিক Minulla on päänsärky।",
      en: "The wrong 'have' structure: wrong Minä on päänsärky, right Minulla on päänsärky.",
    },
  ],

  practice: [
    {
      prompt: {
        fi: "Mitä tarkoittaa 'kauppa'?",
        bn: "'kauppa' মানে কী?",
        en: "What does 'kauppa' mean?",
      },
      answer: "shop — দোকান",
    },
    {
      prompt: {
        fi: "Muuta kielteiseksi: Asun Helsingissä.",
        bn: "না-বাচক করো: Asun Helsingissä.",
        en: "Make it negative: Asun Helsingissä.",
      },
      answer: "En asu Helsingissä.",
    },
    {
      prompt: {
        fi: "Muuta kielteiseksi: He juovat kahvia.",
        bn: "না-বাচক করো: He juovat kahvia.",
        en: "Make it negative: He juovat kahvia.",
      },
      answer: "He eivät juo kahvia.",
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
        fi: "Täydennä kysymyssana: ___ tämä bussi menee? – Keskustaan.",
        bn: "প্রশ্নবোধক শব্দ বসাও: ___ tämä bussi menee? – Keskustaan.",
        en: "Fill in the question word: ___ tämä bussi menee? – Keskustaan.",
      },
      answer: "Mihin",
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
        fi: "Täydennä (oppia): Haluan ___ suomea.",
        bn: "পূরণ করো (oppia): Haluan ___ suomea.",
        en: "Complete (oppia): Haluan ___ suomea.",
      },
      answer: "oppia",
    },
    {
      prompt: {
        fi: "Täydennä (lapsi): Minulla on kaksi ___.",
        bn: "পূরণ করো (lapsi): Minulla on kaksi ___.",
        en: "Complete (lapsi): Minulla on kaksi ___.",
      },
      answer: "lasta",
    },
    {
      prompt: {
        fi: "Käännä suomeksi: How much does this cost?",
        bn: "ফিনিশে অনুবাদ করো: এটার দাম কত?",
        en: "Translate into Finnish: How much does this cost?",
      },
      answer: "Paljonko tämä maksaa?",
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
        fi: "Valitse (on the right): Apteekki on oikealla vai oikealle?",
        bn: "বেছে নাও (ডান দিকে আছে): Apteekki on oikealla নাকি oikealle?",
        en: "Choose (on the right): Apteekki on oikealla or oikealle?",
      },
      answer: "Apteekki on oikealla.",
    },
    {
      prompt: {
        fi: "Mikä kellonaika on 'puoli kahdeksan'?",
        bn: "'puoli kahdeksan' মানে কয়টা?",
        en: "What time is 'puoli kahdeksan'?",
      },
      answer: "7.30 (সাড়ে সাতটা / half past seven)",
    },
    {
      prompt: {
        fi: "Täydennä (on Wednesday): Tapaamme ___.",
        bn: "পূরণ করো (বুধবারে): Tapaamme ___.",
        en: "Complete (on Wednesday): Tapaamme ___.",
      },
      answer: "keskiviikkona",
    },
    {
      prompt: {
        fi: "Ystävä kysyy: Sopiiko huomenna? Et ehdi. Vastaa kohteliaasti.",
        bn: "বন্ধু জিজ্ঞেস করছে: Sopiiko huomenna? তোমার সময় হবে না। ভদ্রভাবে উত্তর দাও।",
        en: "A friend asks: Sopiiko huomenna? You don't have time. Answer politely.",
      },
      answer: "Valitettavasti en ehdi huomenna.",
    },
    {
      prompt: {
        fi: "Käännä suomeksi: I have a headache. Can you help me?",
        bn: "ফিনিশে অনুবাদ করো: আমার মাথাব্যথা। তুমি কি আমাকে সাহায্য করতে পারো?",
        en: "Translate into Finnish: I have a headache. Can you help me?",
      },
      answer: "Minulla on päänsärky. Voitko auttaa minua?",
    },
    {
      prompt: {
        fi: "Esittäydy kolmella lauseella (nimi, kotimaa, asuinpaikka).",
        bn: "তিনটি বাক্যে নিজের পরিচয় দাও (নাম, দেশ, কোথায় থাকো)।",
        en: "Introduce yourself in three sentences (name, home country, where you live).",
      },
      answer: "Esimerkki: Minun nimeni on Tisa. Olen kotoisin Bangladeshista. Asun Dhakassa.",
    },
  ],

  quiz: [
    {
      question: {
        fi: "Täydennä: Hän ___ tule tänään.",
        en: "Fill in: Hän ___ tule tänään.",
      },
      options: [
        { fi: "en", en: "en" },
        { fi: "et", en: "et" },
        { fi: "ei", en: "ei" },
        { fi: "eivät", en: "eivät" },
      ],
      correctIndex: 2,
      explanation: {
        fi: "Hän-pronominin kanssa kieltoverbi on ei: hän ei tule.",
        bn: "hän-এর সাথে না-বাচক ক্রিয়া ei: hän ei tule।",
        en: "With hän the negative verb is ei: hän ei tule.",
      },
    },
    {
      question: {
        fi: "Mikä muoto on oikein?",
        en: "Which form is correct?",
      },
      options: [
        { fi: "Ymmärrätko?", en: "Ymmärrätko?" },
        { fi: "Ymmärrätkö?", en: "Ymmärrätkö?" },
        { fi: "Ymmärräkö?", en: "Ymmärräkö?" },
        { fi: "Ymmärrätkä?", en: "Ymmärrätkä?" },
      ],
      correctIndex: 1,
      explanation: {
        fi: "Ymmärtää-verbissä on ä ja y, joten pääte on -kö: Ymmärrätkö?",
        bn: "ymmärtää-তে ä ও y আছে, তাই প্রত্যয় -kö: Ymmärrätkö?",
        en: "Ymmärtää has ä and y, so the ending is -kö: Ymmärrätkö?",
      },
    },
    {
      question: {
        fi: "Täydennä: Voitko ___ minua? (auttaa)",
        en: "Fill in: Voitko ___ minua? (auttaa)",
      },
      options: [
        { fi: "autat", en: "autat" },
        { fi: "autan", en: "autan" },
        { fi: "auttaa", en: "auttaa" },
        { fi: "auttaako", en: "auttaako" },
      ],
      correctIndex: 2,
      explanation: {
        fi: "Voida-verbin jälkeen infinitiivi: Voitko auttaa minua?",
        bn: "voida-র পরে মূল রূপ: Voitko auttaa minua?",
        en: "After voida comes the infinitive: Voitko auttaa minua?",
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
        { fi: "Milloin", en: "Milloin" },
      ],
      correctIndex: 1,
      explanation: {
        fi: "Kotimaata kysytään mistä-sanalla; vastauksessa on -sta.",
        bn: "জন্মভূমি জিজ্ঞেস করতে mistä; উত্তরে -sta থাকে।",
        en: "Origin is asked with mistä; the answer has -sta.",
      },
    },
    {
      question: {
        fi: "Täydennä: Minulla on kolme ___. (sisko)",
        en: "Fill in: Minulla on kolme ___. (sisko)",
      },
      options: [
        { fi: "sisko", en: "sisko" },
        { fi: "siskoa", en: "siskoa" },
        { fi: "siskot", en: "siskot" },
        { fi: "siskossa", en: "siskossa" },
      ],
      correctIndex: 1,
      explanation: {
        fi: "Luvun 3 jälkeen partitiivi: kolme siskoa.",
        bn: "৩ সংখ্যার পরে partitiivi: kolme siskoa।",
        en: "After the number 3, the partitive: kolme siskoa.",
      },
    },
    {
      question: {
        fi: "Mikä on kohtelias tapa pyytää kahvilassa?",
        en: "Which is a polite way to ask at a café?",
      },
      options: [
        { fi: "Saisinko kahvin?", en: "Saisinko kahvin?" },
        { fi: "Anna kahvi!", en: "Anna kahvi!" },
        { fi: "Kahvi minä haluan.", en: "Kahvi minä haluan." },
        { fi: "Saisin kahvi?", en: "Saisin kahvi?" },
      ],
      correctIndex: 0,
      explanation: {
        fi: "Saisinko…? on kohtelias pyyntö; Anna kahvi! kuulostaa käskyltä.",
        bn: "Saisinko…? একটি ভদ্র অনুরোধ; Anna kahvi! আদেশের মতো শোনায়।",
        en: "Saisinko…? is a polite request; Anna kahvi! sounds like an order.",
      },
    },
    {
      question: {
        fi: "Miten sanotaan 'Turn left'?",
        en: "How do you say 'Turn left'?",
      },
      options: [
        { fi: "Käänny vasemmalla.", en: "Käänny vasemmalla." },
        { fi: "Käänny oikealle.", en: "Käänny oikealle." },
        { fi: "Käänny vasen.", en: "Käänny vasen." },
        { fi: "Käänny vasemmalle.", en: "Käänny vasemmalle." },
      ],
      correctIndex: 3,
      explanation: {
        fi: "Kääntyminen on suunta (mihin?), joten -lle: Käänny vasemmalle.",
        bn: "ঘোরা একটি দিক (mihin?), তাই -lle: Käänny vasemmalle।",
        en: "Turning is a direction (mihin?), so -lle: Käänny vasemmalle.",
      },
    },
    {
      question: {
        fi: "Mikä tarkoittaa kellonaikaa 3.30?",
        en: "Which means 3:30?",
      },
      options: [
        { fi: "puoli kolme", en: "puoli kolme" },
        { fi: "puoli neljä", en: "puoli neljä" },
        { fi: "kolme puoli", en: "kolme puoli" },
        { fi: "neljä puoli", en: "neljä puoli" },
      ],
      correctIndex: 1,
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
        { fi: "Minä sopii.", en: "Minä sopii." },
        { fi: "Minulla sopii.", en: "Minulla sopii." },
        { fi: "Minulle sopii.", en: "Minulle sopii." },
        { fi: "Minun sopii.", en: "Minun sopii." },
      ],
      correctIndex: 2,
      explanation: {
        fi: "Valmis fraasi: Minulle sopii.",
        bn: "তৈরি বাক্যাংশ: Minulle sopii।",
        en: "A fixed phrase: Minulle sopii.",
      },
    },
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
  ],

  summary: {
    fi: "Kuukausi 2 on valmis! Kuukauden 2 jälkeen osaan: tehdä kielteisiä lauseita (En puhu); kysyä kyllä/ei- ja kysymyssanakysymyksiä (Puhutko? Missä asut?); käyttää kahta verbiä (Haluan oppia); esittäytyä; kertoa perheestä, työstä ja päivästä; ostaa ja kysyä hintaa kohteliaasti; kysyä tietä ja käyttää liikennettä; sopia tapaamisen ja varata ajan; kertoa, miltä tuntuu, ja pyytää apua. Seuraavaksi on vuorossa kuukausi 3 (K-P-T ja substantiivit). Sen oppitunnit avautuvat, kun ne ovat valmiita.",
    bn: "দ্বিতীয় মাস সম্পূর্ণ! দ্বিতীয় মাসের পর আমি পারি: না-বাচক বাক্য তৈরি করতে (En puhu); হ্যাঁ/না প্রশ্ন ও প্রশ্নবোধক শব্দ দিয়ে প্রশ্ন করতে (Puhutko? Missä asut?); দুটি ক্রিয়া একসাথে ব্যবহার করতে (Haluan oppia); নিজের পরিচয় দিতে; পরিবার, কাজ ও দিনের কথা বলতে; ভদ্রভাবে কেনাকাটা করতে ও দাম জিজ্ঞেস করতে; পথ জিজ্ঞেস করতে ও যানবাহন ব্যবহার করতে; দেখা করার সময় ঠিক করতে ও অ্যাপয়েন্টমেন্ট নিতে; কেমন লাগছে তা বলতে ও সাহায্য চাইতে। এরপর আসছে তৃতীয় মাস (K-P-T ও বিশেষ্য)। এর পাঠগুলো তৈরি হলে খুলে দেওয়া হবে।",
    en: "Month 2 is complete! After Month 2, I can: make negative sentences (En puhu); ask yes/no and question-word questions (Puhutko? Missä asut?); use two verbs together (Haluan oppia); introduce myself; talk about family, work and my day; shop and ask about prices politely; ask for directions and use transport; arrange a meeting and book an appointment; say how I feel and ask for help. Next comes Month 3 (K-P-T and nouns). Its lessons will open when they are ready.",
  },
};