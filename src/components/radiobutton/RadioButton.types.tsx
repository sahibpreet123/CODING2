import React from 'react';
import { Meta, Story } from '@storybook/react';
import RadioButton, { RadioButtonProps } from './RadioButton';

export default {
  title: 'RadioButton',
  component: RadioButton,
  argTypes: {
    options: { control: 'array' }, // Control for modifying options
    defaultValue: { control: 'text' }, // Control for modifying default value
    backgroundColor: { control: 'color' }, // Control for modifying background color
    disabled: { control: 'boolean' }, // Control for toggling disabled state
  },
} as Meta;

const Template: Story<RadioButtonProps> = (args) => <RadioButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  options: ['Option 1', 'Option 2', 'Option 3'],
  defaultValue: 'Option 1', // Set default value
  backgroundColor: '#ffffff', // Set default background color
  disabled: false, // Set default disabled state
};
