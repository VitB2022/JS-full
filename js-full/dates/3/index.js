export const getDiff = (startDate, endDate) => {
  let date1 = new Date(startDate);
  let date2 = new Date(endDate);
  let difference = Math.abs(date1 - date2);
  let days = Math.round(difference / (1000 * 60 * 60 * 24));
  difference -= days * (1000 * 60 * 60 * 24);
  let hours = Math.round(difference / (1000 * 60 * 60));
  difference -= hours * (1000 * 60 * 60);
  let minutes = Math.round(difference / (1000 * 60));
  difference -= minutes * (1000 * 60);
  let seconds = difference;

  return `${days}d ${hours}h ${minutes}m ${seconds}s`;
};
// console.log(getDiff(new Date(2022, 11, 18, 3, 25, 0), new Date(2022, 11, 9, 1, 2, 0)));
// console.log(getDiff(new Date(2022, 11, 9, 1, 2, 0), new Date(2022, 11, 18, 3, 25, 0)));
