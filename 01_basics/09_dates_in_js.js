let myDate = new Date()

// console.log(myDate);

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toTimeString());
// console.log(myDate.toUTCString());

// console.log(typeof myDate);



// let myCreatedDate = new Date(2023, 0, 30)
// console.log(myCreatedDate.toDateString());


// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// console.log(myCreatedDate.toLocaleString());


// let myCreatedDate = new Date("2024-02-20")
// console.log(myCreatedDate.toLocaleString());


let myCreatedDate = new Date("02-20-2024")
// console.log(myCreatedDate.toLocaleString());


// let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Date.now()/1000);
// console.log(Math.floor(Date.now()/1000));  // to solve the point value



// let newDate = new Date()
// console.log(newDate.getDate());
// console.log(newDate.getDay());
// console.log(newDate.getFullYear());
// console.log(newDate.getHours());
// console.log(newDate.getMilliseconds());
// console.log(newDate.getMinutes());
// console.log(newDate.getMonth()+1);
// console.log(newDate.getSeconds());
// console.log(newDate.getTime());
// console.log(newDate.getTimezoneOffset());









// Complete Example

let now = new Date();

console.log("Year:", now.getFullYear());
console.log("Month:", now.getMonth() + 1);
console.log("Date:", now.getDate());
console.log("Day:", now.getDay());
console.log("Hours:", now.getHours());
console.log("Minutes:", now.getMinutes());
console.log("Seconds:", now.getSeconds());