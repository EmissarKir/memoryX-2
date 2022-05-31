import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { changeRepeatCount, getIsWorkingTasks } from "../store/tasks";
import { StyledHeaderPage, StyledPage, StyledText } from "../styles/styles";

import Flex from "../components/styles/flex";
import HeaderPageVar1 from "../components/ui/headerPageVar1";
import ExerciseCard from "../components/ui/exerciseCard";
import { useNavigate } from "react-router-dom";
import { ITaskServer } from "../types/types";
import { getNoun } from "../utils";
import { getIsLoggedIn } from "../store/users";
import { useAppDispatch } from "../hooks/redux";
import Button from "../components/common/button";
import { FaAngleLeft, FaPlus } from "react-icons/fa";

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

const ExercisePage = () => {
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
          <Button
            size="l"
            label="Выйти из теста"
            iconLeft={FaAngleLeft}
            form="round"
            onClick={goBack}
          />
          <Button
            size="l"
            label="Вернуться"
            form="round"
            onClick={handleBackQuestion}
            disabled={index === 0 || isFinish}
          />
          <Button
            size="l"
            label="Пропустить"
            form="round"
            onClick={handleSkipQuestion}
            disabled={isFinish}
          />
          <Button
            size="l"
            label="Знаю ответ"
            form="round"
            iconRight={FaPlus}
            onClick={() => handleNextQuestion(indexTask)}
            disabled={isFinish}
          />
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
