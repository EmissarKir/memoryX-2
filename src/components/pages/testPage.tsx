import { log } from "console";
import React from "react";
import EmptyTestPage from "./emptyTestPage";
import TestsListPage from "./testsListPage";

type Props = {};

const testsArray = [];

export default function TestPage({}: Props) {
  return testsArray.length === 0 ? <EmptyTestPage /> : <TestsListPage />;
}
