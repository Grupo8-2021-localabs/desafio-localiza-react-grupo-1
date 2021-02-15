import styled from 'styled-components';

export const Container = styled.div`
    background-color: #DAF3E5;
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
    justify-content: space-around;
    align-items: center;
`;

export const PeriodText = styled.div`
    font-size: 1em;
    line-height: 1em;
    font-weight: 500;
    color: #03B252;
`;
