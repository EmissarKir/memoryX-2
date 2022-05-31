import React, { useEffect, useState } from "react";
import { FaAngleLeft, FaPlayCircle } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useAppDispatch } from "../../hooks/redux";
import {
  getTasks,
  getTasksLoadingStatus,
  loadTasks,
  setTaskFilter,
} from "../../store/tasks";
import { StyledContainer } from "../../styles/styles";
import Button from "../common/button";
import TextFiled from "../common/forms/textFiled";
import Loader from "../common/loader";
import Flex from "../styles/flex";
import HeaderPageVar1 from "../ui/headerPageVar1";
import QuestionsTable from "../ui/questionsTable";

type Props = {};

const TestPageDefault = (props: Props) => {
  const [filter, setFilter] = useState<string>("");
  const { pathname } = useLocation();

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const tasks = useSelector(getTasks());
  const filtredTask = tasks.filter(
    (task) => task.answer.toLowerCase().indexOf(filter.toLowerCase()) !== -1
  );

  const isLoadingTasks = useSelector(getTasksLoadingStatus());
  const { testId } = useParams();

  useEffect(() => {
    dispatch(loadTasks(testId!));
  }, []);

  useEffect(() => {
    dispatch(setTaskFilter(filter));
  }, [filter]);

  useEffect(() => {
    setFilter("");
  }, [pathname]);

  const goRedirect = () => {
    navigate("/exercise");
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
        <Button
          size="l"
          label="Начать тест"
          view="accent"
          iconRight={FaPlayCircle}
          form="round"
          onClick={goRedirect}
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
      ) : filtredTask.length > 0 ? (
        <QuestionsTable items={filtredTask} onOpenPage={handleOpenSinglePage} />
      ) : (
        <Flex justify="center" align="center" direction="column">
          <p>По вашим условиям ничего не найдено</p>
        </Flex>
      )}
    </StyledContainer>
  );
};

export default TestPageDefault;
