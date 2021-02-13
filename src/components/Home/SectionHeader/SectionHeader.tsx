import { FC } from 'react';
import { IProps } from './types';
import { Container, LeftBox } from './styled-components';
import OptionsIcon from '../../icons/OptionsIcon';

const HomeCarCard: FC<IProps> = () => (
  <Container>
    <h1>Resultados</h1>
    <LeftBox>
      <p>3 carros</p>
      <OptionsIcon />
    </LeftBox>
  </Container>
);

export default HomeCarCard;
