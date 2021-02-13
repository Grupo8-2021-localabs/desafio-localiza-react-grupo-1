import { FC } from 'react';
import { IProps } from './types';

const HomeCarCard: FC<IProps> = ({
  car,
  brand,
  dailyRate,
}: IProps) => {
  const localeDailyRate = dailyRate.toLocaleString(
    'pt-BR',
    { style: 'currency', currency: 'BRL' },
  );
  return (
    <div>
      <h6>{brand}</h6>
      <h3>{car}</h3>
      <h6>AO DIA</h6>
      <h3>{localeDailyRate}</h3>
    </div>
  );
};

export default HomeCarCard;
