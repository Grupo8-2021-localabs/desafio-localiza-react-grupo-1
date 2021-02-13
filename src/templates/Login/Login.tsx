import { FormEvent } from 'react';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import useValue from '../../utils/hooks/useValue';
import notEmpty from '../../utils/functions/notEmpty';
import EmailIcon from '../../components/icons/EmailIcon/EmailIcon';
import PasswordIcon from '../../components/icons/PasswordIcon/PasswordIcon';
import { Container, ContentTitle, TextLinkRegister } from './styled-components/index';

const Login = () => {
  const [email, handleEmail, emailValidation] = useValue(
    '',
    notEmpty,
    'Preencha o campo de e-mail',
  );
  const [password, handlePassword, passwordValidation] = useValue(
    '',
    notEmpty,
    'Preencha o campo de senha',
  );

  const handleOnSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(email, password);
  };
  return (
    <Container>
      <ContentTitle>
        <h1>
          Seja
          <br /> Bem-vindo
        </h1>
        <p>Faça seu login para começar uma experiência incrível.</p>
      </ContentTitle>
      <form onSubmit={handleOnSubmit}>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmail}
          error={emailValidation[0] ? undefined : emailValidation[1]}
          iconLeft={<EmailIcon />}
          className="input-style"
        />

        <Input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={handlePassword}
          error={passwordValidation[0] ? undefined : passwordValidation[1]}
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
