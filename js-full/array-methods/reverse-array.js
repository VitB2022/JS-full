const reverseArray = numbers => {

    if (!Array.isArray(numbers)) {
        return null;
    }
    return numbers.slice().reverse();


};

console.log(reverseArray([3, 5, 2])); // [2, 5, 3]