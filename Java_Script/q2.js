// Q2. Multi-Type Data Summary
// Simulate a database summary of various user data entries.
// Requirements:

// ● Declare variables of different data types: string, number, boolean, array, object, null,
// undefined.
// ● Use typeof operator and Array.isArray() to identify each type.
// ● Print a formatted report (label + value + type) using one console.table() statement.


let a = "Parth Lalit";
let b = 21;
let c = true;
let d = ["smoking", "drinking"];
let e = {city:"Agra", age:21};
let f = null;
let g;
let data = [
    {label:"String", value:a, type:typeof a},
    {label:"Number", value:b, type:typeof b},
    {label:"Boolean", value:c, type:typeof c},
    {label:"Array", value:d, type: Array.isArray(d) ? "array" : typeof d},
    {label:"Object", value:e, type:typeof e},
    {label:"Null", value:f, type:"null"},
    {label:"Undefined", value:g, type:typeof g}
];
console.table(data);
