import { useState, useCallback } from 'react';
import DayPicker, { DateUtils, DayModifiers, RangeModifier } from 'react-day-picker';
import { useRouter } from 'next/router';
import {
  months,
  weekdaysLong,
  weekdaysShort,
} from '../../components/common/helpers/DayPickerTranslations';

import dateToString from '../../components/common/helpers/dateToString';
import {
  Container,
  Content,
  Header,
  HeaderDescription,
  HeaderSelectedDate,
  InitialDate,
  EndDate,
  Calendar,
  DateValue,
} from './styled-components';
import 'react-day-picker/lib/style.css';
import Button from '../../components/Button/Button';

interface IInitialsState {
  from: Date;
  to: Date;
}

const ChooseDate: React.FC = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [initialState, setInitialState] = useState<IInitialsState>({} as IInitialsState);

  const router = useRouter();

  const handleDayClick = useCallback(
    (day: Date, modifiers: DayModifiers) => {
      const range = DateUtils.addDayToRange(day, initialState as RangeModifier);

      if (!modifiers.disabled) setInitialState(range);
    },
    [initialState],
  );

  const handleChangeMonth = useCallback((month: Date) => setCurrentMonth(month), []);

  const handleConfirmDate = useCallback(() => {
    if (initialState.from && initialState.to) {
      router.push(`/home?start_date=${initialState.from}&end_date=${initialState.to}`);
    } else {
      alert('Ocorreu um erro! Tente novamente mais tarde.');
    }
  }, [router, initialState]);

  const { from, to } = initialState;

  const modifiers = {
    start: initialState.from,
    end: initialState.to,
  };

  return (
    <Container>
      <Content>
        <Header>
          <HeaderDescription>
            <h1>Escolha a data e encontre um carro.</h1>
          </HeaderDescription>
          <HeaderSelectedDate>
            <InitialDate>
              <p>DE</p>
              {initialState.from ? <h4>{dateToString(initialState.from)}</h4> : <DateValue />}
            </InitialDate>

            <EndDate>
              <p>ATÉ</p>
              {initialState.to ? <h4>{dateToString(initialState.to)}</h4> : <DateValue />}
            </EndDate>
          </HeaderSelectedDate>
        </Header>
        <Calendar>
          <DayPicker
            fromMonth={new Date()}
            onMonthChange={handleChangeMonth}
            showOutsideDays
            selectedDays={[from, { from, to }]}
            modifiers={modifiers}
            onDayClick={handleDayClick}
            disabledDays={[
              {
                before: new Date(Date.now()),
              },
            ]}
            locale="pt"
            months={months}
            weekdaysLong={weekdaysLong}
            weekdaysShort={weekdaysShort}
            firstDayOfWeek={0}
          />
          <Button onClick={handleConfirmDate}>Continuar</Button>
        </Calendar>
      </Content>
    </Container>
  );
};

export default ChooseDate;
