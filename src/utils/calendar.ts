export const getDates = (year: number) => {
  const daysOfYear = [];

  // Get the start day of the year
  const startDay = new Date(year, 0, 1).getUTCDay();

  // Calculate the number of previous days to include
  const numPreviousDays = startDay === 0 ? 6 : startDay + 1;

  // Calculate the start date of the year
  const startDate = new Date(year, 0, 1);

  // Iterate over the previous days and add the dates
  for (let i = numPreviousDays; i > 0; i--) {
    const date = new Date(startDate);
    date.setDate(startDate.getDate() - i);
    daysOfYear.push(date);
  }

  // Iterate over the months and days of the year
  for (let month = 0; month < 12; month++) {
    const monthDays = getMonthDays(year, month);

    for (let day = 1; day <= monthDays; day++) {
      const date = new Date(year, month, day);
      daysOfYear.push(date);
    }
  }

  return daysOfYear;
};

const getMonthDays = (year: number, month: number) => {
  return new Date(year, month + 1, 0).getDate();
};
