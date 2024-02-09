// TableFooter.tsx
import React from 'react';
import styled from 'styled-components';

interface TableFooterProps {
  children: React.ReactNode;
}

const StyledTableFooter = styled.tfoot`
  background-color: #f2f2f2;
`;

const TableFooter: React.FC<TableFooterProps> = ({ children }) => {
  return <StyledTableFooter>{children}</StyledTableFooter>;
};

export default TableFooter;
