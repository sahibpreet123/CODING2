import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Dropdown from './Dropdown';

describe('Dropdown component', () => {
  const options = ['Option 1', 'Option 2', 'Option 3'];
  const onChange = jest.fn();

  it('renders options correctly', () => {
    render(<Dropdown options={options} onChange={onChange} />);
    options.forEach((option) => {
      expect(screen.getByText(option)).toBeInTheDocument();
    });
  });

  it('triggers onChange event when an option is selected', () => {
    render(<Dropdown options={options} onChange={onChange} />);
    const selectedOption = 'Option 2';
    userEvent.selectOptions(screen.getByRole('combobox'), selectedOption);
    expect(onChange).toHaveBeenCalledWith(selectedOption);
  });

  it('changes background color when disabled', () => {
    render(<Dropdown options={options} onChange={onChange} />);
    const dropdown = screen.getByRole('combobox');
    expect(dropdown).toHaveStyle({ backgroundColor: 'transparent' });

    // Disable the dropdown
    render(<Dropdown options={options} onChange={onChange} disabled />);
    expect(dropdown).toHaveStyle({ backgroundColor: '#f2f2f2' });
  });
});
