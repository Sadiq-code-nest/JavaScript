// function Info(name, age) {
//     return {
//         name,
//         age

//     }
// }

// console.log(Info('Sadiq', 25));



// Concise

// Create Function in an object
let MyInfo={
key78 : function () {
    return 'i am sadiq';
}

}
console.log(MyInfo.key78())  ;

// new ES6 way of declaring function---- concise 

let MyInfo2={
    key78 () {
        return 'Function works';
    }
    
    }
    console.log(MyInfo2.key78())  ;

    
    // GIVE FUNCTION NAME MORE THAN 1



let MyInfo1={
    'key78 name'() {
        return 'yes Double key function it works!! ';
    }
    
    }
    console.log(MyInfo1['key78 name']())  ;
    