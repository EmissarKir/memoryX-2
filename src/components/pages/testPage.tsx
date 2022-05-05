import React, { useEffect, useState } from "react";
import testsService from "../../services/tests.service";
import EmptyTestPage from "./emptyTestPage";
import TestsListPage from "./testsListPage";

interface ITests {
  id: number;
  name: string;
}
type Props = {};

const testsArray = [];

export default function TestPage({}: Props) {
  const [tests, setTests] = useState<ITests[]>([]);

  useEffect(() => {
    getTests();
  }, []);

  async function getTests() {
    const { data } = await testsService.fetch();
    console.log("data", data);
  }

  return testsArray.length === 0 ? <EmptyTestPage /> : <TestsListPage />;
}
