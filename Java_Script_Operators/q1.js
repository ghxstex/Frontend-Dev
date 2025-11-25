var bonus = 5000;
function calculateSalary() {
    var salary = 40000;
    var isPermanent = true;

    if (isPermanent === true) {
        salary = salary + bonus;
    }

    console.log("Total Salary: " + salary);
}

calculateSalary();
console.log("Global Bonus Still: " + bonus);
