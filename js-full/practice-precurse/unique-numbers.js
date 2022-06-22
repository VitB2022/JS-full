/* eslint-disable prettier/prettier */
const uniqueCount = (array) => {
    if (!Array.isArray(array)) {
        return null;
    }
    let uniqueArray = [];
    if (array.length > 0) {
        uniqueArray = array.filter((item, pos) => array.indexOf(item) === pos);
    }
    return uniqueArray.length;
};

// examples
console.log(uniqueCount([1, 4, 8, 4])); // ==> 3
console.log(uniqueCount([1, 4, 1, 8, 3, 4, 8, 8])); // ==> 4