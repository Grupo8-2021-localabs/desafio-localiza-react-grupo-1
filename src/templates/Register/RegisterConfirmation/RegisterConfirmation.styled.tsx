import styled from 'styled-components';

export const RegisterConfirmationContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #1b1b1f;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  padding: 16px;
`;

export const CheckBox = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  width: 60px;
  height: 67px;
  border-style: solid;
  border-color: #29292e;
  border-radius: 5;
  border-width: 5px;
  margin-top: 52px;
  margin-bottom: 46px;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 80px;
  h1 {
    font-family: 'Archivo';
    font-weight: 600;
    font-size: 30px;
    line-height: 33px;
    color: #e1e1e6;
    margin-bottom: 16px;
    text-align: center;
  }
  p {
    font-family: 'Inter';
    font-weight: normal;
    font-size: 15px;
    line-height: 25px;
    color: #a8a8b3;
    text-align: center;
  }
`;

export const OkButton = styled.button`
  align-items: center;
  justify-content: center;
  display: flex;
  text-align: center;
  border: none;
  outline: none;
  width: 80px;
  height: 56px;
  font-family: 'Inter';
  font-weight: normal;
  font-size: 15px;
  line-height: 18px;
  background-color: #29292e;
  color: #ffff;
  text-align: center;
  cursor: pointer;
  &:hover {
    background-color: #505057;
  }
`;
