"use strict";
let balanse = 1000;
let summOperation = 120;
let isAddSumma = true;
console.log(`Current balanse = ${balanse}`);
//function declaratoins
balanse = ChangeBalanse(summOperation, isAddSumma);
console.log(`Current balanse = ${balanse}`);
function ChangeBalanse(param, operation) {
    if (operation) {
        return balanse + param;
    }
    else
        return balanse - param;
}
//function Expressions
let newBalanse = function () {
    let resalt = 0;
    if (isAddSumma) {
        resalt = balanse + summOperation;
    }
    else
        resalt = balanse - summOperation;
    return resalt;
};
console.log(`Current balanse = ${balanse}`);
console.log(`Current new balanse = ${newBalanse()}`);
console.log("===========================================");
//Arrow functions
newBalanse = () => {
    if (isAddSumma) {
        return balanse + summOperation;
    }
    else
        return balanse + summOperation;
};
console.log(`Current balanse = ${balanse}`);
console.log(`Current new balanse = ${newBalanse()}`);
console.log("===========================================");
