const getCurrentDate = () => {
  return new Date().toISOString().split("T")[0];
};
const getThirtyDaysAgoDate = () => {
  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() - 30);
  return currentDate.toISOString().split("T")[0];
};

export { getCurrentDate, getThirtyDaysAgoDate };
