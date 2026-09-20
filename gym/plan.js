/* ============================================================================
   GYMMING FOR OLIVES — THE PLAN

   This is the only file you need to touch to change the training plan.
   Edit it, commit, push, and both phones pick it up the next time they open
   the app with a signal.

   THE ONE RULE
     `key` is the identity of an exercise — your logged weights are filed under
     it. Never change a key, and never reuse an old one for a different
     exercise. `name` is only what you see on screen, so rename freely.

   CHANGING THINGS
     Tweak              startKg, topReps, sets, target, rest, how, warmUp,
                        mobility, finisher, stretches — all safe, any time.
     Add an exercise    Copy a block, give it a new key nothing else uses.
     Remove one         Delete the block. Nothing is lost: what you logged
                        moves to "Past exercises" on the Progress screen.
     Swap one for
     another           That is a remove plus an add — use a new key, so the
                        charts don't splice two different exercises together.
     Change a day       Edit `weekday` (1 = Monday … 7 = Sunday). Don't change
                        the day's id ("mon", "tue", …): those id's are what
                        your sessions are filed under.
     Add a day          Add a block with a new id and a `colour` from the list
                        below. New id = new file, so nothing existing moves.

   FIELDS
     type      "weights"    normal loaded exercise — logs kg, sets, reps
               "assisted"   assisted machine: the kg is HELP, so lower is
                            better and the app counts down towards zero
               "bodyweight" no weight — logs sets and reps (or seconds)
     unit      "Reps" (default) or "Secs" for holds like planks
     topReps   the top of the rep range. Hit it on every set and the app tells
               you to go heavier next week.
     stepKg    what the +/- buttons add and take off
     tile      true puts a best-ever tile on the Progress screen. Keep it to
               two or three, or the screen gets busy.
     colour    one of: --mon (blue), --tue (violet), --thu (green),
               --fri (orange), --alt1 (teal), --alt2 (pink)
   ========================================================================= */

