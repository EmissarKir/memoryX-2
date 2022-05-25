import React from "react";
import { useNavigate, useParams } from "react-router-dom";

import styled from "styled-components";
import * as yup from "yup";

import FormComponent from "../common/forms/form";

import { StyledButton, StyledContainer } from "../../styles/styles";
import TextAreaField from "../common/forms/textareaField";
import HeaderPageVar1 from "../ui/headerPageVar1";
import { ITask, ITaskServer } from "../../types/types";
import { useSelector } from "react-redux";
import { getTaskById, updateTask } from "../../store/tasks";
import SelectField from "../common/forms/selectField";
import { useAppDispatch } from "../../hooks/redux";

const StyledButtonWithForm = styled(StyledButton)`
  text-transform: uppercase;
  display: block;
  margin-left: auto;
  margin-right: 0;
`;

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
        <StyledButton onClick={goBack}>
          <span>
            <i className="fa-solid fa-angle-left"></i>
          </span>
          Вернуться назад
        </StyledButton>
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
        <StyledButtonWithForm type="submit">
          <span>
            <i className="fa-solid fa-arrow-right-to-bracket"></i>
          </span>
          сохранить
        </StyledButtonWithForm>
      </FormComponent>
    </StyledContainer>
  );
}
