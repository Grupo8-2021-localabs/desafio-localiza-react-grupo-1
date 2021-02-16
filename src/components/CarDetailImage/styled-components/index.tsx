import styled from 'styled-components';

export const Container = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

export const Image = styled.img`
    display: block;
    width: 252px;
    height: 119px;
`;

export const Header = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const ArrowLeft = styled.p`
    transform: rotate(135deg);
    border: solid #7A7A80;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 3px;
    margin-top: 18px;
`;
