import React from 'react';
import styled, { css } from 'styled-components';

// Define the styled components
const CardContainer = styled.div<{ disabled: boolean }>`
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;

  ${(props) =>
    props.disabled &&
    css`
      opacity: 0.5; /* Reduced opacity for disabled state */
      cursor: not-allowed; /* Change cursor for disabled state */
    `}
`;

const CardTitle = styled.h1`
  font-size: 18px;
  color: #333333;
`;

const CardDescription = styled.p`
  font-size: 14px;
  color: #666666;
`;

const CardButton = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #ffffff;
  cursor: pointer;
`;

// Define the CardProps interface
export interface CardProps {
  title: string;
  description: string;
  buttonText: string;
  onClick: () => void;
  disabled?: boolean; // Make disabled prop optional
}

// Define the Card component
const Card: React.FC<CardProps> = ({ title, description, buttonText, onClick, disabled = false }) => {
  return (
    <CardContainer disabled={disabled}>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
      <CardButton onClick={onClick} disabled={disabled}>
        {buttonText}
      </CardButton>
    </CardContainer>
  );
};

export default Card;
