import styled from "styled-components";

import { ShirtSizes } from "./types";
import { GUTTER_SIZES } from "./consts";

type StackProps = {
  gutter?: ShirtSizes,
};

const Stack = styled.div<StackProps>`
  display: grid;
  gap: ${(props) => GUTTER_SIZES[props?.gutter ?? "lg"]};
`;

// Alternative definitions of gap I tried:
//  gap: ${(props) => props?.gutter ? GUTTER_SIZES[props.gutter] : GUTTER_SIZES.lg };
//  gap: ${(props) => (props.gutter && GUTTER_SIZES[props.gutter]) ?? GUTTER_SIZES.lg };
// Without typescript the author just used:
//  gap: ${(props) => GUTTER_SIZES[props.gutter] ?? GUTTER_SIZES.lg};

export default function Subscribe() {
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
