/* eslint-disable prettier/prettier */
function mergeObjectsV1(obj1, obj2) {

    const objRes = Object.assign(obj1, obj2);

    return objRes;

}

function mergeObjectsV2(obj1, obj2) {
    const objRes = Object.assign(obj2, obj1);

    return objRes;
}

function mergeObjectsV3(obj1, obj2) {
    const objRes = {...obj1, ...obj2 };

    return objRes;
}

function mergeObjectsV4(obj1, obj2) {
    const objRes = {...obj2, ...obj1 };

    return objRes;
}

// examples
const obj1 = {
    name: 'Tom',
    age: 17,
};

const obj2 = {
    name: 'Bob',
    student: false,
};

// console.log(mergeObjectsV1(obj1, obj2)); // ==> { name: 'Bob', age: 17, student: false }
// console.log(mergeObjectsV2(obj1, obj2)); // ==> { name: 'Tom', age: 17, student: false }
// console.log(mergeObjectsV3(obj1, obj2)); // ==> { name: 'Bob', age: 17, student: false }
// console.log(mergeObjectsV4(obj1, obj2)); // ==> { name: 'Tom', age: 17, student: false }