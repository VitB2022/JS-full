/* eslint-disable prettier/prettier */

const countOccurrences = (text, str) => {
    if (str === '') { return null; }

    let len = text.split(str).length;

    return --len;
};

console.log(countOccurrences('abefhiefjef', 'ef'));

// 2

console.log(countOccurrences('ef'));
// 0

console.log(countOccurrences('abefhiefjef', ''));