import React from "react";
import styled from "styled-components";

type StyledBackDropProps = {
  isOpen: boolean;
};

type BackDropProps = {
  isOpen: boolean;
  onToggleSidebar: () => void;
};

const StyledBackDrop = styled.div<StyledBackDropProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: ${(props) => (props.isOpen ? "block" : "none")};
`;

const BackDrop = ({ isOpen, onToggleSidebar }: BackDropProps) => {
  return (
    <StyledBackDrop isOpen={isOpen} onClick={onToggleSidebar}></StyledBackDrop>
  );
};

export default BackDrop;
