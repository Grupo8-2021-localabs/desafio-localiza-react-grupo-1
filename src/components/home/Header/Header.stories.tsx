import { Story, Meta } from '@storybook/react';
import Header from './Header';
import type { IProps } from './types';

export default {
  title: 'Components/Home/Header',
  component: Header,
  argTypes: {},
} as Meta;

const Template: Story<IProps> = (args: IProps) => <Header {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
