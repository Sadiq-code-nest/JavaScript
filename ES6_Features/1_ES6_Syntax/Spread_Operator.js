// function addNumber(x,y,z){
//     return x+y+z;
// }
// let number=[10,20,30,40,50];
// // addNumber(number[0],number[1],number[2]);    //Previous way
// // addNumber(...number);

// let number1=[6,...number,7];
// console.log(number1);


// //Concat

// let number2=[15,25,35];

// console.log(...number1,...number2);



let student1 = {
    name: 'Sadiqul islam',
    id: 2054901063

}

let student2 = {
    language: ["Bangla", "English"],
    section: 'B'
}
let student = { ...student1, ...student2 };
console.log(student);