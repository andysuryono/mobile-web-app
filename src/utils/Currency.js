import CurrencyFormatter from 'currency-formatter';

export const Currency = (price) => {
    return CurrencyFormatter.format(price, {
        symbol: 'Rp',
        decimal: '.',
        thousand: ',',
        precision: 0,
        format: '%s %v' // %s is the symbol and %v is the value
    });
};