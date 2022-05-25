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

type PropsWithChild = {
  children?: React.ReactNode;
  validateScheme: any;
  onSubmit: any;
  name: string;
};

type Props = {
  children?: React.ReactNode;
  validateScheme: any;
  onSubmit: any;
  defaultData?: any;
};

const FormComponent: FC<Props> = ({
  children,
  validateScheme,
  onSubmit,
  defaultData,
}) => {
  const [data, setData] = useState<{ [key: string]: any }>(defaultData || {});

  const [errors, setErrors] = useState<{ [key: string]: any }>({});
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
        config = {
          ...item.props,
          onChange: handleChange,
          value: data[item.props.name] || "",
          error: errors[item.props.name],
        };
      }
      if (typeof item.type === "object") {
        config = { ...item.props, disabled: !isValidButton };
      }
      return React.cloneElement(item, config);
    }
  );
  return <form onSubmit={handleSubmit}>{clonedElements}</form>;
};

export default FormComponent;
