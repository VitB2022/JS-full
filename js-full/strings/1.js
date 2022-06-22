/* eslint-disable prettier/prettier */

const splitText = (str, len = 10) => {
    const strArr = [];
    let startPos = 0;
    if (typeof str !== 'string') { return null; }

    while (startPos < str.length) {

        let chunk = str.substring(startPos, startPos + len);

        strArr.push(chunk[0].toUpperCase() + chunk.slice(1));

        startPos += len;
    }
    return strArr.join('\n');

}

/*
function splitText(str, len = 10) {
    if (typeof str !== 'string') { return null; }
    const arr = str.match(new RegExp(`.{${len}}`, 'g'))
    arr.map(el => el[0].toUpperCase() + el.slice(1))
    return arr.join('\n');
}
*/
console.log(splitText('abcdefghijklmnop', 4));
/*  Abcd
    Efgh
    Ijkl
    Mnop
*/
console.log(splitText('abcdefghijklmnop'));
console.log(splitText(555555));