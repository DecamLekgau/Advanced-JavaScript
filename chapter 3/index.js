"use strict";

// let arr1 = new Array("purple", "green", "yellow");
// let arr2 = ["black", "orange", "pink"];

// console.log(arr1);
// console.log(arr2);//better practice

// let arr3 = new Array(10);
// let arr4 = 10[10];

// console.log(arr3);
// console.log(arr4);

// let arr = ["hi there", 5, true];
// console.log(`${arr[0]} is a ${typeof(arr[0])})`);
// console.log(`${arr[1]} is a ${typeof(arr[0])})`);
// console.log(`${arr[2]} is a ${typeof(arr[0])})`);


// const arr = ["hi ther"];
// arr[0] = "new value";
// console.log(arr[0]);

//throws error becouse a value has been assigned in
// arr = ["nope, now you are overwriting the array"];

// let cars = ["Toyota", "Renault", "Volkswagen"];
// console.log(cars[0]);
// console.log(cars[1]);
// console.log(cars[2]);
// console.log(cars[3]);//it doesn't exist so it's undefined
// console.log(cars[-1]);

// cars[0] = "tesla";
// console.log(`overwritten index 0 is ${cars[0]}`);
// console.log(cars);

// cars[3] = "kia";
// cars[-1] = "fiat";
// console.log(cars[-1]);//value are now allocated
// console.log(cars[-1]);
// console.log(cars);

// let colors = ["black", "orange", "pink"];
// let booleans = [true, false, false, true];
// let emptyArray = [];

// console.log("Length of color:", colors.length);
// console.log("Length of booleans:", booleans.length);
// console.log("Length of empty Array:", emptyArray.length);

// let lastElement = colors[colors.length -1];

// console.log(lastElement);

// let  numbers = [12, 24, 36];
// numbers[5] = 48;
// console.log(numbers);
// console.log(`Elements in Numbers: ${numbers.length}`);


//*************PRACTICE EXERCESE 3.1************* */
// let list = ["Milk", "Bread", "Apples"];//an Array list

// console.log("Length of list:", list.length);//checking list in the console

// list[1] = "Bananas";
// console.log(list);

//*****************ARRAY METHODS********** */
// let favoritefruits = ["grapefruit", "orange", "lemon", "tangerine"];
// favoritefruits.push("tangerine");
// console.log(favoritefruits);


//SPLICE

// let arrOfShapes = ["circle", "triangle", "trapezoid", "pentagon"];
// arrOfShapes.splice(2, 1, "squre", "trapezoid");
// console.log(arrOfShapes); 

//CONCAT METHOD

// let arr5 = [1, 2, 3];
// let arr6 = [4, 5, 6];
// let arr7 = arr5.concat(arr6);
// console.log(arr7);
// let arr8 = arr7.concat(7, 8, 9);
// console.log(arr8);

/************MY OWN CONCAT METHOD PRACTICE************ */
// let arr2 = ["Thabo Dikamogelo"];
// let arr3 = ["Lekgau born in november 24/2002"];
// let arr4 = arr2.concat(arr3);
// console.log(arr4);

// let colors = ["black", "orange", "pink", "purple", "blue"];
// console.log(colors);
// //splice will pop
// colors.splice(4, 1);
// console.log(colors);
// //splice will shift
// colors.splice(0, 1);
// console.log(colors);

// let arr8 = [2, 6, 7, 8];
// let findvalue = arr8.find((e) => e === 6);
// let findvalue2 = arr8.find((e) => e ===10);
// console.log(findvalue, findvalue2); 

//finding using INDEXOF()
// let findvalue3 = arr8.indexOf(6);
// let findvalue4 = arr8.indexOf(10);//returns -1 bcz it doesn't exist
// console.log(findvalue3, findvalue4);

//SORTING
// let names = ["james", "Alicia", "Fatiha", "Maria", "Thabo"];
// console.log(names); 
// names.sort();//ascending order
// console.log(names);
// names.reverse();//descending order
// console.log(names);

//**************Multidimentional arrays************* */
//TWO DIMENSIONAL ARRAYS
// let someValues1 = [1, 2, 3];
// let someValues2 = [4, 5, 6];
// let someValues3 = [7, 8, 9];
// let arrOfArrays = [someValues1, someValues2, someValues3];
// console.log("arrOfArrays: ",arrOfArrays);
// let arrOfArrays2 = [[1, 2, 3], [4, 5, 6], [7, 8 ,9]];
// console.log("arrOfArrays2: ",arrOfArrays2);

// console.log(arrOfArrays[1][2]);

// let arrOfArrayOfArrays = [arrOfArrays, arrOfArrays];
// console.log("Multi-dimensional Array:", arrOfArrayOfArrays);

// //************OBJECTS************ */
// let dog = {
//     dogName: "JavaScript",
//     weight: 2.4,
//     color: "brown",
//     breed: "chihuahua",
//     age: 3,
//     burglarBiter: true
// };
// console.log(dog);

// let dogColor =dog["color"];
// let dogColor2 = dog.color;

// console.log(dogColor);
// console.log(dogColor2);

// dog.color = "blue";
// dog.weight = 2.3;
// console.log(dog);

// dog.age = "three";
// let variable = "age";

//EXERCISE 3.5
// const people = {friends:[]};
// const friend1 = {first: "Laurence", last: "Svekis", id: 1};
// const friend2 = {first: "jane", last: "Doe", id: 2};
// const friend3 = {first: "john", last: "Doe", id:3};
// people.friends.push(friend1, friend2, friend3);
// console.log(people);










