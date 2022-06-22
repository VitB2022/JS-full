/* eslint-disable prettier/prettier */
function buildObject(keysList, valuesList) {

    const obj = {};
    for (let keys in keysList, valuesList) {
        obj[keysList[keys]] = valuesList[keys];
    }
    return obj;

}
// examples
const keys = ['name', 'address', 'age'];
const values = ['Bob', 'Ukraine', 34];

const result = buildObject(keys, values);
// ==> { name: 'Bob', address: 'Ukraine', age: 34 }

console.log(result);