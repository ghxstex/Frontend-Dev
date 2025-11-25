class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }

    work() {
        console.log(this.name + " is working in " + this.department);
    }
}

class Manager extends Employee {
    work() {
        console.log(this.name + " is managing the team of " + this.department);
    }
}

const e1 = new Employee("Rohan", "IT");
const m1 = new Manager("Neha", "Finance");

e1.work(); 
m1.work(); 
