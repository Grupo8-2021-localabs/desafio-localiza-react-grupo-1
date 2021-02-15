import { FC } from 'react';
import styled from 'styled-components';
import dateToString from '../../../common/helpers/dateToString';

interface IProps {
  label: string;
  date: Date;
}

const Label = styled.p`
  color: #7a7a80;
  font-size: 0.65em;
  font-family: 'Archivo', sans-serif;
  margin: 0;
  margin-bottom: 9px;
`;

const DateText = styled.p`
  margin: 0;
  margin-bottom: 9px;
`;

const DateDisplayer: FC<Partial<IProps>> = ({ label, date }: IProps) => (
  <div>
    <Label>{label.toUpperCase()}</Label>
    <DateText>{dateToString(date)}</DateText>
  </div>
);

export default DateDisplayer;
