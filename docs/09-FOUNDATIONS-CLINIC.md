# M022: foundations clinic

[Expanded workshop map](WORKBOOK-INDEX.md) · [Repository overview](../README.md)

Question identity is stable even when display position changes. Answers keyed by ID can follow a permutation without being reassigned to a different question. Scoring is derived information; the same result rows should explain the score and the skips. Numeric choice zero is meaningful, so absence needs an explicit representation rather than a truthiness shortcut.

## Start from one visible behavior

Read this contract slowly: Five fixed questions have stable IDs, choices and explanations. Answers are stored by question ID; score and per-question statuses are derived from current answers. Unanswered questions count as skipped, separately from chosen incorrect answers. Reversing display order preserves the meaning of every answer. Editing an answer clears the old result until resubmission; unknown question IDs in an answer object do not create extra score rows.

Underline the promised result, circle the input boundary and mark the stated limitation. A junior developer often starts by naming a framework or file. Start instead with an observation that a user could confirm or reject. File names become useful after you know which responsibility you are looking for.

## Clinic 1: Stable ID

A question identity independent of its current position.

**Small experiment:** Reverse the list after answering one question.

Find the part of `scoreQuiz` or its surrounding adapter that makes this idea observable. Read no more than one small responsibility at a time. Write the value or structure before the operation, the operation itself and the value or structure afterward. If this is a layout observation, use the containing box, matching rule and resulting arrangement instead of inventing a JavaScript variable.

### Predict before inspecting

Write one ordinary example and one example that makes the distinction matter. Give an expected result for each. The second example should separate two plausible implementations; simply changing a name or color may leave both candidates behaving identically. Explain why your chosen variation is informative.

### Build a tiny explanation

Explain **stable id** in three sentences: what problem it names, where you can see it in this repository, and what would go wrong if you ignored it. Avoid replacing the explanation with a slogan such as “best practice.” A concrete input, property or event should appear in at least one sentence.

### Repeat with less support

Close this paragraph, revisit the source and reconstruct the explanation without copying. Then deliberately change one assumption and predict which part of the explanation must change. Record the first point where you become uncertain. That point is a better question for a mentor than asking for another complete tour of the entire project.

**Checkpoint question:** How would you teach this distinction using only the experiment “Reverse the list after answering one question.”? Leave your answer in the session journal before reading the mentor hints.

## Clinic 2: Derived score

A total recalculated from current answers and questions.

**Small experiment:** Change a correct answer to an incorrect one and predict the result.

Find the part of `scoreQuiz` or its surrounding adapter that makes this idea observable. Read no more than one small responsibility at a time. Write the value or structure before the operation, the operation itself and the value or structure afterward. If this is a layout observation, use the containing box, matching rule and resulting arrangement instead of inventing a JavaScript variable.

### Predict before inspecting

Write one ordinary example and one example that makes the distinction matter. Give an expected result for each. The second example should separate two plausible implementations; simply changing a name or color may leave both candidates behaving identically. Explain why your chosen variation is informative.

### Build a tiny explanation

Explain **derived score** in three sentences: what problem it names, where you can see it in this repository, and what would go wrong if you ignored it. Avoid replacing the explanation with a slogan such as “best practice.” A concrete input, property or event should appear in at least one sentence.

### Repeat with less support

Close this paragraph, revisit the source and reconstruct the explanation without copying. Then deliberately change one assumption and predict which part of the explanation must change. Record the first point where you become uncertain. That point is a better question for a mentor than asking for another complete tour of the entire project.

**Checkpoint question:** How would you teach this distinction using only the experiment “Change a correct answer to an incorrect one and predict the result.”? Leave your answer in the session journal before reading the mentor hints.

## Clinic 3: Skip

A question for which no choice was supplied.

**Small experiment:** Distinguish undefined from valid choice index zero.

Find the part of `scoreQuiz` or its surrounding adapter that makes this idea observable. Read no more than one small responsibility at a time. Write the value or structure before the operation, the operation itself and the value or structure afterward. If this is a layout observation, use the containing box, matching rule and resulting arrangement instead of inventing a JavaScript variable.

### Predict before inspecting

Write one ordinary example and one example that makes the distinction matter. Give an expected result for each. The second example should separate two plausible implementations; simply changing a name or color may leave both candidates behaving identically. Explain why your chosen variation is informative.

### Build a tiny explanation

Explain **skip** in three sentences: what problem it names, where you can see it in this repository, and what would go wrong if you ignored it. Avoid replacing the explanation with a slogan such as “best practice.” A concrete input, property or event should appear in at least one sentence.

### Repeat with less support

