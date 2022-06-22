/* eslint-disable prettier/prettier */
/*
const getParsedIntegers = numbers => {

    const arrRes = numbers.map(item => {

        return Number.parseInt(item);
    });

    return arrRes;
}
*/
/*
const getParsedIntegersV2 = numbers => {

    const arrRes = numbers.map(item => {

        return parseInt(item);
    });

    return arrRes;
}
*/
/*
const getParsedFloats = numbers => {

    const arrRes = numbers.map(item => {

        return Number.parseFloat(item);
    });

    return arrRes;
}
*/

const getParsedFloatsV2 = numbers => {

    const arrRes = numbers.map(item => {

        return parseFloat(item);
    });

    return arrRes;
}
console.log(getParsedFloatsV2(['    1.3cvf', '17.8scdcd', 'seven']));