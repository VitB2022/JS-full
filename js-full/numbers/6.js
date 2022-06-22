/* eslint-disable prettier/prettier */
const getRandomNumbers = (length, from, to) => {
    if ((to - from) <= Number.isInteger(1)) { return null; }

    return [...new Array(length)]
        .map(() => Math.floor(Math.random() * (to - from) + Math.ceil(from)));

}

// examples
console.log(getRandomNumbers(5, 1.4, 1.5)); // ==> [2, 2, 2, 3, 2]
console.log(getRandomNumbers(5, 1.4, 3.22)); // ==> [3, 2, 2, 2, 2]
console.log(getRandomNumbers(5, 1.4, 3.22)); // ==> [3, 3, 2, 3, 2]