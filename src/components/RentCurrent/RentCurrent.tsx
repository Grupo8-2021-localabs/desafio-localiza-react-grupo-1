import { FC } from 'react';
import { IProps } from './types';
import { Container, PeriodText } from './styled-components';

const RentHistory: FC<IProps> = ({ endDate }) => (
  <Container>
    <PeriodText>
      Utilizando até
      {' '}
      {endDate}
    </PeriodText>
  </Container>
);

export default RentHistory;
