import { FC } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import Flex from "../components/stylesComp/flex";
import LoginForm from "../components/ui/loginForm";
import RegisterForm from "../components/ui/registerForm";
import Button from "../components/common/button";
import Text from "../components/common/text";
import { NavLink } from "react-router-dom";

const StyledForm = styled.div`
  width: 400px;
  text-align: center;
  & > *:not(:last-child) {
    margin-bottom: 20px;
  }
  @media ${({ theme }) => theme.media.small} {
    width: 100%;
  }
`;

const LoginPage: FC = () => {
  const { pathname } = useLocation();
  const isLogin = pathname === "/login";
  const formTitle = isLogin ? "Вход" : "Регистрация";
  const linkText = isLogin ? ["/register", "РЕГИСТРАЦИЯ"] : ["/login", "ВХОД"];
  return (
    <Flex justify="center" align="center" direction="column" height="100%">
      <StyledForm>
        <Text weight="bold" size="2l" align="center">
          {formTitle}
        </Text>
        {isLogin ? <LoginForm /> : <RegisterForm />}

        <Button
          renderAs={NavLink}
          to={linkText[0]}
          view="clear"
          label={linkText[1]}
          size="l"
        />
      </StyledForm>
      {isLogin && (
        <>
          <Text view="secondary">
            * Для оценки всех возможностей приложения зарегистрируйтесь или
            авторизуйтесь с помощью тестового логина и пароля , указанных ниже
          </Text>
          <Text view="secondary" marginBottom="0">
            Логин: test@mail.ru
          </Text>
          <Text view="secondary">Пароль: Test123456</Text>
        </>
      )}
    </Flex>
  );
};

export default LoginPage;
