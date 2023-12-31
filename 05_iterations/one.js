// for loops

// for (let i = 1; i <= 10; i++) {
//     const element = i;
//     if (element == 5) {
//         console.log("5 is a best number");
//     }
    
//     console.log(element);
// }

// for (let i = 0; i <=10; i++) {
//     console.log(`outer loop: ${i}`);
    // for (let j = 0; j <=10; j++) {
//         // console.log(`outer loop: ${i} and inner loop: ${j}`);
//         console.log(i + '*' + j + ' = ' + i*j);
//         }
        
//     }

const myArray = ["Batman", "Superman", "Flash",""];
// console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
    
}

// for (let index = 1; index < 10; index++) {
//     if(index == 5) {
//         console.log("Detected 5");
//         break
//     }
//     console.log(`value of i is ${index}`);
// }

for (let index = 1; index < 10; index++) {
    if(index == 5) {
        console.log("Detected 5");
        continue
    }
    console.log(`value of i is ${index}`);
}
