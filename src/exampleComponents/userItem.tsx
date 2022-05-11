import React from "react";
import styled from "styled-components";
import { ITestServer } from "../types/types";

const StyledItem = styled.div`
  border: 1px solid lightgrey;
  padding: 20px;
  margin-bottom: 10px;
`;

const UserItem = ({ item }: { item: ITestServer }): JSX.Element => {
  return <StyledItem>{item.name}</StyledItem>;
};
export default UserItem;
