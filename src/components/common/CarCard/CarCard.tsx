import { FC } from 'react';
import { IProps } from './types';
import CarDetails from './components/CarDetails';
import {
  Container,
  Image,
} from './styled-components';
import { useRouter } from 'next/router'

const router = useRouter();
const goCars = () => router.push("/confirmacao-cadastro");

const CarCard: FC<IProps> = ({
  car, imageArray, fuelType, ...props
}: IProps) => (
  <Container>
    <CarDetails
      car={car}
      fuelType={fuelType}
      {...props}
    />
    <Image src={imageArray[0]} alt={car} onClick={goCars}/>
  </Container>
);

export default CarCard;
