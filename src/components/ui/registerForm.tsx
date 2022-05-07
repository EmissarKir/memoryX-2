import React, { ChangeEvent, useEffect, useState } from "react";
import * as yup from "yup";
import styled from "styled-components";
import {
  StyledButton,
  StyledLink,
  StyledPage,
  StyledTitle2,
} from "../../styles/styles";
import TextFiled from "../common/forms/textFiled";
import Flex from "../styles/flex";

type Props = {};

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

interface IUser {
  name: string;
  email: string;
  password: string;
}
export default function RegisterForm({}: Props) {
  const [data, setData] = useState<IUser>({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: any }>({});

  const changeHandler = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };

  useEffect(() => {
    validate();
  }, [data]);
  const validate = () => {
    validateScheme
      .validate(data)
      .then(() => setErrors({}))
      .catch((err) => setErrors({ [err.path]: err.message }));
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

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

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    console.log("SUBMIT", data);

    setData({
      name: "",
      email: "",
      password: "",
    });
  };
  return (
    <StyledPage>
      <Flex justify="center" align="center" direction="column">
        <StyledRegisterForm>
          <StyledTitle2>РЕГИСТРАЦИЯ</StyledTitle2>
          <form onSubmit={handleSubmit}>
            <TextFiled
              name="name"
              placeholder="Введите имя"
              type="text"
              value={data.name}
              onChange={changeHandler}
              error={errors.name}
              autoFocus
            />
            <TextFiled
              placeholder="Введите email"
              name="email"
              type="email"
              value={data.email}
              onChange={changeHandler}
              error={errors.email}
            />
            <TextFiled
              placeholder="Введите пароль"
              name="password"
              type="password"
              value={data.password}
              onChange={changeHandler}
              error={errors.password}
            />
            <StyledButtonWithForm>
              <span>
                <i className="fa-solid fa-user-plus"></i>
              </span>
              зарегистрироваться
            </StyledButtonWithForm>
          </form>
          <StyledLink to="/">ВХОД</StyledLink>
        </StyledRegisterForm>
      </Flex>
    </StyledPage>
  );
}
