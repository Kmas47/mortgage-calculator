export const currencyFormatter = (value) => {
  const number = parseFloat(value);
  return number.toLocaleString(undefined, {
    currency: "CAD",
    style: "currency",
  });
};
