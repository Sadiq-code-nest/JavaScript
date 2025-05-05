const taskOne = (callback) => {
    console.log('Task1');
    callback();
};
const taskTwo = (callback) => {
    setTimeout(() => {
        console.log('Task 2 data is loading...');
        callback();
    }, 1000);
};
const taskThree = (callback) => {
    console.log('Task3');
    callback();
};
const taskFour = (callback) => {
    console.log('Task4');
    callback();
};
const taskFive = (callback) => {
    console.log('Task5');
};

// call synchornously in the loop of asynchronous

taskOne(() => {
    taskTwo(() => {
        taskThree(() => {
            taskFour(() => {
                taskFive()
            })
        })
    });
});


// taskTwo();
// taskThree();
// taskFour();
// taskFive();