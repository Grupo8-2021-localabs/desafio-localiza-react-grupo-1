import { FC } from 'react';
import { IProps } from './types';
import {
  Container, Image, Header, ArrowLeft,
} from './styled-components';
import NavDots from '../NavDots';

const CarDetailImage: FC<Partial<IProps>> = ({ imageArray }: IProps) => (
  <Container>
    <Header>
      <ArrowLeft />
      <NavDots imageArray={imageArray} />
    </Header>
    <Image src={imageArray[0]} />
  </Container>
);

export default CarDetailImage;
