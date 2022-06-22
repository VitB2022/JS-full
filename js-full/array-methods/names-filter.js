/* eslint-disable prettier/prettier */
const filterNames = (arr, text) => {

    return arr.filter(elem => elem.includes(text) && elem.length > 5);
}




console.log(filterNames(
    ['John', 'Olivya', 'Oleksandr', 'Emanuel', 'Vanya', 'Nastya'], 'ya'));
// ['Olivya', 'Nastya']