export const createCalculator = () => {
    let memory = 0;

    function add(number) {
        memory += number;
    }

    function decrease(number) {
        memory -= number;
    }

    function reset() {
        memory = 0;
    }

    function getMemo() {
        return memory;
    }

    return {
        add,
        decrease,
        reset,
        getMemo,
    }

}

const calc1 = createCalculator();
const calc2 = createCalculator();

calc1.add(7);
calc1.reset();
console.log(calc1.getMemo());

calc2.add(8);

console.log(calc2.getMemo());