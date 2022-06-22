/* eslint-disable prettier/prettier */
const sum = arr => {

    if (!Array.isArray(arr)) {
        return null;
    }

    return arr.reduce((total, amount) => total + amount);

}
console.log(sum([2, 5, 6, 3, 0, 3, -1])); // Output: 18