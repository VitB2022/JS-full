export const getDiff = (startDate, endDate) => {
  let date1 = new Date(startDate);
  let date2 = new Date(endDate);
  let difference = Math.abs(date1 - date2);
  let days = Math.trunc(difference / (1000 * 60 * 60 * 24));
  let hours = Math.trunc(difference / (1000 * 60 * 60));
  let minutes = Math.trunc(difference / (1000 * 60));
  let seconds = difference / 1000;

  return `${days}d ${hours}h ${minutes}m ${seconds}s`;
};
