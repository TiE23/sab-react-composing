import styled from "styled-components";

import { ShirtSizes } from "./types";
import { SPACING_MAP } from "./consts";

type StackProps = {
  gutter?: ShirtSizes,
};

export const Stack = styled.div<StackProps>`
  display: grid;
  gap: ${(props) => SPACING_MAP[props?.gutter ?? "lg"]};
`;
// Alternative definitions of gap I tried:
//  gap: ${(props) => props?.gutter ? SPACING_MAP[props.gutter] : SPACING_MAP.lg };
//  gap: ${(props) => (props.gutter && SPACING_MAP[props.gutter]) ?? SPACING_MAP.lg };
// Without typescript the author just used:
//  gap: ${(props) => SPACING_MAP[props.gutter] ?? SPACING_MAP.lg};


export function Subscribe() {
  return (
    <Stack gutter="xl">
      <Stack gutter="md">
        <h2>Subscribe To Our Newsletter</h2>
        <p>
          Subscribe to our newsletter to keep up to date on all our amazing
          products.
        </p>
      </Stack>

      <Stack>
        <Stack gutter="sm">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" />
        </Stack>

        <Stack gutter="sm">
          <label htmlFor="email">Email</label>
          <input type="text" id="email" />
        </Stack>

        <button>Subscribe</button>
      </Stack>
    </Stack>
  );
}
