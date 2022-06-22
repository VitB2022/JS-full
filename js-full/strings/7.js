/* eslint-disable prettier/prettier */

const cleanTransactionsList = arrTransactions => {

    return arrTransactions.filter(elem => elem == Number(elem)).map(elem => {
        return '$' + Number(elem).toFixed(2);
    });
}

console.log(cleanTransactionsList(['  1.9 ', '16.4', 17, ' 1 dollar ']));
// ['$1.90', '$16.40', '$17.00']