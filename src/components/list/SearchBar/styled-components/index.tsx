import styled from 'styled-components';
import { InputHTMLAttributes } from 'react';

export const Container = styled.div`
    width: 100%;
    height: 86px;

    font-family: 'Archivo', sans-serif;
    text-align: left;

    position: relative;
`;

export const Dummy = styled.div`
    width: 100%;
    height: 50%;
    background-color: #1B1B1F;
    margin-bottom: 50%;
`;

export const SearchBarContainer = styled.div`
    display: flex;
    width: calc(100% - 32px);
    height: 56px;

    position: absolute;
    top: 0;

    margin: 10px 16px;
`;

export const InputTag = styled.input<InputHTMLAttributes<HTMLInputElement>>`
  width: 100%;
  height: 56px;
  border: none;
  outline: none;
  background: #f2f2fa;
  box-sizing: border-box;
  padding: 19px 24px;
`;

export const IconContent = styled.div`
  background: #f2f2fa;
  width: 56px;
  height: 56px;
  margin-top: 0px;
  border-left: solid 2px #ffffff;

  span {
    position: relative;
    top: 17px;
    margin: 11px 16px;
  }
`;
