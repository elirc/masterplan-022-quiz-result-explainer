# M022: mentor hints and answer directions

[Expanded workshop map](WORKBOOK-INDEX.md) · [Repository overview](../README.md)

Use this chapter after making an attempt. It provides reasoning directions and evaluation criteria, not finished feature patches. A learner can choose a different design when the revised contract is explicit and the evidence supports it.

## Retrieval card 01: answer direction

**Question:** Explain stable id through this project

A question identity independent of its current position.

Look for a concrete connection to `public/core.js` or `public/app.js`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 02: answer direction

**Question:** Explain derived score through this project

A total recalculated from current answers and questions.

Look for a concrete connection to `public/core.js` or `public/app.js`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 03: answer direction

**Question:** Explain skip through this project

A question for which no choice was supplied.

Look for a concrete connection to `public/core.js` or `public/app.js`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 04: answer direction

**Question:** Explain permutation invariant through this project

Meaning that survives reordering.

Look for a concrete connection to `public/core.js` or `public/app.js`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 05: answer direction

**Question:** Predict: No answers

0/5 correct; 5 skipped

Look for a concrete connection to `public/core.js` or `public/app.js`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 06: answer direction

**Question:** Predict: identity=0 and skip=1, then reverse

2/5 correct; the same question IDs remain correct

Look for a concrete connection to `public/core.js` or `public/app.js`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 07: answer direction

**Question:** Predict: Change an answer after scoring

Old result is replaced with a recompute instruction

Look for a concrete connection to `public/core.js` or `public/app.js`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 08: answer direction

**Question:** Which fixture would accidentally pass even if you used index keys everywhere?

A display index changes when the list reverses; the question ID does not. Radio groups are named by ID and the answer map uses that same identity. Explanations come from the matched question object rather than a parallel array whose positions might drift.

Look for a concrete connection to `public/core.js` or `public/app.js`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 09: answer direction

**Question:** What happens to a manually incremented score when a learner changes correct to incorrect?

Correct and skipped counts come from the same rows that the UI explains. Incrementing a persistent score when an answer changes would need to reverse the previous contribution and could drift. Recalculation is tiny for five questions and keeps one source of truth.

Look for a concrete connection to `public/core.js` or `public/app.js`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 10: answer direction

**Question:** Why does if (!choice) break the first option?

Undefined means no choice was supplied for that ID. Numeric zero is a real first choice and must not be treated as falsy absence. Invalid indices are rejected as malformed input, while an in-range wrong choice is an ordinary incorrect answer.

Look for a concrete connection to `public/core.js` or `public/app.js`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 11: answer direction

**Question:** What does your strongest check not prove?

Use the scope recorded in VERIFICATION.md; do not infer production readiness from a small local fixture.

Look for a concrete connection to `public/core.js` or `public/app.js`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 12: answer direction

**Question:** Why should correctness follow a question ID rather than its current array index?

Question identity is stable even when display position changes. Answers keyed by ID can follow a permutation without being reassigned to a different question. Scoring is derived information; the same result rows should explain the score and the skips. Numeric choice zero is meaningful, so absence needs an explicit representation rather than a truthiness shortcut.

Look for a concrete connection to `public/core.js` or `public/app.js`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Story 07: Add answered-count feedback

**First hint:** The desired improvement is “Show progress before scoring.” Start by identifying which existing boundary already knows the necessary information. Do not copy that information into new state until you can explain why derivation is insufficient.

**Second hint:** Follow this source-specific route: Derive answered IDs from current questions; ignore unrelated answer keys; display count separately from correctness. Keep each stage independently inspectable. If a step requires a policy choice, write the choice before implementing it.

**Third hint:** Your strongest completion evidence should establish: Answering a wrong choice still increases answered count. Invent a plausible wrong implementation and make your example disagree with it.

**Decision still left to you:** Choose when to show the count. The guide intentionally does not settle this. Evaluate your answer by clarity of the contract, consistency of the implementation and quality of verification, not by guessing the author's preferred wording.

## Story 08: Add a review-only mode

**First hint:** The desired improvement is “Separate answer editing from reading explanations.” Start by identifying which existing boundary already knows the necessary information. Do not copy that information into new state until you can explain why derivation is insufficient.

**Second hint:** Follow this source-specific route: Define a review state; disable or hide editing deliberately; offer a clear return to editing that invalidates old results. Keep each stage independently inspectable. If a step requires a policy choice, write the choice before implementing it.

**Third hint:** Your strongest completion evidence should establish: A changed answer cannot retain an old authoritative score. Invent a plausible wrong implementation and make your example disagree with it.

**Decision still left to you:** Choose whether review initially locks inputs. The guide intentionally does not settle this. Evaluate your answer by clarity of the contract, consistency of the implementation and quality of verification, not by guessing the author's preferred wording.

## Story 09: Add per-question explanation disclosure

**First hint:** The desired improvement is “Reduce visual density without hiding result status.” Start by identifying which existing boundary already knows the necessary information. Do not copy that information into new state until you can explain why derivation is insufficient.

**Second hint:** Follow this source-specific route: Keep status text visible; put the explanation in a native disclosure; use the question ID to associate data. Keep each stage independently inspectable. If a step requires a policy choice, write the choice before implementing it.

**Third hint:** Your strongest completion evidence should establish: Reordered questions retain the correct explanation. Invent a plausible wrong implementation and make your example disagree with it.

**Decision still left to you:** Choose default open states. The guide intentionally does not settle this. Evaluate your answer by clarity of the contract, consistency of the implementation and quality of verification, not by guessing the author's preferred wording.

## Story 10: Add a wrong-answer count

**First hint:** The desired improvement is “Derive the third status count explicitly.” Start by identifying which existing boundary already knows the necessary information. Do not copy that information into new state until you can explain why derivation is insufficient.

**Second hint:** Follow this source-specific route: Count incorrect rows from scoreQuiz output; verify totals reconcile; avoid denominator changes for skips. Keep each stage independently inspectable. If a step requires a policy choice, write the choice before implementing it.

**Third hint:** Your strongest completion evidence should establish: Correct plus incorrect plus skipped equals total. Invent a plausible wrong implementation and make your example disagree with it.

**Decision still left to you:** Choose summary wording. The guide intentionally does not settle this. Evaluate your answer by clarity of the contract, consistency of the implementation and quality of verification, not by guessing the author's preferred wording.

## Story 11: Add a targeted retry list

**First hint:** The desired improvement is “Focus practice on incorrect or skipped questions.” Start by identifying which existing boundary already knows the necessary information. Do not copy that information into new state until you can explain why derivation is insufficient.

**Second hint:** Follow this source-specific route: Derive the retry subset from result IDs; retain original question identities; define whether old answers clear. Keep each stage independently inspectable. If a step requires a policy choice, write the choice before implementing it.

**Third hint:** Your strongest completion evidence should establish: Retrying does not attach answers to new positional indices. Invent a plausible wrong implementation and make your example disagree with it.

**Decision still left to you:** Choose clearing policy. The guide intentionally does not settle this. Evaluate your answer by clarity of the contract, consistency of the implementation and quality of verification, not by guessing the author's preferred wording.

## Story 12: Add unknown-answer-key diagnostics

**First hint:** The desired improvement is “Explain ignored keys in a supplied answer object.” Start by identifying which existing boundary already knows the necessary information. Do not copy that information into new state until you can explain why derivation is insufficient.

**Second hint:** Follow this source-specific route: Compare answer keys with current question IDs; report extras separately; preserve scoring of known questions. Keep each stage independently inspectable. If a step requires a policy choice, write the choice before implementing it.

**Third hint:** Your strongest completion evidence should establish: Unknown keys never add points or rows. Invent a plausible wrong implementation and make your example disagree with it.

**Decision still left to you:** Choose warning versus rejection policy. The guide intentionally does not settle this. Evaluate your answer by clarity of the contract, consistency of the implementation and quality of verification, not by guessing the author's preferred wording.

## Story 13: Add an option-order exercise

**First hint:** The desired improvement is “Show that stable question IDs do not solve every identity problem.” Start by identifying which existing boundary already knows the necessary information. Do not copy that information into new state until you can explain why derivation is insufficient.

**Second hint:** Follow this source-specific route: Reorder options in a scratch fixture; inspect index-based answers; propose option IDs before supporting dynamic options. Keep each stage independently inspectable. If a step requires a policy choice, write the choice before implementing it.

**Third hint:** Your strongest completion evidence should establish: The guide identifies the current fixed-option contract honestly. Invent a plausible wrong implementation and make your example disagree with it.

**Decision still left to you:** Choose whether stable option IDs are needed. The guide intentionally does not settle this. Evaluate your answer by clarity of the contract, consistency of the implementation and quality of verification, not by guessing the author's preferred wording.

## Story 14: Add an exportable result receipt

**First hint:** The desired improvement is “Save an inspectable summary without claiming remote persistence.” Start by identifying which existing boundary already knows the necessary information. Do not copy that information into new state until you can explain why derivation is insufficient.

**Second hint:** Follow this source-specific route: Format per-question IDs and statuses; include scoring policy; keep unanswered distinct. Keep each stage independently inspectable. If a step requires a policy choice, write the choice before implementing it.

**Third hint:** Your strongest completion evidence should establish: Export order and score agree with the same result object. Invent a plausible wrong implementation and make your example disagree with it.

**Decision still left to you:** Choose text or JSON format. The guide intentionally does not settle this. Evaluate your answer by clarity of the contract, consistency of the implementation and quality of verification, not by guessing the author's preferred wording.

## Story 15: Add a second independent quiz fixture

**First hint:** The desired improvement is “Test whether scoring depends on the original five questions.” Start by identifying which existing boundary already knows the necessary information. Do not copy that information into new state until you can explain why derivation is insufficient.

**Second hint:** Follow this source-specific route: Supply a small new question array with unique IDs; hand-author answers; keep the core generic for its documented shape. Keep each stage independently inspectable. If a step requires a policy choice, write the choice before implementing it.

**Third hint:** Your strongest completion evidence should establish: Totals come from source length rather than a hard-coded five. Invent a plausible wrong implementation and make your example disagree with it.

**Decision still left to you:** Choose two introductory questions. The guide intentionally does not settle this. Evaluate your answer by clarity of the contract, consistency of the implementation and quality of verification, not by guessing the author's preferred wording.

## Mentor feedback rubric

| Dimension | Beginning | Developing | Independent evidence |
|---|---|---|---|
| Trace | Names files only | Follows one ordinary case | Predicts a new boundary and explains its owner |
| Test design | Copies output | Uses a stated expectation | Rejects a plausible wrong candidate |
| Design | Repeats a slogan | Names an alternative | Compares costs using a concrete change |
| Agent use | Accepts a generated answer | Checks suggested edits | Supplies own proposal and adjudicates critiques |
| Handoff | Claims it works | Lists actual checks | Explains behavior, evidence and limits coherently |

Use the rubric to choose the next practice action, not to label yourself permanently. A learner may be independent at source tracing and still need help designing a failure case. Target the missing skill with one smaller exercise.
