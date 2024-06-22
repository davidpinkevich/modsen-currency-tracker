const createRealRate = (value: number | string | undefined): string => {
  if (value === "") {
    return "No data available";
  } else if (!value) {
    return "0.15%";
  } else {
    return `R$${(1 / Number(value)).toFixed(3)}`;
  }
};

export { createRealRate };
