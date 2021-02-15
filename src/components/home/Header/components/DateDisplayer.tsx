import { FC } from 'react';
import styled from 'styled-components';
import Calendar from '../../../Calendar/Calendar';

interface IProps {
  label: string;
  date: Date;
}

/* const Label = styled.p`
  color: #7a7a80;
  font-size: 0.65em;
  font-family: 'Archivo', sans-serif;
  margin: 0;
  margin-bottom: 9px;
`; */

const DateText = styled.p`
  margin: 0;
  margin-bottom: 9px;
`;

/* const formatDate = (date): Date => date
  .toLocaleDateString(
    'pt-Br',
    { year: 'numeric', month: 'long', day: 'numeric' },
  )
  .replace(/ de/g, ''); */

const DateDisplayer: FC<Partial<IProps>> = ({ label, date }: IProps) => (
  <div>
    {/* <Label>{label.toUpperCase()}</Label> */}
    {/* <DateText>{formatDate(date)}</DateText> */}
    <DateText>
      <Calendar />
    </DateText>
  </div>
);

export default DateDisplayer;
