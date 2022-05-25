import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { getCurrentUserData } from "../../store/users";
import { StyledTextMuted, StyledTitle1 } from "../../styles/styles";
import unAuthorizedUserImage from "../../assets/img/unauthorized-ser.jpg";
import { getTimesOfDay } from "../../utils";

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
  const userData = useSelector(getCurrentUserData());
  const currentTimesOfDay = getTimesOfDay(Date.now());
  const userName = userData ? userData.name : "Незнакомец";
  const userImage = userData ? userData.image : unAuthorizedUserImage;

  return (
    <StyledUserPanel>
      <div>
        <StyledTitle1>Добро пожаловать</StyledTitle1>
        <StyledTextMuted>
          Привет {userName}, {currentTimesOfDay}!
        </StyledTextMuted>
      </div>
      <div className="content">
        <button>
          <i className="icons fa-solid fa-gear"></i>
        </button>
        <span>
          <img src={userImage} alt="user-image" />
        </span>
      </div>
    </StyledUserPanel>
  );
}
