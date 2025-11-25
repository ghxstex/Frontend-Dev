const steps = [
    document.getElementById("step1"),
    document.getElementById("step2"),
    document.getElementById("step3")
];

const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const passwordInput = document.getElementById("passwordInput");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

const summaryBox = document.getElementById("summaryBox");
let currentStepIndex = 0;

function showStep(index) {
    steps.forEach(function (stepDiv, i) {
        stepDiv.classList.toggle("active", i === index);
    });
    currentStepIndex = index;
}

document.getElementById("next1").addEventListener("click", function () {
    if (!nameInput.value.trim()) {
        nameError.textContent = "Name is required";
    } else {
        nameError.textContent = "";
        showStep(1);
    }
});

document.getElementById("back2").addEventListener("click", function () {
    showStep(0);
});

document.getElementById("next2").addEventListener("click", function () {
    const value = emailInput.value.trim();
    if (!value || !value.includes("@")) {
        emailError.textContent = "Enter a valid email";
    } else {
        emailError.textContent = "";
        showStep(2);
    }
});

document.getElementById("back3").addEventListener("click", function () {
    showStep(1);
});

document.getElementById("finishBtn").addEventListener("click", function () {
    const pwd = passwordInput.value;

    if (pwd.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters";
        return;
    } else {
        passwordError.textContent = "";
    }

   
    summaryBox.style.display = "block";
    summaryBox.innerHTML =
        "<h3>Summary</h3>" +
        "<p>Name: " + nameInput.value + "</p>" +
        "<p>Email: " + emailInput.value + "</p>" +
        "<p>Password length: " + passwordInput.value.length + "</p>";

    
    steps.forEach(function (stepDiv) {
        stepDiv.style.display = "none";
    });
});
