import { Story, Meta } from '@storybook/react';
import PurchaseSummary from './PurchaseSummary';
import type { IProps } from './types';

export default {
  title: 'Components/CarDetail/PurchaseSummary',
  component: PurchaseSummary,
  argTypes: {},
} as Meta;

const Template: Story<IProps> = (args: IProps) => <PurchaseSummary {...args} />;

const startDate = new Date('02/15/2021');
const endDate = new Date('02/15/2021');

export const Primary = Template.bind({});
Primary.args = {
  startDate,
  endDate,
  dailyRate: 450,
};
