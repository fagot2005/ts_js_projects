function printPoint(point: { x: number; y: number }): void {
  console.log(`Our coordinate x=${point.x}, and y=${point.y}`);
}

interface Point {
  x: number;
  y: number;
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

printPoint(myPoint1);
printPoint(myPoint2);
