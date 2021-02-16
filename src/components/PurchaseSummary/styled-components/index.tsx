import styled from 'styled-components';

export const Container = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    height: 172px;

    background-color: #F4F5F6;

    box-sizing: border-box;
    padding: 24px;

    font-family: 'Archivo', sans-serif;
`;

export const PriceContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

export const TotalText = styled.div`
    font-size: 1.5em;
    color: #3D3D4D;
`;
