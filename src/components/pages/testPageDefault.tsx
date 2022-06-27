import React, { useEffect, useState } from "react";
import { FaAngleLeft, FaPlayCircle } from "react-icons/fa";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useAppDispatch } from "../../hooks/redux";
import {
  getTasks,
  getTasksLoadingStatus,
  loadTasks,
  setTaskFilter,
} from "../../store/tasks";
import Button from "../common/button";
import { TextFiled } from "../common/forms";
import { Loader } from "../common/loader";
import Flex from "../stylesComp/flex";
import ControlPanel from "../ui/controlPanel";
import QuestionsTable from "../ui/questionsTable";

const TestPageDefault = () => {
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
    <>
      <ControlPanel title="Тест - образец">
        <Button
          renderAs={NavLink}
          to="/"
          view="secondary"
          label="Вернуться назад"
          iconLeft={FaAngleLeft}
        />

        <Button
          label="Начать тест"
          view="accent"
          iconRight={FaPlayCircle}
          onClick={goRedirect}
        />
      </ControlPanel>
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
    </>
  );
};

export default TestPageDefault;
