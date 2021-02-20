import { FC } from 'react';
import Image from 'next/image';
import { IProps } from './types';
import CarDetails from './components/CarDetails';
import { Container, RentContent } from './styled-components';
import RentCurrent from '../../RentCurrent/RentCurrent';
import RentHistory from '../../RentHistory/RentHistory';

const CarCard: FC<IProps> = ({
  model,
  imageArray,
  fuelType,
  isCurrent,
  startDate,
  endDate,
  ...props
}: IProps) => (
  <section>
    <Container>
      <CarDetails model={model} fuelType={fuelType} {...props} />
      <Image src={imageArray[0]} alt={model} width={160} height={92} />
    </Container>
    {isCurrent && (
      <RentContent>
        <RentCurrent endDate={endDate} />
      </RentContent>
    )}
    {!isCurrent && (
      <RentContent>
        <RentHistory startDate={startDate} endDate={endDate} />
      </RentContent>
    )}
  </section>
);

export default CarCard;
