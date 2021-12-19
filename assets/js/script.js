var timeLeft = 75;
var timerID;
var timerEl = document.getElementById("timer");
var startButton = document.getElementById("btn-start");
var nextButton = document.getElementById("btn-next");
var questionContainerEl = document.getElementById("question-container");
var startContainerEl = document.getElementById("start-container");
var questionEl = document.getElementById("question");
var answerButtonsEl = document.getElementById("answer-buttons");
var checkAnswerEl = document.getElementById("check-answer");
var viewHighScores = document.getElementById("high-scores");
var submitButton =  document.getElementById("btn-submit");
var clearScoreButton = document.getElementById("btn-clear");
var initialsField = document.getElementById("player-name");
var restartButton = document.getElementById("btn-restart");
var scoreField = document.getElementById("player-score");
var scores = JSON.parse(localStorage.getItem("scores")) || [];

var QuestionsSuffled, currentQuestionsIndex;

startButton.addEventListener("click", startQuiz);
nextButton.addEventListener("click", () => {
    currentQuestionsIndex++
    setNextQuestion()
});

function clockTimer() {
    timeLeft--;
    timerEl.textContent = "Time: " + timeLeft;
    if (timeLeft <= 0) {
        saveScore();  
      }
}

function startQuiz() {
    timerID = setInterval(clockTimer, 1000);
    startContainerEl.classList.add("hide");
    QuestionsSuffled = questions.sort(() => Math.random() - .5)
    currentQuestionsIndex = 0
    questionContainerEl.classList.remove("hide");

    clockTimer();
    setNextQuestion;
};