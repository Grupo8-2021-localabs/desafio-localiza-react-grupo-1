import { useRouter } from 'next/router'
import * as S from "../Register/RegisterConfirmation/RegisterConfirmation.styled";
import Check from '../../components/icons/RegisterConfirmation/Check'
import Union from '../../components/icons/RegisterConfirmation/Union'

const ConfirmationAluguel = () => {

  const router = useRouter();

  return (
    <S.RegisterConfirmationContainer>
         <Union />
      <S.CheckBox>
        <Check />
      </S.CheckBox>
      <S.TextContainer>
        <h1>Carro alugado!</h1>
        <p>Agora você só precisa ir</p>
        <p>até a concessionária da RENTX</p>
        <p>pegar o seu automóvel.</p>
      </S.TextContainer>
      <S.OkButton 
        onClick={() => {
          console.log("Aluguel Confirmado com sucesso");
          setTimeout(() => {
          router.push("/");
          }, 1000);
        }}>Ok</S.OkButton>
    </S.RegisterConfirmationContainer>
  );
};
export default ConfirmationAluguel;
