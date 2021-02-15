import styled from 'styled-components';

export const Container = styled.div`
  background-color: #1b1b1f;
  width: 100%;
  height: 89px;
  color: #ffffff;

  box-sizing: border-box;
  padding: 24px 12px;

  @media (min-width: 375px) {
    padding: 24px;
  }

  font-family: 'Archivo', sans-serif;
  text-align: left;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;

export const DragDown = styled.p`
  transform: rotate(45deg);
  border: solid #7a7a80;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  margin-top: 18px;
`;
