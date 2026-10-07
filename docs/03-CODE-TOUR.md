# Code tour and architecture decisions

[Overview](../README.md) · [Concepts](02-CONCEPTS-AND-TRACES.md)

| File | Responsibility |
|---|---|
| [package.json](../package.json) | Names the module format, Node requirement and local commands; private prevents npm publication. |
| [.github/workflows/check.yml](../.github/workflows/check.yml) | Runs the committed checks on GitHub. A workflow file is not evidence that a remote run succeeded. |
| [public/index.html](../public/index.html) | Semantic content, controls and explicit IDs. |
| [public/style.css](../public/style.css) | Presentation, focus indication and project-specific layout. |
| [tools/serve.mjs](../tools/serve.mjs) | Local preview infrastructure; only public/ is served. |
| [tools/check-site.mjs](../tools/check-site.mjs) | Checks referenced local assets exist, without pretending to judge usability. |
| [public/core.js](../public/core.js) | The main input/output rule; no DOM access. |
| [public/app.js](../public/app.js) | Renders radio groups named by question ID, stores answers, reverses order and prints scored rows. |
| [test/core.test.js](../test/core.test.js) | Independent boundary examples for the core contract. |

## Follow one path, not every file

Start at [public/core.js](../public/core.js) and locate `scoreQuiz`. Use this trace as a map: Choose a radio → store numeric choice under question ID → submit → map current question order → look up choice by ID → derive correct/incorrect/skipped row with that question's explanation → count statuses and render.

The tooling is intentionally separate from the product concept. You can study the local server or CI after the main rule is clear. Neither an HTTP preview server nor a workflow configuration should become a prerequisite for understanding a small pure function.

## Decision: Use identity instead of position

A display index changes when the list reverses; the question ID does not. Radio groups are named by ID and the answer map uses that same identity. Explanations come from the matched question object rather than a parallel array whose positions might drift.

**Review question:** Which fixture would accidentally pass even if you used index keys everywhere?

**Your alternative:** Write a plausible different choice, then give a concrete example that reveals its cost. “More scalable” or “cleaner” is not enough; identify a changed dependency, a new state to manage, or a user-visible failure mode.

## Decision: Derive totals from result rows

Correct and skipped counts come from the same rows that the UI explains. Incrementing a persistent score when an answer changes would need to reverse the previous contribution and could drift. Recalculation is tiny for five questions and keeps one source of truth.

**Review question:** What happens to a manually incremented score when a learner changes correct to incorrect?

**Your alternative:** Write a plausible different choice, then give a concrete example that reveals its cost. “More scalable” or “cleaner” is not enough; identify a changed dependency, a new state to manage, or a user-visible failure mode.

## Decision: Represent no answer distinctly

Undefined means no choice was supplied for that ID. Numeric zero is a real first choice and must not be treated as falsy absence. Invalid indices are rejected as malformed input, while an in-range wrong choice is an ordinary incorrect answer.

**Review question:** Why does if (!choice) break the first option?

**Your alternative:** Write a plausible different choice, then give a concrete example that reveals its cost. “More scalable” or “cleaner” is not enough; identify a changed dependency, a new state to manage, or a user-visible failure mode.

## Change boundaries

A small change should begin in the file that owns its meaning. Change domain rules in the core (`public/core.js`), wording and interaction in the browser adapter (`public/app.js`), and layout in the relevant CSS rule.

If a story crosses two files, say why. A new option may require the core contract, a control and tests to change together. That is a coherent feature boundary, not permission to rewrite unrelated parts of the project.

## Deliberate limits

Persistence and frameworks are explicit where used: M019 saves a namespaced local draft; M024–M025 introduce React. The remaining builds use plain JavaScript and local data. M025 saved definitions last for the current session only. The preview server is a local development aid, not a production hosting system. A browser screenshot is one observation, not proof of every device or assistive technology. Keep these limits visible when describing your own work.
