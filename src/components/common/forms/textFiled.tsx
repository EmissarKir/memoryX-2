import React from "react";
import * as S from "../../../styles/styles";

interface ITextFieldProps {
  label?: string;
  placeholder?: string;
  type: string;
  name: string;
  value: string;
  colorBg?: string;
  color?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
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
}: ITextFieldProps) {
  return (
    <S.StyledTextField colorBg={colorBg} color={color}>
      <div>
        {label ? <label htmlFor={name}>{label}</label> : null}
        <input
          type={type}
          id={name}
          value={value}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
        />
      </div>
    </S.StyledTextField>
  );
}
