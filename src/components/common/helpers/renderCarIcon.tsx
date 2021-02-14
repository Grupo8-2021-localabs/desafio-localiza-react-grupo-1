import EnergyIcon from '../../icons/EnergyIcon';
import HybridIcon from '../../icons/HybridIcon';
import GasolineIcon from '../../icons/GasolineIcon';

export const renderCarIconWithColor = (Icon) => (color) => <Icon color={color} />;

export const IconMap = new Map([
  ['energy', renderCarIconWithColor(EnergyIcon)],
  ['gasoline', renderCarIconWithColor(GasolineIcon)],
  ['hybrid', renderCarIconWithColor(HybridIcon)],
]);
