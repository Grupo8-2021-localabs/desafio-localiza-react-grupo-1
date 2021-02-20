import Head from 'next/head';
import { useRouter } from 'next/router';
import CarCard from '../src/components/home/CarCard/CarCard';
import { Container, CarListContainer } from '../src/components/home/Container';
import SectionHeader from '../src/components/home/SectionHeader/SectionHeader';
import Menu from '../src/components/Menu/Menu';
import HeaderCalendar from '../src/components/HeaderCalendar/HeaderCalendar';
import { loadCarList } from '../src/services/api';
import { AppAvailableCar } from '../src/services/types';
import { Button } from '../src/components/Button/ButtonHome';

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
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Escolha a Data</title>
      </Head>
      <Container>
        <HeaderCalendar />
        <section>
          <SectionHeader quantity={cars.length} />
          <CarListContainer>
            {cars.map((car) => (
              <Button
                onClick={() => {
                  router.push('/detalhes-carro');
                }}
              >
                <CarCard key={car.id} {...car} />
              </Button>
            ))}
          </CarListContainer>
          <Menu />
        </section>
      </Container>
    </>
  );
}
