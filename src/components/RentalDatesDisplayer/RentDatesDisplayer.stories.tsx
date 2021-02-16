import { Story, Meta } from '@storybook/react';
import RentDatesDisplayer from './RentDatesDisplayer';
import type { IProps } from './types';

export default {
  title: 'Components/RentDatesDisplayer',
  component: RentDatesDisplayer,
  argTypes: {},
} as Meta;

const Template: Story<IProps> = (args: IProps) => <RentDatesDisplayer {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
