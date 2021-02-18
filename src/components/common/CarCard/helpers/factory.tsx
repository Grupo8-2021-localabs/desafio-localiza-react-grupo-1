import { IProps } from '../types';

export const defaultModel = 'huracan';
export const defaultBrand = 'lamborghini';
export const defaultDailyRate = 520;
export const defaultImageArray = [
  'https://via.placeholder.com/160x92',
  'https://via.placeholder.com/160x92',
];
export const defaultFuelType = 'energy';
export const defaultCurrent = false;
export const defaultHistory = false;

export const createCarCardProps = (customizedProps?: Partial<IProps>): IProps => ({
  model: defaultModel,
  brand: defaultBrand,
  dailyRate: defaultDailyRate,
  imageArray: defaultImageArray,
  fuelType: defaultFuelType,
  isCurrent: defaultCurrent,
  isHistory: defaultHistory,
  ...customizedProps,
});

export default createCarCardProps;
