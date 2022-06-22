const getSpecialNumbers = numbers => numbers.filter(num => num % 3 === 0);

console.log(getSpecialNumbers([3, 7, 12, 23, 1]));