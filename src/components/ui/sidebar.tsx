import { motion } from "framer-motion";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { getIsLoggedIn } from "../../store/users";
import MainContainer from "../styles/mainContainer";
import BackDrop from "./backDrop";

const StyledSidebar = styled(motion.section)`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  bottom: 0;
  background: ${({ theme }) => theme.colors.primary};
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 300px;
  /* @media (max-width: 992px) {
    display: none;
  } */
  ul {
    /* margin-top: 150px; */
    list-style: none;
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
`;

const variants = {
  openMobile: {
    opacity: 1,
    x: 0,
    width: "300px",
  },
  closeMobile: {
    opacity: 0,
    x: "-100%",
  },
  openDeckstop: {
    opacity: 1,
    x: 0,
    width: "300px",
  },
  closeDeckstop: {
    opacity: 1,
    x: 0,
    width: "100px",
  },
};

type SidebarProps = {
  children: JSX.Element | JSX.Element[];
  isOpen: boolean;
  isMobile: boolean;
  onToggleSidebar: () => void;
};
export default function Sidebar({
  children,
  isOpen,
  isMobile,
  onToggleSidebar,
}: SidebarProps) {
  const isAuth = useSelector(getIsLoggedIn());

  return (
    <MainContainer isOpen={isOpen} isMobile={isMobile}>
      <StyledSidebar
        // animate={{
        //   width: isOpen ? "300px" : "100px",
        // }}
        animate={
          isMobile && isOpen
            ? "openMobile"
            : isMobile && !isOpen
            ? "closeMobile"
            : !isMobile && isOpen
            ? "openDeckstop"
            : "closeDeckstop"
        }
        variants={variants}
        initial={false}
      >
        <ul>
          <li>
            <NavLink to="/">
              <span>
                <i className="icons fa-solid fa-house"></i>
              </span>
              <span className="title">Мои тесты</span>
            </NavLink>
          </li>
          {isAuth && (
            <>
              <li>
                <NavLink to="/tests/create">
                  <span>
                    <i className="icons fa-solid fa-circle-plus"></i>
                  </span>
                  <span className="title">Создать тест</span>
                </NavLink>
              </li>
            </>
          )}
        </ul>
        <ul>
          {isAuth ? (
            <>
              <li>
                <NavLink to="/logout">
                  <span>
                    <i className="icons fa-solid fa-right-from-bracket"></i>
                  </span>
                  <span className="title">Выйти</span>
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/login">
                  <span>
                    <i className="icons fa-solid fa-arrow-right-to-bracket"></i>
                  </span>
                  <span className="title">Вход</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/register">
                  <span>
                    <i className="icons fa-solid fa-user-plus"></i>
                  </span>
                  <span className="title">Регистрация</span>
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </StyledSidebar>
      <BackDrop isOpen={isOpen && isMobile} onToggleSidebar={onToggleSidebar} />
      <main>{children}</main>
    </MainContainer>
  );
}
