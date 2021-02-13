import { Story, Meta } from '@storybook/react';
import Menu from './Menu';
import type { IProps } from './types';

export default {
  title: 'Components/Home/Menu',
  component: Menu,
  argTypes: {},
} as Meta;

const Template: Story<IProps> = (args: IProps) => <Menu {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
