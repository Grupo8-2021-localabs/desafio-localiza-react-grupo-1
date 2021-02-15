const dateToString = (date): Date =>
  date
    .toLocaleDateString('pt-Br', { year: 'numeric', month: 'long', day: 'numeric' })
    .replace(/ de /g, ' ');

export default dateToString;
