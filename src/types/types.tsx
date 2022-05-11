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
