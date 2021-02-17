import styled from 'styled-components';

export const Container = styled.div`
  background-color: #1b1b1f;
  width: 100%;
  height: 112px;
  color: #ffffff;

  box-sizing: border-box;
  padding: 24px 12px;

  @media (min-width: 375px) {
    padding: 24px;
  }
  @media (min-width: 640px) {
    height: 89px;
  }
  font-family: 'Archivo', sans-serif;
  text-align: left;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const SmallText = styled.div`
  color: #7a7a80;

  font-size: 0.75em;
  line-height: 1em;
  letter-spacing: 0.04em;
  font-weight: 500;
`;
