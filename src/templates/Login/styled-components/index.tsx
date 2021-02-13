import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 130px 24px 100px 24px;

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

  @media (min-width: 640px) {
    align-items: center;
    text-align: center;
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
