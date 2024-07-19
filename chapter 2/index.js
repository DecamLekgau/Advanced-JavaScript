"use strict";

// let singleString = 'Hi there';
// let doubleString = "How are you?";

// console.log(singleString);
// console.log(doubleString);

// let funActivity = "Let's learn JS";
// console.log(funActivity);

// let language = "JavaScript";
// let message = `Let's learn ${language}`;
// console.log(message);

// let str = "Helli, what's your name? is it \"Mike\"?";
// console.log(message);

// let str2 = 'Hello, what\'s your name? is it "Mike"?';
// console.log(str2);

// let str3 = "New \nline.";
// let str4 = "I'm containing a backslash: \\!";

// console.log(str3);
// console.log(str4);

// let intNr = 1;
// let decNr = 1.5;
// let expNr = 1.4e15;
// let octNr = 0o10; //decimal version would be 8
// let hexNr = 0x3E8; //decimal version would be 1000
// let binNr = 0b101; //decimal version would be 5

// console.log(intNr);
// console.log(decNr);
// console.log(expNr);
// console.log(octNr);
// console.log(hexNr);
// console.log(binNr);

// let intNr2 = 3434;
// let intNr3 = -111;
// let decNr2 = 45.78;
// let binNr2 = 0b100;

// console.log(intNr2);
// console.log(intNr3);
// console.log(decNr2);
// console.log(binNr2);

/*****************BOOLEANS*************** */
// let bool1 = false;
// let bool2 = true;

// let lightIsOn = !true;
// if(lightIsOn) {
//     console.log("The light is on!");
// }else {
//     console.log("The light off!");
// };


/*****************Symbols*************** */

// let str1 = "JavaScript is fun!";
// let str2 = "JavaScript is fun!";
// console.log("These two strings are the same:", str1 === str2);
// let sym1 = Symbol("JavaScript is fun!");
// let sym2 = Symbol("JavaScript is fun!");
// console.log("These two Symbols are the same:", sym1 === sym2);

/*************UNDEFINED AND NULL************** */

// let terribleThingToDo = undefined;
// let lastName;
// console.log("Same undefined:", lastName === terribleThingToDo);
// let betterOption = null;
// console.log("Same null:", lastName === betterOption);

/****************types of variables************** */
// let str = "Hello";
// let nr = 7;
// let bigNr = 12345678901234n;
// let bool = true;
// let sym = Symbol("unique");
// let undef = undefined;
// let unknown = null;
// console.log("str", typeof(str));
// console.log("nr", typeof(nr));
// console.log("bigNr", typeof(bigNr));
// console.log("bool", typeof(bool));
// console.log("sym", typeof(sym));
// console.log("undef", typeof(undef));
// console.log("unknown", typeof(unknown));

//**************CONVERTING DATA TYPES************* */
// let nr1 = 2;
// let nr2 = Number("2");
// console.log(nr1 + nr2); 

// let nrToStr = 6;
// nrToStr = String(nrToStr);
// console.log(`nrToStr is a ${typeof (nrToStr)}`);
// let strToNr = "12";
// strToNr = Number(strToNr);
// console.log(`strToNr is a ${typeof (strToNr)}`);
// let strToBool = "any string will return true";
// strToBool = Boolean(strToBool);
// console.log(`strToBool, ${typeof (strToBool)}`);

// EXERCISE 2.1
// let str1 = 'Laurence';
// let str2 = "Svekis";
// let val1 = undefined;
// let val2 = null;
// let myNum = 1000;

// console.log(`str1 (${str1} is a ${typeof (str1)})`);
// console.log(`str2 (${str2} is a ${typeof (str2)})`);
// console.log(`val1 (${val1} is a (${typeof (val1)})`);
// console.log(`val2 (${val2} is a (${typeof (val2)})`);
// console.log(`myNum(${myNum} is a ${typeof (myNum)})`);

//*****************OPERATORS**************** */  
//EXERCISE 2.2
// let myName = "Thabo";
// let age = 19;
// let cancodeJS= true;

// console.log=(`Hello my name is ${myName}, i am ${age} years old and i can code JavaScript: ${cancodeJS}`);

//EXERCISE 2.3
// let a = Number(prompt("Enter an opposite side length"));
// let b = Number(prompt("Entter an adjacent side length"));
// function pythag(a, b) {
//     let c = Math.sqrt((a ** 2) + (b **  2));
//     return c;
// }
// alert(`The hypotenuse of a 
//     right-angled triagles with 2 sides of 4 units 
//     and 3 unites is ${pythag(a, b)} units`);

    //EXERCISE 2.4
   
    // let a = 1;
    // let b = 2;
    // let c = 3;

    // a + b;
    // a / c;
    // c = c % b ;

    // console.log(`a is ${a}, b is ${b}, c is ${c}`);

    // let x = 5;
    // let y = "5";
    // console.log(`x == y is ${x == y }`);//both are read as 5
    // console.log(`x === y is ${x === y}`);//the data types are not the same

    // console.log(`x != y is ${x != y}` );
    // console.log(`x !== y is ${x !== y}`);

    // let x = 5;
    // let y = 6;
    // console.log(y > x );
    // console.log(y >= x );
    // console.log(y < x);
    // console.log(y <= y);

//************AND(&&)************ */    
    // let x = 1;
    // let y = 2;
    // let z = 3;
    // console.log(x < y && y <z);//true
    // console.log(z > y && y > z);//false

    // //*********OR(||)********* */

    // console.log(x > y || y < z);//true
    // console.log(x > y || y > z);//false

    // //*************NOT(!)************ */ 
    // x = false;
    // console.log(!x);//true
    // console.log("")
    // x = 1;
    // console.log(!(x < y));//false
