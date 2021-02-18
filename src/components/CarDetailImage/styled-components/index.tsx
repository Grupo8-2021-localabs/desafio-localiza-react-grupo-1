import styled from 'styled-components';

export const Container = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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
    justify-content: space-between;
    align-items: center;
    width: 100%;

    @media(max-width: 768px){
    flex-direction: column;
    }
`;

export const DataContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
`;

export const HeaderDataContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-top: 30px;
`;

export const CarName = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 25px;

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