import React from "react";
import { ThemeProvider } from "styled-components";
import { baseTheme } from "./styles/theme";
import { Routes, Route } from "react-router-dom";

import GlobalStyle from "./styles/global";

import Sidebar from "./components/ui/sidebar";
import UserPanel from "./components/ui/userPanel";
import MainContainer from "./components/styles/mainContainer";
import CreateTestPage from "./components/pages/createTestPage";
import TestsPage from "./components/pages/testsPage";
import LoginPage from "./components/pages/loginPage";
import LogOut from "./components/pages/logOut";
import { CustomRouter } from "./customRouter";
import customHistory from "./utils/history";
import CreateTaskPage from "./components/pages/createTaskPage";
import ExercisePage from "./components/pages/exercisePage";
import EditTaskPage from "./components/pages/editTaskPage";
import TaskPage from "./components/pages/taskPage";
import TestPage from "./layouts/testPage";

function App() {
  return (
    <CustomRouter history={customHistory}>
      <ThemeProvider theme={baseTheme}>
        <Sidebar />
        <MainContainer>
          <UserPanel />
          <Routes>
            <Route path="/tasks/create" element={<CreateTaskPage />} />
            <Route path="/exercise" element={<ExercisePage />} />
            <Route path="/tests/create" element={<CreateTestPage />} />
            {/* <Route path="tasks/:taskId" element={<TaskPage />} /> */}

            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<LoginPage />} />
            <Route path="/logout" element={<LogOut />} />
            <Route path="/tests/:testId" element={<TestPage />} />
            <Route path="/tasks/:taskId/:edit" element={<TaskPage />} />
            <Route path="/tasks/:taskId" element={<TaskPage />} />
            <Route path="/" element={<TestsPage />} />
          </Routes>
        </MainContainer>
        <GlobalStyle />
      </ThemeProvider>
    </CustomRouter>
  );
}

export default App;
