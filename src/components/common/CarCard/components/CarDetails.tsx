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

const CarDetails: FC<Partial<IProps>> = ({
  car,
  brand,
  dailyRate,
  fuelType,
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
  const renderIcon = IconMap.get(fuelType);
  return (
    <CarDetailContainer>
      <TextContainer>
        <SmallText>{brand}</SmallText>
        <LargeText>{car}</LargeText>
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
