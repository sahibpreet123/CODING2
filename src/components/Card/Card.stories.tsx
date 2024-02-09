import React from 'react';
import { Meta, Story } from '@storybook/react';
import Card, { CardProps } from './Card';

export default {
  title: 'Components/Card',
  component: Card,
} as Meta;

const Template: Story<CardProps> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Default Card',
  description: 'This is a default card',
  buttonText: 'Click Me',
  onClick: () => alert('Button Clicked'),
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args, // Copy default props
  disabled: true, // Set disabled state
};
