import { InputHTMLAttributes } from 'react';
import styled from 'styled-components';

interface IInputTag extends InputHTMLAttributes<HTMLInputElement> {
  disabled: boolean;
}

export const Content = styled.div`
  display: flex;
  margin-left: -3px;
`;

export const IconContentLeft = styled.div`
  background: #f2f2fa;
  margin-right: 1px;
  margin-left: 2px;
  margin-top: 0px;

  .icon-left {
    position: relative;
    top: 17px;
    margin: 11px 16px;
  }
`;

export const IconContentRight = styled.div`
  background: #f2f2fa;
  margin-left: 2px;
  margin-top: 0px;

  .icon-right {
    position: relative;
    top: 17px;
    margin: 11px 16px;
  }
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

export const Error = styled.div`
  color: #b00020;
  margin: 0.3em 0 0.3em 0;
  font-size: 14px;
`;
