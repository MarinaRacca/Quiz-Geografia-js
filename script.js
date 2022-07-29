import { question } from "QA/Q.js";
import { Question } from "APP/Quest.js";

export class Quiz {
  questionIndex = 0;
  
  constructor(questions) {
    this.questions = questions;
  }

  getQuestionIndex() {
    return this.questions[this.questionIndex];
  }

  isEnded() {
    return this.questions.length == this.questionIndex;
  }

  guess(choice) {
    var pos = this.getQuestionIndex().choices.indexOf(choice);

    if (this.getQuestionIndex().correctAnswer(choice)) {    
      document.querySelectorAll("button")[pos].style.background = "green";

    } else {
      document.querySelectorAll("button")[pos].style.background = "red";

      for (let index = 0; index < this.getQuestionIndex().choices.length; index++) {
        if(this.getQuestionIndex().correctAnswer(this.getQuestionIndex().choices[index])){
        var posCorrectAnswer = index;
        }
      }

      document.querySelectorAll("button")[posCorrectAnswer].style.background = "green";
      
    }

    this.questionIndex++;
  }
}
export function renderPage(quiz, ui) {
  if (quiz.isEnded()) {
   //button play again
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
  ui.showHome();
}

main();
