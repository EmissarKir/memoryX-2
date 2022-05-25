import { linkSync } from "fs";
import React, { Fragment } from "react";
import styled from "styled-components";
import { StyledTitle2 } from "../../styles/styles";

const StyledHeaderPage = styled.div`
  height: ${({ theme }) => theme.heigthHeaderPage};
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  .links {
    display: flex;
    & > *:not(:last-child) {
      margin-right: 10px;
    }
  }
`;

type Props = {
  title: string;
  children?: JSX.Element | JSX.Element[];
};

export default function HeaderPageVar1({ title, children }: Props) {
  return (
    <StyledHeaderPage>
      <StyledTitle2>{title}</StyledTitle2>
      <div className="links">{children}</div>
    </StyledHeaderPage>
  );
}
