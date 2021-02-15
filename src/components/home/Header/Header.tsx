import { FC } from 'react';

import { IProps } from './types';
import { Container, DragDown } from './styled-components';
import DateDisplayer from './components/DateDisplayer';
import 'react-datepicker/dist/react-datepicker.css';

const Header: FC<IProps> = ({ withCalendar }) =>
  withCalendar ? (
    <Container>
      <DateDisplayer date={new Date()} />
    </Container>
  ) : (
    <Container>
      <DragDown />
    </Container>
  );

export default Header;
