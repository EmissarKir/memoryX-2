import { IUserLogIn } from "./../types/types";
import axios from "axios";

export const httpAuth = axios.create({
  baseURL: "https://identitytoolkit.googleapis.com/v1/",
  params: { key: process.env.REACT_APP_API_KEY },
});
const authService = {
  register: async ({ email, password }: IUserLogIn) => {
    const { data } = await httpAuth.post(`accounts:signUp`, {
      email,
      password,
      returnSecureToken: true,
    });
    return data;
  },
  login: async ({ email, password }: IUserLogIn) => {
    const { data } = await httpAuth.post(`accounts:signInWithPassword`, {
      email,
      password,
      returnSecureToken: true,
    });
    return data;
  },
};
export default authService;
