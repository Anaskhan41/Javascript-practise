// Primitive datatypes

// number, null, boolean, bigInt, string, symbol, undefined

// Reference  (non-Primitive datatypes)
// Arrays, Object, Functions

// typeof datatypes
/*
undefined => "undefined"
null => "object"
boolean => "boolean"
number => "number"
string => "string"
object(native and does not implement [(call)]) => "object"
object(native or host and does implement [(call)]) => "function"
*/

//+++++++++++++++++++++++++++++++++++++++++

// Stack (primitive), Heap (non-primitive)

let myYoutubeName = "xyz"

let anotherName = myYoutubeName
anotherName = "Jack" 

// console.log(myYoutubeName);
// console.log(anotherName);

let userOne = {
    email: "xyz@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "abc@google.com"

console.log(userOne.email);
console.log(userTwo.email);