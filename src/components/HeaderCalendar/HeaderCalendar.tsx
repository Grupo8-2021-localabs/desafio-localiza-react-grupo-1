import { FC, useState } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import ptBr from 'date-fns/locale/pt-BR';
import { IProps } from './types';
import { Container, Label, DatePickerStyle, ContentCustomInput } from './styled-components';
import dateToString from '../common/helpers/dateToString';
import 'react-datepicker/dist/react-datepicker.css';

registerLocale('pt-BR', ptBr);

interface ICustomInput {
  value: any;
  onClick: any;
}

const CalendarCustomInput = ({ value, onClick }: ICustomInput) => (
  <ContentCustomInput onClick={onClick}>
    {dateToString(new Date(value.replace(/(\d{2})\/(\d{2})\/(\d{4})/, '$2/$1/$3')))}
  </ContentCustomInput>
);

const HeaderCalendar: FC<IProps> = () => {
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(new Date());

  return (
    <Container>
      <div>
        <Label>DE</Label>
        <DatePickerStyle>
          <DatePicker
            selected={startDate}
            dateFormat="dd/MM/yyyy"
            locale="pt-BR"
            onChange={(date: Date) => setStartDate(date)}
            // @ts-ignore
            customInput={<CalendarCustomInput />}
          />
        </DatePickerStyle>
      </div>
      <div>
        <Label>ATÉ</Label>
        <DatePickerStyle>
          <DatePicker
            selected={endDate}
            dateFormat="dd/MM/yyyy"
            locale="pt-BR"
            onChange={(date: Date) => setEndDate(date)}
            // @ts-ignore
            customInput={<CalendarCustomInput />}
            calendarClassName="react-datepicker-popper"
          />
        </DatePickerStyle>
      </div>
    </Container>
  );
};

export default HeaderCalendar;
