import React from "react";
import { ThemeProvider } from "styled-components";
import { baseTheme } from "./styles/theme";
import { Routes, Route } from "react-router-dom";

import GlobalStyle from "./styles/global";

import Sidebar from "./components/ui/sidebar";
import UserPanel from "./components/ui/userPanel";
import MainContainer from "./components/styles/mainContainer";
import QuestionsPage from "./components/pages/questionsPage";
import CreateTestPage from "./components/pages/createTestPage";
import TestPage from "./components/pages/testPage";
import LoginPage from "./components/pages/loginPage";
import LogOut from "./components/pages/logOut";
import { CustomRouter } from "./customRouter";
import customHistory from "./history";

function App() {
  return (
    <CustomRouter history={customHistory}>
      <ThemeProvider theme={baseTheme}>
        <Sidebar />
        <MainContainer>
          <UserPanel />
          <Routes>
            <Route path="questionsPage" element={<QuestionsPage />} />
            <Route path="tests/create" element={<CreateTestPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<LoginPage />} />
            <Route path="/logout" element={<LogOut />} />
            <Route path="/" element={<TestPage />} />
          </Routes>
        </MainContainer>
        <GlobalStyle />
      </ThemeProvider>
    </CustomRouter>
  );
}

export default App;
