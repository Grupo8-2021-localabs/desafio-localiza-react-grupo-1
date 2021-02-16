import axios, { AxiosResponse } from 'axios';

const api = axios.create({
  baseURL: 'https://localizaapi.azurewebsites.net',
});

interface User {
    cpf: string,
    id: number
    name: string,
    role: 'Person' | 'Operator'
    token: string,
}

export const login = (cpf: string, password: string): Promise<AxiosResponse<User>> => api
  .post('/clients/login', { cpf, password });

export default api;
