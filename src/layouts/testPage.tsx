import { FC } from "react";
import { useSelector } from "react-redux";
import TestPageAuth from "../components/pages/testPageAuth";
import TestPageDefault from "../components/pages/testPageDefault";
import { useResponsive } from "../hooks/useResponsive";
import { getIsLoggedIn } from "../store/users";

const TestPage: FC = () => {
  const isLoggedIn = useSelector(getIsLoggedIn());
  const isMobile = useResponsive(720);
  return (
    <>
      {isLoggedIn ? <TestPageAuth isMobile={isMobile} /> : <TestPageDefault />}
    </>
  );
};

export default TestPage;
