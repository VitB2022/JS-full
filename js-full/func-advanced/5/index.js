export const shmoment = initValue => {
  initValue = new Date(initValue);

  const newValue = {
    add(dateInterval, number) {
      switch (dateInterval) {
        case 'years':
          initValue.setFullYear(initValue.getFullYear() + number);
          break;
        case 'months':
          initValue.setMonth(initValue.getMonth() + number);
          break;
        case 'days':
          initValue.setDate(initValue.getDate() + number);
          break;
        case 'hours':
          initValue.setHours(initValue.getHours() + number);
          break;
        case 'minutes':
          initValue.setMinutes(initValue.getMinutes() + number);
          break;
        case 'seconds':
          initValue.setSeconds(initValue.getSeconds() + number);
          break;
        case 'milliseconds':
          initValue.setMilliseconds(initValue.getMilliseconds() + number);
          break;
      }
      return this;
    },

    subtract(dateInterval, number) {
      switch (dateInterval) {
        case 'years':
          initValue.setFullYear(initValue.getFullYear() - number);
          break;
        case 'months':
          initValue.setMonth(initValue.getMonth() - number);
          break;
        case 'days':
          initValue.setDate(initValue.getDate() - number);
          break;
        case 'hours':
          initValue.setHours(initValue.getHours() - number);
          break;
        case 'minutes':
          initValue.setMinutes(initValue.getMinutes() - number);
          break;
        case 'seconds':
          initValue.setSeconds(initValue.getSeconds() - number);
          break;
        case 'milliseconds':
          initValue.setMilliseconds(initValue.getMilliseconds() - number);
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
//  .add('minutes', 78)
//  .add('days', 8)
//  .subtract('years', 1)
//  .result(); // ...Jan 15 2019 17:19:17...

// console.log(res);
