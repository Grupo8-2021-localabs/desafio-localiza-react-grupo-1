import { render, screen } from '@testing-library/react';
import SearchInput from './SearchInput';

describe('<SearchInput>', () => {
  it('deve renderizar o componente de busca', () => {
    render(<SearchInput label="test_label" />);
    screen.getByText('test_label');
  });
});
