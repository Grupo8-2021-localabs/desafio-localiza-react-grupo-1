import { FC } from 'react';
import { IProps } from '../types';
import { FooterContainer } from '../styled-components';
import EnergyIcon from '../../../icons/EnergyIcon';
import HybridIcon from '../../../icons/HybridIcon';
import GasolineIcon from '../../../icons/GasolineIcon';
import NavDots from './NavDots';

const renderElementWithColor = (Element) => (color) => <Element color={color} />;

const IconMap = new Map([
  ['energy', renderElementWithColor(EnergyIcon)],
  ['gasoline', renderElementWithColor(GasolineIcon)],
  ['hybrid', renderElementWithColor(HybridIcon)],
]);

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
