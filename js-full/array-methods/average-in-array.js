/* eslint-disable prettier/prettier */
const arrAverage = arr => {

    if (!Array.isArray(arr)) {
        return null;
    }

    return arr.reduce((total, amount) => (total + amount)) / arr.length;
}

console.log(arrAverage([2, 5, 6, 3])); // 4