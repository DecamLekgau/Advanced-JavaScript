"use strict";

//*********Global methods***************/
//********Decording and Encoding URIs*************** */

let uri = "https://www.example.com/submit?name=maaike van putten";
// let encoded_uri = encodeURI(uri);
// console.log("Encoded:", encoded_uri);
// let decoded_uri = decodeURI(encoded_uri);
// console.log("Decoded:", decoded_uri);

//*************DECODING AND DECODING URI COMPONENT NST*/**********


// let encoded_uri = encodeURIComponent(uri);
// console.log("Encoded:", encoded_uri);
// let decoded_uri = decodeURIComponent(encoded_uri);
// console.log("Decoded:", decoded_uri);

//passing numbers (parseint())
// let str_int = "6";
// let int_int = parseInt(str_int);
// console.log("Type of ", int_int, " is ", typeof int_int);

// let str_nam = "hello!";
// let int_nam = parseInt(str_nam);
// console.log("Type of", int_nam, "is", typeof int_nam);

// let str_float = "7.6";
// let float_float = parseFloat(str_float);
// console.log("Type of", float_float, "is", typeof float_float);

// let str_int = "6";
// let float_iint = parseFloat(str_float);
// console.log("Type of", float_float, "is", typeof float_float);

// let str_binary = "0b101";
// let float_binary = parseFloat(str_binary);
// console.log("Type of", float_binary, "is", typeof float_binary);

// let str_nan = "hello!";
// let float_nan = parseFloat(str_nan);
// console.log("Type of", float_nan, "is", typeof float_nan);

//***************Array Methods********** */

// let arr = ["grapefruit", 4, "hello", 5.6, true];
// function printStuff(element, index) {
//  console.log("Printing stuff:", element, "on array position:", index);
// }
// arr.forEach(printStuff);

//FILTERING ARRAYS
// let arr = ["squirrel", 5, "Tjed", new Date(), true];
// function checkString(element, index) {
//  return typeof element === "string";
// }
// let filterArr = arr.filter(checkString);
// console.log(filterArr);

// console.log(arr.every(checkString));

//REPLACING ARRAY ELEMENTS

// let arr = ["grapefruit", 4, "hello", 5.6, true];
// console.log(`Original array; ${arr}`);
// arr.copyWithin(0, 3);
// console.log(`New array: ${arr}`);
//0: replacing grapefruit
//3: coping from index 3 - 5.6 is the value
//5: the last index we want to copy from + 1

//MAPPING VALUES
// let arr = [1, 2, 3, 4];
// let mapped_arr = arr.map(x => x + 1);
// console.log(mapped_arr);

//finding last last occurance
// let bb = ["so", "bye", "bye", "love"];
// console.log(bb.lastIndexOf("bye"));

//*************String method************ */
//COMBINING STRINGS
// let s1 = "Hello";
// let s2 = "JavaScript";
// let result = s1.concat(s2);
// console.log(`String 1: ${s1}`);
// console.log(`String 2: ${s2}`);
// console.log(`String: ${result}`);

//COMERTING STRINGS TO ARRAYS
// let result = "Hello JavaScript";
// let arr_result = result.split(" ");
// console.log(arr_result);

// let favoriteFruits = "strawberry,watermelon,grapefruit";
// let arr_fruits = favoriteFruits.split(",");
// console.log(arr_fruits)
//comerting arrays to strings
// let letters = ["a", "b", "c"];
// let x = letters.join();
// console.log(x);

//INDEXEX
let poem = "Roses are red, violets are blue, if I can do JS, then you can too!";
// let index_re = poem.indexOf("re");
// console.log(index_re);

// let indexNotFound = poem.indexOf("python");
// console.log(indexNotFound);

// let pos1 = poem.charAt(10);
// console.log(pos1);

// let pos1 = poem.charAt(10);
// console.log(pos1);

// let pos2 = poem.charAt(1000);
// comsole.log(pos2)//returns an empty string

//SUBSTRINGS
// let str = "Create a substring";
// let substr1 = str.slice(5);
// let substr2 = str.slice(0,3);
// console.log("1:", substr1);
// console.log("2:", substr2);

//replacing
// let hi = "Hi buddy, how are you doing buddy";
// let new_hi = hi.replaceAll("buddy", "Pascal");
// console.log(hi);
// console.log(new_hi);

//CASING
// let low_bye = "bye!";
// let up_bye = low_bye.toUpperCase();
// console.log(up_bye);

// let caps = "HI HOW ARE YOU?";
// let fixed_caps = caps.toLowerCase();
// console.log(fixed_caps);

//START AND END OF A STRING
// let encouragement = "You are doing great, keep up the good work!";
// let bool_start = encouragement.startsWith("You");
// console.log(bool_start);

// let bool_start2 = encouragement.startsWith("you");
// console.log(bool_start2);

// let bool_end = encouragement.endsWith("work");
// console.log(bool_end);

//*************NUMBER METHODS************ */
// let x = 34;
// console.log(isNaN(x));//FALSE
// console.log(!isNaN(x));//TRUE
// let str = "hi";
// console.log(isNaN(str));//TRUE

// let x = 3;
// let str = "finite";
// console.log(isFinite(x));
// console.log(isFinite(str));
// console.log(isFinite(Infinity));
// console.log(isFinite(10 / 0));//UNDEFINED

//ISINTIGER()
// let x = 3;
// let str = "integer";
// console.log(Number.isInteger(x));
// console.log(Number.isInteger(str));
// console.log(Number.isInteger(Infinity));
// console.log(Number.isInteger(2.4));

//SPECIFING DECIMAL PLACES
// let x = 1.23456;
// let newX = x.toFixed(2);
// console.log(newX);


// let newX2 = x.toPrecision(2); 
// console.log(x, newX2);
