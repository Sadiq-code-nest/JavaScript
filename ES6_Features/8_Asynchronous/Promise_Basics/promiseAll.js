console.log('Hello');
// How to create promise -- pending, resolve, reject

const promise1 = new Promise((resolve, reject) => {
    let Completedwork = true;
    if (Completedwork) {
        resolve('Completed promise 1');
    }
    else {
        reject('Not Completed yet');
    }
});


let promise2 = new Promise ((resolve, reject)=> {
    resolve("The promise 2 is done");
});

Promise.all([promise1, promise2]).then(er=> console.log(er));
// Destructuring 
Promise.all([promise1, promise2]).then(([response1, response2] )=> console.log(response1, response2));

console.log('END');

