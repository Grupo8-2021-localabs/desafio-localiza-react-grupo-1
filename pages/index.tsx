import Head from 'next/head';
import CarCard from '../src/components/Home/CarCard/CarCard';
import createCarCardProps from '../src/components/Home/CarCard/helpers/factory';
import { Container } from '../src/components/Home/Container';
import Header from '../src/components/Home/Header/Header';
import SectionHeader from '../src/components/Home/SectionHeader/SectionHeader';
import Menu from '../src/components/Menu/Menu';

// @todo: load cars
const cars = [
  createCarCardProps(),
  createCarCardProps(),
  createCarCardProps(),
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
          {cars.map((car) => <CarCard {...car} />)}
          <Menu />
        </section>
      </Container>
    </>
  );
}
