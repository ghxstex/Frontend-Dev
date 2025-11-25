const form = document.getElementById("studentForm");
const nameField = document.getElementById("name");
const emailField = document.getElementById("email");
const phoneField = document.getElementById("phone");
const passField = document.getElementById("password");
const nameErr = document.getElementById("nameErr");
const emailErr = document.getElementById("emailErr");
const phoneErr = document.getElementById("phoneErr");
const passErr = document.getElementById("passErr");
const msg = document.getElementById("msg");

form.addEventListener("submit", e => {
    e.preventDefault();
    msg.textContent = "";
    let ok = true;

    if (!/^[A-Za-z ]+$/.test(nameField.value)) {
        nameErr.textContent = "Invalid name";
        nameField.style.border = "2px solid red";
        ok = false;
    } else {
        nameErr.textContent = "";
        nameField.style.border = "2px solid green";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailField.value)) {
        emailErr.textContent = "Invalid email";
        emailField.style.border = "2px solid red";
        ok = false;
    } else {
        emailErr.textContent = "";
        emailField.style.border = "2px solid green";
    }

    if (!/^\d{10}$/.test(phoneField.value)) {
        phoneErr.textContent = "Invalid phone";
        phoneField.style.border = "2px solid red";
        ok = false;
    } else {
        phoneErr.textContent = "";
        phoneField.style.border = "2px solid green";
    }

    if (!/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{6,}$/.test(passField.value)) {
        passErr.textContent = "Weak password";
        passField.style.border = "2px solid red";
        ok = false;
    } else {
        passErr.textContent = "";
        passField.style.border = "2px solid green";
    }

    if (ok) msg.textContent = "Form submitted successfully";
});
