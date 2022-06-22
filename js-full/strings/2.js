/* eslint-disable prettier/prettier */
const sortContacts = (contacts, isAsc) => {
    if (!Array.isArray(contacts)) {
        return null;
    }
    const result = contacts.sort((a, b) => {
        if (isAsc === true) {
            return a.name.localeCompare(b.name);
        }
        return b.name.localeCompare(a.name);
    });
    return result;
}

const contacts = [

    {
        name: 'Tom',
        tel: '555-55-55',
    },

    {
        name: 'John',
        tel: '222-22-22',
    },

    {
        name: 'Ann',
        tel: '333-33-33'
    },
];

console.log(sortContacts(contacts, true));
console.log(sortContacts(555, true));