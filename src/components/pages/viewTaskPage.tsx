import React from "react";
import { FaAngleLeft } from "react-icons/fa";
import ReactMarkdown from "react-markdown";
import { useNavigate } from "react-router-dom";
import { ITaskServer } from "../../types/types";
import Button from "../common/button";
import Text from "../common/text/text";
import ControlPanel from "../ui/controlPanel";

type Props = {
  task?: ITaskServer;
};

const ViewTaskPage = ({ task }: Props) => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <>
      <ControlPanel title="Просмотр вопроса">
        <Button
          label="Вернуться назад"
          iconLeft={FaAngleLeft}
          view="secondary"
          onClick={goBack}
        />
      </ControlPanel>
      <Text weight="bold" size="2l">
        {task?.question}
      </Text>
      <Text size="l">
        <ReactMarkdown>{task!.answer}</ReactMarkdown>
      </Text>
    </>
  );
};

export default ViewTaskPage;
