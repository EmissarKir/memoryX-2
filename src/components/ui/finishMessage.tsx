import { FC } from "react";
import { getNoun } from "../../utils";
import Text from "../common/text";

type FinishMessageProps = {
  skipIndex: number;
  answeredIndex: number;
  completedTasks: number;
};

const FinishMessage: FC<FinishMessageProps> = ({
  skipIndex,
  answeredIndex,
  completedTasks,
}) => {
  return (
    <>
      <Text align="center" renderAs="h2" size="2l" weight="bold">
        Тест завершен
      </Text>
      <Text size="l">
        {skipIndex} {getNoun(skipIndex, "вопрос", "вопроса", "вопросов")}{" "}
        пропущено
      </Text>

      <Text size="l">
        на {answeredIndex}{" "}
        {getNoun(answeredIndex, "вопрос", "вопроса", "вопросов")} отвечено
        положительно
      </Text>
      {completedTasks > 0 && <Text> {completedTasks} завершено</Text>}
    </>
  );
};

export default FinishMessage;
