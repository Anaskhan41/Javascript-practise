// const coding = ["js", "java", "py", "swift"];

// const value = coding.forEach((item) => {
//     // console.log(item);
//     return item
// })

// console.log(value);

const myNums = [1,2,3,4,5,6,7,8,9,10];

// const newNums = myNums.filter( (num) => num > 4);
// console.log(newNums);

const books = [
    {title: 'book one', genre: 'science', publish: 2009, edition: 2014},
    {title: 'book two', genre: 'History', publish: 1981, edition: 2011},
    {title: 'book three', genre: 'science', publish: 2008, edition: 2016},
    {title: 'book four', genre: 'History', publish: 2001, edition: 2018},
    {title: 'book five', genre: 'fiction', publish: 1999, edition: 2019},
    {title: 'book six', genre: 'Non-fiction', publish: 2003, edition: 2013},
    {title: 'book seven', genre: 'science', publish: 2009, edition: 2016},
    {title: 'book eight', genre: 'History', publish: 1995, edition: 2019},
    {title: 'book nine', genre: 'science', publish: 2013, edition: 2015},
];

// let userbooks = books.filter((bk) => bk.genre === 'History');

let userbooks = books.filter((bk) => { 
    return bk.publish >= 2000 && bk.genre === 'History'
});
console.log(userbooks);