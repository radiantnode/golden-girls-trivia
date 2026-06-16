(function () {
  "use strict";

  // Use the entire question bank each game (ordered easy -> hard). Defined
  // from the bank size so the start-screen count and progress stay accurate
  // automatically as questions are added.
  var QUESTIONS_PER_GAME = window.GG_QUESTIONS.length;
  var LETTERS = ["A", "B", "C", "D"];

  var state = {
    deck: [],
    index: 0,
    score: 0,
    answered: false
  };

  var app = document.getElementById("app");

  // ---- Utilities -----------------------------------------------------------

  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i];
      a[i] = a[j];
      a[j] = t;
    }
    return a;
  }

  // Shuffle a question's options while keeping the correct answer tracked.
  function prepareQuestion(q) {
    var indexed = q.options.map(function (opt, i) {
      return { text: opt, correct: i === q.answer };
    });
    var shuffled = shuffle(indexed);
    return {
      q: q.q,
      difficulty: q.difficulty,
      episode: q.episode,
      options: shuffled,
      correctIndex: shuffled.findIndex(function (o) { return o.correct; })
    };
  }

  function buildDeck() {
    var pool = shuffle(window.GG_QUESTIONS);
    var count = Math.min(QUESTIONS_PER_GAME, pool.length);
    // Pick a random set, then order easy -> hard so the game ramps up in
    // difficulty. Questions are shuffled first, so ties within a difficulty
    // tier still vary between playthroughs.
    return pool
      .slice(0, count)
      .sort(function (a, b) { return a.difficulty - b.difficulty; })
      .map(prepareQuestion);
  }

  function difficultyLabel(d) {
    return d === 1 ? "Easy" : d === 2 ? "Medium" : "Deep Cut";
  }

  // ---- Views ---------------------------------------------------------------

  function renderStart() {
    app.innerHTML =
      '<div class="card">' +
        '<p class="palm">&#127796;&#127881;&#127796;</p>' +
        '<h1 class="title">Thank You<br>for Being a Friend</h1>' +
        '<p class="subtitle">The Golden Girls Episode Trivia Challenge</p>' +
        '<p class="lead">Picture it: Miami, the 1980s. Test your knowledge of Dorothy, Blanche, Rose, and Sophia with ' +
          QUESTIONS_PER_GAME + ' questions drawn from specific episodes &mdash; from the pilot to the finale, ' +
          'St. Olaf stories to Sicilian flashbacks.</p>' +
        '<div class="center">' +
          '<button class="btn btn-pink" id="start-btn">Start the Quiz &#127860;</button>' +
        '</div>' +
      '</div>';
    document.getElementById("start-btn").addEventListener("click", startGame);
  }

  function renderQuestion() {
    var current = state.deck[state.index];
    var qNum = state.index + 1;
    var total = state.deck.length;
    var progressPct = Math.round(((state.index) / total) * 100);

    var optionsHtml = current.options.map(function (opt, i) {
      return (
        '<button class="option" data-i="' + i + '">' +
          '<span class="letter">' + LETTERS[i] + '</span>' +
          '<span>' + opt.text + '</span>' +
        '</button>'
      );
    }).join("");

    app.innerHTML =
      '<div class="card">' +
        '<div class="quiz-top">' +
          '<span>Question ' + qNum + ' of ' + total + '</span>' +
          '<span class="score-pill">Score: ' + state.score + '</span>' +
        '</div>' +
        '<div class="progress-track"><div class="progress-fill" style="width:' + progressPct + '%"></div></div>' +
        '<span class="badge d' + current.difficulty + '">' + difficultyLabel(current.difficulty) + '</span>' +
        '<h2 class="question-text">' + current.q + '</h2>' +
        '<div class="options" id="options">' + optionsHtml + '</div>' +
        '<div id="feedback"></div>' +
      '</div>';

    state.answered = false;
    var optionButtons = app.querySelectorAll(".option");
    optionButtons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        handleAnswer(parseInt(btn.getAttribute("data-i"), 10));
      });
    });
  }

  function handleAnswer(chosenIndex) {
    if (state.answered) return;
    state.answered = true;

    var current = state.deck[state.index];
    var correctIndex = current.correctIndex;
    var isCorrect = chosenIndex === correctIndex;
    if (isCorrect) state.score++;

    var buttons = app.querySelectorAll(".option");
    buttons.forEach(function (btn, i) {
      btn.disabled = true;
      if (i === correctIndex) btn.classList.add("correct");
      else if (i === chosenIndex) btn.classList.add("wrong");
    });

    var isLast = state.index === state.deck.length - 1;
    var verdict = isCorrect
      ? '<strong>Correct!</strong> '
      : '<strong>Not quite.</strong> ';

    var feedback = document.getElementById("feedback");
    feedback.innerHTML =
      '<div class="explanation ' + (isCorrect ? 'good' : 'bad') + '">' + verdict + current.episode + '</div>' +
      '<div class="next-row">' +
        '<button class="btn" id="next-btn">' +
          (isLast ? 'See Results &#127881;' : 'Next Question &#8594;') +
        '</button>' +
      '</div>';

    document.getElementById("next-btn").addEventListener("click", nextQuestion);
  }

  function nextQuestion() {
    if (state.index < state.deck.length - 1) {
      state.index++;
      renderQuestion();
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      renderResults();
    }
  }

  function rankFor(score, total) {
    var pct = score / total;
    if (pct === 1) {
      return { rank: "Sophia Petrillo herself!", blurb: "Flawless. You'd survive Shady Pines and still have the sharpest tongue in Miami. Picture it: a perfect score." };
    } else if (pct >= 0.8) {
      return { rank: "Honorary Golden Girl", blurb: "Outstanding! You've clearly spent many a night around the kitchen table with a cheesecake. Bravo." };
    } else if (pct >= 0.6) {
      return { rank: "Lanai Regular", blurb: "Nicely done! You know your Devereaux from your Nylund. A little more late-night re-watching and you'll be unstoppable." };
    } else if (pct >= 0.4) {
      return { rank: "Weekend Visitor", blurb: "Not bad! You've got the basics, but those deep cuts from St. Olaf got you. Time for a marathon." };
    }
    return { rank: "Just moved to Miami", blurb: "There's a whole world of Sicilian flashbacks and St. Olaf stories waiting for you. Give it another go!" };
  }

  function renderResults() {
    var total = state.deck.length;
    var info = rankFor(state.score, total);

    app.innerHTML =
      '<div class="card">' +
        '<p class="palm">&#127881;</p>' +
        '<p class="result-of">Your final score</p>' +
        '<p class="result-score">' + state.score + ' / ' + total + '</p>' +
        '<p class="result-rank">' + info.rank + '</p>' +
        '<p class="result-blurb">' + info.blurb + '</p>' +
        '<div class="center mt">' +
          '<button class="btn btn-pink" id="again-btn">Play Again &#128260;</button>' +
        '</div>' +
      '</div>';

    document.getElementById("again-btn").addEventListener("click", startGame);
  }

  // ---- Flow ----------------------------------------------------------------

  function startGame() {
    state.deck = buildDeck();
    state.index = 0;
    state.score = 0;
    state.answered = false;
    renderQuestion();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  renderStart();
})();
