import * as yup from "yup";

export const validateSchemeCreateTaskPage = yup.object().shape({
  answer: yup
    .string()
    .required("Поле обязательно для заполнения")
    .min(3, "Поле должно содержать минимум 3 символа"),
  question: yup
    .string()
    .required("Поле обязательно для заполнения")
    .min(3, "Поле должно содержать минимум 3 символа"),
});
export const validateSchemeCreateTestPage = yup.object().shape({
  name: yup
    .string()
    .required("Поле обязательно для заполнения")
    .min(3, "Поле должно содержать минимум 3 символа"),
});
export const validateSchemeEditTaskPage = yup.object().shape({
  answer: yup
    .string()
    .required("Поле обязательно для заполнения")
    .min(3, "Поле должно содержать минимум 3 символа"),
  question: yup
    .string()
    .required("Поле обязательно для заполнения")
    .min(3, "Поле должно содержать минимум 3 символа"),
});

export const validateSchemeLoginForm = yup.object().shape({
  email: yup
    .string()
    .required("Электронная почта обязательна для заполнения")
    .email("Email введен некорректно"),
});

export const validateSchemeRegisterForm = yup.object().shape({
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
export const validateSchemeUserPage = yup.object().shape({
  email: yup
    .string()
    .required("Электронная почта обязательна для заполнения")
    .email("Email введен некорректно"),
  name: yup
    .string()
    .required("Поле <Имя> обязательно для заполнения")
    .min(3, "Поле <Имя> должно содержать минимум 3 символа"),
  maxCountRepeat: yup
    .number()
    .required("Введите число")
    .min(1, "Поле должно содержать минимум 1 число")
    .max(20, "Число должно быть меньше 20")
    .positive("Должно быть положительное число")
    .integer("Должно быть целое число"),
});
