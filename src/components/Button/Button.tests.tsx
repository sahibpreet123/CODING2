import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button, { ButtonProps } from './Button'; // Importing default export

describe('Button', () => {
  it('should render the label prop', () => {
    const { getByText } = render(<Button label="Click me" />);
    expect(getByText('Click me')).toBeInTheDocument();
  });

  it('should be disabled when the disabled prop is true', () => {
    const { getByText } = render(<Button label="Disabled" disabled={true} />);
    const button = getByText('Disabled');
    expect(button).toHaveAttribute('disabled');
  });
});
