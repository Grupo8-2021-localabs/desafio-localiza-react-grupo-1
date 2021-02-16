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

export const Label = styled.p`
  color: #7a7a80;
  font-size: 0.65em;
  font-family: 'Archivo', sans-serif;
  margin: 0;
  margin-bottom: 9px;
`;
export const DatePickerStyle = styled.div`
  .react-datepicker-popper {
    &:last-child {
      transform: translate3d(130px, 0px, 0px) !important;
      overflow: hidden;
      position: absolute;
      right: 0;
    }
  }

  .react-datepicker-wrapper {
    width: 100%;
    input {
      width: 100%;
      height: 35px;
      padding: 8px;
      margin: 4px;
      border-radius: 8px;
      background-color: #1b1b1f;
      font-family: 'Inter', sans-serif;
      font-size: 15px;
      font-weight: 300;
      line-height: 1.5;
      color: #ffffff;
      border: 0px;
    }
  }
`;

export const ContentCustomInput = styled.div`
  cursor: pointer;
  font-family: 'Inter', sans-serif;
`;
