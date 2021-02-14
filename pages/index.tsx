import Head from 'next/head';
import CarCard from '../src/components/home/CarCard/CarCard';
import createCarCardProps from '../src/components/home/CarCard/helpers/factory';
import { Container, CarListContainer } from '../src/components/home/Container';
import Header from '../src/components/home/Header/Header';
import SectionHeader from '../src/components/home/SectionHeader/SectionHeader';
import Menu from '../src/components/Menu/Menu';

// @todo: load cars
const cars = [
  createCarCardProps({ car: 'Carro' }),
  createCarCardProps({ car: 'Carro1' }),
  createCarCardProps({ car: 'Carro2' }),
  createCarCardProps({ car: 'Carro3' }),
  createCarCardProps({ car: 'Carro4' }),
  createCarCardProps({ car: 'Carro5' }),
  createCarCardProps({ car: 'Carro6' }),
  createCarCardProps({ car: 'Carro7' }),
  createCarCardProps({ car: 'Carro8' }),
  createCarCardProps({ car: 'Carro9' }),
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Desafio Localiza</title>
      </Head>
      <Container>
        <Header />
        <section>
          <SectionHeader />
          <CarListContainer>
            {cars.map((car) => <CarCard key={car.car} {...car} />)}
          </CarListContainer>
          <Menu />
        </section>
      </Container>
    </>
  );
}
