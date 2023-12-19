// let score = "33abc"

// console.log(typeof score);
// console.log(typeof (score));

// let valueInNumber = Number(score)
// console.log(typeof valueInNumber);

// console.log(valueInNumber);
/*
"33" => 33
"33abc" => NaN (not a number)
true => 1; false => 0;

*/

let isLoggedIn = 0

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

// 1 => true; 0 => false;
// "" => false
// "Anas" => true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

// **************** Operations ****************
let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**3)
// console.log(2/3)
// console.log(2%3)

let str1 = "hello"
let str2 = " Anas"

let str3 = str1 + str2
// console.log(str3);

// console.log(1+2);
// console.log("1"+2);
// console.log(1+"2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log(+true);
// console.log(-true);
// console.log(+"");
// console.log(+false);

let num1, num2, num3

num1 = num2 = num3 = 2 + 2;

let gameCounter = 100;
// gameCounter++;
++gameCounter;
// console.log(gameCounter);

// prefix and postix in js

// let x = 3;
// const y = x++;

// console.log(`x:${x}, y:${y}`);
// // Expected output: "x:4, y:3"

// let a = 3;
// const b = ++a;

// console.log(`a:${a}, b:${b}`);
// // Expected output: "a:4, b:4"

let x = 3;
const y = x--;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = --a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"