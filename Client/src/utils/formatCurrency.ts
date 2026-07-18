export const formatCurrency = (price: number, currencyCode: string = 'INR'): string => {
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: currencyCode,
        maximumFractionDigits: 0,
    }).format(price);
};
