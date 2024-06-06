"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Define variables
let apple = "apple";
let upperCaseApple = "APPLE";
let ten = 10;
let twenty = 20;
// Create a array
let fruitsName = ["Apple", "Mango", "Orange"];
// Test for eqaulity and inequality with string
console.log("Is apple is equal to apple");
console.log(apple == "apple");
console.log("\nIs apple is not equal to apple");
console.log(apple != "apple");
// Test for using lower case function
console.log("\nIs APPLE is equal to apple after converting to lower case");
console.log(upperCaseApple.toLocaleLowerCase() == "apple");
console.log("\nIs APPLE is equal to apple after converting to lower case");
console.log(upperCaseApple.toLocaleLowerCase() != "apple");
// Numerical tests
console.log("\n ten is equal to twenty?");
console.log(ten == twenty);
// Not equal to
console.log("Is ten is not equal to twenty");
console.log(ten != twenty);
// Greater than
console.log("\n Is ten is greater than zero");
console.log(ten > 0);
//less than
console.log("\n IS ten  is less than zero");
console.log(ten < 10);
// Greater than and equal to
console.log("\ Is ten is greater than and equal to five");
console.log(ten >= 5);
// less than and equal to 
console.log("\n twenty is less than or equal to 10");
console.log(twenty <= 10);
// Tests using "and" operator
console.log("\n twenty is not equal to 10 and twenty is greater than 10");
console.log(twenty != 10 && 20 > 10);
console.log("/n twenty is not equal to 10 and twenty is greater than 30");
console.log(twenty != 10 && 20 > 30);
// Tests using "or" operator
console.log("\n 20 is greater than 50 OR 20 is equal to 20");
console.log(twenty > 50 || 20 == 20);
// test whether an item include in array
console.log("Is orange include in fruit name array");
console.log(fruitsName.includes("Orange"));
// not include
console.log("Is orange not include in fruit name array");
console.log(!fruitsName.includes("Orange"));
