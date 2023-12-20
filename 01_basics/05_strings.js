const name = "Anas"
const repocount = 50

// console.log(name + repocount + " value") [avoid this type of method]

// console.log(`Hello my name is ${name} and the repocount is ${repocount}`);

const gameName = new String('jackhc-hh-tt')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());

// console.log(gameName.charAt(1));
// console.log(gameName.indexOf('c'));

const newString = gameName.substring(0, 4);
// console.log(newString);

// const anotherString = gameName.slice(-4, 4);
// console.log(anotherString);

// const newStringOne = "   Anas   "
// console.log(newStringOne);
// console.log(newStringOne.trim());

// const url = "https://anas%20khhan"
// console.log(url.replace('%20', '-'));
// console.log(url.includes('sundar'));
// console.log(url.includes('anas'));
console.log(gameName.split('-'));