import React from "react";
import styled from "styled-components";
import List from "../../exampleComponents/list";
import ListItem from "../../exampleComponents/listItem";
import { setLocalCurrentTest } from "../../services/localStorage.service";
import {
  StyledHeaderPage,
  StyledPage,
  StyledTextMuted,
} from "../../styles/styles";
import { ITestServer } from "../../types/types";
import history from "../../utils/history";
import Flex from "../styles/flex";
import HeaderPage from "../ui/headerPage";

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
  const chooseTest = (testId: string) => {
    setLocalCurrentTest(testId);
    history.push(`/tests/${testId}`);
  };
  return (
    <>
      <StyledHeaderPage>
        <HeaderPage title={"Мои тесты"} />
      </StyledHeaderPage>
      <StyledPage>
        <Flex justify="center" align="center" direction="column">
          <StyledContainer>
            <StyledTextMuted align="center">Ваши тесты</StyledTextMuted>
            <List
              items={tests}
              renderItem={(item: ITestServer) => (
                <ListItem
                  item={item}
                  key={item.id}
                  onClick={() => chooseTest(item.id)}
                />
              )}
            />
          </StyledContainer>
        </Flex>
      </StyledPage>
    </>
  );
}
