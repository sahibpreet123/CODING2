// Dropdown.tsx

import React from 'react';

export interface DropdownProps {
  options: string[];
  defaultValue?: string;
  backgroundColor?: string;
  disabled?: boolean;
  onChange: (selectedOption: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ options, defaultValue, backgroundColor, disabled, onChange }) => {
  return (
    <select defaultValue={defaultValue} style={{ backgroundColor: backgroundColor }} disabled={disabled} onChange={(e) => onChange(e.target.value)}>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
