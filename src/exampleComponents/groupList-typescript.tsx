import React from "react";
import styled from "styled-components";
import UserItem from "./userItem";

const StyledUserList = styled.div`
  margin: 50px;
`;

interface IAddress {
  street: string;
  city: string;
  zipcode: string;
}

export interface IUser {
  id: number;
  name: string;
  email: string;
  address: IAddress;
}
interface IUserListProps {
  users: IUser[];
}

const UserList: React.FC<IUserListProps> = ({ users }) => {
  return (
    <StyledUserList>
      {users.map((item) => (
        <UserItem key={item.id} user={item} />
      ))}
    </StyledUserList>
  );
};
export default UserList;
