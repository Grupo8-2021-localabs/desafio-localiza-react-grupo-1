import { FC } from 'react';

import { IProps } from './types';
import { Container, DragDown } from './styled-components';
import DateDisplayer from './components/DateDisplayer';
import '../../HeaderCalendar/node_modules/react-datepicker/dist/react-datepicker.css';

const Header: FC<IProps> = () => (
  <Container>
    <DateDisplayer date={new Date()} />
  </Container>
);

export default Header;
