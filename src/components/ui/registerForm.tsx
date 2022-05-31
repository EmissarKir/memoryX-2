import React from "react";
import { FaUserPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useAppDispatch } from "../../hooks/redux";
import { signUp } from "../../store/users";
import { IUser } from "../../types/types";
import Button from "../common/button";
import { FormComponent, TextFiled } from "../common/forms";

export default function RegisterForm() {
  const dispatch = useAppDispatch();
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
      <Button
        label="Зарегистрироваться"
        size="xl"
        iconLeft={FaUserPlus}
        width="full"
        type="submit"
      />
    </FormComponent>
  );
}
