export const days = () => {
  const result = [];
  for (let i = 1; i < 32; i++) {
    result.push({
      value: i,
      label: i
    });
  }
  return result;
};

export const months = () => {
  var mL = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  const result = [];
  for (let i = 1; i < 13; i++) {
    result.push({
      value: i,
      label: mL[i - 1]
    });
  }
  return result;
};

export const years = () => {
  const result = [];
  for (let i = 2022; i < 2050; i++) {
    result.push({
      value: i,
      label: i
    });
  }
  return result;
};
