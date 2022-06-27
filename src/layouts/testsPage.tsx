import { FC, useEffect } from "react";
import { useSelector } from "react-redux";
import EmptyTestPage from "../components/pages/emptyTestPage";
import TestsListPage from "../components/pages/testsListPage";
import { getTests, getTestsLoadingStatus, loadTests } from "../store/tests";
import { getIsLoggedIn, loadCurrentUser } from "../store/users";
import { useAppDispatch } from "../hooks/redux";
import ControlPanel from "../components/ui/controlPanel";
import { SContent } from "../styles/styles";
import GreetingMessage from "../components/ui/greetingMessage";
import { Loader } from "../components/common/loader";

const TestsPage: FC = () => {
  const dispatch = useAppDispatch();
  const tests = useSelector(getTests());
  const isAuth = useSelector(getIsLoggedIn());
  const isTestLoading = useSelector(getTestsLoadingStatus());

  useEffect(() => {
    dispatch(loadTests());
  }, [isAuth]);

  useEffect(() => {
    if (isAuth) {
      dispatch(loadCurrentUser());
    }
  }, []);

  if (isTestLoading) return <Loader />;

  return (
    <>
      <ControlPanel title="Мои тесты"></ControlPanel>
      <SContent>
        {tests.length === 0 ? (
          <EmptyTestPage />
        ) : (
          <>
            <TestsListPage tests={tests} />
            {!isAuth && <GreetingMessage />}
          </>
        )}
      </SContent>
    </>
  );
};
export default TestsPage;
