import { useRouter } from 'next/router'
import * as S from "./RegisterConfirmation.styled";
import Check from '../../../components/icons/RegisterConfirmation/Check'

const RegisterConfirmation = () => {

  const router = useRouter();

  return (
    <S.RegisterConfirmationContainer>
      {/* <S.VectorsContainer>
        <S.Vector1 />
        <S.Vector2 />
        <S.Vector3 />
      </S.VectorsContainer> */}
      <S.CheckBox>
        <Check />
      </S.CheckBox>
      <S.TextContainer>
        <h1>Conta criada!</h1>
        <p>Agora é só fazer login e aproveitar.</p>
      </S.TextContainer>
      <S.OkButton 
        onClick={() => {
          console.log("Cadastro Confirmado com sucesso");
          setTimeout(() => {
          router.push("/");
          }, 2000);
        }}>Ok</S.OkButton>
    </S.RegisterConfirmationContainer>
  );
};
export default RegisterConfirmation;
