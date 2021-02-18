import { FC } from 'react';
import { IProps } from './types';
import CarDetails from './components/CarDetails';
import { Container, Image } from './styled-components';
import RentCurrent from '../../RentCurrent/RentCurrent';
import RentHistory from '../../RentHistory/RentHistory';

const CarCard: FC<IProps> = ({
  car,
  imageArray,
  fuelType,
  isCurrent = false,
  isHistory = false,
  ...props
}: IProps) => (
  <section>
    <Container>
      <CarDetails car={car} fuelType={fuelType} {...props} />
      <Image src={imageArray[0]} alt={car} />
    </Container>
    {isCurrent && <RentCurrent endDate="20 fevereiro 2021" />}
    {isHistory && <RentHistory startDate="17 fevereiro 2021" endDate="18 fevereiro 2021" />}
  </section>
);

export default CarCard;
