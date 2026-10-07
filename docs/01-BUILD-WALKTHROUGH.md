# Building Quiz Result Explainer, one decision at a time

[Learning route](00-START-HERE.md) · [Code tour](03-CODE-TOUR.md)

This is a reconstruction of how to approach the finished reference. It explains visible design choices; it is not a transcript of hidden reasoning or a claim that a fictional team performed these steps.

## Start from the contract

Five fixed questions have stable IDs, choices and explanations. Answers are stored by question ID; score and per-question statuses are derived from current answers. Unanswered questions count as skipped, separately from chosen incorrect answers. Reversing display order preserves the meaning of every answer. Editing an answer clears the old result until resubmission; unknown question IDs in an answer object do not create extra score rows.

The smallest useful result answers this user need: A learner needs to see why each answer was marked correct without rewriting the question bank. Write the examples before choosing file names. Keep the scope small enough that the decisive behavior fits in one trace.

## Step 1: Read the question schema

For each fixture, identify id, text, options, correct and why. The correct field is an option index within a particular question; it is not the question's position in the quiz. Stable IDs solve question identity while the small fixed options list defines its answer vocabulary.

**Pause and produce evidence:** No answers. Predict the outcome, then compare it with the reference. In your notes, distinguish what the code says should happen from what you actually observed.

## Step 2: Trace one stored answer

Check the first option for identity and follow its onchange handler. The value stored is numeric zero under identity. Explain why rendering a reversed list can still check the right radio: the renderer consults the same ID rather than replaying positional clicks.

**Pause and produce evidence:** Change an answer after scoring. Predict the outcome, then compare it with the reference. In your notes, distinguish what the code says should happen from what you actually observed.

## Step 3: Score partial work

Submit two answers and leave three untouched. scoreQuiz creates five rows, including skips. Count correct and skipped from those rows and verify the displayed denominator remains five. A skipped question is not automatically a failure of the app or an invitation to invent an answer.

**Pause and produce evidence:** identity=0 and skip=1, then reverse. Predict the outcome, then compare it with the reference. In your notes, distinguish what the code says should happen from what you actually observed.

## Step 4: Test a permutation

Reverse the questions and compare results by ID. The row order changes because display order changed, but a particular question's status and explanation stay attached to it. This is a focused example of a metamorphic check: change a representation detail that should not change the underlying meaning.

**Pause and produce evidence:** identity=0 and skip=1, then reverse. Predict the outcome, then compare it with the reference. In your notes, distinguish what the code says should happen from what you actually observed.

## Keep the implementation reviewable

A useful commit has one understandable reason to exist. Separate the initial working slice, the checks that expose its important boundaries, and the teaching material that explains it. The published commits in this repository were assembled from verified working files; they are real commits, not fabricated evidence of a long historical development process. 

For your own variation, commit at a point where the behavior and evidence agree. Describe the trigger, the resulting behavior and the check in the commit message or review note. Avoid mixing a rule change with unrelated formatting because it makes the learning decision harder to see.

## Stop before adding a platform

The next useful improvement is a sharper example or clearer explanation, not a database, account system or framework migration. Add an abstraction only when it names a real repeated responsibility. You should be able to describe what becomes easier to change after the abstraction and what new complexity it introduces.

**Independent design choice from the original brief:** Choose whether skipped differs from incorrect.

The reference made one choice, documented in the code tour. You may choose differently in a branch if you first revise the contract and acceptance examples. A deliberate alternative is a stronger learning artifact than an unexplained copy.
