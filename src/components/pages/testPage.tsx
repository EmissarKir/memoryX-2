import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import EmptyTestPage from "./emptyTestPage";
import TestsListPage from "./testsListPage";
import { loadTests } from "../../store/test";
import { AppDispatch } from "../..";

interface ITests {
  id: number;
  name: string;
}
type Props = {};

const testsArray = [];

export default function TestPage({}: Props) {
  const dispatch: AppDispatch = useDispatch();
  // const [tests, setTests] = useState<ITests[]>([]);

  useEffect(() => {
    dispatch(loadTests());
  }, []);

  return testsArray.length === 0 ? <EmptyTestPage /> : <TestsListPage />;
}
