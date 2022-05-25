import React from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import * as yup from "yup";

import FormComponent from "../common/forms/form";

import { StyledButton, StyledContainer } from "../../styles/styles";
import TextAreaField from "../common/forms/textareaField";
import HeaderPageVar1 from "../ui/headerPageVar1";
import { createTask } from "../../store/tasks";
import { ITask } from "../../types/types";
import { useAppDispatch } from "../../hooks/redux";

const StyledButtonWithForm = styled(StyledButton)`
  text-transform: uppercase;
  display: block;
  margin-left: auto;
  margin-right: 0;
`;

type Props = {};

export default function CreateTaskPage({}: Props) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const validateScheme = yup.object().shape({
    answer: yup
      .string()
      .required("Поле обязательно для заполнения")
      .min(3, "Поле должно содержать минимум 3 символа"),
    question: yup
      .string()
      .required("Поле обязательно для заполнения")
      .min(3, "Поле должно содержать минимум 3 символа"),
  });

  const goBack = () => {
    navigate(-1);
  };
  const handleSubmit = (data: ITask) => {
    dispatch(createTask(data));
  };
  return (
    <StyledContainer>
      <HeaderPageVar1 title="Создание нового вопроса">
        <StyledButton onClick={goBack}>
          <span>
            <i className="fa-solid fa-angle-left"></i>
          </span>
          Вернуться назад
        </StyledButton>
      </HeaderPageVar1>
      <FormComponent validateScheme={validateScheme} onSubmit={handleSubmit}>
        <TextAreaField
          name="question"
          placeholder=" Введите название нового вопроса"
          autoFocus
        />
        <TextAreaField name="answer" placeholder="Введите ответ" rows={10} />

        <StyledButtonWithForm type="submit">
          <span>
            <i className="fa-solid fa-arrow-right-to-bracket"></i>
          </span>
          создать
        </StyledButtonWithForm>
      </FormComponent>
    </StyledContainer>
  );
}
