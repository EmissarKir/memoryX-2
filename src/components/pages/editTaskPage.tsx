import React from "react";
import { useNavigate } from "react-router-dom";

import * as yup from "yup";

import { StyledContainer } from "../../styles/styles";
import HeaderPageVar1 from "../ui/headerPageVar1";
import { ITaskServer } from "../../types/types";
import { updateTask } from "../../store/tasks";

import { useAppDispatch } from "../../hooks/redux";
import Button from "../common/button";
import { FaAngleLeft, FaSketch } from "react-icons/fa";
import { FormComponent, SelectField, TextAreaField } from "../common/forms";

type Props = {
  task?: ITaskServer;
};

const optionsTaskStatus = [
  { value: "в работе", label: "в работе" },
  { value: "завершен", label: "завершен" },
];

export default function EditTaskPage({ task }: Props) {
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
  const handleSubmit = (data: ITaskServer) => {
    dispatch(updateTask(data));
  };
  return (
    <StyledContainer>
      <HeaderPageVar1 title="Редактирование вопроса">
        <Button
          size="l"
          label="Вернуться назад"
          iconLeft={FaAngleLeft}
          form="round"
          onClick={goBack}
        />
      </HeaderPageVar1>
      <FormComponent
        validateScheme={validateScheme}
        onSubmit={handleSubmit}
        defaultData={task}
      >
        <TextAreaField
          name="question"
          placeholder=" Введите название нового вопроса"
          lh="1.5"
          autoFocus
        />
        <TextAreaField
          name="answer"
          placeholder="Введите ответ"
          lh="1.5"
          rows={10}
        />
        <SelectField
          name="status"
          defaultOption="Choose..."
          options={optionsTaskStatus}
        />
        <Button type="submit" label="Сохранить" size="l" iconRight={FaSketch} />
      </FormComponent>
    </StyledContainer>
  );
}
