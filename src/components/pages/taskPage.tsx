import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getTaskById } from "../../store/tasks";
import EditTaskPage from "./editTaskPage";
import ViewTaskPage from "./viewTaskPage";

const TaskPage = () => {
  const { taskId, edit } = useParams();
  const task = useSelector(getTaskById(taskId));

  return (
    <>{edit ? <EditTaskPage task={task} /> : <ViewTaskPage task={task} />}</>
  );
};
export default TaskPage;
