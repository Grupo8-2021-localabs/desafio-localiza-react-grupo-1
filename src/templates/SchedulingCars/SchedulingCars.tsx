import { FC } from 'react';
import CarCard from '../../components/common/CarCard/CarCard';
import createCarCardProps from '../../components/common/CarCard/helpers/factory';
import { Container, CarListContainer } from '../../components/home/Container';
import Menu from '../../components/Menu/Menu';
import Header from '../../components/common/Header/Header';

const cars = [
  createCarCardProps({ model: 'Carro', isCurrent: true }),
  createCarCardProps({ model: 'Carro1', isHistory: true }),
  createCarCardProps({ model: 'Carro2', isHistory: true }),
  createCarCardProps({ model: 'Carro3', isHistory: true }),
  createCarCardProps({ model: 'Carro4', isHistory: true }),
];

const SchedulingCars: FC = () => (
  <>
    <Container>
      <Header title="Agendamentos" description="5 períodos" />
      <section>
        <CarListContainer>
          {cars.map((car) => (
            <>
              <CarCard key={car.id} {...car} />
            </>
          ))}
        </CarListContainer>
        <Menu />
      </section>
    </Container>
  </>
);
export default SchedulingCars;
