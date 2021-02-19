import { FC } from 'react';
import { IProps } from './types';
import BasicCarInfo from '../../BasicCarInfo/BasicCarInfo';
import CardFooter from './components/CardFooter';
import {
  Container,
  Image,
} from './styled-components';

const CarCard: FC<IProps> = ({
  model, imageArray, fuelType, ...props
}: IProps) => (
  <Container>
    <BasicCarInfo
      model={model}
      {...props}
    />
    <Image src={imageArray?.[0]} alt={model} />
    <CardFooter fuelType={fuelType} imageArray={imageArray} />
  </Container>
);

export default CarCard;
