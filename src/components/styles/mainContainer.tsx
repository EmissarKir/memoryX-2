import React from "react";
import styled from "styled-components";

type Props = {
  children?: JSX.Element | JSX.Element[];
};

const StyledMainContainer = styled.div`
  margin-left: 300px;
  height: 100vh;
`;

export default function MainContainer({ children }: Props) {
  return <StyledMainContainer>{children}</StyledMainContainer>;
}
