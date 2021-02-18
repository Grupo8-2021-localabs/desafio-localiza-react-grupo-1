import { FC } from 'react';
import { IProps } from './types';
import CarDetails from './components/CarDetails';
import {
  Container,
  Image,
} from './styled-components';

const CarCard: FC<IProps> = ({
  model, imageArray, fuelType, ...props
}: IProps) => (
  <Container>
    <CarDetails
      model={model}
      fuelType={fuelType}
      {...props}
    />
    <Image src={imageArray[0]} alt={model} />
  </Container>
);

export default CarCard;
