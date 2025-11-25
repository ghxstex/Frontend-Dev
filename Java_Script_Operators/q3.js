var x = 16.75;

var rounded = Math.round(x);
var sqrt = Math.sqrt(x);
var power = Math.pow(x, 3);
var random = Math.floor(Math.random() * 41) + 10;

var summary = `
Rounded: ${rounded}
Square Root: ${sqrt}
Power (x^3): ${power}
Random (10–50): ${random}
`;
console.log(summary);
