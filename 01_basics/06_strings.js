const name = "Salman"
const fatherName = "Masood"

// console.log(name + fatherName + "Khan");

console.log(`Hello my name is ${name} and my father name is ${fatherName}.`);


const fullName =new String('salman masood khan')

console.log(fullName[0]);
console.log(fullName.__proto__);

console.log(fullName.length);
console.log(fullName.toUpperCase());
console.log(fullName.charAt(5));
console.log(fullName.indexOf("o"));

const newName = fullName.substring(0, 6)
console.log(newName);

const anotherName = fullName.slice(-15)
console.log(anotherName);


const newStringOne = "    salman     "
console.log(newStringOne);
console.log(newStringOne.trim());  // remove the extra space in the string



const url = "https://salman.com/salman%10masood"
console.log(url.replace("%10", "-"));



let text1 = "JavaScript is great. JavaScript is powerful.";
let result = text1.replaceAll("JavaScript", "JS");
console.log(result);



let message = "Hello Salman";
console.log(message.startsWith("Hello"));


let file = "document.pdf";
console.log(file.endsWith(".pdf"));


let text2 = "JavaScript is great. I love JavaScript";
console.log(text2.lastIndexOf("JavaScript"));


let firstName = "Salman";
let lastName = "Khan";
let fullName2 = firstName.concat(" ", lastName);
console.log(fullName2);


let text = "HTML CSS JavaScript";

let result2 = text.split(" ");

console.log(result2);


let symbol = "A";
console.log(text.charCodeAt(0));  // Returns the UTF-16 code of the character at an index.