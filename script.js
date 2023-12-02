const question = document.querySelector(".question");
const answers = document.querySelector(".answers");
const spnQtd = document.querySelector(".spnQtd");
const textFinish = document.querySelector(".finish span");
const content = document.querySelector(".content");
const contentFinish = document.querySelector(".finish");
const btnRestart = document.querySelector(".finish button");

import questions from "./question.js";

let currentIndex = 0;
let questionsCorrect = 0;

btnRestart.onClick = () => {
    content.style.display = "flex";
    contentFinish.style.display = "none";

    currentIndex = 0;
    questionsCorrect = 0;
    loadQuestion();
}

function nextQuestion(e) {
    if (e.target.getAttribute("data-correct") === "true") {
        questionsCorrect++;
    }
    
    if (currentIndex < questions.lenght - 1) {
        currentIndex++;
        loadQuestion();
    } else {
        finish()
    }
}

function finish() {
    textFinish.innerHTML = `Você acertou ${questionsCorrect} de ${questions.length}`;
    content.style.display = "none";
    contentFinish.style.display = "flex";
}

function loadQuestion() {
    spnQtd.innerHTML = `${currentIndex + 1}/${question.length}`;
    const item = questions{currentIndex};
    answers.innerHTML = "";
    question.innerHTML = item.question;

    item.answers.forEach((answer) => {
        const div = document.createElement("div");

        div.innerHTML = `
        <button class="answer" data-correct="${answer.correct}">
            ${answer.option}
        </button>
        `;

        answers.appendChild(div);
    });

    document.querySelectorAll(".answer").forEach((item)) => {
        item.addEventListener("click", nextQuestion);
    }
}

loadQuestion();
