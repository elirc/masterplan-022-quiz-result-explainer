# Debugging laboratory

[Concepts](02-CONCEPTS-AND-TRACES.md) · [Practice stories](05-PRACTICE-STORIES.md)

These are deliberately proposed defects for a scratch branch. They are not claims that the shipped reference still contains these bugs. Keep main working and introduce only one change at a time.

## Case 1: An answer moves to a different question after reverse

**Introduce or discuss this mistake:** Key answers by rendered array index.

**Discriminating experiment:** Answer identity, reverse the list, then submit.

### Worked diagnosis

First state the expected contract: Five fixed questions have stable IDs, choices and explanations. Answers are stored by question ID; score and per-question statuses are derived from current answers. Unanswered questions count as skipped, separately from chosen incorrect answers. Reversing display order preserves the meaning of every answer. Editing an answer clears the old result until resubmission; unknown question IDs in an answer object do not create extra score rows. Then create the smallest example from the experiment above. Compare the observed result with the contract before changing more code. The likely cause is at this boundary: **public/app.js and core.js: use question.id at storage and lookup.**. Repair that boundary, rerun the example, and check one neighboring valid case so the repair does not merely special-case the chosen input.

The completed reasoning record is: symptom → contract violated → input that distinguishes hypotheses → owning line or rule → minimal repair → regression evidence. This is a worked diagnostic route; fill in your actual outputs when you run it. No invented console transcript is supplied.

## Case 2: First choices are marked skipped

**Introduce or discuss this mistake:** Use a truthiness test for choice instead of undefined.

**Discriminating experiment:** Select option zero for identity.

### Your investigation

1. Write two possible explanations before looking at the hints.
2. Predict what the experiment would show if each explanation were true.
3. Run or inspect the smallest discriminating case and record the result.
4. Identify the owning file and make one bounded repair.
5. Verify the original case and a neighboring case; explain why both matter.

**Location hint, only after your attempt:** public/core.js: zero is a valid choice index.

## Case 3: The old score stays visible after an edit

**Introduce or discuss this mistake:** Remove result invalidation from onchange.

**Discriminating experiment:** Score, change an answer and inspect the old explanation.

### Your investigation

1. Write two possible explanations before looking at the hints.
2. Predict what the experiment would show if each explanation were true.
3. Run or inspect the smallest discriminating case and record the result.
4. Identify the owning file and make one bounded repair.
5. Verify the original case and a neighboring case; explain why both matter.

**Location hint, only after your attempt:** public/app.js: result validity depends on the current answer map.

## If the first repair does not work

Do not pile on another unrelated edit. Read the diff and check whether the observed failure changed. If the hypothesis was wrong, write that down and restore only your own experimental change before testing the next hypothesis. A rejected hypothesis is useful progress when its evidence is clear.

When asking an assistant for help, provide the exact input, expected and observed result, the current diff and the file you believe owns the rule. Ask for one counterexample or diagnostic question first. Keep proposed causes separate from demonstrated causes.
