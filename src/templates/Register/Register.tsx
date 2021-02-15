import { useForm } from 'react-hook-form';
import { InferType } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

import EmailIcon from '../../components/icons/EmailIcon/EmailIcon';
import PasswordIcon from '../../components/icons/PasswordIcon/PasswordIcon';
import HomeIcon from '../../components/icons/HomeIcon'
import { Container, ContentTitle, TextLinkRegister, SubTitle } from '../Login/styled-components/index';
import { schema } from '../Login/Login.validations';
import { useState } from 'react';

type SignIn = InferType<typeof schema>;

const Register = () => {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: SignIn) => console.log(data);

  const [isSecondPart, setisSecondPart] = useState(false);

  return (
    <Container>
      <ContentTitle>
        <h1>
          Crie sua
          <br /> conta
        </h1>
        <p>Faça seu cadastro de forma rápida e fácil.</p>
      </ContentTitle>

      {!isSecondPart ? 
    <>
      <SubTitle>
        <h2>
          01. Dados
        </h2>
      </SubTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
      <Input
          type="name"
          name="name"
          placeholder="Nome"
          register={register}
          iconLeft={<HomeIcon color={'#7A7A80'}/>}
          className="input-style"
        />

        <Input
          type="email"
          name="email"
          placeholder="Email"
          register={register}
          error={errors?.email?.message}
          iconLeft={<EmailIcon />}
          className="input-style"
        />    

        <div className="button-container">
          <Button className="button-style" onClick = { () => setisSecondPart(true)}>
            Próximo 
          </Button>
        </div>
      </form>
    </>
    : 
    <>
    <SubTitle>
      <h2>
        02. Senha
      </h2>
    </SubTitle>
    <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="password"
          name="password"
          placeholder="Senha"
          register={register}
          error={errors?.password?.message}
          iconLeft={<PasswordIcon />}
          className="input-style"
        />
        <Input
          type="password"
          name="password"
          placeholder="Senha"
          register={register}
          error={errors?.password?.message}
          iconLeft={<PasswordIcon />}
          className="input-style"
        />

      <div className="button-container">
        <Button className="button-style" type="submit">
          Cadastrar 
        </Button>
      </div>
    </form>
  </>
    }
    </Container>
  );
};
export default Register;
