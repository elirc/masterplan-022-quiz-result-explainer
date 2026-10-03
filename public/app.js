import { questions, scoreQuiz } from './core.js';
let order = [...questions];
const answers = {};
const output = document.querySelector('#result');
function renderQuestions() {
  const container = document.querySelector('#questions'); container.replaceChildren();
  for (const question of order) {
    const fieldset = document.createElement('fieldset');
    const legend = document.createElement('legend'); legend.textContent = question.text; fieldset.append(legend);
    question.options.forEach((option, index) => {
      const label = document.createElement('label'); const input = document.createElement('input');
      input.type = 'radio'; input.name = question.id; input.value = index; input.checked = answers[question.id] === index;
      input.onchange = () => { answers[question.id] = index; output.textContent = 'Answers changed. Explain results again.'; };
      label.append(input, document.createTextNode(option)); fieldset.append(label);
    });
    container.append(fieldset);
  }
}
document.querySelector('#reverse').onclick = () => { order.reverse(); renderQuestions(); };
document.querySelector('#quiz').onsubmit = event => {
  event.preventDefault(); const result = scoreQuiz(order, answers);
  output.textContent = `${result.correct}/${result.total} correct; ${result.skipped} skipped\n` + result.rows.map(row => `${row.id}: ${row.status}. ${row.explanation}`).join('\n');
};
renderQuestions();
