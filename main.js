// 'use strict'
// console.log('Getting started with OOPs');

let user = {
    // user scope
    objectName: "user",
    uname: "fullstacknest", // key(property): value
    age: 27,
    greet: function () { // method
        console.log(`Hello ${user.uname}, age is ${user.age}`);
        console.log(this === window);
        console.log(this);

    }
}


user.greet()
// this keyword

let userName = 'useroneOfFSN'

// global scope
console.log(this === window);

console.log('------------------------------');


function helloReg() {
    console.log(this === window);
    console.log(this);
}
helloReg()

console.log('*******************');

const hello = () => {
    console.log(this === window);
    console.log(this);
}
hello();

// console.log(typeof user);

// function print() {
//     console.log("print");
// }

// console.log(typeof print);

// const myName = 'Satyaprakash';
// console.log(typeof myName);

// 1) Functional Programming -----
// 2) OOPs****