# Thank You for Being a Friend &mdash; Golden Girls Trivia

A single-page **Golden Girls** trivia game. Test your knowledge of Dorothy,
Blanche, Rose, and Sophia with episode-specific questions &mdash; from the
pilot to the series finale, St. Olaf stories to Sicilian flashbacks.

## Features

- **25-question bank**, with **10 random questions** per playthrough (and the
  answer order shuffled each time, so it's never the same game twice).
- **Episode-specific trivia** with difficulty tiers (Easy / Medium / Deep Cut).
- After each answer, an **explanation** tells you the episode and the context.
- A **ranked result screen** (from "Just moved to Miami" up to
  "Sophia Petrillo herself!").
- Pure **HTML / CSS / vanilla JS** &mdash; no build step, no dependencies, no
  tracking. A Miami-1980s pastel theme.

## How to run

Just open `index.html` in any browser:

```sh
open index.html        # macOS
xdg-open index.html    # Linux
```

Or serve it locally:

```sh
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Files

| File            | Purpose                                            |
| --------------- | -------------------------------------------------- |
| `index.html`    | App shell and fonts.                               |
| `styles.css`    | Miami-pastel theme and layout.                     |
| `questions.js`  | The trivia question bank (edit to add questions).  |
| `app.js`        | Game logic: deck building, scoring, rendering.     |

## Adding your own questions

Append objects to the array in `questions.js`:

```js
{
  q: "Your question text?",
  options: ["Correct answer", "Wrong", "Wrong", "Wrong"],
  answer: 0,            // index of the correct option (order is shuffled at runtime)
  difficulty: 2,        // 1 = Easy, 2 = Medium, 3 = Deep Cut
  episode: "S2E5 ... context shown after answering."
}
```

---

*A fan-made project. Not affiliated with Touchstone Television or Disney.*
