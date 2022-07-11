export const getDiff = (startDate, endDate) => {
  let date1 = new Date(startDate);
  let date2 = new Date(endDate);

  let days = Math.round(Math.abs((date1 - date2) / (1000 * 60 * 60 * 24)));
  let hours = Math.round(Math.abs((date1 - date2) / (1000 * 60 * 60)));
  let minutes = Math.round(Math.abs((date1 - date2) / (1000 * 60)));
  let seconds = Math.round(Math.abs((date1 - date2) / 1000));

  return `${days}d ${hours}h ${minutes}m ${seconds}s`;
};
// console.log(getDiff(new Date(2022, 12, 18, 3, 25, 0), new Date(2022, 11, 9, 1, 2, 0)));
// console.log(getDiff(new Date(2022, 11, 9, 1, 2, 0), new Date(2022, 12, 18, 3, 25, 0)));
