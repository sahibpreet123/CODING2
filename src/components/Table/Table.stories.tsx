// Table.stories.tsx
import React from 'react';
import { Meta, Story } from '@storybook/react';
import Table, { TableProps } from './Table';

export default {
  title: 'Table',
  component: Table,
  argTypes: {
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
    cell1Text: { control: 'text' },
    cell2Text: { control: 'text' },
    cell3Text: { control: 'text' },
    cell4Text: { control: 'text' },
  },
} as Meta;

// Define a Template for your stories
const Template: Story<TableProps & { cell1Text: string; cell2Text: string; cell3Text: string; cell4Text: string }> = ({
  cell1Text,
  cell2Text,
  cell3Text,
  cell4Text,
  ...args
}) => (
  <Table {...args}>
    <tbody>
      <tr>
        <th>Header 1</th>
        <th>Header 2</th>
      </tr>
      <tr>
        <td>{cell1Text || 'Cell 1'}</td>
        <td>{cell2Text || 'Cell 2'}</td>
      </tr>
      <tr>
        <td>{cell3Text || 'Cell 3'}</td>
        <td>{cell4Text || 'Cell 4'}</td>
      </tr>
    </tbody>
  </Table>
);

// Define a Default story
export const Default = Template.bind({});
Default.args = {
  cell1Text: 'Cell 1',
  cell2Text: 'Cell 2',
  cell3Text: 'Cell 3',
  cell4Text: 'Cell 4',
  backgroundColor: '#ffffff',
  disabled: false,
};

// Define a Disabled story
export const Disabled = Template.bind({});
Disabled.args = {
  cell1Text: 'Cell 1',
  cell2Text: 'Cell 2',
  cell3Text: 'Cell 3',
  cell4Text: 'Cell 4',
  backgroundColor: '#ffffff',
  disabled: true, // Set disabled to true
};
