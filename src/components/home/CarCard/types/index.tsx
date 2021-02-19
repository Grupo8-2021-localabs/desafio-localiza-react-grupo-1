export interface IProps {
  model: string,
  brand: string,
  dailyRate: number,
  imageArray: string[],
  fuelType: 'energy' | 'gasoline' | 'hybrid'
}
