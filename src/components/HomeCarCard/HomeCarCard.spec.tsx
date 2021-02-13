import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import HomeCarCard from './HomeCarCard';
import {
  defaultImageArray,
  defaultDailyRate,
  defaultBrand,
  defaultCar,
  createHomeCarCardProps,
} from './helpers/factory';

describe('<HomeCarCard>', () => {
  it('deve renderizar o nome do carro', () => {
    render(<HomeCarCard
      {...createHomeCarCardProps()}
    />);
    screen.getByText(defaultCar);
  });
  it('deve renderizar o nome da marca', () => {
    render(<HomeCarCard
      {...createHomeCarCardProps()}
    />);
    screen.getByText(defaultBrand);
  });
  it('deve renderizar o preço da diária em reais', () => {
    render(
      <div data-testid="card">
        <HomeCarCard
          {...createHomeCarCardProps()}
        />
      </div>,
    );
    screen.getByText(`R$ ${defaultDailyRate}`);
  });
  it('deve conter o text "ao dia"', () => {
    render(<HomeCarCard
      {...createHomeCarCardProps()}
    />);
    screen.getByText(/ao dia/i);
  });
  it('deve conter uma imagem com o link"', () => {
    render(<HomeCarCard
      {...createHomeCarCardProps()}
    />);
    expect(screen.getByRole('img')).toHaveAttribute('src', defaultImageArray[0]);
  });
});
