const getLocation = (location: string) => {
  if (location.length === 1) {
    return "/";
  } else {
    return location.slice(1);
  }
};

export { getLocation };
