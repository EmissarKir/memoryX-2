import React from "react";
import styled from "styled-components";
import * as yup from "yup";
import {
  StyledButton,
  StyledLink,
  StyledPage,
  StyledTitle2,
} from "../../styles/styles";
import FormComponent from "../common/forms/form";
import TextFiled from "../common/forms/textFiled";
import Flex from "../styles/flex";

const StyledRegisterForm = styled.div`
  width: 400px;
  text-align: center;
  & > *:not(:last-child) {
    margin-bottom: 20px;
  }
`;

const StyledButtonWithForm = styled(StyledButton)`
  width: 100%;
  line-height: 2.4;
  text-transform: uppercase;
`;

export default function RegisterForm() {
  const validateScheme = yup.object().shape({
    password: yup
      .string()
      .required("Пароль обязателен для заполнения")
      .matches(
        /(?=.*[A-Z])/,
        "Пароль должен содержать хотя бы одну заглавную букву"
      ),
    email: yup
      .string()
      .required("Электронная почта обязательна для заполнения")
      .email("Email введен некорректно"),
    name: yup
      .string()
      .required("Поле <Имя> обязательно для заполнения")
      .min(3, "Поле <Имя> должно содержать минимум 3 символа"),
  });

  type dataProps = {
    name: string;
    email: string;
    password: string;
  };

  const handleSubmit = (data: dataProps) => {
    console.log("data", data);
  };
  return (
    <StyledPage>
      <Flex justify="center" align="center" direction="column">
        <StyledRegisterForm>
          <StyledTitle2>РЕГИСТРАЦИЯ</StyledTitle2>
          <FormComponent
            onSubmit={handleSubmit}
            validateScheme={validateScheme}
          >
            <TextFiled
              name="name"
              placeholder="Введите имя"
              type="text"
              autoFocus
            />
            <TextFiled placeholder="Введите email" name="email" type="email" />
            <TextFiled
              placeholder="Введите пароль"
              name="password"
              type="password"
            />
            <StyledButtonWithForm>
              <span>
                <i className="fa-solid fa-user-plus"></i>
              </span>
              зарегистрироваться
            </StyledButtonWithForm>
          </FormComponent>
          <StyledLink to="/">ВХОД</StyledLink>
        </StyledRegisterForm>
      </Flex>
    </StyledPage>
  );
}
