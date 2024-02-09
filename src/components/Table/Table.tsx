// Table.tsx
import React from 'react';
import styled from 'styled-components';

export interface TableProps {
  defaultText?: string; // Add defaultText prop
  backgroundColor?: string;
  disabled?: boolean;
  children: React.ReactNode;
}

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const StyledTableBody = styled.tbody<TableProps>`
  td {
    padding: 8px;
    background-color: ${(props) => (props.disabled ? '#f2f2f2' : props.backgroundColor || 'transparent')};
    cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  }
`;

const Table: React.FC<TableProps> = ({ defaultText, children, ...rest }) => {
  return (
    <StyledTable {...rest}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child) && child.type === 'tbody') {
          return <StyledTableBody {...rest}>{child.props.children}</StyledTableBody>;
        }
        return child;
      })}
      {defaultText && <caption>{defaultText}</caption>} {/* Conditionally render caption */}
    </StyledTable>
  );
};

export default Table;
