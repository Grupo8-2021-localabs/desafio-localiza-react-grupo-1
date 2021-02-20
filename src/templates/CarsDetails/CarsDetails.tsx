import { useRouter } from 'next/router'
import * as S from "../../components/CarDetailImage/styled-components/index";
import SpeedIcon from '../../components/icons/SpeedIcon'
import AcelerationIcon from '../../components/icons/AccelerationIcon'
import VolanteIcon from '../../components/icons/PowerIcon'
import GasolinaIcon from '../../components/icons/GasolineIcon'
import MarchaIcon from '../../components/icons/TransmissionIcon'
import PersonIcon from '../../components/icons/PersonIcon'
import Vector from '../../components/icons/Vector/Vector'


const CarsDetails = (): React.ReactElement => {

  const router = useRouter();
  const goBack = () => router.back();

  return (
    <S.Container>
      <S.Header>
        <S.ArrowLeft onClick={goBack} />
        <S.ContainerCircle>
          <S.Circle />
          <S.Circle />
        </S.ContainerCircle>
      </S.Header>
      <S.Image src="http://www.pngmart.com/files/10/Lamborghini-Huracan-PNG-Clipart.png"/>
      <S.HeaderDataContainer>
        <S.CarName>
          <h1>LAMBORGHINI</h1>
          <h2>Huracan</h2>
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
              <SpeedIcon color="#47474D" />
              <p>380km/h</p>
            </S.DataCard>
            <S.DataCard>
              <AcelerationIcon color="#47474D" />
              <p>3.2s</p>
            </S.DataCard>
            <S.DataCard>
              <VolanteIcon color="#47474D" />
              <p>800 HP</p>
            </S.DataCard>
          </S.DataContainer>
          <S.DataContainer>
            <S.DataCard>
              <GasolinaIcon color="#47474D" />
              <p>Gasolina</p>
            </S.DataCard>
            <S.DataCard>
              <MarchaIcon color="#47474D" />
              <p>Auto</p>
            </S.DataCard>
            <S.DataCard>
              <PersonIcon color="#47474D" />
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
            <S.ButtonRent onClick={() => {
              console.log("Carro Alugado com sucesso");
              router.push("/confirmacao-aluguel");
            }}
            >
              Alugar agora

            </S.ButtonRent>
          </S.PriceSection>
        </S.BigPriceContainer>
      </S.DetailsContainer>
    </S.Container>
  )
};
export default CarsDetails;
