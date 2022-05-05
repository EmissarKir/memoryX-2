import React from "react";
import styled from "styled-components";
import { StyledNavLinkWithIcon, StyledTitle2 } from "../../styles/styles";

type Props = {};

const StyledHeaderQustionsPage = styled.div`
  height: 80px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  .links {
    display: flex;
  }
`;

export default function HeaderQustionsPage({}: Props) {
  return (
    <StyledHeaderQustionsPage>
      <StyledTitle2>Список вопросов</StyledTitle2>
      <div className="links">
        <StyledNavLinkWithIcon to="tests/create">
          <span>
            <i className="fa-solid fa-plus"></i>
          </span>
          Новый вопрос
        </StyledNavLinkWithIcon>
        <StyledNavLinkWithIcon to="category/create">
          <span>
            <i className="fa-solid fa-plus"></i>
          </span>
          Новая категория
        </StyledNavLinkWithIcon>
      </div>
    </StyledHeaderQustionsPage>
  );
}
