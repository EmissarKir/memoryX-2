import React from "react";
import { IColumnQuestionsProps } from "../../../types/types";

type Props = {
  columns: IColumnQuestionsProps;
};

const TableHeader: React.FC<Props> = ({ columns }) => {
  return (
    <thead>
      <tr>
        {/* {Object.keys(columns)as Array<keyof typeof columns>.map((column) => {
          const fff = columns[column];
          return <td key={column}>{fff.name}</td>;
        })} */}
      </tr>
    </thead>
  );
};
export default TableHeader;
