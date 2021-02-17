import styled from 'styled-components';

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

