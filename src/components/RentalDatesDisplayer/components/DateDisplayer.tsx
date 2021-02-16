import { FC } from 'react';
import styled from 'styled-components';
import dateToString from '../../common/helpers/dateToString';

interface IProps {
    label: string,
    date: Date,
}

const Label = styled.p`
    font-size: 0.65em;
    font-family: 'Archivo', sans-serif;
    margin: 0;
    margin-bottom: 9px;
`;

const DateText = styled.p`
    color: #DC1637;
    font-size: 0.95em;
    line-height: 1.15em;
    margin: 0;
    margin-bottom: 9px;
`;

const DateDisplayer: FC<Partial<IProps>> = ({ label, date }: IProps) => (
  <div>
    <Label>{label.toUpperCase()}</Label>
    <DateText>
      {dateToString(date)}
    </DateText>
  </div>
);

export default DateDisplayer;
