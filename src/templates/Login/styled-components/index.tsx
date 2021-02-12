import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
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
  .button-container {
    margin-top: 70px;
    display: flex;
    justify-content: center;
  }
  .button-style {
    padding-left: 165px;
  }
`;

export const Content = styled.div`
  display: flex;
`;

export const IconContent = styled.div`
  background: #f2f2fa;
  margin-right: 1px;
  margin-top: 8px;

  .icon-style {
    position: relative;
    top: 3px;
    margin: 11px 16px;
  }
`;
