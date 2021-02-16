import { FC } from 'react';
import { IProps } from './types';
import { Container, TotalText, PriceContainer } from './styled-components';
import PriceDisplayer from './components/PriceDisplayer';
import numberToCurrency from '../common/helpers/numberToCurrency';
import Button from '../Button/Button';

const CarDetailImage: FC<Partial<IProps>> = ({ startDate, endDate, dailyRate }: IProps) => {
  const rentalDays = ((endDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24)) || 1;
  const total = dailyRate * rentalDays;

  return (
    <Container>
      <PriceContainer>
        <PriceDisplayer
          label="total"
          dailyRate={dailyRate}
          rentalDays={rentalDays}
        />
        <TotalText>{numberToCurrency(total)}</TotalText>
      </PriceContainer>

      <Button
        type="submit"
        width="100%"
      >
        Alugar agora
      </Button>
    </Container>
  );
};

export default CarDetailImage;
