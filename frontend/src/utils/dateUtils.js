import dayjs from "dayjs";

export const getMonthDays = (date) => {
  const startOfMonth = date.startOf("month");
  const endOfMonth = date.endOf("month");
  const daysArray = [];

  for (let i = 0; i < startOfMonth.day(); i++) {
    daysArray.push(null);
  }

  for (let i = 1; i <= endOfMonth.date(); i++) {
    daysArray.push({
      date: dayjs(startOfMonth).date(i),
      isCurrentMonth: true,
    });
  }

  while (daysArray.length % 7 !== 0) {
    daysArray.push(null);
  }

  return daysArray;
};

export const isToday = (date, currentDate) => {
  return date.isSame(currentDate, "day");
};
