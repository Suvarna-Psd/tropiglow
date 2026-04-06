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
    // Fill the progress bar to 100%
    document.getElementById('progress-bar').style.width = "100%";
    
    document.getElementById('quiz-ui').style.display = "none";
    document.getElementById('results-ui').style.display = "block";
}

loadQuestion();

function validateForm() {

    let isValid = true;

    document.getElementById("nameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("passwordError").innerText = "";
    document.getElementById("confirmError").innerText = "";

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let confirmPassword = document.getElementById("confirmPassword").value.trim();

    if (name === "") {
        document.getElementById("nameError").innerText = "Full name is required";
        isValid = false;
    }

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {
        document.getElementById("emailError").innerText = "Email is required";
        isValid = false;
    } else if (!emailPattern.test(email)) {
        document.getElementById("emailError").innerText = "Enter a valid email";
        isValid = false;
    }

    if (password.length < 6) {
        document.getElementById("passwordError").innerText = "Password must be at least 6 characters";
        isValid = false;
    }

    if (confirmPassword !== password) {
        document.getElementById("confirmError").innerText = "Passwords do not match";
        isValid = false;
    }

    if (isValid) {
        alert("Welcome to TropiGlow! ✨");
    }

    return false;
}
