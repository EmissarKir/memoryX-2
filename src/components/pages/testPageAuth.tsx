import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
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
import {
  StyledButton,
  StyledContainer,
  StyledNavLinkWithIcon,
} from "../../styles/styles";
import TextFiled from "../common/forms/textFiled";
import Loader from "../common/loader";
import Flex from "../styles/flex";
import HeaderPageVar1 from "../ui/headerPageVar1";
import QuestionsTable from "../ui/questionsTable";

type Props = {};

const StyledButtonActive = styled(StyledButton)`
  background: ${({ theme }) => theme.colors.primary};
`;

const TestPageAuth = (props: Props) => {
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
        <StyledNavLinkWithIcon to="/">
          <span>
            <i className="fa-solid fa-angle-left"></i>
          </span>
          Вернуться назад
        </StyledNavLinkWithIcon>
        <StyledNavLinkWithIcon to="/tasks/create">
          <span>
            <i className="fa-solid fa-plus"></i>
          </span>
          Добавить вопрос
        </StyledNavLinkWithIcon>

        <StyledButtonActive
          onClick={goRedirect}
          disabled={isWorkingTasks.length <= 0}
        >
          <span>
            <i className="fa-solid fa-play"></i>
          </span>
          Начать тест
        </StyledButtonActive>
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
