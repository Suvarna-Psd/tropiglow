// 1. Define your questions and options in an "Array of Objects"
// This makes it easy to add or change questions later!
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

// 2. This function handles updating the HTML content
function loadQuestion() {
    const qText = document.getElementById('question-text');
    const qOptions = document.getElementById('options-list');
    const progressBar = document.getElementById('progress-bar');

    // Update the progress bar width based on how many questions are left
    const progressPercent = ((currentStep) / questions.length) * 100;
    progressBar.style.width = progressPercent + "%";

    // Update the question text
    qText.innerText = questions[currentStep].question;
    
    // Clear the previous buttons and create new ones
    qOptions.innerHTML = "";
    
    questions[currentStep].options.forEach(option => {
        // Create a new button element
        const btn = document.createElement('button');
        btn.classList.add('option-btn');
        btn.innerText = option;
        
        // When clicked, move to the next step
        btn.onclick = () => {
            currentStep++;
            // Check if there are more questions or if we should show results
            if (currentStep < questions.length) {
                loadQuestion();
            } else {
                showResults();
            }
        };
        
        // Add the button to the screen
        qOptions.appendChild(btn);
    });
}

// 3. This function hides the quiz and reveals the results
function showResults() {
    // Fill the progress bar to 100%
    document.getElementById('progress-bar').style.width = "100%";
    
    // Hide the quiz container and show the results container
    document.getElementById('quiz-ui').style.display = "none";
    document.getElementById('results-ui').style.display = "block";
}

// 4. Run the function once to start the quiz when the page first loads
loadQuestion();
