# Six junior practice stories

[Debugging lab](04-DEBUGGING-LAB.md) · [Hints — use after an attempt](06-HINTS-AND-ANSWERS.md)

These are new exercises beyond the finished reference. No story is marked complete for you. Start a branch such as practice/story-01 and write acceptance examples before editing. Each plan leaves the actual code, wording and one design choice to you.

## Story 01: Add a clear-one-answer action

**User need:** As a learner or user of Quiz Result Explainer, I want this small improvement so the behavior is easier to use, explain or verify.

**Feature boundary:** Delete one answer key and rerender its radio group without touching other answers.

**Implementation plan:**

1. Trace `scoreQuiz` and locate the smallest owning file from the code tour. Write how this story touches that responsibility.
2. Write a before/after example that demonstrates this acceptance requirement: The chosen question becomes skipped after scoring and others retain their choices.
3. Choose the input shape, wording or layout policy yourself. Record one alternative and the reason you did not choose it.
4. Implement only the bounded change. If it crosses files, explain what each file owns rather than copying the same decision into several places.
5. Reproduce the acceptance example and one existing boundary case. Add an automated regression for executable logic, or an explicit browser/keyboard/content observation for a static change.
6. Review the diff, explain the change without reading the solution, and record remaining limits.

**Acceptance evidence:** The chosen question becomes skipped after scoring and others retain their choices.

**Left for you:** exact fixture values, names, wording, the implementation and the tradeoff decision. Do not open the hints until you have an example and a first attempt.

**Stretch only after completion:** add one adversarial example that a plausible but incorrect solution would fail. Explain why that example is more informative than adding three ordinary examples.

## Story 02: Show unanswered question IDs

**User need:** As a learner or user of Quiz Result Explainer, I want this small improvement so the behavior is easier to use, explain or verify.

**Feature boundary:** Derive a summary from skipped result rows with links to corresponding fieldsets.

**Implementation plan:**

1. Trace `scoreQuiz` and locate the smallest owning file from the code tour. Write how this story touches that responsibility.
2. Write a before/after example that demonstrates this acceptance requirement: The summary changes correctly after answering or clearing one question.
3. Choose the input shape, wording or layout policy yourself. Record one alternative and the reason you did not choose it.
4. Implement only the bounded change. If it crosses files, explain what each file owns rather than copying the same decision into several places.
5. Reproduce the acceptance example and one existing boundary case. Add an automated regression for executable logic, or an explicit browser/keyboard/content observation for a static change.
6. Review the diff, explain the change without reading the solution, and record remaining limits.

**Acceptance evidence:** The summary changes correctly after answering or clearing one question.

**Left for you:** exact fixture values, names, wording, the implementation and the tradeoff decision. Do not open the hints until you have an example and a first attempt.

**Stretch only after completion:** add one adversarial example that a plausible but incorrect solution would fail. Explain why that example is more informative than adding three ordinary examples.

## Story 03: Add a sixth question

**User need:** As a learner or user of Quiz Result Explainer, I want this small improvement so the behavior is easier to use, explain or verify.

**Feature boundary:** Choose a new stable ID, two choices and an explanation; keep the scoring function unchanged.

**Implementation plan:**

1. Trace `scoreQuiz` and locate the smallest owning file from the code tour. Write how this story touches that responsibility.
2. Write a before/after example that demonstrates this acceptance requirement: Partial and all-correct totals use the new denominator without hard-coded five in logic.
3. Choose the input shape, wording or layout policy yourself. Record one alternative and the reason you did not choose it.
4. Implement only the bounded change. If it crosses files, explain what each file owns rather than copying the same decision into several places.
5. Reproduce the acceptance example and one existing boundary case. Add an automated regression for executable logic, or an explicit browser/keyboard/content observation for a static change.
6. Review the diff, explain the change without reading the solution, and record remaining limits.

**Acceptance evidence:** Partial and all-correct totals use the new denominator without hard-coded five in logic.

**Left for you:** exact fixture values, names, wording, the implementation and the tradeoff decision. Do not open the hints until you have an example and a first attempt.

