import React, { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/createStore";

import { logOut } from "../store/users";

const LogOut: FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(logOut());
  }, []);
  return <h1>Loading...</h1>;
};

export default LogOut;
