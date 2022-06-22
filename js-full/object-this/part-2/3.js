export function sumOfSquares() {
    return [...arguments].reduce((acc, elem) => {

        return acc + elem * elem;

    }, 0);
}

console.log(sumOfSquares(4, 2, 3));