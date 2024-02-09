// Text.tsx
import React from 'react';
import styled from 'styled-components';

export interface TextProps {
  text: string;
  disabled?: boolean;
}

const StyledText = styled.span<{ disabled?: boolean }>`
  color: ${(props) => (props.disabled ? '#808080' : 'inherit')};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'auto')};
`;

const Text: React.FC<TextProps> = ({ text, disabled }) => {
  return <StyledText disabled={disabled}>{text}</StyledText>;
};

export default Text;
