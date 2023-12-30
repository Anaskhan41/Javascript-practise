const userEmail = []

if(userEmail) {
    // console.log("Got an Email");
} else{
    // console.log("Don't have user email");
}

// falsy values
// false, Nan, null, undefined, "", Bigint, 0n, 0, -0, 

// truthy values
// "0", 'false', "false", " ", [], {}, function(){}

// if(userEmail.length === 0) {
//     console.log("Array is empty");
// }

// const emptyObj = {}
// if(Object.keys(emptyObj).length === 0){
//     console.log("object is empty");
// }

// Nullish Coalescing Operator (??): null undefined

// let val1;
// val1 = 5 ?? 10
// val1 = null ?? 5
// val1 = undefined ?? 5
// val1 = null ?? 1 ?? 5

// console.log(val1);


// Terniary Operator
// condition ? true : false

const iceTeaPrice = 81
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");
