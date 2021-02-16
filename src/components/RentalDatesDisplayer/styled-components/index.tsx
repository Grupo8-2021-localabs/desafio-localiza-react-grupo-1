import styled from 'styled-components';

export const Container = styled.div`
    color: #AEAEB3;
    width: 100%;
    height: 89px;

    box-sizing: border-box;
    padding: 24px 6px;

    @media(min-width: 375px) {
    padding: 24px;
    }

    font-family: 'Archivo', sans-serif;
    text-align: left;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
`;
