import { FC } from 'react';
import { IProps } from './types';
import { Container, LeftBox } from './styled-components';
import OptionsIcon from '../../icons/OptionsIcon';

const SectionHeader: FC<IProps> = ({ quantity } : IProps) => (
  <Container>
    <h1>Resultados</h1>
    <LeftBox>
      <p>
        {quantity}
        {' '}
        carros
      </p>
      <OptionsIcon />
    </LeftBox>
  </Container>
);

export default SectionHeader;
