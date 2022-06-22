const getAdults = obj => {

    const arr = Object.entries(obj);

    console.log(arr);

    const arrFiltered = arr.filter(user => user[1] >= 18);

    return arrFiltered.map(user => user[0]);
}

console.log(getAdults({ 'John Doe': 19, 'Tom': 17, 'Bob': 18 }));
// ['John Doe', 'Bob']

/* 
    let arr = [];

    for (let key in obj) {
        if (obj[key] >= 18) {
            arr.push(key);
        }

    }
    return arr;
    */