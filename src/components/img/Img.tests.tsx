import React from 'react';
import { render, screen } from '@testing-library/react';
import Img from './Img';

describe('Img component', () => {
  it('renders image with correct src and alt attributes', () => {
    const src = 'https://via.placeholder.com/150';
    const alt = 'Placeholder image';
    render(<Img src={src} alt={alt} />);
    const imgElement = screen.getByAltText(alt);
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute('src', src);
  });

  it('renders image with custom size', () => {
    const src = 'https://via.placeholder.com/150';
    const alt = 'Placeholder image';
    const width = 200;
    const height = 200;
    render(<Img src={src} alt={alt} width={width} height={height} />);
    const imgElement = screen.getByAltText(alt);
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute('width', `${width}`);
    expect(imgElement).toHaveAttribute('height', `${height}`);
  });
});
