import axios from "axios";
import React, { useEffect, useState } from "react";
import UserList, { IUser } from "./groupList-typescript";
import List from "./list";
import UserItem from "./userItem";

const WrapperUserList = () => {
  // указываем тип state массив объектов IUser
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    try {
      // в запросе указываем, что в полученном ответе от сервера будет определенный массив объектов IUser
      const { data } = await axios.get<IUser[]>(
        `https://jsonplaceholder.typicode.com/users`
      );
      setUsers(data);
    } catch (error) {}
  }

  return (
    <List
      items={users}
      renderItem={(user: IUser) => <UserItem user={user} key={user.id} />}
    />
  );
};
export default WrapperUserList;
