export interface User {
    cpf: string,
    id: number
    name: string,
    role: 'Person' | 'Operator'
    token: string,
}

export interface ApiAvailableCar {
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

export interface AppAvailableCar {
    id: number,
    model: string,
    brand: string,
    dailyRate: number,
    imageArray: string[],
    fuelType: 'energy' | 'hybrid' | 'gasoline',
}
