import { FC } from 'react';
import { IProps } from './types';
import CardHeader from './components/CardHeader';
import {
  Container,
  Image,
} from './styled-components';

const HomeCarCard: FC<IProps> = ({ car, ...props }: IProps) => (
  <Container>
    <CardHeader
      car={car}
      {...props}
    />
    <Image src="https://via.placeholder.com/252x119" alt={car} />
  </Container>
);

export default HomeCarCard;
