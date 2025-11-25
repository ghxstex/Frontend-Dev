class Employee {
    constructor(id, name, dept, salary) {
        this.id = id;
        this.name = name;
        this.dept = dept;
        this.salary = salary;
    }

    getAnnualSalary() {
        return this.salary * 12;
    }

    applyBonus(percent) {
        this.salary = this.salary + (this.salary * percent / 100);
    }
}

let employees = [
    new Employee(1, "Parth", "IT", 50000),
    new Employee(2, "Aarav", "HR", 40000),
    new Employee(3, "Riya", "Finance", 55000),
    new Employee(4, "Neha", "IT", 48000),
    new Employee(5, "Rahul", "Sales", 45000)
];

employees[0].applyBonus(10);
employees[3].applyBonus(5);

employees.forEach(e => console.log(e.name, e.getAnnualSalary()));

let total = employees.reduce((sum, e) => sum + e.getAnnualSalary(), 0);
console.log("Total payout:", total);
