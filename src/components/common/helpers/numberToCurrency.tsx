const numberToCurrency = (value: number) => value.toLocaleString(
  'pt-BR',
  {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  },
);

export default numberToCurrency;
