import { FC } from "react";
import { FaSave } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../components/common/button";

import { FormComponent, TextFiled } from "../components/common/forms";
import Text from "../components/common/text";
import Flex from "../components/stylesComp/flex";
import { useAppDispatch } from "../hooks/redux";
import { editProfile, getCurrentUserData } from "../store/users";
import { IUserServer } from "../types/types";
import { validateSchemeUserPage } from "../validateScheme";

const SUserPage = styled.div`
  width: 450px;
  @media ${({ theme }) => theme.media.small} {
    width: 100%;
    margin-left: 20px;
  }
`;

const UserPage: FC = () => {
  const dispatch = useAppDispatch();
  const userData = useSelector(getCurrentUserData());

  const handleSubmit = (data: IUserServer) => {
    dispatch(editProfile(data));
  };

  return (
    <Flex align="center" justify="center" height="100%">
      <SUserPage>
        <Text align="center" size="2l" view="accent" weight="bold">
          Редактирование профиля
        </Text>
        <FormComponent
          onSubmit={handleSubmit}
          validateScheme={validateSchemeUserPage}
          defaultData={userData}
        >
          <TextFiled
            name="name"
            placeholder="Введите имя"
            type="text"
            autoFocus
          />
          <TextFiled
            placeholder="Введите email"
            name="email"
            type="email"
            readonly
          />
          <TextFiled
            placeholder="Количество повторений"
            name="maxCountRepeat"
            type="number"
          />
          <TextFiled
            placeholder="Вставьте URL картинки"
            name="image"
            type="text"
          />
          <Button
            label="Сохранить"
            iconLeft={FaSave}
            width="full"
            type="submit"
            size="xl"
          />
        </FormComponent>
        <Button
          renderAs={Link}
          to="/"
          label="Вернуться"
          width="full"
          size="xl"
          view="clear"
        />
      </SUserPage>
    </Flex>
  );
};

export default UserPage;
