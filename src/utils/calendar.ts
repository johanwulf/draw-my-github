export const getDates = (year: number) => {
  const daysOfYear = [];

  const startDay = new Date(year, 0, 1).getUTCDay();
  const numPreviousDays = startDay === 0 ? 6 : startDay + 1;
  const startDate = new Date(year, 0, 1);

  for (let i = numPreviousDays; i > 0; i--) {
    const date = new Date(startDate);
    date.setDate(startDate.getDate() - i);
    daysOfYear.push(date);
  }

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
