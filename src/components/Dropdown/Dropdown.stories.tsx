import React from 'react';
import { Meta, Story } from '@storybook/react';
import Dropdown, { DropdownProps } from './Dropdown';

export default {
  title: 'Dropdown',
  component: Dropdown,
  argTypes: {
    options: { control: 'array' },
    onSelect: { action: 'selected' }, // Assuming you have an onSelect event
  },
} as Meta;

const Template: Story<DropdownProps> = (args) => <Dropdown {...args} />;

export const Default = Template.bind({});
Default.args = {
  options: ['Option 1', 'Option 2', 'Option 3'],
};

export const WithLongOptions = Template.bind({});
WithLongOptions.args = {
  options: ['Option with a long text', 'Another long option', 'Option 3'],
};

export const Disabled = Template.bind({});
Disabled.args = {
  options: ['Option 1', 'Option 2', 'Option 3'],
  disabled: true, // Set disabled prop to true
};

export const DisabledWithLongOptions = Template.bind({});
DisabledWithLongOptions.args = {
  options: ['Option with a long text', 'Another long option', 'Option 3'],
  disabled: true, // Set disabled prop to true
};
