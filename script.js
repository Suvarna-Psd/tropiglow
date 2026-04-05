const questions = [
    {
        question: "How does your skin feel by midday?",
        options: ["Shiny or oily all over", "Tight and flaky", "Oily T-zone, dry cheeks", "Balanced and comfortable"]
    },
    {
        question: "What is your primary skin goal?",
        options: ["Clear up breakouts", "Deep hydration", "Brighten dull skin", "Gentle daily care"]
    },
    {
        question: "How often do you spend time in the sun?",
        options: ["Every day", "Frequently", "Occasionally", "Rarely"]
    }
];

let currentStep = 0;

function loadQuestion() {
    const qText = document.getElementById('question-text');
    const qOptions = document.getElementById('options-list');
    const progressBar = document.getElementById('progress-bar');

    const progressPercent = ((currentStep) / questions.length) * 100;
    progressBar.style.width = progressPercent + "%";

    qText.innerText = questions[currentStep].question;
    
    qOptions.innerHTML = "";
    
    questions[currentStep].options.forEach(option => {
        const btn = document.createElement('button');
        btn.classList.add('option-btn');
        btn.innerText = option;
        
        btn.onclick = () => {
            currentStep++;
            if (currentStep < questions.length) {
                loadQuestion();
            } else {
                showResults();
            }
        };
        qOptions.appendChild(btn);
    });
}
function showResults() {
    document.getElementById('progress-bar').style.width = "100%";
    
    document.getElementById('quiz-ui').style.display = "none";
    document.getElementById('results-ui').style.display = "block";
}

loadQuestion();
