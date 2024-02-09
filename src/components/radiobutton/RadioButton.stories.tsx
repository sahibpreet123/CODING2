import React from 'react';
import { Meta, Story } from '@storybook/react';
import RadioButton, { RadioButtonProps } from './RadioButton';

export default {
  title: 'RadioButton',
  component: RadioButton,
  argTypes: {
    options: { control: 'array' },
    defaultValue: { control: 'text' },
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
} as Meta;

const Template: Story<RadioButtonProps> = (args) => <RadioButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  options: ['Option 1', 'Option 2', 'Option 3'],
  defaultValue: 'Option 1',
  backgroundColor: '#ffffff',
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  options: ['Option 1', 'Option 2', 'Option 3'],
  defaultValue: 'Option 1',
  backgroundColor: '#f2f2f2', // Change background color for disabled state
  disabled: true,
};
