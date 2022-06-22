/* eslint-disable prettier/prettier */

function sortDesc(array) {
    return [...array].sort((a, b) => b - a);
}
console.log(sortDesc([3, 7, 12, 23, 1]));

// return array.slice().sort((a, b) => b - a);