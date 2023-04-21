"use strict";
// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }
let numArray = [
    "One",
    10,
    20,
    "Two",
    30,
    50,
    "Five",
    60,
    70,
    80,
    90,
];
// for (let i: number = 0; i < numArray.length; i++) {
//   console.log(numArray[i]);
// }
for (let item of numArray.entries()) {
    console.log(item[0], item[1]);
}
console.log("==============================");
for (let [i, item] of numArray.entries()) {
    //console.log(item[0], item[1]);
    console.log(`${i + 1} - ${item}`);
}
