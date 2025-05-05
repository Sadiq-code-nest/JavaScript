// // Array Destructuring 
let number = [10,20,30,40];
let [num1, num2,num3,num4]=number;
console.log(num1+num2);

// // swapping with help of Destructuring

let a=10, b=20;
[a,b]=[b,a]
console.log(`a= ${a}`);
console.log(`b= ${b}`);



//Destructuring a object


const studentData = {
    name: 'sadiq',
    id: 63,
    roll: 2054901063,
// nested object
    language: {
        pro: 'Bangla',
        native: 'English'
    },
    age: 25,
    Occupation: 'Software Engineer'
}

let { age, id , language} = studentData;

console.log(age);
console.log(language.pro);
// console.log(studentData.name);
// console.log(studentData.id);




// Destructuring function parameter
// For Object Destructuring

// Traditionally how object can access from a function
const University1 = (x) => console.log(x.Occupation);

const newStudentData1 = {
    name: 'naum',
    id: 65,
    roll: 2054901065,
// nested object
    language: {
        pro: 'Urdhu',
        native: 'Arabic'
    },
    age: 27,
    Occupation: 'Lecturer'
}

University(newStudentData);




// // ES6 Destruction

const University = ({id, Occupation, language}) => console.log(language.pro);

const newStudentData = {
    name: 'naum',
    id: 65,
    roll: 2054901065,
// nested object
    language: {
        pro: 'Urdhu',
        native: 'Arabic'
    },
    age: 27,
    Occupation: 'Lecturer'
}

University(newStudentData);

//For Array Destructuring

// Traditional array way
 
let names1= ['sadiq','naum','sajid']

let myUniversity1= () =>console.log(names[0]);
myUniversity();


//ES6 Array destructuring way
let names= ['sadiq','naum','sajid','spondon'];

let myUniversity= ([n1, n2,...n3]) =>console.log(n2);
myUniversity(names);

