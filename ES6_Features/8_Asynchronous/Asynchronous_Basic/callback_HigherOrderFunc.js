// Callback & Higher Order Function
// Callback -- A function which recieve another function as a parameter/arguments, the parameter is callback function
// Higher Order Function -- The function which recieve another function as a parameter/arguments. 
// ---the function is called Higher Order Function.

const square= x => console.log(`Square of x is ${x*x} `);
const y=square;
const higherOrderFunction = (num, callback) => callback(num);
higherOrderFunction(9,square);