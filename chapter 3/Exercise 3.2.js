const myList = [];

myList.push("Milk", "Bread", "Apples");

myList.splice(1, 1, "Bananas", "Eggs");

const removeLast = myList.pop();
console.log(removeLast);
myList.sort();
console.log(myList.indexOf("Milk"));
myList.splice(1, 0, "Carrots", "Lettuce");
const myList2 = ["Juice", "Pop"];
const finalList = myList.concat(myList2, myList2);
console.log(finalList.lastIndexOf("Pop"));
console.log(finalList);