import * as React from "react";
import styled from "styled-components";

interface ButtonProps {
  color?: string;
  colorBg?: string;
}
const StyledButton = styled.button<ButtonProps>`
  position: relative;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  color: ${({ color = "#fff" }) => color};
  background: ${({ colorBg = "green" }) => colorBg};
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  letter-spacing: 0.15em;
  border: 2px solid #0f0;
  /* border-radius: 0.25rem; */
  font-weight: 600;
  text-transform: uppercase;
  transition: all 0.3s ease 0s;

  &::before {
    content: "";
    position: absolute;
    left: -20px;
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
    height: 2px;
    background: #0f0;
    box-shadow: 10px -5px 0 #0f0, 10px 5px 0 #0f0;
  }

  &:hover {
    background: #024d02;
  }
`;

const Button: React.FC<ButtonProps> = ({ color, colorBg }) => {
  return (
    <StyledButton color={color} colorBg={colorBg}>
      Press me
    </StyledButton>
  );
};
export default Button;
