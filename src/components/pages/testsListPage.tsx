import React from "react";
import styled from "styled-components";
import List from "../../exampleComponents/list";
import UserItem from "../../exampleComponents/userItem";
import { StyledPage, StyledTextMuted } from "../../styles/styles";
import { ITestServer } from "../../types/types";
import Flex from "../styles/flex";

type Props = {
  tests: ITestServer[];
};

const StyledContainer = styled.div`
  width: 450px;
  & > *:not(:last-child) {
    margin-bottom: 30px;
  }

  @media ${({ theme }) => theme.media.large} {
    width: 100%;
    padding: 0px 20px;
  }
`;

export default function TestsListPage({ tests }: Props) {
  console.log("tests", tests);

  return (
    <>
      <StyledPage>
        <Flex justify="center" align="center" direction="column">
          <StyledContainer>
            <StyledTextMuted align="center">Ваши тесты</StyledTextMuted>
            <List
              items={tests}
              renderItem={(item: ITestServer) => (
                <UserItem item={item} key={item.id} />
              )}
            />
          </StyledContainer>
        </Flex>
      </StyledPage>
    </>
  );
}
