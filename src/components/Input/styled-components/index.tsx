import { InputHTMLAttributes } from 'react';
import styled from 'styled-components';

interface IInputTag extends InputHTMLAttributes<HTMLInputElement> {
  disabled: boolean;
}

export const InputTag = styled.input<IInputTag>`
  width: 327px;
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

  .icon-left,
  .icon-right {
    padding: 0 8px;
  }
`;

export const Error = styled.div`
  color: #b00020;
  margin: 0.3em 0 0.3em 0;
  font-size: 14px;
`;
