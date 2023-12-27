// singleton
//Object.create

// object litrals

const mySym = Symbol("key1")

const JsUser = {
    name: "Anas",
    "full name": "Anas khan",
    [mySym]: "mykey1",
    age: 18,
    location: "jaipur",
    email: "xyz@gmail.com",
    isLoggedIn: false,
    lastLoggedIn: ["Monday", "Saturday"]
}

// console.log(JsUser.name);
// console.log(JsUser["full name"]);
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser[mySym]);

JsUser.email = "abc@gmail.com"
//Object.freeze(JsUser); // from now you can't change anything in JsUser
JsUser.email = "def@gmail.com"
//console.log(JsUser);

JsUser.greeting = function() {
    console.log("Hello JS User");
}
JsUser.greetingTwo = function() {
    console.log(`Hello JS User, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());