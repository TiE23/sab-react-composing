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
  display: grid;
  gap: ${({ gutter = "lg" }) => SPACING_MAP[gutter]};
  grid-template-columns: repeat(${({ columns = 1}) => columns}, 1fr);
`;

type ColumnProps = {
  $span?: number, // Dollar sign because "span" is a reserved CSS keyword.
};

export const Column = styled.div<ColumnProps>`
  grid-column: span ${({ $span = 1 }) => $span};
`;

export function Form() {
  return (
    <Columns gutter="xl" columns={3}>
      <Column>
        <FormGroup htmlFor="firstName" label="First Name">
          <input type="text" id="firstName" />
        </FormGroup>
      </Column>

      <Column>
        <FormGroup htmlFor="lastName" label="Last Name">
          <input type="text" id="lastName" />
        </FormGroup>
      </Column>

      <Column>
        <FormGroup htmlFor="email" label="Email">
          <input type="text" id="email" />
        </FormGroup>
      </Column>

      <Column>
        <FormGroup htmlFor="address" label="Street Address">
          <input type="text" id="address" />
        </FormGroup>
      </Column>

      <Column>
        <FormGroup htmlFor="city" label="City">
          <input type="text" id="city" />
        </FormGroup>
      </Column>

      <Column>
        <FormGroup htmlFor="state" label="State">
          <input type="text" id="state" />
        </FormGroup>
      </Column>

      <Column>
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
