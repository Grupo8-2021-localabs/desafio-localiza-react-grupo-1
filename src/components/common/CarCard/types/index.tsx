export interface IProps {
  id: number;
  brand: string;
  dailyRate: number;
  imageArray: string[];
  fuelType: 'energy' | 'gasoline' | 'hybrid';
  isCurrent?: boolean;
  isHistory?: boolean;
  model: string;
}
