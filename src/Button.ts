import styled from "styled-components";
import { PadBox } from "@bedrock-layout/padbox";

type ButtonProps = {
  primary?: boolean,
};

export const Button = styled(PadBox).attrs(() => ({
  padding: ["md", "xl"],
  as: "button"
}))<ButtonProps>`
  background: ${({ primary = false }) => (primary ? "black" : "white")};
  color: ${({ primary = false }) => (primary ? "white" : "black")};
  border: ${({ primary = false }) => (primary ? "none" : "1px solid black")};
  border-radius: 0.25rem;
`;
