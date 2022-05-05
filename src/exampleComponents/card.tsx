import React from "react";
import styled from "styled-components";
type Props = {};

const StyledCard = styled.div<Props>`
  position: relative;
  width: 500px;
  height: 800px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  &::before {
    content: "";
    position: absolute;
    top: -4px;
    left: -4px;
    right: -4px;
    bottom: -4px;
    transform: skewX(2deg) skewY(4deg);
    background: linear-gradient(315deg, #00ccff, #0e1538, #d400d4);
  }
  &::after {
    content: "";
    position: absolute;
    top: -4px;
    left: -4px;
    right: -4px;
    bottom: -4px;
    transform: skewX(2deg) skewY(4deg);

    background: linear-gradient(315deg, #00ccff, #0e1538, #d400d4);
    filter: blur(50px);
  }
  & span {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #0e1538;
    z-index: 10;
  }
  & h2 {
    position: relative;
    z-index: 11;
    color: #fff;
    font-size: 15em;
  }
`;

export default function Card({}: Props) {
  return (
    <StyledCard>
      <span></span>
      <h2>01</h2>
    </StyledCard>
  );
}
