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

export const SubTitle = styled.div`
  display: flex;
  margin-bottom: 24px;
  @media (min-width: 640px) {
    justify-content: center;
    margin-right: 300px;
  }
  h2 {
    font-family: 'Archivo';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 22px;
    color: #3d3d4d;
  }
`;

export const TextLinkRegister = styled.div`
  margin-top: 32px;
  text-align: center;
  a {
    font-size: 13px;
    text-decoration: underline;
    color: #737380;
  }
`;
