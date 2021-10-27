import React from "react";
import { InlineCluster } from "@bedrock-layout/inline-cluster";
import { Stack } from "@bedrock-layout/stack";
import styled from "styled-components";

import { Button } from "./Button";
import { ShirtSizes } from "./types";
import { SPACING_MAP } from "./consts";

type CoverProps = {
  top?: React.ReactNode,
  bottom?: React.ReactNode,
  gutter?: ShirtSizes,
  minHeight?: string,
}

/**
 * Here's the proper way to set the CoverProps type for an attrs() call.
 */
const Cover = styled.div.attrs<CoverProps>(({ children, top, bottom}) => {
  return {
    children: (
      <>
        {top && <div>{top}</div>}
        <div data-cover-child>{children}</div>
        {bottom && <div>{bottom}</div>}
      </>
    ),
  };
/* And for the template the CoverProps goes here. */
})<CoverProps>`
  display: grid;
  gap: ${({ gutter = "lg" }) => SPACING_MAP[gutter]};
  min-block-size: ${({ minHeight = "100vh" }) => minHeight};

  /* This is a complex selection logic where depending on which is present
   * determines the spacing on the rows. Remember to pay attention to the
   * shorthand being used.
   * -> https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties */
  grid-template-rows: ${({ top, bottom }) => (
    top && bottom
    ? "auto 1fr auto" /* Auto top and bottom, 1fr sides */
    : top
    ? "auto 1fr" /* Auto top and bottom */
    : bottom
    ? "1fr auto"
    : "1fr"
  )};

  /* Getting any element with this attribute. This is better than using an ID
   * or class because they're global and can cause unforeseen issues. */
  > [data-cover-child] {
    align-self: center;
  }
`;

export default function Hero() {
  return (
    <Cover
      gutter="xxl"
      minHeight="100vh"
      top={
        <InlineCluster gutter="xl" justify="end">
          <span>Places to stay</span>
          <span>Popular experiences</span>
          <span>Manage your booking</span>
          <span>List your property</span>
        </InlineCluster>
      }
      bottom={
        <InlineCluster gutter="xl" justify="center">
          <a href="/#">Keep Reading to learn more</a>
        </InlineCluster>
      }
    >
      <Stack gutter="lg">
        <h1>Home4Hire</h1>
        <span>Stay here and relax</span>
        <InlineCluster gutter="lg">
          <Button primary>Get started</Button>
          <Button>Sign in</Button>
        </InlineCluster>
      </Stack>
    </Cover>
  );
}
