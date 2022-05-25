import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import EmptyTestPage from "./emptyTestPage";
import TestsListPage from "./testsListPage";
import { getTests, getTestsLoadingStatus, loadTests } from "../../store/tests";
import { getIsLoggedIn, loadCurrentUser } from "../../store/users";
import Loader from "../common/loader";
import { useAppDispatch } from "../../hooks/redux";

type Props = {};

export default function TestsPage({}: Props) {
  const dispatch = useAppDispatch();
  const tests = useSelector(getTests());
  const isAuth = useSelector(getIsLoggedIn());
  const isTestLoading = useSelector(getTestsLoadingStatus());

  useEffect(() => {
    dispatch(loadTests());
    dispatch(loadCurrentUser());
  }, [isAuth]);
  if (isTestLoading) return <Loader />;

  return tests.length === 0 ? (
    <EmptyTestPage />
  ) : (
    <TestsListPage tests={tests} />
  );
}
