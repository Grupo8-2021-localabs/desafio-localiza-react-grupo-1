import { FC } from 'react';
import { IProps } from './types';
import { Container } from './styled-components';
import DateDisplayer from './components/DateDisplayer';

const RentDatesDisplayer: FC<IProps> = () => (
  <Container>
    <DateDisplayer label="de" date={new Date()} />
    ⟶
    <DateDisplayer label="até" date={new Date()} />
  </Container>
);

export default RentDatesDisplayer;
