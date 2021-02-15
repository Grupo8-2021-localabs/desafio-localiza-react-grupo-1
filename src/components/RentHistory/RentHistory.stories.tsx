import { Story, Meta } from '@storybook/react';
import dateToString from '../common/helpers/dateToString';
import RentHistory from './RentHistory';
import type { IProps } from './types';

export default {
  title: 'Components/RentHistory',
  component: RentHistory,
  argTypes: {
    startDate: String,
    endDate: String,
  },
} as Meta;

const Template: Story<IProps> = (args: IProps) => <RentHistory {...args} />;

const today = new Date();
const tomorrow = new Date();
tomorrow.setDate(today.getDate() + 1);

export const Primary = Template.bind({});
Primary.args = {
  startDate: dateToString(today),
  endDate: dateToString(tomorrow),
};
