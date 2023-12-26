const myArr = [0, 1, 2, 3, 4, 5, 9];
// console.log(myArr[1])

const myHeros = ["Iron man", "Hulk"];
const myArr2 = new Array(1,2,3,4);
// console.log(myArr2[3]);
// console.log(myHeros[1]);

// Array Methods

// myArr.push(6);
// myArr.pop();
// console.log(myArr)

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(5));
// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));

const newArr = myArr.join();
// console.log(myArr);
// console.log(newArr);

// slice and splice
console.log("A",myArr);

const myn1 = myArr.slice(0, 4);

console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(0, 3);
console.log("C", myn2);
console.log("D", myArr);