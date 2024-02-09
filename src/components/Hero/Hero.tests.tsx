import React from 'react';
import { render, screen } from '@testing-library/react';
import Hero from './Hero';

test('renders Hero component', () => {
  render(<Hero imageUrl="https://via.placeholder.com/150" altText="Placeholder image" />);
  const heroElement = screen.getByAltText('Placeholder image');
  expect(heroElement).toBeInTheDocument();
});

test('changes opacity when disabled', () => {
  render(<Hero imageUrl="https://via.placeholder.com/150" altText="Placeholder image" disabled />);
  const heroElement = screen.getByAltText('Placeholder image');
  expect(heroElement).toHaveStyle('opacity: 0.6');
});
