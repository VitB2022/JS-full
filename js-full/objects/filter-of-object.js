/* eslint-disable prettier/prettier */
const getAdults = obj => {
    let resultObj = {};
    for (let key in obj) {
        if (obj[key] >= 18) {
            resultObj[key] = obj[key];
        }
    }

    return resultObj;
};

// examples
console.log(getAdults({ 'John Doe': 19, Tom: 17, Bob: 18, Jan: 22 }));
// ==> { 'John Doe': 19, Bob: 18, Jan: 22 }
console.log(getAdults({ Andrey: 7, Ann: 56 })); // ==> { Ann: 56 }