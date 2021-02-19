import { FC } from 'react';
import { IProps } from './types';
import CarDetails from './components/CarDetails';
import { Container, Image, RentContent } from './styled-components';
import RentCurrent from '../../RentCurrent/RentCurrent';
import RentHistory from '../../RentHistory/RentHistory';

const CarCard: FC<IProps> = ({
  model,
  imageArray,
  fuelType,
  isCurrent = false,
  isHistory = false,
  ...props
}: IProps) => (
  <Container>
    <CarDetails
      car={car}
      fuelType={fuelType}
      {...props}
    />
    <Image src={imageArray[0]} alt={car}/>
  </Container>
  <section>
    <Container>
      <CarDetails model={model} fuelType={fuelType} {...props} />
      <Image src={imageArray[0]} alt={model} />
    </Container>
    {isCurrent && (
      <RentContent>
        <RentCurrent endDate="20 fevereiro 2021" />
      </RentContent>
    )}
    {isHistory && (
      <RentContent>
        <RentHistory startDate="17 fevereiro 2021" endDate="18 fevereiro 2021" />
      </RentContent>
    )}
  </section>
);

export default CarCard;
