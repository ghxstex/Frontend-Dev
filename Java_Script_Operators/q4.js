var scores = [];
for (var i = 0; i < 8; i++) {
    scores.push(Math.floor(Math.random() * 71) + 30);
}

var highest = Math.max(...scores);
var lowest = Math.min(...scores);

var average = scores.reduce(function(sum, value) {
    return sum + value;
}, 0) / scores.length;

var passed = scores.filter(function(score) {
    return score >= 50;
}).length;

console.log("Scores:", scores);
console.log("Highest:", highest);
console.log("Lowest:", lowest);
console.log("Average:", average.toFixed(2));
console.log("Passed Students:", passed);
