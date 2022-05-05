import React from "react";
import styled from "styled-components";
import { StyledTextMuted, StyledTitle1 } from "../../styles/styles";

type Props = {};
interface StyledUserPanelProps {}

const StyledUserPanel = styled.div<StyledUserPanelProps>`
  width: 100%;
  height: ${({ theme }) => theme.heigthUserPanel};
  /* background: ${({ theme }) => theme.colors.primary}; */
  border-bottom: 1px solid ${({ theme }) => theme.colors.defaultLigth};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  .content {
    display: flex;
    align-items: center;
    margin-right: 30px;

    button {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 60px;
      height: 60px;
      background: ${({ theme }) => theme.colors.defaultLigth};
      border-radius: 50%;
      overflow: hidden;
      margin-right: 10px;
      cursor: pointer;
    }
    span {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 60px;
      height: 60px;
      background: ${({ theme }) => theme.colors.defaultLigth};
      border-radius: 50%;
      overflow: hidden;
    }
    & .icons {
      color: ${({ theme }) => theme.colors.primary};
      font-size: 1.15em;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

export default function UserPanel({}: Props) {
  const userName = "Mike";
  const timesOfDay = "Доброе Утро";
  const userImage = `https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60`;
  const userImage2 = `https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60`;
  return (
    <StyledUserPanel>
      <div>
        <StyledTitle1>Добро пожаловать</StyledTitle1>
        <StyledTextMuted>
          Привет {userName}, {timesOfDay}!
        </StyledTextMuted>
      </div>
      <div className="content">
        <button>
          <i className="icons fa-solid fa-gear"></i>
        </button>
        <span>
          <img src={userImage2} alt="user-image" />
        </span>
      </div>
    </StyledUserPanel>
  );
}
