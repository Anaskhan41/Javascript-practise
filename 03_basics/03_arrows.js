const user = {
    username: "Anas",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        // console.log(this);
    }
}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// const chai = () => {
//     let username = "Anas"
//     console.log(this);
// }

// chai()

// const addTwo = (num1, num2) =>{   // arrow function
//     return num1 + num2
// }



// const addTwo = (num1, num2) => num1 + num2 // implicit return
// console.log(addTwo(3,4));

const addTwo = (num1, num2) => ({username: "Anas"})
console.log(addTwo());