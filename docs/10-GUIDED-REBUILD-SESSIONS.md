# Rebuild Quiz Result Explainer through small verified slices

[Expanded workshop map](WORKBOOK-INDEX.md) · [Repository overview](../README.md)

This is a hypothetical reconstruction exercise using the existing reference as a comparison point. Work on a practice branch or a separate scratch copy. Do not erase the working reference. Your goal is to recover the important decisions from requirements, not reproduce every character or configuration file from memory.

## Session zero: write a contract you can challenge

Five fixed questions have stable IDs, choices and explanations. Answers are stored by question ID; score and per-question statuses are derived from current answers. Unanswered questions count as skipped, separately from chosen incorrect answers. Reversing display order preserves the meaning of every answer. Editing an answer clears the old result until resubmission; unknown question IDs in an answer object do not create extra score rows.

Your target skill is derived values and identity. Write three examples before implementation: one ordinary success, one boundary distinction and one recovery or repeat sequence. Reuse the fixed reference fixtures only after making a prediction. If your new example is outside the documented scope, decide whether to reject it or explicitly expand the contract; do not let an incidental implementation choice decide silently.

Write a short non-goal list tied to this exercise. Non-goals keep an assistant from adding a database, a UI framework or a broad refactor before you understand the central rule. For static layout work, a meaningful non-goal may be scripting interactions that native HTML already handles. For stateful work, it may be remote persistence or a global state container.

## Slice 1: Read the question schema

**Reference context:** For each fixture, identify id, text, options, correct and why. The correct field is an option index within a particular question; it is not the question's position in the quiz. Stable IDs solve question identity while the small fixed options list defines its answer vocabulary.

### Your implementation route

1. Inspect `public/core.js` and the related adapter `public/app.js`. Write which responsibility belongs to each for this slice. A path is a place to inspect, not automatic permission to edit every file.
2. State the example independently: **No answers → 0/5 correct; 5 skipped**. Explain which requirement supplies the expected answer.
3. Build the smallest version that can express the example. Start with explicit data and direct control flow. Introduce a helper only when you can name its input, output and reason to change.
4. Observe the result through the real boundary: a command, a browser control, or a layout condition. A function returning the right value does not prove a button passes it the right input.
5. Add a neighboring example that would fail if you special-cased the first one. Review your diff before comparing with the reference.

### Pause at the first uncertainty

Write the smallest question you cannot answer. It might concern ownership, a comparison operator, the effect of deleting a property, or when a callback actually runs. Include the exact expression and an example. Ask a mentor for one clue, then return to the source; avoid requesting a complete replacement implementation.

### Inspect an alternative

Choose one plausible different design for this slice. Describe the extra state, dependency or maintenance rule it introduces. If it satisfies the same contract, it is not automatically wrong. Compare the cost of making the next small change. If it violates the contract, provide the smallest concrete example that demonstrates that violation.

### Capture a reviewable stopping point

Record your actual check: npm test, plus the relevant real interaction or CLI observation. State what it established and what remains untested. Use a commit message about the resulting behavior rather than a list of file names. If the slice does not work yet, keep the uncertainty visible in the journal instead of writing a success narrative.

**Left for you:** the code, fixture values beyond the supplied example, exact naming and the acceptance evidence. The reference is available for comparison after an attempt; it is not evidence that your branch has passed.

## Slice 2: Trace one stored answer

**Reference context:** Check the first option for identity and follow its onchange handler. The value stored is numeric zero under identity. Explain why rendering a reversed list can still check the right radio: the renderer consults the same ID rather than replaying positional clicks.

### Your implementation route

1. Inspect `public/core.js` and the related adapter `public/app.js`. Write which responsibility belongs to each for this slice. A path is a place to inspect, not automatic permission to edit every file.
2. State the example independently: **identity=0 and skip=1, then reverse → 2/5 correct; the same question IDs remain correct**. Explain which requirement supplies the expected answer.
3. Build the smallest version that can express the example. Start with explicit data and direct control flow. Introduce a helper only when you can name its input, output and reason to change.
4. Observe the result through the real boundary: a command, a browser control, or a layout condition. A function returning the right value does not prove a button passes it the right input.
5. Add a neighboring example that would fail if you special-cased the first one. Review your diff before comparing with the reference.

### Pause at the first uncertainty

Write the smallest question you cannot answer. It might concern ownership, a comparison operator, the effect of deleting a property, or when a callback actually runs. Include the exact expression and an example. Ask a mentor for one clue, then return to the source; avoid requesting a complete replacement implementation.

### Inspect an alternative

Choose one plausible different design for this slice. Describe the extra state, dependency or maintenance rule it introduces. If it satisfies the same contract, it is not automatically wrong. Compare the cost of making the next small change. If it violates the contract, provide the smallest concrete example that demonstrates that violation.

### Capture a reviewable stopping point

Record your actual check: npm test, plus the relevant real interaction or CLI observation. State what it established and what remains untested. Use a commit message about the resulting behavior rather than a list of file names. If the slice does not work yet, keep the uncertainty visible in the journal instead of writing a success narrative.

