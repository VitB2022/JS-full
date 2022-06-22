const student = {
    name: 'Tom',
};

function sayName() {
    console.log(this.name);
}

sayName.apply(student);

sayName.apply({ name: 'Bruce' });

const company = {
    companyName: 'Microsoft'
};

function greeting(firstName, lastName) {
    console.log(`Hello, ${firstName} ${lastName}. Welcome to the ${this.companyName}`);
}

greeting.apply(company, ["Bob", "Marley"]);

const country = {
    countryName: 'Ukraine',
    capital: 'Kyiv'
};

function getPopulation(population) {
    return `Population in ${this.countryName} is ${population}`;
}

const result = getPopulation.apply(country, [43000]);
console.log(result);

const transaction = {
    amount: 1200,
    operation: 'sell',
    currency: 'USD',
    exchange: 'NYSE',
    printTransaction() {
        console.log(`${this.amount} ${this.currency} - ${this.operation} on ${this.exchange}`);
    }
}

const anotherTransaction = {
    amount: 400,
    operation: 'buy',
    currency: 'USD',
    exchange: 'NASDAQ',
};

transaction.printTransaction.apply(anotherTransaction);