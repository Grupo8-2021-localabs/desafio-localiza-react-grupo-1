import { Story, Meta } from '@storybook/react';
import CharacteristicCard from './CharacteristicCard';
import type { IProps } from './types';

export default {
  title: 'Components/CharacteristicCard',
  component: CharacteristicCard,
  argTypes: {
    text: String,
  },
} as Meta;

const Template: Story<IProps> = (args: IProps) => <CharacteristicCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: 'Auto',
  icon: 'transmission',
};
