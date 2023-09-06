import { Meta, StoryFn } from '@storybook/react';
import Card, { CardProps } from './Card';

import mock from './mock';

export default {
  title: 'Components/Card',
  component: Card,
  args: {
    post: mock,
  },
} as Meta;

export const Default: StoryFn<CardProps> = (args) => <Card {...args} />;
