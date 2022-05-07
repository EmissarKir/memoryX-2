import React from "react";
import styled from "styled-components";
import { IUser } from "./groupList-typescript";

type UserItemProps = {
  user: IUser;
};

const StyledUserItem = styled.div`
  border: 1px solid lightgrey;
  padding: 20px;
  margin-bottom: 10px;
`;

const UserItem = ({ user }: UserItemProps): JSX.Element => {
  return (
    <StyledUserItem>
      {user.id}. {user.name} проживает в городе {user.address.city} на улице
      &nbsp;
      {user.address.street}
    </StyledUserItem>
  );
};
export default UserItem;
