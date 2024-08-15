"use strict";

//**************REGEX*************** */
//SPECIFYING MULTIPLE OPTIONS FOR WORDS
// let text = "I love JavaScript!";
// //TEST QUESTION
// //g modifier finish all matches
// //i modifier makes the expression case-insensitive
// console.log(text.match(/javascript|nodejs|react/gi));

//CHANGE OPTIONS
// let text = "T";
// console.log(text.match(/[a-zA-Z]/));//lowercase and uppercase letter matche

// let text = "äé!";
// console.log(text.match(/[a-zA-Z0-9]/));

// let text = "Just some text.";
// console.log(text.match(/./g));//anything can match

// let text = "I'm 29 years old.";
// console.log(text.match(/\d/g));//any digits

// let text = "Coding is a lot of fun!";
// console.log(text.match(/\s/g));//whitespace

// let text = "In the end or at the beginning?";
// console.log(text.match(/\bin/gi));//match text at the beginning of string

// let nr = 357;
// //can not use .match() on numbers
// console.log(nr.match(/3/g));//throws error

//***********Groups************ */
let text = "I love JavaScript!";
console.log(text.match(/(love|dislike)\s(javascript|spiders)/gi));

