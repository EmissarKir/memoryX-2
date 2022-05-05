import { NavLink } from "react-router-dom";
import styled from "styled-components";

type PropsStyled = {
  colorBg?: string;
  color?: string;
};

export const StyledPage = styled.div`
  width: 100%;
  height: calc(100% - ${({ theme }) => theme.heigthUserPanel});
`;

export const StyledTextField = styled.div<PropsStyled>`
  width: 100%;
  & input {
    width: 100%;
    outline: none;
    border: none;
    background: ${(props) => props.colorBg || props.theme.colors.defaultLigth};
    padding: 8px 15px;
    border-radius: 5px;
    color: ${(props) => props.color || props.theme.colors.textDark};
    font-size: 16px;
    line-height: 1.5;
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
export const StyledLink = styled.div`
  display: flex;
  justify-content: center;
  white-space: nowrap;
  align-items: center;
  padding: 15px 30px;
  background: ${({ theme }) => theme.colors.accentDark};
  border-radius: 24px;
  color: ${({ theme }) => theme.colors.primaryLigth};
`;

// export const StyledNavLink = styled(NavLink)`
//   display: flex;
//   justify-content: center;
//   white-space: nowrap;
//   align-items: center;
//   margin: 1em;
//   padding: 15px 30px;
//   background: ${({ theme }) => theme.colors.accentDark};
//   border-radius: 24px;
//   color: ${({ theme }) => theme.colors.primaryLigth};
//   span {
//     margin-right: 10px;
//   }
// `;
export const StyledNavLinkWithIcon = styled(NavLink)`
  display: flex;
  justify-content: center;
  white-space: nowrap;
  align-items: center;
  margin: 1em;
  padding: 15px 30px;
  background: ${({ theme }) => theme.colors.accentDark};
  border-radius: 24px;
  color: ${({ theme }) => theme.colors.primaryLigth};
  span {
    margin-right: 10px;
  }
`;
/* &.${(props) => props.activeClassName} {
    color: red;
  } */
export const StyledText = styled.p<{ align?: string }>`
  font-size: 1.15em;
  color: ${({ theme }) => theme.colors.textDark};
  text-align: ${({ align = "left" }) => align};
  line-height: 1.2;
`;
export const StyledTextMuted = styled(StyledText)`
  color: ${({ theme }) => theme.colors.defaultDark};
`;
