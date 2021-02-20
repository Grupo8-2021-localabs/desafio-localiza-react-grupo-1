import axios, { AxiosResponse } from 'axios';
import {
  IUser,
  IAppAvailableCar,
  IUserRegistration,
  IAppAppointment
} from './types';
import { apiAppointmentToAppAppointment, apiCarToAppCar } from './types/adapters';

const api = axios.create({
  baseURL: 'https://localizatrescamadas.azurewebsites.net/',
});

const authorizationHeaders = token => ({
  headers: {
    Authorization: `Bearer ${token}`
  }
});

export const login = (cpf: string, password: string): Promise<AxiosResponse<IUser>> => api
  .post('/clients/login', { cpf, password });

export const loadAvailableCarsList = (): Promise<IAppAvailableCar[]> => api
  .get('/cars/availableCars').then((response) => response.data.map(apiCarToAppCar));

export const registerUser = (user: IUserRegistration): Promise<AxiosResponse> => api
  .post('/clients', user);

export const loadAppointmentList = (cpf: string, token: string): Promise<IAppAppointment[]> => api
  .get(`/appointments/clients/${cpf}`, authorizationHeaders(token))
  .then((response) => response.data.map(apiAppointmentToAppAppointment));

export default api;
