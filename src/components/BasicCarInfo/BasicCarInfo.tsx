import { FC } from 'react';
import { IProps } from './types';
import {
  SmallText, LargeText, Container, TextContainer,
} from './styled-components';
import numberToCurrency from '../common/helpers/numberToCurrency';

const BasicCarInfo: FC<Partial<IProps>> = ({
  car,
  brand,
  dailyRate,
}: IProps) => {
  const localeDailyRate = numberToCurrency(dailyRate);
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
