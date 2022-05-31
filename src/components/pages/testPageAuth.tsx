import React, { useEffect, useState } from "react";
import { FaAngleLeft, FaPlayCircle, FaPlus } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useAppDispatch } from "../../hooks/redux";

import {
  deleteTask,
  getFiltredTasks,
  getIsWorkingTasks,
  getTasksLoadingStatus,
  loadTasks,
  setTaskFilter,
} from "../../store/tasks";
import { getIsLoggedIn, loadCurrentUser } from "../../store/users";
import { StyledContainer } from "../../styles/styles";
import Button from "../common/button";
import { TextFiled } from "../common/forms";
import Loader from "../common/loader";
import Flex from "../styles/flex";
import HeaderPageVar1 from "../ui/headerPageVar1";
import QuestionsTable from "../ui/questionsTable";

const TestPageAuth = () => {
  const [filter, setFilter] = useState<string>("");
  const { pathname } = useLocation();

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const tasks = useSelector(getFiltredTasks());

  const isWorkingTasks = useSelector(getIsWorkingTasks());
  const isLoadingTasks = useSelector(getTasksLoadingStatus());
  const isAuth = useSelector(getIsLoggedIn());

  const { testId } = useParams();

  useEffect(() => {
    dispatch(loadTasks(testId!));
    dispatch(loadCurrentUser());
  }, [isAuth]);

  useEffect(() => {
    dispatch(setTaskFilter(filter));
  }, [filter]);

  useEffect(() => {
    setFilter("");
  }, [pathname]);

  const goRedirect = () => {
    navigate("/exercise");
  };
  const handleRemoveTask = (id: string, e: React.SyntheticEvent) => {
    e.stopPropagation();
    if (window.confirm("Вы действительно хотите удалить вопрос?")) {
      dispatch(deleteTask(id));
    }
  };

  const handleEditTask = (id: string, e: React.SyntheticEvent) => {
    e.stopPropagation();
    navigate(`/tasks/${id}/edit`);
  };
  const handleSetFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };

  const handleOpenSinglePage = (id: string) => {
    navigate(`/tasks/${id}`);
  };
  return (
    <StyledContainer>
      <HeaderPageVar1 title="Тест - Название теста">
        <Link to="/">
          <Button
            size="l"
            label="Вернуться назад"
            iconLeft={FaAngleLeft}
            form="round"
          />
        </Link>
        <Link to="/tasks/create">
          <Button
            size="l"
            label="Добавить вопрос"
            iconLeft={FaPlus}
            form="round"
          />
        </Link>
        <Button
          size="l"
          label="Начать тест"
          view="accent"
          iconRight={FaPlayCircle}
          form="round"
          onClick={goRedirect}
          disabled={isWorkingTasks.length <= 0}
        />
      </HeaderPageVar1>
      <TextFiled
        type="text"
        placeholder="Найти вопрос"
        name="search"
        value={filter}
        onChange={handleSetFilter}
      />

      {isLoadingTasks ? (
        <Loader />
      ) : tasks.length > 0 ? (
        <QuestionsTable
          items={tasks}
          onRemoveTask={handleRemoveTask}
          onEditTask={handleEditTask}
          onOpenPage={handleOpenSinglePage}
        />
      ) : (
        <Flex justify="center" align="center" direction="column">
          <p>У вас еще нет вопросов</p>
        </Flex>
      )}
    </StyledContainer>
  );
};

export default TestPageAuth;
