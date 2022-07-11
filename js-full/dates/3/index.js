export const getDiff = (startDate, endDate) => {
  let date1 = new Date(startDate);
  let date2 = new Date(endDate);

  let days = Math.ceil(Math.abs((date1.getTime() - date2.getTime()) / (1000 * 60 * 60 * 24)));
  let hours = Math.abs((date1 - date2) / (1000 * 60 * 60));
  let minutes = Math.abs((date1 - date2) / (1000 * 60));
  let seconds = Math.abs((date1 - date2) / 1000);

  return `${days}d ${hours}h ${minutes}m ${seconds}s`;
};
