console.log('Hello');
// How to create promise -- pending, resolve, reject
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Completed promise1'), 1000)
});


let promise2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Completed promise2'), 1000)
});


// race func print the first one who completed the task
Promise.race([promise1, promise2]).then((response) => console.log(response));
console.log('END');

