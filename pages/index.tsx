import Head from 'next/head';
import { HomeContainer } from './Home.style';
import Input from '../src/components/Input/Input';
import EmailIcon from '../src/assets/icons/email.svg';
/* import PasswordIcon from '../src/assets/icons/senha.svg'; */

export default function Home() {
  return (
    <>
      <Head>
        <title>Desafio Localiza</title>
      </Head>
      <HomeContainer>
        <Input placeholder="Email" iconLeft={EmailIcon} />
      </HomeContainer>
    </>
  );
}
