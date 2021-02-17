import { useForm } from 'react-hook-form';
import { InferType } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { FC, useState } from 'react';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

import CpfIcon from '../../components/icons/CpfIcon/CpfIcon';
import PasswordIcon from '../../components/icons/PasswordIcon/PasswordIcon';
import { Container, ContentTitle, TextLinkRegister } from './styled-components/index';
import { schema } from './Login.validations';
import { useAuth } from '../../components/AuthProvider';

type SignIn = InferType<typeof schema>;

const Login: FC<Record<string, unknown>> = () => {
  const [pageError, setPageError] = useState('');
  const { signIn } = useAuth();
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: SignIn) => {
    const error = await signIn(data.cpf, data.password);
    if (error) {
      setPageError(error);
      setTimeout(() => setPageError(''), 5000);
    }
  };

  return (
    <Container>
      <ContentTitle>
        <h1>
          Seja
          <br />
          {' '}
          Bem-vindo
        </h1>
        <p>Faça seu login para começar uma experiência incrível.</p>
      </ContentTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="text"
          name="cpf"
          placeholder="CPF"
          register={register}
          maxLength={14}
          error={errors?.cpf?.message}
          iconLeft={<CpfIcon />}
          className="input-style"
        />

        <Input
          type="password"
          name="password"
          placeholder="Senha"
          register={register}
          error={errors?.password?.message || pageError}
          iconLeft={<PasswordIcon />}
          className="input-style"
        />
        <TextLinkRegister>
          <a href="/cadastro">
            Ainda não sou cliente
          </a>
        </TextLinkRegister>

        <div className="button-container">
          <Button className="button-style" type="submit">
            Login
          </Button>
        </div>
      </form>
    </Container>
  );
};
export default Login;
