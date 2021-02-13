import { FC } from 'react';
import { IProps } from '../types';
import {
  SmallText, LargeText, HeaderContainer, TextContainer,
} from '../styled-components';

const CardHeader: FC<IProps> = ({
  car,
  brand,
  dailyRate,
}: IProps) => {
  const localeDailyRate = dailyRate.toLocaleString(
    'pt-BR',
    {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    },
  );
  return (
    <HeaderContainer>
      <TextContainer>
        <SmallText>{brand}</SmallText>
        <LargeText>{car}</LargeText>
      </TextContainer>
      <TextContainer>
        <SmallText>AO DIA</SmallText>
        <LargeText color="#DC1637">{localeDailyRate}</LargeText>
      </TextContainer>
    </HeaderContainer>
  );
};

export default CardHeader;
