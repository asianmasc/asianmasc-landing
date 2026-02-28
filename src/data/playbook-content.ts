export interface PlaybookQuote {
  text: string;
  attribution?: string;
}

export interface PlaybookImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface PlaybookVideo {
  youtubeId: string;
  title: string;
  caption?: string;
}

export interface ChapterSection {
  heading?: string;
  paragraphs: string[];
  quotes: PlaybookQuote[];
  images?: PlaybookImage[];
  videos?: PlaybookVideo[];
}

export interface PlaybookChapter {
  id: string;
  number: string;
  title: string;
  sections: ChapterSection[];
}

export const PLAYBOOK_CHAPTERS: PlaybookChapter[] = [
  {
    id: "looks-first",
    number: "I",
    title: "The Foundation: Looks First",
    sections: [
      {
        paragraphs: [
          "Here's the non-negotiable: your looks are your most powerful dating asset. Not pickup lines, not confidence scripts, not game theory -- looks. This isn't fatalism; it's a prioritization framework. Max out your physical presentation before you optimize anything else.",
        ],
        quotes: [
          {
            text: "looks first max it out and shoot for 7 but ideally 8. 8 makes things so fucking easy. if ur 9--10 even better, and that's coming from the west harder than all other countries. i go to mexico, vietnam, japan -- i am adored and kill it just from looks. i don't speak their language.\n\nattraction is from looks initially especially much more important for getting laid. for relationships it doesn't matter as much, but is powerful leverage.",
            attribution: "BenjaminFCC",
          },
        ],
      },
      {
        paragraphs: [
          "And here's the thing most guys won't accept: when you're truly maxed out, race doesn't matter. It becomes an even playing field. That's not cope -- it's the reality at the top of the looks ladder.",
        ],
        quotes: [
          {
            text: "race does not matter when u are maxed the fuck out. I truly believe it's an even playing field when you reach the looks threshold or beyond it.",
            attribution: "BenjaminFCC",
          },
        ],
      },
      {
        paragraphs: [
          "Here's what that means for you: before worrying about what to say or how to run game, your primary investment should be the gym, style, grooming, and physique. These are the returns that compound.",
        ],
        quotes: [
          {
            text: "you don't need high EQ either, just above average. if u can make basic convo with a cashier or small talk with a stranger that's good enough. high EQ happens when the chick likes you initially (maxed out looks) -- it makes it look like it's from a movie and you look smoother than the best PUA.",
            attribution: "BenjaminFCC",
          },
        ],
      },
      {
        paragraphs: [
          "This reframes 'game' entirely. When attraction is already there from the jump, every interaction feels natural. You're not performing -- you're confirming what she already wants.",
        ],
        quotes: [
          {
            text: "even in the west, sex happens even when i don't speak to the chicks much -- night out, on dates (back to my place within 15--20 mins usually), or morning approaches. even in social circle at parties, i don't talk much. other dudes and girls can talk as much as they want to those girls, but at the end they will make out with me.",
            attribution: "BenjaminFCC",
          },
          {
            text: "open access to the types of girls you want to date starts there.",
            attribution: "BenjaminFCC",
          },
        ],
      },
      {
        heading: "The Looks Transformation: Body, Hair, Clothes",
        paragraphs: [
          "Getting to the looks threshold isn't vague. It's three concrete pillars: low body fat to reveal your facial structure, the right hairstyle for your face, and fitted clothes that signal status. Each one compounds on the others.",
        ],
        quotes: [
          {
            text: "low body fat will make you hate yourself less. When you're lower body fat, you look good -- when you look good, you feel good -- when you look and feel good, you make others feel good -- when others feel good they want to be around you -- when others want to be around you, you love yourself. It's the calculus self love equation.",
            attribution: "BenjaminFCC",
          },
        ],
      },
      {
        paragraphs: [
          "You need to bring out whatever jawline and facial features are hidden under the fat. Many guys are shocked how different they look lean. You don't know if your face has good bone structure if you've never been lean.",
        ],
        quotes: [
          {
            text: "if all of us were still fat would you say we already had good bone structure? Nah fam you'd say 'it's over,' but the fact that you see how great everything turned out for these people, your brain has to reason and justify it and say they already had good bone structure so you don't have to start. Stop lying to yourself, king. GET OUT OF YOUR OWN WAY.",
            attribution: "BenjaminFCC",
          },
        ],
        images: [
          {
            src: "/playbook/face-transformation-1.webp",
            alt: "Before and after face transformation showing the impact of fat loss on facial features",
            caption: "Fat to lean -- the jawline was always there.",
          },
          {
            src: "/playbook/face-transformation-2.webp",
            alt: "One year face transformation progress",
            caption: "One year of consistency. That's it.",
          },
          {
            src: "/playbook/benjamin-before-after.webp",
            alt: "BenjaminFCC before and after transformation",
            caption: "BenjaminFCC -- before vs. after.",
          },
        ],
      },
      {
        paragraphs: [
          "Hair is the second pillar. The right haircut for your face changes everything -- night and day. Most Asian guys default to low-effort side tapers. Grow it out, add texture, experiment. Long styled hair on Asian men is overpowering in sex appeal.",
        ],
        quotes: [
          {
            text: "a majority of Asians look better with styled hair that's much longer or medium length than short hair. Short hair limits what you can really do. Long hair is more maintenance, but the trade off is it will look much better with more variations to accentuate your facial features. You need to add texture -- iron curler or get it permed. Then use hair products and style it for volume.",
            attribution: "BenjaminFCC",
          },
        ],
        images: [
          {
            src: "/playbook/hair-textured.webp",
            alt: "Asian male with textured medium-length hair",
            caption: "Textured, medium-length -- frames the face.",
          },
          {
            src: "/playbook/hair-long-styled.webp",
            alt: "Asian male with long styled hair",
            caption: "Long styled hair on Asian men is overpowering in sex appeal.",
          },
          {
            src: "/playbook/hair-model.webp",
            alt: "Asian male model with styled hair in dark setting",
            caption: "Hair + lean face + style = the full package.",
          },
        ],
      },
      {
        paragraphs: [
          "Third pillar: clothes. Fitted, in-style clothes create perceived status instantly. A guy in fitted, trendy clothes with low body fat and styled hair -- his perceived status is higher than most people in any room.",
        ],
        quotes: [
          {
            text: "fitted clothes does three things: creates higher perceived status and makes you look like someone important, accentuates your physique and leanness creating more sex appeal, and compliments your lean face and good stylish hair -- it completes the package.\n\nyou can make cheap clothes look expensive if they fit your body to a T. Wear jewelry -- necklaces, rings, earrings. Women see it, we don't because we aren't surrounded by that all our lives. But as you wear more jewelry you'll see they make a huge difference, almost as if they add status to you.",
            attribution: "BenjaminFCC",
          },
        ],
        images: [
          {
            src: "/playbook/fitted-suit.webp",
            alt: "Asian male in well-fitted dark suit",
            caption: "Fitted clothes elevate perceived status instantly.",
          },
          {
            src: "/playbook/fitted-casual.webp",
            alt: "Asian male in fitted casual outfit",
            caption: "Casual fits work too -- as long as it fits your body.",
          },
          {
            src: "/playbook/accessories-full.webp",
            alt: "Asian male with layered necklaces, earrings, and styled hair",
            caption: "Hair + accessories + fitted clothes -- the complete package.",
          },
        ],
      },
    ],
  },
  {
    id: "mindset-frame",
    number: "II",
    title: "Mindset & Frame",
    sections: [
      {
        paragraphs: [
          "Everything starts with one concept: you are the prize. Not in an arrogant way, but in a calm, settled, deeply-held way. The frame you carry into every interaction determines everything -- how she reads you, how she feels around you, and what she's willing to do with you.",
        ],
        quotes: [
          {
            text: "On the date and before the date just think 'I already know I'm dangerous when I am calm.'\n\nCalm energy is sexual energy. Bitches love it.\n\nDon't think 'how do I act attractive' -- get that out of your mind and frame. You already are and she already likes you, so be the dangerous calm motherfucker and you'll give off that vibe even if you're faking it.",
            attribution: "BenjaminFCC",
          },
        ],
      },
      {
        paragraphs: [
          "The 'cooler than her' internal frame is everything. It's not contempt -- it's confidence grounded in how you see yourself.",
        ],
        quotes: [
          {
            text: "In your head just think 'I know something she doesn't' and 'Yo I'm so much cooler than this chick, she's so cute, but like I'm wayy cooler.'\n\nIn hindsight you are and do know something she doesn't.",
            attribution: "BenjaminFCC",
          },
          {
            text: "use it as a supplement -- meeting women and people IRL is far more rewarding and you learn much more. but if you're still hung up on women and it's not out of your system, it'll hinder your success in other endeavors.\n\nmake it where you master getting laid/dating where you get to choose to hop in or out -- or decide that it's not the life you want and completely flush it out of your system.\n\nwouldn't be anywhere near as successful as I am if I didn't get it out of my system. it's just for fun now and I can choose to be in any type of relationship if I wanted to.",
            attribution: "BenjaminFCC",
          },
        ],
      },
      {
        heading: "Give Yourself Permission",
        paragraphs: [
          "Before any technique, before any approach -- you need to give yourself permission. Permission to go after what you want. You are your own worst enemy and that's what's holding you back.",
        ],
        quotes: [
          {
            text: "that first thing is giving yourself permission. You are your worst enemy and it's what's holding you back. Permission from yourself is needed to succeed in anything in life. Permission to look like an idiot. Permission to suck for awhile until you get good. Permission to dress sexier than that good looking dude over there. Permission to be an absolute beast.\n\n'Excuse me who gave you the audacity to do that?'\n\nYour response is 'I fucking did, now back the fck up and let me cook.'",
            attribution: "BenjaminFCC",
          },
        ],
      },
      {
        heading: "Screen, Don't Impress",
        paragraphs: [
          "Most guys go into interactions trying to impress women. Flip it. You're screening them out, not auditioning for them. Do what you want, say what you want. Full honesty -- even if you lose them.",
        ],
        quotes: [
          {
            text: "game is just pulling the trigger and making shit happen faster til you get her on your bed, naked and enjoying yourself with her. With that being said I am never smooth with girls I am talking to. I will look smooth if it's a girl that's down and into me. It will look like it's out of a movie scene.\n\non the other hand I can look like a complete noob and an idiot when someone isn't feeling me whether it's a girl or in business -- you will look stupid, a creep, a dumbass. But if it's the right person the dance will look flawless. Communication is a two way street.\n\nwe are screening out for the right person. We are looking to be in the right place at the right time.",
            attribution: "BenjaminFCC",
          },
        ],
      },
      {
        paragraphs: [
          "This is key: mastery of dating is ultimately about freedom. The goal isn't to become obsessed with it -- it's to resolve it so it stops being a source of anxiety and starts being a source of joy.",
        ],
        quotes: [],
      },
    ],
  },
  {
    id: "cold-approach",
    number: "III",
    title: "Cold Approach",
    sections: [
      {
        paragraphs: [
          "If you master social and approach anxiety, you can approach anywhere 90-95% of the time with any girl you want. You're creating something out of thin air -- think about how powerful that is. It gives you a sense of control over your dating life that most men never experience.",
        ],
        quotes: [
          {
            text: "I see it as three super powers you acquire doing this:\n\n1.) The super power of being the most attractive looking male -- race does not matter when u are maxed the fuck out. It's an even playing field when you reach the looks threshold.\n\n2.) The super power of making attraction out of thin air. In business I door knock a lot and it was how my company grew extremely quick -- creating opportunities out of thin air.\n\n3.) The super power to talk to any beautiful woman in any scenario you want and gear it towards romantic and sexual direction. Also transfers into business because you'll make those calls, walk in those businesses and shake hands with important high ranking people, ask for that high ticket price.",
            attribution: "BenjaminFCC",
          },
        ],
      },
      {
        paragraphs: [
          "Cold approach is nerve-wracking for most guys. Here it's stripped down to exactly what you need -- and nothing more. The goal of your approach is not to impress her; it's to quickly screen for interest and move things forward.",
        ],
        quotes: [
          {
            text: "we're not touching their ass or something out there. Simple: 'hey ur cute, wanted to come say hi' -- handshake (hold hand until she lets go, very natural). if she likes you she will be ok with holding the handshake and giggle laugh.\n\nyou keep that and talk normally. if she let go of your hand, screen a bit more -- if she's still standing there and hasn't hit you with 'I have a bf,' 'I'm not interested,' or walked away...\n\n'u look like you work out often, hold up flex ur arm I gotta see this' -- she flexes. I will slightly squeeze her arm and say 'You look like you can be my bodyguard lol.'\n\n(more small talk). If she laughs and giggles and isn't walking away, 'hey let's get a quick drink over there' -- take her hand and go there.\n\nIf she follows you at this point you know for sure she's sexually available.",
            attribution: "BenjaminFCC",
          },
        ],
      },
      {
        paragraphs: [
          "Notice the structure: open with honesty (\"you're cute\"), create immediate physical contact (handshake), screen for compliance, use light teasing, then move. Every step is a small test. If she passes, you proceed. Don't force what isn't there.",
        ],
        quotes: [
          {
            text: "get the quick meetup. you can get to know more and speed on the date.",
            attribution: "BenjaminFCC",
          },
          {
            text: "try to set the date ASAP.",
            attribution: "BenjaminFCC",
          },
        ],
      },
      {
        paragraphs: [
          "Here's a key principle: don't let things linger. Once you have her number, convert it to a meet. Overthinking and waiting kills your momentum.",
        ],
        quotes: [
          {
            text: "yes, people/businesses have a time of availability. in sales, not all buyers are ready to buy -- budget, wife, constraints. dating is the same thing: getting over an ex, bad weather, already fucked last week, already have enough guys.",
            attribution: "BenjaminFCC",
          },
        ],
      },
      {
        paragraphs: [
          "Understand this: rejection often isn't about you -- it's about timing. The girl who said no today might say yes in 3 weeks. Don't internalize it. Volume and persistence matter. The right timing finds the right buyers.",
        ],
        quotes: [],
      },
      {
        heading: "The Numbers Game: Three Avenues",
        paragraphs: [
          "You're playing a numbers game. If you want to never slow down in leads, max out all avenues. Even if there's a slowdown, you never really feel the low because you can create your own luck.",
        ],
        quotes: [
          {
            text: "to break it down -- dating, getting laid, approaching -- you're playing a numbers game. If you want to never slow down in leads, max out all avenues:\n\n1.) Daytime approaches\n2.) Nighttime approaches\n3.) Online\n\neven if there is a slowdown, you never really feel the low of it because you can create your own luck.",
            attribution: "BenjaminFCC",
          },
        ],
      },
      {
        paragraphs: [
          "And if the results aren't showing yet -- relax. This is a long game. Have fun with it. Consistency is the variable that separates the guys who get results from the guys who quit.",
        ],
        quotes: [
          {
            text: "relax you're gunna get some. Maybe you're approaching a shit ton but not getting much action. Relax, eventually you're going to get laid and a lot of it. Options will pour in, but you need to be consistent. Have fun with it. This is fun.\n\nin sales the 30 days of insane revenue is the result of the efforts you put in 90 days prior.",
            attribution: "BenjaminFCC",
          },
        ],
      },
    ],
  },
  {
    id: "date-behavior",
    number: "IV",
    title: "How to Behave on a Date",
    sections: [
      {
        paragraphs: [
          "Most dating advice is vague -- 'be confident.' Here you get specific, actionable behaviors. How fast to walk, how often to talk, where to put your hands.",
        ],
        quotes: [
          {
            text: "How to act and behave on the date:\n\n* Slow movements, slower than usual\n* Slow down your speech, and lower your volume just a tad -- it'll make you calm\n* Hold eye contact (YOU PROMISE THAT YOU WILL NOT BREAK EYE CONTACT AND CAN ONLY BREAK IT AFTER 3--4 SECONDS)\n* Always have a slight smile or smirk after eye contact or when she says something funny\n* Don't be the one talking the most -- she should talk 80--90% more. You just throw in a response when you feel like it, soft smiles and smirk\n* Soft smile and smirk if there's silence, and look into her eyes",
            attribution: "BenjaminFCC",
          },
          {
            text: "walk slower than normal, small smiles and smirks, don't grin like a fag\n\ncalm hugs and pause it for a few seconds before you let go\n\nyou're setting up physical touch and tension at the start.",
            attribution: "BenjaminFCC",
          },
        ],
      },
      {
        paragraphs: [
          "The 'she talks more' principle is counterintuitive but powerful. When you're the one not talking, every word you say carries weight. You're not filling silence -- you're creating it intentionally.",
        ],
        quotes: [
          {
            text: "Don't be afraid of silence especially when she says something and you don't know what to say. Use silence combined with a soft smirk for like 1--2 seconds. I find it helps me find what to ask her next, but it also creates hella tension.\n\nperfection is not the ideal, being human and authentic is ideal, these are just guidelines and effective things you can use.",
            attribution: "BenjaminFCC",
          },
          {
            text: "plenty of guys have a great sex life just being normal and taking girls out to date and even paying for it.",
            attribution: "BenjaminFCC",
          },
        ],
      },
    ],
  },
  {
    id: "eye-contact-body-language",
    number: "V",
    title: "Eye Contact, Body Language & Speech",
    sections: [
      {
        paragraphs: [
          "Eye contact is a fundamental skill -- possibly the single most important physical tool you have on a date. Here are the specific mechanics most guys never learn.",
        ],
        quotes: [
          {
            text: "When you smile give her half smiles -- like smile from one side, do it after eye contact. Don't break eye contact.\n\nIt's like you want to make it seem like 'He knows something I don't' energy. That's the 'little trouble.'",
            attribution: "BenjaminFCC",
          },
        ],
      },
      {
        heading: "Body Language Fundamentals",
        paragraphs: [],
        quotes: [
          {
            text: "Shoulders relax, lean back a bit, don't be stiff, don't fidget. Just don't move your hands all over the place. The more you're still during the date, the more power you have over her.",
            attribution: "BenjaminFCC",
          },
        ],
      },
      {
        heading: "Speech: The Downward Inflection Principle",
        paragraphs: [
          "This is one of the most underrated insights in the entire playbook. Most men communicate nervousness through upward vocal inflection -- unknowingly signaling uncertainty with every sentence.",
        ],
        quotes: [
          {
            text: "here's a trick to make every sentence you say sound masculine: say it in a downward inflection. like you are certain of things.\n\nusually when people are nervous they do an upswing inflection -- 'Do you like that?' upswing sounds like a homo unsure of himself.\n\nlisten to how James Bond ends every sentence -- a downward tone with a smirk on his face. it doesn't mean be monotone; mean what you say with emotions, but have a downward inflection instead of an upward inflection every time you finish a sentence.\n\ncool thing is you're not talking a whole lot so it's easy.",
            attribution: "BenjaminFCC",
          },
          {
            text: "Your rule is to not break eye contact, never do that -- it shows you're nervous and anxious.\n\nwhen it comes to talking: talk slower than you normally do. don't be as loud as usual but not soft as a bitch.\n\ndon't talk too fast. slow is control and dominance.",
            attribution: "BenjaminFCC",
          },
        ],
      },
      {
        heading: "When She's Looking Back",
        paragraphs: [],
        quotes: [
          {
            text: "for you, when you feel the eye contact getting stronger, things get quieter -- go for the kiss. it's the perfect time for the kiss, even asking her to go back to your place.\n\nif she's smiling and keeps looking at you, i usually just fucking kiss them. u can look away slowly if she doesn't, but if she keeps smiling and looking imma pounce on those lips.",
            attribution: "BenjaminFCC",
          },
        ],
      },
    ],
  },
  {
    id: "teasing-push-pull",
    number: "VI",
    title: "Teasing & Push-Pull",
    sections: [
      {
        paragraphs: [
          "Push-pull is the engine behind romantic tension. What follows is the practical application -- not theory. The key is to imply, never analyze. Keep her guessing, keep her emotionally engaged.",
        ],
        quotes: [],
      },
      {
        heading: "The Core Teasing Phrases",
        paragraphs: [],
        quotes: [
          {
            text: "some teasing phrases I say a lot:\n\n'ur trouble aren't u haha' -- soft laugh and slight smirk\n'i can already tell ur dangerous' -- with a half smirk\n'i feel like u pretend to be innocent' -- slight smirk\n\nif you tease her with these, make sure you have eye contact and say it softly -- not aggressively.",
            attribution: "BenjaminFCC",
          },
        ],
      },
      {
        heading: "When She Asks 'What Do You Mean?'",
        paragraphs: [],
        quotes: [
          {
            text: "Never give her logic -- give her a follow-up tease and always be implying, never analyzing.\n\njust say:\n'I just see it in ur eyes ;)'\n'Just a gut feeling... I trust my instinct ;)' with a soft haha\n\nif she keeps pestering: 'why, u nervous about the truth? ;)'\nor: 'U asking a whole lotta questions... should I be worried? ;)'\n\nYou see the push and pull I'm doing on her? it drives their emotions wild. I'm in control.",
            attribution: "BenjaminFCC",
          },
          {
            text: "a lot of dudes think this is time to justify themselves and that the chick is seriously worried or hurt.\n\nNah. You just pushed her emotions -- she's emotionally invested.\n\nkeep calm, tease the shit out of her, push pull, push pull.",
            attribution: "BenjaminFCC",
          },
        ],
      },
      {
        heading: "The Tease + Topic Change",
        paragraphs: [],
        quotes: [
          {
            text: "change the subject a bit later and be chill:\n\n'yo this (boba, ice cream) is super sweet, here try it or am I just crazy?'\n\nusually if they're laughing asking 'what do you mean by that?' or 'how so?' -- it's a good thing. you're good. just keep flirting and have fun.\n\nit's how you deliver it. say these responses to her with a smirk or soft smile with eye contact.",
            attribution: "BenjaminFCC",
          },
        ],
      },
    ],
  },
  {
    id: "physical-escalation",
    number: "VII",
    title: "Physical Escalation",
    sections: [
      {
        paragraphs: [
          "Physical touch is a language. The approach here is incremental and intentional -- each touch is a mini-test for comfort and interest. Your goal is to establish a physical connection early so escalation later feels natural, not sudden.",
        ],
        quotes: [],
      },
      {
        heading: "Early Touch (Beginning of Date)",
        paragraphs: [],
        quotes: [
          {
            text: "calm hugs and pause it for a few seconds before you let go -- you're setting up physical touch and tension at the start.\n\nhere are some other physical escalations I do, very subtle and intentional:\n\n* light hand on lower back guiding her, especially if I'm opening a door or leading her somewhere\n* slow high fives then grab hand for like a second longer with a slight smirk\n* touch arm when we laugh at something",
            attribution: "BenjaminFCC",
          },
        ],
      },
      {
        heading: "When to Go for the Kiss",
        paragraphs: [],
        quotes: [
          {
            text: "When you feel the eye contact getting stronger, things get quieter -- go for the kiss.\n\nif I don't know what to do, I just take my hand, put it under their chin, lift it up, and kiss. Force the makeout when in doubt.",
            attribution: "BenjaminFCC",
          },
        ],
      },
      {
        heading: "Getting Her Back to Your Place",
        paragraphs: [],
        quotes: [
          {
            text: "there's never a right time. the right time is when you trust your guts and nuts and you ask her.\n\ntrust your instincts.\n\nsave the stronger physical touches when she's back at your place.",
            attribution: "BenjaminFCC",
          },
        ],
      },
    ],
  },
  {
    id: "four-date-framework",
    number: "VIII",
    title: "The 4-Date Progression Framework",
    sections: [
      {
        paragraphs: [
          "For situations where closing on the first date isn't the move -- especially with more conservative girls or if you're newer to dating -- here's a clear, patient progression. The key is having a plan and leading every step of the way.",
        ],
        quotes: [
          {
            text: "1st date can be short\n2nd date -- longer time together, 1st kiss, hold hands\n3rd date -- back to your place, makeout heavy, get nude but no penetration\n4th date -- back to yours, full nude, penetration\n\nhave a gameplan (know the location, venue, where other nearby areas are in case you need to bounce). It's so you can lead.\n\ngameplan for 1st date could just be coffee and walk, then next date matcha + walk + play pool, 3rd date play pool ? back to place or bookstore ? back to place.\n\nGameplan.",
            attribution: "BenjaminFCC",
          },
        ],
      },
      {
        paragraphs: [
          "This is something most guys miss. Indecision kills attraction. When you already know where you're going and what's next, you move with purpose -- and that certainty is magnetic.",
        ],
        quotes: [
          {
            text: "it's ok to close on 2nd and even 3rd dates. good job.",
            attribution: "BenjaminFCC",
          },
        ],
      },
      {
        paragraphs: [
          "Patience is a feature, not a bug. Not every girl is first-date DTF. This framework exists so you can navigate those situations without losing momentum or looking desperate.",
        ],
        quotes: [],
      },
    ],
  },
  {
    id: "post-date-texting",
    number: "IX",
    title: "Post-Date & Texting",
    sections: [
      {
        paragraphs: [
          "What you do after the date matters almost as much as the date itself. Your post-date strategy should be built on one principle: don't be eager.",
        ],
        quotes: [
          {
            text: "usually I let the chick text me after the date and it usually happens 3--4 days later. if not, then I'll text something short and plan a hangout.",
            attribution: "BenjaminFCC",
          },
        ],
      },
      {
        paragraphs: [
          "It's that simple. By waiting for her to text first, you accomplish several things: you confirm she's interested, you preserve your value, and you don't look desperate. If she doesn't text, send one short message -- don't send essays, don't double-text, don't ask 'how she's doing.'",
        ],
        quotes: [
          {
            text: "look, I was patient. Usually the ugly chicks message on FB dating pretty fast from a large batch of likes. The hot ones roll in a couple hours/day later. Just gotta have patience.",
            attribution: "BenjaminFCC",
          },
        ],
      },
      {
        paragraphs: [
          "Patience runs through everything in this playbook. Whether it's post-date texting or dating apps, the guy who waits calmly is the guy who wins.",
        ],
        quotes: [],
      },
    ],
  },
  {
    id: "big-picture",
    number: "X",
    title: "The Big Picture",
    sections: [
      {
        paragraphs: [
          "Zoom out from the tactics for a moment. None of this is about tricks or manipulation -- it's about becoming a man who naturally attracts women by working on himself first, having genuine confidence, and approaching interactions from a place of abundance rather than scarcity.",
        ],
        quotes: [
          {
            text: "plenty of guys have a great sex life just being normal and taking girls out to date and even paying for it.",
            attribution: "BenjaminFCC",
          },
        ],
      },
      {
        heading: "The Compound Effect",
        paragraphs: [
          "Everything in this playbook compounds. Your looks compound. Your confidence compounds. Your experience compounds. Progress isn't linear -- it's messy. Three steps forward, six steps back, two steps forward. But it all adds up.",
        ],
        quotes: [
          {
            text: "the more you do something, the higher your IQ for that thing gets. My fashion IQ might be low now, but as I do more my fashion IQ will increase. Babies' IQ on how to walk might be low now, but in a year that baby can walk and in a few years, it's normal.\n\nyou only get better. It's a rule that the more you do something, even if the marginal gains are 1% better, in the end it all adds up. Do not underestimate the power of the compounding effects.",
            attribution: "BenjaminFCC",
          },
        ],
        images: [
          {
            src: "/playbook/body-progression.webp",
            alt: "Multi-year body transformation from 2017 to 2023",
            caption: "2017 to 2023. Years of compounding. This is what consistency looks like.",
          },
          {
            src: "/playbook/benjamin-styled.webp",
            alt: "BenjaminFCC with styled hair, jewelry, and lean physique",
            caption: "The end result: looks, hair, accessories, confidence -- all stacked.",
          },
        ],
      },
      {
        heading: "Choose Your Trade-Offs",
        paragraphs: [
          "Life is a complete trade-off. The sooner you understand that, the sooner your eyes open. You're either trading comfort for mediocrity or discomfort for growth. Both hurt -- you just get to pick which pain.",
        ],
        quotes: [
          {
            text: "this is what you are trading:\n\nbeing fat, unappealing, and cope because it's easier to do these actions and the pain that comes with it.\n\nbeing physically fit and appealing because it's easier to do these actions and the pain that comes with it.\n\nchoose your pain, choose your trade off, choose your actions.",
            attribution: "BenjaminFCC",
          },
        ],
      },
      {
        paragraphs: [
          "How to not care what other people think: working on yourself and your life is more important than what they say or judge about you. That's the hack. It's that simple.",
        ],
        quotes: [],
      },
      {
        paragraphs: [
          "You don't need a system. You need to be attractive, be present, and be calm. Everything in this playbook exists to get you to that natural state -- not to replace it.",
        ],
        quotes: [],
      },
    ],
  },
];

