/* eslint-disable prettier/prettier */
const increaseEvenEl = (arr, delta) => {

    if (!Array.isArray(arr)) {
        return null;
    }
    let arrRes = [];

    arrRes = arr.map(elem => {

        if (elem % 2 === 0) {
            elem += delta;
        }
        return elem;
    });

    return arrRes;
}

console.log(increaseEvenEl([2, 5, 6, 8, 11, 9, 4], 20)); // [22, 5, 26, 28, 11, 9, 24]