**Left for you:** the code, fixture values beyond the supplied example, exact naming and the acceptance evidence. The reference is available for comparison after an attempt; it is not evidence that your branch has passed.

## Slice 3: Score partial work

**Reference context:** Submit two answers and leave three untouched. scoreQuiz creates five rows, including skips. Count correct and skipped from those rows and verify the displayed denominator remains five. A skipped question is not automatically a failure of the app or an invitation to invent an answer.

### Your implementation route

1. Inspect `public/core.js` and the related adapter `public/app.js`. Write which responsibility belongs to each for this slice. A path is a place to inspect, not automatic permission to edit every file.
2. State the example independently: **Change an answer after scoring → Old result is replaced with a recompute instruction**. Explain which requirement supplies the expected answer.
3. Build the smallest version that can express the example. Start with explicit data and direct control flow. Introduce a helper only when you can name its input, output and reason to change.
4. Observe the result through the real boundary: a command, a browser control, or a layout condition. A function returning the right value does not prove a button passes it the right input.
5. Add a neighboring example that would fail if you special-cased the first one. Review your diff before comparing with the reference.

### Pause at the first uncertainty

Write the smallest question you cannot answer. It might concern ownership, a comparison operator, the effect of deleting a property, or when a callback actually runs. Include the exact expression and an example. Ask a mentor for one clue, then return to the source; avoid requesting a complete replacement implementation.

### Inspect an alternative

Choose one plausible different design for this slice. Describe the extra state, dependency or maintenance rule it introduces. If it satisfies the same contract, it is not automatically wrong. Compare the cost of making the next small change. If it violates the contract, provide the smallest concrete example that demonstrates that violation.

### Capture a reviewable stopping point

Record your actual check: npm test, plus the relevant real interaction or CLI observation. State what it established and what remains untested. Use a commit message about the resulting behavior rather than a list of file names. If the slice does not work yet, keep the uncertainty visible in the journal instead of writing a success narrative.

**Left for you:** the code, fixture values beyond the supplied example, exact naming and the acceptance evidence. The reference is available for comparison after an attempt; it is not evidence that your branch has passed.

## Slice 4: Test a permutation

**Reference context:** Reverse the questions and compare results by ID. The row order changes because display order changed, but a particular question's status and explanation stay attached to it. This is a focused example of a metamorphic check: change a representation detail that should not change the underlying meaning.

### Your implementation route

1. Inspect `public/core.js` and the related adapter `public/app.js`. Write which responsibility belongs to each for this slice. A path is a place to inspect, not automatic permission to edit every file.
2. State the example independently: **Change an answer after scoring → Old result is replaced with a recompute instruction**. Explain which requirement supplies the expected answer.
3. Build the smallest version that can express the example. Start with explicit data and direct control flow. Introduce a helper only when you can name its input, output and reason to change.
4. Observe the result through the real boundary: a command, a browser control, or a layout condition. A function returning the right value does not prove a button passes it the right input.
5. Add a neighboring example that would fail if you special-cased the first one. Review your diff before comparing with the reference.

### Pause at the first uncertainty

Write the smallest question you cannot answer. It might concern ownership, a comparison operator, the effect of deleting a property, or when a callback actually runs. Include the exact expression and an example. Ask a mentor for one clue, then return to the source; avoid requesting a complete replacement implementation.

### Inspect an alternative

Choose one plausible different design for this slice. Describe the extra state, dependency or maintenance rule it introduces. If it satisfies the same contract, it is not automatically wrong. Compare the cost of making the next small change. If it violates the contract, provide the smallest concrete example that demonstrates that violation.

### Capture a reviewable stopping point

Record your actual check: npm test, plus the relevant real interaction or CLI observation. State what it established and what remains untested. Use a commit message about the resulting behavior rather than a list of file names. If the slice does not work yet, keep the uncertainty visible in the journal instead of writing a success narrative.

**Left for you:** the code, fixture values beyond the supplied example, exact naming and the acceptance evidence. The reference is available for comparison after an attempt; it is not evidence that your branch has passed.

## Reconstruct the whole path without the guide

Choose a radio → store numeric choice under question ID → submit → map current question order → look up choice by ID → derive correct/incorrect/skipped row with that question's explanation → count statuses and render.

Close this page and redraw that route from memory using your own labels. Open the code only to resolve a specific uncertainty. Then trace a different valid input and one boundary. If your picture requires a hidden value that you cannot locate in the source, investigate it; diagrams can invent state just as easily as prose can.

## Compare your implementation fairly

First compare behavior and evidence. Only then compare style and abstractions. A shorter implementation may be harder for you to explain; a longer implementation may duplicate a rule that later drifts. State the concrete tradeoff. Do not treat matching the reference line for line as the only successful outcome.

## Finish with a teach-back

Explain why `scoreQuiz` is enough for its present responsibility, which work remains in `public/app.js`, and which future requirement would justify changing that boundary. Answer the original transfer question: Why should correctness follow a question ID rather than its current array index? Keep the answer short enough that another junior can challenge it with an example.
