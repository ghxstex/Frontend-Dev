class Student {
    constructor(name, marks) {
        this.name = name;
        this.marks = marks;
    }

    calculateAverage() {
        const total = this.marks.reduce((sum, m) => sum + m, 0);
        return total / this.marks.length;
    }

    getGrade() {
        const avg = this.calculateAverage();
        if (avg >= 90) return "A";
        if (avg >= 75) return "B";
        if (avg >= 60) return "C";
        return "F";
    }
}

const s1 = new Student("Parth", [90, 92, 87, 91]);
const s2 = new Student("Aarav", [72, 68, 70, 66]);
const s3 = new Student("Riya", [55, 58, 60, 50]);

console.log(s1.name, s1.getGrade());
console.log(s2.name, s2.getGrade());
console.log(s3.name, s3.getGrade());
