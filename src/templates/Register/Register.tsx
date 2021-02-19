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

type SignUp = InferType<typeof schema>;

const Register: FC = () => {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: SignUp) => console.log(data);

  const router = useRouter();
  const goBack = () => router.back();

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
          <br /> conta
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
            error={errors?.passwordConfirmation?.message}
            iconLeft={<PasswordIcon />}
            className="input-style"
          />

          <div className="button-container">
            <Button
              className="button-style"
              type="submit"
              onClick={() => {
                console.log('Cadastro Criado com sucesso');
                setTimeout(() => {
                  router.push('/confirmacao-cadastro');
                }, 1000);
              }}
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
