import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import EmailIcon from '../../components/icons/EmailIcon/EmailIcon';
import PasswordIcon from '../../components/icons/PasswordIcon/PasswordIcon';
import { Container, Content, IconContent } from './styled-components/index';

const Login = () => (
  <Container>
    <h1>
      Seja
      <br /> Bem-vindo
    </h1>
    <p>Faça seu login para começar uma experiência incrível.</p>
    <form>
      <Content>
        <IconContent>
          <EmailIcon className="icon-style" />
        </IconContent>
        <Input type="email" placeholder="Email" />
      </Content>

      <Content>
        <IconContent>
          <PasswordIcon className="icon-style" />
        </IconContent>
        <Input type="password" placeholder="Senha" />
      </Content>
      <div className="button-container">
        <Button width="387px" className="button-style">
          Login
        </Button>
      </div>
    </form>
  </Container>
);

export default Login;
