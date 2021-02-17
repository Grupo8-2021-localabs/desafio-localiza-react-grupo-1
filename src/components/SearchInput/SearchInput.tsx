/* eslint-disable object-curly-newline */
import { FC } from 'react';
import { InputContainer, Content, InputTag, IconButton } from './styled-components';
import { IProps } from './types';

const SearchInput: FC<IProps> = ({
  disabled = false,
  label,
  placeholder,
  name,
  className,
  ref,
  icon,
  onClick,
  onChange,
  ...rest
}) => (
  <InputContainer className={className}>
    <label htmlFor={label}>{label}</label>
    <Content>
      <InputTag
        id={label}
        disabled={disabled}
        placeholder={placeholder}
        name={name}
        ref={ref}
        onChange={onChange}
        {...rest}
      />
      <IconButton onClick={onClick}>
        {icon && <span className="icon-style">{icon}</span>}
      </IconButton>
    </Content>
  </InputContainer>
);

export default SearchInput;
