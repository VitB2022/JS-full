/* eslint-disable prettier/prettier */
function getKeys(obj) {

    const arr = Object.keys(obj);

    arr.forEach(elem => console.log(elem));

}

getKeys({ name: 'Denis', city: 'Warsaw', englishLevel: 'A1' });
// name
// city
// englishLevel