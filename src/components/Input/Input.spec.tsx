import { render, screen } from '@testing-library/react';
import Input from './Input';

describe('<Input>', () => {
  it('deve renderizar o input', () => {
    render(<Input label="test_label" />);
    screen.getByText('test_label');
  });
});
