// Text.tests.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import Text from './Text';

describe('Text component', () => {
  it('renders text correctly', () => {
    render(<Text text="Hello, world!" />);
    expect(screen.getByText('Hello, world!')).toBeInTheDocument();
  });

  it('checks visibility', () => {
    render(<Text text="Hello, world!" />);
    expect(screen.getByText('Hello, world!')).toBeVisible();
  });

  it('changes background color when disabled', () => {
    const props = { text: 'Hello, world!', disabled: true } as const;
    render(<Text {...props} />);
    const textElement = screen.getByText('Hello, world!');
    expect(textElement).toHaveStyle({ backgroundColor: '#f2f2f2' });
  });
});
