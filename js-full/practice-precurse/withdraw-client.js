/* eslint-disable prettier/prettier */

function withdraw(clients, balances, client, amount) {

    const clientBalance = clients.indexOf(client);
    return (balances[clientBalance] > amount) ?
        "Остаток на счету " + (balances[clientBalance] -= amount) +
        "\nОстаток на счету всех клиентов " + balances :
        -1;

}

console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50));
// 37
// [1400, 37, -6]
console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10));
// -1
// [1400, 87, -6]