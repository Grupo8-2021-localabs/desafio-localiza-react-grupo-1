import { Story, Meta } from '@storybook/react';
import Header from './Header';
import type { IProps } from './types';

export default {
  title: 'Components/common/Header',
  component: Header,
  argTypes: {
    title: String,
    description: String,
  },
} as Meta;

const Template: Story<IProps> = (args: IProps) => <Header {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'Listagem',
  description: '12 carros',
};
