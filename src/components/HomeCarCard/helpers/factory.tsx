import { IProps } from '../types';

export const defaultCar = 'huracan';
export const defaultBrand = 'lamborghini';
export const defaultDailyRate = 520;

export const createHomeCarCardProps = (customizedProps? : Partial<IProps>) : IProps => ({
  car: defaultCar,
  brand: defaultBrand,
  dailyRate: defaultDailyRate,
  ...customizedProps,
});

export default createHomeCarCardProps;
