import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import * as yup from "yup";
import { AppDispatch } from "../..";
import { createTest } from "../../store/tests";
import { StyledPage, StyledTextMuted } from "../../styles/styles";
import { ITest } from "../../types/types";
import FormComponent from "../common/forms/form";
import TextFiled from "../common/forms/textFiled";
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
  const dispatch: AppDispatch = useDispatch();

  const validateScheme = yup.object().shape({
    name: yup
      .string()
      .required("Поле обязательно для заполнения")
      .min(3, "Поле должно содержать минимум 3 символа"),
  });

  const handleSubmit = (data: ITest) => {
    dispatch(createTest(data));
  };
  return (
    <StyledPage>
      <Flex justify="center" align="center" direction="column">
        <StyledInputContainer>
          <StyledTextMuted align="center">
            Введите название нового теста
          </StyledTextMuted>
          <FormComponent
            onSubmit={handleSubmit}
            validateScheme={validateScheme}
          >
            <TextFiled
              type="text"
              placeholder="Например: '100 английских слов'"
              name="name"
            />
          </FormComponent>
        </StyledInputContainer>
      </Flex>
    </StyledPage>
  );
}
