import styled, { css } from "styled-components";
import {
  ButtonPropForm,
  ButtonPropSize,
  ButtonPropView,
  ButtonPropWidth,
} from "./button";

interface IStyledButtonProps {
  $view?: ButtonPropView;
  $form?: ButtonPropForm;
  $size?: ButtonPropSize;
  $width?: ButtonPropWidth;
  onlyIcon?: boolean;
  iconRight?: boolean;
  iconLeft?: boolean;
}

const viewPrimary = css`
  color: ${({ theme }) => theme.controlTypoPrimary};
  background: ${({ theme }) => theme.controlTypoBgPrimary};
`;
const viewClear = css`
  color: ${({ theme }) => theme.controlTypoClear};
`;
const viewGhost = css`
  color: ${({ theme }) => theme.controlTypoGhost};
  background: ${({ theme }) => theme.controlTypoBgGhost};
`;
const viewSecondary = css`
  color: ${({ theme }) => theme.controlTypoSecondary};
  border: 1px solid ${({ theme }) => theme.controlTypoSecondary};
`;
const viewAccent = css`
  color: ${({ theme }) => theme.controlTypoAccent};
  background: ${({ theme }) => theme.controlTypoBgAccent};
`;

const positionOnlyIcon = css`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: ${({ theme }) => theme.buttons.buttonHeigth};
  padding: 0;
`;
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
const positionDefault = css`
  display: inline-block;
`;

const formBrick = css`
  border-radius: 0;
`;
const formRound = css`
  border-radius: 99rem;
`;
const sizeXS = css`
  ${({ theme }) => (
    (theme.buttons.buttonHeigth = theme.controlHeightXS),
    (theme.buttons.buttonFontSize = theme.controlTextSizeXS),
    (theme.buttons.buttonSpace = theme.controlSpaceXS)
  )}
`;
const sizeM = css`
  ${({ theme }) => (
    (theme.buttons.buttonHeigth = theme.controlHeightM),
    (theme.buttons.buttonFontSize = theme.controlTextSizeM),
    (theme.buttons.buttonSpace = theme.controlSpaceM)
  )}
`;
const sizeS = css`
  ${({ theme }) => (
    (theme.buttons.buttonHeigth = theme.controlHeightS),
    (theme.buttons.buttonFontSize = theme.controlTextSizeS),
    (theme.buttons.buttonSpace = theme.controlSpaceS)
  )}
`;
const sizeL = css`
  ${({ theme }) => (
    (theme.buttons.buttonHeigth = theme.controlHeightL),
    (theme.buttons.buttonFontSize = theme.controlTextSizeL),
    (theme.buttons.buttonSpace = theme.controlSpaceL)
  )}
`;
const sizeXL = css`
  ${({ theme }) => (
    (theme.buttons.buttonHeigth = theme.controlHeightXL),
    (theme.buttons.buttonFontSize = theme.controlTextSizeXL),
    (theme.buttons.buttonSpace = theme.controlSpaceXL)
  )}
`;

export const BTN = styled.button<IStyledButtonProps>`
  position: relative;
  overflow: hidden;
  display: inline-block;
  max-width: 100%;
  font-size: ${({ theme }) => theme.buttons.buttonFontSize};
  line-height: ${({ theme }) => theme.buttons.buttonHeigth};
  height: ${({ theme }) => theme.buttons.buttonHeigth};
  padding: 0 ${({ theme }) => theme.buttons.buttonSpace};
  background: transparent;
  border: none;
  border-radius: ${({ theme }) => theme.controlRadius};
  font-weight: ${({ theme }) => theme.fontWeightTextRegular};
  white-space: nowrap;
  text-decoration: none;
  text-overflow: ellipsis;
  transition: background-color 0.15s ease, border-color 0.15s ease,
    box-shadow 0.15s ease, color 0.15s ease, fill 0.15s ease;
  cursor: pointer;
  flex-shrink: 0;
  -webkit-appearance: none;
  &:disabled {
    opacity: 0.6;
    pointer-events: none;
  }
  ${({ $view }) => {
    switch ($view) {
      case "primary":
        return viewPrimary;
      case "clear":
        return viewClear;
      case "ghost":
        return viewGhost;
      case "secondary":
        return viewSecondary;
      case "accent":
        return viewAccent;
      default:
        return null;
    }
  }};
  ${({ $form }) => {
    switch ($form) {
      case "brick":
        return formBrick;
      case "round":
        return formRound;
      default:
        return null;
    }
  }};

  ${({ onlyIcon, iconRight, iconLeft }) =>
    onlyIcon
      ? positionOnlyIcon
      : iconRight
      ? positionIconRight
      : iconLeft
      ? positionIconLeft
      : positionDefault};
  ${({ $size }) => {
    switch ($size) {
      case "xs":
        return sizeXS;
      case "s":
        return sizeS;
      case "m":
        return sizeM;
      case "l":
        return sizeL;
      case "xl":
        return sizeXL;
      default:
        return null;
    }
  }};
  ${({ $width }) => {
    switch ($width) {
      case "full":
        return css`
          width: 100%;
          display: inline-flex;
          justify-content: center;
          align-items: center;
        `;
      default:
        return null;
    }
  }};
`;
