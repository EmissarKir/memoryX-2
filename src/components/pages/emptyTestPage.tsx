import React from "react";
import styled from "styled-components";
import {
  StyledNavLinkWithIcon,
  StyledPage,
  StyledTextMuted,
} from "../../styles/styles";
import Flex from "../styles/flex";

type Props = {};

const StyledContainer = styled.div`
  & > *:not(:last-child) {
    margin-bottom: 30px;
  }
`;

export default function EmptyTestPage({}: Props) {
  return (
    <StyledPage>
      <Flex justify="center" align="center" direction="column">
        <StyledContainer>
          <StyledTextMuted align="center">
            У вас еще нет тестов...
          </StyledTextMuted>
          <StyledNavLinkWithIcon to="tests/create">
            <span>
              <i className="fa-solid fa-plus"></i>
            </span>
            Создать новый тест
          </StyledNavLinkWithIcon>
        </StyledContainer>
      </Flex>
    </StyledPage>
  );
}
