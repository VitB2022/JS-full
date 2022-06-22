/* eslint-disable prettier/prettier */
const squareArray = numbers => {

    if (!Array.isArray(numbers)) {
        return null;
    }
    return numbers.map(elem => elem * elem);


};

console.log(squareArray([3, 5, 2])); // [9, 25, 4]