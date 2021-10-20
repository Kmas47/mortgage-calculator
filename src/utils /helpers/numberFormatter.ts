export const currencyFormatter = (value) => {
    const number = parseInt(value);
    return number.toLocaleString('en-ca', {currency: 'CAD', style: 'currency'});
}