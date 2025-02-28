import styled from "styled-components";
import { Colors } from "../../global/colors";

interface ButtonProps {
  width?: string;
  styleType: "default" | "red";
}

export const Button = styled.button<ButtonProps>`
  width: ${(p) => p.width ?? "150px"};
  background-color: ${({ styleType }) =>
    styleType === "red" ? "red" : Colors.darkBlue} !important;
  color: white !important;
  opacity: 0.7;
  padding: 10px;
  margin: 0px 0px 20px 0px !important;
  border-radius: 5px;
  transition: 150ms;

  &:hover {
    opacity: 1;
  }
`;
