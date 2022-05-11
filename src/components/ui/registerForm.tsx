import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import * as yup from "yup";
import { AppDispatch } from "../..";
import { signUp } from "../../store/users";
import { StyledButton } from "../../styles/styles";
import { IUser } from "../../types/types";
import FormComponent from "../common/forms/form";
import TextFiled from "../common/forms/textFiled";

const StyledButtonWithForm = styled(StyledButton)`
  width: 100%;
  line-height: 2.4;
  text-transform: uppercase;
`;

export default function RegisterForm() {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

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

  const handleSubmit = (data: IUser) => {
    dispatch(signUp(data));
    navigate("/");
  };
  return (
    <FormComponent onSubmit={handleSubmit} validateScheme={validateScheme}>
      <TextFiled name="name" placeholder="Введите имя" type="text" autoFocus />
      <TextFiled placeholder="Введите email" name="email" type="email" />
      <TextFiled placeholder="Введите пароль" name="password" type="password" />
      <StyledButtonWithForm>
        <span>
          <i className="fa-solid fa-user-plus"></i>
        </span>
        зарегистрироваться
      </StyledButtonWithForm>
    </FormComponent>
  );
}
