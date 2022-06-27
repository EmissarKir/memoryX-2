import React, { ElementType } from "react";
import { SText } from "./text.styles";

export const textPropAlign = ["left", "center", "right"] as const;
export type TextPropAlign = typeof textPropAlign[number];
export const textPropView = ["primary", "secondary", "accent"] as const;
export type TextPropView = typeof textPropView[number];
export const textPropWeight = ["regular", "bold", "thin"] as const;
export type TextPropWeight = typeof textPropWeight[number];
export const textPropSize = ["xs", "s", "m", "l", "2l", "3l", "4l"] as const;
export type TextPropSize = typeof textPropSize[number];

type TextProps<T extends ElementType> = {
  children: React.ReactNode | string;
  renderAs?: T;
  align?: TextPropAlign;
  view?: TextPropView;
  weight?: TextPropWeight;
  size?: TextPropSize;
  marginBottom?: string;
};

const Text = <T extends ElementType = "div">({
  children,
  renderAs,
  align,
  view,
  weight,
  size,
  marginBottom,
}: TextProps<T>) => {
  return (
    <SText
      as={renderAs as ElementType}
      $align={align}
      $view={view}
      $weight={weight}
      $size={size}
      $marginBottom={marginBottom}
    >
      {children}
    </SText>
  );
};

export default Text;
