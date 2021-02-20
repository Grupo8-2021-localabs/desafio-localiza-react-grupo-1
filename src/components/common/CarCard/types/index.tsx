export interface IProps {
  id: number;
  brand: string;
  dailyRate: number;
  imageArray: string[];
  fuelType: 'energy' | 'gasoline' | 'hybrid';
  isCurrent?: boolean;
  model: string;
  startDate?: string,
  endDate?: string,
}
