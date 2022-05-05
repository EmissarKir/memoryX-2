import React from "react";
import {
  StyledNavLinkWithIcon,
  StyledPage,
  StyledTextMuted,
} from "../../styles/styles";
import Flex from "../styles/flex";

type Props = {};

export default function EmptyTestPage({}: Props) {
  return (
    <StyledPage>
      <Flex justify="center" align="center" direction="column">
        <StyledTextMuted>У вас еще нет тестов...</StyledTextMuted>
        <StyledNavLinkWithIcon to="tests/create">
          <span>
            <i className="fa-solid fa-plus"></i>
          </span>
          Создать новый тест
        </StyledNavLinkWithIcon>
      </Flex>
    </StyledPage>
  );
}
