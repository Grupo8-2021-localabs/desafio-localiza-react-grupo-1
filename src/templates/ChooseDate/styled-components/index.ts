import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.div`
   width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 45px;
  background: #1b1b1f;
`;

export const HeaderDescription = styled.div`
  > h1 {
    color: #fff;
    font-size: 40px;
    line-height: 34px;
  }
`;

export const HeaderSelectedDate = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 50px;
`;

export const InitialDate = styled.div`
  width: 100px;

  @media(min-width: 600px) {
    width: 200px;
  }

  > p {
    color: #7a7a80;
    font-size: 16px;
    font-weight: 500;
  }

  > h4 {
    font-size: 14px;
    color: #fff;
    margin-top: 12px;
    font-weight: 500;
  }
`;

export const EndDate = styled.div`
  width: 100px;

  @media(min-width: 600px) {
    width: 200px;
  }

  > p {
    color: #7a7a80;
    font-size: 16px;
    font-weight: 500;
  }

  > h4 {
    font-size: 14px;
    color: #fff;
    margin-top: 12px;
    font-weight: 500;
  }
`;

export const DateValue = styled.div`
  width: 100%;
  border-bottom: 2px solid #7a7a80;

  margin-top: 25px;
`;

export const Calendar = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  padding: 0 0 20px 0;

  .DayPicker {
    margin-top: 50px;
    width: 485px;
  }

  .DayPicker-Caption {
    font-size: 20px;
    color: #47474d;
  }

  .DayPicker-Weekday {
    color: #707070;
  }


  .DayPicker-wrapper {
    padding-bottom: 0;
  }

  .DayPicker-NavBar {
    width: 100%;
  }

  .DayPicker-Month {
    width: 100%;
    border-collapse: separate;
    border-spacing: 8px;
    margin: 16px;
  }

  .DayPicker-Day {
    width: 50px;
    height: 50px;

    color: #47474d;
  }

  .DayPicker-Day--outside {
    color: #aeaeb3;
  }

  .DayPicker-Day--selected:not(.DayPicker-Day--start):not(.DayPicker-Day--end) {
    background-color: #FDEDEF !important;
    color: #DC1637;
    border-radius: 0;
    font-weight: 700;
  }

  .DayPicker-Day--start {
    background: #DC1637 !important;
    border-radius: 0;
    color: #fff !important
  }

  .DayPicker-Day--end {
    background: #DC1637 !important;
    border-radius: 0;
    color: #fff !important;
  }

  .DayPicker-Day--disabled {
    color: #aeaeb3;
  }
`;
