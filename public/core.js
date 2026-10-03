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
