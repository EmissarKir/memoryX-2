import {
  DefaultTheme,
  FlattenInterpolation,
  FlattenSimpleInterpolation,
  ThemeProps,
} from "styled-components";

export type QuestionProps = {
  name: string;
};

export interface IColumnQuestionsProps {
  question: QuestionProps;
  answer: QuestionProps;
  count: QuestionProps;
  status: QuestionProps;
  left: QuestionProps;
  createdBy: QuestionProps;
}

export interface IUser {
  name: string;
  email: string;
  password: string;
}
export interface IUserServer {
  userId: string;
  name: string;
  email: string;
  image: string;
  maxCountRepeat: number;
}

export interface IUserLogIn {
  email: string;
  password: string;
}
export interface ITest {
  name: string;
}
export interface ITestServer {
  name: string;
  id: string;
  userId: string | null;
}
export interface ITask {
  question: string;
  answer: string;
}

export interface ITaskServer extends ITask {
  id: string;
  testId: string | null;
  count: number;
  status: string;
  createdBy: number;
  maxRepeat: number;
}

export interface IUpdateValue {
  [key: string]: string | number;
}

export type StyledVariants<E extends string | number> = {
  [key in E]?:
    | FlattenSimpleInterpolation
    | FlattenInterpolation<ThemeProps<DefaultTheme>>;
};
