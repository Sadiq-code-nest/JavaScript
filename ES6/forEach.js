// forEach Recieve a function

let number = [10, 20, 30];
number.forEach(MyNumberFunc)
function MyNumberFunc(x)
{
    console.log(x);
}


// More short 

let number2 = [10, 20, 30];
number2.forEach(function (x) { console.log(x); })

//Square 

let number3 = [10, 20, 30];
let Square = [];
number3.forEach(MyNumberFunc)
function MyNumberFunc(x) {
    Square.push(x * x)
}
console.log(Square);




// Iterate with indexing 
var numbers = [10, 20, 30, 40]; 
console.log(numbers); 

numbers.forEach(function(x, index, arr) { 
  arr[index] = x + 5; 
}); 

console.log(numbers);

