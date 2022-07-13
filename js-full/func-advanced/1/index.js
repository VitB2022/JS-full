const calc = initnumber => {
  let result = initnumber;

  const calculator = {
    add(number) {
      result += number;
      return this;
    },

    subtract(number) {
      result -= number;
      return this;
    },

    mult(number) {
      result *= number;
      return this;
    },

    div(number) {
      result /= number;
      return this;
    },

    result() {
      return result;
    },
  };
  return calculator;
};

// const res = calc(3).add(2).mult(4).div(10).subtract(5).result();
// console.log(res);
