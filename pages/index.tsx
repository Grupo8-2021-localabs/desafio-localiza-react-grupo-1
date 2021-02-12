import Head from 'next/head';
import Login from '../src/templates/Login/Login';
import { HomeContainer } from './Home.style';

export default function Home() {
  return (
    <>
      <Head>
        <title>Desafio Localiza</title>
      </Head>
      <HomeContainer>
        <Login />
      </HomeContainer>
    </>
  );
}
