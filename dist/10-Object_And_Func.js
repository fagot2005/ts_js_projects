"use strict";
function printPoint(point) {
    console.log(`Our coordinate x=${point.x}, and y=${point.y}`);
}
function printUser(user) {
    console.log(`Your first name - ${user.firstName.toUpperCase()}, and last name - ${user.lastName.toUpperCase()}`);
}
const myPoint1 = {
    x: 200,
    y: 300,
};
const myPoint2 = {
    x: 400,
    y: 270,
    z: 560,
};
const user1 = {
    firstName: "Petro",
    lastName: "Petrov",
};
const user2 = {
    firstName: "Dmitro",
    lastName: "Dmitrenko",
};
printPoint(myPoint1);
printPoint(myPoint2);
console.log("=========================================================================");
printUser(user1);
printUser(user2);
