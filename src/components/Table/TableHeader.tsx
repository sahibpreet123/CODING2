// TableHeader.tsx
import React from 'react';
import styled from 'styled-components';

interface TableHeaderProps {
  children: React.ReactNode;
}

const StyledTableHeader = styled.th`
  padding: 8px;
  background-color: #f2f2f2;
`;

const TableHeader: React.FC<TableHeaderProps> = ({ children }) => {
  return <StyledTableHeader>{children}</StyledTableHeader>;
};

export default TableHeader;
