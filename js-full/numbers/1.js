/* eslint-disable prettier/prettier */
/*
const getFiniteNumbers = numbers => {

    const arrRes = numbers.filter(item => {

        return Number.isFinite(item);
    });

    return arrRes;
}

const getFiniteNumbersV2 = numbers => {

    const arrRes = numbers.filter(item => {

        return isFinite(item);
    });

    return arrRes;
}

const getNaN = numbers => {

        const arrRes = numbers.filter(item => {

            return Number.isNaN(item);
        });

        return arrRes;
    }

// console.log(getFiniteNumbersV2([17, '17', -7, NaN]));
const getNaNV2 = numbers => {

    const arrRes = numbers.filter(item => {

        return isNaN(item);
    });

    return arrRes;
}
*/

// console.log(getNaNV2([17, '17', -7, NaN]));

const getIntegers = numbers => {

    const arrRes = numbers.filter(item => {

        return Number.isInteger(item);
    });

    return arrRes;
}

console.log(getIntegers([17, '17', -7, 70.0, 75.5, NaN]));