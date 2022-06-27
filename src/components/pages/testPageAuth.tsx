import { log } from "console";
import React, { useEffect, useState } from "react";
import { FaAngleLeft, FaPlayCircle, FaPlus } from "react-icons/fa";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
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
import { getNameTest } from "../../store/tests";
import { getIsLoggedIn, loadCurrentUser } from "../../store/users";
import Button from "../common/button";
import { TextFiled } from "../common/forms";
import { Loader } from "../common/loader";
import Text from "../common/text";
import ControlPanel from "../ui/controlPanel";
import QuestionsTable from "../ui/questionsTable";

type TestPageAuthProps = {
  isMobile?: boolean;
};

const TestPageAuth = ({ isMobile }: TestPageAuthProps) => {
  const [filter, setFilter] = useState<string>("");

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const tasks = useSelector(getFiltredTasks());

  const isWorkingTasks = useSelector(getIsWorkingTasks());
  const isLoadingTasks = useSelector(getTasksLoadingStatus());
  const isAuth = useSelector(getIsLoggedIn());

  const { testId } = useParams();

  const testName = useSelector(getNameTest(testId!));

  useEffect(() => {
    dispatch(loadTasks(testId!));
    dispatch(loadCurrentUser());
  }, [isAuth]);

  useEffect(() => {
    dispatch(setTaskFilter(filter));
  }, [filter]);

  useEffect(() => {
    setFilter("");
  }, [testId]);

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
    <>
      <ControlPanel title={`Тест - ${testName}`}>
        <Button
          renderAs={NavLink}
          to="/"
          label="Вернуться назад"
          iconLeft={FaAngleLeft}
          view="secondary"
        />
        <Button
          renderAs={NavLink}
          to="/tasks/create"
          label="Добавить вопрос"
          iconLeft={FaPlus}
        />
        <Button
          label="Начать тест"
          view="accent"
          iconRight={FaPlayCircle}
          onClick={goRedirect}
          disabled={isWorkingTasks.length <= 0}
        />
      </ControlPanel>
      <TextFiled
        type="text"
        placeholder="Найти вопрос"
        name="search"
        value={filter}
        onChange={handleSetFilter}
        disabled={tasks.length <= 0 && !filter}
      />

      {isLoadingTasks ? (
        <Loader />
      ) : tasks.length > 0 ? (
        <QuestionsTable
          items={tasks}
          onRemoveTask={handleRemoveTask}
          onEditTask={handleEditTask}
          onOpenPage={handleOpenSinglePage}
          isMobile={isMobile}
        />
      ) : filter ? (
        <Text align="center" size="l">
          По вашему запросу ничего не найдено
        </Text>
      ) : (
        <Text align="center" size="l" view="secondary">
          В этот тест еще не добавлены вопросы
        </Text>
      )}
    </>
  );
};

export default TestPageAuth;
