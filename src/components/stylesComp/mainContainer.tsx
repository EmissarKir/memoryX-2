import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

type MainContainerProps = {
  children?: JSX.Element | JSX.Element[];
  isOpen: boolean;
  isMobile: boolean;
};

const SMainContainer = styled(motion.div)`
  height: 100vh;
  @media (min-width: 992px) {
    margin-left: 0;
  }
`;

export default function MainContainer({
  children,
  isOpen,
  isMobile,
}: MainContainerProps) {
  return (
    <SMainContainer
      animate={{ marginLeft: isMobile ? "0px" : isOpen ? "300px" : "100px" }}
      initial={false}
      transition={{ duration: 0.3 }}
    >
      {children}
    </SMainContainer>
  );
}
