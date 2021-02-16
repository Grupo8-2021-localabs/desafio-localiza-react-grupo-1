import { FC } from 'react';
import { IProps } from './types';
import {
  Container,
  SmallText,
} from './styled-components';
import { IconMap } from '../common/helpers/renderCarIcon';

const Header: FC<IProps> = ({ text, icon }: IProps) => {
  const renderIcon = IconMap.get(icon);

  return (
    <Container>
      {renderIcon && renderIcon('#47474D')}
      <SmallText>{text}</SmallText>
    </Container>
  );
};

export default Header;
