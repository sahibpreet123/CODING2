// Hero.stories.tsx

import React from 'react';
import { Meta, Story } from '@storybook/react';
import Hero, { HeroProps } from './Hero';

export default {
  title: 'Hero',
  component: Hero,
  argTypes: {
    imageUrl: { control: 'text' },
    altText: { control: 'text' },
    disabled: { control: 'boolean' },
  },
} as Meta;

const Template: Story<HeroProps> = (args) => <Hero {...args} />;

export const Default = Template.bind({});
Default.args = {
  imageUrl: 'https://via.placeholder.com/400',
  altText: 'Placeholder image',
};

export const Disabled = Template.bind({});
Disabled.args = {
  imageUrl: 'https://via.placeholder.com/400',
  altText: 'Placeholder image',
  disabled: true,
};
