import { Story, Meta } from '@storybook/react';
import dateToString from '../common/helpers/dateToString';
import RentCurrent from './RentCurrent';
import type { IProps } from './types';

export default {
  title: 'Components/RentCurrent',
  component: RentCurrent,
  argTypes: {
    endDate: String,
  },
} as Meta;

const Template: Story<IProps> = (args: IProps) => <RentCurrent {...args} />;

const yesterday = new Date();
yesterday.setDate(yesterday.getDate() - 1);

export const Primary = Template.bind({});
Primary.args = {
  endDate: dateToString(yesterday),
};
