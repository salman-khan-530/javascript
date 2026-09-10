// stack (primitive) , heap (non-primitive)

let myName = "Salman Masood"

let anotherName = myName
anotherName = "Arsalan Masood"

console.log(myName);
console.log(anotherName);


let userOne = {
    email : "salman@gmail.com",
    phoneNo : "03000000000"
}

let userTwo = userOne

userTwo.email = "salmankhan@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);

