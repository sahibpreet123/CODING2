import React, { useState } from 'react';
import styled from 'styled-components';

interface RadioButtonProps {
  options: string[];
  defaultValue?: string;
  backgroundColor?: string;
  disabled?: boolean;
  onChange: (selectedOption: string) => void;
}

const RadioContainer = styled.div<{ backgroundColor?: string; disabled?: boolean }>`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.backgroundColor || 'transparent'};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  pointer-events: ${(props) => (props.disabled ? 'none' : 'auto')};
`;

const RadioInput = styled.input``;

const RadioButton: React.FC<RadioButtonProps> = ({ options, defaultValue, backgroundColor, disabled, onChange }) => {
  const [selectedOption, setSelectedOption] = useState<string | undefined>(defaultValue);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    onChange(selectedValue);
  };

  return (
    <RadioContainer backgroundColor={backgroundColor} disabled={disabled}>
      {options.map((option) => (
        <label key={option}>
          <RadioInput
            type="radio"
            value={option}
            checked={option === selectedOption}
            onChange={handleChange}
            disabled={disabled}
          />
          {option}
        </label>
      ))}
    </RadioContainer>
  );
};

export default RadioButton;
export type { RadioButtonProps };
