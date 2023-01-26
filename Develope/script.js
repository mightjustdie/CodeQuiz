const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('question-container')
const welcomeMsg = document.getElementById('welcome')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
let count = "";
let counter = setInterval(timer,1000);
let correctAnswers = 0;
let wrongAnswers = 0;
let playerScore

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
    count = count - 1;0
    if (count <=0) {
        clearInterval(counter);
        return;
    }
    document.getElementById("timer").innerHTML=count + " secs";
}

function setNextQuestion() {
    resetState()
    clearStatusClass()
    showQuestion(shuffledQuestions[currentQuestionedIndex])
    checkGameOver()
    currentQuestionedIndex++
}

function checkGameOver() {

    // endGame()
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
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    if (correct) {
        correctAnswers++;
        setStatusClass(selectedButton, correct)
        setNextQuestion()
    } else {
        wrongAnswers++;
        alert('Wrong answer. You lost 10 seconds!')
        setTimeout(() => {
            count -= 10;
            document.getElementById("timer").innerHTML=count + " secs";
        },);
    }
    Array.from(answerButtonsElement.children).forEach(button => {
        if (button.dataset.correct) {
            setStatusClass(button, button.dataset.correct)
        }
    });
    if(!correct){
    return;
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
    if(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
    }
}

function endGame() {
    document.getElementById('timer').classList.add('hide')
    const playerInitials = prompt('Enter your initials:')
    if(playerInitials !== null) {
    localStorage.setItem('initials',playerInitials)
    localStorage.setItem('score', playerScore)
    } else {
        alert("You have to enter something to procede.")
        endGame()
    }
}

const questions = [
    {
        question: 'What is a function?',
        answers: [
            { text: 'a block of code designed to perform a particular task', correct: true },
            { text: 'a container for storing data', correct: false },
            { text: 'it makes ice cream', correct: false },
            { text: 'a true or false statement', correct: false },
        ]
    },
    {
    question: 'What is boolean?',
        answers: [
            { text: 'containers for storing data', correct: false },
            { text: 'a term for a cockroach', correct: false },
            { text: 'a true or false statement', correct: true },
            { text: 'another term for variable', correct: false },
        ]
    },
    {    
    question: 'What is a variable?',
        answers: [
            { text: 'a container for storing data', correct: true },
            { text: 'it prints text to the console', correct: false },
            { text: 'a true or false statement', correct: false },
            { text: 'a block of code designed to perform a particular task', correct: false },
        ]
    },   
    {
        question: 'What can you use to call a variable?',
        answers: [
            { text: '"apple", "bird", or "tooth"', correct: false },
            { text: '"else" or "if"', correct: false },
            { text: '"div"', correct: false },
            { text: '"const", "var", or "let"', correct: true },
        ]
    },
    {   
        question: 'What is an if statement?',
        answers: [
            { text: '', correct: false },
            { text: 'executes a block of code if a specified condition is true.', correct: true },
            { text: '', correct: false },
            { text: '', correct: false },
        ]
    },   
    {
        question: 'What is a for loop?',
        answers: [
            { text: '', correct: false },
            { text: '', correct: false },
            { text: '', correct: false },
            { text: 'an iterative statement which you use to check for certain conditions and then repeatedly execute a block of code as long as those conditions are met.', correct: true },
        ]
        },   
        {
        question: 'What does "Math.random()" do?',
        answers: [
            { text: 'Returns a random number between 0 and 1.', correct: true },
            { text: '', correct: false },
            { text: 'does random math obviously.', correct: false },
            { text: '', correct: false },
        ]
        },   
        {
        question: 'What is an object?',
        answers: [
            { text: '', correct: false },
            { text: 'a standalone entity, with properties and type.', correct: true },
            { text: '', correct: false },
            { text: '', correct: false },
        ]
        },
        {
        question: 'Which is an example of a string?',
        answers: [
            { text: '0', correct: false },
            { text: '"true"', correct: true },
            { text: 'true', correct: false },
            { text: '[0,1,2,3,4]', correct: false },
        ]
    },
        {
        question: 'What does this line of code do?   let example = true',
        answers: [
            { text: 'Creates a function named "example" that has a true value', correct: false },
            { text: 'Creates a letter named "example" that has a true value', correct: false },
            { text: 'Creates a for loop named "example" that has a true value', correct: false },
            { text: 'Creates a variable named "example" that has a true value', correct: true },
        ]
    }

]