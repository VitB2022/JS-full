/* eslint-disable prettier/prettier */
/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
function getKeys(obj) {

    for (let key in obj) {

        console.log(key);

    }

}

getKeys({ name: 'Bob', age: 18, hobby: 'js' });
/* 
name
age
hobby
*/