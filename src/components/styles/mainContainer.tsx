import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

type Props = {
  children?: JSX.Element | JSX.Element[];
  isOpen: boolean;
  isMobile: boolean;
};

const StyledMainContainer = styled(motion.div)`
  height: 100vh;
  @media (min-width: 992px) {
    margin-left: 0;
  }
`;

export default function MainContainer({ children, isOpen, isMobile }: Props) {
  return (
    <StyledMainContainer
      animate={{ marginLeft: isMobile ? "0px" : isOpen ? "300px" : "100px" }}
      initial={false}
    >
      {children}
    </StyledMainContainer>
  );
}
