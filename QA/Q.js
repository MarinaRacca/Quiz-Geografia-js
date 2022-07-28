import { Question } from "APP/Quest.js";
import { data, fisherYatesShuffle } from "QA/A.js";

const newQuestions = data.map(
  function (question) {
    return new Question(question.question, question.choices, question.answer)
  }
);

fisherYatesShuffle(newQuestions);

export const questions = newQuestions.slice(0, 8);