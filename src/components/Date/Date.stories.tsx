import { Meta, StoryFn } from '@storybook/react';
import Date, { DateProps } from './Date';

export default {
  title: 'Components/Date',
  component: Date,
  args: {
    createdAt: '2023-09-04T23:19:38.709Z',
  },
  argTypes: {
    createdAt: {
      control: {
        type: 'date',
      },
    },
  },
} as Meta;

export const Default: StoryFn<DateProps> = (args) => <Date {...args} />;
