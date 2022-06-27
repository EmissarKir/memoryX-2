import { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { changeRepeatCount, getIsWorkingTasks } from "../store/tasks";
import Flex from "../components/stylesComp/flex";
import ControlPanel from "../components/ui/controlPanel";
import ExerciseCard from "../components/ui/exerciseCard";
import { useNavigate } from "react-router-dom";
import { ITaskServer } from "../types/types";
import { getIsLoggedIn } from "../store/users";
import { useAppDispatch } from "../hooks/redux";
import Button from "../components/common/button";
import { FaAngleLeft, FaPlus } from "react-icons/fa";
import FinishMessage from "../components/ui/finishMessage";

const StyledContainer = styled.div`
  margin: 20px 0px;
  width: 750px;

  & > *:not(:last-child) {
    margin-bottom: 30px;
  }

  @media ${({ theme }) => theme.media.large} {
    width: 100%;
  }
`;

const ExercisePage: FC = () => {
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
      <ControlPanel title="Упражнение">
        <Button
          label="Выйти из теста"
          iconLeft={FaAngleLeft}
          onClick={goBack}
          view="secondary"
        />
        <Button
          label="Вернуться"
          onClick={handleBackQuestion}
          disabled={index === 0 || isFinish}
          view="secondary"
        />
        <Button
          label="Пропустить"
          onClick={handleSkipQuestion}
          disabled={isFinish}
          view="secondary"
        />
        <Button
          label="Знаю ответ"
          iconRight={FaPlus}
          onClick={() => handleNextQuestion(indexTask)}
          disabled={isFinish}
        />
      </ControlPanel>

      <Flex align="center" direction="column">
        <StyledContainer>
          {isFinish ? (
            <FinishMessage
              skipIndex={skipIndex}
              answeredIndex={answeredIndex}
              completedTasks={completedTasks}
            />
          ) : (
            <ExerciseCard
              indexTask={indexTask}
              index={index}
              maxCount={maxCount}
            />
          )}
        </StyledContainer>
      </Flex>
    </>
  );
};

export default ExercisePage;
