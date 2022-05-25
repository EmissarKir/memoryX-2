import React from "react";
import styled from "styled-components";
import { StyledPage, StyledTextMuted } from "../../styles/styles";
import Flex from "../styles/flex";

const StyledPageContainer = styled.div`
  width: 450px;
  & > *:not(:last-child) {
    margin-bottom: 30px;
  }

  @media ${({ theme }) => theme.media.large} {
    width: 100%;
    padding: 0px 20px;
  }
`;

type WrapperPageProps = {
  children: JSX.Element | JSX.Element[];
};

const WrapperPage: React.FC<WrapperPageProps> = ({ children }) => {
  return (
    <StyledPage>
      <Flex justify="center" align="center" direction="column">
        <StyledPageContainer>{children}</StyledPageContainer>
      </Flex>
    </StyledPage>
  );
};

export default WrapperPage;
