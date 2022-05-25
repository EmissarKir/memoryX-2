import React from "react";
import * as yup from "yup";
import styled from "styled-components";
import { StyledButton } from "../../styles/styles";
import TextFiled from "../common/forms/textFiled";
import FormComponent from "../common/forms/form";
import { IUserLogIn } from "../../types/types";
import { login } from "../../store/users";
import { useAppDispatch } from "../../hooks/redux";

const StyledButtonWithForm = styled(StyledButton)`
  width: 100%;
  line-height: 2.4;
  text-transform: uppercase;
`;

export default function LoginForm() {
  const dispatch = useAppDispatch();

  const validateScheme = yup.object().shape({
    email: yup
      .string()
      .required("Электронная почта обязательна для заполнения")
      .email("Email введен некорректно"),
  });

  const handleSubmit = (data: IUserLogIn) => {
    dispatch(login(data));
  };
  return (
    <FormComponent onSubmit={handleSubmit} validateScheme={validateScheme}>
      <TextFiled
        placeholder="Введите email"
        name="email"
        type="email"
        autoFocus
      />
      <TextFiled placeholder="Введите пароль" name="password" type="password" />
      <StyledButtonWithForm type="submit">
        <span>
          <i className="fa-solid fa-arrow-right-to-bracket"></i>
        </span>
        ВОЙТИ
      </StyledButtonWithForm>
    </FormComponent>
  );
}
