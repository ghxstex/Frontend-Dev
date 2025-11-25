"use strict";

const employees = [
{ name:"Amit", salary:"45000", years:"5" },
{ name:"Sara", salary:"38000", years:"2" },
{ name:"Kiran", salary:"52000", years:"7" }
];

for (let i = 0; i < employees.length; i++) {
    try {
        let s = Number(employees[i].salary);
        let y = Number(employees[i].years);
        if (Number.isNaN(s) || Number.isNaN(y)) throw "err";
        let bonus = y > 3 ? s * 0.1 : s * 0.05;
        console.log(`${employees[i].name} | ${s} | ${y} | ${bonus} | ${s + bonus}`);
    } catch(e) {
        console.log("Error");
    }
}
