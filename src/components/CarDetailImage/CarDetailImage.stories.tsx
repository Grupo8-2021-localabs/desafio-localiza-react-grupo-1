import { Story, Meta } from '@storybook/react';
import CarDetailImage from './CarDetailImage';
import type { IProps } from './types';

export default {
  title: 'Components/CarDetail/Image',
  component: CarDetailImage,
  argTypes: {},
} as Meta;

const Template: Story<IProps> = (args: IProps) => <CarDetailImage {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  imageArray: [
    'https://via.placeholder.com/280x132',
    'https://via.placeholder.com/280x132',
  ],
};
