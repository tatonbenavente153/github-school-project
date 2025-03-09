// Generate a random JS code snippet

let numbers = [1, 2, 3, 4, 5];
let operators = ['+', '-', '*', '/'];
let symbols = ['==', '===', '<', '>', '<=', '>=', '!=', '!=='];
let variables = ['a', 'b', 'c', 'd', 'e'];

// Generate a random number
let randNum = Math.floor(Math.random() * numbers.length);
let num1 = numbers[randNum];

// Generate a random operator
randNum = Math.floor(Math.random() * operators.length);
let op = operators[randNum];

// Generate a random symbol
randNum = Math.floor(Math.random() * symbols.length);
let sym = symbols[randNum];

// Generate a random variable name
randNum = Math.floor(Math.random() * variables.length);
let varName = variables[randNum];

// Generate a random equation
let randEquation = num1 + op + '(' + varName + sym + '2)';

console.log(randEquation);
