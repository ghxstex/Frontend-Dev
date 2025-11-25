"use strict";

const apiData = ["25","true","false","NaN"," ","100px","3.14",null,undefined];
const valid = [];
const invalid = [];

for (let i = 0; i < apiData.length; i++) {
    const num = Number(apiData[i]);
    if (apiData[i] === " " || Number.isNaN(num)) {
        invalid.push(apiData[i]);
    } else {
        valid.push(num);
    }
}

console.log(valid);
console.log(invalid);
