# Build journal: Quiz Result Explainer

[Code tour](03-CODE-TOUR.md) · [Actual verification](VERIFICATION.md)

This is a retrospective teaching narrative about the implementation in this repository. It is not a verbatim conversation, fabricated team debate or hidden chain-of-thought transcript. The design explanations below are reviewable rationales tied to the source. Dates and check results belong to the verification record.

## The starting problem

A learner needs to see why each answer was marked correct without rewriting the question bank.

The main temptation was to make the project larger than its learning target. The useful boundary is **derived values and identity**. A finished small example lets you inspect the whole path and ask what each part contributes. Extra infrastructure would add more things to configure before the central idea became clear.

## The first contract

Five fixed questions have stable IDs, choices and explanations. Answers are stored by question ID; score and per-question statuses are derived from current answers. Unanswered questions count as skipped, separately from chosen incorrect answers. Reversing display order preserves the meaning of every answer. Editing an answer clears the old result until resubmission; unknown question IDs in an answer object do not create extra score rows.

The contract turned broad intent into examples that can disagree with an implementation. That matters because a plausible-looking result can hide a wrong boundary rule. The examples in the concepts guide were chosen to expose those distinctions, not to make the demo look flawless.

## Decision note 1: Use identity instead of position

A display index changes when the list reverses; the question ID does not. Radio groups are named by ID and the answer map uses that same identity. Explanations come from the matched question object rather than a parallel array whose positions might drift.

**What a learner should challenge:** Which fixture would accidentally pass even if you used index keys everywhere?

**Evidence to consult:** inspect the owning source file, the contract examples and the verification scope. If your alternative satisfies the same behavior with a different structure, compare the maintenance cost instead of assuming one syntax is automatically correct.

## Decision note 2: Derive totals from result rows

Correct and skipped counts come from the same rows that the UI explains. Incrementing a persistent score when an answer changes would need to reverse the previous contribution and could drift. Recalculation is tiny for five questions and keeps one source of truth.

**What a learner should challenge:** What happens to a manually incremented score when a learner changes correct to incorrect?

**Evidence to consult:** inspect the owning source file, the contract examples and the verification scope. If your alternative satisfies the same behavior with a different structure, compare the maintenance cost instead of assuming one syntax is automatically correct.

## Decision note 3: Represent no answer distinctly

Undefined means no choice was supplied for that ID. Numeric zero is a real first choice and must not be treated as falsy absence. Invalid indices are rejected as malformed input, while an in-range wrong choice is an ordinary incorrect answer.

**What a learner should challenge:** Why does if (!choice) break the first option?

**Evidence to consult:** inspect the owning source file, the contract examples and the verification scope. If your alternative satisfies the same behavior with a different structure, compare the maintenance cost instead of assuming one syntax is automatically correct.

## What the checks contributed

The pure-function checks exercised the contract independently of the DOM. Browser checks then verified that real controls passed inputs, showed results and recovered from relevant error or empty states. These are complementary forms of evidence.

The record in VERIFICATION.md reports actual local observations. A GitHub Actions workflow is provided, but its remote result must be inspected separately after a push. A screenshot documents one rendered state; it is not a substitute for the interaction and boundary checks.

## What you should do differently on your own build

Start from the same user need but write your own examples first. Choose a small variation from the story list. Predict behavior, implement a slice and compare the result with your prediction. The reference helps you judge a finished result; your journal should record your own uncertainties and discoveries rather than adopting this narrative as if you experienced it.

## The handoff

The next learner can start from README, locate `scoreQuiz`, reproduce the example table and attempt one bounded story. That is the intended handoff quality: a working result plus enough evidence and explanation to continue safely. The six practice stories remain unfinished for the learner.
