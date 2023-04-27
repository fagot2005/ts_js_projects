function printPoint(point: { x: number; y: number }): void {
  console.log(`Our coordinate x=${point.x}, and y=${point.y}`);
}


function printUser(user: { firstName: string; lastName: string }): void {
  console.log(
    `Your first name - ${user.firstName.toUpperCase()}, and last name - ${user.lastName.toUpperCase()}`
  );
}

interface Point {
  x: number;
  y: number;
}

interface User {
  firstName: string;
  lastName: string;
}

const myPoint1: Point = {
  x: 200,
  y: 300,
};

const myPoint2 = {
  x: 400,
  y: 270,
  z: 560,
};

const user1: User = {
  firstName: "Petro",
  lastName: "Petrov",
};

const user2: User = {
  firstName: "Dmitro",
  lastName: "Dmitrenko",
};

printPoint(myPoint1);
printPoint(myPoint2);
console.log("=========================================================================")
printUser(user1);
printUser(user2);
