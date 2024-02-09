// Label.stories.tsx
import React from 'react';
import { Meta, Story } from '@storybook/react';
import Label, { LabelProps } from './Label';

export default {
  title: 'Label',
  component: Label,
} as Meta;

const Template: Story<LabelProps> = (args) => <Label {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'Label Text',
};

export const WithBackgroundColor = Template.bind({});
WithBackgroundColor.args = {
  text: 'Label with Background',
  backgroundColor: 'lightblue',
};

export const Disabled = Template.bind({});
Disabled.args = {
  text: 'Disabled Label',
  disabled: true,
};
