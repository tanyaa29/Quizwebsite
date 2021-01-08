const quizData = [
    {
        question: "How old is Tanya in 2020?",
        a: "20",
        b: "10",
        c: "25",
        d: "18",
        correct: "a",
    },
    {
        question: "What is Tanya favourite food?",
        a: "Pizza",
        b: "Maggi",
        c: "Cake",
        d: "All of the Above",
        correct: "d",
    },
    {
        question: "What is tanya favourite?",
        a: "Web development",
        b: "Block Chain",
        c: "Machine Learning",
        d: "ds algo",
        correct: "a",
    },
    {
        question: "Where does Tanya Hometown",
        a: "Bhubneswar",
        b: "Rairangpur",
        c: "Delhi",
        d: "Greater Noida",
        correct: "b",
    },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer == quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
           alert("all done");        
        }
    }
});