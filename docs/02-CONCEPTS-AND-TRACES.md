# Concepts and worked traces

[Walkthrough](01-BUILD-WALKTHROUGH.md) · [Debugging lab](04-DEBUGGING-LAB.md)

## The exact contract

Five fixed questions have stable IDs, choices and explanations. Answers are stored by question ID; score and per-question statuses are derived from current answers. Unanswered questions count as skipped, separately from chosen incorrect answers. Reversing display order preserves the meaning of every answer. Editing an answer clears the old result until resubmission; unknown question IDs in an answer object do not create extra score rows.

This paragraph is the reference behavior. If you extend the product, update the contract and examples together. An implementation can be internally consistent while solving the wrong problem, so start with the user's meaning before discussing syntax.

## A complete trace

Choose a radio → store numeric choice under question ID → submit → map current question order → look up choice by ID → derive correct/incorrect/skipped row with that question's explanation → count statuses and render.

Copy that trace onto paper. At each arrow, name the input, the owner of the rule or state, and the output. For browser layout, the owner is a CSS rule acting on a particular box. For JavaScript, it may be a local variable, a returned object or a callback. For Git, it is a specific snapshot comparison. These are different mechanisms but the same useful habit: make the boundary visible.

## Examples you can verify independently

| Input or situation | Expected observation |
|---|---|
| No answers | 0/5 correct; 5 skipped |
| identity=0 and skip=1, then reverse | 2/5 correct; the same question IDs remain correct |
| Change an answer after scoring | Old result is replaced with a recompute instruction |

Do not derive the expected result by copying the implementation into your test. Use the user rule, a hand calculation, a source-order trace or a deliberately simple fixture. Otherwise two copies of the same mistake can agree while the product is wrong.

## Contrast three kinds of statement

**Requirement:** what the user should be able to rely on. **Implementation:** how the current files attempt to provide it. **Evidence:** the input and observation that support a conclusion about that attempt. In your journal, write one example of each for this project. A source comment is useful explanation, but by itself it is not runtime evidence.

## Retrieval practice

1. Explain `scoreQuiz` to a learner who knows the preceding project but has not opened this one.
2. Reproduce the trace with one changed input or piece of content. Predict which intermediate fact changes first.
3. Name a result that would look plausible but violate the contract.
4. Identify the smallest counterexample that distinguishes correct from incorrect behavior.
5. State one limitation of the reference without treating that limitation as a hidden completed feature.

Write your answers before opening the hints. Then compare explanations, not just vocabulary. If your answer says “it works because JavaScript/CSS/Git handles it,” identify the particular rule that actually explains the result.

## Transfer beyond this example

Why should correctness follow a question ID rather than its current array index?

Connect your answer to a future application: a form, a list, a report or a reusable component. The useful transfer is the reasoning habit, not the fictional domain. For example, deciding equality at a boundary is useful in both dates and temperature ranges; distinguishing identity from a label applies to more than score sheets.

## Reference reading

Use [Official platform reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwn) to confirm terminology and language/platform behavior. The workshop's product rules and fixtures are original teaching choices, not quotations from that reference. Return to the actual source after reading the documentation and explain which line or rule the terminology helps you understand.
