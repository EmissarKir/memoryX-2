import { ComponentPropsWithoutRef, ElementType, FC } from "react";
import { IconBaseProps } from "react-icons";
import { SButton } from "./button.styles";

export const buttonPropView = [
  "primary",
  "clear",
  "ghost",
  "secondary",
  "accent",
] as const;
export const buttonPropForm = ["default", "brick", "round"] as const;
export const buttonPropSize = ["xs", "s", "m", "l", "xl"] as const;
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
  iconRight?: FC<IconBaseProps>;
  iconLeft?: FC<IconBaseProps>;
} & ComponentPropsWithoutRef<T>;

function getIconSize(
  mapIconSize: Record<ButtonPropSize, string>,
  size: ButtonPropSize
): string {
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

  const mapIconSize: Record<ButtonPropSize, string> = {
    xs: "14px",
    s: "18px",
    m: "18px",
    l: "20px",
    xl: "20px",
  };

  const iconSize: string = getIconSize(mapIconSize, size);
  return (
    <SButton
      as={renderAs as ElementType}
      $view={view}
      $form={form}
      $width={width}
      $size={size}
      $onlyIcon={IconOnly}
      $iconLeft={IconLeft}
      $iconRight={IconRight}
      {...rest}
    >
      {IconOnly && <IconOnly size={iconSize} />}
      {!onlyIcon && (iconLeft || iconRight) && label ? (
        <>
          {IconLeft && (
            <>
              <IconLeft size={iconSize} />
              <span>{label}</span>
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
    </SButton>
  );
};
export default Button;
