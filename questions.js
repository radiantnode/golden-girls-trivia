/*
 * Golden Girls Trivia question bank.
 * Each question has a correct answer at index `answer` (0-based).
 * `episode` gives the canonical episode reference for the "explanation".
 * `difficulty`: 1 = easy, 2 = medium, 3 = hard / deep-cut.
 */
window.GG_QUESTIONS = [
  // ---------- CHARACTERS & BASICS ----------
  {
    q: "In the pilot, who is the original fifth housemate &mdash; a cook who was written out after the first episode?",
    options: ["Coco", "Sophia", "Stan", "Big Daddy"],
    answer: 0,
    difficulty: 2,
    episode: "S1E1 “The Engagement” (Pilot). Coco, the gay houseboy/cook played by Charles Levin, was dropped after the pilot once Sophia's role was expanded."
  },
  {
    q: "What is the name of Blanche's house that the women all share?",
    options: ["It's never given a name", "The Devereaux Estate", "Casa Rosa", "The Lanai"],
    answer: 0,
    difficulty: 2,
    episode: "The house at 6151 Richmond Street is owned by Blanche Devereaux, but it is never formally 'named' on the show."
  },
  {
    q: "What is Sophia's catchphrase to open her Sicily stories?",
    options: ["“Picture it: Sicily…”", "“Back in the old country…”", "“Listen, pussycat…”", "“When I was a girl…”"],
    answer: 0,
    difficulty: 1,
    episode: "Sophia Petrillo's running gag throughout the series: “Picture it: Sicily, 19—”."
  },
  {
    q: "What is Rose's hometown?",
    options: ["St. Olaf, Minnesota", "Stillwater, Minnesota", "St. Paul, Minnesota", "St. Cloud, Minnesota"],
    answer: 0,
    difficulty: 1,
    episode: "Rose Nylund constantly tells bizarre stories about her fictional Norwegian-American hometown of St. Olaf, Minnesota."
  },
  {
    q: "What subject does Dorothy teach as a substitute teacher?",
    options: ["English / Substitute teacher", "Math", "History", "Chemistry"],
    answer: 0,
    difficulty: 2,
    episode: "Dorothy Zbornak works as a substitute teacher, most often teaching English."
  },

  // ---------- SOPHIA / STAN ----------
  {
    q: "What event left Sophia with no 'filter,' according to the show's running explanation?",
    options: ["A stroke", "A car accident", "A high fever", "Old age alone"],
    answer: 0,
    difficulty: 2,
    episode: "The show jokes that a stroke destroyed the part of Sophia's brain that censors what she says, explaining her blunt remarks."
  },
  {
    q: "What is the name of the retirement home Sophia lived in before it burned down, sending her to live with the girls?",
    options: ["Shady Pines", "Sunset Acres", "Pleasant View", "The Palms"],
    answer: 0,
    difficulty: 2,
    episode: "Shady Pines is the retirement home; Dorothy frequently threatens 'Shady Pines, Ma!' It burned down, which is why Sophia moves in."
  },
  {
    q: "What is the name of Dorothy's ex-husband, the man who left her for a younger flight attendant?",
    options: ["Stan Zbornak", "Stanley Cohen", "Frank Zbornak", "Sal Petrillo"],
    answer: 0,
    difficulty: 1,
    episode: "Stan Zbornak, Dorothy's ex of 38 years, left her for a 25-year-old flight attendant named Chrissy."
  },

  // ---------- BLANCHE ----------
  {
    q: "What does the 'B.E.D.' on Blanche's monogrammed items / vanity plate stand for?",
    options: ["Blanche Elizabeth Devereaux", "Blanche Eleanor Devereaux", "Blanche Emily Devereaux", "Belle Eudora Devereaux"],
    answer: 0,
    difficulty: 3,
    episode: "Blanche's full name is most commonly given as Blanche Elizabeth Devereaux, spelling out 'B.E.D.' — a fitting joke for her."
  },
  {
    q: "What is the name of Blanche's late husband?",
    options: ["George", "Charlie", "Big Daddy", "Clayton"],
    answer: 1,
    difficulty: 2,
    episode: "Blanche's deceased husband is named George Devereaux. (Note: writers occasionally slipped, but 'George' is canonical.)"
  },
  {
    q: "In Season 4, Blanche's brother Clayton reveals what about himself?",
    options: ["He is gay", "He is broke", "He is dying", "He is adopted"],
    answer: 0,
    difficulty: 2,
    episode: "S4 'Scared Straight' and S6 'Sister of the Bride': Blanche's brother Clayton comes out as gay and later marries his partner Doug."
  },

  // ---------- SPECIFIC EPISODES ----------
  {
    q: "In 'The Way We Met' (S1 finale), the girls flash back to how they all came together. What had Rose and Blanche placed that Dorothy answered?",
    options: ["A roommate ad on a grocery store bulletin board", "A newspaper personal ad", "A flyer at the community center", "An ad in the Miami Herald"],
    answer: 0,
    difficulty: 3,
    episode: "S1E25 'The Way We Met': Rose and Blanche posted a roommate-wanted card on the bulletin board at a local grocery store, which Dorothy answered."
  },
  {
    q: "In the Emmy-winning episode where each woman recounts a vacation, where are the girls when they tell their stories?",
    options: ["Stranded at the airport / a hospital waiting setting", "Sitting on the lanai", "At Sophia's hospital bedside", "On a cruise ship"],
    answer: 2,
    difficulty: 3,
    episode: "S2 'Before and After' style clip episodes aside, the famous storytelling format frequently uses the kitchen table and cheesecake."
  },
  {
    q: "What dessert do the girls almost always eat during their late-night kitchen-table heart-to-hearts?",
    options: ["Cheesecake", "Key lime pie", "Tiramisu", "Apple pie"],
    answer: 0,
    difficulty: 1,
    episode: "Cheesecake is the iconic late-night kitchen comfort food of the series — eaten in roughly 100 scenes across the run."
  },
  {
    q: "In 'Isn't It Romantic?' (S2), which character's old friend Jean falls in love with Rose?",
    options: ["Dorothy's college friend Jean", "Blanche's cousin Jean", "Sophia's friend Jean", "Rose's pen pal Jean"],
    answer: 0,
    difficulty: 3,
    episode: "S2E5 'Isn't It Romantic?' (Emmy-winning): Dorothy's recently widowed friend Jean, who is a lesbian, develops feelings for the oblivious Rose."
  },
  {
    q: "In 'Ladies of the Evening' (S2), the girls win tickets to a movie premiere but end up where instead?",
    options: ["In jail, arrested in a prostitution sting", "Stuck in an elevator", "At the wrong theater", "On a TV game show"],
    answer: 0,
    difficulty: 3,
    episode: "S2E2 'Ladies of the Evening': Dorothy, Rose, and Blanche are mistakenly arrested in a brothel raid and spend the night in jail, missing the premiere."
  },
  {
    q: "What is the name of Rose's pet pig in St. Olaf stories / that she once owned?",
    options: ["Baby", "Lester", "Count Bessie", "Wilbur"],
    answer: 0,
    difficulty: 3,
    episode: "Rose's beloved pet pig back in St. Olaf was named Baby. (Count Bessie was the famous St. Olaf counting cow.)"
  },
  {
    q: "In 'Sisters and Other Strangers,' which of Rose's relatives causes trouble by writing a tell-all book?",
    options: ["Her sister Holly", "Her sister Lily", "Her cousin Sven", "Her daughter Kirsten"],
    answer: 0,
    difficulty: 3,
    episode: "S6E1 'Sisters and Other Strangers': Rose's manipulative sister Holly visits and stirs up conflict."
  },
  {
    q: "What is the name of Dorothy and Stan's son?",
    options: ["Michael", "Mark", "Matthew", "John"],
    answer: 0,
    difficulty: 2,
    episode: "Dorothy and Stan have two children: a son named Michael (a musician) and a daughter named Kate."
  },
  {
    q: "In 'Dorothy's Prized Pupil,' Dorothy's gifted student wins an essay contest but faces what crisis?",
    options: ["He is an undocumented immigrant facing deportation", "He is accused of cheating", "He cannot afford college", "He is being bullied"],
    answer: 0,
    difficulty: 3,
    episode: "S3E2 'Dorothy's Prized Pupil': Mario, Dorothy's brilliant student, is revealed to be an illegal immigrant and is threatened with deportation after his essay is published."
  },

  // ---------- DEEP CUTS ----------
  {
    q: "What was the name of Dorothy's father, Sophia's late husband?",
    options: ["Sal Petrillo", "Guido Petrillo", "Vito Petrillo", "Angelo Petrillo"],
    answer: 0,
    difficulty: 2,
    episode: "Salvadore 'Sal' Petrillo was Sophia's husband and Dorothy's father. (Angelo is Sophia's brother.)"
  },
  {
    q: "In the series finale, Dorothy marries whom and moves away?",
    options: ["Blanche's uncle Lucas Hollingsworth", "Stan, again", "An old flame Glen", "Her doctor"],
    answer: 0,
    difficulty: 2,
    episode: "S7 finale 'One Flew Out of the Cuckoo's Nest': Dorothy marries Blanche's uncle Lucas Hollingsworth (played by Leslie Nielsen) and moves to Atlanta."
  },
  {
    q: "What is the name of the spin-off series that continued after Dorothy left?",
    options: ["The Golden Palace", "Empty Nest", "Golden Years", "Miami Nights"],
    answer: 0,
    difficulty: 2,
    episode: "'The Golden Palace' (1992–93) followed Blanche, Rose, and Sophia running a Miami hotel after Dorothy's departure."
  },
  {
    q: "What was Blanche's job for most of the series?",
    options: ["Working at an art museum", "Real estate agent", "Librarian", "Nurse"],
    answer: 0,
    difficulty: 2,
    episode: "Blanche works at a local art museum / gallery as a curator's assistant; she also dabbles in other jobs throughout the series."
  },
  {
    q: "In 'Henny Penny — Straight, No Chaser' (the series' final regular episode plot), the girls perform what for a school play?",
    options: ["Chicken Little / Henny Penny", "Cinderella", "The Wizard of Oz", "Romeo and Juliet"],
    answer: 0,
    difficulty: 3,
    episode: "S7E25 'Henny Penny — Straight, No Chaser': the girls dress as barnyard animals to perform the Chicken Little (Henny Penny) story for Dorothy's students."
  },

  // ===================================================================
  // EXPANSION SET — escalating difficulty (easy warm-ups → deep cuts)
  // ===================================================================

  // ---------- Easier warm-ups (difficulty 1) ----------
  {
    q: "What color is the house the girls live in, and on what Miami street is it located?",
    options: ["Richmond Street", "Ocean Drive", "Collins Avenue", "Biscayne Boulevard"],
    answer: 0,
    difficulty: 1,
    episode: "The girls live at 6151 Richmond Street, Miami (an address seen on mail and in dialogue across the series)."
  },
  {
    q: "Which girl is famous for her many romantic escapades and Southern belle persona?",
    options: ["Blanche", "Rose", "Dorothy", "Sophia"],
    answer: 0,
    difficulty: 1,
    episode: "Blanche Devereaux, the Southern belle from Atlanta, is defined by her active romantic life."
  },
  {
    q: "What is the theme song of The Golden Girls?",
    options: ["“Thank You for Being a Friend”", "“That's What Friends Are For”", "“Golden Days”", "“Miami Nights”"],
    answer: 0,
    difficulty: 1,
    episode: "The theme is Andrew Gold's “Thank You for Being a Friend,” performed for the show by Cynthia Fee."
  },

  // ---------- Medium (difficulty 2) ----------
  {
    q: "What running gag involves the contents of Sophia's wicker handbag?",
    options: ["She always carries it on her arm everywhere", "It is full of cash", "It contains a gun", "It is empty"],
    answer: 0,
    difficulty: 2,
    episode: "Sophia carries her woven straw/wicker purse on her arm in nearly every scene, a signature visual gag."
  },
  {
    q: "Rose works at a grief counseling center in later seasons. Before that, what was her job?",
    options: ["Assistant at a consumer-help TV show / counselor", "Schoolteacher", "Waitress", "Florist"],
    answer: 0,
    difficulty: 2,
    episode: "Rose holds several jobs, including at WSSB-TV's consumer-affairs show 'The Wake Up Miami' and later as a grief counselor."
  },
  {
    q: "What is the name of Dorothy and Stan's daughter?",
    options: ["Kate", "Karen", "Kirsten", "Kelly"],
    answer: 0,
    difficulty: 2,
    episode: "Dorothy and Stan's daughter is Kate (Kate Zbornak), seen most notably in the wedding episode 'My Brother, My Father'-era continuity."
  },
  {
    q: "In 'The Competition,' the girls split into pairs for what tournament?",
    options: ["Bowling", "Tennis", "Bridge", "Shuffleboard"],
    answer: 0,
    difficulty: 2,
    episode: "S1E07 'The Competition': Dorothy and Rose team up for a bowling tournament against Blanche and Sophia, surfacing old rivalries."
  },
  {
    q: "What does Stan typically say as his catchphrase when he shows up at the door?",
    options: ["“Hi, Dorothy. It's me, Stanley.”", "“Honey, I'm home!”", "“Surprise!”", "“Did you miss me?”"],
    answer: 0,
    difficulty: 2,
    episode: "Stan's recurring greeting to his ex-wife is the sheepish “Hi, Dorothy. It's me, Stanley.”"
  },

  // ---------- Harder (difficulty 3) ----------
  {
    q: "In the two-part 'Sick and Tired,' Dorothy is finally diagnosed with what illness after doctors dismissed her?",
    options: ["Chronic Fatigue Syndrome", "Lupus", "Lyme disease", "Fibromyalgia"],
    answer: 0,
    difficulty: 3,
    episode: "S5E1–2 'Sick and Tired': after being condescended to by doctors, Dorothy is diagnosed with Chronic Fatigue Syndrome — a landmark TV storyline."
  },
  {
    q: "What is the name of the famous St. Olaf cow that could supposedly count?",
    options: ["Count Bessie", "Sir Moos-a-lot", "Lady Bovine", "Olga"],
    answer: 0,
    difficulty: 3,
    episode: "Count Bessie is the legendary 'counting cow' of St. Olaf in one of Rose's tall tales."
  },
  {
    q: "In 'Valentine's Day,' the girls reminisce; one story involves a nudist getaway. Whose date was it?",
    options: ["Blanche and Dorothy at a couples retreat", "Rose and a salesman", "Sophia and a widower", "All four on a cruise"],
    answer: 0,
    difficulty: 3,
    episode: "S5E12 'Valentine's Day': a flashback features Blanche and Dorothy unwittingly ending up at a nudist hotel with their dates."
  },
  {
    q: "What was the original title under which the pilot was developed before becoming 'The Golden Girls'?",
    options: ["It started from an NBC promo sketch with 'Miami Nice'", "“Four Friends”", "“Sunshine Cadets”", "“The Lanai”"],
    answer: 0,
    difficulty: 3,
    episode: "The concept was famously sparked by an NBC promo skit dubbed 'Miami Nice,' which led to the series' development."
  },
  {
    q: "Which guest-starring legend played Sophia's sister Angela in multiple episodes?",
    options: ["Nancy Walker", "Bea Arthur's stand-in", "Betty White's sister", "Rue's aunt"],
    answer: 0,
    difficulty: 3,
    episode: "Veteran actress Nancy Walker played Sophia's bickering sister Angela in several appearances."
  },
  {
    q: "In 'Old Friends,' Sophia befriends an elderly man, then loses him to what condition?",
    options: ["Alzheimer's disease", "A heart attack", "A stroke", "Cancer"],
    answer: 0,
    difficulty: 3,
    episode: "S3E01 'Old Friends': Sophia bonds with Alvin, a kindly man whose worsening Alzheimer's leads to a heartbreaking goodbye."
  },
  {
    q: "What is the name of the teddy bear at the center of the 'Old Friends' subplot, held hostage by a Sunshine Cadet?",
    options: ["Fernando", "Mr. Snuggles", "Baby Bear", "Wuzzy"],
    answer: 0,
    difficulty: 3,
    episode: "S3E01 'Old Friends': Blanche's late husband's teddy bear, Fernando, is ransomed piece-by-piece by a tough little Sunshine Cadet, Daisy."
  },

  // ---------- Deepest cuts (difficulty 3, expert tier) ----------
  {
    q: "Estelle Getty (Sophia) was actually how old relative to Bea Arthur (Dorothy), who played her daughter?",
    options: ["Getty was about a year younger than Arthur", "Getty was 20 years older", "They were the same age", "Getty was 10 years older"],
    answer: 0,
    difficulty: 3,
    episode: "Estelle Getty (b. 1923) was roughly a year YOUNGER than Bea Arthur (b. 1922), despite playing her mother — requiring heavy old-age makeup."
  },
  {
    q: "Sophia Petrillo is unique among the characters for appearing across how many connected TV series?",
    options: ["Three (The Golden Girls, Empty Nest, The Golden Palace)", "Two", "One", "Four"],
    answer: 0,
    difficulty: 3,
    episode: "Sophia is the only Golden Girls character to appear in all three connected series: The Golden Girls, the spin-off The Golden Palace, and the sister sitcom Empty Nest."
  },
  {
    q: "In 'Dorothy's New Friend,' Dorothy is dazzled by a snobbish writer who looks down on Blanche and Rose. What is the writer's name?",
    options: ["Barbara Thorndyke", "Glen O'Brien", "Margaret Spencer", "Eleanor Vance"],
    answer: 0,
    difficulty: 3,
    episode: "S2E08 'Dorothy's New Friend': Dorothy befriends pretentious author Barbara Thorndyke, whose elitism (and a snubbing of the other girls) causes a rift."
  },
  {
    q: "What is Blanche's maiden name?",
    options: ["Hollingsworth", "Devereaux", "Bouvier", "Petrillo"],
    answer: 0,
    difficulty: 3,
    episode: "Blanche's maiden name is Hollingsworth — she is the daughter of the larger-than-life 'Big Daddy' Hollingsworth of the South. (Devereaux is her married name.)"
  },
  {
    q: "What is the name of Rose's late husband from St. Olaf, frequently mentioned in her stories?",
    options: ["Charlie", "Gunther", "Lars", "Sven"],
    answer: 0,
    difficulty: 3,
    episode: "Rose's beloved late husband was Charlie Nylund; his memory (and their happy marriage) recurs throughout the series."
  }
];
