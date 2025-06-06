
// Using promise simplify the callback hell problem
console.log('hi');

const taskOne = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve('Task1 is completed'), 2000)
    });
}
const taskTwo = () => {
    return new Promise((resolve, reject) => resolve('Task2 is completed'));
}
const taskThree = () => {
    return new Promise((resolve, reject) => reject('Task3 is not completed'));
}
const taskFour = () => {
    return new Promise((resolve, reject) => resolve('Task4 is completed'));
}

taskOne()
    .then(x => console.log(x))
    .then(taskTwo)
    .then(x => console.log(x))
    .then(taskThree)
    .then(x => console.log(x))
    .then(taskFour)
    .then(x => console.log(x))
    .catch(x => console.log(x))
console.log('bye');