// Card.tests.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import Card, { CardProps } from './Card';

test('Card is visible', () => {
  const cardProps: CardProps = {
    title: 'Test Card',
    description: 'This is a test card',
    buttonText: 'Click',
    onClick: () => {}, // Add onClick property
  };
  render(<Card {...cardProps} />);
  const cardTitleElement = screen.getByText(/Test Card/i);
  expect(cardTitleElement).toBeInTheDocument();
});

test('Card button triggers onClick', () => {
  const handleClick = jest.fn();
  const cardProps: CardProps = {
    title: 'Test Card',
    description: 'This is a test card',
    buttonText: 'Click',
    onClick: handleClick,
  };
  render(<Card {...cardProps} />);
  const button = screen.getByRole('button', { name: /Click/i });
  button.click();
  expect(handleClick).toHaveBeenCalled();
});
