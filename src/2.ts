//Array of number
let array: number[] = [1, 2, 3, 4, 5];
console.log(array);
//Array of string

let arrayString: string[] = ["one", "two", "three"];
console.log(arrayString);

//Array of mix Data
let arrayMix1: (string | number)[] = [1, "one", 2, "two", "three", 3];
console.log(arrayMix1);

//Array of mix Data
let arrayMix2: (string | number | boolean)[] = [
  1,
  "one",
  2,
  "two",
  true,
  "three",
  false,
  3,
];
console.log(arrayMix2);

//Array of nested Data
let arrayMix3: number[][] = [
  [1, 2],
  [3, 4],
];
console.log(arrayMix3);

//Array of nested Data strimg and number
let arrayMix4: (number | string)[][] = [
  [1, "2"],
  ["hi", "two", 33],
];
console.log(arrayMix4);
console.log(arrayMix4[0].length);
console.log(arrayMix4[1].length);

//Tuple

let arrayTyple: [string, number] = ["One", 11];
console.log(arrayTyple);
