import { Story, Meta } from '@storybook/react';
import BasicCarInfo from './BasicCarInfo';
import type { IProps } from './types';
import createCarCardProps from '../home/CarCard/helpers/factory';

export default {
  title: 'Components/BasicCarInfo',
  component: BasicCarInfo,
  argTypes: {
    car: { control: 'text' },
    brand: { control: 'text' },
    dailyRate: {
      control: {
        type: 'range', min: 80, max: 600, step: 1,
      },
    },
  },
} as Meta;

const Template: Story<IProps> = (args: IProps) => <BasicCarInfo {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  ...createCarCardProps(),
};
