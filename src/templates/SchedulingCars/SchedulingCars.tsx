import { FC } from 'react';
import CarCard from '../../components/common/CarCard/CarCard';
import { Container, CarListContainer } from '../../components/home/Container';
import Menu from '../../components/Menu/Menu';
import Header from '../../components/common/Header/Header';
import { IAppAppointment } from '../../services/types';

interface IProps {
  appointments: IAppAppointment[]
}

const SchedulingCars: FC<IProps> = ({ appointments }: IProps) => (
  <>
    <Container>
      <Header title="Agendamentos" description={`${appointments.length} agendamentos`} />
      <section>
        <CarListContainer>
          {appointments.map((appointment) => (
            <>
              <CarCard key={appointment.id} {...appointment} />
            </>
          ))}
        </CarListContainer>
        <Menu />
      </section>
    </Container>
  </>
);
export default SchedulingCars;
