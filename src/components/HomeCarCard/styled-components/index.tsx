import styled from 'styled-components';

export const Container = styled.div`
    background-color: #F4F5F6;
    width: 343px;
    height: 240px;

    box-sizing: border-box;
    padding: 24px;
    margin: 0 16px;

    font-family: 'Archivo', sans-serif;
    text-align: left;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

export const SmallText = styled.div`
    text-transform: uppercase;
    color: #AEAEB3;

    font-size: 0.625em;
    line-height: 0.81em;
    letter-spacing:0.04em;
    font-weight: 500;
`;

interface ILargeText {
    color?: string;
}

export const LargeText = styled.div<ILargeText>`
    text-transform: capitalize;
    color: ${(props) => props.color || '#47474D'};

    font-size: 1.25em;
    line-height: 1.625em;
    font-weight: 500;
`;

export const HeaderContainer = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: flex-start;
`;

export const Image = styled.img`
    display: block;
    width: 252px;
    height: 119px;
`;
