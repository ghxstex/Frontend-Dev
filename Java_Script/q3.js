// Q3. Monthly Expense Tracker
// Develop a script that calculates total and average monthly expenses with dynamic updates.
// Requirements:
// ● Use an array of expenses for 5 categories (food, travel, rent, bills, leisure).
// ● Use arithmetic and assignment operators to add 10% tax to the total.
// ● Use toFixed(2) to round values.
// ● Display total, average, and final amount after tax.



let expenses = [3000, 1200, 8000, 2500, 1500];
let total = expenses[0] + expenses[1] + expenses[2] + expenses[3] + expenses[4];
let avg = total / expenses.length;
let tax = total * 0.10;
let finalAmount = total + tax;
console.log(total.toFixed(2));
console.log(avg.toFixed(2));
console.log(finalAmount.toFixed(2));
