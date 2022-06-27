import React, {
  ChangeEvent,
  FC,
  PropsWithChildren,
  ReactElement,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from "react";
import { useSelector } from "react-redux";
import { getErrors } from "../../../store/users";

interface PropsWithChild {
  children?: React.ReactNode;
  validateScheme: any;
  onSubmit: any;
  name: string;
}

interface FormComponentProps {
  children?: React.ReactNode;
  validateScheme: any;
  onSubmit: (data: any) => void;
  defaultData?: any;
}

export const FormComponent: FC<FormComponentProps> = ({
  children,
  validateScheme,
  onSubmit,
  defaultData,
}) => {
  const [data, setData] = useState<{ [key: string]: string }>(
    defaultData || {}
  );
  const [errors, setErrors] = useState<{ [key: string]: any }>({});

  const isError = useSelector(getErrors());

  useEffect(() => {
    if (isError) {
      setErrors(isError);
    }
  }, [isError]);

  const handleChange = useCallback(
    ({ target }: ChangeEvent<HTMLInputElement>) => {
      setData((prevState) => ({
        ...prevState,
        [target.name]: target.value,
      }));
    },
    []
  );
  // функция устанавливает ошибки в error state и возвращает true если нет ошибок. Предотвращает отправку формы если есть ошибки
  const validate = () => {
    validateScheme
      .validate(data)
      .then(() => setErrors({}))
      .catch((err: any) => setErrors({ [err.path]: err.message }));
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const isValid = validate();
    if (!isValid) return;
    onSubmit(data);
  };
  useEffect(() => {
    validate();
  }, [data]);

  // disabled кнопки
  const isValidButton = Object.keys(errors).length === 0;

  const clonedElements = React.Children.map<ReactNode, ReactNode>(
    children,
    (child) => {
      const item = child as ReactElement<PropsWithChildren<PropsWithChild>>;
      let config = {};
      if (typeof item.type === "function") {
        if (item.type.name === "Button") {
          config = { ...item.props, disabled: !isValidButton };
        } else {
          config = {
            ...item.props,
            onChange: handleChange,
            value: data[item.props.name] || "",
            error: errors[item.props.name],
          };
        }
      }

      return React.cloneElement(item, config);
    }
  );
  return <form onSubmit={handleSubmit}>{clonedElements}</form>;
};
