"use strict";

// console.dir(document.body);

// console.dir(document.body.children.forest.children.tree2.children.shrubbery.children.treasure);

// console.dir(document.body.childNodes[3].childNodes[3].childNodes[1].childNodes[1]);

// console.dir(document.body.children.forest.children.tree2.parentElement);
// console.dir(document.body.children.forest.children.tree2);
// console.dir(document.body.children.forest.children.tree2.previousElementSibling);

//*************SELCTING ELEMENTS AS OBJECTS************** */
// console.dir(document.body.children.greetings);


// //CHANGING IN A TEXT
// document.body.children.innerText = "Bye!";

// document.body.children.innerText = "<br>Bye!";


//**************ACCESSING ELEMENTS************* */
//BY ID
// let item1 = document.getElementById("two");
// item1.innerHTML = "<i>Hey!</i>"
// console.log(item1);
//BY TAG NAME
// let tags = document.getElementsByTagName("div");
// console.log(tags);
// let tag3 = document.getElementsByTagName("div").item3
// console.log(tag3);

// let heading = document.getElementsByTagName("h1");
// console.log(heading);

// //BY CLASS
// let ex = document.getElementsByClassName("example");
// console.log(ex);

// //BY CSS SELECTOR
// let p = document.querySelectorAll("p");
// console.log(p);

// //QUERYSELECTOR() AND QUERYSELECTORALL()
// let firstDiv = document.querySelector("div");
// console.log(firstDiv);

// let sth = document.querySelector(".something");
// console.log(sth);

// let allDivs = document.querySelectorAll("div");
// console.log(allDivs);

//EVENT CLICK HANDELR
// function stop() {
//     alert(`Ouch! Stopt it`);
// }

// document.getElementById("one").onclick = function () {
//     alert("Ouhch! Stop it!");
// }

//***************THIS AND THE DOM*************** */
// function reveal(el) {
//     console.log(el.parentElement);
// }

//***************MANUPILATING ELEMENT STYLE************** */
// function toggleDisplay() {
//     let p = document.getElementById("magic");
//     if (p.style.display === "none") {
//         p.style.display = "block";
//     } else {
//         p.style.display = "none";
//     }
// }

// function rainbowify() {
//     let divs = document.getElementsByTagName("div");
//     for (let i = 0; i < divs.length; i++) {
//         divs[i].style.backgroundColor = divs[i].id;
//     }
// }

/********************CHANGING ELEMENT CLASSES************** */
//ADDING
// function disappear(){
//     document.getElementById("shape").classList.add("hide");
//     }

//REMOVING
// function change() {
//     document.getElementById("shape").classList.remove("blue");
// }
