"use strict";
const myCar = {
    countOfDors: 4,
    color: "Blue",
    brand: "BMW",
    power: 95,
};
console.log(`${myCar.brand} - this is my ${myCar.color}, and this is ${myCar.countOfDors} and ${myCar.power}`);
myCar.power = 230;
console.log("=====================================");
console.log(`${myCar.brand} - this is my ${myCar.color}, and this is ${myCar.countOfDors} and ${myCar.power}`);
