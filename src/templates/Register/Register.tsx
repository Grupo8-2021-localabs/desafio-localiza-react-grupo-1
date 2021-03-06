import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { InferType } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/router';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

import CpfIcon from '../../components/icons/CpfIcon/CpfIcon';
import PasswordIcon from '../../components/icons/PasswordIcon/PasswordIcon';
import PersonIcon from '../../components/icons/PersonIcon/index';
import GoBackIcon from '../../components/icons/GoBackIcon/index';
import { schema } from './Register.validations';
import {
  Container,
  ContentTitle,
  RegisterContainer,
  GoBack,
  ContainerCircle,
  Circle,
} from './Register.styled';
import { useAuth } from '../../components/AuthProvider';

type SignUp = InferType<typeof schema>;

const Register: FC = () => {
  const [pageError, setPageError] = useState('');
  const router = useRouter();
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });
  const { signUpAndSignIn } = useAuth();
  const onSubmit = async (data: SignUp) => {
    const error = await signUpAndSignIn(data);
    if (error) {
      setPageError(error);
      setTimeout(() => setPageError(''), 5000);
    }else{
      router.push('/confirmacao-cadastro');
    }
  };

  const goBack = () => router.push('/login');

  return (
    <Container>
      <RegisterContainer>
        <GoBack onClick={goBack}>
          <GoBackIcon color="#7A7A80" />
        </GoBack>
        <ContainerCircle>
          <Circle />
          <Circle />
        </ContainerCircle>
      </RegisterContainer>
      <ContentTitle>
        <h1>
          Crie sua
          <br />
          {' '}
          conta
        </h1>
        <p>Faça seu cadastro de forma rápida e fácil.</p>
      </ContentTitle>
      <>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            type="text"
            name="name"
            placeholder="Nome"
            register={register}
            iconLeft={<PersonIcon color="#7A7A80" />}
            className="input-style"
          />

          <Input
            type="cpf"
            name="cpf"
            placeholder="CPF"
            register={register}
            maxLength={11}
            error={errors?.cpf?.message}
            iconLeft={<CpfIcon />}
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
          <Input
            type="password"
            name="passwordConfirmation"
            placeholder="Repetir senha"
            register={register}
            error={errors?.passwordConfirmation?.message || pageError}
            iconLeft={<PasswordIcon />}
            className="input-style"
          />

          <div className="button-container">
            <Button
              className="button-style"
              type="submit"
            >
              Cadastrar
            </Button>
          </div>
        </form>
      </>
    </Container>
  );
};
export default Register;
