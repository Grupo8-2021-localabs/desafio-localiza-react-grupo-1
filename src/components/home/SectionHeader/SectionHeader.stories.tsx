import { Story, Meta } from '@storybook/react';
import SectionHeader from './SectionHeader';
import type { IProps } from './types';

export default {
  title: 'Components/Home/SectionHeader',
  component: SectionHeader,
  argTypes: {},
} as Meta;

const Template: Story<IProps> = (args: IProps) => <SectionHeader {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
