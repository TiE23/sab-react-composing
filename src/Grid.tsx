import { Card } from "./Card";
import styled from "styled-components";

import { SPACING_MAP } from "./consts";
import { ShirtSizes } from "./types";

type GridProps = {
  gutter?: ShirtSizes,
  minWidth?: string;
};

const Grid = styled.div<GridProps>`
  display: grid;
  gap: ${({ gutter = "lg" }) => SPACING_MAP[gutter]};
  /* Wow, this is fuckin' cool. Auto-magical responsive sizing! */
  /* grid-template-columns: repeat(auto-fit, minmax(24rem, 1fr)); */
  grid-template-columns: repeat(
    auto-fit,
    minmax(
      min(
        ${({ minWidth = "320px" }) => minWidth},
        100%  /* Guarantees you won't overflow off page. */
      ),
    1fr)  /* DO NOT USE TRAILING COMMAS!! */
  );
`;

export default function ContactList() {
  return (
    <Grid minWidth="24rem" gutter="xl">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </Grid>
  );
}
