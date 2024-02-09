import React from 'react';
import { render, screen } from '@testing-library/react';
import RadioButton from './RadioButton';

describe('RadioButton component', () => {
  it('renders options correctly', () => {
    const options = ['Option 1', 'Option 2', 'Option 3'];
    // Provide a mock onChange function
    const onChange = jest.fn();
    render(<RadioButton options={options} onChange={onChange} />);
    options.forEach((option) => {
      expect(screen.getByText(option)).toBeInTheDocument();
    });
  });

  it('checks visibility', () => {
    // Add your visibility test logic here
  });
});
