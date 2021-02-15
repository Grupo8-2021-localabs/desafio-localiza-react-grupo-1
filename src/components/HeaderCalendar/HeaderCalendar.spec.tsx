import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import HeaderCalendar from './HeaderCalendar';

describe('<HeaderCalendar>', () => {
  it('deve renderizar o calendário', () => {
    render(<HeaderCalendar />);
  });
});
