import styled from 'styled-components';

export const SearchContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  position: relative;
  bottom: 34px;
  margin: 0 8px;
  .input-style {
    width: -webkit-fill-available;
  }

  @media (min-width: 640px) {
    bottom: 0px;
    margin: 16px;
    .input-style {
      width: 327px;
    }
  }
  @media (min-width: 768px) {
    margin: 25px;
  }
  @media (min-width: 1024px) {
    display: flex;
    justify-content: center;
  }
`;
