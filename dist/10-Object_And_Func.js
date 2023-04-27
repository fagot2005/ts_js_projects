"use strict";
function printPoint(point) {
    console.log(`Our coordinate x=${point.x}, and y=${point.y}`);
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
printPoint(myPoint1);
printPoint(myPoint2);
