/* eslint-disable prettier/prettier */
const superRound = (num, prec) => {
    /*
    let arr = [];
    let n = 1;

    for (let i = 1; i <= prec; i++) {

        n *= 10;

    }

    arr[0] = parseFloat(Math.floor(num * n) / n);
    arr[1] = parseFloat(Math.trunc(num * n) / n);
    arr[2] = parseFloat(Math.ceil(num * n) / n);
    arr[3] = parseFloat(Math.round(num * n) / n);
    arr[4] = parseFloat(num.toFixed(prec));

    return arr;
*/

    let arr = [];

    arr[0] = parseFloat(Math.floor(num * 10 ** prec) / 10 ** prec);
    arr[1] = parseFloat(Math.trunc(num * 10 ** prec) / 10 ** prec);
    arr[2] = parseFloat(Math.ceil(num * 10 ** prec) / 10 ** prec);
    arr[3] = parseFloat(Math.round(num * 10 ** prec) / 10 ** prec);
    arr[4] = parseFloat(num.toFixed(prec));

    return arr;
}

// examples
console.log(superRound(11.12556, 3)); // ==> [11.12, 11.12, 11.13, 11.13, 11.13]
console.log(superRound(6.111125, 2)); // ==> [6.11, 6.11, 6.11, 6.11, 6.11]