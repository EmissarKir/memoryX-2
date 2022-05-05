import React from "react";
import styled from "styled-components";

type Props = {};
const StyledTitle = styled.div<Props>`
  position: relative;
  margin-top: 150px;
  display: flex;
  justify-content: center;

  &:before {
    content: "";
    position: absolute;
    display: block;
    top: 33px;
    width: 100%;
    height: 4px;
    background-color: #fff;
  }
  & h2 {
    position: absolute;
    margin-top: 0;
    color: #fff;
    font-size: 4rem;
    text-align: center;
    background: #000;
    padding: 0 20px;
  }
`;

export default function TitleWithLine({}: Props) {
  return (
    <StyledTitle>
      <h2>Inventore Veritatis</h2>
    </StyledTitle>
  );
}
