import { FC } from 'react';
import { IProps } from './types';
import { Container, DragDown } from './styled-components';
import DateDisplayer from './components/DateDisplayer';

const Header: FC<IProps> = () => (
  <Container>
    <DateDisplayer label="de" date={new Date()} />
    <DragDown />
    <DateDisplayer label="até" date={new Date()} />
  </Container>
);

export default Header;
