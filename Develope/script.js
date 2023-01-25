const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('question-container')
const welcomeMsg = document.getElementById('welcome')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
var count = "";
var counter = setInterval(timer,1000);

let shuffledQuestions, currentQuestionedIndex
 
startButton.addEventListener('click', startGame)

function startGame() {

console.log('Started')
count = 60;
counter = setInterval(timer, 1000);
startButton.classList.add('hide')
shuffledQuestions = questions.sort(() => Math.random() - .5)
currentQuestionedIndex = 0
questionContainerElement.classList.remove('hide')
welcomeMsg.classList.add('hide')
setNextQuestion()
}

function timer() {
    count = count - 1;
    if (count <=0) {
        clearInterval(counter);
        return;
    }
    document.getElementById("timer").innerHTML=count + " secs";
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionedIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    });
    if(!correct) {
        setTimeout(() => {
            count -= 5;
            document.getElementById("timer").innerHTML=count + " secs";
        },);
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
        question: 'What is a function?',
        answers: [
            { text: 'a block of code designed to perform a particular task', correct: true },
            { text: 'containers for storing data', correct: false },
            { text: 'containers for storing data', correct: false },
            { text: 'containers for storing data', correct: false },
        ],
        question: '',
        answers: [
            { text: '', correct: true },
            { text: '', correct: false },
            { text: '', correct: false },
            { text: '', correct: false },
        ],
        question: '',
        answers: [
            { text: '', correct: true },
            { text: '', correct: false },
            { text: '', correct: false },
            { text: '', correct: false },
        ],
        question: '',
        answers: [
            { text: '', correct: true },
            { text: '', correct: false },
            { text: '', correct: false },
            { text: '', correct: false },
        ],
        question: '',
        answers: [
            { text: '', correct: true },
            { text: '', correct: false },
            { text: '', correct: false },
            { text: '', correct: false },
        ],
        question: '',
        answers: [
            { text: '', correct: true },
            { text: '', correct: false },
            { text: '', correct: false },
            { text: '', correct: false },
        ],
        question: '',
        answers: [
            { text: '', correct: true },
            { text: '', correct: false },
            { text: '', correct: false },
            { text: '', correct: false },
        ],
        question: '',
        answers: [
            { text: '', correct: true },
            { text: '', correct: false },
            { text: '', correct: false },
            { text: '', correct: false },
        ],
        question: '',
        answers: [
            { text: '', correct: true },
            { text: '', correct: false },
            { text: '', correct: false },
            { text: '', correct: false },
        ],
        question: '',
        answers: [
            { text: '', correct: true },
            { text: '', correct: false },
            { text: '', correct: false },
            { text: '', correct: false },
        ],
    
    }

]