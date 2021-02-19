import { Story, Meta } from '@storybook/react';
import CarCard from './CarCard';
import type { IProps } from './types';
import createCarCardProps from './helpers/factory';

export default {
  title: 'Components/common/CarCard',
  component: CarCard,
  argTypes: {
    model: { control: 'text' },
    brand: { control: 'text' },
    dailyRate: {
      control: {
        type: 'range', min: 80, max: 600, step: 1,
      },
    },
  },
} as Meta;

const Template: Story<IProps> = (args: IProps) => <CarCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  ...createCarCardProps(),
};
