import { Story, Meta } from '@storybook/react';
import HeaderCalendar from './HeaderCalendar';
import type { IProps } from './types';

export default {
  title: 'Components/HeaderCalendar',
  component: HeaderCalendar,
  argTypes: {},
} as Meta;

const Template: Story<IProps> = (args: IProps) => <HeaderCalendar {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
