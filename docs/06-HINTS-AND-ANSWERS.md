# Hints and answer directions

[Return to the stories](05-PRACTICE-STORIES.md)

There are intentionally no complete feature patches here. Use one hint, return to your code and produce evidence. Your design can differ from the reference when you state and verify the new contract.

## Story 01: Add a clear-one-answer action

**Hint 1 — ownership:** Begin from the `answers` map and `renderQuestions` in `public/app.js`. Delete one answer key and rerender its radio group without touching other answers.

**Hint 2 — reasoning:** Revisit the decision “Represent no answer distinctly”. Ask yourself: Why does if (!choice) break the first option?

**Answer direction:** A defensible solution demonstrates this observable result: The chosen question becomes skipped after scoring and others retain their choices. The exact code is not prescribed. If your change achieves that result by changing an unrelated original rule, revise either the implementation or the story contract explicitly.

**Self-review:** Could the UI or helper appear correct while the underlying rule remains wrong? Could the underlying calculation be correct while stale presentation misleads the user? Choose the question that applies and write one distinguishing example.

## Story 02: Show unanswered question IDs

**Hint 1 — ownership:** Begin from the `skipped` rows returned by `scoreQuiz`. Derive a summary from skipped result rows with links to corresponding fieldsets.

**Hint 2 — reasoning:** Revisit the decision “Derive totals from result rows”. Ask yourself: What happens to a manually incremented score when a learner changes correct to incorrect?

**Answer direction:** A defensible solution demonstrates this observable result: The summary changes correctly after answering or clearing one question. The exact code is not prescribed. If your change achieves that result by changing an unrelated original rule, revise either the implementation or the story contract explicitly.

**Self-review:** Could the UI or helper appear correct while the underlying rule remains wrong? Could the underlying calculation be correct while stale presentation misleads the user? Choose the question that applies and write one distinguishing example.

## Story 03: Add a sixth question

**Hint 1 — ownership:** Begin from the `questions` array in `public/core.js`. Choose a new stable ID, two choices and an explanation; keep the scoring function unchanged.

**Hint 2 — reasoning:** Revisit the decision “Use identity instead of position”. Ask yourself: Which fixture would accidentally pass even if you used index keys everywhere?

**Answer direction:** A defensible solution demonstrates this observable result: Partial and all-correct totals use the new denominator without hard-coded five in logic. The exact code is not prescribed. If your change achieves that result by changing an unrelated original rule, revise either the implementation or the story contract explicitly.

**Self-review:** Could the UI or helper appear correct while the underlying rule remains wrong? Could the underlying calculation be correct while stale presentation misleads the user? Choose the question that applies and write one distinguishing example.

## Story 04: Shuffle with a supplied order

**Hint 1 — ownership:** Begin from the `order` array in `public/app.js`. Accept an explicit permutation fixture for reproducible practice instead of uncontrolled random tests.

**Hint 2 — reasoning:** Revisit the decision “Use identity instead of position”. Ask yourself: Which fixture would accidentally pass even if you used index keys everywhere?

**Answer direction:** A defensible solution demonstrates this observable result: Scoring per ID remains identical across the original and supplied order. The exact code is not prescribed. If your change achieves that result by changing an unrelated original rule, revise either the implementation or the story contract explicitly.

**Self-review:** Could the UI or helper appear correct while the underlying rule remains wrong? Could the underlying calculation be correct while stale presentation misleads the user? Choose the question that applies and write one distinguishing example.

## Story 05: Show chosen and correct text

**Hint 1 — ownership:** Begin from the row objects built in `scoreQuiz`. Extend result rows with safe explanatory choice text while retaining a distinct skipped state.

**Hint 2 — reasoning:** Revisit the decision “Represent no answer distinctly”. Ask yourself: Why does if (!choice) break the first option?

**Answer direction:** A defensible solution demonstrates this observable result: Skipped rows do not pretend a choice was made and reordered questions show their own explanations. The exact code is not prescribed. If your change achieves that result by changing an unrelated original rule, revise either the implementation or the story contract explicitly.

**Self-review:** Could the UI or helper appear correct while the underlying rule remains wrong? Could the underlying calculation be correct while stale presentation misleads the user? Choose the question that applies and write one distinguishing example.

## Story 06: Add reset quiz

**Hint 1 — ownership:** Begin from the `answers` map and `order` array in `public/app.js`. Clear the answer map and restore the original order through an explicit action.

**Hint 2 — reasoning:** Revisit the decision “Represent no answer distinctly”. Ask yourself: Why does if (!choice) break the first option?

**Answer direction:** A defensible solution demonstrates this observable result: After reset no radios are checked and a fresh score reports every question skipped. The exact code is not prescribed. If your change achieves that result by changing an unrelated original rule, revise either the implementation or the story contract explicitly.

**Self-review:** Could the UI or helper appear correct while the underlying rule remains wrong? Could the underlying calculation be correct while stale presentation misleads the user? Choose the question that applies and write one distinguishing example.

## Answers to the trace questions

Choose a radio → store numeric choice under question ID → submit → map current question order → look up choice by ID → derive correct/incorrect/skipped row with that question's explanation → count statuses and render.

The expected examples are in the concepts table. Use them to check your reasoning, then supply a new example of your own. A copied sentence is not evidence that you can trace a changed input.

## When to ask for more help

Ask after you can show a concrete attempt, a specific uncertainty and an observation. Request a smaller hint before a full patch. If you do accept generated code, explain each changed line and run a counterexample you chose independently.
