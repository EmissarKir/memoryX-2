import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import {
  changeRepeatCount,
  getIsWorkingTasks,
  getTasks,
} from "../../store/tasks";
import {
  StyledButton,
  StyledHeaderPage,
  StyledPage,
  StyledText,
} from "../../styles/styles";

import Flex from "../styles/flex";
import HeaderPageVar1 from "../ui/headerPageVar1";
import ExerciseCard from "../ui/exerciseCard";
import { useNavigate } from "react-router-dom";
import { ITaskServer } from "../../types/types";
import { getNoun } from "../../utils";
import { getIsLoggedIn } from "../../store/users";
import { useAppDispatch } from "../../hooks/redux";
type Props = {};

const StyledContainer = styled.div`
  margin: 20px 0px;
  width: 750px;

  & > *:not(:last-child) {
    margin-bottom: 30px;
  }

  @media ${({ theme }) => theme.media.large} {
    width: 100%;
    padding: 0px 20px;
  }
`;
const ExercisePage = (props: Props) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const tasks = useSelector(getIsWorkingTasks());
  const isLoggedIn = useSelector(getIsLoggedIn());
  const [index, setIndex] = useState<number>(0);
  const [skipIndex, setSkipIndex] = useState<number>(0);
  const [answeredIndex, setAnsweredIndex] = useState<number>(0);
  const [prevTask, setPrevTask] = useState<ITaskServer[] | []>([]);
  const [isFinish, setFinish] = useState<boolean>(false);
  const maxCount = tasks.length;
  const indexTask = tasks[index];

  const goBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    setPrevTask(tasks);
  }, []);

  const completedTasks = prevTask.filter(
    (item) => item.count + 1 === item.maxRepeat
  ).length;

  const handleSkipQuestion = () => {
    setSkipIndex((prev) => prev + 1);
    if (isNextEmpty()) {
      setFinish(true);
    } else {
      setIndex((prev) => prev + 1);
    }
  };
  const handleNextQuestion = (task: ITaskServer) => {
    if (isLoggedIn) {
      dispatch(changeRepeatCount(task));
    }
    setAnsweredIndex((prev) => prev + 1);
    if (isNextEmpty()) {
      setFinish(true);
    } else {
      setIndex((prev) => prev + 1);
    }
  };
  const handleBackQuestion = () => {
    if (!isPrevEmpty()) {
      setIndex((prevState) => prevState - 1);
      setSkipIndex((prev) => prev - 1);
    } else {
      setIndex(0);
    }
  };

  function isNextEmpty() {
    return index + 1 === maxCount;
  }

  function isPrevEmpty() {
    return index === 0;
  }

  return (
    <>
      <StyledHeaderPage>
        <HeaderPageVar1 title="Упражнение">
          <StyledButton onClick={goBack}>
            <span>
              <i className="fa-solid fa-angle-left"></i>
            </span>
            Выйти из теста
          </StyledButton>
          <StyledButton
            onClick={handleBackQuestion}
            disabled={index === 0 || isFinish}
          >
            <span>
              <i className="fa-solid fa-right-long-to-line"></i>
            </span>
            Вернуться
          </StyledButton>
          <StyledButton onClick={handleSkipQuestion} disabled={isFinish}>
            <span>
              <i className="fa-solid fa-right-long-to-line"></i>
            </span>
            Пропустить
          </StyledButton>
          <StyledButton
            onClick={() => handleNextQuestion(indexTask)}
            disabled={isFinish}
          >
            <span>
              <i className="fa-solid fa-plus"></i>
            </span>
            Знаю ответ
          </StyledButton>
        </HeaderPageVar1>
      </StyledHeaderPage>
      <StyledPage>
        <Flex align="center" direction="column">
          <StyledContainer>
            {isFinish ? (
              <>
                <StyledText align="center">Тест завершен</StyledText>
                <StyledText>
                  {skipIndex}{" "}
                  {getNoun(skipIndex, "вопрос", "вопроса", "вопросов")}{" "}
                  пропущено
                </StyledText>

                <StyledText>
                  на {answeredIndex}{" "}
                  {getNoun(answeredIndex, "вопрос", "вопроса", "вопросов")}{" "}
                  отвечено положительно
                </StyledText>
                {completedTasks > 0 && (
                  <StyledText> {completedTasks} завершено</StyledText>
                )}
              </>
            ) : (
              <ExerciseCard
                indexTask={indexTask}
                index={index}
                maxCount={maxCount}
              />
            )}
          </StyledContainer>
        </Flex>
      </StyledPage>
    </>
  );
};

export default ExercisePage;
