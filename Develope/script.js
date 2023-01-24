const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('question-container')
const welcomeMsg = document.getElementById('welcome')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionedIndex
 
 startButton.addEventListener('click', startGame)

function startGame() {
console.log('Started')
startButton.classList.add('hide')
shuffledQuestions = questions.sort(() => Math.random() - .5)
currentQuestionedIndex = 0
questionContainerElement.classList.remove('hide')
welcomeMsg.classList.add('hide')
setNextQuestion()
}

function setNextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionedIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
}

function selectAnswer() {

}

const questions = [
    {
        question: 'What is a function?',
        answers: [
            { text: 'a block of code designed to perform a particular task', correct: true },
            { text: 'containers for storing data', correct: false },
        ]
    }
]