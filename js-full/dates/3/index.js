export const getDiff = (startDate, endDate) => {
  let date1 = new Date(startDate);
  let date2 = new Date(endDate);

  let days = parseInt(
    Math.ceil(Math.abs((date1.getTime() - date2.getTime()) / (1000 * 60 * 60 * 24))),
  );
  let hours = parseInt(Math.ceil(Math.abs((date1.getTime() - date2.getTime()) / (1000 * 60 * 60))));
  let minutes = parseInt(Math.ceil(Math.abs((date1.getTime() - date2.getTime()) / (1000 * 60))));
  let seconds = parseInt(Math.ceil(Math.abs((date1.getTime() - date2.getTime()) / 1000)));

  return `${days}d ${hours}h ${minutes}m ${seconds}s`;
};

// console.log(getDiff(new Date('7/13/2010'), new Date('12/15/2010')));
// console.log(getDiff(new Date('12/15/2010'), new Date('7/13/2010')));
