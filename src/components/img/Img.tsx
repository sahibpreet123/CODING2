import React from 'react';
import styled, { css } from 'styled-components';

export interface ImgProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  disabled?: boolean;
}

const StyledImg = styled.img<{ width?: number; height?: number; disabled?: boolean }>`
  width: ${(props) => (props.width ? `${props.width}px` : 'auto')};
  height: ${(props) => (props.height ? `${props.height}px` : 'auto')};

  ${(props) =>
    props.disabled &&
    css`
      opacity: 0.5;
      cursor: not-allowed;
    `}
`;

const Img: React.FC<ImgProps> = ({ src, alt, width, height, disabled = false }) => {
  return <StyledImg src={src} alt={alt} width={width} height={height} disabled={disabled} />;
};

export default Img;
