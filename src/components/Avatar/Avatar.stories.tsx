import { Meta, StoryFn } from '@storybook/react';
import Avatar, { AvatarProps } from './Avatar';

import mock from './mock';

export default {
  title: 'Components/Avatar',
  component: Avatar,
  args: mock,
} as Meta;

export const Default: StoryFn<AvatarProps> = (args) => <Avatar {...args} />;
