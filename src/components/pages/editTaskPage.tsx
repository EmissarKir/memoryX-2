import React, { FC } from "react";
import { useNavigate } from "react-router-dom";

import ControlPanel from "../ui/controlPanel";
import { ITaskServer } from "../../types/types";
import { updateTask } from "../../store/tasks";

import { useAppDispatch } from "../../hooks/redux";
import Button from "../common/button";
import { FaAngleLeft, FaSketch } from "react-icons/fa";
import { FormComponent, SelectField, TextAreaField } from "../common/forms";
import { validateSchemeEditTaskPage } from "../../validateScheme";

interface EditTaskPageProps {
  task: ITaskServer;
}

const optionsTaskStatus = [
  { value: "в работе", label: "в работе" },
  { value: "завершен", label: "завершен" },
];
const EditTaskPage: FC<EditTaskPageProps> = ({ task }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  const handleSubmit = (data: ITaskServer) => {
    dispatch(updateTask(data));
  };
  return (
    <>
      <ControlPanel title="Редактирование вопроса">
        <Button
          label="Вернуться назад"
          iconLeft={FaAngleLeft}
          view="secondary"
          onClick={goBack}
        />
      </ControlPanel>
      <FormComponent
        validateScheme={validateSchemeEditTaskPage}
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
        <Button type="submit" label="Сохранить" iconRight={FaSketch} />
      </FormComponent>
    </>
  );
};
export default EditTaskPage;
