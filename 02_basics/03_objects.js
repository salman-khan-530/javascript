// object literals
const mySym = Symbol("key1")


const user = {
    name : "Salman",
    "Full name" : "Salman Masood",
    age : 21,
    location : "Charsadda",
    email : "salman@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Friday"],
    [mySym] : "myKey1"
}


// console.log(user.email); // not a good method 
// console.log(user["email"]); // It is a good method

// when you declear key as a string in double quotes you cannot access it through dot(.) method.
// console.log(user."Full name"); // it gave error
// console.log(user["Full name"]); // it is right

// symbol
// console.log(user[mySym]);
// console.log(typeof user[mySym]);



// change  the values of objects

// user.email = "Salman1122@gmail.com"
// console.log(user);

// when we put freeze function with object the changes is not allowed in that object
// Object.freeze(user) // after that you cannot change the values of user
// user.location = "Peshawar"
// console.log(user);


// function using objects

user.greeting = function(){
    console.log("Hello JS user");
}

user.greeting2 = function(){
    console.log(`Hello JS user ${user["name"]}`);

}

console.log(user.greeting());
console.log(user.greeting2());
