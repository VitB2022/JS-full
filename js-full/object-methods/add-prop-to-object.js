/* eslint-disable prettier/prettier */
function addPropertyV1(userData, userId) {
    userData.id = userId;
    return userData;
}

function addPropertyV2(userData, userId) {

    return Object.assign(userData, { id: userId });
}

function addPropertyV3(userData, userId) {

    const objNew = Object.assign({}, userData);
    const objNew1 = Object.assign(objNew, { id: userId });

    return objNew1;
}

function addPropertyV4(userData, userId) {

    const objNew = Object.assign({...userData }, { id: userId });
    console.log(user);
    return objNew;
}

// examples
const user = {
    name: 'Sam',
};

// console.log(addPropertyV1(user, '1234567')); 
// ==> { name: 'Sam', id: '1234567' }
console.log(addPropertyV4(user, '1234567'));
// ==> { name: 'Sam', id: '1234567' }