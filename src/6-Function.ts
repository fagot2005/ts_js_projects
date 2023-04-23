let balanse: number = 1000;
let summOperation: number = 120;
let isAddSumma: boolean = true;

console.log(`Current balanse = ${balanse}`);

//function declaratoins

balanse = ChangeBalanse(summOperation, isAddSumma);
console.log(`Current balanse = ${balanse}`);

function ChangeBalanse(param: number, operation: boolean): number {
  if (operation) {
    return balanse + param;
  } else return balanse - param;
}

//function Expressions

let newBalanse = function (): number {
    let resalt: number = 0;
  if (isAddSumma) {
    resalt = balanse + summOperation;
    } else resalt = balanse - summOperation;
    
    return resalt
};

console.log(`Current balanse = ${balanse}`);
console.log(`Current new balanse = ${newBalanse()}`);
console.log("===========================================");


//Arrow functions

newBalanse = (): number => {
  if (isAddSumma) {
    return balanse + summOperation;
  } else return balanse + summOperation;
};

console.log(`Current balanse = ${balanse}`);
console.log(`Current new balanse = ${newBalanse()}`);
console.log("===========================================");
