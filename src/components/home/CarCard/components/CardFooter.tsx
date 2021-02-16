import { FC } from 'react';
import { IProps } from '../types';
import { FooterContainer } from '../styled-components';
import NavDots from '../../../NavDots';
import { IconMap } from '../../../common/helpers/renderCarIcon';

const CardFooter: FC<Partial<IProps>> = ({ fuelType, imageArray }: IProps) => {
  const renderIcon = IconMap.get(fuelType);
  return (
    <FooterContainer>
      {renderIcon('#AEAEB3')}
      <NavDots imageArray={imageArray} />
    </FooterContainer>
  );
};

export default CardFooter;
