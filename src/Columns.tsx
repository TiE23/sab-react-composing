import { FC, PropsWithChildren } from "react";
import styled from "styled-components";

import { Stack } from "./Stack";
import { SPACING_MAP } from "./consts";

import { ShirtSizes } from "./types";

type ColumnsProps = {
  gutter?: ShirtSizes,
  columns?: number,
};

export const Columns = styled.div<ColumnsProps>`
  --columns: ${({ columns = 1 }) => columns};
  display: grid;
  gap: ${({ gutter = "lg" }) => SPACING_MAP[gutter]};
  grid-template-columns: repeat(var(--columns), 1fr);
`;

type ColumnProps = {
  $span?: number, // Dollar sign because "span" is a reserved CSS keyword.
};

// Using min() we're able to get columns prop from parent and make sure we don't
// let you make the span wider than makes sense (like, span of 4 on 3 columns
// layout) - super cool!
export const Column = styled.div<ColumnProps>`
  grid-column: span min(${({ $span = 1 }) => $span}, var(--columns));
`;

export function Form() {
  return (
    <Columns gutter="xl" columns={3}>
      <Column $span={1}>
        <FormGroup htmlFor="firstName" label="First Name">
          <input type="text" id="firstName" />
        </FormGroup>
      </Column>

      <Column $span={2}>
        <FormGroup htmlFor="lastName" label="Last Name">
          <input type="text" id="lastName" />
        </FormGroup>
      </Column>

      <Column $span={3}>
        <FormGroup htmlFor="email" label="Email">
          <input type="text" id="email" />
        </FormGroup>
      </Column>

      <Column $span={3}>
        <FormGroup htmlFor="address" label="Street Address">
          <input type="text" id="address" />
        </FormGroup>
      </Column>

      <Column $span={1}>
        <FormGroup htmlFor="city" label="City">
          <input type="text" id="city" />
        </FormGroup>
      </Column>

      <Column $span={1}>
        <FormGroup htmlFor="state" label="State">
          <input type="text" id="state" />
        </FormGroup>
      </Column>

      <Column $span={1}>
        <FormGroup htmlFor="zipCode" label="Zip Code">
          <input type="text" id="zipCode" />
        </FormGroup>
      </Column>
    </Columns>
  );
}

type FormGroupProps = {
  htmlFor: string,
  label: string,
};

const FormGroup: FC<PropsWithChildren<FormGroupProps>> = (props) => {
  return (
    <Stack gutter="md">
      <label htmlFor={props.htmlFor}>{props.label}</label>
      {props.children}
    </Stack>
  );
};
