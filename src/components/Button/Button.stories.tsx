import { Story, Meta } from '@storybook/react';
import Button from './Button';
import type { IProps } from './types';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    background: { control: 'color' },
    color: { control: 'color' },
    border: { control: 'color' },
  },
} as Meta;

const Template: Story<IProps> = (args: IProps) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Primary',
  background: '#DC1637',
  color: '#FFFFFF',
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Secondary',
  background: '#FFFFFF',
  color: '#DC1637',
  border: '#DC1637',
};

export const Loading = Template.bind({});
Loading.args = {
  children: 'Button',
  loading: true,
};

export const IconLeft = Template.bind({});
IconLeft.args = {
  children: 'Button',
  iconLeft: '✨',
};

export const IconRight = Template.bind({});
IconRight.args = {
  children: 'Button',
  iconRight: '🔥',
};

export const BothIcons = Template.bind({});
BothIcons.args = {
  children: 'Button',
  iconLeft: '✨',
  iconRight: '🔥',
};