**Stretch only after completion:** add one adversarial example that a plausible but incorrect solution would fail. Explain why that example is more informative than adding three ordinary examples.

## Story 04: Shuffle with a supplied order

**User need:** As a learner or user of Quiz Result Explainer, I want this small improvement so the behavior is easier to use, explain or verify.

**Feature boundary:** Accept an explicit permutation fixture for reproducible practice instead of uncontrolled random tests.

**Implementation plan:**

1. Trace `scoreQuiz` and locate the smallest owning file from the code tour. Write how this story touches that responsibility.
2. Write a before/after example that demonstrates this acceptance requirement: Scoring per ID remains identical across the original and supplied order.
3. Choose the input shape, wording or layout policy yourself. Record one alternative and the reason you did not choose it.
4. Implement only the bounded change. If it crosses files, explain what each file owns rather than copying the same decision into several places.
5. Reproduce the acceptance example and one existing boundary case. Add an automated regression for executable logic, or an explicit browser/keyboard/content observation for a static change.
6. Review the diff, explain the change without reading the solution, and record remaining limits.

**Acceptance evidence:** Scoring per ID remains identical across the original and supplied order.

**Left for you:** exact fixture values, names, wording, the implementation and the tradeoff decision. Do not open the hints until you have an example and a first attempt.

**Stretch only after completion:** add one adversarial example that a plausible but incorrect solution would fail. Explain why that example is more informative than adding three ordinary examples.

## Story 05: Show chosen and correct text

**User need:** As a learner or user of Quiz Result Explainer, I want this small improvement so the behavior is easier to use, explain or verify.

**Feature boundary:** Extend result rows with safe explanatory choice text while retaining a distinct skipped state.

**Implementation plan:**

1. Trace `scoreQuiz` and locate the smallest owning file from the code tour. Write how this story touches that responsibility.
2. Write a before/after example that demonstrates this acceptance requirement: Skipped rows do not pretend a choice was made and reordered questions show their own explanations.
3. Choose the input shape, wording or layout policy yourself. Record one alternative and the reason you did not choose it.
4. Implement only the bounded change. If it crosses files, explain what each file owns rather than copying the same decision into several places.
5. Reproduce the acceptance example and one existing boundary case. Add an automated regression for executable logic, or an explicit browser/keyboard/content observation for a static change.
6. Review the diff, explain the change without reading the solution, and record remaining limits.

**Acceptance evidence:** Skipped rows do not pretend a choice was made and reordered questions show their own explanations.

**Left for you:** exact fixture values, names, wording, the implementation and the tradeoff decision. Do not open the hints until you have an example and a first attempt.

**Stretch only after completion:** add one adversarial example that a plausible but incorrect solution would fail. Explain why that example is more informative than adding three ordinary examples.

## Story 06: Add reset quiz

**User need:** As a learner or user of Quiz Result Explainer, I want this small improvement so the behavior is easier to use, explain or verify.

**Feature boundary:** Clear the answer map and restore the original order through an explicit action.

**Implementation plan:**

1. Trace `scoreQuiz` and locate the smallest owning file from the code tour. Write how this story touches that responsibility.
2. Write a before/after example that demonstrates this acceptance requirement: After reset no radios are checked and a fresh score reports every question skipped.
3. Choose the input shape, wording or layout policy yourself. Record one alternative and the reason you did not choose it.
4. Implement only the bounded change. If it crosses files, explain what each file owns rather than copying the same decision into several places.
5. Reproduce the acceptance example and one existing boundary case. Add an automated regression for executable logic, or an explicit browser/keyboard/content observation for a static change.
6. Review the diff, explain the change without reading the solution, and record remaining limits.

**Acceptance evidence:** After reset no radios are checked and a fresh score reports every question skipped.

**Left for you:** exact fixture values, names, wording, the implementation and the tradeoff decision. Do not open the hints until you have an example and a first attempt.

**Stretch only after completion:** add one adversarial example that a plausible but incorrect solution would fail. Explain why that example is more informative than adding three ordinary examples.
