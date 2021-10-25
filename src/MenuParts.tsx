import styled from "styled-components";
import { PadBox } from "@bedrock-layout/padbox";

// type LogoProps = {
//   size: string
// }
// This is a special styled component where it is instead affecting the attributes
// instead of simply the style. The thing is that this is necessary because
// styled-components generates a new CSS class for each variation encountered.
// To avoid this big performance overhead it will modify the component instead
// of generating a new class.
// https://styled-components.com/docs/api#attrs
export const Logo = styled.div.attrs(() => ({ size: "3rem" }))`
  border-radius: 50%;
  background-color: black;
  inline-size: ${({ size }) => size};
  block-size: ${({ size }) => size};
`;

export const MenuContainer = styled(PadBox).attrs(() => ({ padding: "md" }))`
  border: 1px solid black;
`;

export const Button = styled(PadBox).attrs(() => {
  return {
    as: "button",
    padding: ["md", "lg"]
  };
})`
  background: black;
  color: white;
  border: none;
  border-radius: 0.25rem;
`;
