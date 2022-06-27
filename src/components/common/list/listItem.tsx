import React from "react";
import styled from "styled-components";
import { ITestServer } from "../../../types/types";

const StyledItem = styled.div`
  border: 1px solid lightgrey;
  padding: 20px;
  margin-bottom: 10px;
  transition: all 0.3s ease 0s;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.accentLigth};
  }
`;
interface ITestItemProps {
  item: ITestServer;
  onClick: (item: ITestServer) => void;
}

export const ListItem = ({ item, onClick }: ITestItemProps): JSX.Element => {
  return <StyledItem onClick={() => onClick(item)}>{item.name}</StyledItem>;
};
