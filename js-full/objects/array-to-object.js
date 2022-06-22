/* eslint-disable prettier/prettier */
const transformToObject = arr => {
    const obj = {};
    for (let keys in arr) {
        obj[arr[keys]] = arr[keys];
    }
    return obj;
};

// examples
console.log(transformToObject(['a', 17.1, 'John Doe']));
// ==> { a: 'a', '17.1': 17.1, 'John Doe': 'John Doe' }

/*
arr.forEach(elem => {

    obj [elem] = elem;
});

*/