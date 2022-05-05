import React from "react";
import styled from "styled-components";

type StyledProps = {
  maxWidth?: string;

  children: React.ReactNode;
};

const StyledContainer = styled.div<StyledProps>`
  max-width: ${({ maxWidth = "none" }) => maxWidth};
`;

export default function Container({ ...props }: StyledProps) {
  return <StyledContainer {...props} />;
}
