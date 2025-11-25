// Q1. Personalized Login Greeting
// Create a program that greets users with time-based messages.
// Requirements:
// ● Declare variables for userName and current hour using new Date().getHours().
// ● If time is before 12 → “Good Morning [name]!”
// ● If time is between 12 and 17 → “Good Afternoon [name]!”
// ● Otherwise → “Good Evening [name]!”
// ● Use template literals and proper string formatting.


let userName = "Parth";
let hour = new Date().getHours();
let msg = "";
if (hour < 12) {
    msg = `good morning ${userName}!`;
} else if (hour >= 12 && hour < 17) {
    msg = `good afetnoon ${userName}!`;
} else {
    msg = `good evening ${userName}!`;
}
console.log(msg);
