import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { StyledLink, StyledPage, StyledTitle2 } from "../styles/styles";
import Flex from "../components/styles/flex";
import LoginForm from "../components/ui/loginForm";
import RegisterForm from "../components/ui/registerForm";
import { Link } from "react-router-dom";
import Button from "../components/common/button";

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
          <Link to={linkText[0]}>
            <Button renderAs="a" view="clear" label={linkText[1]} size="l" />
          </Link>
        </StyledForm>
      </Flex>
    </StyledPage>
  );
};

export default LoginPage;
{
}
