const messageBox = document.getElementById("messageBox");
const counter = document.getElementById("counter");
const resetBtn = document.getElementById("resetBtn");
const maxChars = 100;


messageBox.addEventListener("beforeinput", function (event) {
    const currentLength = messageBox.value.length;

    
    if (currentLength >= maxChars && event.data !== null) {
        event.preventDefault();
    }
});


messageBox.addEventListener("input", function () {
    const currentLength = messageBox.value.length;
    const remaining = maxChars - currentLength;

    counter.textContent = "Remaining: " + remaining;

    counter.classList.remove("yellow", "red");

    if (remaining <= 20 && remaining > 0) {
        counter.classList.add("yellow");
    } else if (remaining <= 0) {
        counter.classList.add("red");
    }
});

resetBtn.addEventListener("click", function () {
    messageBox.value = "";
    counter.textContent = "Remaining: " + maxChars;
    counter.className = "";
});
