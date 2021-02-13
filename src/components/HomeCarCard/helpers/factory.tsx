import { IProps } from '../types';

export const defaultCar = 'huracan';
export const defaultBrand = 'lamborghini';
export const defaultDailyRate = 520;
export const defaultImageArray = ['https://via.placeholder.com/252x119'];

export const createHomeCarCardProps = (customizedProps? : Partial<IProps>) : IProps => ({
  car: defaultCar,
  brand: defaultBrand,
  dailyRate: defaultDailyRate,
  imageArray: defaultImageArray,
  ...customizedProps,
});

export default createHomeCarCardProps;
