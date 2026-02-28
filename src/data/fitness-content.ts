import type { PlaybookChapter } from "@/data/playbook-content";

export type { PlaybookChapter };

export const FITNESS_CHAPTERS: PlaybookChapter[] = [
  {
    id: "training-philosophy",
    number: "I",
    title: "Training Philosophy — Strength First",
    sections: [
      {
        paragraphs: [
          "Strength training is the foundation. Not cardio. Not yoga. Not whatever group fitness class is trending. The entire game is progressive overload — add weight or reps over time, or you're just exercising.",
        ],
        quotes: [
          {
            text: "Progressive overload is the whole game. You add weight or reps over time, or you're just spinning your wheels.",
            attribution: "Tri",
          },
          {
            text: "consistency is the only thing that actually matters in the long run. you can have the perfect program, perfect diet, perfect sleep -- but if you're inconsistent none of it matters. show up.",
            attribution: "Tri",
          },
          {
            text: "i've been lifting for years and the times i made the most progress were when i was focused on moving heavier weight, eating enough to support it, and recovering. every time i got fancy with it i made less progress.",
            attribution: "Tri",
          },
        ],
      },
      {
        heading: "Why Strength Training Builds the Best Physique",
        paragraphs: [
          "A guy who's 180 lbs at 15% body fat looks completely different from 180 lbs at 25%. Same scale. Night and day in the mirror. Strength training shifts that composition — and the muscle you build burns more calories at rest, so you stay leaner long-term.",
        ],
        quotes: [
          {
            text: "The physique you want lives in the squat rack and the bench press, not on the treadmill. Get your priorities straight.",
            attribution: "Tri",
          },
        ],
      },
    ],
  },
  {
    id: "program-design",
    number: "II",
    title: "Program Design — What to Run & How",
    sections: [
      {
        paragraphs: [
          "Run a proven program for minimum 3 months. Stop hopping. GZCLP, Starting Strength, PHUL, PPL — pick one, commit, and run it. Compound movements first, isolation after. Rep ranges: 5-8 for strength, 8-12 for hypertrophy.",
        ],
        quotes: [
          {
            text: "the best program is the one you'll actually run consistently for 6+ months. stop searching for the optimal program. run 5/3/1, GZCLP, Greyskull, Starting Strength -- all of these work. the problem is people run them for 6 weeks, decide it's not working, and switch. that's why they don't make progress.",
            attribution: "Tri",
          },
        ],
      },
      {
        heading: "Which Program Should You Run?",
        paragraphs: [
          "For beginners (less than 1 year of consistent training): GZCLP or Starting Strength. Both are linear progression programs — you add weight every session, which is possible because you're new and your body is incredibly responsive to stimulus. If you can do this, you should. It's the fastest gains you'll ever experience.",
          "For intermediate lifters (1-3 years): PHUL (Power Hypertrophy Upper Lower) or a well-structured PPL (Push Pull Legs) running 6 days per week. At this point your nervous system is adapted enough that you need more frequency and volume to drive adaptation.",
          "For advanced lifters (3+ years): You probably already know what to run. If you're still program hopping at this stage, that's the problem — not the program.",
        ],
        quotes: [
          {
            text: "The program matters less than the execution. A mediocre program run perfectly beats a perfect program run half-assed every time.",
            attribution: "Tri",
          },
        ],
        videos: [
          {
            youtubeId: "6gxfLt1yx68",
            title: "My Full Week of Workouts | 6 Day PPL Split",
            caption: "Tri's full week of workouts — a 6-day PPL split in action.",
          },
        ],
      },
      {
        heading: "How to Track Progress",
        paragraphs: [
          "Keep a training log. This is non-negotiable. You cannot know if you're progressing if you're not tracking. Your phone notes app is fine. A notebook is fine. An app is fine. Just write down: what lift, how much weight, how many sets, how many reps.",
          "The rule: if you can't beat last week's numbers on at least one lift, something is wrong. Either your sleep is off, your diet is off, your recovery is off, or you're not pushing hard enough in the gym. All of those are fixable — but you can only fix them if you know they're happening.",
        ],
        quotes: [
          {
            text: "If you're not tracking, you're guessing. And you're probably wrong.",
            attribution: "Tri",
          },
          {
            text: "track your lifts. i don't care what app or method. just know what you lifted last time and try to beat it. that's the whole program design in one sentence.",
            attribution: "Tri",
          },
        ],
      },
    ],
  },
  {
    id: "nutrition",
    number: "III",
    title: "Nutrition — Protein, Calories & What Actually Matters",
    sections: [
      {
        paragraphs: [
          "1g protein per lb of bodyweight. Non-negotiable. If you weigh 160 lbs, you eat 160g of protein every single day. Not most days. Every day.",
          "Calories determine whether you bulk or cut. Protein determines whether you keep or build muscle. Everything else — meal timing, supplements, \"clean eating,\" intermittent fasting — is noise until those two are locked in. The macro math: 1g protein = 4 cal, 1g carb = 4 cal, 1g fat = 9 cal. Once you understand your daily caloric target and hit your protein, the rest fills in.",
          "Don't overcomplicate it. Chicken, rice, eggs, Greek yogurt, cottage cheese — hit your numbers and you're doing 90% of what needs to be done.",
        ],
        quotes: [
          {
            text: "Protein is the one thing you cannot mess up. Hit your number every single day, no exceptions.",
            attribution: "Tri",
          },
        ],
      },
      {
        heading: "How to Calculate Your Calories",
        paragraphs: [
          "Start with your TDEE — Total Daily Energy Expenditure. This is how many calories your body burns in a day at your current activity level. Use any TDEE calculator online; they're accurate enough to get started. Once you have that number, add 200-300 calories to bulk, subtract 300-500 to cut.",
          "Weigh yourself every morning after using the bathroom. Take a weekly average. If it's going up, you're in a surplus. Going down, deficit. Simple.",
        ],
        quotes: [
          {
            text: "You think you're eating enough. You're almost certainly not. Track for two weeks and you'll be shocked at where your protein actually lands.",
            attribution: "Tri",
          },
        ],
      },
      {
        heading: "High-Protein Foods That Actually Work",
        paragraphs: [
          "The staples: chicken breast, ground beef, eggs, Greek yogurt, cottage cheese, and protein shakes to fill gaps. You don't need a complicated meal plan — just hit your protein number with whatever combination works for your life.",
        ],
        quotes: [
          {
            text: "you can eat whatever you want as long as you hit your protein and your calories. chicken and rice is great but it's not magic. a burger with enough protein is just as effective. don't overcomplicate food unless you want to.",
            attribution: "Tri",
          },
          {
            text: "meal timing barely matters. eat when it works for you. what matters is hitting your total protein and calories for the day. people obsess over pre/post workout windows when they're not even hitting their protein targets.",
            attribution: "Tri",
          },
          {
            text: "creatine is the only supplement with consistent evidence behind it. take it. it's cheap. it works. stop asking about pre-workout and fat burners.",
            attribution: "Tri",
          },
        ],
      },
    ],
  },
  {
    id: "bulk-cut-cycles",
    number: "IV",
    title: "Bulk & Cut Cycles — How to Actually Change Your Body",
    sections: [
      {
        paragraphs: [
          "A bulk is a caloric surplus plus training. A cut is a deficit plus training. That's it. You're either eating more than you burn to build muscle, or eating less than you burn to reveal it.",
          "Bulk until you can't stand being as soft as you are. Cut until you're lean enough to be satisfied. Then repeat. Most guys spin out at maintenance forever wondering why nothing changes. Pick a direction, commit to it, see it through.",
          "For a clean bulk: aim for 200-300 calories above maintenance. For a cut: 300-500 calories below. Aggressive deficits kill muscle. Dirty bulks bury your physique in fat. Stay in range.",
        ],
        quotes: [
          {
            text: "Bulk til you're done. Cut til you're lean. Repeat. That's the whole cycle.",
            attribution: "Tri",
          },
        ],
        videos: [
          {
            youtubeId: "noN9NZ4b2oA",
            title: "The ULTIMATE Guide to Getting Shredded by Summer 2025",
            caption: "Tri's complete shredded-by-summer blueprint — bulk, cut, and everything in between.",
          },
        ],
      },
      {
        heading: "How Long to Bulk vs. Cut",
        paragraphs: [
          "Bulk phases: 4-6 months. Muscle is slow to build — don't cut at the first sign of softness or you'll never accumulate anything. If you're above 18-20% body fat, cut first. Building on top of excess fat just buries the physique deeper.",
          "Cut phases: 8-16 weeks. Target 10-12% body fat — visible abs, defined arms, V-taper. Below 10% is contest-prep territory that isn't sustainable for most people long-term.",
        ],
        quotes: [
          {
            text: "Stop cutting every time you gain 2 pounds. You're not getting fat — you're building. Let it happen.",
            attribution: "Tri",
          },
          {
            text: "if you're a beginner (under 1 year of consistent training) you can gain muscle and lose fat at the same time -- body recomposition. eat at maintenance, train hard, get enough protein. this stops working once you're more advanced.",
            attribution: "Tri",
          },
        ],
      },
      {
        heading: "Maintaining Muscle During a Cut",
        paragraphs: [
          "Three things protect muscle on a cut: protein, strength training, and a moderate deficit. You already know the protein target. Maintain the deficit in the 300-500 calorie range — not aggressive. And keep lifting heavy.",
          "The biggest mistake guys make on a cut: they drop the weights and do high reps to \"tone.\" This does nothing useful. Your body holds on to muscle because it's being used to move heavy things. Stop using it for that, and it starts looking for ways to reduce metabolic cost — which means less muscle.",
          "Cardio is useful on a cut, but use it to increase the deficit, not as a replacement for the weight room. Add 2-3 sessions of 20-30 minutes of moderate cardio per week. Done.",
        ],
        quotes: [
          {
            text: "Keep lifting heavy on a cut. The signal to keep muscle is the same regardless of your calories — use it or lose it.",
            attribution: "Tri",
          },
          {
            text: "the biggest mistake people make when cutting is dropping weight too fast and tanking their performance in the gym. if your lifts are dropping significantly you're cutting too hard or not eating enough protein.",
            attribution: "Tri",
          },
        ],
      },
    ],
  },
  {
    id: "big-lifts",
    number: "V",
    title: "The Big Lifts — Squat, Bench, Deadlift, OHP, Pull-ups",
    sections: [
      {
        paragraphs: [
          "These five movements are your entire program. Everything else is accessory work. Learn these, get strong at these, and you will have 80% of the physique you're looking for. Mastering form here is the single highest-leverage thing you can do in the gym, especially in the first two years.",
        ],
        quotes: [
          {
            text: "Learn the big 5 and you've got 80% of what you need. The rest is just details.",
            attribution: "Tri",
          },
        ],
      },
      {
        heading: "Squat",
        paragraphs: [
          "Bar on mid-traps, not the neck. Big breath, brace your core hard. Sit back and down — not just down. Drive your knees out over your toes as you descend. Hit parallel or below. Drive through your heels on the way up.",
        ],
        quotes: [
          {
            text: "most people squat wrong because they don't have the mobility or they're not bracing properly. before you worry about weight, get the pattern right. brace your core like you're about to take a punch, big breath, push the floor away.",
            attribution: "Tri",
          },
        ],
      },
      {
        heading: "Bench Press",
        paragraphs: [
          "Retract and depress your scapulae before you unrack. Grip outside shoulder-width. Touch the bar to your lower chest. Elbows at 45-75 degrees — not flared out, that's how shoulders die. Feet on the floor, drive through them.",
        ],
        quotes: [
          {
            text: "bench press: retract your scapula before you unrack. keep them retracted throughout the set. this protects your shoulders and puts your chest in the right position to do the work. most people's shoulder pain from bench comes from not doing this.",
            attribution: "Tri",
          },
        ],
      },
      {
        heading: "Deadlift",
        paragraphs: [
          "Bar over mid-foot. Hip hinge — push your hips back, not down. Grip the bar, take the slack out. Big breath, brace, then drive the floor away from you. Think \"leg press with a barbell in your hands,\" not \"pulling the bar up.\" Lock out hips and knees together.",
        ],
        quotes: [
          {
            text: "deadlift is a hip hinge, not a squat. push the floor away with your legs while pulling the bar into your body. if the bar is drifting away from you your form is off. bar stays in contact with your shins on the way up.",
            attribution: "Tri",
          },
        ],
      },
      {
        heading: "Overhead Press (OHP)",
        paragraphs: [
          "Bar in the heel of your hands, grip just outside shoulder-width. Press straight up — not forward. Head through at the top. Lock out with biceps by your ears. Guys skip this lift because the weight is humbling. Don't. Nothing builds shoulders like heavy overhead pressing.",
        ],
        quotes: [
          {
            text: "overhead press is the most neglected lift. people don't do it because it's hard and the weight is humbling. that's exactly why you should do it. nothing builds shoulders and upper back like heavy pressing overhead.",
            attribution: "Tri",
          },
        ],
      },
      {
        heading: "Pull-ups",
        paragraphs: [
          "Dead hang start — full arm extension. Retract your scapulae first, then pull your elbows down toward your hips. Chin over bar. Control the descent. Once you can do 10 clean reps, start adding weight — weighted pull-ups are one of the most effective back builders in existence.",
        ],
        quotes: [
          {
            text: "I don't care what your bench is. If you can't do 10 clean pull-ups, that's where your energy goes first.",
            attribution: "Tri",
          },
          {
            text: "rows are as important as presses. most people do twice as much pressing as pulling and wonder why their posture is bad and their shoulders hurt. match your row volume to your press volume at minimum.",
            attribution: "Tri",
          },
        ],
      },
    ],
  },
  {
    id: "recovery",
    number: "VI",
    title: "Recovery — Sleep, Deloads & What Drives Adaptation",
    sections: [
      {
        paragraphs: [
          "Sleep is the most underrated anabolic compound in existence and it's completely free. 7-9 hours minimum. Not 6. Not 5 hours plus a nap. Actual sleep. This is when muscle protein synthesis peaks, when growth hormone releases, and when your CNS recovers from heavy training.",
          "Deload every 6-8 weeks. Drop the weight by 40%, keep the movements, same rep ranges — just back off the intensity. Your central nervous system accumulates fatigue faster than your muscles adapt, and if you don't manage it proactively, it manages you through injury or a plateau.",
          "The workout is just the stimulus. The gym session tells your body it needs to adapt. Recovery is when adaptation actually happens. If you're training hard but recovering poorly, you're just accumulating damage.",
        ],
        quotes: [
          {
            text: "You don't grow in the gym. You grow when you sleep. Stop treating rest like a reward and start treating it like training.",
            attribution: "Tri",
          },
          {
            text: "sleep is the most underrated performance enhancer. 7-9 hours a night. if you're sleeping 5-6 hours and wondering why you're not making progress, start there. no pre-workout, no supplement, nothing replaces sleep.",
            attribution: "Tri",
          },
        ],
      },
      {
        heading: "Sleep Optimization for Lifters",
        paragraphs: [
          "Same bedtime every night. Cold room. Dark room. No phone the last hour. That's the entire protocol. Most guys already know this — they just don't do it.",
        ],
        quotes: [
          {
            text: "Your recovery protocol is as important as your training protocol. If one of them is trash, the other one doesn't matter.",
            attribution: "Tri",
          },
        ],
      },
      {
        heading: "What a Deload Actually Looks Like",
        paragraphs: [
          "Week before deload: you'll notice. PRs getting harder to hit, joints feeling worn, motivation lower than usual. These are signals your body is accumulating fatigue. Don't wait until something breaks.",
          "During deload: same lifts, same rep ranges, 40% reduction in weight. Focus on form, feel the movement, stay active. It's not a vacation from training — it's training with the dial turned down.",
          "After deload: you'll often hit a PR the first week back. This is supercompensation — your body adapted during the recovery and came back stronger than before. Deloads work. Stop skipping them.",
        ],
        quotes: [
          {
            text: "walking is one of the best things you can do for recovery on off days. low intensity, gets blood moving, doesn't tax your recovery. 30-60 minutes. most people don't do this and then wonder why they're always sore.",
            attribution: "Tri",
          },
        ],
      },
    ],
  },
  {
    id: "common-mistakes",
    number: "VII",
    title: "Common Mistakes & How to Fix Them",
    sections: [
      {
        paragraphs: [
          "These are the mistakes that derail more guys than anything else. Both fixable in a week once you see them.",
        ],
        quotes: [],
      },
      {
        heading: "Mistake 1: Ego Lifting",
        paragraphs: [
          "Loading the bar with more than you can control. You get no stimulus — just injury risk. The muscle doesn't know how much weight is on the bar. It only responds to tension, time under tension, and metabolic stress. A full range-of-motion rep with controlled weight delivers more stimulus than a partial rep with ego weight.",
          "Fix: film your sets. Watch the video. If it looks bad, it is bad. Drop the weight by 20-30%, own the range of motion, then build back up properly.",
        ],
        quotes: [
          {
            text: "ego lifting is a tax you pay eventually. you can get away with bad form until you can't. spend the time to learn to move well. it'll pay dividends for years and keep you out of the physio office.",
            attribution: "Tri",
          },
        ],
      },
      {
        heading: "Mistake 2: Skipping Legs",
        paragraphs: [
          "You get half a physique. Squats and deadlifts aren't optional. Quads, hamstrings, and glutes are the largest muscle groups in the body — training them releases the most growth hormone and testosterone of any movements. Skipping legs also creates obvious visual imbalance.",
          "Fix: put squats and deadlifts on Day 1 of your program — not Day 3. When you're fresh, you push harder. When you're tired, you skip the hard stuff.",
        ],
        quotes: [
          {
            text: "guys who do 4 exercises of bicep curls and skip squats will never look how they want. the big compound movements are how you build the foundation. curls, flyes, lateral raises -- these are finishers, not the main event.",
            attribution: "Tri",
          },
        ],
      },
    ],
  },
  {
    id: "mindset",
    number: "VIII",
    title: "Mindset — The Long Game",
    sections: [
      {
        paragraphs: [
          "The guys who win aren't the most talented — they're the most consistent. Talent gets you started. Consistency gets you there.",
          "Progress is not linear. It never has been and it never will be. You will have weeks where everything clicks — PRs, good sleep, diet is on. You'll also have weeks where nothing moves, you feel flat, and you're questioning if any of it is working. Both are normal. Both are part of the process.",
          "Three steps forward, six steps back, two more forward. It all adds up over time. The only people who don't make it are the ones who quit. Don't quit.",
        ],
        quotes: [
          {
            text: "When summer rolls around I'm expecting EVERYONE in this program to have a six pack. I'll see you all at the end of Q2. 🫡",
            attribution: "Tri",
          },
        ],
      },
      {
        heading: "Accountability Is the Foundation",
        paragraphs: [
          "This isn't just about fitness. The program exists to rebuild something most men have lost in the digital age: integrity, honor, and accountability to other men.",
          "When Tri was younger, if he wanted to party, he had to leave the house. If he wanted to talk to a girl, he had to walk up to her with real fear and real anxiety. There was no shortcut. Those moments forced you to build skills. You either adapted or stayed the same.",
          "Today everything is easy. You swipe instead of approach. You text instead of speak. You disappear instead of explain. That ease has a cost. Men ghost. Men stop showing up because there is no immediate consequence. Loyalty fades when everything is digital and nothing feels real.",
          "This is what the program is designed to reverse. Showing up matters. Responding matters. Your word matters. You become the kind of man who faces things head on again — and that carries into every area of your life, not just the gym.",
        ],
        quotes: [
          {
            text: "This isn't just about fitness. It's about becoming the kind of man who faces things head on again.",
            attribution: "Tri",
          },
          {
            text: "This program exists to rebuild something most men lost: integrity, honor, and accountability to other men.",
            attribution: "Tri",
          },
        ],
      },
      {
        heading: "Identity Before Motivation",
        paragraphs: [
          "Motivation is unreliable. It spikes when you start something new, and fades when the novelty wears off — usually around week 3-4. The guys who are still training consistently at year 2 are not more motivated than you. They've just built it into their identity.",
          "The reframe: stop asking \"am I motivated to train today?\" and start asking \"what do I do on Mondays and Thursdays?\" You don't decide whether to brush your teeth based on how motivated you feel. Training needs to operate at the same level. It's not optional. It's just what you do.",
          "Identity shifts happen through action, not thought. You don't decide you're a consistent lifter and then start showing up. You show up consistently, and then realize you're a consistent lifter. The behavior precedes the identity.",
        ],
        quotes: [
          {
            text: "Nobody stays motivated. What separates the guys who get the physique from those who don't is they built a system so motivation doesn't matter.",
            attribution: "Tri",
          },
          {
            text: "motivation is temporary. discipline is what actually gets you to the gym on the days you don't feel like it. don't rely on motivation. build a habit so automatic that not going feels weird.",
            attribution: "Tri",
          },
          {
            text: "the guy you're comparing yourself to in the gym has been at it for years, has different genetics, might be on gear, and you don't know his full story. run your own race. the only valid comparison is to your past self.",
            attribution: "Tri",
          },
        ],
      },
      {
        heading: "How to Handle Setbacks",
        paragraphs: [
          "You'll miss workouts. You'll have weeks where your diet is off. You'll get sick, travel, get busy. This is guaranteed. The question is how you respond.",
          "The wrong response: \"I missed a week, I've lost all my gains, I have to start over.\" This is catastrophizing and it leads to quitting. Muscle is not lost in a week. Consistency over months matters — one bad week is noise.",
          "The right response: miss one workout, get to the next one. Miss a week, get back in the gym next Monday. Setbacks are part of the timeline. The guys who succeed have had just as many setbacks as the guys who quit — they just didn't let the setbacks become the end of the story.",
        ],
        quotes: [
          {
            text: "Missing one workout doesn't matter. Missing every workout after that one does. Get back in.",
            attribution: "Tri",
          },
          {
            text: "one bad week doesn't erase months of work. one bad meal doesn't ruin your diet. the compounding goes both ways -- consistent effort builds up, and occasional breaks don't tear it all down. just get back at it.",
            attribution: "Tri",
          },
        ],
      },
      {
        heading: "Wins Stack. Misses Chip Away.",
        paragraphs: [
          "Every time you complete a task — every workout hit, every pushup done, every commitment kept — you stack a small win. Those wins compound. Each one adds a little more confidence, a little more self-trust. You start to believe you're the kind of person who does what they say they'll do.",
          "The opposite is equally true. Every time you miss something you said you'd do, it chips away at your self-trust. You feel it. You think about it. Over time, the accumulated misses erode your confidence in yourself to do the right thing.",
          "This is why consistency matters beyond the physical results. It's not just about the pushups or the protein or the PRs. It's about becoming someone you can trust. Show up for yourself consistently enough, and you start to believe you can do hard things. That belief carries into every area of your life.",
        ],
        quotes: [
          {
            text: "Each time we stack our wins we gain a little more confidence in ourselves. Each time you miss a task, it chips away at your self trust.",
            attribution: "Tri",
          },
        ],
      },
      {
        heading: "The Brotherhood Principle",
        paragraphs: [
          "This is a community-based program. When one messes up, we all mess up. When times get rough, you don't bail on each other — you uplift and carry the homie up.",
          "That's not just a nice sentiment. It's a structural feature. The accountability to other people is the mechanism that keeps you honest when your own motivation fails — and it will fail. Accountability to yourself is fragile. Accountability to men you respect is not.",
          "The goal is to be a solid man to your fellow man. Present. Responsive. Reliable. Not because someone is watching, but because that's who you're becoming.",
        ],
        quotes: [
          {
            text: "When one messes up, we all mess up. When times get rough we don't bail on each other, instead we uplift and carry the homie up.",
            attribution: "Tri",
          },
          {
            text: "Be present and be a solid mfer to your fellow man.",
            attribution: "Tri",
          },
        ],
      },
    ],
  },
  {
    id: "quick-reference",
    number: "IX",
    title: "Quick-Reference Rules — 12 Principles",
    sections: [
      {
        paragraphs: [
          "Everything in this playbook distilled to 12 rules. Print them out. Put them in your notes app. Read them when you feel like skipping the gym.",
        ],
        quotes: [],
      },
      {
        heading: "Rule 1 — Strength first.",
        paragraphs: [
          "Cardio is a tool. Strength training is the strategy. Every workout starts with compound lifts, and the goal is always to get stronger over time. Everything else is secondary.",
        ],
        quotes: [],
      },
      {
        heading: "Rule 2 — Progressive overload or it doesn't count.",
        paragraphs: [
          "If you're not tracking your sets, reps, and weight, you have no idea if you're progressing. Log everything. Beat last week's numbers on at least one lift per session.",
        ],
        quotes: [],
      },
      {
        heading: "Rule 3 — 1g protein per lb bodyweight, every day.",
        paragraphs: [
          "This is the number one nutrition rule and the most commonly violated. Track your protein for two weeks and see where you actually land. Then fix it.",
        ],
        quotes: [],
      },
      {
        heading: "Rule 4 — Calories in vs. out determines body comp.",
        paragraphs: [
          "You cannot defy thermodynamics. Calculate your TDEE, add or subtract based on your goal, and eat accordingly. The scale is your feedback. Adjust based on data.",
        ],
        quotes: [],
      },
      {
        heading: "Rule 5 — Pick a program and run it 3+ months.",
        paragraphs: [
          "GZCLP, PHUL, PPL — pick one that's appropriate for your level. Run it for 12 weeks before you touch anything else. Assess, then continue or adjust.",
        ],
        quotes: [],
      },
      {
        heading: "Rule 6 — Compound lifts before isolation.",
        paragraphs: [
          "Squat, bench, deadlift, OHP, pull-ups come first. These are the lifts that move the needle. Curls and cable work are dessert — eat your dinner first.",
        ],
        quotes: [],
      },
      {
        heading: "Rule 7 — Sleep 7-9 hours.",
        paragraphs: [
          "Same bedtime every night. Cold room. Dark room. No phone last hour. This is when you grow. Treat it as seriously as you treat training.",
        ],
        quotes: [],
      },
      {
        heading: "Rule 8 — Deload every 6-8 weeks.",
        paragraphs: [
          "40% weight reduction, same movements, same reps. One week. Come back and hit a PR. Don't wait until something breaks.",
        ],
        quotes: [],
      },
      {
        heading: "Rule 9 — Ego lifting kills progress.",
        paragraphs: [
          "Film your sets. If the form looks bad, drop the weight. A full ROM rep at lower weight beats a partial rep with ego weight every time.",
        ],
        quotes: [],
      },
      {
        heading: "Rule 10 — Consistency beats intensity.",
        paragraphs: [
          "Showing up every week for a year beats destroying yourself for a month and quitting. Three good sessions per week, 52 weeks a year, compounds massively. The gym is a marathon, not a sprint.",
        ],
        quotes: [],
      },
      {
        heading: "Rule 11 — Bulk or cut. Stop eating at maintenance.",
        paragraphs: [
          "Eating at maintenance means your body has no reason to build muscle and no reason to drop fat. Pick a direction. Bulk to build, cut to reveal. Stop trying to do both at once.",
        ],
        quotes: [],
      },
      {
        heading: "Rule 12 — The long game wins. Every time.",
        paragraphs: [
          "Progress is not linear. Don't quit when a bad week hits. Three steps forward, six steps back, two more forward — it all adds up. The physique you want exists on the other side of consistent work over 2-3 years. Not 3 months.",
        ],
        quotes: [
          {
            text: "Everyone was pumped, amped up and ready to fucking kill. That energy has to be brought every single day. There are no do overs and no second chances. We get one shot at life to be known for something great.",
            attribution: "Tri",
          },
        ],
      },
      {
        heading: "Rule 13 — Be present. Keep your word.",
        paragraphs: [
          "The program isn't just physical. Show up. Respond. Do what you said you'd do. That's the whole game — in the gym and everywhere else. The man who keeps his word to himself keeps it to everyone around him too.",
        ],
        quotes: [
          {
            text: "It's always an honor to have the trust from everyone and to be part of a group of hungry go-getters.",
            attribution: "Tri",
          },
        ],
      },
    ],
  },
];

