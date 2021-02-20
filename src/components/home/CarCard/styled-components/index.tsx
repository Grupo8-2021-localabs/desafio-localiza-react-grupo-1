import styled from 'styled-components';

export const Container = styled.div`
    background-color: #F4F5F6;
    width: calc(100% - 16px);
    height: 240px;
    border-radius: 6px;
    box-shadow: 0px 2px 7px;
    box-sizing: border-box;
    padding: 24px;
    margin: 16px 8px;

    :hover{
    background-color: #F4F5F6;
    box-shadow: 0px 8px 40px #101011;
    cursor: pointer;
    }

    @media(min-width: 375px){
        width: 343px;
        margin: 16px;
    }

    font-family: 'Archivo', sans-serif;
    text-align: left;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

export const Image = styled.img`
    display: block;
    width: 252px;
    height: 119px;
`;

export const FooterContainer = styled.footer`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
`;
