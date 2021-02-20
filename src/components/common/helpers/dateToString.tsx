const dateToString = (date: Date): string =>
  date
    .toLocaleDateString('pt-Br', { year: 'numeric', month: 'long', day: 'numeric' })
    .replace(/ de /g, ' ');

export default dateToString;
