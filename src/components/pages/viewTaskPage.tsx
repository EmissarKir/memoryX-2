import React from "react";
import ReactMarkdown from "react-markdown";
import { useNavigate } from "react-router-dom";
import {
  StyledButton,
  StyledContainer,
  StyledText,
  StyledTextMuted,
  StyledTitle2,
} from "../../styles/styles";
import { ITaskServer } from "../../types/types";
import Flex from "../styles/flex";
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
        <StyledButton onClick={goBack}>
          <span>
            <i className="fa-solid fa-angle-left"></i>
          </span>
          Вернуться назад
        </StyledButton>
      </HeaderPageVar1>
      <StyledTitle2>{task?.question}</StyledTitle2>
      <ReactMarkdown>{task!.answer}</ReactMarkdown>
    </StyledContainer>
  );
};

export default ViewTaskPage;
