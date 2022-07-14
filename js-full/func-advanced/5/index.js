export const shmoment = initValue => {
  let resultDate = initValue;

  const newValue = {
    add(dateInterval, number) {
      switch (dateInterval) {
        case 'years':
          resultDate = initValue.setFullYear(initValue.getFullYear() + number);
          break;
        case 'months':
          resultDate = initValue.setMonth(initValue.getMonth() + number);
          break;
        case 'days':
          resultDate = initValue.setDate(initValue.getDay() + number);
          break;
        case 'hours':
          resultDate = initValue.setHours(initValue.getHours() + number);
          break;
        case 'minutes':
          resultDate = initValue.setMinutes(initValue.getMinutes() + number);
          break;
        case 'seconds':
          resultDate = initValue.setSeconds(initValue.getSeconds() + number);
          break;
        case 'milliseconds':
          resultDate = initValue.setMilliseconds(initValue.getMilliseconds() + number);
          break;
      }
      return this;
    },

    subtract(dateInterval, number) {
      switch (dateInterval) {
        case 'years':
          resultDate = initValue.setFullYear(initValue.getFullYear() - number);
          break;
        case 'months':
          resultDate = initValue.setMonth(initValue.getMonth() - number);
          break;
        case 'days':
          resultDate = initValue.setDate(initValue.getDay() - number);
          break;
        case 'hours':
          resultDate = initValue.setHours(initValue.getHours() - number);
          break;
        case 'minutes':
          resultDate = initValue.setMinutes(initValue.getMinutes() - number);
          break;
        case 'seconds':
          resultDate = initValue.setSeconds(initValue.getSeconds() - number);
          break;
        case 'milliseconds':
          resultDate = initValue.setMilliseconds(initValue.getMilliseconds() - number);
          break;
      }
      return this;
    },

    result() {
      return initValue;
    },
  };
  return newValue;
};

// const res = shmoment(new Date(2020, 0, 7, 17, 17, 17))
//  .add('minutes', 2)
//  .add('days', 8)
//  .subtract('years', 1)
//  .result(); // ...Jan 15 2019 17:19:17...

// console.log(res);
