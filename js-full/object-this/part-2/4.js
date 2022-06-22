function saveFuncCalls(func) {
    return
}

// example 1
function sum(firstNum, secondNum) {
    return firstNum + secondNum;
}

const sumWithMemory = saveFuncCalls(sum);
console.log(sumWithMemory(4, 2)); // ===> 6
console.log(sumWithMemory(9, 1)); // ===> 10

sumWithMemory.callsHistory; // ===> [ [4, 2], [9, 1] ]