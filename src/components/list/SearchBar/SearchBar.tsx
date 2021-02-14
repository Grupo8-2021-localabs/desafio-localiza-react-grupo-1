import { FC } from 'react';
import { IProps } from './types';
import {
  Container, Dummy, SearchBarContainer, IconContent, InputTag,
} from './styled-components';
import SearchIcon from '../../icons/SearchIcon';

const Header: FC<IProps> = () => (
  <Container>
    <Dummy />
    <SearchBarContainer>
      <InputTag
        placeholder="Qual carro você procura?"
      />
      <IconContent>
        <span>
          <SearchIcon />
        </span>
      </IconContent>
    </SearchBarContainer>
  </Container>
);

export default Header;
