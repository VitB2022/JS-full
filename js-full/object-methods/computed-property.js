/* eslint-disable prettier/prettier */
function addPropertyV1(obj, key, value) {

    obj[key] = value;
    return obj;
}

function addPropertyV2(obj, key, value) {

    return Object.assign(obj, {
        [key]: value
    });
}

function addPropertyV3(obj, key, value) {

    const objNew = Object.assign({}, obj);
    const objNew1 = Object.assign(objNew, {
        [key]: value
    });

    return objNew1;
}

function addPropertyV4(obj, key, value) {

    const objNew = Object.assign({...obj }, {
        [key]: value
    });

    return objNew;
}

// examples
const transaction = {
    value: 170,
};
console.log(addPropertyV1(transaction, 'currency', 'USD'));
// ==> { value: 170, currency: 'USD' }

console.log(addPropertyV2(transaction, 'currency', 'USD'));
// ==> { value: 170, currency: 'USD' }

console.log(addPropertyV3(transaction, 'currency', 'USD'));
// ==> { value: 170, currency: 'USD' }

console.log(addPropertyV4(transaction, 'currency', 'USD'));
// ==> { value: 170, currency: 'USD' }