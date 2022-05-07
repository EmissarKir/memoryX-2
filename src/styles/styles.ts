import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";

type PropsStyled = {
  colorBg?: string;
  color?: string;
  margin?: string;
  padding?: string;
};

export const StyledPage = styled.div`
  width: 100%;
  height: calc(100% - ${({ theme }) => theme.heigthUserPanel});
`;
// margin/padding значения по умолчанию - для корректного вывода error message
export const StyledTextField = styled.div<PropsStyled>`
  position: relative;
  width: 100%;
  margin: ${({ margin = "0 0 10px 0" }) => margin};
  padding: ${({ padding = "0 0 20px 0" }) => padding};
  & input {
    width: 100%;
    outline: none;
    border: none;
    font-family: inherit;
    background: ${(props) => props.colorBg || props.theme.colors.defaultLigth};
    padding: 8px 15px;
    border-radius: 5px;
    color: ${(props) => props.color || props.theme.colors.textDark};
    font-size: 1.15rem;
    line-height: 2.4;
    font-weight: 300;

    &:focus::placeholder {
      font-size: 0;
    }
  }
`;

export const StyledTitle1 = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: 2px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.textDark};
`;
export const StyledTitle2 = styled.h2`
  font-size: 1.2rem;
  font-weight: 700;
  letter-spacing: 2px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.textDark};
`;
export const StyledLink = styled(NavLink)<{
  margin?: string;
  align?: string;
}>`
  display: inline-block;
  text-decoration: underline;
  color: ${({ theme }) => theme.colors.accentDark};
  margin: ${({ margin = "0" }) => margin};
  text-align: ${({ align = "left" }) => align};
`;
const buttonStyles = css`
  display: flex;
  justify-content: center;
  white-space: nowrap;
  align-items: center;
  font-family: inherit;
  padding: 15px 30px;
  font-size: 1.15rem;
  background: ${({ theme }) => theme.colors.accentDark};
  border-radius: 24px;
  color: ${({ theme }) => theme.colors.primaryLigth};
  cursor: pointer;
  span {
    margin-right: 10px;
  }
`;

export const StyledButton = styled.button`
  &:disabled {
    opacity: 0.6;
    pointer-events: none;
  }
  ${buttonStyles};
`;

export const StyledNavLinkWithIcon = styled(NavLink)`
  ${buttonStyles}
`;
export const StyledText = styled.p<{ align?: string }>`
  font-size: 1.15em;
  color: ${({ theme }) => theme.colors.textDark};
  text-align: ${({ align = "left" }) => align};
  line-height: 1.2;
`;
export const StyledTextMuted = styled(StyledText)`
  color: ${({ theme }) => theme.colors.defaultDark};
`;
export const InvalidText = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  font-size: 0.875em;
  color: #dc3545;
`;
