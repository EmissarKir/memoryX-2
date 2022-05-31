import React from "react";
import { FaAngleLeft } from "react-icons/fa";
import ReactMarkdown from "react-markdown";
import { useNavigate } from "react-router-dom";
import { StyledContainer, StyledTitle2 } from "../../styles/styles";
import { ITaskServer } from "../../types/types";
import Button from "../common/button";
import HeaderPageVar1 from "../ui/headerPageVar1";

type Props = {
  task?: ITaskServer;
};

const ViewTaskPage = ({ task }: Props) => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <StyledContainer>
      <HeaderPageVar1 title="Просмотр вопроса">
        <Button
          size="l"
          label="Вернуться назад"
          iconLeft={FaAngleLeft}
          form="round"
          onClick={goBack}
        />
      </HeaderPageVar1>
      <StyledTitle2>{task?.question}</StyledTitle2>
      <ReactMarkdown>{task!.answer}</ReactMarkdown>
    </StyledContainer>
  );
};

export default ViewTaskPage;
