import React, { ChangeEvent, useState } from "react";
import styled from "styled-components";
import { StyledPage, StyledTextMuted } from "../../styles/styles";
import TextFiled from "../common/forms/textFiled";
import Container from "../styles/container";
import Flex from "../styles/flex";

const StyledInputContainer = styled.div`
  width: 450px;
  & > *:not(:last-child) {
    margin-bottom: 30px;
  }

  @media ${({ theme }) => theme.media.large} {
    width: 100%;
    padding: 0px 20px;
  }
`;

type Props = {};
export default function CreateTestPage({}: Props) {
  const [test, setTest] = useState<string>("");
  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setTest(event.target.value);
  };
  console.log("test", test);

  return (
    <StyledPage>
      <Flex justify="center" align="center" direction="column">
        <StyledInputContainer>
          <StyledTextMuted align="center">
            Введите название нового теста
          </StyledTextMuted>
          <TextFiled
            type="text"
            placeholder="Например: '100 английских слов'"
            name="search"
            value={test}
            onChange={changeHandler}
          />
        </StyledInputContainer>
      </Flex>
    </StyledPage>
  );
}
