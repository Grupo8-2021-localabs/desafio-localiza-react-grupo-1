import {
  IAppAvailableCar,
  IApiAvailableCar,
  IFuelType,
  IApiAppointment,
  IAppAppointment
} from '.';

import dateToString from '../../../src/components/common/helpers/dateToString';

export const apiFuelToAppFuel = (fuelId: number): IFuelType => {
  const fuelMap = new Map<number, IFuelType>([
    [1, 'hybrid'],
    [2, 'gasoline'],
    [3, 'energy'],
  ]);
  const fuel = fuelMap.get(fuelId) || 'hybrid';
  return fuel;
};

export const apiCarToAppCar = (apiCar: IApiAvailableCar) : IAppAvailableCar => ({
  id: apiCar.id,
  model: apiCar.model,
  brand: apiCar.brand,
  dailyRate: apiCar.hourPrice * 24,
  imageArray: apiCar.images
      || ['https://via.placeholder.com/252x119,https://via.placeholder.com/252x119'],
  fuelType: apiFuelToAppFuel(apiCar.fuel),
});

export const apiAppointmentToAppAppointment = (apiAppointment: IApiAppointment) : IAppAppointment => {
  const {
    id,
    model,
    brand,
    fuel,
    appointmentCollected,
    appointmentDelivery,
    images,
    hourPrice,
  } = apiAppointment;

  const [startDate, endDate] = [appointmentCollected, appointmentDelivery].map(
      (ISOString): string => {
    const date = new Date(ISOString);
    return dateToString(date);
  });
  const today = new Date();
  const isCurrent = (new Date(appointmentDelivery)).getTime() < today.getTime();

  return {
    id,
    model,
    brand,
    fuelType: apiFuelToAppFuel(fuel),
    startDate,
    endDate,
    isCurrent,
    imageArray: images,
    dailyRate: hourPrice * 24,
  }
}
