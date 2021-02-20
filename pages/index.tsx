import { GetStaticProps } from 'next';
import Head from 'next/head';
import CarCard from '../src/components/home/CarCard/CarCard';
import { Container, CarListContainer } from '../src/components/home/Container';
import SectionHeader from '../src/components/home/SectionHeader/SectionHeader';
import Menu from '../src/components/Menu/Menu';
import HeaderCalendar from '../src/components/HeaderCalendar/HeaderCalendar';
import { loadAvailableCarsList } from '../src/services/api';
import { IAppAvailableCar } from '../src/services/types';

interface IProps {
  cars: IAppAvailableCar[]
}

export const getStaticProps: GetStaticProps = async () => {
  const cars = await loadAvailableCarsList();
  return {
    props: {
      cars,
    },
    revalidate: 30,
  };
};

export default function Home({ cars }: IProps) : React.ReactNode {
  return (
    <>
      <Head>
        <title>Desafio Localiza</title>
      </Head>
      <Container>
        <HeaderCalendar />
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
