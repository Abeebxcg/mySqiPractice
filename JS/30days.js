"use strict"
// // soluton to day5
// //Declare an empty array;
// const myArray = Array()
// console.log(typeof(myArray));
// //Declare an array with more than 5 number of elements
// const fruits = ["mangoes", "lemon", "oranges", 12, [13, "namem", "sheep"] ];
// //Find the length of your array
// console.log(fruits.length);
// //Get the first item, the middle item and the last item of the array
// console.log(fruits[0],fruits[2], fruits[4] );
// //Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
// let companies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle","Amazon"]
// console.log(companies);
// console.log("we have:" + companies.length + " " + "companies");

// //Change each company name to uppercase one by one and print them out
// console.log(companies[1].toUpperCase())
// console.log(companies[2].toUpperCase())
// console.log(companies[3].toUpperCase())
// console.log(companies[4].toUpperCase())

// //Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
// console.log(companies.toString());

// //Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found

// if (companies.includes("amazon")){
//     console.log("Yay!! Amazon is there");
// }
// else{
//     console.log("oops!! Amazon is absent");
// }

// //Filter out companies which have more than one 'o' without the filter method
// //Sort the array using sort() method
// console.log(companies.sort());
// //Reverse the array using reverse() method
// console.log(companies.reverse());

// //Slice out the first 3 companies from the array
// console.log(companies.slice(0,3));

// //Slice out the last 3 companies from the array
// console.log(companies.slice(4,7));

// //Slice out the middle IT company or companies from the array
// console.log(companies.slice(3,4));

// //Remove the first IT company from the array

// //First remove all the punctuations and change the string to array and count the number of words in the array
// let text = ' I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
// let newText = text.trim(' ')
// console.log(newText);

let jonas = {
            firstName : "andrew",
            secondName : "Bella",
            friends: ["john", "michael", "sanni"]
};
const interested = prompt("what") 
console.log(jonas[interested]);

jonas.location = "twitter"
console.log(`${jonas.firstName} has a friend called ${jonas.friends[2]}`);
let same = "firstName"
console.log(jonas[same]);