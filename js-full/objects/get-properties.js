/* eslint-disable prettier/prettier */
const pickProps = (obj, props) => {

    let resultObj = {};

    for (let i = 0; i < props.length; i++) {
        const keys = props[i];
        if (keys in obj) {
            resultObj[keys] = obj[keys];
        }
    }

    return resultObj;
};

// examples
console.log(pickProps({ a: 1, b: 2, c: 3 }, ['a', 'c']));
// ==> { a: 1, c: 3 }
console.log(pickProps({ a: 1, b: 2, c: 3 }, ['a', 'c', 'd', 'hex']));
// ==> { a: 1, c: 3 }

/*
props.reduce((acc, cur) => {
    if (cur in obj) { // если поле есть в объекте
        acc[cur] = obj[cur]; // записываем в результат
    }
    return acc;
},
{}) // начальное значение пустой массив
*/