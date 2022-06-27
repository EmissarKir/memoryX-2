import React, { useState } from "react";
import {
  SInvalidText,
  SPasswordButton,
  STextField,
} from "../../../styles/styles";

// временно необязательные поля onChange,value,error
interface ITextFieldProps {
  label?: string;
  placeholder?: string;
  type: string;
  name: string;
  value?: string;
  colorBg?: string;
  color?: string;
  error?: string;
  disabled?: boolean;
  margin?: string;
  padding?: string;
  autoFocus?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function TextFiled({
  label,
  placeholder,
  type,
  name,
  onChange,
  value,
  colorBg,
  color,
  error,
  disabled,
  margin,
  padding,
  autoFocus,
}: ITextFieldProps) {
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <STextField
      colorBg={colorBg}
      color={color}
      margin={margin}
      padding={padding}
      disabled={disabled}
    >
      <div>
        {label ? <label htmlFor={name}>{label}</label> : null}
        <input
          type={showPassword ? "text" : type}
          id={name}
          value={value}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          autoFocus={autoFocus}
          disabled={disabled}
        />
        {type === "password" && (
          <SPasswordButton type="button" onClick={toggleShowPassword}>
            <i
              className={"fa-solid fa-eye" + (showPassword ? "-slash" : "")}
            ></i>
          </SPasswordButton>
        )}
        {error && <SInvalidText>{error}</SInvalidText>}
      </div>
    </STextField>
  );
}
