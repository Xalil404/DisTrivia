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