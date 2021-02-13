import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import EmailIcon from '../../components/icons/EmailIcon/EmailIcon';
import PasswordIcon from '../../components/icons/PasswordIcon/PasswordIcon';
import { Container, ContentTitle, TextLinkRegister } from './styled-components/index';

const Login = () => (
  <Container>
    <ContentTitle>
      <h1>
        Seja
        <br /> Bem-vindo
      </h1>
      <p>Faça seu login para começar uma experiência incrível.</p>
    </ContentTitle>
    <form>
      <Input type="email" placeholder="Email" iconLeft={<EmailIcon />} className="input-style" />

      <Input
        type="password"
        placeholder="Senha"
        iconLeft={<PasswordIcon />}
        className="input-style"
      />
      <TextLinkRegister>
        <a href="https://www.localiza.com/brasil/pt-br/cadastro/dados-pessoais">
          Ainda não sou cliente
        </a>
      </TextLinkRegister>

      <div className="button-container">
        <Button className="button-style">Login</Button>
      </div>
    </form>
  </Container>
);

export default Login;
