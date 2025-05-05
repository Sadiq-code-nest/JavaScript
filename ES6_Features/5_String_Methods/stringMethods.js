// It's Case Sensitive and return a boolean
//  startsWith (searchString, position) -> check a string start with another string

const message= 'Lets start the journey';
console.log(message.startsWith("Lets",0));
console.log(message.startsWith("journey"));

// endsWith (searchString, length)-> check a string end with another string

console.log(message.endsWith("journey"));

// includes (searchString, position) -> check if a string contains anaother string

console.log(message.includes("start"));