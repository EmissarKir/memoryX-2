import React from "react";
import { FaUserPlus, FaBars, FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
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
import Button from "../common/button/button";
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
          <Button
            iconLeft={FaBars}
            view="ghost"
            size="xl"
            onlyIcon
            form="round"
          />
          <br />
          <Button label="Сохранить" view="primary" />
          <br />
          <Button label="Сохранить" view="clear" />
          <br />
          <Button label="Сохранить" view="ghost" />
          <br />
          <Button label="Сохранить" view="secondary" />
          <br />
          <Button label="Сохранить" view="primary" />
          <br />

          <Button iconLeft={FaBars} label="Сохранить" />
          <br />
          <Button iconRight={FaBars} label="Сохранить" />
          <br />
          <Button iconRight={FaBars} onlyIcon />
          <br />
          <Button iconRight={FaArrowRight} label="Продолжить" />
          <br />
          <Button iconLeft={FaArrowLeft} label="Продолжить" view="ghost" />
          <br />
          <Button iconLeft={FaArrowLeft} label="Продолжить" view="secondary" />
          <br />
          <Button iconLeft={FaArrowLeft} view="secondary" onlyIcon />
          <br />
          <Button iconLeft={FaArrowRight} view="ghost" onlyIcon />
          <br />
          <Button iconLeft={FaUserPlus} onlyIcon />
          <br />
          <Button label="Продолжить" form="brick" />
          <br />
          <Button label="Продолжить" form="round" />
          <br />
          <Button iconRight={FaUserPlus} label="Продолжить" form="round" />
          <br />
          <Button iconLeft={FaUserPlus} onlyIcon form="round" />
          <br />
          <Button
            iconLeft={FaUserPlus}
            onlyIcon
            form="round"
            view="secondary"
          />
          <br />
          <Button iconLeft={FaUserPlus} onlyIcon form="round" view="ghost" />
          <br />
          <Button
            iconLeft={FaUserPlus}
            label="Поиск"
            form="brick"
            view="ghost"
          />
          <br />
          <Button
            iconLeft={FaUserPlus}
            label="Поиск"
            form="brick"
            view="secondary"
          />
          <br />
          <Button />
          <br />
          <Button view="primary" label="Выйти" />
          <br />

          <Button view="primary" label="Выйти extraSmall" size="xs" />
          <br />
          <Button view="primary" label="Выйти small" size="s" />
          <br />

          <Button view="primary" label="Выйти middle" />
          <br />
          <Button
            view="primary"
            iconLeft={FaArrowLeft}
            label="Выйти большая"
            size="l"
          />
          <br />
          <Button
            iconLeft={FaUserPlus}
            onlyIcon
            size="l"
            form="round"
            view="secondary"
          />
          <br />
          <Button
            iconLeft={FaArrowLeft}
            label="User"
            onlyIcon
            form="round"
            view="secondary"
          />
          <br />
          <Button
            iconLeft={FaUserPlus}
            form="round"
            view="secondary"
            size="l"
          />
          <br />
          <Button
            iconLeft={FaUserPlus}
            form="round"
            view="secondary"
            size="m"
          />
          <br />
          <Button
            iconLeft={FaUserPlus}
            form="round"
            view="secondary"
            size="s"
          />
          <br />
          <Button
            iconLeft={FaUserPlus}
            form="round"
            view="secondary"
            size="xs"
          />
          <br />
          <Button
            iconLeft={FaUserPlus}
            view="secondary"
            size="xl"
            label="button XL"
            form="brick"
          />
          <br />
          <Button
            iconLeft={FaUserPlus}
            view="secondary"
            size="xl"
            label="button XL"
            form="brick"
          />
          <br />

          <br />
        </Flex>
      </StyledPage>
    </>
  );
}
