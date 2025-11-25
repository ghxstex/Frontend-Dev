"use strict";

const transactions = [
{ id:1, amount:2000 },
{ id:2, amount:-500 },
{ id:3 },
null
];

const valid = [];
const invalid = [];

for (let i = 0; i < transactions.length; i++) {
    try {
        if (transactions[i] === null) throw "null";
        if (!transactions[i].id || transactions[i].amount === undefined) throw "missing";
        if (transactions[i].amount < 0) throw "negative";
        valid.push(transactions[i]);
    } catch(e) {
        invalid.push(transactions[i]);
    }
}

console.log(valid);
console.log(invalid);
