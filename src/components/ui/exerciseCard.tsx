import React, { FC } from "react";
import { ITaskServer } from "../../types/types";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Text from "../common/text";
import { Collapsible } from "../common/collapsible";

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
      <Text>
        <ReactMarkdown
          children={indexTask.answer}
          remarkPlugins={[remarkGfm]}
        />
      </Text>
    </Collapsible>
  );
};

export default ExerciseCard;
