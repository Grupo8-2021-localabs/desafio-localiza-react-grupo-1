/* eslint-disable object-curly-newline */
import { FC } from 'react';
import {
  InputContainer,
  Content,
  IconContentLeft,
  IconContentRight,
  InputTag,
  Error,
} from './styled-components';
import { IProps } from './types';

const Input: FC<IProps> = ({
  disabled = false,
  iconLeft,
  iconRight,
  label,
  error,
  placeholder,
  name,
  className,
  register,
  ...rest
}) => (
  <InputContainer className={className}>
    <label htmlFor={label}>{label}</label>
    <Content>
      <IconContentLeft>{iconLeft && <span className="icon-left">{iconLeft}</span>}</IconContentLeft>
      <InputTag
        id={label}
        disabled={disabled}
        placeholder={placeholder}
        name={name}
        ref={register}
        {...rest}
      />
      <IconContentRight>
        {iconRight && <span className="icon-right">{iconRight}</span>}
      </IconContentRight>
    </Content>
    {error && <Error>{error}</Error>}
  </InputContainer>
);

export default Input;
