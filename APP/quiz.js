import { ui } from "script.js";
import { Question } from "APP/Quest.js";

export class Quiz {
  questionIndex = 0;

  /**
   *
   * @param {Question[]} Q
   */
  constructor(questions) {
    this.questions = questions;
  }

  /**
   *
   * @returns {Question} Q
   */
  getQuestionIndex() {
    return this.questions[this.questionIndex];
  }

  isEnded() {
    return this.questions.length == this.questionIndex;
  }

  /**
   *
   * @param {string} CHOICES
   */
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
