export const getDates = (year: number) => {
  const daysOfYear = [];

  for (let month = 0; month < 12; month++) {
    const monthDays = getMonthDays(year, month);

    for (let day = 1; day <= monthDays; day++) {
      const date = new Date(year, month, day);

      if (date.getFullYear() === year) {
        daysOfYear.push(date);
      }
    }
  }

  return daysOfYear;
};

const getMonthDays = (year: number, month: number) => {
  return new Date(year, month + 1, 0).getDate();
};
