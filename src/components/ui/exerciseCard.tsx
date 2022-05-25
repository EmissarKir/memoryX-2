import React, { FC } from "react";
import { ITaskServer } from "../../types/types";
import ReactMarkdown from "react-markdown";
import Collapsible from "../common/collapsible";
import remarkGfm from "remark-gfm";

interface IExerciseCardProps {
  indexTask: ITaskServer;
  index: number;
  maxCount: number;
}

const ExerciseCard: FC<IExerciseCardProps> = ({
  indexTask,
  index,
  maxCount,
}) => {
  return (
    <Collapsible title={indexTask.question} index={index} maxCount={maxCount}>
      <>
        <ReactMarkdown
          children={indexTask.answer}
          remarkPlugins={[remarkGfm]}
        />
      </>
    </Collapsible>
  );
};

export default ExerciseCard;
