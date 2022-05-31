import React from "react";
import * as yup from "yup";
import { useAppDispatch } from "../../hooks/redux";
import { createTest } from "../../store/tests";
import { StyledTextMuted } from "../../styles/styles";
import { ITest } from "../../types/types";
import { FormComponent, TextFiled } from "../common/forms";
import WrapperPage from "../common/wrapperPage";

export default function CreateTestPage() {
  const dispatch = useAppDispatch();
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
    <WrapperPage>
      <StyledTextMuted align="center">
        Введите название нового теста
      </StyledTextMuted>
      <FormComponent onSubmit={handleSubmit} validateScheme={validateScheme}>
        <TextFiled
          type="text"
          placeholder="Например: '100 английских слов'"
          name="name"
        />
      </FormComponent>
    </WrapperPage>
  );
}
