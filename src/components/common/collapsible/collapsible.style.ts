import styled from "styled-components";
import { FaAngleDown } from "react-icons/fa";

export const SCard = styled.div`
  padding: 100px 50px;
  color: rgb(65, 81, 103);
  border-radius: 15px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  @media ${({ theme }) => theme.media.small} {
    padding: 30px 15px;
  }
`;

export const SAngleDown = styled(FaAngleDown)`
  font-size: 1.5rem;
  margin-left: 0.7rem;
`;

export const SCardExercise = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  @media ${({ theme }) => theme.media.small} {
    margin-bottom: 10px;
  }
`;
export const SText = styled.div`
  overflow: hidden;
`;
