/* eslint-disable prettier/prettier */
const flatArray = arr => {

    return [...arr].flat().sort((a, b) => a - b);

};

console.log(flatArray([9, 3, [5], -2, [5, 7], 77]));