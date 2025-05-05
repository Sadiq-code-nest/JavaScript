console.log('Hello');
// How to create promise -- pending, resolve, reject

const promise1 = new Promise((resolve, reject) => {
    let Completedwork = false;
    if (Completedwork) {
        resolve('Completed promise 1');
    }
    else {
        reject('Not Completed yet');
    }
});


let promise2 = new Promise ((resolve, reject)=> {
    resolve("The promise 2 is done");
})
promise2.then(y=>console.log(y));


// if promise resolved it will go then() func
// if promise rejcted it will go catch() func
promise1.then(x => console.log(x)).catch(err => console.log(err));
// console.log(promise1);

console.log('END');