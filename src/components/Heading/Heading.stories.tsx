import { Meta, StoryFn } from '@storybook/react';
import Heading, { HeadingProps } from './Heading';

export default {
  title: 'Components/Heading',
  component: Heading,
  args: {
    title: 'Heading',
  },
} as Meta;

export const Default: StoryFn<HeadingProps> = (args) => <Heading {...args} />;
