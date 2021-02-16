import { FC } from 'react';
import { IProps } from '../home/CarCard/types';
import { Dot } from './Dot';

const NavDots: FC<Partial<IProps>> = ({ imageArray }: Partial<IProps>) => (
  <ul>
    {imageArray.map((_, i) => (
      <Dot
        // eslint-disable-next-line react/no-array-index-key
        key={i}
        className={i === 0 ? 'selected' : ''}
      />
    ))}
  </ul>
);

export default NavDots;
