import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px 24px 0px 24px; 
  @media (min-width: 640px) {
    form {
      align-self: center;
    }
    .input-style {
      width: 327px;
    }
  }

  .button-container {
    margin-top: 70px;
    display: flex;
    justify-content: center;
  }
  .button-style {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const ContentTitle = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 110px;

  @media (max-width: 1024px) {
    margin-top: 80px;
  }

  @media (min-width: 640px) {
    align-items: center;
    text-align: center;
    justify-content: center;
  }

  h1 {
    font-style: normal;
    font-weight: 600;
    font-size: 40px;
    line-height: 44px;
    color: #3d3d4d;
    margin-bottom: 24px;
  }
  p {
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 25px;
    color: #7a7a80;
    width: 260px;
  }
`;

export const RegisterContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const GoBack = styled.button`
  width: 32px;
  height: 32px;
  border: 0px;
  outline: 0px;
  background-color: transparent;
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
  background-color: ${(props) => (props ? "#47474D" : "#AEAEB3")};
  transform: rotate(180deg);
`;

