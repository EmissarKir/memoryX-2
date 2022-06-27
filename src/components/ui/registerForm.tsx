import { FC } from "react";
import { FaUserPlus } from "react-icons/fa";
import { useAppDispatch } from "../../hooks/redux";
import { signUp } from "../../store/users";
import { IUser } from "../../types/types";
import { validateSchemeRegisterForm } from "../../validateScheme";
import Button from "../common/button";
import { FormComponent, TextFiled } from "../common/forms";

const RegisterForm: FC = () => {
  const dispatch = useAppDispatch();

  const handleSubmit = (data: IUser) => {
    dispatch(signUp(data));
  };
  return (
    <FormComponent
      onSubmit={handleSubmit}
      validateScheme={validateSchemeRegisterForm}
    >
      <TextFiled name="name" placeholder="Введите имя" type="text" autoFocus />
      <TextFiled placeholder="Введите email" name="email" type="email" />
      <TextFiled placeholder="Введите пароль" name="password" type="password" />
      <Button
        label="Зарегистрироваться"
        iconLeft={FaUserPlus}
        width="full"
        type="submit"
        size="xl"
      />
    </FormComponent>
  );
};
export default RegisterForm;
