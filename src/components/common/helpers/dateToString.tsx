export const months = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro',
];

export const weekdaysLong = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];

export const weekdaysShort = ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sab'];

const dateToString = (date: Date): string =>
  date
    .toLocaleDateString('pt-Br', { year: 'numeric', month: 'long', day: 'numeric' })
    .replace(/ de /g, ' ');

export default dateToString;
