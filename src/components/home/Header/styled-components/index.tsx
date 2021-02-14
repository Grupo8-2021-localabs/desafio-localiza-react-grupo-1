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
    align-items: flex-start;
`;

export const DragDown = styled.p`
    transform: rotate(45deg);
    border: solid #7A7A80;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 3px;
    margin-top: 18px;
`;
