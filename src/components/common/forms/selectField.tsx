import React from "react";
import { SSelectField } from "../../../styles/styles";

interface ISelectOptions {
  value: string;
  label: string;
}

interface ISelectFieldProps {
  defaultOption: string;
  options: ISelectOptions[];
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
export const SelectField = ({
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
      <SSelectField>
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
      </SSelectField>
    </div>
  );
};
