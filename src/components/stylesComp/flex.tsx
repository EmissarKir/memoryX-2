import React from "react";
import styled from "styled-components";

type FlexProps = {
  justify?: string;
  direction?: string;
  align?: string;
  height?: string;
  margin?: string;
  children: React.ReactNode;
};
const StyledFlex = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${({ direction = "row" }) => direction};
  justify-content: ${({ justify = "stretch" }) => justify};
  align-items: ${({ align = "stretch" }) => align};
  margin: ${({ margin = "0" }) => margin};
  height: ${({ height = "auto" }) => height};
`;
export default function Flex({ ...props }: FlexProps) {
  return <StyledFlex {...props} />;
}
