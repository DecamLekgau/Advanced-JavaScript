"use strict";

//function 
// function Dog(dogName, weight, color, breed) {
//     this.dogName = dogName;
//     this.weight = weight;
//     this.color = color;
//     this.breed = breed;
// }

//class
// class Dog {
// constructor(dogName, weight, color, breed) {
//     this.dogName = dogName;
//     this.weight = weight;
//     this.color = color;
//     this.breed = breed;
// }
// }


//object
// let dog = new Dog("Jacky", 30, "brown", "labrador");
// console.log(dog.dogName, "is a ", dog.breed, "and weighs", dog.weight,
//     "kg.");
    
    // class person {
    //     constructor(firstname, lastname) {
    //         this.firstname = firstname;
    //         this.lastname = lastname;
    //     }
    // }

    // let p = new person("Thabo", "Lekgau");
    // alert(`Hi there, ${p.firstname} ${p.lastname}`)

    //practice exercise 7.1
// class person{
//     constructor(firstname, lastname) {
//         this.firstname = firstname;
//         this.lastname = lastname;
//     }
// }

// class person{
//     constructor(firstname, lastname) {
//         this.firstname = firstname;
//         this.lastname = lastname;
//     }
// }
// let p = new person("Mathar", "Phetla");
// console.log(`Hi there, ${p.firstname} ${p.lastname}`)

//  class person {
//         constructor(firstname, lastname) {
//             this.firstname = firstname;
//             this.lastname = lastname;
//         }
//     }

//     let p = new person("Thabo", "Lekgau");
//     alert(`Hi there, ${p.firstname} ${p.lastname}`)


// class Person {
//     afirstname;
//     alastname
//     constructor(firstname, lastname){
//         if (firstname.startsWith("M")) {
//             this.afirstname = firstname;
//         } else {
//             this.afirstname = "M" + firstname;
//         }
//         this.alastname = lastname;
//     }
// } 

// let p = new Person("Kay", "Moon");
// console.log("Hi i'm " + p.afirstname);

//supper/ parent class
// class Vehicle {
//     constructor(color, currentSpeed, maxSpeed) {
//     this.color = color;
//     this.currentSpeed = currentSpeed;
//     this.maxSpeed = maxSpeed;
//     }
//     move() {
//     console.log("moving at", this.currentSpeed);
//     }
//     accelerate(amount) {
//     this.currentSpeed += amount;
//     }
//    }

//    //subclass
//    class Motorcycle extends Vehicle {
//     constructor(color, currentSpeed, maxSpeed, fuel) {
//     super(color, currentSpeed, maxSpeed);
//     this.fuel = fuel;
//     }
//     doWheelie() {
//     console.log("Driving on one wheel!");
//     }
//    }
//    let motor = new Motorcycle("Black", 0, 250, "gasoline");
//    console.log(motor.color);
//    motor.accelerate(50);
//    motor.move();

//Prototype
// class Person {
//     constructor(firstname, lastname) {
//     this.firstname = firstname;
//     this.lastname = lastname;
//     }
//     greet() {
//     console.log("Hi there!");
//     }
//    }
//    Person.prototype.introduce = function () {
//     console.log("Hi, I'm", this.firstname);
//    }
  
// let p = new Person("Maria", "Saga");
// console.log(p.favoriteColor);
// p.introduce();
