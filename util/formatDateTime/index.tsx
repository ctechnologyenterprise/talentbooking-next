const date = new Date();

export const getDate = () => {
  return date;
};

export const dateNextMonth = () => {
  const dateNextMonth = new Date();
  dateNextMonth.setMonth(date.getMonth() + 1);
  return dateNextMonth;
};

export const datePrevMonth = () => {
  const datePrevMonth = new Date();
  datePrevMonth.setMonth(date.getMonth() - 1);
  return datePrevMonth;
};
