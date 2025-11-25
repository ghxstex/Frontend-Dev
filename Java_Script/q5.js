// Q5. Weather Activity Planner
// Advise a user on what to do based on temperature, rain, and wind speed.
// Requirements:
// ● Create variables for temperature, isRaining, windSpeed.
// ● If raining → “Stay indoors with hot coffee.”
// ● Else if temperature > 35 → “Go swimming.”
// ● Else if temperature < 15 and windSpeed > 20 → “Too cold and windy — stay home.”
// ● Else → “Perfect day for a walk.”
// ● Combine && and || conditions smartly.


let temperature = 14;
let isRaining = false;
let windSpeed = 25;

if (isRaining) {
    console.log("sray inside.");
} else if (temperature > 35) {
    console.log("Go to beach.");
} else if (temperature < 15 && windSpeed > 20) {
    console.log("Too cold");
} else {
    console.log("good day");
}
