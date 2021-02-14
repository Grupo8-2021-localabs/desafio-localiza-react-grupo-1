import { FC } from 'react';
import { IProps } from './types';
import { Container, SmallText } from './styled-components';

const Header: FC<IProps> = ({ title, description }: IProps) => (
  <Container>
    <h1>{title}</h1>
    <SmallText>{description}</SmallText>
  </Container>
);

export default Header;
