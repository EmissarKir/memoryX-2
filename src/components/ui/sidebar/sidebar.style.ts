import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import { IoClose } from "react-icons/io5";

import {
  FaHouseUser,
  FaPlusCircle,
  FaSignInAlt,
  FaSignOutAlt,
  FaUserPlus,
} from "react-icons/fa";

export const SMain = styled.main`
  height: 100%;
`;

export const SLink = styled(NavLink)`
  display: flex;
  width: 100%;
  &.active {
    background-color: ${({ theme }) => theme.colors.primaryLigth};
    color: ${({ theme }) => theme.colors.primary};
    border-radius: 10px;
  }
`;
export const SIconCloseContainer = styled.span`
  margin-left: auto;
  font-size: 45px;
  svg {
    color: ${({ theme }) => theme.colors.defaultLigth};
  }
`;
export const SIconContainer = styled.span`
  position: relative;
  min-width: 60px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  svg {
    font-size: 30px;
    vertical-align: middle;
  }
`;
export const SCloseIcon = styled(IoClose)``;
export const SHomeIcon = styled(FaHouseUser)``;
export const SPlusCircleIcon = styled(FaPlusCircle)``;
export const SSignOutIcon = styled(FaSignOutAlt)``;
export const SSignInIcon = styled(FaSignInAlt)``;
export const SUserPlusIcon = styled(FaUserPlus)``;
export const STextLink = styled.span`
  position: relative;
  display: block;
  height: 60px;
  line-height: 60px;
  white-space: nowrap;
  overflow: hidden;
`;
export const SListItem = styled.li`
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
    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const SSidebar = styled(motion.section)`
  position: fixed;
  z-index: ${({ theme }) => theme.order.sidebar};
  top: 0;
  left: 0;
  bottom: 0;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primaryLigth};
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 300px;
  ul {
    list-style: none;
  }
`;
