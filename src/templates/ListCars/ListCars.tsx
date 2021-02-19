import { FC } from 'react';
import Head from 'next/head';
import CarCard from '../../components/common/CarCard/CarCard';
import createCarCardProps from '../../components/home/CarCard/helpers/factory';
import { Container, CarListContainer } from '../../components/home/Container';
import Menu from '../../components/Menu/Menu';
import Header from '../../components/common/Header/Header';
import SearchInput from '../../components/SearchInput/SearchInput';
import SearchIcon from '../../components/icons/SearchIcon/index';
import { SearchContainer } from './styled-components/index';

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

const ListCars: FC = () => (
  <>
    <Head>
      <title>Desafio Localiza</title>
    </Head>
    <Container>
      <Header title="Listagem" description="12 carros" />
      <section>
        <SearchContainer>
          <SearchInput
            placeholder="Qual carro você procura?"
            icon={<SearchIcon />}
            className="input-style"
          />
        </SearchContainer>
        <CarListContainer>
          {cars.map((car) => (
            <CarCard key={car.car} {...car}/>
          ))}
        </CarListContainer>
        <Menu />
      </section>
    </Container>
  </>
);

export default ListCars;
