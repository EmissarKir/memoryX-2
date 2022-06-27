import React, { FC } from "react";
import { useNavigate } from "react-router-dom";

import ControlPanel from "../ui/controlPanel";
import { createTask } from "../../store/tasks";
import { ITask } from "../../types/types";
import { useAppDispatch } from "../../hooks/redux";
import Button from "../common/button";
import { FaAngleLeft, FaSketch } from "react-icons/fa";
import { FormComponent, TextAreaField } from "../common/forms";
import { validateSchemeCreateTaskPage } from "../../validateScheme";

const CreateTaskPage: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  const handleSubmit = (data: ITask) => {
    dispatch(createTask(data));
  };
  return (
    <>
      <ControlPanel title="Создание нового вопроса">
        <Button
          label="Вернуться назад"
          iconLeft={FaAngleLeft}
          view="secondary"
          onClick={goBack}
        />
      </ControlPanel>
      <FormComponent
        validateScheme={validateSchemeCreateTaskPage}
        onSubmit={handleSubmit}
      >
        <TextAreaField
          name="question"
          placeholder=" Введите название нового вопроса"
          autoFocus
        />
        <TextAreaField name="answer" placeholder="Введите ответ" rows={10} />
        <Button type="submit" label="Cоздать" iconRight={FaSketch} />
      </FormComponent>
    </>
  );
};
export default CreateTaskPage;
