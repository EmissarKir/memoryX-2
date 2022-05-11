import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import EmptyTestPage from "./emptyTestPage";
import TestsListPage from "./testsListPage";
import { getTests, loadTests } from "../../store/tests";
import { AppDispatch } from "../..";

type Props = {};

export default function TestPage({}: Props) {
  const dispatch: AppDispatch = useDispatch();
  const tests = useSelector(getTests());
  console.log("tests", tests);

  useEffect(() => {
    dispatch(loadTests());
  }, []);

  return tests.length === 0 ? (
    <EmptyTestPage />
  ) : (
    <TestsListPage tests={tests} />
  );
}
