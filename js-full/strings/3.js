/* eslint-disable prettier/prettier */
const splitString = (str, len = 10) => {
    if (typeof str !== 'string') { return null; }
    let arr = [];
    let startPos = 0;
    let dot = '.';


    while (startPos < str.length) {

        let newStr = str.substring(startPos, startPos + len);

        if (newStr.length < len) {
            dot = dot.repeat(len - newStr.length);
            newStr += dot;
        }

        arr.push(newStr[0] + newStr.slice(1));
        startPos += len;
    }
    return arr;
}

console.log(splitString('abcdefghijklmn', 4));
/*  Abcd
    Efgh
    Ijkl
    Mn..
*/
console.log(splitString('abcdefghijklmnop'));
console.log(splitString(555555));