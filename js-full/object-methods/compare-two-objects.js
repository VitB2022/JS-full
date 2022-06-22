/* eslint-disable prettier/prettier */
function compareObjects(obj1, obj2) {

    const props1 = Object.keys(obj1);
    const props2 = Object.keys(obj2);

    if (props1.length !== props2.length) {
        return false;
    }

    for (let i = 0; i < props1.length; i += 1) {

        if (obj1[props1[i]] !== obj2[props1[i]]) {
            return false;

        }
    }

    return true;

    /*   const props1 = Object.getOwnPropertyNames(obj1);
    const props2 = Object.getOwnPropertyNames(obj2);

    if (props1.length !== props2.length) {
        return false;
    }

    for (let i = 0; i < props1.length; i += 1) {

        if (obj1[props1[i]] !== obj2[props1[i]]) {
            return false;
        }
    }

    return true;
    */
}


// examples
const obj1 = {
    name: 'Tom',
    age: 17,
};

const obj2 = {
    name: 'Bob',
    age: 17,
};

const obj3 = {
    name: 'Bob',
    age: 17,
    student: false,
};

const obj4 = {
    name: 'Tom',
    age: 17,
};

console.log(compareObjects(obj1, obj2)); // ==> false
console.log(compareObjects(obj2, obj3)); // ==> false
console.log(compareObjects(obj1, obj4)); // ==> true