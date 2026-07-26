/*
  ===========================================================
  MONEY ASSURE - BLOG POSTS
  ===========================================================
  Naya blog post add karne ke liye:
  1. Neeche "blogPosts" array mein ek naya { } object copy-paste karo
  2. Values apne hisaab se badlo (title, date, summary, content)
  3. "slug" hamesha UNIQUE hona chahiye (spaces mat rakho, dash use karo)
  4. "image" optional hai - agar image nahi dalni, poori line hata do
     ya "image": "" khaali rakho
  5. Image file ko "images/blog/" folder mein daalo, aur yahan uska
     path likho jaise: "images/blog/nifty-27-july.jpg"
  6. File save karo, GitHub pe push karo -> Amplify khud deploy kar dega

  content ek array hai - har line ek naya paragraph banega blog page par.
  Content ke beech mein image dalni ho toj kisi paragraph ki jagah
  { image: "images/blog/chart1.jpg", caption: "Chart caption yahan" }
  jaisa object bhi daal sakte ho array ke andar.
  ===========================================================
*/

window.blogPosts = [
  {
    slug: "nifty-outlook-27-july-2026",
    title: "Nifty Outlook: 27 July 2026",
    date: "2026-07-27",
    summary: "Nifty ne 24,800 ke resistance zone ke paas consolidation dikhaya. Yahan hai aaj ka technical breakdown.",
    image: "",
    content: [
      "Aaj Nifty ne 24,800 ke resistance zone ke paas thoda consolidation dikhaya. Volume profile suggest karta hai ki bulls abhi bhi control mein hain, lekin ek clear breakout confirmation ka wait karna zaroori hai.",
      "20 EMA aur 50 EMA dono upward slope mein hain, jo short-term trend ko positive banaye rakhte hain. RSI 58 ke aas-paas hai — na overbought, na oversold, matlab aur upar jaane ki gunjaish hai.",
      "Key levels: Support 24,500, Resistance 24,850. Agar 24,850 clear breakout hota hai volume ke saath, toh 25,100 tak move dekh sakte hain.",
      "Risk management hamesha priority par rakhein — koi bhi position lene se pehle apna stop-loss decide karo."
    ]
  },
  {
    slug: "nifty-outlook-28-july-2026",
    title: "Nifty Outlook: 28 July 2026",
    date: "2026-07-28",
    summary: "Nifty 23,787 ke aas-paas trade kar raha hai. Intraday key levels aur kal ke liye possible scenarios yahan dekhein.",
    image: "images/blog/nifty-intraday-28jul.png",
    content: [
      "Nifty abhi 23,787 ke level par trade kar raha hai, jo 23,750 support aur 23,800-23,900 resistance zone ke beech hai. 24/07 se lekar 27/07 tak ka intraday price action dikhata hai ki market ne 23,600 ke strong support se sharp bounce liya aur gradually upar climb kiya hai.",
      { image: "images/blog/nifty-intraday-28jul.png", caption: "Nifty intraday chart (24/07 - 27/07) - key S/R zones" },
      "Key intraday levels: Resistance 24,000 aur 23,900. Immediate resistance 23,800-23,850 ke beech hai, jahan price abhi consolidate kar raha hai. Support 23,750 immediate hai, aur 23,600 ek strong support hai jahan se aaj ka pura up-move shuru hua tha.",
      "Kal (28 July) ke liye do scenarios ban sakte hain: agar price 23,800-23,900 zone ko accha volume ke saath break karta hai, toh 24,000 tak move dekh sakte hain. Lekin agar 23,750 support toot jata hai, toh price wapas 23,650-23,600 zone tak aa sakta hai.",
      "Agar dono taraf koi clear breakout nahi hota, toh Nifty 23,750-23,900 ke range mein consolidate kar sakta hai. Yeh analysis sirf technical support-resistance levels par based hai — global cues aur opening gap se bhi price action par fark padega.",
      "Disclaimer: Yeh sirf educational analysis hai, investment advice nahi. Trade karne se pehle apna risk management aur stop-loss zaroor decide karein."
    ]
  },
];
