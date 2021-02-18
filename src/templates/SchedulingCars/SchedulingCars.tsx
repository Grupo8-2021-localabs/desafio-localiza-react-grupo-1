import { FC } from 'react';
import CarCard from '../../components/common/CarCard/CarCard';
import createCarCardProps from '../../components/common/CarCard/helpers/factory';
import { Container, CarListContainer } from '../../components/home/Container';
import Menu from '../../components/Menu/Menu';
import Header from '../../components/common/Header/Header';

const cars = [
  createCarCardProps({ car: 'Carro', isCurrent: true }),
  createCarCardProps({ car: 'Carro1', isHistory: true }),
  createCarCardProps({ car: 'Carro2', isHistory: true }),
  createCarCardProps({ car: 'Carro3', isHistory: true }),
  createCarCardProps({ car: 'Carro4', isHistory: true }),
];

const SchedulingCars: FC = () => {
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);

  return (
    <>
      <Container>
        <Header title="Agendamentos" description="5 períodos" />
        <section>
          <CarListContainer>
            {cars.map((car) => (
              <>
                <CarCard key={car.car} {...car} />
              </>
            ))}
          </CarListContainer>
          <Menu />
        </section>
      </Container>
    </>
  );
};
export default SchedulingCars;
