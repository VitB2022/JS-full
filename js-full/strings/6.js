/* eslint-disable prettier/prettier */
const reverseString = str => {
    if (typeof str !== 'string') { return null; }
    const arr = str.split('');

    arr.reverse();

    return arr.join('');
}
console.log(reverseString('abcd'));