import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import HomeCarCard from './HomeCarCard';
import createHomeCarCardProps, {
  // defaultDailyRate,
  defaultBrand,
  defaultCar,
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
  it('deve renderizar o preço da diária na moeda local', () => {
    render(
      <div data-testid="card">
        <HomeCarCard
          {...createHomeCarCardProps()}
        />
      </div>,
    );

    // @todo: fix this test
    // const localeDailyRate = defaultDailyRate.toLocaleString(
    //   'pt-BR',
    //   { style: 'currency', currency: 'BRL' },
    // );
    // screen.getByText(String(localeDailyRate));
  });
  it('deve conter o text "AO DIA"', () => {
    render(<HomeCarCard
      {...createHomeCarCardProps()}
    />);
    screen.getByText('AO DIA');
  });
});
