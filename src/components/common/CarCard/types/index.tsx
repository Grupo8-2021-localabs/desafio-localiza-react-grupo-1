export interface IProps {
  car: string;
  brand: string;
  dailyRate: number;
  imageArray: string[];
  fuelType: 'energy' | 'gasoline' | 'hybrid';
  isCurrent: boolean;
  isHistory: boolean;
}
