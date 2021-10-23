import styled from "styled-components";

import { Form } from "./Form";

import { Fractions, ShirtSizes } from "./types";
import { SPACING_MAP, FRACTIONS } from "./consts";

type SplitProps = {
  gutter?: ShirtSizes,
  fraction?: Fractions,
};

const Split = styled.div<SplitProps>`
  display: grid;
  gap: ${({ gutter }) => SPACING_MAP[gutter ?? "lg"]};
  grid-template-columns: ${({ fraction }) => FRACTIONS[fraction ?? "1/2"]};
`;
// The fr unit -> https://css-tricks.com/introduction-fr-css-unit/

export function FormSideBar() {
  return (
    <Split gutter="sm" fraction="1/4">
      <div>
        <h2>Personal Information</h2>
        <span>The information you provide will be displayed publicly.</span>
      </div>
      <Form />
    </Split>
  );
}
