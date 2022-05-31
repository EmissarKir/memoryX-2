import React from "react";
import { useSelector } from "react-redux";
import TestPageAuth from "../components/pages/testPageAuth";
import TestPageDefault from "../components/pages/testPageDefault";
import { getIsLoggedIn } from "../store/users";

type Props = {};

const TestPage = (props: Props) => {
  const isLoggedIn = useSelector(getIsLoggedIn());
  return <>{isLoggedIn ? <TestPageAuth /> : <TestPageDefault />}</>;
};

export default TestPage;
