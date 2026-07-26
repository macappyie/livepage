/*
  ===========================================================
  MONEY ASSURE - BLOG POSTS
  ===========================================================
  Naya blog post add karne ke liye:
  1. Neeche "blogPosts" array mein ek naya { } object copy-paste karo
  2. Values apne hisaab se badlo (title, date, summary, content)
  3. "slug" hamesha UNIQUE hona chahiye (spaces mat rakho, dash use karo)
  4. File save karo, GitHub pe push karo -> Amplify khud deploy kar dega

  content ek array hai - har line ek naya paragraph banega blog page par.
  ===========================================================
*/

window.blogPosts = [
  {
    slug: "nifty-outlook-27-july-2026",
    title: "Nifty Outlook: 27 July 2026",
    date: "2026-07-27",
    summary: "Nifty ne 24,800 ke resistance zone ke paas consolidation dikhaya. Yahan hai aaj ka technical breakdown.",
    content: [
      "Aaj Nifty ne 24,800 ke resistance zone ke paas thoda consolidation dikhaya. Volume profile suggest karta hai ki bulls abhi bhi control mein hain, lekin ek clear breakout confirmation ka wait karna zaroori hai.",
      "20 EMA aur 50 EMA dono upward slope mein hain, jo short-term trend ko positive banaye rakhte hain. RSI 58 ke aas-paas hai — na overbought, na oversold, matlab aur upar jaane ki gunjaish hai.",
      "Key levels: Support 24,500, Resistance 24,850. Agar 24,850 clear breakout hota hai volume ke saath, toh 25,100 tak move dekh sakte hain.",
      "Risk management hamesha priority par rakhein — koi bhi position lene se pehle apna stop-loss decide karo."
    ]
  }
  // Neeche naya post add karne ke liye, yaha ek comma lagao aur naya { } object paste karo:
  /*
  ,{
    slug: "banknifty-analysis-28-july-2026",
    title: "Bank Nifty Analysis: 28 July 2026",
    date: "2026-07-28",
    summary: "Yahan summary likho jo card par dikhega.",
    content: [
      "Pehla paragraph yahan likho.",
      "Dusra paragraph yahan likho.",
      "Aur jitne chaho utne paragraphs add kar sakte ho."
    ]
  }
  */
];
