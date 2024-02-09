// TableCell.tsx
import React from 'react';
import styled from 'styled-components';

interface TableCellProps {
  children: React.ReactNode;
}

const StyledTableCell = styled.td`
  padding: 8px;
`;

const TableCell: React.FC<TableCellProps> = ({ children }) => {
  return <StyledTableCell>{children}</StyledTableCell>;
};

export default TableCell;
