// Q4. Academic Performance Evaluator
// Check whether a student is promoted or not based on multiple subjects.
// Requirements:
// ● Input marks of 5 subjects (use an array).
// ● Calculate average and overall percentage.
// ● Use logical operators to print:
// ○ “Promoted with Distinction” if ≥ 85%
// ○ “Promoted” if between 50%–84%
// ○ “Detained” if < 50%

// ● Add validation: if any subject < 35 → automatically “Detained”.


let marks = [85, 78, 92, 88, 81];
let fail = marks.some(m => m < 35);
let sum = 0;
for (let i = 0; i < marks.length; i++) {
    sum += marks[i];
}
let percentage = (sum / 500) * 100;
if (fail) {
    console.log("Detained");
} else if (percentage >= 85) {
    console.log("Promoted");
} else if (percentage >= 50) {
    console.log("Promoted");
} else {
    console.log("Detained");
}
console.log(percentage.toFixed(2) + "%");
