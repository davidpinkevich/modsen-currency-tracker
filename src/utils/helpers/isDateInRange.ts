const isDateInRange = (startDate: string, endDate: string): boolean => {
  const today = new Date();
  const start = new Date(startDate);
  const end = new Date(endDate);

  return end <= today && start <= today && start <= end;
};

export { isDateInRange };
