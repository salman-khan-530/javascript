
const tinderUser = {}

tinderUser.id = "salman123"
tinderUser.name = "Salman"
tinderUser.isLogedIn = false

// console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("isLogedIn"));



// object inside another object

const regularUser = {
    email : "salman@gamil.com",
    fullname : {
        userfullname : {
            firstname : "Salman",
            lastname : "Masood"
        }
    }
}


// console.log(regularUser.fullname.userfullname.firstname);

// Combining objects

const obj1 = {
    1 : "a",
    2 : "b"
}
const obj2 = {
    3 : "c",
    4 : "d"
}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2)
// const obj3 = {...obj1, ...obj2}

// console.log(obj3);

