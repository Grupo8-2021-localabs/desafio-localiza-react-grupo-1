import axios, { AxiosResponse } from 'axios';
import { User, AppAvailableCar, ApiAvailableCar } from './types';

const api = axios.create({
  baseURL: 'https://localizatrescamadas.azurewebsites.net/',
});

export const login = (cpf: string, password: string): Promise<AxiosResponse<User>> => api
  .post('/clients/login', { cpf, password });

export const loadCarList = (): Promise<AppAvailableCar[]> => api
  .get('/cars/availableCars').then((data) => data.data.map((apiCar: ApiAvailableCar) => ({
    id: apiCar.id,
    model: apiCar.model,
    brand: apiCar.brand,
    dailyRate: apiCar.hourPrice,
    imageArray: apiCar.images
      || ['https://via.placeholder.com/252x119,https://via.placeholder.com/252x119'],
    fuelType: 'energy',
  })));

export default api;
