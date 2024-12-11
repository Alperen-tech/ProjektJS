const questions = [
    { question: "HTML står för HyperText Markup Language?", answer: true },
    { question: "CSS används för att skapa dynamiska funktioner på en webbsida?", answer: false },
    { question: "JavaScript kan användas för att manipulera HTML-element?", answer: true },
    { question: "En HTML-sida kan bara ha en <body>-tagg?", answer: true },
    { question: "CSS står för Creative Style Sheets?", answer: false },
    { question: " div är en HTML-tagg som används för att skapa en container?", answer: true },
    { question: "JavaScript är detsamma som Java?", answer: false },
    { question: "Man kan ändra färgen på en webbsida med JavaScript?", answer: true },
    { question: "HTML-element måste alltid stängas?", answer: false },
    { question: "CSS används för att lägga till innehåll i en webbsida?", answer: false }
];

// Hämta referenser till HTML-element
const quizContainer = document.getElementById('quiz');
const submitButton = document.getElementById('submit');
const resultContainer = document.getElementById('result');
const toggleModeButton = document.getElementById('toggle-mode');

// Visa frågorna i quizet
questions.forEach((q, index) => {
    const questionDiv = document.createElement('div');
    questionDiv.classList.add('question');
    questionDiv.innerHTML = `
        <p>${index + 1}. ${q.question}</p>
        <label>
            <input type="radio" name="question${index}" value="true"> Sant
        </label>
        <label>
            <input type="radio" name="question${index}" value="false"> Falskt
        </label>
    `;
    quizContainer.appendChild(questionDiv);
});

// Hantera quiz-resultat
submitButton.addEventListener('click', () => {
    let score = 0;

    questions.forEach((q, index) => {
        const userAnswer = document.querySelector(`input[name="question${index}"]:checked`);
        if (userAnswer && userAnswer.value === q.answer.toString()) {
            score++;
        }
    });

    const percentage = (score / questions.length) * 100;
    let resultMessage = '';

    if (percentage < 50) {
        resultMessage = 'Underkänt';
        resultContainer.className = 'result fail';
    } else if (percentage <= 75) {
        resultMessage = 'Bra';
        resultContainer.className = 'result pass';
    } else {
        resultMessage = 'Riktigt bra jobbat';
        resultContainer.className = 'result excellent';
    }

    resultContainer.textContent = `Du fick ${score} av ${questions.length} rätt. ${resultMessage}!`;
});

// Hantera mörkt/ljust läge
toggleModeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    toggleModeButton.textContent = document.body.classList.contains('dark-mode')
        ? 'Byt till ljust läge'
        : 'Byt till mörkt läge';
});