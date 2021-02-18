import { useRouter } from 'next/router'
import * as S from "../../components/CarDetailImage/styled-components/index";


const CarsDetails = () => {

  const router = useRouter();

  return (
    <S.Container>
      <S.Header>
        <S.ArrowLeft />
        <S.ContainerCircle>
          <S.Circle />
          <S.Circle />
        </S.ContainerCircle>
     </S.Header>
     <S.Image src={"https://lh3.googleusercontent.com/proxy/ZBNgx05fFNh6cy8nJ1DLMGb2DiRzI14p57FYM0rnuHwlPL-gnI9r2MJI1tq6gCOvyXX_iL5Sc7e88ZHvYA4BNuzU3G7R_Cb3nzQ7YwE8saJcNp-DtbPHKV8CV550rHqhYA"} />
     <S.DetailsContainer>
       <S.HeaderDataContainer>
         <S.CarName>
           <h1>FERRARI</h1>
           <h2>Huracan</h2>
         </S.CarName>
         <S.CarPrice>
           <h1>AO DIA</h1>
           <h2>R$ 580</h2>
         </S.CarPrice>
       </S.HeaderDataContainer>
     </S.DetailsContainer>
    </S.Container>
  )
};
export default CarsDetails;
