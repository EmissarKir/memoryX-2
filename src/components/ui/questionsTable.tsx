import React from "react";
import styled from "styled-components";

type Props = {};

const StyledQuestionsTable = styled.div`
  margin-top: 30px;
  table {
    border-collapse: collapse;
    width: 100%;
  }
  thead {
    td {
      font-weight: 400;
      color: #8290a8;
      text-align: center;
      padding-bottom: 15px;
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
      &:not(:last-child) {
        text-align: left;
      }
      &:last-child {
        text-align: right;
      }
    }
  }

  .date {
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

const dataTable = [
  {
    id: 1,
    question: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus ea sit cum minima. Temporibus fugiat, molestias tempore id harum ducimus non ex architecto? Sint ex debitis iste quaerat voluptatem at.`,
    answer: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus ea sit cum minima. Temporibus fugiat, molestias tempore id harum ducimus non ex architecto? Sint ex debitis iste quaerat voluptatem at.`,
    count: "6",
    status: "pending",
    left: "4",
    createdByDate: "April 10, 2022",
    createdByHours: "5:21 PM",
  },
  {
    id: 2,
    question: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus ea sit cum minima. Temporibus fugiat, molestias tempore id harum ducimus non ex architecto? Sint ex debitis iste quaerat voluptatem at.`,
    answer: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus ea sit cum minima. Temporibus fugiat, molestias tempore id harum ducimus non ex architecto? Sint ex debitis iste quaerat voluptatem at.`,
    count: "6",
    status: "pending",
    left: "4",
    createdByDate: "April 10, 2022",
    createdByHours: "5:21 PM",
  },
  {
    id: 3,
    question: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus ea sit cum minima. Temporibus fugiat, molestias tempore id harum ducimus non ex architecto? Sint ex debitis iste quaerat voluptatem at. ur, adipisicing elit. Necessitatibus ea sit cum minima. Temporibus fugiat, molestias tempore id harum ducimus non ex architecto? Sint ex debitis iste quaerat voluptatem ur, adipisicing elit. Necessitatibus ea sit cum minima. Temporibus fugiat, molestias tempore id harum ducimus non ex architecto? Sint ex debitis iste quaerat voluptatem `,
    answer: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus ea sit cum minima. Temporibus fugiat, molestias tempore id harum ducimus non ex architecto? Sint ex debitis iste quaerat voluptatem at. `,
    count: "6",
    status: "pending",
    left: "4",
    createdByDate: "April 10, 2022",
    createdByHours: "5:21 PM",
  },
  {
    id: 4,
    question: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus ea sit cum minima. Temporibus fugiat, molestias tempore id harum ducimus non ex architecto? Sint ex debitis iste quaerat voluptatem at.`,
    answer: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus ea sit cum minima. Temporibus fugiat, molestias tempore id harum ducimus non ex architecto? Sint ex debitis iste quaerat voluptatem at.`,
    count: "6",
    status: "pending",
    left: "4",
    createdByDate: "April 10, 2022",
    createdByHours: "5:21 PM",
  },
  {
    id: 5,
    question: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus ea sit cum minima. Temporibus fugiat, molestias tempore id harum ducimus non ex architecto? Sint ex debitis iste quaerat voluptatem at.`,
    answer: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus ea sit cum minima. Temporibus fugiat, molestias tempore id harum ducimus non ex architecto? Sint ex debitis iste quaerat voluptatem at.`,
    count: "6",
    status: "pending",
    left: "4",
    createdByDate: "April 10, 2022",
    createdByHours: "5:21 PM",
  },
  {
    id: 6,
    question: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus ea sit cum minima. Temporibus fugiat, molestias tempore id harum ducimus non ex architecto? Sint ex debitis iste quaerat voluptatem at.`,
    answer: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus ea sit cum minima. Temporibus fugiat, molestias tempore id harum ducimus non ex architecto? Sint ex debitis iste quaerat voluptatem at.`,
    count: "6",
    status: "pending",
    left: "4",
    createdByDate: "April 10, 2022",
    createdByHours: "5:21 PM",
  },
  {
    id: 7,
    question: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus ea sit cum minima. Temporibus fugiat, molestias tempore id harum ducimus non ex architecto? Sint ex debitis iste quaerat voluptatem at.`,
    answer: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus ea sit cum minima. Temporibus fugiat, molestias tempore id harum ducimus non ex architecto? Sint ex debitis iste quaerat voluptatem at.`,
    count: "6",
    status: "pending",
    left: "4",
    createdByDate: "April 10, 2022",
    createdByHours: "5:21 PM",
  },
  {
    id: 8,
    question: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus ea sit cum minima. Temporibus fugiat, molestias tempore id harum ducimus non ex architecto? Sint ex debitis iste quaerat voluptatem at.`,
    answer: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus ea sit cum minima. Temporibus fugiat, molestias tempore id harum ducimus non ex architecto? Sint ex debitis iste quaerat voluptatem at.`,
    count: "6",
    status: "pending",
    left: "4",
    createdByDate: "April 10, 2022",
    createdByHours: "5:21 PM",
  },
  {
    id: 9,
    question: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus ea sit cum minima. Temporibus fugiat, molestias tempore id harum ducimus non ex architecto? Sint ex debitis iste quaerat voluptatem at.`,
    answer: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus ea sit cum minima. Temporibus fugiat, molestias tempore id harum ducimus non ex architecto? Sint ex debitis iste quaerat voluptatem at.`,
    count: "6",
    status: "pending",
    left: "4",
    createdByDate: "April 10, 2022",
    createdByHours: "5:21 PM",
  },
  {
    id: 10,
    question: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus ea sit cum minima. Temporibus fugiat, molestias tempore id harum ducimus non ex architecto? Sint ex debitis iste quaerat voluptatem at.`,
    answer: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus ea sit cum minima. Temporibus fugiat, molestias tempore id harum ducimus non ex architecto? Sint ex debitis iste quaerat voluptatem at.`,
    count: "6",
    status: "pending",
    left: "4",
    createdByDate: "April 10, 2022",
    createdByHours: "5:21 PM",
  },
  {
    id: 11,
    question: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus ea sit cum minima. Temporibus fugiat, molestias tempore id harum ducimus non ex architecto? Sint ex debitis iste quaerat voluptatem at.`,
    answer: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus ea sit cum minima. Temporibus fugiat, molestias tempore id harum ducimus non ex architecto? Sint ex debitis iste quaerat voluptatem at.`,
    count: "6",
    status: "pending",
    left: "4",
    createdByDate: "April 10, 2022",
    createdByHours: "5:21 PM",
  },
  {
    id: 12,
    question: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus ea sit cum minima. Temporibus fugiat, molestias tempore id harum ducimus non ex architecto? Sint ex debitis iste quaerat voluptatem at.`,
    answer: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus ea sit cum minima. Temporibus fugiat, molestias tempore id harum ducimus non ex architecto? Sint ex debitis iste quaerat voluptatem at.`,
    count: "6",
    status: "pending",
    left: "4",
    createdByDate: "April 10, 2022",
    createdByHours: "5:21 PM",
  },
  {
    id: 13,
    question: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus ea sit cum minima. Temporibus fugiat, molestias tempore id harum ducimus non ex architecto? Sint ex debitis iste quaerat voluptatem at.`,
    answer: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus ea sit cum minima. Temporibus fugiat, molestias tempore id harum ducimus non ex architecto? Sint ex debitis iste quaerat voluptatem at.`,
    count: "6",
    status: "pending",
    left: "4",
    createdByDate: "April 10, 2022",
    createdByHours: "5:21 PM",
  },
  {
    id: 14,
    question: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus ea sit cum minima. Temporibus fugiat, molestias tempore id harum ducimus non ex architecto? Sint ex debitis iste quaerat voluptatem at.`,
    answer: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus ea sit cum minima. Temporibus fugiat, molestias tempore id harum ducimus non ex architecto? Sint ex debitis iste quaerat voluptatem at.`,
    count: "6",
    status: "pending",
    left: "4",
    createdByDate: "April 10, 2022",
    createdByHours: "5:21 PM",
  },
  {
    id: 15,
    question: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus ea sit cum minima. Temporibus fugiat, molestias tempore id harum ducimus non ex architecto? Sint ex debitis iste quaerat voluptatem at.`,
    answer: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus ea sit cum minima. Temporibus fugiat, molestias tempore id harum ducimus non ex architecto? Sint ex debitis iste quaerat voluptatem at.`,
    count: "6",
    status: "pending",
    left: "4",
    createdByDate: "April 10, 2022",
    createdByHours: "5:21 PM",
  },
];

export default function QuestionsTable({}: Props) {
  return (
    <StyledQuestionsTable>
      <table>
        <thead>
          <tr>
            <td>Вопрос</td>
            <td>Ответ</td>
            <td>Count</td>
            <td>Status</td>
            <td>Остаток</td>
            <td>Created By</td>
          </tr>
        </thead>
        <tbody>
          {dataTable.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.question}</td>
                <td>{item.answer}</td>
                <td> {item.count}</td>
                <td> {item.status}</td>
                <td> {item.left}</td>
                <td>
                  <div className="date">
                    <span className="date__title"> {item.createdByDate}</span>
                    <span className="date__subtitle">
                      {item.createdByHours}
                    </span>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </StyledQuestionsTable>
  );
}
