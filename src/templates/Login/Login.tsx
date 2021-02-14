import { useForm } from 'react-hook-form';
import { InferType } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

import EmailIcon from '../../components/icons/EmailIcon/EmailIcon';
import PasswordIcon from '../../components/icons/PasswordIcon/PasswordIcon';
import { Container, ContentTitle, TextLinkRegister } from './styled-components/index';
import { schema } from './Login.validations';

type SignIn = InferType<typeof schema>;

const Login = () => {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: SignIn) => console.log(data);

  return (
    <Container>
      <ContentTitle>
        <h1>
          Seja
          <br /> Bem-vindo
        </h1>
        <p>Faça seu login para começar uma experiência incrível.</p>
      </ContentTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="email"
          name="email"
          placeholder="Email"
          register={register}
          error={errors?.email?.message}
          iconLeft={<EmailIcon />}
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
        <TextLinkRegister>
          <a href="https://www.localiza.com/brasil/pt-br/cadastro/dados-pessoais">
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
