import styled from 'styled-components';

export const Container = styled.div`
    background-color: #F4F5F6;
    width: calc(100% - 16px);
    height: 126px;

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

export const CarDetailContainer = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: flex-start;
    margin-top: 8px;
`;

export const Image = styled.img`
    display: block;
    width: 160px;
    height: 92px;
`;

export const CharacteristicsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    @media(min-width: 375px){
        padding-right: 20px;
    }
`;
