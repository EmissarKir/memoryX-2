import React from "react";
import styled from "styled-components";
import { ITaskServer } from "../../types/types";
import { limitStr } from "../../utils/limitStr";
import { timeConverter } from "../../utils/timeConverter";

const StyledRounIcon = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  background: ${({ theme }) => theme.colors.defaultLigth};
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.5s ease 0s;
  span {
    font-size: 1.15rem;
    color: ${({ theme }) => theme.colors.primary};
  }
  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    span {
      color: ${({ theme }) => theme.colors.primaryLigth};
    }
  }
`;

const StyledQuestionsTable = styled.div`
  margin-top: 30px;
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
  }
  tbody {
    tr {
      &:hover {
        background-color: ${({ theme }) => theme.colors.accentLigth};
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
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.primaryLigth};
  text-align: center;
  white-space: nowrap;
`;
type QuestionsTableProps = {
  items?: ITaskServer[];
  onRemoveTask?: (id: string, e: React.SyntheticEvent) => void;
  onEditTask?: (id: string, e: React.SyntheticEvent) => void;
  onOpenPage?: (id: string) => void;
};

export default function QuestionsTable({
  items,
  onRemoveTask,
  onEditTask,
  onOpenPage,
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
                  <td>{limitStr(question, 150)}</td>
                  <td>{limitStr(answer, 150)}</td>
                  <td>{item.count}</td>
                  <td>
                    <StyledBadge isWorking={item.status === "в работе"}>
                      {item.status}
                    </StyledBadge>
                  </td>
                  <td>
                    <div className="date">
                      <span className="date__title">
                        {timeConverter(item.createdBy, 1)}
                      </span>
                      <span className="date__subtitle">
                        {timeConverter(item.createdBy, 2)}
                      </span>
                    </div>
                  </td>
                  <td>
                    {onEditTask && (
                      <StyledRounIcon onClick={(e) => onEditTask?.(item.id, e)}>
                        <span>
                          <i className="fa-solid fa-pen-to-square"></i>
                        </span>
                      </StyledRounIcon>
                    )}
                  </td>
                  <td>
                    {onRemoveTask && (
                      <StyledRounIcon
                        onClick={(e) => onRemoveTask?.(item.id, e)}
                      >
                        <span>
                          <i className="fa-solid fa-calendar-xmark"></i>
                        </span>
                      </StyledRounIcon>
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
