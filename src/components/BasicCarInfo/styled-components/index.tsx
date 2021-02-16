import styled from 'styled-components';

export const Container = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
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

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: flex-start;
`;
