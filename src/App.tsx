import React from "react";
import { ThemeProvider } from "styled-components";
import { baseTheme } from "./styles/theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import GlobalStyle from "./styles/global";

import Sidebar from "./components/ui/sidebar";
import UserPanel from "./components/ui/userPanel";
import MainContainer from "./components/styles/mainContainer";
import QuestionsPage from "./components/pages/questionsPage";
import CreateTestPage from "./components/pages/createTestPage";
import TestPage from "./components/pages/testPage";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={baseTheme}>
        <Sidebar />
        <MainContainer>
          <UserPanel />
          <Routes>
            <Route path="qustionsPage" element={<QuestionsPage />} />
            <Route path="/" element={<TestPage />} />
            <Route path="tests/create" element={<CreateTestPage />} />
          </Routes>
        </MainContainer>
        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
