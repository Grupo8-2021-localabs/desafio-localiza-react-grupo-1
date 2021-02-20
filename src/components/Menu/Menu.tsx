import { FC, useEffect, useState } from 'react';
import Link from 'next/link'
import { IProps } from './types';
import { Container } from './styled-components';
import CalendarIcon from '../icons/CalendarIcon';
import HomeIcon from '../icons/HomeIcon';
import { useAuth } from '../AuthProvider';


const Menu: FC<IProps> = ({ selected }) => {
  const { authState } = useAuth();
  const [icons, setIcons] = useState([]);

  useEffect(() => {
    const urlEncodedToken = encodeURIComponent(authState.token);
    setIcons([
      [HomeIcon, '/'],
      [CalendarIcon, `/agendamentos/${authState.userCpf}?token=${urlEncodedToken}`],
    ]);
  }, [authState])

  return (
    <Container>
      {icons.map(([Icon, path], i) => {
      if(selected === i){
        return <Icon key={path} color="#DC1637" />
      }

      return (
        <Link key={path} href={path}>
          <a href={path}>
            <Icon color={selected !== i ? "#3D3D4D" : "#DC1637"} />
          </a>
        </Link>
      )

    })}
    </Container>
)};

export default Menu;
