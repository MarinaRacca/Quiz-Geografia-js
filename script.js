import { questions } from "QA/Q.js";
import { Quiz } from "APP/Quiz.js";
import { UI } from "APP/user.js";

export const ui = new UI();

/**
 *
 * @param {Quiz} 
 * @param {UI} 
 */
export function renderPage(quiz, ui) {
  if (quiz.isEnded()) {
    ui.showScores(quiz.score);
  } else {
    ui.showQuestion(quiz.getQuestionIndex().text);
    ui.showChoices(quiz.getQuestionIndex().choices, (currentChoice)
    ui.showProgress(quiz.questionIndex + 1, quiz.questions.length); 
  }
}

export function startQuiz() {
  const quiz = new Quiz(questions); 
  ui.showQuiz();
  renderPage(quiz, ui);
}

function main() {
  getJugadores();
  ui.showHome();
}

main();
