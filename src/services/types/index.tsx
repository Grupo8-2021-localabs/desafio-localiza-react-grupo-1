export interface IUser {
    cpf: string,
    id: number
    name: string,
    role: 'Person' | 'Operator'
    token: string,
}

export interface IUserRegistration {
  name: string,
  cpf: string,
  password: string,
  birthay: string,
  cep: string,
  logradouro: string,
  number: number,
  city: string,
  complement: string,
  state: string
}

export interface IApiAvailableCar {
  id: number,
  board: string,
  hourPrice: number,
  luggageCapacity: number,
  tankCapacity: number,
  brand: string,
  category: string,
  fuel: number,
  model: string,
  dateTimeExpectedNextCollected: string,
  images?: string[]
}

export type IFuelType = 'energy' | 'hybrid' | 'gasoline';

export interface IAppAvailableCar {
    id: number,
    model: string,
    brand: string,
    dailyRate: number,
    imageArray: string[],
    fuelType: IFuelType,
}

export interface IApiAppointment {
  id: number,
  schedule: string,
  nameClient: string,
  board: string,
  model: string,
  brand: string,
  fuel: number,
  category: string,
  hourPrice: number,
  hourLocation: number,
  subtotal: number,
  images: string[],
  additionalCosts: number,
  appointmentCollected: string,
  appointmentDelivery: string
}

export interface IAppAppointment {
  id: number,
  model: string,
  brand: string,
  fuelType: IFuelType,
  startDate: string,
  endDate: string,
  isCurrent: boolean,
  imageArray: string[],
  dailyRate: number,
}


