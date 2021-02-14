import { Story, Meta } from '@storybook/react';
import SearchBar from './SearchBar';
import type { IProps } from './types';

export default {
  title: 'Components/list/SearchBar',
  component: SearchBar,
  argTypes: {},
} as Meta;

const Template: Story<IProps> = (args: IProps) => <SearchBar {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
