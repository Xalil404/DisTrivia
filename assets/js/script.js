// Quiz questions & answers
const questions = [
    {
        question: "How many 'Academy Awards for Best Original Song' has Disney won?",
        choices: ["14", "18", "22", "30"],
        correctAnswer: "14"
    },  
    {
        question: "Which Disney movie has had the most sequels?",
        choices: ["Toy Story", "Lion King", "Mulan", "Cinderella"],
        correctAnswer: "Toy Story"
    },  
    {
        question: "I will Make a Man Out of You is a song from which movie?",
        choices: ["Mulan", "Toy Story", "Lion King", "Snow White"],
        correctAnswer: "Mulan"
    },  
    {
        question: "What character have both Glen Close and Emma Stone played?",
        choices: ["Mufasa", "Ariel", "Mulan", "Cruella de Vil"],
        correctAnswer: "Cruella de Vil"
    },  
    {
        question: "Who was the first Disney princess?",
        choices: ["Sleeping Beauty", "Ariel", "Snow White", "Cinderella"],
        correctAnswer: "Snow White"
    },  
    {
        question: "What color are Mickey Mouse's shoes?",
        choices: ["Red", "Yellow", "Black", "Pink"],
        correctAnswer: "Yellow"
    },
    {
        question: "Scuttle stars in which movie?",
        choices: ["The Little Mermaid", "Lion King", "Snow White", "Aladdin"],
        correctAnswer: "The Little Mermaid"
    },
    {
        question: "What year was Cinderella released?",
        choices: ["1920", "1940", "1950", "1970"],
        correctAnswer: "1950"
    },
    {
        question: "Mickey Mouse was originally named what?",
        choices: ["Gortimer Mouse", "Mortimer Mouse", "Dorfy Mouse", "Mortimy Mouse"],
        correctAnswer: "Mortimer Mouse"
    },
    {
        question: "Where is Disney's European theme park located?",
        choices: ["London", "Berlin", "Paris", "Madrid"],
        correctAnswer: "Paris"
    }
];

// Track Quiz progress
let currentQuestion = 0;
let score = 0;

// HTML DOM References 
const quizContainer = document.getElementById("quiz-container");
const resultContainer = document.getElementById("result-container");
const scoreElement = document.getElementById("score");
const retryButton = document.getElementById("retry-button");

// Function to Load Question 
function loadQuestion() {
    const question = questions[currentQuestion];
    const questionElement = document.createElement("p");
    questionElement.textContent = question.question;
    quizContainer.appendChild(questionElement);

    question.choices.forEach((choice) => {
        const choiceButton = document.createElement("button");
        choiceButton.textContent = choice;
        choiceButton.addEventListener("click", () => checkAnswer(choice));
        quizContainer.appendChild(choiceButton);
    });
}

// Start the quiz
loadQuestion();

// Check Answer Function
function checkAnswer(choice) {
    const correctAnswer = questions[currentQuestion].correctAnswer;
    if (choice === correctAnswer) {
        score++;
    }
    currentQuestion++;

    if (currentQuestion < questions.length) {
        // Load the next question
        quizContainer.innerHTML = "";
        loadQuestion();
    } else {
        // Display results and retry button
        quizContainer.style.display = "none";
        resultContainer.style.display = "block";
        scoreElement.textContent = `You got ${score} out of ${questions.length} questions correct.`;
        retryButton.style.display = "block";
    }
}