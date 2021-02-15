import { FC, useState } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import ptBr from 'date-fns/locale/pt-BR';
import { Container, Label, DatePickerStyle } from './styled-components';
import 'react-datepicker/dist/react-datepicker.css';

registerLocale('pt-BR', ptBr);

const Calendar: FC = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  return (
    <Container>
      <Label>DE</Label>
      <DatePickerStyle>
        <DatePicker
          selected={startDate}
          dateFormat="dd/MM/yyyy"
          locale="pt-BR"
          onChange={(date) => setStartDate(date)}
        />
      </DatePickerStyle>
      <Label>ATÉ</Label>
      <DatePickerStyle>
        <DatePicker
          selected={endDate}
          dateFormat="dd/MM/yyyy"
          locale="pt-BR"
          onChange={(date) => setEndDate(date)}
        />
      </DatePickerStyle>
    </Container>
  );
};

export default Calendar;
