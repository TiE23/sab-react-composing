import styled from "styled-components";

type LogoProps = {
  size: string,
  inverse?: boolean,
  square?: boolean,
};

export const Logo = styled.div<LogoProps>`
  --size: ${({ size }) => size};
  background: ${({ inverse = false }) => inverse ? "black" : "white"};
  width: var(--size);
  height: var(--size);
  ${({ square = false }) => !square && "border-radius: 50%;"}
`;
