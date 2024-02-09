// Label.tsx
import React from 'react';
import styled from 'styled-components';

export interface LabelProps {
  text: string;
  backgroundColor?: string;
  disabled?: boolean;
}

const StyledLabel = styled.label<{ backgroundColor?: string; disabled?: boolean }>`
  font-size: 16px;
  font-weight: bold;
  background-color: ${(props) => props.backgroundColor || 'transparent'};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  color: ${(props) => (props.disabled ? 'gray' : 'black')};
`;

const Label: React.FC<LabelProps> = ({ text, backgroundColor, disabled }) => {
  return <StyledLabel backgroundColor={backgroundColor} disabled={disabled}>{text}</StyledLabel>;
};

export default Label;
