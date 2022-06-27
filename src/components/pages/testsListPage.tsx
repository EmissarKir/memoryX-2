import React from "react";
import { setLocalCurrentTest } from "../../services/localStorage.service";
import { ITestServer } from "../../types/types";
import history from "../../utils/history";
import { List, ListItem } from "../common/list";

type Props = {
  tests: ITestServer[];
};

export default function TestsListPage({ tests }: Props) {
  const chooseTest = (testId: string) => {
    setLocalCurrentTest(testId);
    history.push(`/tests/${testId}`);
  };
  return (
    <List
      items={tests}
      renderItem={(item: ITestServer) => (
        <ListItem
          item={item}
          key={item.id}
          onClick={() => chooseTest(item.id)}
        />
      )}
    />
  );
}
