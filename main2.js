uname = 'pratikdash';
age = 19;

let user = {
    // user scope
    objectName: "user",
    uname: "fullstacknest", // key(property): value
    age: 27,
    greet: () => { // method
        // console.log(`Hello ${user.uname}, age is ${user.age}`);
        console.log(`Hello ${this.uname}, age is ${this.age}`);

    },
    hello: function () {
        console.log(`Hello ${this.uname}, age is ${this.age}`);
    },

    welcome: function (job, city) {
        console.log(`Hello ${this.uname}, age is ${this.age}. Job: ${job}, city: ${city}`);
    }

}
user.greet()

// {
//     // 2d scope
//     uname = 'saurendra-kumar';
//     age = 29;
//     user.greet()
// }

{
    // 2d scope

    const anyVar = {
        uname: 'jitendra-sahoo',
        age: 23
    }
    user.greet.call(anyVar)
}

console.log('==============================');

let user2 = {
    uname: "seema-mehta",
    age: 26,
}

let user3 = {
    uname: "devang",
    age: 20,
}

user.hello();
// user.hello.call(user2);
// user.hello.call(user3);

// user.hello.apply(user2);
// user.hello.apply(user3);

// let res = user.hello.bind(user2);

// let res2 = user.hello.bind(this);
// res2();

// res();


console.log('******************************');

user.welcome.call(user, "Scientist", "Bangalore");
user.welcome.call(user3, "Student", "Ahmedabad")

console.log('-------------------');
user.welcome.apply(user3, ["Student", "Ahmedabad"])

console.log('------bind--------');
let res3 = user.welcome.bind(user3, "Student", "Vadodara")
res3();