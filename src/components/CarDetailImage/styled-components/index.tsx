import styled from 'styled-components';

export const Container = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

export const Image = styled.img`
    display: block;
    margin-top: 50px;
    max-width: 450px;
    max-height: 450px;

    @media(max-width: 768px){
    width: 280px;
    height: 132px;
    margin-top: 0px;
    }
`;

export const Header = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 32px;
`;

export const ArrowLeft = styled.p`
    transform: rotate(135deg);
    border: solid #7A7A80;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 3px;
    margin-top: 18px;
`;

export const ContainerCircle = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  flex: 1;
  justify-content: flex-end;
`;


export const Circle = styled.div`
  width: 4px;
  height: 4px;
  margin-right: 8px;
  border-radius: 50px;
  background-color: ${(props) => (props ? "#47474D" : "#AEAEB3")};
  transform: rotate(180deg);
`;

export const DetailsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;

    @media(max-width: 860px){
    flex-direction: column;
    }
`;

export const HeaderDataContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 30px;
    @media(max-width: 860px){
    justify-content: space-between;
    }
`;

export const CarName = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 25px;
    @media(min-width: 860px){
    margin-right: 305px;
    }

    h1 {
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 11px;
    color: #7a7a80;
    margin-bottom: 5px;
  }

    h2 {
    font-style: normal;
    font-weight: 600;
    font-size: 27px;
    line-height: 27px;
    color: #3d3d4d;
  }
`

export const CarPrice = styled.div`
    display: flex;
    flex-direction: column;
    padding: 25px;
    @media(min-width: 860px){
    margin-left: 285px;
    }


    h1 {
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 11px;
    color: #7a7a80;
    margin-bottom: 5px;
  }

    h2 {
    font-style: normal;
    font-weight: 600;
    font-size: 27px;
    line-height: 27px;
    color: #DC1637;
  }
`

export const BigDataContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 15px;
    @media(min-width: 860px){
    margin-right: 100px;
    align-items: flex-start;
    }
`;

export const DataContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    margin-left: 17px;
    margin-bottom: 8px;
    @media(max-width: 860px){
    margin-left: 7px;
    }
`;

export const DataCard = styled.div`
    width: 109px;
    height: 92px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    background-color: #F4F5F6;
    margin-left: 8px;

    p{
       color: #7A7A80;
       margin-top: 14px;
    }
`;

export const RentContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-left: 30px;
    @media(max-width: 860px){
    margin-left: 0px;
    }
`;

export const DateContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 30px;

    h1 {
    font-style: normal;
    font-weight: 500;
    font-size: 10px;
    line-height: 11px;
    color: #AEAEB3;
    margin-bottom: 9px;
  }

    h2 {
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 18px;
    color: #DC1637;
  }
`

export const BigPriceContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const PriceSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #F4F5F6;
    margin-left: 35px;
    max-height:100%;
    @media(max-width: 860px){
    margin-left: 0px;
    }

`;

export const PriceContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 24px;

    h3{
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 26px;
    color: #3D3D4D;
    margin-left: 50px;
    }
`;

export const Text = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 55px;

    h1 {
    font-style: normal;
    font-weight: 500;
    font-size: 10px;
    line-height: 11px;
    color: #A0A0B3;
    margin-bottom: 9px;
  }

    h2 {
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 18px;
    color: #47474D;
  }
`

export const ButtonRent = styled.button`

  width: 327px;
  height: 56px;
  background-color: #DC1637;
  border: none;
  outline: none;
  color: #FFFF;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  margin-top: 25px;
  margin-bottom: 16px;

  @media(max-width: 860px){
    margin-bottom: 28px;
    }

  :hover{
    background-color: #b9122e;
  }
`




