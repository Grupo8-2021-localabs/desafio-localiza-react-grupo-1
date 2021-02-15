import { FC } from 'react';
import { IProps } from './types';
import { Container, SmallText, PeriodText } from './styled-components';

const RentHistory: FC<IProps> = ({ startDate, endDate }) => (
  <Container>
    <SmallText>Período</SmallText>
    <PeriodText>
      {startDate}
      {' '}
      &#8594;
      {' '}
      {endDate}
    </PeriodText>
  </Container>
);

export default RentHistory;
