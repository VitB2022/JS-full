export const getDiff = (startDate, endDate) => {
  let date1 = new Date(startDate);
  let date2 = new Date(endDate);

  let days = Math.abs(date1.getDate() - date2.getDate());
  let hours = Math.abs(date1.getHours() - date2.getHours());
  let minutes = Math.abs(date1.getMinutes() - date2.getMinutes());
  let seconds = Math.abs(date1.getSeconds() - date2.getSeconds());

  return `${days}d ${hours}h ${minutes}m ${seconds}s`;
};

// console.log(getDiff(new Date(1999, 12, 18, 3, 25, 0), new Date(1993, 8, 9, 1, 2, 0)));
// console.log(getDiff(new Date(1993, 8, 9, 1, 2, 0), new Date(1999, 12, 18, 3, 25, 0)));