Close this paragraph, revisit the source and reconstruct the explanation without copying. Then deliberately change one assumption and predict which part of the explanation must change. Record the first point where you become uncertain. That point is a better question for a mentor than asking for another complete tour of the entire project.

**Checkpoint question:** How would you teach this distinction using only the experiment “Distinguish undefined from valid choice index zero.”? Leave your answer in the session journal before reading the mentor hints.

## Clinic 4: Permutation invariant

Meaning that survives reordering.

**Small experiment:** Compare per-ID status rather than row position after reversal.

Find the part of `scoreQuiz` or its surrounding adapter that makes this idea observable. Read no more than one small responsibility at a time. Write the value or structure before the operation, the operation itself and the value or structure afterward. If this is a layout observation, use the containing box, matching rule and resulting arrangement instead of inventing a JavaScript variable.

### Predict before inspecting

Write one ordinary example and one example that makes the distinction matter. Give an expected result for each. The second example should separate two plausible implementations; simply changing a name or color may leave both candidates behaving identically. Explain why your chosen variation is informative.

### Build a tiny explanation

Explain **permutation invariant** in three sentences: what problem it names, where you can see it in this repository, and what would go wrong if you ignored it. Avoid replacing the explanation with a slogan such as “best practice.” A concrete input, property or event should appear in at least one sentence.

### Repeat with less support

Close this paragraph, revisit the source and reconstruct the explanation without copying. Then deliberately change one assumption and predict which part of the explanation must change. Record the first point where you become uncertain. That point is a better question for a mentor than asking for another complete tour of the entire project.

**Checkpoint question:** How would you teach this distinction using only the experiment “Compare per-ID status rather than row position after reversal.”? Leave your answer in the session journal before reading the mentor hints.

## Read a real source window

The following is an excerpt from [public/core.js](../public/core.js), beginning at source line 1. It is a reading window, not a standalone runnable exercise. Open the linked file for surrounding declarations and context.

```js
export const questions = [
  { id: 'identity', text: 'Which value should identify a question?', options: ['Stable ID', 'Current row index'], correct: 0, why: 'A stable ID survives reordering.' },
  { id: 'derive', text: 'Where should the score come from?', options: ['The answers', 'A second manually maintained total'], correct: 0, why: 'Deriving the score avoids a second copy drifting out of sync.' },
  { id: 'skip', text: 'How should an unanswered question be represented?', options: ['As a correct answer', 'As a distinct skip'], correct: 1, why: 'No answer is different from a chosen wrong answer.' },
  { id: 'pure', text: 'What should a scoring function read?', options: ['Inputs passed to it', 'Hidden DOM elements'], correct: 0, why: 'Explicit inputs make the scoring contract independently testable.' },
  { id: 'test', text: 'Which fixture exposes index-based identity?', options: ['Same order again', 'Reordered questions'], correct: 1, why: 'A permutation makes position and identity disagree.' },
];
export function scoreQuiz(source, answers) {
  const rows = source.map(question => {
    const choice = Object.hasOwn(answers, question.id) ? answers[question.id] : undefined;
    if (choice !== undefined && (!Number.isInteger(choice) || choice < 0 || choice >= question.options.length)) throw new TypeError('Invalid answer choice.');
    return { id: question.id, status: choice === undefined ? 'skipped' : choice === question.correct ? 'correct' : 'incorrect', explanation: question.why };
  });
  return { correct: rows.filter(x => x.status === 'correct').length, skipped: rows.filter(x => x.status === 'skipped').length, total: rows.length, rows };
}
```

For each meaningful line, label its job as input interpretation, validation, state ownership, transformation, output or presentation. Some files contain only a subset of those jobs. Do not force the categories onto code that does not perform them. A closing brace is structure, not a separate business rule.

Choose one expression and restate it as a question the program answers. Then choose one expression that merely carries out a consequence of that answer. This separates a product decision from mechanical plumbing. If you cannot explain an operator, isolate a tiny example rather than rewriting the whole function.

## A three-column scratch sheet

| Before | Rule or operation | After |
|---|---|---|
| Write an actual supported input or layout situation | Name the owning function, property or event | Predict the concrete result |
| Change one assumption | State which rule now matters | Predict what changes and what remains stable |
| Use an invalid, missing or unsupported case | Identify the boundary that rejects or handles it | Predict feedback and retained state |

Do not fill the After column by running the reference first. That turns prediction practice into transcription. After predicting, observe the program and put discrepancies in a fourth note below the table. A wrong prediction is useful when you can name the mistaken assumption.

## What understanding looks like

You can locate `scoreQuiz`, explain why the adapter has a separate job, and produce a new counterexample without borrowing one from the tests. You can also say what the reference deliberately does not support. If one of those is missing, choose the smallest clinic above that addresses it and repeat that clinic with different data.
