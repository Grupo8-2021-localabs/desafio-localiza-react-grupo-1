import { FC } from 'react';
import { IProps } from './types';
import {
  SmallText, LargeText, Container, TextContainer,
} from './styled-components';

const BasicCarInfo: FC<Partial<IProps>> = ({
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
    <Container>
      <TextContainer>
        <SmallText>{brand}</SmallText>
        <LargeText>{car}</LargeText>
      </TextContainer>
      <TextContainer>
        <SmallText>AO DIA</SmallText>
        <LargeText color="#DC1637">{localeDailyRate}</LargeText>
      </TextContainer>
    </Container>
  );
};

export default BasicCarInfo;
