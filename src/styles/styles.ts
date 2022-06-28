import styled from "styled-components";

type PropsStyled = {
  colorBg?: string;
  color?: string;
  margin?: string;
  padding?: string;
  lh?: string;
  disabled?: boolean;
};

// 1px толщина border-bottom
export const SContainer = styled.div`
  padding: 0 30px;
  width: 100%;
  height: calc(100% - ${({ theme }) => theme.heigthUserPanel} - 1px);
  @media ${({ theme }) => theme.media.small} {
    padding: 0 5px;
  }
`;
export const SContent = styled.div`
  margin: 0 auto;
  width: 500px;

  & > *:not(:last-child) {
    margin-bottom: 30px;
  }

  @media ${({ theme }) => theme.media.large} {
    width: 100%;
    padding: 0px 20px;
  }
`;

// margin/padding значения по умолчанию - для корректного вывода error message
export const STextField = styled.div<PropsStyled>`
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

    &:focus {
      outline: ${({ theme }) => `1px solid ${theme.colors.accentDark}`};
    }
    &:disabled,
    :read-only {
      opacity: 0.5;
      outline: none;
    }
  }
`;

export const SSelectField = styled.div<PropsStyled>`
  position: relative;
  width: 100%;
  margin: ${({ margin = "0 0 10px 0" }) => margin};
  padding: ${({ padding = "0 0 20px 0" }) => padding};
  & select {
    width: 100%;
    outline: none;
    border: none;
    font-family: inherit;
    background: ${(props) => props.colorBg || props.theme.colors.defaultLigth};
    padding: 8px 15px;
    border-radius: 5px;
    color: ${(props) => props.color || props.theme.colors.textDark};
    font-size: 1.15rem;
    line-height: ${(props) => props.lh || "2.4"};
    font-weight: 300;
    &:focus {
      outline: ${({ theme }) => `1px solid ${theme.colors.accentDark}`};
    }
  }
`;
export const STextareaField = styled.div<PropsStyled>`
  position: relative;
  width: 100%;
  margin: ${({ margin = "0 0 10px 0" }) => margin};
  padding: ${({ padding = "0 0 20px 0" }) => padding};
  & textarea {
    width: 100%;
    outline: none;
    border: none;
    font-family: inherit;
    background: ${(props) => props.colorBg || props.theme.colors.defaultLigth};
    padding: 8px 15px;
    border-radius: 5px;
    color: ${(props) => props.color || props.theme.colors.textDark};
    font-size: 1.15rem;
    line-height: ${(props) => props.lh || "2.4"};
    font-weight: 300;
    resize: none;
    &:focus {
      outline: ${({ theme }) => `1px solid ${theme.colors.accentDark}`};
    }
  }
`;
// Грабли...
export const SPasswordButton = styled.button`
  position: absolute;
  top: 17px;
  right: 15px;
  font-size: 22px;
  color: ${({ theme }) => theme.colors.defaultDark};
`;

export const SInvalidText = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  font-size: 0.875em;
  color: ${({ theme }) => theme.colors.bgDanger};
`;

export const SAvatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 0 0 10px;
  color: ${({ theme }) => theme.colors.defaultLigth};
  background: linear-gradient(rgba(255, 255, 255, 0.24), rgba(255, 255, 255, 0)),
    linear-gradient(#55acee, #55acee);
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export const SUserPanel = styled.div`
  padding: 0 20px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.defaultLigth};
`;

export const SUserPanelContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: ${({ theme }) => theme.heigthUserPanel}; ;
`;
export const SGreeting = styled.div`
  margin: 0 0 0 15px;
  @media ${({ theme }) => theme.media.small} {
    display: none;
  }
`;
export const SCreateTestPage = styled.div`
  width: 600px;
  @media ${({ theme }) => theme.media.medium} {
    width: 100%;
  }
`;
