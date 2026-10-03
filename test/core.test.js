import test from 'node:test';
import assert from 'node:assert/strict';

import { questions, scoreQuiz } from '../public/core.js';
test('all skipped is explicit and scores zero', () => {
  const result = scoreQuiz(questions, {}); assert.equal(result.correct, 0); assert.equal(result.skipped, 5);
});
test('stable IDs preserve scoring and explanations after reordering', () => {
  const answers = { identity: 0, skip: 1, test: 0 };
  const before = scoreQuiz(questions, answers); const after = scoreQuiz([...questions].reverse(), answers);
  assert.equal(before.correct, 2); assert.equal(after.correct, 2);
  assert.deepEqual(before.rows.find(x => x.id === 'skip'), after.rows.find(x => x.id === 'skip'));
});
test('complete correct answers score five without changing input', () => {
  const answers = Object.freeze({ identity: 0, derive: 0, skip: 1, pure: 0, test: 1 });
  assert.equal(scoreQuiz(questions, answers).correct, 5);
});
test('invalid choices cannot quietly count as ordinary wrong answers', () => {
  assert.throws(() => scoreQuiz(questions, { identity: 99 })); assert.throws(() => scoreQuiz(questions, { identity: '0' }));
});
