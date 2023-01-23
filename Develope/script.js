const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('question-container')
const welcomeMsg = document.getElementById('welcome')

startButton.addEventListener('click', startGame)

function startGame() {
console.log('Started')
startButton.classList.add('hide')
questionContainerElement.classList.remove('hide')
welcomeMsg.classList.add('hide')
}

function setNextQuestion() {

}

function selectAnswer() {

}