export interface FitnessPrinciple {
  title: string;
  description: string;
}

export const FITNESS_PRINCIPLES: FitnessPrinciple[] = [
  {
    title: "Strength first.",
    description:
      "Everything else — cardio, flexibility, conditioning — is secondary until you've built a real strength base.",
  },
  {
    title: "Progressive overload or it doesn't count.",
    description:
      "Add weight, add reps, or improve form. If none of those are happening, you're exercising, not training.",
  },
  {
    title: "1g protein per lb bodyweight, every day.",
    description:
      "Not most days. Every day. Protein is the non-negotiable foundation of any physique goal.",
  },
  {
    title: "Calories in vs. out determines body comp.",
    description:
      "You bulk in a surplus, you cut in a deficit. Nothing magical happens at maintenance except staying the same.",
  },
  {
    title: "Pick a program and run it 3+ months.",
    description:
      "Program hopping is the number one reason guys don't make progress. Commit, adapt, then reassess.",
  },
  {
    title: "Compound lifts before isolation.",
    description:
      "Squat, bench, deadlift, OHP, pull-ups — these are your program. Everything else is accessory work.",
  },
  {
    title: "Sleep 7-9 hours — it's not optional.",
    description:
      "You don't grow in the gym. You grow when you sleep. Treat rest like training, not a reward.",
  },
  {
    title: "Deload every 6-8 weeks.",
    description:
      "Drop weight 40%, keep the movements. Your CNS needs it. Don't wait until you're broken to back off.",
  },
  {
    title: "Ego lifting kills progress.",
    description:
      "Too much weight, zero stimulus, and high injury risk. Drop the ego, learn the movement, build for real.",
  },
  {
    title: "Consistency beats intensity.",
    description:
      "Showing up every week for a year beats destroying yourself for a month and quitting. Every time.",
  },
  {
    title: "Bulk or cut — stop sitting at maintenance.",
    description:
      "Pick a direction. Bulk until you're done being soft. Cut until you're lean. Then repeat the cycle.",
  },
  {
    title: "The long game wins. Every time.",
    description:
      "Progress is not linear. Three steps forward, six steps back, two more forward. Don't quit. It all adds up.",
  },
  {
    title: "Be present. Keep your word.",
    description:
      "Show up. Respond. Do what you said you'd do. In the gym and everywhere else. That's the whole game.",
  },
];
