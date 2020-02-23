'use strict'

console.log("Console App with NodeJS");

var params = process.argv.slice(2);

var number1 = parseFloat(params[0]);
var number2 = parseFloat(params[1]);

//console.log(params);
//console.log(number1);
//console.log(number2);


var calc = `
1. the sum is: ${number1 + number2}
2. the subtraction is: ${number1 - number2}
3. the multiplication is: ${number1 * number2}
4. the division is: ${number1 / number2}
`;

console.log(calc);

