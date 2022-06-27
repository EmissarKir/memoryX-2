import { FC } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getTaskById } from "../store/tasks";
import EditTaskPage from "../components/pages/editTaskPage";
import ViewTaskPage from "../components/pages/viewTaskPage";
import { Loader } from "../components/common/loader";

const TaskPage: FC = () => {
  const { taskId, edit } = useParams();
  const task = useSelector(getTaskById(taskId));

  if (!task) return <Loader />;

  return (
    <>{edit ? <EditTaskPage task={task} /> : <ViewTaskPage task={task} />}</>
  );
};
export default TaskPage;
