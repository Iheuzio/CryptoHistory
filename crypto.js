const questions = [
    ["What is the first invented crypto currency?", "Bitcoin"],
    ["Where is Bitcoin originated from?", "Japan"],
    ["Who invented Bitcoin?", "Satoshi Nakamoto"],
    ["Shiba Inu belongs to which blockchain?", "Ethereum"],
    ["Are all the cryptocurrencies decentrelized?", "No"]
];
let questionNumber = 1;
let score = 0;

function clickButton() {
    scoreChecker();
    questions.shift();
    questionNumber++;
    questionCounter();
}

function questionCounter() {
    if (questions.length != 0) {
        document.getElementById("question").innerHTML = questions[0][0];
        document.getElementById("question-number").innerHTML =
            "Question " + questionNumber;
    } else {
        document.getElementById("question-number").innerHTML = "You're Done";
        document.getElementById("question").innerHTML = "Your score is: " + score;

        document.getElementById("text-field").remove();
        document.getElementById("button").remove();
    }
}

function scoreChecker() {
    if (document.getElementById("text-field").value === questions[0][1]) {
        score++;
    }
    document.getElementById("text-field").value = "";
}

function showTheAnswers() {
    document.getElementById("hidden").style.display = "block";
}

function darkMode() {
    document.body.classList.toggle("dark");
}

document.getElementById("theme-changer").onclick = darkMode;

let answers = document.querySelector("answers-visible");
answers.addEventListener("click", showTheAnswers);

let button = document.querySelector("button");
button.addEventListener("click", clickButton);