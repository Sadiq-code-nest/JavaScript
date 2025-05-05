// Synchronous Programming - JS is by default single threaded

console.log('Task1');
console.log('Task2');
console.log('Task3');
console.log('Task4');
console.log('Task5');


const taskOne = () => console.log('Task1');

// const dataLoading = () => console.log('Task 2 data is loading...');

const taskTwo = () => setTimeout(() => console.log('Task 2 data is loading...'),1000);
const taskThree= ()=> console.log('Task3');
const taskFour = () => console.log('Task4');
const taskFive = () => console.log('Task5');

taskOne();
taskTwo();
taskThree();
taskFour();
taskFive();