import styled from 'styled-components';

export const Dot = styled.span`
    height: 4px;
    width: 4px;
    background-color: #AEAEB3;
    border-radius: 50%;
    display: inline-block;
    margin-right: 8px;

    &.selected {
        background-color: #47474D;
    }
`;
