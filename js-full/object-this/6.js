const student = {
    name: 'Tom',
};

function sayName() {
    console.log(this.name);
}

export let sayStudentName = sayName.bind(student);

sayStudentName();

export let sayBruceName = sayName.bind({ student, name: 'Bruce' });

sayBruceName();

const company = {
    companyName: 'Microsoft',
};

function greeting(firstName, lastName) {
    console.log(`Hello, ${firstName} ${lastName}. Welcome to the ${this.companyName}`);
}

export const specialGreeting = greeting.bind(company, 'Bob', 'Marley');
specialGreeting();

const country = {
    countryName: 'Ukraine',
    capital: 'Kyiv',
};

function getPopulation(population) {
    return `Population in ${this.countryName} is ${population}`;
}

export const getUkrainePopulation = getPopulation.bind(country, 43000);
console.log(getUkrainePopulation());

const transaction = {
    amount: 1200,
    operation: 'sell',
    currency: 'USD',
    exchange: 'NYSE',
    printTransaction() {
        console.log(`${this.amount} ${this.currency} - ${this.operation} on ${this.exchange}`);
    },
};

const anotherTransaction = {
    amount: 400,
    operation: 'buy',
    currency: 'USD',
    exchange: 'NASDAQ',
};

export const printSpecialTransaction = transaction.printTransaction.bind(anotherTransaction);
printSpecialTransaction();