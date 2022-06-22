/* eslint-disable prettier/prettier */

const getCustomersList = obj => {
    console.log(Object.entries(obj));
    return Object.entries(obj)
        .map(([id, customer]) => ({ id, ...customer }))
        .sort((a, b) => a.age - b.age);
}

/*
const getCustomersList = obj => {
    return Object.keys(obj)
        .reduce((acc, id) => {
            acc.push({ id, ...obj[id] });
            return acc;
        }, [])
        .sort((a, b) => a.age - b.age);
}
*/
const customers = {

    'customer-id-1': {
        name: 'William',
        age: 54
    },
    'customer-id-2': {
        name: 'Tom',
        age: 17
    }
};

console.log(getCustomersList(customers));