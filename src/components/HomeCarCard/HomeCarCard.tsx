import { FC } from 'react';
import { IProps } from './types';
import CardHeader from './components/CardHeader';
import {
  Container,
  Image,
} from './styled-components';

const HomeCarCard: FC<IProps> = ({ car, imageArray, ...props }: IProps) => (
  <Container>
    <CardHeader
      car={car}
      {...props}
    />
    <Image src={imageArray[0]} alt={car} />
  </Container>
);

export default HomeCarCard;
