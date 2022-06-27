import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { baseTheme } from "./styles/theme";
import { Routes, Route } from "react-router-dom";

import GlobalStyle from "./styles/global";

import UserPanel from "./components/ui/userPanel";
import CreateTestPage from "./components/pages/createTestPage";
import TestsPage from "./layouts/testsPage";
import LoginPage from "./layouts/loginPage";
import LogOut from "./layouts/logOut";
import { CustomRouter } from "./customRouter";
import customHistory from "./utils/history";
import CreateTaskPage from "./components/pages/createTaskPage";
import ExercisePage from "./layouts/exercisePage";
import TaskPage from "./layouts/taskPage";
import TestPage from "./layouts/testPage";
import { ViewportProvider } from "./hooks/useViewport ";
import { SContainer } from "./styles/styles";
import UserPage from "./layouts/userPage";
import { Sidebar } from "./components/ui/sidebar";

function App() {
  const [isOpenSidebar, setIsOpenSidebar] = useState<boolean>(false);

  const toggleSidebar = () => {
    setIsOpenSidebar((prev) => !prev);
  };
  return (
    <ViewportProvider>
      <CustomRouter history={customHistory}>
        <ThemeProvider theme={baseTheme}>
          <GlobalStyle />
          <Sidebar isOpen={isOpenSidebar} onToggleSidebar={toggleSidebar}>
            <UserPanel onToggleSidebar={toggleSidebar} />
            <SContainer>
              <Routes>
                <Route path="/user" element={<UserPage />} />
                <Route path="/tasks/create" element={<CreateTaskPage />} />
                <Route path="/exercise" element={<ExercisePage />} />
                <Route path="/tests/create" element={<CreateTestPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<LoginPage />} />
                <Route path="/logout" element={<LogOut />} />
                <Route path="/tests/:testId" element={<TestPage />} />
                <Route path="/tasks/:taskId/:edit" element={<TaskPage />} />
                <Route path="/tasks/:taskId" element={<TaskPage />} />
                <Route path="/" element={<TestsPage />} />
              </Routes>
            </SContainer>
          </Sidebar>
        </ThemeProvider>
      </CustomRouter>
    </ViewportProvider>
  );
}

export default App;
