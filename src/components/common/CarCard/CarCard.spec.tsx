import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import CarCard from './CarCard';
import {
  defaultImageArray,
  defaultDailyRate,
  defaultBrand,
  defaultModel,
  createCarCardProps,
} from './helpers/factory';

describe('<HomeCarCard>', () => {
  it('deve renderizar o nome do carro', () => {
    render(<CarCard
      {...createCarCardProps()}
    />);
    screen.getByText(defaultModel);
  });
  it('deve renderizar o nome da marca', () => {
    render(<CarCard
      {...createCarCardProps()}
    />);
    screen.getByText(defaultBrand);
  });
  it('deve renderizar o preço da diária em reais', () => {
    render(
      <div data-testid="card">
        <CarCard
          {...createCarCardProps()}
        />
      </div>,
    );
    screen.getByText(`R$ ${defaultDailyRate}`);
  });
  it('deve conter o text "ao dia"', () => {
    render(<CarCard
      {...createCarCardProps()}
    />);
    screen.getByText(/ao dia/i);
  });
  it('deve conter uma imagem com o link"', () => {
    render(<CarCard
      {...createCarCardProps()}
    />);
    expect(screen.getByRole('img')).toHaveAttribute('src', defaultImageArray[0]);
  });
});
