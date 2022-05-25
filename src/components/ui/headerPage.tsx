import { linkSync } from "fs";
import React, { Fragment } from "react";
import styled from "styled-components";
import { StyledNavLinkWithIcon, StyledTitle2 } from "../../styles/styles";

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

interface ILinksProps {
  path: string;
  name: string;
  icon?: React.ReactNode;
}

type Props = {
  title: string;
  items?: ILinksProps[];
};

export default function HeaderPage({ title, items }: Props) {
  return (
    <StyledHeaderPage>
      <StyledTitle2>{title}</StyledTitle2>
      <div className="links">
        {items &&
          items.map((item, index) => (
            <StyledNavLinkWithIcon to={item.path} key={index}>
              <span>{item.icon}</span>
              {item.name}
            </StyledNavLinkWithIcon>
          ))}
      </div>
    </StyledHeaderPage>
  );
}
