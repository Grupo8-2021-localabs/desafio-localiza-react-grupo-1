import { GetStaticProps } from 'next';
import Head from 'next/head';
import CarCard from '../src/components/home/CarCard/CarCard';
import { Container, CarListContainer } from '../src/components/home/Container';
import SectionHeader from '../src/components/home/SectionHeader/SectionHeader';
import Menu from '../src/components/Menu/Menu';
import Header from '../src/components/common/Header/Header';
import { loadCarList } from '../src/services/api';
import { AppAvailableCar } from '../src/services/types';

interface IProps {
  cars: AppAvailableCar[];
}

export const getStaticProps: GetStaticProps = async () => {
  const cars = await loadCarList();
  return {
    props: {
      cars,
    },
    revalidate: 30,
  };
};

export default function Home({ cars }: IProps): React.ReactNode {
  return (
    <>
      <Head>
        <title>Desafio Localiza</title>
      </Head>
      <Container>
        <Header title="Resultados" />
        <section>
          <SectionHeader quantity={cars.length} />
          <CarListContainer>
            {cars.map((car) => (
              <CarCard key={car.id} {...car} />
            ))}
          </CarListContainer>
          <Menu />
        </section>
      </Container>
    </>
  );
}
