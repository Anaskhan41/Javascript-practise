const myNumbers = [1,2,3];

// const myTotal = myNumbers.reduce( function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//    return acc + currval 
// }, 3)

// const myTotal = myNumbers.reduce( (acc, currval) => acc + currval, 0)
// console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 999
    },
    {
        itemName: "java course",
        price: 1999
    },
    {
        itemName: "py course",
        price: 2999
    },
    {
        itemName: "mobile dev course",
        price: 12999
    },
]

const totalToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0)

console.log(totalToPay);