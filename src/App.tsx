import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { baseTheme } from "./styles/theme";
import { Routes, Route } from "react-router-dom";

import GlobalStyle from "./styles/global";

import Sidebar from "./components/ui/sidebar";
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
import { useMediaQuery } from "./hooks/useMediaQuery";

function App() {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const isMobile = useMediaQuery("(max-width: 992px)");

  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <CustomRouter history={customHistory}>
      <ThemeProvider theme={baseTheme}>
        <Sidebar
          isOpen={isOpen}
          isMobile={isMobile}
          onToggleSidebar={toggleSidebar}
        >
          <UserPanel onToggleSidebar={toggleSidebar} />
          <Routes>
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
        </Sidebar>
        <GlobalStyle />
      </ThemeProvider>
    </CustomRouter>
  );
}

export default App;
