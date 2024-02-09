 // styled.ts
import styled from 'styled-components';

interface CardContainerProps {
  disabled?: boolean;
}

export const CardContainer = styled.div<CardContainerProps>`
  padding: 20px;
  background-color: ${(props) => (props.disabled ? '#ccc' : '#fff')};
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};

  &:hover {
    background-color: ${(props) => (props.disabled ? '#ccc' : '#f0f0f0')};
  }
  
  p {
    margin: 0;
  }
`;
