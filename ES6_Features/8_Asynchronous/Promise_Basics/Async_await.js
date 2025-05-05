// await-- wait untill end of task
// use async for await
console.log('hi');

const taskOne = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve('Task1 is completed'), 1000)
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



const callAllTask = async () => {
try {
    let t1 = await taskOne();
    console.log(t1);
    let t2 = await taskTwo();
    console.log(t2);
    let t3 = await taskThree();
    console.log(t3);
    let t4 = await taskFour();
    console.log(t4);

} catch (error)
{
console.log(error);
}
}
callAllTask();


console.log('bye');