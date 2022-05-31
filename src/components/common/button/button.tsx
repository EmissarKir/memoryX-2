import { ComponentPropsWithoutRef, ElementType, useMemo } from "react";
import * as Styled from "./button.styles";

export const buttonPropView = [
  "primary",
  "clear",
  "ghost",
  "secondary",
  "accent",
] as const;
export const buttonPropForm = ["default", "brick", "round"] as const;
export const buttonPropSize = ["m", "xs", "s", "l", "xl"] as const;
export const buttonPropWidth = ["default", "full"] as const;
export type ButtonPropView = typeof buttonPropView[number];
export type ButtonPropForm = typeof buttonPropForm[number];
export type ButtonPropSize = typeof buttonPropSize[number];
export type ButtonPropWidth = typeof buttonPropWidth[number];

type ButtonProps<T extends ElementType> = {
  renderAs?: T;
  size?: ButtonPropSize;
  width?: ButtonPropWidth;
  label?: string;
  view?: ButtonPropView;
  form?: ButtonPropForm;
  onlyIcon?: boolean;
  iconRight?: any;
  iconLeft?: any;
} & ComponentPropsWithoutRef<T>;

function getIconSize(mapIconSize: any, size: ButtonPropSize): void {
  return mapIconSize[size];
}

const Button = <T extends ElementType = "button">({
  renderAs,
  label,
  view = "primary",
  form = "default",
  size = "m",
  width = "default",
  onlyIcon,
  iconLeft,
  iconRight,

  ...rest
}: ButtonProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>): JSX.Element => {
  const IconOnly = (!label || onlyIcon) && (iconLeft || iconRight);
  const IconLeft = iconLeft;
  const IconRight = iconRight;

  const mapIconSize = {
    xs: "14px",
    s: "18px",
    m: "18px",
    l: "20px",
    xl: "20px",
  };

  const iconSize = useMemo(() => getIconSize(mapIconSize, size), [size]);

  return (
    <Styled.BTN
      as={renderAs as ElementType}
      $view={view}
      $form={form}
      $width={width}
      onlyIcon={IconOnly}
      iconLeft={iconLeft}
      iconRight={iconRight}
      $size={size}
      {...rest}
    >
      {IconOnly && <IconOnly size={iconSize} />}
      {!onlyIcon && (iconLeft || iconRight) && label ? (
        <>
          {iconLeft && (
            <>
              <IconLeft size={iconSize} /> <span>{label}</span>
            </>
          )}
          {IconRight && (
            <>
              <span>{label}</span> <IconRight size={iconSize} />
            </>
          )}
        </>
      ) : (
        label
      )}
    </Styled.BTN>
  );
};
export default Button;
