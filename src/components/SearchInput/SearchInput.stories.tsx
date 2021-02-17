import { Story, Meta } from '@storybook/react';
import SearchInput from './SearchInput';
import type { IProps } from './types';

export default {
  title: 'Components/SearchInput',
  component: SearchInput,
} as Meta;

const Template: Story<IProps> = (args: IProps) => <SearchInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Search label',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  label: 'Search label',
};

export const IconButton = Template.bind({});
IconButton.args = {
  label: 'Search label',
  icon: '🔥',
};
