/* eslint-disable prettier/prettier */
const getTotalPrice = numbers => {

    let sum = 0;
    numbers.map(num => {

        sum += Math.floor(num * 100) / 100;

    });

    return '$' + sum.toFixed(2);

}

console.log(getTotalPrice([1.598, 3, 0.31])); // 4,90