import { Story, Meta } from '@storybook/react';
import HomeCarCard from './HomeCarCard';
import type { IProps } from './types';
import createHomeCarCardProps from './helpers/factory';

export default {
  title: 'Components/HomeCarCard',
  component: HomeCarCard,
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

const Template: Story<IProps> = (args: IProps) => <HomeCarCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  ...createHomeCarCardProps(),
};
