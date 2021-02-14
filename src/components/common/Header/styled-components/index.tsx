import styled from 'styled-components';

export const Container = styled.div`
    background-color: #1B1B1F;
    width: 100%;
    height: 89px;
    color: #FFFFFF;

    box-sizing: border-box;
    padding: 24px 12px;

    @media(min-width: 375px) {
    padding: 24px;
    }

    font-family: 'Archivo', sans-serif;
    text-align: left;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const SmallText = styled.div`
    color: #7A7A80;

    font-size: 0.75em;
    line-height: 1em;
    letter-spacing:0.04em;
    font-weight: 500;
`;
