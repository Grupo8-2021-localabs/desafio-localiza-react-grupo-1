import { FC } from 'react';
import { IProps } from './types';
import BasicCarInfo from '../../BasicCarInfo/BasicCarInfo';
import CardFooter from './components/CardFooter';
import {
  Container,
  Image,
} from './styled-components';

const CarCard: FC<IProps> = ({
  car, imageArray, fuelType, ...props
}: IProps) => (
  <Container>
    <BasicCarInfo
      car={car}
      {...props}
    />
    <Image src={imageArray[0]} alt={car} />
    <CardFooter fuelType={fuelType} imageArray={imageArray} />
  </Container>
);

export default CarCard;
