import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { StyledLink, StyledPage, StyledTitle2 } from "../../styles/styles";
import Flex from "../styles/flex";
import LoginForm from "../ui/loginForm";
import RegisterForm from "../ui/registerForm";

const StyledForm = styled.div`
  width: 400px;
  text-align: center;
  & > *:not(:last-child) {
    margin-bottom: 20px;
  }
`;

const LoginPage = () => {
  const { pathname } = useLocation();
  const isLogin = pathname === "/login";
  const formTitle = isLogin ? "Вход" : "Регистрация";
  const linkText = isLogin ? ["/register", "РЕГИСТРАЦИЯ"] : ["/login", "ВХОД"];
  return (
    <StyledPage>
      <Flex justify="center" align="center" direction="column">
        <StyledForm>
          <StyledTitle2>{formTitle}</StyledTitle2>
          {isLogin ? <LoginForm /> : <RegisterForm />}
          <StyledLink to={linkText[0]}>{linkText[1]}</StyledLink>
        </StyledForm>
      </Flex>
    </StyledPage>
  );
};

export default LoginPage;
{
}
