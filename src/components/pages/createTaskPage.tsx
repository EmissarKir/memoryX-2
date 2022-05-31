import React from "react";
import { useNavigate } from "react-router-dom";

import * as yup from "yup";

import { StyledContainer } from "../../styles/styles";
import HeaderPageVar1 from "../ui/headerPageVar1";
import { createTask } from "../../store/tasks";
import { ITask } from "../../types/types";
import { useAppDispatch } from "../../hooks/redux";
import Button from "../common/button";
import { FaAngleLeft, FaSketch } from "react-icons/fa";
import { FormComponent, TextAreaField } from "../common/forms";

export default function CreateTaskPage() {
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
        <Button
          size="l"
          label="Вернуться назад"
          iconLeft={FaAngleLeft}
          form="round"
          onClick={goBack}
        />
      </HeaderPageVar1>
      <FormComponent validateScheme={validateScheme} onSubmit={handleSubmit}>
        <TextAreaField
          name="question"
          placeholder=" Введите название нового вопроса"
          autoFocus
        />
        <TextAreaField name="answer" placeholder="Введите ответ" rows={10} />

        <Button type="submit" label="Cоздать" size="l" iconRight={FaSketch} />
      </FormComponent>
    </StyledContainer>
  );
}
