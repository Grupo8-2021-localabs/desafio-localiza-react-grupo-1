import { FC } from 'react';
import styled from 'styled-components';
import numberToCurrency from '../../common/helpers/numberToCurrency';

interface IProps {
    label: string,
    dailyRate: number,
    rentalDays: number,
}

const Label = styled.p`
    color: #A0A0B2;
    font-size: 0.65em;
    font-family: 'Archivo', sans-serif;
    margin: 0;
    margin-bottom: 9px;
`;

const PriceText = styled.p`
    color: #47474D, ;
    font-size: 0.95em;
    line-height: 1.15em;
    margin: 0;
    margin-bottom: 9px;
`;

const PriceDisplayer: FC<Partial<IProps>> = ({ label, dailyRate, rentalDays }: IProps) => (
  <div>
    <Label>{label?.toUpperCase()}</Label>
    <PriceText>
      {
        `${numberToCurrency(dailyRate)} x${rentalDays} diária${rentalDays > 1 ? 's' : ''}`
    }
    </PriceText>
  </div>
);

export default PriceDisplayer;
