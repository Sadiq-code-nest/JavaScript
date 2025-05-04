// // ES6 Arrow Function
function display(x, y) {
    addNumber = x + y;
}
display(5, 6);

console.log(addNumber);


let show = (x, y) => { addNumber = x + y; }
show(5, 6);
console.log(addNumber);

const display = (x) => x * x;
console.log(display(5));




// Arrow function object query


var students = [
    {
        name: 'sadiq',
        id: 63,
        gpa: 3.45
    },
    {
        name: 'naum',
        id: 65,
        gpa: 2.75
    },
    {
        name: 'sajid',
        id: 88,
        gpa: 3.37
    }
]



function students_data () {
    return students.filter(function (x)
    {
        return x.gpa>3;
    }
).map( function (y) {

    return y.name;
    
})
}


let students_name= ()=> students.filter(x=>x.gpa>3).map(y=>y.name);


console.log(students_name());


