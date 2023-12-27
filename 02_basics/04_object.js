// const tinderUser = new Object() // singleton object
const tinderUser = {} // non singleton object

tinderUser.ID = "1234"
tinderUser.name = "sammmy"
tinderUser.isLoggedIn = "false"

// console.log(tinderUser);

const regularUser = {
    email: "xyz@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Anas",
            lastname: "Khan"
        }
    }
}

// console.log(regularUser.fullname);

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "a", 4: "b"};

// const obj3 = {obj1, obj2};
// const obj3 = Object.assign({}, obj1, obj2);
const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const user = [ 
    {
        id: 1,
        email: "h@gmail.com"
    },

    {
        id: 2,
        email: "f@gmail.com"
    },
    {
        id: 3,
        email: "g@gmail.com"
    }
]

// console.log(user[0].email);

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));
// console.log(tinderUser.hasOwnProperty('isLogged'));

const course = {
    coursename : "js in Hindi",
    price: "999",
    courseInstructor : "Anas",
}

// course.courseInstructor

const {courseInstructor : instructor} = course

console.log(instructor);

//API format

{
    "name": "Anas",
    "coursename": "Js in Hindi",
    "Price": "Free"
}