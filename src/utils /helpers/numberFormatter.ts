export const currencyFormatter = (value) => {
  const number = parseFloat(value);
  return number.toLocaleString("en-ca", { currency: "CAD", style: "currency" });
};
