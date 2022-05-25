import React from "react";
import { StyledSelectField } from "../../../styles/styles";
interface ISelectFieldProps {
  defaultOption: string;
  options: any[];
  label?: string;
  placeholder?: string;
  name: string;
  value?: string;
  colorBg?: string;
  color?: string;
  error?: string;
  margin?: string;
  padding?: string;
  autoFocus?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}
const SelectField = ({
  defaultOption,
  options,
  label,
  placeholder,
  name,
  onChange,
  value,
  colorBg,
  color,
  error,
  margin,
  padding,
  autoFocus,
}: ISelectFieldProps) => {
  return (
    <div>
      <StyledSelectField>
        <div>
          {/* {label ? <label htmlFor={name}>{label}</label> : null} */}
          <select
            id={name}
            value={value}
            name={name}
            placeholder={placeholder}
            onChange={onChange}
          >
            <option disabled value="">
              {defaultOption}
            </option>
            {options &&
              options.map((optionName) => {
                return (
                  <option value={optionName.value} key={optionName.value}>
                    {optionName.label}
                  </option>
                );
              })}
          </select>
        </div>
      </StyledSelectField>
    </div>
  );
};

export default SelectField;
