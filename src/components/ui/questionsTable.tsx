import React from "react";
import { FaRegEdit, FaRegTimesCircle } from "react-icons/fa";
import styled from "styled-components";
import { ITaskServer } from "../../types/types";
import { limitStr } from "../../utils/limitStr";
import { timeConverter } from "../../utils/timeConverter";
import Button from "../common/button";
import Text from "../common/text/text";
import Flex from "../stylesComp/flex";

const StyledQuestionsTable = styled.div`
  margin-top: 30px;
  @media ${({ theme }) => theme.media.medium} {
    margin-top: 0;
  }
  table {
    border-collapse: collapse;
    width: 100%;
  }
  thead {
    td {
      padding: 1.5rem 0.7rem;
      font-weight: 400;
      color: #8290a8;
      text-align: center;
      &:nth-child(1),
      &:nth-child(2) {
        text-align: left;
      }
    }
    @media ${({ theme }) => theme.media.medium} {
      display: none;
    }
  }
  tbody {
    @media ${({ theme }) => theme.media.medium} {
      tr,
      td {
        display: block;
        width: 100%;
      }
    }
    tr {
      cursor: pointer;
      &:hover {
        background-color: ${({ theme }) => theme.colors.accentLigth};
      }

      @media ${({ theme }) => theme.media.medium} {
        border-bottom: 1px solid ${({ theme }) => theme.colors.defaultLigth};
        padding: 10px 0;
      }
    }

    td {
      padding: 0.7rem;
      font-size: 0.9rem;
      line-height: 1.2;
      color: #222;
      text-align: center;
      &:nth-child(1),
      &:nth-child(2) {
        text-align: left;
      }
      @media ${({ theme }) => theme.media.medium} {
        padding: 0.2em;
      }
    }
  }

  .date {
    display: flex;
    flex-direction: column;
    &__title {
      display: inline-block;
      white-space: nowrap;
      margin-bottom: 5px;
      font-weight: 500;
    }
    &__subtitle {
      display: inline-block;
      white-space: nowrap;
      color: grey;
    }
  }
`;
interface BadgeProps {
  isWorking?: boolean;
}

const StyledBadge = styled.div<BadgeProps>`
  background: ${({ isWorking, theme }) =>
    isWorking ? theme.colors.bgDanger : theme.colors.bgSuccess};
  padding: 10px;
  border-radius: ${({ theme }) => theme.controlRadius};
  color: ${({ theme }) => theme.colors.primaryLigth};
  text-align: center;
  white-space: nowrap;
`;

type QuestionsTableProps = {
  items?: ITaskServer[];
  isMobile?: boolean;
  onRemoveTask?: (id: string, e: React.SyntheticEvent) => void;
  onEditTask?: (id: string, e: React.SyntheticEvent) => void;
  onOpenPage?: (id: string) => void;
};

export default function QuestionsTable({
  items,
  onRemoveTask,
  onEditTask,
  onOpenPage,
  isMobile,
}: QuestionsTableProps) {
  return (
    <StyledQuestionsTable>
      <table>
        <thead>
          <tr>
            <td style={{ width: "28%" }}>Вопрос</td>
            <td style={{ width: "28%" }}>Ответ</td>
            <td>Кол-во</td>
            <td style={{ minWidth: "100px" }}>Статус</td>
            <td>Создан</td>
            {onRemoveTask ? <td style={{ width: "60px" }}></td> : null}
            {onEditTask ? <td style={{ width: "60px" }}></td> : null}
          </tr>
        </thead>
        <tbody>
          {items &&
            items.map((item) => {
              const { question, answer } = item;

              return (
                <tr key={item.id} onClick={() => onOpenPage?.(item.id)}>
                  <td>
                    <Text size="s">{limitStr(question, 150)}</Text>
                  </td>
                  <td>
                    <Text size="s">{limitStr(answer, 150)}</Text>
                  </td>
                  <td>{item.count}</td>
                  <td>
                    <StyledBadge isWorking={item.status === "в работе"}>
                      {item.status}
                    </StyledBadge>
                  </td>
                  <td>
                    <Flex direction="column" justify="center" align="center">
                      <Text marginBottom="0px">
                        {timeConverter(item.createdBy, 1)}
                      </Text>
                      <Text view="secondary" weight="thin">
                        {timeConverter(item.createdBy, 2)}
                      </Text>
                    </Flex>
                  </td>
                  <td>
                    {onEditTask && (
                      <>
                        <Button
                          form={isMobile ? "brick" : "round"}
                          width={isMobile ? "full" : "default"}
                          size={isMobile ? "l" : "xl"}
                          view="ghost"
                          iconLeft={FaRegEdit}
                          label={isMobile ? "Редактировать" : undefined}
                          onlyIcon={isMobile ? false : true}
                          onClick={(e: React.MouseEvent) =>
                            onEditTask?.(item.id, e)
                          }
                        />
                      </>
                    )}
                  </td>
                  <td>
                    {onRemoveTask && (
                      <Button
                        form={isMobile ? "brick" : "round"}
                        width={isMobile ? "full" : "default"}
                        size={isMobile ? "l" : "xl"}
                        view="ghost"
                        iconLeft={FaRegTimesCircle}
                        label={isMobile ? "Удалить" : undefined}
                        onlyIcon={isMobile ? false : true}
                        onClick={(e: React.MouseEvent) =>
                          onRemoveTask?.(item.id, e)
                        }
                      />
                    )}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </StyledQuestionsTable>
  );
}
