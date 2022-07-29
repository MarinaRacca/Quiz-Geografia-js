import { startQuiz } from "script.js";
import { fisherYatesShuffle } from "QA/A.js";

export class UI {
  constructor() {}

  /**
   *
   * @param {string} Q text
   */
  showQuestion(text) {
    const questionTitle = document.getElementById("question");
    questionTitle.innerText = text;
  }

  /**
   *
   * @param {string[]} 
   */
  showChoices(choices, callback) {
    const choicesContainer = document.getElementById("choices");
    choicesContainer.innerHTML = "";

     fisherYatesShuffle(choices);  

    for (let i = 0; i < choices.length; i++) {
      const button = document.createElement("button");
      button.innerText = choices[i];
      button.className = "button";
      button.id = "btn" + i;
      button.addEventListener("click", () => callback(choices[i])); 

      choicesContainer.append(button);
    }
  }

  {

    const volverButton = document.createElement("button");
    volverButton.className = "button";
    volverButton.innerHTML = "Inicio";
    volverButton.type = "submit";
    volverButton.id = "btnVolver";
    volverButton.onclick = function () {
      location.reload();
    };


    const element = document.getElementById("quiz");
    element.innerHTML = "";
    element.append(input);
    element.append(addButton);
    element.append(volverButton);
  }

  /**
   *
   * @param {number} currentIndex
   * @param {number} total Q
   */
  showProgress(currentIndex, total) {
    const element = document.getElementById("progress");
    element.innerHTML = `${currentIndex} de ${total}`;
  }

  showHome() {

    const jugarButton = document.createElement("button");
    jugarButton.id = "jugarButton";
    jugarButton.className = "button";
    jugarButton.textContent = "Jugar";
    jugarButton.type = "submit";
    jugarButton.onclick = startQuiz;
    };

    const barra = document.createElement("hr");
    barra.id = "barra";
    barra.style.display = "none";

    const element = document.getElementById("quiz");
    element.append(barra);
    element.append(jugarButton);
  }

  showQuiz() {
    const element = document.getElementById("quiz");

    element.innerHTML = "";

    const quest = document.createElement("h1");
    quest.id = "question";
    element.append(quest);

    const prog = document.createElement("p");
    prog.id = "progress";
    element.append(prog);

    const choi = document.createElement("div");
    choi.id = "choices";
    element.append(choi);
  }
}
