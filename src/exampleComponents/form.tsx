import React, { useState } from "react";
import styled from "styled-components";
import TextFiled from "../components/common/forms/textFiled";

type Props = {};

type InitialProps = {
  name: string;
  email: string;
  password: string;
};

const StyledForm = styled.div<Props>`
  width: 450px;
  height: 600px;
  background: #eaf6ff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 25px 25px 50px rgba(9, 148, 255, 0.25),
    -10px -10px 30px rgba(9, 148, 255, 0.1),
    inset -5px -5px 15px rgba(9, 148, 255, 0.5);
  & form {
    position: relative;
    width: 100%;
  }

  & h2 {
    color: #0994ff;
    font-size: 2em;
    letter-spacing: 2px;
    margin-bottom: 30px;
    font-weight: 600;
    text-transform: uppercase;
  }
`;

export default function Form({}: Props) {
  const [data, setData] = useState<InitialProps>({
    name: "",
    email: "",
    password: "",
  });

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <StyledForm>
      <h2>Log in</h2>
      <form>
        <TextFiled
          name="name"
          placeholder="Введите имя"
          type="text"
          value={data.name}
          onChange={changeHandler}
        />
        <TextFiled
          label="Email"
          name="email"
          type="email"
          value={data.email}
          onChange={changeHandler}
        />
        <TextFiled
          label="Password"
          name="password"
          type="password"
          value={data.password}
          onChange={changeHandler}
        />
      </form>
    </StyledForm>
  );
}
