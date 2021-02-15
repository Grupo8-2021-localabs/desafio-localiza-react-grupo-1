import styled from 'styled-components';

export const Container = styled.div`
    background-color: #F4F5F6;
    width: calc(100% - 16px);
    height: 40px;

    box-sizing: border-box;
    margin: 16px 8px;
    padding: 12px;

    @media(min-width: 375px){
        width: 343px;
        margin: 16px;
        padding: 24px;
    }

    font-family: 'Archivo', sans-serif;
    text-align: left;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .current{
        background-color:#DAF3E5;
    }
`;

export const SmallText = styled.div`
    text-transform: uppercase;
    color: #AEAEB3;

    font-size: 0.625em;
    line-height: 0.81em;
    letter-spacing:0.04em;
    font-weight: 500;
`;

export const PeriodText = styled.div`
    font-size: 0.813em;
    line-height: 1em;
    font-weight: 500;
    color: #47474D;
`;
