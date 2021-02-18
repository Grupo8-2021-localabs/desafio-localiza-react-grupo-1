import { FC } from 'react';
import { IProps } from '../types';
import {
  SmallText,
  LargeText,
  CarDetailContainer,
  TextContainer,
  CharacteristicsContainer,
} from '../styled-components';
import { IconMap } from '../../helpers/renderCarIcon';
import numberToCurrency from '../../helpers/numberToCurrency';

const CarDetails: FC<Partial<IProps>> = ({
  model,
  brand,
  dailyRate,
  fuelType,
}: IProps) => {
  const localeDailyRate = numberToCurrency(dailyRate);

  const renderIcon = IconMap.get(fuelType);
  return (
    <CarDetailContainer>
      <TextContainer>
        <SmallText>{brand}</SmallText>
        <LargeText>{model}</LargeText>
      </TextContainer>
      <CharacteristicsContainer>
        <TextContainer>
          <SmallText>AO DIA</SmallText>
          <LargeText color="#DC1637">{localeDailyRate}</LargeText>
        </TextContainer>
        {renderIcon('#AEAEB3')}
      </CharacteristicsContainer>
    </CarDetailContainer>
  );
};

export default CarDetails;
