function sayMyName(){
     console.log("A");
    console.log("N");
    console.log("A");
    console.log("S");
}

//sayMyName()

// function addTwoNumbers(number1,number2){
//     console.log(number1 + number2);
// }

// addTwoNumbers(2,5)
// addTwoNumbers(2,"4")
// addTwoNumbers(2,"a")

function addTwoNumbers(number1,number2){
    let result = number1 + number2
    return result
}

const result = addTwoNumbers(3,4)
//console.log("result:", result);

// const loginuserMessage = function(username){
//     return `${username} just logged in`
// }
const loginuserMessage = function(username){
    if(!username){
        // console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginuserMessage(""));

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

//console.log(calculateCartPrice(100, 200, 300, 400));

const user = {
    username: "Anas",
    price: 199,
}

function handleObject(anyObject){
    // console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}

//handleObject(user)

handleObject({
    username: "sam",
    price: 999
})

const myNewArray = [100, 200, 300, 400]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray))