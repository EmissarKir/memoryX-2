import React, { PropsWithChildren, ReactElement, ReactNode } from "react";
import styled from "styled-components";
import { useResponsive } from "../../hooks/useResponsive";
import Text from "../common/text";

const StyledControlPanel = styled.div`
  min-height: ${({ theme }) => theme.heigthControlPanel};
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  @media ${({ theme }) => theme.media.medium} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
const StyledChildren = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  & > * {
    margin-bottom: 10px;
  }
  & > *:not(:last-child) {
    margin-right: 10px;
    @media ${({ theme }) => theme.media.medium} {
      margin-right: 0;
    }
  }
`;

type Props = {
  title: string;
  children?: React.ReactNode;
};

export default function ControlPanel({ title, children }: Props) {
  const isMobile = useResponsive(720);
  const clonedElements = React.Children.map<ReactNode, ReactNode>(
    children,
    (child) => {
      const item = child as ReactElement<PropsWithChildren<Props>>;
      let config = {};

      if (typeof item.type === "function") {
        config = { ...item.props, width: isMobile ? "full" : "default" };
      }
      return React.cloneElement(item, config);
    }
  );

  return (
    <StyledControlPanel>
      <Text size="l" weight="bold" align={isMobile ? "center" : "left"}>
        {title}
      </Text>
      <StyledChildren>{clonedElements}</StyledChildren>
    </StyledControlPanel>
  );
}
