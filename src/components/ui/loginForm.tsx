import React from "react";
import * as yup from "yup";
import { IUserLogIn } from "../../types/types";
import { login } from "../../store/users";
import { useAppDispatch } from "../../hooks/redux";
import Button from "../common/button";
import { FaSignInAlt } from "react-icons/fa";
import { FormComponent, TextFiled } from "../common/forms";

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
      <Button
        type="submit"
        label="Войти"
        size="xl"
        iconLeft={FaSignInAlt}
        width="full"
      />
    </FormComponent>
  );
}
