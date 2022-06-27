import styled, { css } from "styled-components";
import { StyledVariants } from "../../../types/types";
import {
  ButtonPropForm,
  ButtonPropSize,
  ButtonPropView,
  ButtonPropWidth,
} from "./button";

interface IStyledButtonProps {
  $view: ButtonPropView;
  $form: ButtonPropForm;
  $size: ButtonPropSize;
  $width: ButtonPropWidth;
  $onlyIcon?: boolean;
  $iconRight?: boolean;
  $iconLeft?: boolean;
}

const View: StyledVariants<ButtonPropView> = {
  primary: css`
    color: ${({ theme }) => theme.controlTypoPrimary};
    background: ${({ theme }) => theme.controlTypoBgPrimary};

    &:hover {
      background: #b4814d;
    }
  `,
  clear: css`
    color: ${({ theme }) => theme.controlTypoClear};
  `,
  ghost: css`
    color: ${({ theme }) => theme.controlTypoGhost};
    background: ${({ theme }) => theme.controlTypoBgGhost};
    &:hover {
      color: ${({ theme }) => theme.controlTypoAccent};
      background: ${({ theme }) => theme.controlTypoBgAccent};
    }
  `,
  secondary: css`
    color: ${({ theme }) => theme.controlTypoSecondary};
    border: 1px solid ${({ theme }) => theme.controlTypoSecondary};
    &:hover {
      color: ${({ theme }) => theme.controlTypoPrimary};
      background: ${({ theme }) => theme.controlTypoBgPrimary};
    }
  `,
  accent: css`
    color: ${({ theme }) => theme.controlTypoAccent};
    background: ${({ theme }) => theme.controlTypoBgAccent};
    &:hover {
      background: #516581;
    }
  `,
};
const Form: StyledVariants<ButtonPropForm> = {
  default: css``,
  brick: css`
    border-radius: 0;
  `,
  round: css`
    border-radius: 99rem;
  `,
};

const Width: StyledVariants<ButtonPropWidth> = {
  default: css`
    width: auto;
  `,
  full: css`
    width: 100%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
  `,
};

const Size: StyledVariants<ButtonPropSize> = {
  m: css`
    font-size: ${({ theme }) => theme.controlTextSizeM};
    line-height: ${({ theme }) => theme.controlHeightM};
    height: ${({ theme }) => theme.controlHeightM};
    padding: 0 ${({ theme }) => theme.controlSpaceM};
  `,
  xs: css`
    font-size: ${({ theme }) => theme.controlTextSizeXS};
    line-height: ${({ theme }) => theme.controlHeightXS};
    height: ${({ theme }) => theme.controlHeightXS};
    padding: 0 ${({ theme }) => theme.controlSpaceXS};
  `,
  s: css`
    font-size: ${({ theme }) => theme.controlTextSizeS};
    line-height: ${({ theme }) => theme.controlHeightS};
    height: ${({ theme }) => theme.controlHeightS};
    padding: 0 ${({ theme }) => theme.controlSpaceS};
  `,
  l: css`
    font-size: ${({ theme }) => theme.controlTextSizeL};
    line-height: ${({ theme }) => theme.controlHeightL};
    height: ${({ theme }) => theme.controlHeightL};
    padding: 0 ${({ theme }) => theme.controlSpaceL};
  `,
  xl: css`
    font-size: ${({ theme }) => theme.controlTextSizeXL};
    line-height: ${({ theme }) => theme.controlHeightXL};
    height: ${({ theme }) => theme.controlHeightXL};
    padding: 0 ${({ theme }) => theme.controlSpaceXL};
  `,
};
// в зависимости от размера кнопки (при условии отображения только иконки), устанавливается ширина кнопки равная высоте кнопке
const RoundIcon: StyledVariants<ButtonPropSize> = {
  m: css`
    ${({ theme }) => theme.controlHeightM};
  `,
  xs: css`
    ${({ theme }) => theme.controlHeightXS};
  `,
  s: css`
    ${({ theme }) => theme.controlHeightS};
  `,
  l: css`
    ${({ theme }) => theme.controlHeightL};
  `,
  xl: css`
    ${({ theme }) => theme.controlHeightXL};
  `,
};

const positionIconRight = css`
  display: inline-flex;
  align-items: center;
  & span {
    margin-right: ${({ theme }) => theme.iconIndent};
  }
`;
const positionIconLeft = css`
  display: inline-flex;
  align-items: center;
  & span {
    margin-left: ${({ theme }) => theme.iconIndent};
  }
`;
export const SButton = styled.button<IStyledButtonProps>`
  position: relative;
  overflow: hidden;
  display: inline-block;
  max-width: 100%;
  background: transparent;
  border: none;
  border-radius: ${({ theme }) => theme.controlRadius};
  font-weight: ${({ theme }) => theme.fontWeightTextRegular};
  white-space: nowrap;
  text-decoration: none;
  text-overflow: ellipsis;
  transition: color 0.35s cubic-bezier(0.3, 0.1, 0.3, 1),
    background-color 0.35s cubic-bezier(0.3, 0.1, 0.3, 1);
  cursor: pointer;
  flex-shrink: 0;
  -webkit-appearance: none;
  &:disabled {
    opacity: 0.6;
    pointer-events: none;
  }

  ${({ $view }) => View[$view]};
  ${({ $form }) => Form[$form]};
  ${({ $size }) => Size[$size]};
  ${({ $width }) => Width[$width]}
  ${({ $onlyIcon, $size }) =>
    $onlyIcon &&
    css`
      display: inline-flex;
      justify-content: center;
      align-items: center;
      padding: 0;
      width: ${RoundIcon[$size]};
    `}
    ${({ $iconRight }) => $iconRight && positionIconRight}
    ${({ $iconLeft }) => $iconLeft && positionIconLeft}
`;
