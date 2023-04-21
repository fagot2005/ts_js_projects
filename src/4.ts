let num1: number = 90;
let num2: number = 32;
let num3: number = 12;

if (num1 > num2) {
  console.log(`${num1} is biger than ${num2}`);
} else {
  console.log(`${num1} is less than ${num2}`);
}

if (num1 < 10) {
  console.log(`${num1} is less than 10`);
} else if (num1 < 20) {
  console.log(`${num1} is less than 20`);
} else if (num1 < 30) {
  console.log(`${num1} is less than 30`);
} else {
  console.log(`${num1} is biger than any number`);
}

//Tornar operator
num1<10 ? console.log("10") : console.log("20")
