import React, { useState } from "react";
import * as S from "../../../styles/styles";

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
  margin?: string;
  padding?: string;
  autoFocus?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function TextFiled({
  label,
  placeholder,
  type,
  name,
  onChange,
  value,
  colorBg,
  color,
  error,
  margin,
  padding,
  autoFocus,
}: ITextFieldProps) {
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <S.StyledTextField
      colorBg={colorBg}
      color={color}
      margin={margin}
      padding={padding}
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
        />
        {type === "password" && (
          <S.StyledPasswordButton type="button" onClick={toggleShowPassword}>
            <i
              className={"fa-solid fa-eye" + (showPassword ? "-slash" : "")}
            ></i>
          </S.StyledPasswordButton>
        )}
        {error && <S.InvalidText>{error}</S.InvalidText>}
      </div>
    </S.StyledTextField>
  );
}
