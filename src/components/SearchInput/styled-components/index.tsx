import { InputHTMLAttributes } from 'react';
import styled from 'styled-components';

interface IInputTag extends InputHTMLAttributes<HTMLInputElement> {
  disabled: boolean;
}

export const Content = styled.div`
  display: flex;
  margin-left: -3px;
`;

export const InputTag = styled.input<IInputTag>`
  width: 100%;
  height: 56px;
  border: none;
  outline: none;
  padding: 5px 10px;
  background: #f2f2fa;
  margin-left: 2px;

  &:disabled,
  &[disabled] {
    background: #e5e7eb;
    cursor: not-allowed;
  }
`;

export const InputContainer = styled.div`
  label {
    font-weight: bold;
    padding-bottom: 8px;
    display: block;
    font-size: 14px;
    color: #374151;
  }
`;
export const IconButton = styled.button`
  width: 56px;
  background: #f2f2fa;
  margin-left: 2px;
  margin-top: 0px;
  border: none;
  outline: none;
  cursor: pointer;

  .icon-style {
    position: relative;
    top: 3px;
    margin: 11px 16px;
  }
`;
