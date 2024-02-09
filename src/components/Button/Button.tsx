import React from 'react';
import './Button.css';

export interface ButtonProps {
  label: string;
  backgroundColor?: string; // Add backgroundColor prop for modifying background color
  disabled?: boolean;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, backgroundColor = '#ffffff', disabled = false, onClick }) => {
  // Apply styles for default and disabled states
  const buttonStyle = {
    backgroundColor: disabled ? '#cccccc' : backgroundColor, // Change background color when disabled
    cursor: disabled ? 'not-allowed' : 'pointer', // Change cursor when disabled
  };

  return (
    <button onClick={onClick} disabled={disabled} style={buttonStyle}>
      {label}
    </button>
  );
};

export default Button;
