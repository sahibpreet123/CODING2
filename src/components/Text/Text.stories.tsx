// Text.stories.tsx
import React from 'react';
import { Meta, Story } from '@storybook/react';
import Text, { TextProps } from './Text';

export default {
  title: 'Text',
  component: Text,
} as Meta;

const Template: Story<TextProps> = (args) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'Hello, world!',
};

export const Disabled = Template.bind({});
Disabled.args = {
  text: 'Disabled Text',
  disabled: true,
};
