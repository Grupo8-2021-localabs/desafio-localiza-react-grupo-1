import { useRouter } from 'next/router'
import * as S from "../../components/CarDetailImage/styled-components/index";
import SpeedIcon from '../../components/icons/SpeedIcon'
import AcelerationIcon from '../../components/icons/AccelerationIcon'
import VolanteIcon from '../../components/icons/PowerIcon'
import GasolinaIcon from '../../components/icons/GasolineIcon'
import MarchaIcon from '../../components/icons/TransmissionIcon'
import PersonIcon from '../../components/icons/PersonIcon'
import Vector from '../../components/icons/Vector/Vector'


const CarsDetails = () => {

  const router = useRouter();
  const goBack = () => router.back();

  return (
    <S.Container>
      <S.Header>
        <S.ArrowLeft onClick={goBack}/>
        <S.ContainerCircle>
          <S.Circle />
          <S.Circle />
        </S.ContainerCircle>
     </S.Header>
     <S.Image src={"https://lh3.googleusercontent.com/proxy/ZBNgx05fFNh6cy8nJ1DLMGb2DiRzI14p57FYM0rnuHwlPL-gnI9r2MJI1tq6gCOvyXX_iL5Sc7e88ZHvYA4BNuzU3G7R_Cb3nzQ7YwE8saJcNp-DtbPHKV8CV550rHqhYA"} />
     <S.HeaderDataContainer>
         <S.CarName>
           <h1>FERRARI</h1>
           <h2>Roma</h2>
         </S.CarName>
         <S.CarPrice>
           <h1>AO DIA</h1>
           <h2>R$ 580</h2>
         </S.CarPrice>
       </S.HeaderDataContainer>
     <S.DetailsContainer>
       <S.BigDataContainer>
       <S.DataContainer>
         <S.DataCard>
           <SpeedIcon color={"#47474D"}/>
          <p>380km/h</p>
         </S.DataCard>
         <S.DataCard>
           <AcelerationIcon color={"#47474D"}/>
          <p>3.2s</p>
         </S.DataCard>
         <S.DataCard>
           <VolanteIcon color={"#47474D"}/>
          <p>800 HP</p>
         </S.DataCard>
       </S.DataContainer>
       <S.DataContainer>
         <S.DataCard>
           <GasolinaIcon color={"#47474D"}/>
          <p>Gasolina</p>
         </S.DataCard>
         <S.DataCard>
           <MarchaIcon color={"#47474D"}/>
          <p>Auto</p>
         </S.DataCard>
         <S.DataCard>
           <PersonIcon color={"#47474D"}/>
          <p>2 pessoas</p>
         </S.DataCard>
       </S.DataContainer>
       </S.BigDataContainer>
       <S.BigPriceContainer>
       <S.RentContainer>
         <S.DateContainer>
           <h1>DE</h1>
           <h2>18 Julho 2020</h2>
         </S.DateContainer>
         <Vector />
         <S.DateContainer>
           <h1>ATÉ</h1>
           <h2>20 Julho 2020</h2>
         </S.DateContainer>
       </S.RentContainer>
       <S.PriceSection>
         <S.PriceContainer>
           <S.Text>
             <h1>TOTAL</h1>
             <h2>R$ 580 x3 diárias</h2>
           </S.Text>
           <h3>R$  2,900</h3>
         </S.PriceContainer>
         <S.ButtonAlugar onClick={() => {
              console.log("Carro Alugadocom sucesso");
              router.push("/");
            }}>Alugar agora</S.ButtonAlugar>
       </S.PriceSection>
       </S.BigPriceContainer>
     </S.DetailsContainer>
    </S.Container>
  )
};
export default CarsDetails;
