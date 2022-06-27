import { FC } from "react";
import Text from "../common/text";

const GreetingMessage: FC = () => {
  return (
    <>
      <Text weight="bold" view="secondary" size="l">
        Привет! Это небольшое приложение для тренировки памяти MemoryX
      </Text>
      <Text align="center">
        Подготовка к собеседованию, изучение иностранного языка? Легко!
      </Text>
      <Text>
        Что ты можешь здесь сделать:
        <ul>
          <li>
            <Text marginBottom="0">
              - создавать свои сборники вопросов с ответами
            </Text>
          </li>
          <li>
            <Text marginBottom="0">
              - добавлять / редактировать / удалять вопросы в своих сборниках
            </Text>
          </li>
          <li>
            <Text>- в режиме "Тест" сможешь оценить свои знания</Text>
          </li>
        </ul>
      </Text>
      <Text view="secondary">
        * Для оценки всех возможностей приложения зарегистрируйтесь или
        авторизуйтесь с помощью тестового логина и пароля , указанных ниже
      </Text>
      <Text view="secondary" marginBottom="0">
        Логин: test@mail.ru
      </Text>
      <Text view="secondary">Пароль: Test123456</Text>
    </>
  );
};

export default GreetingMessage;
