/* eslint-disable prettier/prettier */
const getPeople = obj => {
    let arr = Object.values(obj).flat();
    console.log(arr);
    let arrayNames = [];

    arr.forEach(elem => arrayNames.push(elem.name));

    return arrayNames;
};

const rooms = {

    room1: [
        { name: 'Jack' },
        { name: 'Andrey' },
        { name: 'Ann' }
    ],
    room2: [
        { name: 'Vasya' },
        { name: 'Jon' },
    ],

    room3: [
        { name: 'Petro' },
        { name: 'Alex' },
    ]
};

console.log(getPeople(rooms));
// ['Jack', 'Andrey', 'Ann', 'Vasya', 'Jon', 'Petro', 'Alex']