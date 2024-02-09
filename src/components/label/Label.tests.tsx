// Label.tests.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import Label from './Label';

test('renders label with text', () => {
  render(<Label text="Label Text" />);
  const labelElement = screen.getByText(/Label Text/i);
  expect(labelElement).toBeInTheDocument();
});

test('renders label with background color', () => {
  render(<Label text="Label with Background" backgroundColor="lightblue" />);
  const labelElement = screen.getByText(/Label with Background/i);
  expect(labelElement).toHaveStyle({ backgroundColor: 'lightblue' });
});

test('changes color and cursor when disabled', () => {
  render(<Label text="Disabled Label" disabled />);
  const labelElement = screen.getByText(/Disabled Label/i);
  expect(labelElement).toHaveStyle({ color: 'gray', cursor: 'not-allowed' });
});
