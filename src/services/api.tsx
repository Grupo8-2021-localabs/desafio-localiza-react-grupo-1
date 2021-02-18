import axios, { AxiosResponse } from 'axios';
import {
  User,
  AppAvailableCar,
} from './types';
import { apiCarToAppCar } from './types/adapters';

const api = axios.create({
  baseURL: 'https://localizatrescamadas.azurewebsites.net/',
});

export const login = (cpf: string, password: string): Promise<AxiosResponse<User>> => api
  .post('/clients/login', { cpf, password });

export const loadCarList = (): Promise<AppAvailableCar[]> => api
  .get('/cars/availableCars').then((data) => data.data.map(apiCarToAppCar));

export default api;
