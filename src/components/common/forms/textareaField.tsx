import React from "react";
import { InvalidText, StyledTextareaField } from "../../../styles/styles";

interface TextAreaFieldProps {
  label?: string;
  name: string;
  value?: string;
  error?: string;
  rows?: number;
  placeholder?: string;
  autoFocus?: boolean;
  lh?: string;
  onChange?: (event: React.ChangeEvent) => void;
}

const TextAreaField = ({
  label,
  name,
  value,
  error,
  rows,
  placeholder,
  autoFocus,
  lh,
  onChange,
}: TextAreaFieldProps) => {
  return (
    <StyledTextareaField lh={lh}>
      <div>
        <label htmlFor={name}> {label}</label>
        <div>
          <textarea
            id={name}
            name={name}
            value={value}
            rows={rows}
            onChange={onChange}
            placeholder={placeholder}
            autoFocus={autoFocus}
          />
          {error && <InvalidText>{error}</InvalidText>}
        </div>
      </div>
    </StyledTextareaField>
  );
};

export default TextAreaField;
