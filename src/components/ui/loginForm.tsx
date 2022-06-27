import { FC } from "react";
import { IUserLogIn } from "../../types/types";
import { useAppDispatch } from "../../hooks/redux";
import Button from "../common/button";
import { FaSignInAlt } from "react-icons/fa";
import { FormComponent, TextFiled } from "../common/forms";
import { login } from "../../store/users";
import { validateSchemeLoginForm } from "../../validateScheme";

const LoginForm: FC = () => {
  const dispatch = useAppDispatch();

  const handleSubmit = (data: IUserLogIn) => {
    dispatch(login(data));
  };
  return (
    <FormComponent
      onSubmit={handleSubmit}
      validateScheme={validateSchemeLoginForm}
    >
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
        iconLeft={FaSignInAlt}
        width="full"
        size="xl"
      />
    </FormComponent>
  );
};
export default LoginForm;