window.GYM_PLAN = {

  /* Week 1's Monday. The Data tab can change this on the phone. */
  startDate: "2026-09-21",

  /* Every Nth week is a lighter week. 0 turns deloads off. */
  deloadEvery: 8,

  days: {

    /* ------------------------------------------------------------ Monday */
    mon: {
      label: "Monday",
      focus: "Lower body",
      weekday: 1,
      colour: "--mon",
      flow: "5–7 min warm-up cardio → 2 min mobility → 35 min weights + core → 10 min incline walk → 5 min stretch",
      warmUp:   { time: "5–7 min", how: "Easy bike or cross-trainer — gentle pace, just enough to feel warm and breathe a little harder." },
      mobility: { time: "2 min",   how: "10 leg swings each way (front–back and side–side) + 10 bodyweight squats. Dynamic moves only." },
      exercises: [
        { key:"squat", name:"Back Squat", type:"weights", target:"4 × 6–8", sets:4, topReps:8, startKg:55, stepKg:2.5, rest:"Rest 2–3 min", tile:true,
          how:"Warm-up sets first: empty bar ×10, 30kg ×5, 45kg ×3. Brace your core, hips back and down to at least parallel, drive up through mid-foot." },
        { key:"rdl", name:"Romanian Deadlift", type:"weights", target:"3 × 8–10", sets:3, topReps:10, startKg:40, stepKg:2.5, rest:"Rest 2 min",
          how:"Soft knees, push hips back, bar slides close down your thighs, stop at a strong hamstring stretch. Flat back throughout." },
        { key:"lunge", name:"DB Walking Lunge", type:"weights", target:"3 × 10–12 each leg", sets:3, topReps:12, startKg:8, stepKg:1, rest:"Rest 90 s",
          how:"kg is per dumbbell. Long stride, back knee almost touches the floor, stay tall. Log reps per leg." },
        { key:"legpress", name:"Leg Press", type:"weights", target:"3 × 10–12", sets:3, topReps:12, startKg:60, stepKg:5, rest:"Rest 90 s",
          how:"Pick a load that leaves about 2 reps in the tank. Feet shoulder-width, don't lock your knees at the top." },
        { key:"deadbug", name:"Dead Bug", type:"bodyweight", target:"3 × 8–12 each side", sets:3, topReps:12, rest:"Core · rest 45 s",
          how:"Lie on your back, arms up, knees at 90°. Lower opposite arm and leg slowly, keeping your lower back pressed into the floor." }
      ],
      finisher:  { time:"10 min", how:"Incline walk — treadmill at 10–12%, brisk pace." },
      stretches: [
        { name:"Kneeling hip-flexor + quad", how:"Kneel in a lunge, tuck your pelvis under, push hips forward. Reach back for your foot to add the quad." },
        { name:"Figure-4 glute stretch", how:"On your back, cross one ankle over the other knee and pull the bottom leg in (or do pigeon pose)." },
        { name:"Seated hamstring stretch", how:"Sit tall, one leg straight, hinge forward from the hips with a flat back." }
      ]
    },

    /* ----------------------------------------------------------- Tuesday */
    tue: {
      label: "Tuesday",
      focus: "Upper + abs",
      weekday: 2,
      colour: "--tue",
      flow: "5–7 min warm-up cardio → 2 min mobility → 32 min upper body → 8 min abs → 7 min sprints → 5 min stretch",
      warmUp:   { time:"5–7 min", how:"Easy rower — warms up your back and arms as well as your legs." },
      mobility: { time:"2 min",   how:"10 arm circles each way + 10 band pull-aparts + 5 slow scapular pull-ups hanging from the bar." },
      exercises: [
        { key:"pullup", name:"Assisted Pull-up", type:"assisted", target:"3 × 6–8", sets:3, topReps:8, startKg:50, stepKg:2.5, rest:"Rest 2 min",
          how:"Log the ASSISTANCE weight — lower is stronger. Full hang, chin over the bar, lower slowly (3 s). Hit 3×8 and drop the assist by 2.5–5kg." },
        { key:"dbbench", name:"DB Bench Press", type:"weights", target:"3 × 8–10", sets:3, topReps:10, startKg:7, stepKg:1, rest:"Rest 90 s",
          how:"kg is per dumbbell. Shoulder blades squeezed back and down, lower to chest level, press up and slightly together." },
        { key:"row", name:"Seated Cable Row", type:"weights", target:"3 × 10–12", sets:3, topReps:12, startKg:25, stepKg:2.5, rest:"Rest 90 s",
          how:"Chest up, pull the handle to your belly button, squeeze the shoulder blades, slow return." },
        { key:"ohp", name:"DB Shoulder Press", type:"weights", target:"3 × 8–10", sets:3, topReps:10, startKg:6, stepKg:1, rest:"Rest 90 s",
          how:"Seated with your back supported. Press up without arching your lower back." },
        { key:"curl", name:"DB Bicep Curl", type:"weights", target:"3 × 10–12", sets:3, topReps:12, startKg:6, stepKg:1, rest:"Superset with pushdowns",
          how:"Straight into the tricep pushdowns, then rest 60 s. Elbows pinned to your sides, no swinging, 2–3 s lowering." },
        { key:"tricep", name:"Tricep Rope Pushdown", type:"weights", target:"3 × 10–12", sets:3, topReps:12, startKg:10, stepKg:2.5, rest:"Rest 60 s",
          how:"Elbows tucked at your sides, spread the rope apart at the bottom." },
        { key:"plank", name:"Plank", type:"bodyweight", unit:"Secs", target:"3 × 30–60 s", sets:3, topReps:60, rest:"Abs circuit · rest 30 s",
          how:"Three rounds: plank → knee raise → side plank. Squeeze your glutes, ribs down, straight line head to heels." },
        { key:"kneeraise", name:"Hanging Knee Raise", type:"bodyweight", target:"3 × 8–15", sets:3, topReps:15, rest:"Rest 30 s",
          how:"Captain's chair or hanging from the bar. Curl your pelvis up, no swinging. Builds grip and shoulders for pull-ups too." },
        { key:"sideplank", name:"Side Plank", type:"bodyweight", unit:"Secs", target:"3 × 20–40 s each side", sets:3, topReps:40, rest:"Rest 30 s",
          how:"Hips high, body in a straight line. Log the seconds held per side." }
      ],
      finisher:  { time:"7 min", how:"Rower or bike sprints — 30 s hard / 30 s easy × 7." },
      stretches: [
        { name:"Kneeling lat stretch", how:"Kneel facing a bench, hands on it, sink your hips back and chest down." },
        { name:"Doorway chest stretch", how:"Forearm on a rack upright at shoulder height, step through until you feel the chest and front of the shoulder." },
        { name:"Overhead tricep stretch", how:"Reach one hand down your upper back and gently push the elbow with the other hand." }
      ]
    },

    /* ---------------------------------------------------------- Thursday */
    thu: {
      label: "Thursday",
      focus: "Run day",
      weekday: 4,
      colour: "--thu",
      type: "run",                       /* a run day, not a weights day */
      flow: "5 min warm-up (walk → jog) → 1 min drills → 35–50 min main set → 3 min walk → 5 min stretch",
      warmUp:   { time:"5 min", how:"Brisk walk 2 min, then an easy jog for 3 min." },
      mobility: { time:"1 min", how:"10 leg swings each way + 10 walking lunges or high knees." },
      stretches: [
        { name:"Calf stretch", how:"Hands on a wall, one leg back with the heel down. 30 s with a straight knee, then 30 s with it bent." },
        { name:"Kneeling hip-flexor + quad", how:"Kneel in a lunge, tuck your pelvis, push your hips forward; reach back for your foot." },
        { name:"Standing hamstring stretch", how:"Heel on a low step, leg straight, hinge forward with a flat back." }
      ]
    },

    /* ------------------------------------------------------------ Friday */
    fri: {
      label: "Friday",
      focus: "Full body",
      weekday: 5,
      colour: "--fri",
      flow: "5–7 min warm-up cardio → 2 min mobility → 35 min weights + core → 10 min rower intervals → 5 min stretch",
      warmUp:   { time:"5–7 min", how:"Easy cross-trainer or bike — works arms and legs, which suits a full-body day." },
      mobility: { time:"2 min",   how:"10 hip hinges (hands on hips, no weight) + 10 glute bridges + 10 arm circles each way." },
      exercises: [
        { key:"deadlift", name:"Deadlift", type:"weights", target:"4 × 5–6", sets:4, topReps:6, startKg:50, stepKg:2.5, rest:"Rest 2–3 min", tile:true,
          how:"Warm-up sets: 30kg ×5, 40kg ×3. Bar over mid-foot, flat back, push the floor away, finish by squeezing your glutes. Reset each rep." },
        { key:"pulldown", name:"Lat Pulldown", type:"weights", target:"3 × 8–10", sets:3, topReps:10, startKg:30, stepKg:2.5, rest:"Rest 90 s",
          how:"Pull the bar to your upper chest, elbows down and back, no leaning back. Your key pull-up builder." },
        { key:"incline", name:"Incline DB Press", type:"weights", target:"3 × 8–10", sets:3, topReps:10, startKg:6, stepKg:1, rest:"Rest 90 s",
          how:"Bench at about 30°. kg is per dumbbell." },
        { key:"bss", name:"Bulgarian Split Squat", type:"weights", target:"3 × 8–10 each leg", sets:3, topReps:10, startKg:6, stepKg:1, rest:"Rest 90 s",
          how:"Rear foot on a bench, most of the weight on the front leg, drop straight down. Log reps per leg." },
        { key:"dbrow", name:"1-Arm DB Row", type:"weights", target:"3 × 10–12 each arm", sets:3, topReps:12, startKg:10, stepKg:2, rest:"Rest 60 s",
          how:"Hand and knee on the bench, pull the dumbbell to your hip, don't twist." },
        { key:"pallof", name:"Pallof Press", type:"weights", target:"3 × 10 each side", sets:3, topReps:12, startKg:5, stepKg:2.5, rest:"Core · rest 45 s",
          how:"Stand side-on to a cable at chest height, press the handle straight out, hold 2 s, resist being twisted." }
      ],
      finisher:  { time:"10 min", how:"Rower intervals — 1 min hard / 1 min easy × 5." },
      stretches: [
        { name:"Standing hamstring stretch", how:"Heel on a low box, leg straight, hinge forward with a flat back." },
        { name:"Kneeling hip-flexor stretch", how:"Lunge position, tuck the pelvis, push your hips forward." },
        { name:"Child's pose with side reach", how:"Sit back on your heels, arms long, then walk both hands to one side for the lats. Swap sides." }
      ]
    }
  },

  /* ------------------------------------------------------------- the runs
     Odd weeks are intervals, even weeks are a steady run. Each entry is used
     for two sessions before moving on, so the jump comes every fourth week.
     Add to the end of either list to keep building; the last entry repeats
     with the note beside it once you run off the end.                       */
  running: {
    intervals: [
      { rounds:6, fastMins:1.5 }, { rounds:7, fastMins:1.5 }, { rounds:8, fastMins:1.5 },
      { rounds:6, fastMins:2 },   { rounds:7, fastMins:2 },   { rounds:8, fastMins:2 },
      { rounds:6, fastMins:2.5 }, { rounds:7, fastMins:2.5 },
      { rounds:6, fastMins:3 },   { rounds:7, fastMins:3 }
    ],
    intervalsThen: "7 × (3 min fast / 1 min easy) — now push the fast pace",
    intervalsNote: "Fast is hard but controlled — a few words, not sentences. Easy is a slow jog or walk. If you can't finish the rounds, repeat this target next time.",

    endurance: [40, 42, 44, 46, 48, 50],
    enduranceThen: "50 min steady — aim to beat your distance",
    enduranceNote: "Easy, chatty pace — slower than you think. This is the aerobic base that makes the intervals easier."
  }
};
