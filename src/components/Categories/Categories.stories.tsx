import { Meta, StoryFn } from '@storybook/react';
import Categories, { CategoriesProps } from './Categories';

import mock from './mock';

export default {
  title: 'Components/Categories',
  component: Categories,
  args: mock,
} as Meta;

export const Default: StoryFn<CategoriesProps> = (args) => (
  <Categories {...args} />
);
