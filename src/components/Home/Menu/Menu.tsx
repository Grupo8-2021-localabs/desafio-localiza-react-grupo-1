import { FC } from 'react';
import { IProps } from './types';
import { Container } from './styled-components';
import CalendarIcon from '../../icons/CalendarIcon';
import CarIcon from '../../icons/CarIcon';
import HomeIcon from '../../icons/HomeIcon';

const Menu: FC<IProps> = () => (
  <Container>
    <HomeIcon color="#3D3D4D" />
    <CarIcon color="#3D3D4D" />
    <CalendarIcon color="#3D3D4D" />
  </Container>
);

export default Menu;
