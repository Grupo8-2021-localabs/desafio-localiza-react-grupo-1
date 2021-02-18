import {
  AppAvailableCar,
  ApiAvailableCar,
  FuelType,
} from '.';

export const apiFuelToAppFuel = (fuelId: number): FuelType => {
  const fuelMap = new Map<number, FuelType>([
    [1, 'hybrid'],
    [2, 'gasoline'],
    [3, 'energy'],
  ]);
  const fuel = fuelMap.get(fuelId) || 'hybrid';
  return fuel;
};

export const apiCarToAppCar = (apiCar: ApiAvailableCar) : AppAvailableCar => ({
  id: apiCar.id,
  model: apiCar.model,
  brand: apiCar.brand,
  dailyRate: apiCar.hourPrice,
  imageArray: apiCar.images
      || ['https://via.placeholder.com/252x119,https://via.placeholder.com/252x119'],
  fuelType: apiFuelToAppFuel(apiCar.fuel),
});