export interface KeyPrinciple {
  title: string;
  description: string;
}

export const KEY_PRINCIPLES: KeyPrinciple[] = [
  {
    title: "Looks are leverage.",
    description:
      "Max out your physical appearance before you optimize anything else. It's the multiplier for everything downstream.",
  },
  {
    title: "Calm is power.",
    description:
      "Slow down. Slow movements, slow speech, fewer words. The stiller you are, the more magnetic you become.",
  },
  {
    title: "Imply, never analyze.",
    description:
      "Keep her guessing. Tease, smirk, push-pull. Never justify yourself.",
  },
  {
    title: "Eye contact is a weapon.",
    description:
      "Hold it. Never break it first. The downward inflection + unbroken gaze combo is what 'natural' game looks like up close.",
  },
  {
    title: "Lead constantly.",
    description:
      "Know where you're going before you get there. Indecision is an attraction killer.",
  },
  {
    title: "Give yourself permission.",
    description:
      "You are your own worst enemy. Permission to look like an idiot. Permission to suck until you get good. Permission to be an absolute beast.",
  },
  {
    title: "Screen, don't impress.",
    description:
      "You're not auditioning for her -- you're screening for the right one. Full honesty, even if you lose them.",
  },
  {
    title: "Get it out of your system.",
    description:
      "Master this area of life so it stops consuming you. Then you can choose to be in -- or out -- on your own terms.",
  },
  {
    title: "Timing isn't always you.",
    description:
      "Rejection is often about availability, not your worth. Volume and persistence compound.",
  },
  {
    title: "Max all three avenues.",
    description:
      "Day approaches, night approaches, online. Max them all so you never feel the low. Create your own luck.",
  },
  {
    title: "Patience is part of the game.",
    description:
      "Don't text first. Don't rush. The calm, unhurried man wins.",
  },
  {
    title: "Everything compounds.",
    description:
      "1% better each time adds up. Your looks, confidence, and experience all stack. Do not underestimate compounding.",
  },
];
