import React from 'react';
import styled from 'styled-components';

export interface HeroProps {
  imageUrl: string;
  altText: string;
  disabled?: boolean;
}

const StyledHero = styled.div<{ imageUrl: string; disabled?: boolean }>`
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 400px; /* Adjust height as needed */
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  opacity: ${(props) => (props.disabled ? '0.6' : '1')};
  filter: ${(props) => (props.disabled ? 'grayscale(100%)' : 'none')};
`;

const Hero: React.FC<HeroProps> = ({ imageUrl, altText, disabled = false }) => {
  return <StyledHero imageUrl={imageUrl} disabled={disabled} />;
};

export default Hero;
