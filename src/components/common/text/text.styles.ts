import { ElementType } from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import { StyledVariants } from "../../../types/types";
import {
  TextPropAlign,
  TextPropSize,
  TextPropView,
  TextPropWeight,
} from "./text";

interface IStyledTextProps {
  $align?: TextPropAlign;
  $view?: TextPropView;
  $weight?: TextPropWeight;
  $size?: TextPropSize;
  $marginBottom?: string;
  as: ElementType;
}
const Align: StyledVariants<TextPropAlign> = {
  left: css`
    text-align: left;
  `,
  center: css`
    text-align: center;
  `,
  right: css`
    text-align: right;
  `,
};
const View: StyledVariants<TextPropView> = {
  primary: css`
    color: ${({ theme }) => theme.fontColorPrimary};
  `,
  secondary: css`
    color: ${({ theme }) => theme.fontColorSecondary};
  `,
  accent: css`
    color: ${({ theme }) => theme.fontColorAccent};
  `,
};
const Weight: StyledVariants<TextPropWeight> = {
  regular: css`
    font-weight: 400;
  `,
  bold: css`
    font-weight: 700;
  `,
  thin: css`
    font-weight: 100;
  `,
};
const getSize = (
  fontSize: number,
  lineHeight: number
): FlattenSimpleInterpolation => css`
  font-size: ${fontSize}px;
  line-height: ${lineHeight}em;
`;
const Size: StyledVariants<TextPropSize> = {
  m: getSize(16, 1.5),
  xs: getSize(12, 1.2),
  s: getSize(14, 1.4),
  l: getSize(18, 1.6),
  "2l": getSize(24, 1.6),
  "3l": getSize(36, 1.6),
  "4l": getSize(48, 1.6),
};
export const SText = styled.div<IStyledTextProps>`
  display: ${({ as }) => (as === "span" ? "inline" : "block")};
  text-overflow: ellipsis;
  overflow-x: hidden;
  line-height: 1.5;
  margin-top: 0;
  margin-bottom: ${({ $marginBottom = "1em" }) => $marginBottom};
  padding: 0 5px;
  ${({ $align = "left" }) => Align[$align]};
  ${({ $view = "primary" }) => View[$view]};
  ${({ $weight = "regular" }) => Weight[$weight]};
  ${({ $size = "m" }) => Size[$size]};
`;
