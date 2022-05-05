import React, { useState } from "react";
import styled from "styled-components";
import TextFiled from "../common/forms/textFiled";
import HeaderQustionsPage from "../ui/headerQustionsPage";
import QuestionsTable from "../ui/questionsTable";

const StyledQuestionsPage = styled.div`
  margin: 0 30px 0px 30px;
`;

type Props = {};

type InitialProps = {
  search: string;
};

export default function QuestionsPage({}: Props) {
  const [data, setData] = useState<InitialProps>({
    search: "",
  });

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };
  return (
    <StyledQuestionsPage>
      <HeaderQustionsPage />
      <div>
        <TextFiled
          type="text"
          placeholder="Найти вопрос"
          name="search"
          value={data.search}
          onChange={changeHandler}
        />
      </div>
      <QuestionsTable />
    </StyledQuestionsPage>
  );
}
