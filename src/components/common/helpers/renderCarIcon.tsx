import EnergyIcon from '../../icons/EnergyIcon';
import HybridIcon from '../../icons/HybridIcon';
import GasolineIcon from '../../icons/GasolineIcon';
import SpeedIcon from '../../icons/SpeedIcon';
import AccelerationIcon from '../../icons/AccelerationIcon';
import PersonIcon from '../../icons/PersonIcon';
import TransmissionIcon from '../../icons/TransmissionIcon';
import PowerIcon from '../../icons/PowerIcon';

export const renderIcon = (Icon) => (color) => <Icon color={color} />;

export const IconMap = new Map([
  ['energy', renderIcon(EnergyIcon)],
  ['gasoline', renderIcon(GasolineIcon)],
  ['hybrid', renderIcon(HybridIcon)],
  ['speed', renderIcon(SpeedIcon)],
  ['acceleration', renderIcon(AccelerationIcon)],
  ['transmission', renderIcon(TransmissionIcon)],
  ['person', renderIcon(PersonIcon)],
  ['power', renderIcon(PowerIcon)],
]);
