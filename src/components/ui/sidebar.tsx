import React from "react";
import styled from "styled-components";

interface StyledSidebarProps {}

const StyledSidebar = styled.div<StyledSidebarProps>`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  bottom: 0;
  width: 300px;
  background: ${({ theme }) => theme.colors.primary};
  padding: 20px;
  ul {
    margin-top: 150px;
  }
  li {
    width: 100%;
    transition: all 0.3s ease 0s;
    border-radius: 10px;
    &:not(:last-child) {
      margin-bottom: 15px;
    }
    &:hover {
      background-color: ${({ theme }) => theme.colors.primaryLigth};
    }

    a {
      display: flex;
      width: 100%;
      color: ${({ theme }) => theme.colors.primaryLigth};

      & .icons {
        position: relative;
        min-width: 60px;
        height: 60px;
        line-height: 60px;
        text-align: center;
        font-size: 1.5em;
      }
      & .title {
        position: relative;
        display: block;
        height: 60px;
        line-height: 60px;
        white-space: nowrap;
        overflow: hidden;
      }
      &:hover {
        color: ${({ theme }) => theme.colors.primary};
      }
    }
  }

  /* background: #000; */
`;

type Props = {};

export default function Sidebar({}: Props) {
  return (
    <StyledSidebar>
      <ul>
        <li>
          <a href="/">
            <span>
              <i className="icons fa-solid fa-house"></i>
            </span>
            <span className="title">Мои тесты</span>
          </a>
        </li>
        <li>
          <a href="/">
            <span>
              <i className="icons fa-solid fa-circle-plus"></i>
            </span>
            <span className="title">Создать тест</span>
          </a>
        </li>
        <li>
          <a href="/">
            <span>
              <i className="icons fa-solid fa-right-from-bracket"></i>
            </span>
            <span className="title">Выйти</span>
          </a>
        </li>
      </ul>
    </StyledSidebar>
  );
}
