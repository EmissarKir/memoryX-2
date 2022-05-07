import React from "react";
import * as S from "../../../styles/styles";

// временно необязательные поля onChange
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
          type={type}
          id={name}
          value={value}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          autoFocus
        />
        {error && <S.InvalidText>{error}</S.InvalidText>}
      </div>
    </S.StyledTextField>
  );
}
